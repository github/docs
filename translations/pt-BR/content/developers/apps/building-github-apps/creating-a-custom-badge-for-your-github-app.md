---
title: Criar um selo personalizado para o seu aplicativo GitHub
intro: '{% data reusables.shortdesc.creating_custom_badges_github_apps %}'
redirect_from:
  - /apps/building-github-apps/creating-custom-badges-for-github-apps
  - /developers/apps/creating-a-custom-badge-for-your-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Custom badges
ms.openlocfilehash: df691669b42b0448f9979dec4bf25ca6c1ebf070
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145095115'
---
Por padrão, um novo Aplicativo do GitHub terá um [identicon](https://github.com/blog/1586-identicons) gerado automaticamente.
O selo do identicon assemelha-se a isso:

![Identicon](/assets/images/identicon.png)

Após criar um aplicativo GitHub, você poderá personalizar o selo do seu aplicativo fazendo o upload de um logotipo e selecionando uma cor de fundo. Um selo é uma imagem de logotipo quadrado dentro de um distintivo circular. Você pode escolher uma cor de fundo para o selo, que poderá distinguir seu aplicativo visualmente.

Seu logotipo deve ser um arquivo PNG, JPG ou GIF com tamanho inferior a 1 MB. Para obter a melhor qualidade de renderização, recomendamos um tamanho de imagem de, pelo menos, 200px x 200px. {% ifversion fpt or ghec %}Confira "[Dicas para imagens de logotipo e selo](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#guidelines-for-logos)" para obter mais diretrizes sobre como personalizar selos.{% endif %}

{% ifversion fpt or ghec %}

Você pode alterar um selo personalizado para um Aplicativo do GitHub que já tem uma listagem aprovada do Marketplace navegando até https://github.com/marketplace/manage.

{% endif %}

Para criar um selo personalizado:

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
5. Em "Informações de exibição", arraste e solte uma imagem de uma pasta local ou clique em **Carregar um logotipo** para selecionar uma imagem do computador.
![Carregar um logotipo](/assets/images/github-apps/github_apps_upload_logo.png)
6. Recorte sua imagem. Quando terminar, clique em **Definir novo avatar**.
![Cortar e definir o logotipo ](/assets/images/github-apps/github_apps_crop_and_set_avatar.png)
7. Em "Cor da tela de fundo do selo", digite o [código de cor hexadecimal](http://www.color-hex.com/) da cor da tela de fundo do selo. {% ifversion fpt or ghec %} **Observação:** o campo de entrada "Cor da tela de fundo do selo" só será exibido depois que você carregar um logotipo do aplicativo.{% endif %} ![Cor da tela de fundo do selo](/assets/images/github-apps/github_apps_badge_background_color.png)

{% ifversion fpt or ghec %}

## Próximas etapas

Para obter mais informações sobre como criar uma listagem do Marketplace para este aplicativo, confira "[Listagem no GitHub Marketplace](/marketplace/listing-on-github-marketplace/)".

{% endif %}
