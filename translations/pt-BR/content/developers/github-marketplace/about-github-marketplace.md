---
title: Sobre o GitHub Marketplace
intro: 'Aprenda os princípios básicos para preparar seu aplicativo para revisão antes de entrar no {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /apps/marketplace/getting-started/
  - /marketplace/getting-started
versions:
  free-pro-team: '*'
---

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) conecta você a desenvolvedores que querem estender e melhorar seus fluxos de trabalho do {% data variables.product.prodname_dotcom %}. Você pode listar ferramentas gratuitas e pagas para os desenvolvedores usarem no {% data variables.product.prodname_marketplace %}. O {% data variables.product.prodname_marketplace %} oferece aos desenvolvedores dois tipos de ferramenta: {% data variables.product.prodname_actions %} e aplicativos, e cada ferramenta exige etapas diferentes para adicioná-lo ao {% data variables.product.prodname_marketplace %}.

### GitHub Actions

{% data reusables.actions.actions-not-verified %}

Para saber mais sobre publicação de {% data variables.product.prodname_actions %} em {% data variables.product.prodname_marketplace %}, consulte "[Publicar ações no GitHub Marketplace](/actions/creating-actions/publishing-actions-in-github-marketplace)".

### Aplicativos

Você pode listar os aplicativos verificados e não verificados no {% data variables.product.prodname_marketplace %}. Os aplicativos não verificados não passam por segurança, testes e ciclo de verificação que {% data variables.product.prodname_dotcom %} exige para aplicativos verificados.

Os aplicativos verificados têm um selo verde no {% data variables.product.prodname_marketplace %}. Os aplicativos não verificados têm um selo cinza ao lado de sua listagem e só estão disponíveis como aplicativos gratuitos.

![Selo verde para verificado e cinza para não verificado](/assets/images/marketplace/marketplace_verified_badges.png)

Se você estiver interessado em criar um aplicativo para {% data variables.product.prodname_marketplace %}, mas você é novo no {% data variables.product.prodname_github_apps %} e no {% data variables.product.prodname_oauth_app %}, consulte "[Criando aplicativos](/apps/)".

{% data reusables.marketplace.github_apps_preferred %}, embora você possa listar tanto o OAuth quanto {% data variables.product.prodname_github_app %}s no {% data variables.product.prodname_marketplace %}. Consulte "[Diferenças entre os aplicativos GitHub e OAuth](/apps/differences-between-apps/)" para obter mais detalhes. Para saber mais sobre como mudar do OAuth para {% data variables.product.prodname_github_apps %}, consulte [Migrando aplicativos OAuth para {% data variables.product.prodname_github_app %}s](/apps/migrating-oauth-apps-to-github-apps/).

Em caso de dúvidas dúvidas sobre {% data variables.product.prodname_marketplace %}, entre em contato diretamente com {% data variables.contact.contact_support %}.

#### Aplicativos não verificados

Os aplicativos não verificados não precisam atender aos "[Requisitos de listagem de um aplicativo no {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)" ou passar pelo "[Processo de revisão de segurança](/marketplace/getting-started/security-review-process/)".

{% data reusables.marketplace.unverified-apps %} Ter um plano pago publicado impedirá que você possa enviar um aplicativo não verificado. Você deve remover os planos pagos ou mantê-los no modo rascunho antes de publicar um aplicativo não verificado.

Para listar seu aplicativo não verificado no {% data variables.product.prodname_marketplace %}, você só precisa criar uma "[Listagem em {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/)" e enviá-lo como uma listagem não verificada.

{% data reusables.marketplace.launch-with-free %}

#### Aplicativos verificados

Se você já criou um aplicativo e está interessado em enviar uma listagem verificado no {% data variables.product.prodname_marketplace %}, comece aqui:

1. [Começando com {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/)<br/>Saiba mais sobre requisitos, diretrizes e processo de envio de aplicativos.

1. [Integrar com a API do {% data variables.product.prodname_marketplace %} ](/marketplace/integrating-with-the-github-marketplace-api/)<br/>Antes de poder listar seu aplicativo no {% data variables.product.prodname_marketplace %}, você deverá integrar os fluxos de cobrança usando a API do {% data variables.product.prodname_marketplace %} e os eventos de webhook.

1. [Listar no {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/) <br/>Crie uma listagem de rascunho {% data variables.product.prodname_marketplace %} de {% data variables.product.prodname_marketplace %}, defina as configurações de webhook e configure planos de preços.

1. [Vendendo seu aplicativo](/marketplace/selling-your-app/)<br/>Saiba mais sobre os planos de preço, ciclos de cobrança e como receber pagamento do {% data variables.product.prodname_dotcom %} para o seu aplicativo.

1. [{% data variables.product.prodname_marketplace %} Ideias](/marketplace/github-marketplace-insights/)<br/>Veja como seu aplicativo está sendo executado em {% data variables.product.prodname_marketplace %}. Você pode usar métricas coletadas pelo {% data variables.product.prodname_dotcom %} para orientar sua campanha de marketing e ter sucesso no {% data variables.product.prodname_marketplace %}.

1. [ transações do {% data variables.product.prodname_marketplace %} ](/marketplace/github-marketplace-transactions/)<br/>Faça o download e veja os dados de transação para a sua listagem do {% data variables.product.prodname_marketplace %}.

### Revisar seu aplicativo

Queremos ter certeza de que os aplicativos oferecidos no {% data variables.product.prodname_marketplace %} são seguros, protegidos e bem testados. Os especialistas de integração do {% data variables.product.prodname_marketplace %} irão rever seu aplicativo para garantir que ele atende a todos os requisitos. Siga as diretrizes nestes artigos antes de enviar seu aplicativo:


* [Requisitos para listar um aplicativo no {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)
* [Processo de revisão de segurança](/marketplace/getting-started/security-review-process/)
