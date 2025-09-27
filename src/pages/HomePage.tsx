import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MagicWandIcon, SalesPageIcon, CheckoutIcon, IntegrationIcon, HeroIllustration } from '@/components/MagicIcons';
import { Copy, Check } from 'lucide-react';
const Header = () => (
  <header className="py-6">
    <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <MagicWandIcon className="w-8 h-8 text-brand-purple" />
        <h1 className="text-2xl font-bold text-gray-800">Prompt Mágico</h1>
      </div>
      <Button
        onClick={() => document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-brand-pink text-white hover:bg-brand-pink/90 transition-all duration-200 hover:scale-105 active:scale-95"
      >
        Gerar Prompt
      </Button>
    </div>
  </header>
);
const Hero = () => (
  <section className="py-20 md:py-28 text-center">
    <div className="max-w-5xl mx-auto px-4 flex flex-col items-center space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-7xl font-fredericka text-brand-purple"
      >
        Crie Prompts Mágicos
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-600 max-w-2xl"
      >
        Transforme suas ideias em cópias de alta conversão com o poder da IA. Gere prompts perfeitos para páginas de vendas, checkouts e integrações de pagamento em segundos.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button
          size="lg"
          onClick={() => document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-brand-pink text-white text-lg px-8 py-6 rounded-2xl shadow-lg hover:bg-brand-pink/90 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          Começar a Criar Magia
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.6, type: 'spring', stiffness: 100 }}
        className="mt-12 w-full max-w-3xl"
      >
        <HeroIllustration className="w-full h-auto" />
      </motion.div>
    </div>
  </section>
);
const features = [
  {
    icon: <SalesPageIcon className="w-10 h-10 text-brand-purple" />,
    title: 'Páginas de Vendas',
    description: 'Crie textos persuasivos que capturam a atenção e convertem visitantes em clientes.',
  },
  {
    icon: <CheckoutIcon className="w-10 h-10 text-brand-purple" />,
    title: 'Checkouts de Alta Conversão',
    description: 'Gere prompts para construir páginas de checkout que minimizam o abandono de carrinho.',
  },
  {
    icon: <IntegrationIcon className="w-10 h-10 text-brand-purple" />,
    title: 'Integração ClicPay',
    description: 'Obtenha guias passo a passo para integrar o sistema de pagamento ClicPay sem dores de cabeça.',
  },
];
const Features = () => (
  <section className="py-20 md:py-28 bg-white rounded-3xl">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-fredericka text-center text-brand-purple mb-16">
        Ferramentas Mágicas à sua Disposição
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="text-center p-8 h-full rounded-2xl shadow-lg border-2 border-transparent hover:border-brand-pink transition-all duration-300">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
const PromptGenerator = () => {
  const [salesPageData, setSalesPageData] = useState({ product: '', audience: '', pain: '', solution: '' });
  const [checkoutData, setCheckoutData] = useState({ product: '', price: '', guarantee: '', scarcity: '' });
  const [clicpayData, setClicpayData] = useState({ platform: '', language: '' });
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);
  const handleGenerateSalesPage = () => {
    const prompt = `Crie uma copy para uma página de vendas de um produto digital.
**Produto:** ${salesPageData.product || '[Nome do Produto]'}
**Público-alvo:** ${salesPageData.audience || '[Descrição do Público]'}
**Principal dor do público:** ${salesPageData.pain || '[Dor Principal]'}
**Como o produto resolve essa dor:** ${salesPageData.solution || '[Solução oferecida pelo produto]'}
**Estrutura da Copy:**
1.  **Headline Impactante:** Uma frase curta e poderosa que chame a atenção.
2.  **Sub-headline:** Elabore a promessa da headline.
3.  **Apresentação do Problema:** Conecte-se com a dor do público.
4.  **Apresentação da Solução:** Introduza o produto como a solução definitiva.
5.  **Benefícios:** Liste de 5 a 7 benefícios claros e tangíveis.
6.  **Prova Social:** Inclua um espaço para depoimentos.
7.  **Oferta:** Detalhe o que o cliente irá receber.
8.  **Chamada para Ação (CTA):** Um comando claro para a compra.`;
    setGeneratedPrompt(prompt);
    outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  const handleGenerateCheckout = () => {
    const prompt = `Crie um prompt para gerar o design e os elementos de uma página de checkout de alta conversão.
**Produto:** ${checkoutData.product || '[Nome do Produto]'}
**Preço:** ${checkoutData.price || '[Preço do Produto]'}
**Garantia:** ${checkoutData.guarantee || '[Detalhes da Garantia]'}
**Elemento de Escassez/Urgência:** ${checkoutData.scarcity || '[Ex: Vagas limitadas, oferta termina em X horas]'}
**Elementos a serem incluídos no prompt para a IA:**
1.  **Layout Limpo e Focado:** Design minimalista, sem distrações.
2.  **Resumo do Pedido:** Lista clara do que está sendo comprado e o preço.
3.  **Campos Essenciais:** Apenas os campos necessários (Nome, Email, Pagamento).
4.  **Selo de Segurança:** Ícones que transmitam confiança (cadeado, selos de segurança).
5.  **Prova Social:** Um ou dois depoimentos curtos.
6.  **Garantia Visível:** Destaque a política de garantia.
7.  **CTA Único e Claro:** Um botão de "Comprar Agora" ou "Finalizar Compra" bem visível.
8.  **Escassez/Urgência:** Um contador ou aviso sobre a oferta limitada.`;
    setGeneratedPrompt(prompt);
    outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  const handleGenerateClicpay = () => {
    const prompt = `Crie um guia passo a passo para integrar a plataforma de pagamento ClicPay.
**Plataforma/Site:** ${clicpayData.platform || '[Ex: WordPress, Loja Integrada, desenvolvimento próprio]'}
**Linguagem de Programação (se aplicável):** ${clicpayData.language || '[Ex: PHP, JavaScript, Python]'}
**Estrutura do Guia:**
1.  **Pré-requisitos:** O que é necessário antes de começar (Conta ClicPay, chaves de API, etc.).
2.  **Obtendo as Credenciais:** Onde encontrar a API Key e a API Secret na dashboard da ClicPay.
3.  **Instalação (se for plugin/módulo):** Como instalar o plugin da ClicPay na plataforma ${clicpayData.platform || '[Plataforma]'}.
4.  **Configuração:** Como inserir as credenciais da API na área de configuração.
5.  **Exemplo de Código (se for desenvolvimento próprio):** Um exemplo de código em ${clicpayData.language || '[Linguagem]'} para iniciar uma transação.
6.  **Webhook de Confirmação:** Como configurar o webhook para receber a confirmação de pagamento.
7.  **Teste:** Como realizar uma transação de teste para garantir que tudo está funcionando.`;
    setGeneratedPrompt(prompt);
    outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  const handleCopy = () => {
    if (generatedPrompt) {
      navigator.clipboard.writeText(generatedPrompt);
      setIsCopied(true);
      toast.success('Prompt copiado para a área de transferência!');
      setTimeout(() => setIsCopied(false), 2000);
    }
  };
  return (
    <section id="generator" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-fredericka text-center text-brand-purple mb-4">
          Gerador de Prompts
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Selecione o tipo de prompt, preencha os campos e deixe a mágica acontecer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Tabs defaultValue="sales-page" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-purple-100 rounded-2xl p-2">
              <TabsTrigger value="sales-page" className="rounded-xl data-[state=active]:bg-brand-purple data-[state=active]:text-white">Página de Vendas</TabsTrigger>
              <TabsTrigger value="checkout" className="rounded-xl data-[state=active]:bg-brand-purple data-[state=active]:text-white">Página de Checkout</TabsTrigger>
              <TabsTrigger value="clicpay" className="rounded-xl data-[state=active]:bg-brand-purple data-[state=active]:text-white">Integração ClicPay</TabsTrigger>
            </TabsList>
            <TabsContent value="sales-page" className="mt-6">
              <Card className="rounded-2xl shadow-lg">
                <CardHeader>
                  <CardTitle>Gerador de Prompt para Página de Vendas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="product-sales">Nome do Produto</Label>
                    <Input id="product-sales" placeholder="Ex: Curso de Marketing Digital" value={salesPageData.product} onChange={(e) => setSalesPageData({ ...salesPageData, product: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="audience">Público-alvo</Label>
                    <Input id="audience" placeholder="Ex: Empreendedores iniciantes" value={salesPageData.audience} onChange={(e) => setSalesPageData({ ...salesPageData, audience: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="pain">Principal Dor</Label>
                    <Input id="pain" placeholder="Ex: Dificuldade em atrair clientes" value={salesPageData.pain} onChange={(e) => setSalesPageData({ ...salesPageData, pain: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="solution">Solução</Label>
                    <Textarea id="solution" placeholder="Ex: O curso ensina o passo a passo para criar campanhas..." value={salesPageData.solution} onChange={(e) => setSalesPageData({ ...salesPageData, solution: e.target.value })} />
                  </div>
                  <Button onClick={handleGenerateSalesPage} className="w-full bg-brand-pink text-white hover:bg-brand-pink/90">Gerar Prompt Mágico</Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="checkout" className="mt-6">
              <Card className="rounded-2xl shadow-lg">
                <CardHeader>
                  <CardTitle>Gerador de Prompt para Checkout</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="product-checkout">Nome do Produto</Label>
                    <Input id="product-checkout" placeholder="Ex: Ebook de Receitas Saudáveis" value={checkoutData.product} onChange={(e) => setCheckoutData({ ...checkoutData, product: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="price">Preço</Label>
                    <Input id="price" placeholder="Ex: R$ 47,00" value={checkoutData.price} onChange={(e) => setCheckoutData({ ...checkoutData, price: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="guarantee">Garantia</Label>
                    <Input id="guarantee" placeholder="Ex: 7 dias de garantia incondicional" value={checkoutData.guarantee} onChange={(e) => setCheckoutData({ ...checkoutData, guarantee: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="scarcity">Escassez/Urgência</Label>
                    <Input id="scarcity" placeholder="Ex: Oferta válida por 24h" value={checkoutData.scarcity} onChange={(e) => setCheckoutData({ ...checkoutData, scarcity: e.target.value })} />
                  </div>
                  <Button onClick={handleGenerateCheckout} className="w-full bg-brand-pink text-white hover:bg-brand-pink/90">Gerar Prompt Mágico</Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="clicpay" className="mt-6">
              <Card className="rounded-2xl shadow-lg">
                <CardHeader>
                  <CardTitle>Gerador de Prompt para Integração ClicPay</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="platform">Plataforma</Label>
                    <Input id="platform" placeholder="Ex: WordPress, Loja virtual própria" value={clicpayData.platform} onChange={(e) => setClicpayData({ ...clicpayData, platform: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="language">Linguagem (se aplicável)</Label>
                    <Input id="language" placeholder="Ex: PHP, JavaScript" value={clicpayData.language} onChange={(e) => setClicpayData({ ...clicpayData, language: e.target.value })} />
                  </div>
                  <Button onClick={handleGenerateClicpay} className="w-full bg-brand-pink text-white hover:bg-brand-pink/90">Gerar Prompt Mágico</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <div ref={outputRef} className="md:sticky top-28">
            <Card className="rounded-2xl shadow-lg h-[600px] flex flex-col">
              <CardHeader className="flex-row items-center justify-between">
                <CardTitle>Seu Prompt Mágico</CardTitle>
                <Button variant="ghost" size="icon" onClick={handleCopy} disabled={!generatedPrompt}>
                  {isCopied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                </Button>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto">
                {generatedPrompt ? (
                  <pre className="whitespace-pre-wrap break-words text-sm text-gray-700 bg-gray-50 p-4 rounded-lg">
                    {generatedPrompt}
                  </pre>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                    <MagicWandIcon className="w-16 h-16 mb-4 opacity-50" />
                    <p>Seu prompt gerado aparecerá aqui.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
const PRICING_VALUE = '1MT';
const Pricing = () => (
  <section className="py-20 md:py-28 bg-white rounded-3xl">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-fredericka text-center text-brand-purple mb-16">
        Um Preço Mágico
      </h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-md mx-auto rounded-3xl shadow-lg p-8 border-2 border-brand-purple">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Plano Mágico</h3>
          <p className="text-6xl font-bold text-brand-purple my-4">{PRICING_VALUE}</p>
          <p className="text-gray-600 mb-6">Acesso vitalício a todas as ferramentas mágicas.</p>
          <ul className="text-left space-y-2 text-gray-700 mb-8">
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-brand-pink" /> Gerador de Página de Vendas</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-brand-pink" /> Gerador de Página de Checkout</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-brand-pink" /> Gerador de Integração ClicPay</li>
            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-brand-pink" /> Acesso a futuras ferramentas</li>
          </ul>
          <Button
            asChild
            size="lg"
            className="w-full bg-brand-pink text-white text-lg py-6 rounded-2xl shadow-lg hover:bg-brand-pink/90 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <a href="https://pay.kirvano.com/39113111-8583-433b-824a-251025624796" target="_blank" rel="noopener noreferrer">Assinar Agora</a>
          </Button>
        </Card>
      </motion.div>
    </div>
  </section>
);
const Footer = () => (
  <footer className="py-12 mt-20">
    <div className="max-w-5xl mx-auto px-4 text-center text-gray-500">
      <p>&copy; {new Date().getFullYear()} Prompt Mágico. Todos os direitos reservados.</p>
      <p className="mt-2">Built with ❤️ at Cloudflare</p>
    </div>
  </footer>
);
export function HomePage() {
  return (
    <div className="bg-brand-background min-h-screen">
      <Toaster richColors position="top-center" />
      <Header />
      <main>
        <Hero />
        <div className="max-w-5xl mx-auto px-4 space-y-20 md:space-y-28">
          <Features />
          <PromptGenerator />
          <Pricing />
        </div>
      </main>
      <Footer />
    </div>
  );
}