---
title: Requisitos para listar um aplicativo
intro: 'Os aplicativos em {% data variables.product.prodname_marketplace %} devem atender aos requisitos definidos nessa página antes que o anúncio possa ser publicado.'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/getting-started-with-github-marketplace-listings/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/
  - /marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
versions:
  free-pro-team: '*'
---

<!--UI-LINK: Displayed as a link on the https://github.com/marketplace/new page.-->

Os requisitos para a anunciar um aplicativo em {% data variables.product.prodname_marketplace %} variam de acordo com o fato de você desejar oferecer um aplicativo grátis ou pago.

### Requisitos para todos os anúncios de {% data variables.product.prodname_marketplace %}

Todos os anúncios em {% data variables.product.prodname_marketplace %} devem ser para ferramentas que fornecem valor à comunidade de {% data variables.product.product_name %}. Ao enviar seu anúncio para publicação, você deverá ler e aceitar os termos do "[ Acordo de Desenvolvedor de {% data variables.product.prodname_marketplace %}](/articles/github-marketplace-developer-agreement/)".

#### Requisitos de experiência do usuário para todos os aplicativos

Todos os anúncios devem atender aos requisitos a seguir, independentemente de serem para um aplicativo grátis ou pago.

- Os anúncios não devem persuadir ativamente os usuários para fora de {% data variables.product.product_name %}.
- Os anúncios devem incluir informações de contato válidas para o editor.
- Os anúncios devem ter uma descrição relevante do aplicativo.
- Os anúncios devem especificar um plano de preços.
- Os aplicativos devem fornecer valor aos clientes e integrar-se à plataforma de alguma forma além da autenticação.
- Os aplicativos devem estar disponíveis publicamente em {% data variables.product.prodname_marketplace %} e não podem estar na versão beta ou disponíveis apenas por convite.
- Os aplicativos devem ter eventos webhook configurados para notificar o editor de qualquer alteração do plano ou cancelamentos usando a API de {% data variables.product.prodname_marketplace %} Para obter mais informações, consulte "[Usar a API de {% data variables.product.prodname_marketplace %} no seu aplicativo](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

Para obter mais informações sobre como fornecer uma boa experiência com o cliente, consulte "[As práticas recomendadas com o cliente para aplicativos](/developers/github-marketplace/customer-experience-best-practices-for-apps)".

#### Requisitos da marca e anúncios para todos os aplicativos

- Os aplicativos que usam logotipos do GitHub precisam seguir as diretrizes de {% data variables.product.company_short %}. Para obter mais informações, consulte "[Logos e uso de {% data variables.product.company_short %}](https://github.com/logos)".
- Os aplicativos devem ter um logotipo, cartões de recurso, e imagens de captura de tela que atendam às recomendações fornecidas em "[Escrevendo descrições da listagem de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)".
- As listagens devem incluir descrições bem escritas e sem erros gramaticais. Para obter orientação par escrever a sua listagem, consulte "[Escrevendo descrições de listagem do {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)".

Para proteger seus clientes, recomendamos que siga as práticas recomendadas em matéria de segurança. Para obter mais informações, consulte "[as práticas recomendadas de segurança para os aplicativos](/developers/github-marketplace/security-best-practices-for-apps)".

### Considerações para aplicativos gratuitos

{% data reusables.marketplace.free-apps-encouraged %}

### Requisitos para aplicativos pagos

Além dos requisitos para todos os aplicativos acima, cada aplicativo que você oferece como serviço pago em {% data variables.product.prodname_marketplace %} também deve atender aos seguintes requisitos:

- Os {% data variables.product.prodname_github_app %}s deve ter, no mínimo, 100 instalações.
- Os {% data variables.product.prodname_oauth_app %}s devem ter, no mínimo, 200 usuários.
- Todos os aplicativos pagos devem lidar com eventos de compra de {% data variables.product.prodname_marketplace %} para novas compras, atualizações, downgrades, cancelamentos e testes grátis. Para obter mais informações, consulte "[Requisitos de cobrança para aplicativos pagos](#billing-requirements-for-paid-apps)" abaixo.
- As organizações publicadoras devem ter um domínio verificado e devem habilitar a autenticação de dois fatores. Para obter mais informações, consulte "[Exigir a autenticação de dois fatores na sua organização](/github/setting-up-and-managing-organizations-and-teams/requiring-two-factor-authentication-in-your-organization)."

Quando estiver pronto para publicar o aplicativo em {% data variables.product.prodname_marketplace %}, você deverá solicitar a verificação para o anúncio.

{% note %}

O processo de verificação está aberto às organizações. {% data reusables.marketplace.app-transfer-to-org-for-verification %} Para obter informações sobre como fazer isso, consulte: "[Enviar o seu anúncio para publicação](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit)".

{% endnote %}

### Requisitos de cobrança para aplicativos pagos

Seu aplicativo não precisa gerenciar pagamentos, mas precisa usar eventos de compra de {% data variables.product.prodname_marketplace %} para gerenciar novas compras, atualizações, downgrades, cancelamentos e testes grátis. Para obter informações sobre como integrar esses eventos no seu aplicativo, consulte "[Usar a API de {% data variables.product.prodname_marketplace %} no seu aplicativo](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

Usar a API de cobrança do GitHub permite aos clientes comprar um aplicativo sem sair do GitHub e pagar o serviço com o método de pagamento já anexado à sua conta em {% data variables.product.product_name %}

- Os aplicativos devem ser compatíveis tanto com a cobrança anual quanto mensal para as compras de suas assinaturas pagas.
- As listagens podem oferecer qualquer combinação de planos grátis e pagos. Os planos grátis são opcionais, porém incentivados. Para obter mais informações, consulte "[Definir um plano de preços da listagem do {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)".
