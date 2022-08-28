---
title: Managing access and security for your organization's codespaces
shortTitle: Managing access and security for your organization
intro: 'You can manage the repositories in your organization that {% data variables.product.prodname_codespaces %} can access.'
permissions: 'To manage access and security for Codespaces for an organization, you must be an organization owner.'
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Security
  - Administrator
redirect_from:
  - /github/developing-online-with-codespaces/managing-access-and-security-for-codespaces
  - /codespaces/working-with-your-codespace/managing-access-and-security-for-codespaces
---

{% data reusables.codespaces.release-stage %}

Organization owners can manage which repositories a codespace can access.

By default, a codespace can only access the repository where it was created. When you enable access and security for a repository owned by your organization, any codespaces that are created for that repository will also have read and write permissions to all other repositories the organization owns and the codespace creator has permissions to access. If you want to restrict the repositories a codespace can access, you can limit to it to either the repository where the codespace was created, or to specific repositories. 信頼するリポジトリに対してのみ、アクセスとセキュリティを有効にしてください。

To manage which users in your organization can use {% data variables.product.prodname_codespaces %}, see "[Managing user permissions for your organization](/codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. [Access and security] で、あなたの Organization の設定を選択します。 ![信頼するリポジトリを管理するラジオボタン](/assets/images/help/settings/codespaces-org-access-and-security-radio-buttons.png)
1. [Selected repositories] を選択した場合、ドロップダウンメニューを選択してから、あなたの Organization が所有するその他のリポジトリにアクセスを許可する、リポジトリのコードスペースをクリックします。 その他のリポジトリにコードスペースによるアクセスを許可したい、すべてのリポジトリについて同じ手順を繰り返します。 ![[Selected repositories]ドロップダウンメニュー](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)
