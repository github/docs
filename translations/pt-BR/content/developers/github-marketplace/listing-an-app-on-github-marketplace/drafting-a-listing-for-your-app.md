---
title: Elaborar uma listagem para o seu aplicativo
intro: 'Ao criar uma listagem do {% data variables.product.prodname_marketplace %}, o GitHub salva-na no modo rascunho até que você envie o aplicativo para aprovação. Sua listagem mostra aos clientes como podem usar seu aplicativo.'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/listing-an-app-on-github-marketplace
  - /apps/marketplace/listing-apps-on-github-marketplace/listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started-with-github-marketplace-listings/listing-an-app-on-github-marketplace
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/listing-an-app-on-github-marketplace
  - /apps/adding-integrations/managing-listings-on-github-marketplace/removing-a-listing-from-github-marketplace
  - /apps/marketplace/managing-github-marketplace-listings/removing-a-listing-from-github-marketplace
  - /apps/adding-integrations/managing-listings-on-github-marketplace/editing-a-github-marketplace-listing
  - /apps/marketplace/managing-github-marketplace-listings/editing-a-github-marketplace-listing
  - /apps/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing
  - /marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing
  - /developers/github-marketplace/drafting-a-listing-for-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Draft an app listing
ms.openlocfilehash: 9dccf5486c446c5cdd9dbef4d36650340116e044
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145083947'
---
## Crie um novo rascunho da listagem do {% data variables.product.prodname_marketplace %}

Você só pode criar rascunhos de listagem para aplicativos públicos. Antes de criar o seu rascunho de listagem, você pode ler as diretrizes a seguir para escrever e definir configurações na sua listagem do {% data variables.product.prodname_marketplace %}:

* [Como escrever descrições de listagem do {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)
* [Como definir um plano de preços de listagem do {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)
* [Como configurar o webhook do {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook/)

Para criar uma listagem do {% data variables.product.prodname_marketplace %}:

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %}
3. Na barra lateral esquerda, clique em **Aplicativos OAuth** ou **Aplicativos do GitHub**, dependendo do aplicativo que você está adicionando ao {% data variables.product.prodname_marketplace %}.

  {% note %}

  **Observação**: você também pode adicionar uma listagem navegando até https://github.com/marketplace/new, vendo os aplicativos disponíveis e clicando em **Criar listagem de rascunho**.

  {% endnote %}

  ![Seleção do tipo de aplicativo](/assets/images/settings/apps_choose_app.png)

4. Selecione o aplicativo que você gostaria de adicionar ao {% data variables.product.prodname_marketplace %}.
![Seleção de aplicativo para listagem do {% data variables.product.prodname_marketplace %}](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.edit_marketplace_listing %}
5. Uma vez criado um novo rascunho da listagem, você verá um resumo das seções que você precisará visitar antes da sua listagem do {% data variables.product.prodname_marketplace %} ser concluída.
![Listagem do GitHub Marketplace](/assets/images/marketplace/marketplace_listing_overview.png)


{% note %}

**Observação:** na seção "Informações de contato" da sua listagem, recomendamos usar endereços de email individuais em vez de endereços de emails de grupo, como support@domain.com. O GitHub usará estes endereços de e-mail para entrar em contato com você sobre atualizações do {% data variables.product.prodname_marketplace %} que podem afetar a sua listagem, novas versões de recurso, oportunidades de marketing, pagamentos e informações sobre conferências e patrocínios.

{% endnote %}

## Editar sua listagem

Após criar um rascunho da listagem do {% data variables.product.prodname_marketplace %}, você poderá voltar e modificar as informações na sua listagem a qualquer momento. Se o seu aplicativo já está aprovado e encontra-se no {% data variables.product.prodname_marketplace %}, você pode editar as informações e imagens na sua listagem, mas você não poderá alterar os planos de preços existentes publicados. Confira "[Como definir um plano de preços de listagem do {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)".

## Enviar o seu aplicativo

Depois de concluir a listagem do {% data variables.product.prodname_marketplace %}, você poderá enviá-la para revisão na página **Visão geral**. Você precisará ler e aceitar o "[Contrato de Desenvolvedor do {% data variables.product.prodname_marketplace %}](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement/)" e clicar em **Enviar para revisão**. Depois de enviar seu aplicativo para análise, um especialista em integração entrará em contato com você com informações adicionais sobre o processo de integração.

## Remover uma listagem do {% data variables.product.prodname_marketplace %}

Se você não quiser mais listar seu aplicativo em {% data variables.product.prodname_marketplace %}, entre em contato {% data variables.contact.contact_support %} para remover o seu anúncio.
