---
title: Sobre criadores verificados
intro: 'Todas as organizações que desejam vender aplicativos em {% data variables.product.prodname_marketplace %}, devem seguir um processo de verificação. Sua identidade é verificada e seu processo de cobrança revisado.'
versions:
  free-pro-team: '*'
---

### Sobre criadores verificados

Um criador verificado é uma organização que {% data variables.product.company_short %} verificou. Qualquer pessoa pode compartilhar seus aplicativos com outros usuários em {% data variables.product.prodname_marketplace %}, mas somente organizações verificadas por {% data variables.product.company_short %} podem vender aplicativos. Para obter mais informações sobre organizações, consulte "[Sobre organizações](/github/setting-up-and-managing-organizations-and-teams/about-organizations)".

O processo de verificação tem o objetivo de proteger os usuários. Por exemplo, ele verifica a identidade do vendedor, verifica se a sua organização de {% data variables.product.product_name %} está configurada de forma segura e se pode ser contatada para suporte.

Depois de ser aprovado na verificação, todos os aplicativos que as listas da organização em {% data variables.product.prodname_marketplace %} são exibidos com um selo de criador verificado {% octicon "verified" aria-label="Verified creator badge" %}. A organização agora pode adicionar planos pagos a qualquer um de seus aplicativos. Cada aplicativo com um plano pago também passa por um processo de integração financeira para verificar se está configurado para lidar com a cobrança de forma correta.

![selos de criadores verificados](/assets/images/marketplace/marketplace_verified_creator_badges_apps.png)

Além do selo de criador verificado, você também verá selos referentes a aplicativos verificados e não verificados. Esses aplicativos foram publicados usando o método antigo para verificar aplicativos individuais.

![Selo verde para verificado e cinza para não verificado](/assets/images/marketplace/marketplace_verified_badges.png)

Para obter informações sobre como encontrar aplicativos para usar, consulte "[Pesquisar {% data variables.product.prodname_marketplace %}](/github/searching-for-information-on-github/searching-github-marketplace)".

### Sobre o processo de verificação

A primeira vez que você solicitar verificação para uma listagem de um dos seus aplicativos, você entrará no processo de verificação.  Um especialista em integração irá guiá-lo durante o processo. Isto inclui verificar:

- Informações de perfil - As informações básicas do perfil são preenchidas com precisão e de forma adequada.
- Segurança - A organização habilitou a autenticação de dois fatores.
- Domínio verificado - A organização verificou o domínio da URL do site.
- Comprar evento webhook - O evento é tratado de forma correta pelo aplicativo.

Quando sua organização é verificada, todos os seus aplicativos são exibidos com um selo de criador verificado. Agora você pode oferecer planos pagos para qualquer um dos seus aplicativos.

Para obter mais informações sobre os requisitos para a listagem de um aplicativo em {% data variables.product.prodname_marketplace %}, consulte "[Requisitos para listar um aplicativo em {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)".

{% data reusables.marketplace.app-transfer-to-org-for-verification %} Para obter informações sobre como fazer isso, consulte: "[Enviar o seu anúncio para publicação](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit)".

{% note %}

**Nota:** Este processo de verificação para aplicativos substitui o processo anterior em que os aplicativos individuais foram verificados. O processo atual é semelhante ao processo de verificação de ações. Se você tiver aplicativos que foram verificados no processo antigo, eles não serão afetados pelas alterações. A equipe de {% data variables.product.prodname_marketplace %} entrará em contato com você com detalhes sobre como fazer a migração para uma verificação baseada na organização.

{% endnote %}
