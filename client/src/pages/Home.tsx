import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Leaf, Phone, ShieldCheck, Sun, AlertTriangle, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("お問い合わせありがとうございます。担当者よりご連絡いたします。");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col font-body text-foreground bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/images/logo-ageful-transparent.png" alt="株式会社エイジフル" className="h-12 w-auto" />
            <div className="flex flex-col justify-center h-12">
              <span className="font-heading font-bold text-sm text-primary leading-tight">株式会社エイジフル</span>
              <span className="text-[10px] text-muted-foreground font-medium leading-tight">株式会社ネオシス メンテナンス部門</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#problem" className="hover:text-primary transition-colors">除草の重要性</a>
            <a href="#service" className="hover:text-primary transition-colors">サービス内容</a>
            <a href="#price" className="hover:text-primary transition-colors">料金プラン</a>
            <a href="#contact" className="hover:text-primary transition-colors">お問い合わせ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:05071168033" className="hidden md:flex items-center gap-2 text-primary font-bold">
              <Phone className="h-4 w-4" />
              050-7116-8033
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-heading" asChild>
              <a href="#contact">無料見積もり</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero_clean.png" 
              alt="美しく管理された太陽光発電所" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="container relative z-10 text-center text-white px-2 sm:px-4">
            <div className="inline-block relative p-6 sm:p-12 mb-6">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.2)_0%,_rgba(255,255,255,0)_70%)] backdrop-blur-[2px] rounded-full pointer-events-none"></div>
              <h1 className="relative z-10 font-heading text-[1.75rem] sm:text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-md tracking-tight">
                <span className="inline-block">太陽光発電の効率を、</span><br />
                <span className="inline-block"><span className="text-[#54ff0a] drop-shadow-md">草刈り</span>で最大化する。</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
              <span className="inline-block">雑草による</span><span className="inline-block">発電量低下を防ぎ、</span><span className="inline-block">資産価値を守ります。</span><br className="hidden md:inline" />
              <span className="inline-block">年3回の</span><span className="inline-block">定期管理で、</span><span className="inline-block">いつでもクリーンな</span><span className="inline-block">発電所へ。</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full text-lg px-8 font-heading" asChild>
                <a href="#contact">今すぐ相談する</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/50 hover:bg-white/20 rounded-full text-lg px-8 backdrop-blur-sm" asChild>
                <a href="#service">サービス詳細を見る</a>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Problem Section */}
        <section id="problem" className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Problem</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
                <span className="inline-block">こんなお悩み</span>
                <span className="inline-block">ありませんか？</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed [word-break:auto-phrase]">
                太陽光発電所の管理において、雑草は最大の敵です。<br className="hidden md:inline" />
                放置することで様々なリスクが発生します。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/problem_overgrown.png" 
                  alt="雑草が生い茂った太陽光発電所" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-yellow-400" />
                    <span className="font-bold text-lg">放置された発電所の現状</span>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <Sun className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2">発電効率の低下</h3>
                    <p className="text-muted-foreground">
                      パネルに影がかかることで、発電量が大幅にダウン。ホットスポット現象によるパネル故障の原因にもなります。
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2">近隣トラブルのリスク</h3>
                    <p className="text-muted-foreground">
                      景観の悪化や害虫の発生により、近隣住民からのクレームにつながる可能性があります。
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2">資産価値の毀損</h3>
                    <p className="text-muted-foreground">
                      適切な管理がされていない発電所は、売却時の査定額が下がる要因となります。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution/Service Section */}
        <section id="service" className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-20 bg-background clip-wave-bottom transform rotate-180"></div>
          
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Solution</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
                <span className="inline-block">エイジフルの</span>
                <span className="inline-block">除草サービス</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto [word-break:auto-phrase]">
                手作業による丁寧な草刈りと、効果的な除草剤散布を組み合わせた<br className="hidden md:inline" />
                最適なメンテナンスプランをご提案します。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/images/worker_trimming.png" 
                    alt="丁寧な手作業による草刈り" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">1</span>
                    丁寧な機械刈り
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    熟練のスタッフが手持ちの機械を使用し、パネルの下や支柱周りなど、細かい部分まで丁寧に刈り取ります。パネルを傷つける心配もありません。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/images/herbicide_spray.png" 
                    alt="効果的な除草剤散布" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">2</span>
                    除草剤散布
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    草刈り後に適切な除草剤を散布することで、雑草の再生を抑制。効果を長持ちさせ、次回の作業までの期間も綺麗な状態を保ちます。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/images/before_after_comparison.png" 
                    alt="年3回の定期管理" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">3</span>
                    年3回の定期管理
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    雑草の成長サイクルに合わせた年3回の実施で、年間を通じて発電所をベストな状態に保ちます。スポット依頼よりもコストパフォーマンスに優れています。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Price Section */}
        <section id="price" className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Price Plan</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
                <span className="inline-block">シンプルで明瞭な</span>
                <span className="inline-block">料金設定</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                追加費用の心配がない、安心のパッケージプランをご用意しました。
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="border-2 border-primary/20 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-6 py-2 font-bold rounded-bl-xl z-10">
                  おすすめ
                </div>
                <div className="grid md:grid-cols-2">
                  <div className="p-8 bg-primary/5 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-primary/10">
                    <h3 className="font-heading text-2xl font-bold mb-2">年間管理プラン</h3>
                    <p className="text-muted-foreground mb-6">低圧発電所（50kW未満）向け</p>
                    <div className="text-5xl font-bold text-primary mb-2">
                      80,000<span className="text-xl font-normal text-muted-foreground">円</span>
                    </div>
                    <p className="text-sm text-muted-foreground">（税別 / 年間）</p>
                  </div>
                  <div className="p-8">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>年3回の草刈り作業・除草剤の散布</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>作業完了報告書の提出</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>関東、中部、関西、中国、四国、九州
