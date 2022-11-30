---
title: Managing access and security for your codespaces
intro: 'You can manage the repositories that {% data variables.product.prodname_codespaces %} can access.'
versions:
  free-pro-team: '*'
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

When you enable access and security for a repository owned by your user account, any codespaces that are created for that repository will have read and write permissions to all other repositories you own. If you want to restrict the repositories a codespace can access, you can limit to it to either the repository the codespace was opened for or specific repositories. 信頼するリポジトリに対してのみ、アクセスとセキュリティを有効にしてください。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. [Access and security] で、あなたのユーザアカウントの設定を選択します。 ![信頼するリポジトリを管理するラジオボタン](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)
1. [Selected repositories] を選択した場合、ドロップダウンメニューを選択してから、あなたの所有するその他のリポジトリにアクセスを許可する、リポジトリのコードスペースをクリックします。 所有するその他のリポジトリにコードスペースによるアクセスを許可したい、すべてのリポジトリについて同じ手順を繰り返します。 ![[Selected repositories]ドロップダウンメニュー](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)
