import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// notifyOwnerをモック
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should successfully submit a contact form with all fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "山田 太郎",
      company: "株式会社テスト",
      email: "test@example.com",
      tel: "090-1234-5678",
      address: "大阪府大阪市",
      message: "テストメッセージです",
    });

    expect(result).toEqual({
      success: true,
      message: "お問い合わせを受け付けました。担当者よりご連絡いたします。",
    });
  });

  it("should successfully submit a contact form with required fields only", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "山田 太郎",
      email: "test@example.com",
      tel: "090-1234-5678",
    });

    expect(result).toEqual({
      success: true,
      message: "お問い合わせを受け付けました。担当者よりご連絡いたします。",
    });
  });

  it("should reject submission with missing name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "",
        email: "test@example.com",
        tel: "090-1234-5678",
      })
    ).rejects.toThrow();
  });

  it("should reject submission with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "山田 太郎",
        email: "invalid-email",
        tel: "090-1234-5678",
      })
    ).rejects.toThrow();
  });

  it("should reject submission with missing tel", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "山田 太郎",
        email: "test@example.com",
        tel: "",
      })
    ).rejects.toThrow();
  });
});
