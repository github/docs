---
title: Enviando seu anúncio para publicação
intro: 'Você pode enviar seu anúncio para a comunidade {% data variables.product.prodname_dotcom %} usar.'
redirect_from:
  - /marketplace/listing-on-github-marketplace/submitting-your-listing-for-review
  - /developers/github-marketplace/submitting-your-listing-for-review
versions:
  free-pro-team: '*'
---



Depois de concluir o anúncio do seu aplicativo, você verá dois botões que permitem que você solicite a publicação do anúncio, com ou sem verificação. O botão **Solicitar** para "Publicar sem verificação" encontra-se desabilitado se você tiver publicado algum plano de preços pago no anúncio.

![Botão de solicitação verificada e não verificada](/assets/images/marketplace/marketplace-request-button.png)

{% data reusables.marketplace.launch-with-free %}

Depois de enviar seu anúncio para revisão, um especialista de integração entrará em contato com você com informações adicionais.

Para uma visão geral do processo de criação e envio de uma listagem, consulte "[Sobre {% data variables.product.prodname_marketplace %}](/developers/github-marketplace/about-github-marketplace#publishing-an-app-to-github-marketplace)".

### Pré-requisitos para publicação com verificação

Before you request verification of your listing, you'll need to integrate the {% data variables.product.prodname_marketplace %} billing flows and webhook into your app. Para obter mais informações, consulte "[Usar a API de {% data variables.product.prodname_marketplace %} no seu aplicativo](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

Se você cumpriu os requisitos para o anúncio integrou-se à API de {% data variables.product.prodname_marketplace %}, envie o seu anúncio. Para obter mais informações, consulte "[Requisitos para listar um app](/developers/github-marketplace/requirements-for-listing-an-app)".

{% data reusables.marketplace.app-transfer-to-org-for-verification %} Para informações sobre como fazer isso, consulte: "[Transferir um aplicativo para uma organização antes de enviar](#transferring-an-app-to-an-organization-before-you-submit)" abaixo.

### Transferring an app to an organization before you submit

You cannot sell an app that's owned by a user account. You need to transfer the app to an organization that is already a verified creator, or that can request verification for a listing for the app. For details, see:

1. "[Creating an organization from scratch](/github/setting-up-and-managing-organizations-and-teams/creating-a-new-organization-from-scratch)"

1. "[Transferring ownership of a GitHub App](/developers/apps/transferring-ownership-of-a-github-app)" or "[Transferring ownership of an OAuth App](/developers/apps/transferring-ownership-of-an-oauth-app)"
