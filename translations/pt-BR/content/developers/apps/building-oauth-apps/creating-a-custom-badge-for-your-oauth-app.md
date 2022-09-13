---
title: Criar um selo personalizado para seu aplicativo OAuth
intro: '{% data reusables.shortdesc.creating_custom_badges_oauth_apps %}'
redirect_from:
  - /apps/building-oauth-apps/creating-custom-badges-for-oauth-apps
  - /developers/apps/creating-a-custom-badge-for-your-oauth-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
shortTitle: Create custom badges
ms.openlocfilehash: b9f5b8048b14c11e7eb0c43a88a18b3a63ca5f34
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147875518'
---
Por padrão, um novo Aplicativo OAuth terá um [identicon](https://github.com/blog/1586-identicons) gerado automaticamente.
O selo do identicon assemelha-se a isso:

![Identicon](/assets/images/identicon.png)

Após criar um aplicativo OAuth, você poderá personalizar o selo do seu aplicativo fazendo o upload de um logotipo e selecionando uma cor de fundo. Um selo é uma imagem de logotipo quadrado dentro de um distintivo circular. Você pode escolher uma cor de fundo para o selo, que pode ser usado para distinguir seu aplicativo visualmente.

Seu logotipo deve ser um arquivo PNG, JPG ou GIF com tamanho inferior a 1 MB. Para obter a melhor qualidade de renderização, recomendamos um tamanho de imagem de, pelo menos, 200px x 200px. {% ifversion fpt or ghec %}Confira "[Dicas para imagens de logotipo e selo](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#guidelines-for-logos)" para obter mais diretrizes sobre como personalizar selos.{% endif %}

{% ifversion fpt or ghec %}

Você pode alterar um selo personalizado para um Aplicativo do GitHub que já tem uma listagem aprovada do Marketplace navegando até https://github.com/marketplace/manage.

{% endif %}

Para criar um selo personalizado:

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %} {% data reusables.user-settings.modify_oauth_app %}
1. Em "Logotipo do aplicativo", arraste e solte uma imagem de uma pasta local ou clique em **Carregar novo logotipo** para selecionar uma imagem do computador.
![Carregar um logotipo](/assets/images/oauth-apps/oauth_apps_upload_logo.png)
6. Recorte sua imagem. Quando terminar, clique em **Definir novo logotipo do aplicativo**.
![Cortar e definir o logotipo](/assets/images/oauth-apps/oauth_apps_crop_and_set_logo.png)
7. Em "Cor da tela de fundo do selo", digite o [código de cor hexadecimal](http://www.color-hex.com/) da cor da tela de fundo do selo. {% ifversion fpt or ghec %}**Observação:** o campo de entrada "Cor da tela de fundo do selo" ficará visível depois que um logotipo do aplicativo tiver sido carregado.{% endif %} ![Cor da tela de fundo do selo](/assets/images/oauth-apps/oauth_apps_badge_background_color.png) {% data reusables.user-settings.update_oauth_app %}

{% ifversion fpt or ghec %}

## Próximas etapas

Para obter mais informações sobre como criar uma listagem do Marketplace para este aplicativo, confira "[Listagem no GitHub Marketplace](/marketplace/listing-on-github-marketplace/)".

{% endif %}
