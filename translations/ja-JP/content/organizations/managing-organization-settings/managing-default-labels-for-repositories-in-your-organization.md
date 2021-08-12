---
title: Organization 内のリポジトリのためのデフォルトラベルを管理する
intro: Organization の新しいリポジトリすべてに含まれるラベルをカスタマイズできます。
redirect_from:
  - /articles/managing-default-labels-for-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-default-labels-for-repositories-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Organizationのオーナーは、Organization のリポジトリのデフォルトラベルを管理できます。

デフォルトラベルは、Organization の新しいリポジトリすべてに含まれますが、そのリポジトリへの書き込みアクセスがある人は誰でも、そのリポジトリのラベルを後で編集または削除できます。 デフォルトラベルを追加、編集、削除しても、既存リポジトリのラベルは追加、編集、削除されません。

### デフォルトラベルの作成

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
{% data reusables.organizations.repository-defaults %}
{% else %}
{% data reusables.organizations.repository-labels %}
{% endif %}
5. [Repository labels] で、[**New label**] をクリックします。 ![[New label] ボタン](/assets/images/help/organizations/new-label-button.png)
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

### デフォルトラベルの編集

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
{% data reusables.organizations.repository-defaults %}
{% else %}
{% data reusables.organizations.repository-labels %}
{% endif %}
{% data reusables.project-management.edit-label %}
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.save-label %}

### デフォルトラベルの削除

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
{% data reusables.organizations.repository-defaults %}
{% else %}
{% data reusables.organizations.repository-labels %}
{% endif %}
{% data reusables.project-management.delete-label %}
{% data reusables.project-management.confirm-label-deletion %}

### 参考リンク

- [ラベルについて](/articles/about-labels)