エリア対応</span>
                      </li>
                    </ul>
                    <div className="mt-8">
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-heading" asChild>
                        <a href="#contact">このプランで相談する</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
              <p className="text-center text-sm text-muted-foreground mt-6">
                ※発電所の面積や立地条件により費用が変動する場合がございます。まずはお気軽にお見積りをご依頼ください。
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <span className="font-bold tracking-wider uppercase text-sm opacity-80">Contact Us</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">お問い合わせ・お見積り</h2>
                <p className="text-lg opacity-90 mb-8">
                  発電所の除草に関するご相談、お見積りは無料です。<br />
                  お急ぎの方はお電話でも承っております。
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <div className="bg-secondary p-3 rounded-full text-secondary-foreground">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm opacity-80">お電話でのお問い合わせ</p>
                      <a href="tel:05071168033" className="text-2xl font-bold hover:text-secondary transition-colors">050-7116-8033</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <div className="bg-secondary p-3 rounded-full text-secondary-foreground">
                      <Leaf className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm opacity-80">メールでのお問い合わせ</p>
                      <a href="mailto:info.support@ageful.co.jp" className="text-xl font-bold hover:text-secondary transition-colors">info.support@ageful.co.jp</a>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-white text-foreground border-none shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-center font-heading">お問い合わせフォーム</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">お名前 <span className="text-red-500">*</span></Label>
                        <Input id="name" placeholder="山田 太郎" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">会社名</Label>
                        <Input id="company" placeholder="株式会社〇〇" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">メールアドレス <span className="text-red-500">*</span></Label>
                        <Input id="email" type="email" placeholder="example@email.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tel">電話番号 <span className="text-red-500">*</span></Label>
                        <Input id="tel" type="tel" placeholder="090-1234-5678" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">発電所住所</Label>
                      <Input id="address" placeholder="大阪府〇〇市..." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">お問い合わせ内容</Label>
                      <Textarea id="message" placeholder="現在の状況やご要望などをご記入ください" className="min-h-[120px]" />
                    </div>
                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-heading text-lg h-12" disabled={isSubmitting}>
                      {isSubmitting ? "送信中..." : "送信する"}
                      {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#f2f2eb] text-muted-foreground py-12 border-t border-[#e6e6da]">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/logo-ageful-transparent.png" alt="株式会社エイジフル" className="h-12 w-auto" />
                <div className="flex flex-col justify-center h-12">
                  <span className="font-heading font-bold text-lg text-primary leading-tight">株式会社エイジフル</span>
                  <span className="text-[10px] text-muted-foreground font-medium leading-tight">株式会社ネオシス<br/>メンテナンス部門</span>
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed">
                太陽光発電所の除草・管理を通じて、<br />
                クリーンエネルギーの安定供給と<br />
                地域の環境保全に貢献します。
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">メニュー</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">トップページ</a></li>
                <li><a href="#problem" className="hover:text-primary transition-colors">除草の重要性</a></li>
                <li><a href="#service" className="hover:text-primary transition-colors">サービス内容</a></li>
                <li><a href="#price" className="hover:text-primary transition-colors">料金プラン</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">会社情報</h4>
              <ul className="space-y-2 text-sm">
                <li>株式会社エイジフル</li>
                <li><a href="http://neosith.co.jp" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-xs flex items-center gap-1 mt-1">関連会社: 株式会社ネオシス <ArrowRight className="h-3 w-3" /></a></li>
                <li>Tel: 050-7116-8033</li>
                <li>Email: info.support@ageful.co.jp</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} Ageful Co., Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
