---
title: GitHub Appのインストールのサスペンド
intro: '{% data reusables.shortdesc.suspending_a_github_app %}'
redirect_from:
  - /apps/managing-github-apps/suspending-a-github-app-installation
  - /developers/apps/suspending-a-github-app-installation
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Suspend app installation
ms.openlocfilehash: c87d1a82b2ccc18284ddc9ec3b28de5e1342b3cb
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089855'
---
## GitHub Appのサスペンド

GitHub Appを所有・管理するインテグレーター、すなわちGitHub Appのオーナーは、インストールしたGitHub AppをREST APIを使用してJWTでサスペンドまたはサスペンド解除できます。 詳細については、[GitHub App REST API](/rest/reference/apps) を参照してください。

GitHub Appをインストールしたユーザ、すなわちインストールオーナーは、アプリケーションのインストール設定からのみGitHub Appをサスペンドまたはサスペンド解除できます。 インストールオーナーは、インストールしたアプリケーションを、APIを使用してサスペンドまたはサスペンド解除することはできません。

インストールが{% data variables.product.prodname_github_app %}のオーナーによってサスペンドされた場合、インストールオーナーは{% data variables.product.prodname_github_app %}のインストールをサスペンド解除できません。 ただし、インストールオーナーは、アプリケーションがサスペンドしている間に、リポジトリの選択など他の設定を変更できます。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
1. サスペンドする{% data variables.product.prodname_github_app %}を選択します。
![アプリの選択](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.github_apps_advanced %}
6. インストールの停止設定の横にある **[停止]** または **[停止解除]** をクリックします。
![GitHub App の停止](/assets/images/github-apps/suspend-a-github-app.png)
