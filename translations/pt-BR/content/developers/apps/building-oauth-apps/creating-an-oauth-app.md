---
title: Criar um aplicativo OAuth
intro: '{% data reusables.shortdesc.creating_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/registering-oauth-apps
  - /apps/building-oauth-apps/creating-an-oauth-app
  - /developers/apps/creating-an-oauth-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: 0bde9fbadc2005a67ecfc561b21cae48f768975e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180340'
---
{% ifversion fpt or ghec %} {% note %}

  **Observação:** {% data reusables.apps.maximum-oauth-apps-allowed %}

{% endnote %} {% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %}
4. Clique em **Novo Aplicativo OAuth**.
![Botão usado para criar um aplicativo OAuth](/assets/images/oauth-apps/oauth_apps_new_app.png)

  {% note %}

  **Observação:** se você ainda não criou um aplicativo, este botão indicará: **Registrar um novo aplicativo**.

  {% endnote %}
6. Em "Nome do aplicativo", digite o nome do seu aplicativo.
![Campo usado para o nome do aplicativo](/assets/images/oauth-apps/oauth_apps_application_name.png)

  {% warning %}

  **Aviso:** no Aplicativo OAuth, use apenas informações que você considera públicas. Ao criar um aplicativo OAuth, evite o uso de dados confidenciais, como, por exemplo, URLs internas.

  {% endwarning %}

7. Em "URL da página inicial", digite a URL completa do site do seu aplicativo.
![Campo usado para a URL da home page do aplicativo](/assets/images/oauth-apps/oauth_apps_homepage_url.png)
8. Opcionalmente, em "Descrição do aplicativo", digite uma descrição do seu aplicativo que os usuários irão ver.
![Campo usado para uma descrição do aplicativo](/assets/images/oauth-apps/oauth_apps_application_description.png)
9. Em "URL de retorno de chamada de autorização", digite a URL de retorno de chamada do seu aplicativo.
![Campo usado para a URL de retorno de chamada de autorização do aplicativo](/assets/images/oauth-apps/oauth_apps_authorization_callback_url.png) {% ifversion fpt or ghes or ghec %} {% note %}

   **Observação:** os Aplicativos OAuth não podem ter várias URLs de retorno de chamada, ao contrário dos {% data variables.product.prodname_github_apps %}.

   {% endnote %} {% endif %}{% ifversion device-flow-is-opt-in %}
1. Se o Aplicativo OAuth usar o fluxo do dispositivo para identificar e autorizar os usuários, clique em **Habilitar Fluxo do Dispositivo**. Para obter mais informações sobre o fluxo do dispositivo, confira "[Como autorizar Aplicativos OAuth](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow)".
  ![Captura de tela que mostra o campo usado para habilitar o fluxo do dispositivo](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
2.  Clique em **Registrar aplicativo**.
![Botão usado para registrar um aplicativo](/assets/images/oauth-apps/oauth_apps_register_application.png)
