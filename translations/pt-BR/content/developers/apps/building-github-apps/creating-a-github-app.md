---
title: Criar um aplicativo GitHub
intro: '{% data reusables.shortdesc.creating_github_apps %}'
redirect_from:
  - /early-access/integrations/creating-an-integration
  - /apps/building-integrations/setting-up-and-registering-github-apps/registering-github-apps
  - /apps/building-github-apps/creating-a-github-app
  - /developers/apps/creating-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: bca6b800f8ea6042e4cbcdb95bd39b56f61433c5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179084'
---
{% ifversion fpt or ghec %}Para saber como usar os Manifestos de Aplicativo do GitHub, que permitem que as pessoas criem Aplicativos do GitHub pré-configurados, confira "[Como criar Aplicativos do GitHub com base en um manifesto](/apps/building-github-apps/creating-github-apps-from-a-manifest/)".{% endif %}

{% ifversion fpt or ghec %} {% note %}

  **Observação:** {% data reusables.apps.maximum-github-apps-allowed %}

{% endnote %} {% endif %}

{% data reusables.apps.settings-step %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
1. Clique em **Novo Aplicativo do GitHub**.
![Botão usado para criar um Aplicativo do GitHub](/assets/images/github-apps/github_apps_new.png)
1. Em "Nome do aplicativo GitHub App", digite o nome do seu aplicativo.
![Campo do nome do Aplicativo do GitHub](/assets/images/github-apps/github_apps_app_name.png)

  Dê um nome claro e sucinto ao seu aplicativo. Seu aplicativo não pode ter o mesmo nome de uma conta existente no GitHub, a menos que seja o seu próprio nome de usuário ou da sua organização. Uma versão movida do nome do seu aplicativo será exibida na interface do usuário quando sua integração realizar uma ação.

1. Opcionalmente, em "Descrição", digite uma descrição do aplicativo que os usuários irão ver.
![Campo de descrição do Aplicativo do GitHub](/assets/images/github-apps/github_apps_description.png)
1. Em "URL da página inicial", digite a URL completa do site do seu aplicativo.
![Campo da URL da home page do Aplicativo do GitHub](/assets/images/github-apps/github_apps_homepage_url.png) {% ifversion fpt or ghes or ghec %}
1. Em "URL de retorno de chamada", digite a URL completa para redirecionar após um usuário autorizar a instalação. Esta URL é usada se o aplicativo precisar identificar e autorizar solicitações de usuário para servidor.

  Use **Adicionar URL de retorno de chamada** para fornecer, até, no máximo, dez URLs de retorno de chamada adicionais.

  ![Botão 'Adicionar URL de retorno de chamada' e campo usado para URL de retorno de chamada](/assets/images/github-apps/github_apps_callback_url_multiple.png) {% else %}
1. Em "URL de chamada de retorno de autorização do usuário", digite a URL completa para redirecionamento após um usuário autorizar uma instalação. Esta URL é usada se o aplicativo precisar identificar e autorizar solicitações de usuário para servidor.
![Campo usado para a URL de retorno de chamada de autorização do usuário do Aplicativo do GitHub](/assets/images/github-apps/github_apps_user_authorization.png)

{% endif %}
1. Por padrão, para melhorar a segurança de seus aplicativos, seus aplicativos usarão os tokens de autorização do usuário. Para optar por não usar tokens do usuário expirados, você deverá desmarcar "Expirar tokens de autorização do usuário". Para saber mais sobre como configurar um fluxo de token de atualização e os benefícios dos tokens de usuário com validade, confira "[Como atualizar tokens de acesso de usuário para servidor](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)".
  ![Opção usada para aceitar os tokens de usuários com validade durante a configuração de Aplicativos do GitHub](/assets/images/github-apps/expire-user-tokens-selection.png)
1. Se o aplicativo autorizar os usuários que usam o fluxo OAuth, você poderá selecionar **Solicitar autorização do usuário (OAuth) durante a instalação** para permitir que as pessoas autorizem o aplicativo quando o instalam, economizando uma etapa. Se você selecionar esta opção, a "URL de configuração" irá tornar-se indisponível e os usuários serão redirecionados para a "URL de retorno de chamada de autorização do usuário" após a instalação do aplicativo. Confira "[Como autorizar usuários durante a instalação](/apps/installing-github-apps/#authorizing-users-during-installation)" para obter mais informações.
![Solicitar a autorização do usuário durante a instalação](/assets/images/github-apps/github_apps_request_auth_upon_install.png){% ifversion device-flow-is-opt-in %}
1. Se o Aplicativo do GitHub usar o fluxo do dispositivo para identificar e autorizar os usuários, clique em **Habilitar Fluxo do Dispositivo**. Para obter mais informações sobre o fluxo do dispositivo, confira "[Como autorizar Aplicativos OAuth](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow)".
  ![Captura de tela que mostra o campo usado para habilitar o fluxo do dispositivo](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
1. Se for necessária uma configuração adicional após a instalação, adicione um "Configurar URL" para redirecionar os usuários após a instalação do seu aplicativo.
![Campo usado para a URL de configuração do Aplicativo do GitHub ](/assets/images/github-apps/github_apps_setup_url.png)

  {% note %}

  **Observação:** quando você seleciona **Solicitar autorização do usuário (OAuth) durante a instalação** na etapa anterior, esse campo fica indisponível e as pessoas são redirecionadas para a "URL de retorno de chamada de autorização do usuário" após a instalação do aplicativo.

  {% endnote %}

1. Na "URL Webhook", digite a URL para a qual os eventos serão POST. Cada aplicativo recebe o seu próprio webhook, que irá notificá-lo sempre que o aplicativo for instalado ou modificado, bem como quaisquer outros eventos que o aplicativo assinar.
![Campo usado para a URL do webhook do Aplicativo do GitHub](/assets/images/github-apps/github_apps_webhook_url.png)

1. Opcionalmente, no "Segredo do webhook", digite um token secreto opcional usado para proteger seus webhooks.
![Campo usado para adicionar um token secreto para seu webhook](/assets/images/github-apps/github_apps_webhook_secret.png)

  {% note %}

  **Observação:** recomendamos expressamente que você defina um token secreto. Para obter mais informações, confira "[Como proteger seus webhooks](/webhooks/securing/)".

  {% endnote %}

1. Em "Permissões", escolha as permissões que o seu aplicativo irá solicitar. Para cada tipo de permissão, use o menu suspenso e clique em **Somente leitura**, **Leitura e gravação** ou **Sem acesso**.
![Várias permissões para Aplicativo do GitHub](/assets/images/github-apps/github_apps_new_permissions_post2dot13.png)
1. Em "Assinar eventos", escolha os eventos que você deseja que seu aplicativo receba.
1. Para escolher o local de instalação do aplicativo, selecione **Somente nesta conta** ou **Qualquer conta**. Para obter mais informações sobre as opções de instalação, confira "[Como tornar um Aplicativo do GitHub público ou privado](/apps/managing-github-apps/making-a-github-app-public-or-private/)".
![Opções de instalação do Aplicativo do GitHub](/assets/images/github-apps/github_apps_installation_options.png)
1. Clique em **Criar Aplicativo do GitHub**.
![Botão usado para criar o Aplicativo do GitHub](/assets/images/github-apps/github_apps_create_github_app.png)
