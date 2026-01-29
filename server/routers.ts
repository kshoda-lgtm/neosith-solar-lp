import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";
import { z } from "zod";

// お問い合わせフォームのバリデーションスキーマ
const contactFormSchema = z.object({
  name: z.string().min(1, "お名前は必須です"),
  company: z.string().optional(),
  email: z.string().email("有効なメールアドレスを入力してください"),
  tel: z.string().min(1, "電話番号は必須です"),
  address: z.string().optional(),
  message: z.string().optional(),
});

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // お問い合わせフォーム
  contact: router({
    submit: publicProcedure
      .input(contactFormSchema)
      .mutation(async ({ input }) => {
        // 通知内容を構築
        const title = `【お問い合わせ】${input.name}様より`;
        const content = `
■ お問い合わせ内容

【お名前】${input.name}
【会社名】${input.company || "未入力"}
【メールアドレス】${input.email}
【電話番号】${input.tel}
【発電所住所】${input.address || "未入力"}
【お問い合わせ内容】
${input.message || "未入力"}

---
このメールは太陽光発電所除草サービスLPのお問い合わせフォームから送信されました。
        `.trim();

        // オーナーに通知を送信
        const notificationSent = await notifyOwner({ title, content });

        if (!notificationSent) {
          console.error("[Contact] Failed to send notification");
          // 通知が失敗しても、ユーザーにはエラーを返さない（後で確認できるようにログに残す）
        }

        return {
          success: true,
          message: "お問い合わせを受け付けました。担当者よりご連絡いたします。",
        };
      }),
  }),
});

export type AppRouter = typeof appRouter;
