---
title: Managing repository access for your codespaces
shortTitle: Repository access
intro: '{% data variables.product.prodname_codespaces %} がアクセスできるリポジトリを管理できます。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
topics:
  - Codespaces
  - Security
redirect_from:
  - /codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces
---

 

ユーザアカウントが所有するリポジトリのアクセスとセキュリティを有効にすると、そのリポジトリ用に作成された Codespaces には、所有している他のすべてのリポジトリへの読み取り権限が付与されます。 Codespace がアクセスできるリポジトリを制限する場合は、Codespace がオープンされたリポジトリまたは特定のリポジトリのいずれかに制限できます。 信頼するリポジトリに対してのみ、アクセスとセキュリティを有効にしてください。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. [Access and security] で、あなたのユーザアカウントの設定を選択します。 ![信頼するリポジトリを管理するラジオボタン](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)
1. [Selected repositories] を選択した場合、ドロップダウンメニューを選択してから、あなたの所有するその他のリポジトリにアクセスを許可する、リポジトリのコードスペースをクリックします。 所有するその他のリポジトリにコードスペースによるアクセスを許可したい、すべてのリポジトリについて同じ手順を繰り返します。 ![[Selected repositories]ドロップダウンメニュー](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

## 参考リンク

- "[Managing repository access for your organization's codespaces](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)"
