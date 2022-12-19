---
title: Modificar um aplicativo GitHub
intro: '{% data reusables.shortdesc.modifying_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/modifying-a-github-app
  - /apps/managing-github-apps/modifying-a-github-app
  - /developers/apps/modifying-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: 9038a938d26aa5f1e9ec3cdec6fcecd417f0baf8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178500'
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
5. Em "Informações básicas", modifique as informações do aplicativo GitHub que você gostaria de alterar.
![Seção Informações básicas do aplicativo do GitHub](/assets/images/github-apps/github_apps_basic_information.png){% ifversion device-flow-is-opt-in %}
1. Se o Aplicativo do GitHub usar o fluxo do dispositivo para identificar e autorizar os usuários, clique em **Habilitar fluxo do dispositivo**. Para obter mais informações sobre o fluxo do dispositivo, confira "[Como autorizar Aplicativos OAuth](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow)".
  ![Captura de tela que mostra o campo usado para habilitar o fluxo do dispositivo](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
6. Clique em **Salvar alterações**.
![Botão usado para salvar alterações no seu Aplicativo do GitHub](/assets/images/github-apps/github_apps_save_changes.png)
