---
title: GitHub Appをパブリックまたはプライベートにする
intro: '{% data reusables.shortdesc.making-a-github-app-public-or-private %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-installation-options-for-github-apps
  - /apps/building-github-apps/installation-options-for-github-apps
  - /apps/building-integrations/managing-github-apps/changing-a-github-app-s-installation-option
  - /apps/managing-github-apps/changing-a-github-app-s-installation-option
  - /apps/managing-github-apps/making-a-github-app-public-or-private
  - /developers/apps/making-a-github-app-public-or-private
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Manage app visibility
ms.openlocfilehash: f276be130be76f110d4c4ad3c0bfa3bff708aad6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065891'
---
認証情報については、「[GitHub App による認証](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)」を参照してください。

## パブリックのインストールフロー

パブリックのインストールフローには、アプリケーションのオーナー以外の人がリポジトリにアプリケーションをインストールするためのランディングページがあります。 このリンクは、GitHub Appをセットアップする際に「Public link（パブリックリンク）」フィールドに提供されます。 詳細については、「[GitHub アプリのインストール](/apps/installing-github-apps/)」を参照してください。

## プライベートのインストールフロー

プライベートインストールフローを利用すれば、GitHub Appのオーナーだけがそのアプリケーションをインストールできます。 その GitHub App に関する限定的な情報は引き続き公開ページに存在しますが、 **[インストール]** ボタンを利用できるのは、Organization の管理者または GitHub App が個人のアカウントによって所有されている場合はそのユーザー アカウントだけです。 プライベート GitHub App は、所有者のユーザーまたは Organization アカウントにのみインストールできます。

## GitHub Appをインストールできるユーザの変更

GitHub Appをインストールできるユーザを変更するには以下のようにします。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
3. インストールオプションを変更したいGitHub Appを選択してください。
![アプリの選択](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.github_apps_advanced %}
5. GitHub App のインストール オプションに応じて、 **[公開する]** または **[非公開にする]** をクリックします。
![GitHub App のインストール オプションを変更するボタン](/assets/images/github-apps/github_apps_make_public.png)
6. GitHub App のインストール オプションに応じて、 **[はい、この GitHub App を公開します]** または **[はい、この GitHub App を{% ifversion fpt or ghec %}内部{% else %}非公開{% endif %}にします]** をクリックします。
![インストール オプションの変更を確認するボタン](/assets/images/github-apps/github_apps_confirm_installation_option.png)
