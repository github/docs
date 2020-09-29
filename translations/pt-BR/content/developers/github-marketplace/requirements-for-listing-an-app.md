---
title: Requisitos para listar um aplicativo
intro: 'Os aplicativos no {% data variables.product.prodname_marketplace %} devem atender aos requisitos definidos nesta página antes que nossos especialistas de integração do {% data variables.product.prodname_marketplace %} aprovem a listagem.'
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



Antes de enviar seu aplicativo para revisão, você deve ler e aceitar os termos do "[{% data variables.product.prodname_marketplace %} Contrato do Desenvolvedor](/articles/github-marketplace-developer-agreement/)". Você aceitará os termos dentro do seu [rascunho de listagem](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/) em {% data variables.product.product_name %}. Assim que enviar o seu aplicativo, um dos especialistas de integração de {% data variables.product.prodname_marketplace %} entrará em contato com mais informações sobre o processo de integração e irá revisar o seu aplicativo para garantir que atende a estes requisitos:

### Experiência do usuário

- Os {% data variables.product.prodname_github_app %}s deve ter, no mínimo, 100 instalações.
- Os {% data variables.product.prodname_oauth_app %}s devem ter, no mínimo, 200 usuários.
- Os aplicativos devem fornecer valor aos clientes e integrar-se à plataforma de alguma forma além da autenticação.
- Os aplicativos devem estar disponíveis publicamente em {% data variables.product.prodname_marketplace %} e não podem estar na versão beta ou disponíveis apenas por convite.
- Os aplicativos não podem persuadir ativamente os usuários ativamente para sair do {% data variables.product.product_name %}.
- Os materiais de marketing do aplicativo devem representar com precisão o comportamento do aplicativo.
- Os aplicativos devem incluir links para a documentação do usuário que descreve como configurá-lo e usá-lo.
- Quando um cliente compra um aplicativo e o GitHub o redireciona para o URL de instalação do aplicativo, o aplicativo deverá iniciar o fluxo do OAuth imediatamente. Para obter mais informações, consulte "[Gerenciando novas compras e testes grátis](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/#step-3-authorization)".

- Os clientes devem ser capazes de instalar seu app e selecionar repositórios em uma conta pessoal e de organização. Eles devem ser capazes de visualizar e gerenciar essas contas separadamente.

### Marca e listagem

- Os aplicativos que usam logotipos do GitHub devem seguir as diretrizes de "[{% data variables.product.product_name %} Logotipos e Uso](https://github.com/logos)".
- Os aplicativos devem ter um logotipo, cartões de recurso, e imagens de captura de tela que atendam às recomendações fornecidas em "[Escrevendo descrições da listagem de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)".
- As listagens devem incluir descrições bem escritas e sem erros gramaticais. Para obter orientação par escrever a sua listagem, consulte "[Escrevendo descrições de listagem do {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)".

### Segurança

Os aplicativos passarão por uma revisão de segurança antes de serem listados em {% data variables.product.prodname_marketplace %}. Uma revisão bem-sucedida atenderá aos requisitos e seguirá as práticas recomendadas de segurança listadas no[processo de revisão de segurança](/marketplace/getting-started/security-review-process/)". Para obter informações sobre o processo de revisão, entre em contato com [marketplace@github.com](mailto:marketplace@github.com).

### Fluxos de cobrança

Seu aplicativo deve integrar-se aos [os fluxos de cobrança](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows), usando o [evento de webhook de {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/).

#### Aplicativos grátis

{% data reusables.marketplace.free-apps-encouraged %} Se você estiver listando um aplicativo grátis, você deverá atender a estes requisitos:

- Os clientes devem ser capazes de ver que eles têm um plano grátis seção de cobrança, perfil ou configurações de conta do aplicativo.
- Quando um cliente cancelar seu aplicativo, você deverá seguir o fluxo para [cancelar planos](/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans/).

#### Aplicativos pagos

Para oferecer seu aplicativo como um serviço pago, você precisará atender a estes requisitos para listar seu aplicativo em {% data variables.product.prodname_marketplace %}:

- Para vender seu aplicativo em {% data variables.product.prodname_marketplace %}, ele deverá usar o sistema de cobrança do GitHub. Seu aplicativo não precisa gerenciar pagamentos, mas deve usar "[ eventos de compra de {% data variables.product.prodname_marketplace %} ](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)para gerenciar novas compras, atualizações, downgrades, cancelamentos e testes grátis. Consulte "[Fluxos de cobrança](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows)para saber mais sobre como integrar esses eventos ao seu aplicativo. Usar o sistema de cobrança do GitHub permite aos clientes comprar um aplicativo sem sair do GitHub e pagar pelo serviço com o método de pagamento já anexado à sua conta {% data variables.product.product_name %}.
- Os aplicativos devem ser compatíveis tanto com a cobrança anual quanto mensal para as compras de suas assinaturas pagas.
- As listagens podem oferecer qualquer combinação de planos grátis e pagos. Os planos grátis são opcionais, porém incentivados. Para obter mais informações, consulte "[Definir um plano de preços da listagem do {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)".
{% data reusables.marketplace.marketplace-billing-ui-requirements %}
