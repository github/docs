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
shortTitle: アプリケーションの可視性を管理
---

認証の情報については「[GitHub Appでの認証](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)」を参照してください。

## パブリックのインストールフロー

パブリックのインストールフローには、アプリケーションのオーナー以外の人がリポジトリにアプリケーションをインストールするためのランディングページがあります。 このリンクは、GitHub Appをセットアップする際に「Public link（パブリックリンク）」フィールドに提供されます。 詳しい情報については「[GitHub Appのインストール](/apps/installing-github-apps/)」を参照してください。

## プライベートのインストールフロー

プライベートインストールフローを利用すれば、GitHub Appのオーナーだけがそのアプリケーションをインストールできます。 Limited information about the GitHub App will still exist on a public page, but the **Install** button will only be available to organization administrators or the personal account if the GitHub App is owned by an individual account. Private GitHub Apps can only be installed on the user or organization account of the owner.

## GitHub Appをインストールできるユーザの変更

GitHub Appをインストールできるユーザを変更するには以下のようにします。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
3. インストールオプションを変更したいGitHub Appを選択してください。 ![アプリケーションの選択](/assets/images/github-apps/github_apps_select-app.png)
{% data reusables.user-settings.github_apps_advanced %}
5. Depending on the installation option of your GitHub App, click either **Make public** or **Make private**. ![GitHub Appのインストールオプションを変更するボタン](/assets/images/github-apps/github_apps_make_public.png)
6. GitHub Appのインストールオプションに応じて、**Yes, make this GitHub App public**または**Yes, make this GitHub App {% ifversion fpt or ghec %}private{% else %}internal{% endif %}**をクリックしてください。 ![インストールオプションの変更の確認ボタン](/assets/images/github-apps/github_apps_confirm_installation_option.png)
