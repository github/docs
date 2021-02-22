---
title: Sobre o GitHub Marketplace
intro: 'Aprenda sobre {% data variables.product.prodname_marketplace %} em que você pode compartilhar seus aplicativos e ações publicamente com todos os usuários do {% data variables.product.product_name %}.'
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

Qualquer pessoa pode compartilhar seus aplicativos com outros usuários gratuitamente em {% data variables.product.prodname_marketplace %}, mas somente os aplicativos pertencentes a organizações podem vender seu aplicativo.

Para publicar planos pagos para o seu aplicativo e exibir um selo do Marketplace, você deve concluir o processo de verificação do publicador. Para obter mais informações, consulte "[Candidatar-se à verificação de publicador para a sua organização](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)" ou "[Requisitos para anunciar um aplicativo](/developers/github-marketplace/requirements-for-listing-an-app)".

Uma vez que a organização atenda aos requisitos, alguém com permissões de proprietário na organização pode publicar planos pagos para qualquer um dos aplicativos. Cada aplicativo com um plano pago também passa por um processo de integração financeira para habilitar pagamentos.

Para publicar aplicativos com planos grátis, você só precisa atender aos requisitos gerais para anunciar qualquer aplicativo. Para obter mais informações, consulte "[Requisitos para todos os anúncios do GitHub Marketplace](/developers/github-marketplace/requirements-for-listing-an-app#requirements-for-all-github-marketplace-listings)".

#### Novo nos aplicativos?

Se estiver interessado em criar um aplicativo para {% data variables.product.prodname_marketplace %}, mas você é novo em {% data variables.product.prodname_github_apps %} ou {% data variables.product.prodname_oauth_app %}s, consulte "[Criar {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" ou "[Criar {% data variables.product.prodname_oauth_app %}s](/developers/apps/building-oauth-apps)".

#### Aplicativos GitHub vs. Aplicativos OAuth

{% data reusables.marketplace.github_apps_preferred %}, embora você possa listar tanto o OAuth quanto {% data variables.product.prodname_github_app %}s no {% data variables.product.prodname_marketplace %}. Para obter mais informações, consulte "[Diferenças entre {% data variables.product.prodname_github_apps %} e {% data variables.product.prodname_oauth_app %}s](/apps/differences-between-apps/)" e[Migrando {% data variables.product.prodname_oauth_app %}s para {% data variables.product.prodname_github_apps %}](/apps/migrating-oauth-apps-to-github-apps/)

### Publicar um aplicativo na visão geral de {% data variables.product.prodname_marketplace %}

Ao terminar de criar seu aplicativo, você poderá compartilhá-lo com outros usuários publicando-o em {% data variables.product.prodname_marketplace %}. Em resumo, o processo é:

1. Revise cuidadosamente o seu app para garantir que se comportará como esperado em outros repositórios e que segue as diretrizes das práticas recomendadas. Para obter mais informações, consulte "[as práticas de segurança recomendadas para os aplicativos](/developers/github-marketplace/security-best-practices-for-apps)" e "[requisitos para listar um app](/developers/github-marketplace/requirements-for-listing-an-app#best-practice-for-customer-experience)".

1. Adicionar eventos webhook ao aplicativo para rastrear solicitações de cobrança do usuário. Para obter mais informações sobre a API de {% data variables.product.prodname_marketplace %}, eventos de webhook e solicitações de cobrança, consulte "[Usar a API de {% data variables.product.prodname_marketplace %} no seu aplicativo](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

1. Crie um rascunho de listagem de {% data variables.product.prodname_marketplace %} Para obter mais informações, consulte "[Criar uma listagem para o seu aplicativo](/developers/github-marketplace/drafting-a-listing-for-your-app)".

1. Adicionar um plano de preços. Para obter mais informações, consulte "[Configurar planos de preços para sua listagem](/developers/github-marketplace/setting-pricing-plans-for-your-listing)".

1. Leia e aceite os termos do "[Contrato do Desenvolvedor de {% data variables.product.prodname_marketplace %}](/articles/github-marketplace-developer-agreement/)".

1. Envie seu anúncio para publicação em {% data variables.product.prodname_marketplace %}. Para obter mais informações, consulte "[Enviar sua listagem para publicação](/developers/github-marketplace/submitting-your-listing-for-publication)".

### Ver como seu aplicativo está sendo executado

Você pode acessar métricas e transações para a sua listagem. Para obter mais informações, consulte:

- "[Visualizar métricas para a sua listagem](/developers/github-marketplace/viewing-metrics-for-your-listing)"
- "[Visualizar transações para a sua listagem](/developers/github-marketplace/viewing-transactions-for-your-listing)"

### Entrar em contato com o suporte

Em caso de dúvidas dúvidas sobre {% data variables.product.prodname_marketplace %}, entre em contato diretamente com {% data variables.contact.contact_support %}.
