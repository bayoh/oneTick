<p align="center">
  <img src="https://onetick-public.s3.us-west-1.amazonaws.com/website/onetick-rainbow.png?v=1" alt="Logotipo do OneTick" width="200px">
</p>
<h3 align="center">OneTick</h3>
<p align="center">
<a href="https://demo.onetick/event/1/dog-conf-2030">Evento de Demonstração 🌟</a> <a href="https://onetick?utm_source=gh-readme">Site Web 🌎</a>  <a href="https://onetick/docs">Documentação 📄</a>  <a href="https://onetick/docs/getting-started?utm_source=gh-readme">Instalação ⚙️</a>
</p>

<h3 align="center">
 Gerencie eventos e venda ingressos online sem esforço.
</h3>

<div align="center">

[![Documentação do OneTick](https://img.shields.io/badge/docs-onetick-blue)](https://onetick/docs)
[![Licença: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://github.com/HiEventsDev/onetick/LICENCE)
[![Lançamento no GitHub](https://img.shields.io/github/v/release/HiEventsDev/onetick?include_prereleases)](https://github.com/HiEventsDev/onetick/releases)
[![Executar Testes Unitários](https://github.com/HiEventsDev/onetick/actions/workflows/unit-tests.yml/badge.svg?event=push)](https://github.com/HiEventsDev/onetick/actions/workflows/unit-tests.yml)
[![Downloads do Docker](https://img.shields.io/docker/pulls/daveearley/onetick-all-in-one)](https://hub.docker.com/r/daveearley/onetick-all-in-one)

</div>

<div align="center">
 🌟 Uma estrela seria muito apreciada! 🌟
</div>

<hr/>

## Índice

- [Introdução](#-introdução)
- [Recursos](#-recursos)
- [Primeiros Passos](#-primeiros-passos)
- [Registro de Alterações](#-registro-de-alterações)
- [Contribuições](#-contribuições)
- [FAQ](#-faq)

## 📚 Introdução

<a href="https://onetick">OneTick</a> é uma plataforma de gestão de eventos e bilheteria auto-hospedada, rica em recursos. De conferências a noites de clube, o OneTick é projetado para ajudar você a criar, gerenciar e vender ingressos para eventos de todos os tamanhos.

<img alt="Painel de controle de venda de ingressos auto-hospedado do OneTick" src="https://onetick-public.s3.us-west-1.amazonaws.com/website/dashboard-screenshot.png"/>

## 🌟 Recursos

<a href="https://onetick">OneTick</a> está repleto de recursos para agilizar sua gestão de eventos e vendas de ingressos:

- 📊 **Análise de Eventos:** Obtenha insights profundos sobre o desempenho do evento e as vendas de ingressos.
- 🎟 **Widget de Ingressos Incorporável:** Integre facilmente a venda de ingressos em qualquer site.
- 🖥 **Páginas de Eventos Personalizáveis:** Crie páginas de eventos atraentes com opções de design flexíveis.
- 🔑 **Ferramentas Intuitivas de Check-In:** Registre facilmente os participantes na entrada com a ferramenta de check-in por código QR do OneTick.
- 💬 **Ferramentas de Mensagens para Eventos:** Envie mensagens importantes e lembretes aos participantes.
- 📝 **Formulários de Pedido Personalizados:** Colete informações dos participantes com perguntas personalizadas no checkout.
- 🎫 **Vários Tipos de Ingressos:** Ingressos gratuitos, pagos, de doação ou escalonados.
- 💸 **Códigos Promocionais Versáteis:** Códigos de desconto altamente versáteis. Acesso pré-venda, múltiplas opções de desconto.
- 💰 **Pagamentos Instantâneos:** Aproveite os pagamentos instantâneos com a integração do Stripe.
- 🧾 **Configuração de Impostos e Taxas:** Adicione impostos e taxas por ingresso.
- 📦 **Exportações de Dados:** Exporte dados de participantes e pedidos para XLSX ou CSV.
- 💻 **API REST:** API REST completa para integrações personalizadas.
- 🔍 **Ferramentas de SEO:** Personalize as configurações de SEO para cada evento.
- 🛒 **Processo de Checkout Bonito:** Garanta uma experiência de checkout suave e agradável.
- 🔐 **Acesso Baseado em Funções:** Suporte para vários papéis de usuário.
- 💻 **Suporte para Eventos Online:** Ofereça instruções e links para eventos online.
- ⏪ **Suporte a Reembolsos Totais e Parciais:** Gerencie facilmente reembolsos totais e parciais.
- 📧 **Notificações por E-mail:** Mantenha os participantes informados com notificações automáticas por e-mail.
- 📱 **Adaptável a Dispositivos Móveis:** Desfrute de uma experiência contínua em qualquer dispositivo.
- 🌐 **Suporte Multilíngue:** Suporte para vários idiomas.
- 🎉 **E muito mais!**

## 🚀 Primeiros Passos

Para obter instruções detalhadas de instalação, consulte nossa [documentação](https://onetick/docs/getting-started). Para
um início rápido, siga estas etapas:

### Implantações com Um Clique

[![Implantar no DigitalOcean](https://www.deploytodo.com/do-btn-blue.svg)](https://github.com/HiEventsDev/onetick-digitalocean)

[![Implantar no Render](https://render.com/images/deploy-to-render-button.svg)](https://github.com/HiEventsDev/onetick-render.com)

[![Implantar no Railway](https://railway.app/button.svg)](https://railway.app/template/8CGKmu?referralCode=KvSr11)

[![Implantar no Zeabur](https://zeabur.com/button.svg)](https://zeabur.com/templates/8DIRY6)

### 🐳 Início Rápido com Docker

> [!IMPORTANTE]  
> Certifique-se de ter o Docker e o Docker Compose instalados em seu sistema. Caso contrário, você pode baixá-los do
> site oficial do Docker: [Docker](https://www.docker.com/get-started).

1. **Clonar o Repositório:**
   ```bash
   git clone git@github.com:HiEventsDev/onetick.git
   ```

2. **Navegar para o Diretório Docker:**
   ```bash
   cd onetick/docker/all-in-one
   ```

3. **Iniciar os Contêineres Docker:**
   ```bash
   docker compose up -d
   ```
4. **Criar uma conta:**
   ```bash
   Abra o seu navegador e vá para http://localhost:8123/auth/register.
   ```

ℹ️ Consulte o [guia de primeiros passos](https://onetick/docs/getting-started) para outros métodos de instalação e
para configurar um ambiente de produção ou desenvolvimento local.

## 📝 Registro de Alterações

Mantenha-se atualizado com nossas melhorias contínuas e adições de recursos em nossa [página de lançamentos no GitHub](https://github.com/HiEventsDev/onetick/releases).

## 🤝 Contribuições

Aceitamos contribuições, sugestões e relatórios de erros! Antes de propor um novo recurso ou extensão,
abra uma issue para discuti-lo.

## ❓ FAQ

Tem perguntas? Nossa [documentação](https://onetick/docs) tem respostas. Se você não encontrar o que procura, sinta-se à vontade para
nos contatar em [hello@onetick](mailto:hello@onetick).

## 📜 Licença

OneTick está licenciado sob os termos da [AGPL-3.0](https://github.com/HiEventsDev/onetick/blob/main/LICENCE).

Para mais informações sobre licenças, incluindo opções de licenciamento comercial, visite nossa página de licenças [aqui](https://onetick/licensing).
