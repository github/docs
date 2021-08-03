---
title: GitHub Appをパブリックまたはプライベートにする
intro: '{% data reusables.shortdesc.making-a-github-app-public-or-private %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-installation-options-for-github-apps/
  - /apps/building-github-apps/installation-options-for-github-apps/
  - /apps/building-integrations/managing-github-apps/changing-a-github-app-s-installation-option/
  - /apps/managing-github-apps/changing-a-github-app-s-installation-option/
  - /apps/managing-github-apps/making-a-github-app-public-or-private
  - /developers/apps/making-a-github-app-public-or-private
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---
認証の情報については「[GitHub Appでの認証](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)」を参照してください。

### パブリックのインストールフロー

Public installation flows have a landing page to enable other people besides the app owner to install the app in their repositories. このリンクは、GitHub Appをセットアップする際に「Public link（パブリックリンク）」フィールドに提供されます。 詳しい情報については「[GitHub Appのインストール](/apps/installing-github-apps/)」を参照してください。

### プライベートのインストールフロー

プライベートインストールフローを利用すれば、GitHub Appのオーナーだけがそのアプリケーションをインストールできます。 そのGitHub Appに関する限定的な情報はパブリックなページに存在しますが、**インストール**ボタンはOrganizationの管理者もしくはGitHub Appが個人のアカウントによって所有されている場合はそのユーザアカウントからのみ利用できます。 Private{% if currentVersion ver_lt "enterprise-server@3.2" or currentVersion == "github-ae@latest" %}, or internal,{% endif %} GitHub Apps can only be installed on the user or organization account of the owner.

### GitHub Appをインストールできるユーザの変更

GitHub Appをインストールできるユーザを変更するには以下のようにします。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
3. インストールオプションを変更したいGitHub Appを選択してください。 ![アプリケーションの選択](/assets/images/github-apps/github_apps_select-app.png)
{% data reusables.user-settings.github_apps_advanced %}
5. Depending on the installation option of your GitHub App, click either **Make public** or **Make {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}private{% else %}internal{% endif %}**. ![GitHub Appのインストールオプションを変更するボタン](/assets/images/github-apps/github_apps_make_public.png)
6. Depending on the installation option of your GitHub App, click either **Yes, make this GitHub App public** or **Yes, make this GitHub App {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}private{% else %}internal{% endif %}**. ![インストールオプションの変更の確認ボタン](/assets/images/github-apps/github_apps_confirm_installation_option.png)
