---
title: GitHub Appの変更
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
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147885861'
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
5. 「Basic information（基本情報）」で、修正したいGitHub Appの情報を変更してください。
![GitHub アプリの基本情報セクション](/assets/images/github-apps/github_apps_basic_information.png){% ifversion device-flow-is-opt-in %}
1. GitHub アプリでデバイス フローを使ってユーザーを特定および認可する場合は、 **[Enable device flow]\(デバイス フローを有効にする\)** をクリックします。 デバイス フローの詳細については、「[OAuth アプリを認可する](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow)」を参照してください。
  ![デバイス フローを有効にするためのフィールドを示すスクリーンショット](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
6. **[変更を保存]** をクリックします。
![GitHub アプリの変更を保存するボタン](/assets/images/github-apps/github_apps_save_changes.png)
