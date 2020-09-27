---
title: Organization 内のリポジトリのためのデフォルトラベルを管理する
intro: Organization の新しいリポジトリすべてに含まれるラベルをカスタマイズできます。
redirect_from:
  - /articles/managing-default-labels-for-repositories-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
---

Organizationのオーナーは、Organization のリポジトリのデフォルトラベルを管理できます。

デフォルトラベルは、Organization の新しいリポジトリすべてに含まれますが、そのリポジトリへの書き込みアクセスがある人は誰でも、そのリポジトリのラベルを後で編集または削除できます。 デフォルトラベルを追加、編集、削除しても、既存リポジトリのラベルは追加、編集、削除されません。

### デフォルトラベルの作成

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
{{ site.data.reusables.organizations.repository-defaults }}
{% else %}
{{ site.data.reusables.organizations.repository-labels }}
{% endif %}
5. [Repository labels] で、[**New label**] をクリックします。 ![[New label] ボタン](/assets/images/help/organizations/new-label-button.png)
{{ site.data.reusables.project-management.name-label }}
{{ site.data.reusables.project-management.label-description }}
{{ site.data.reusables.project-management.label-color-randomizer }}
{{ site.data.reusables.project-management.create-label }}

### デフォルトラベルの編集

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
{{ site.data.reusables.organizations.repository-defaults }}
{% else %}
{{ site.data.reusables.organizations.repository-labels }}
{% endif %}
{{ site.data.reusables.project-management.edit-label }}
{{ site.data.reusables.project-management.name-label }}
{{ site.data.reusables.project-management.label-description }}
{{ site.data.reusables.project-management.label-color-randomizer }}
{{ site.data.reusables.project-management.save-label }}

### デフォルトラベルの削除

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
{{ site.data.reusables.organizations.repository-defaults }}
{% else %}
{{ site.data.reusables.organizations.repository-labels }}
{% endif %}
{{ site.data.reusables.project-management.delete-label }}
{{ site.data.reusables.project-management.confirm-label-deletion }}

### 参考リンク

- [ラベルについて](/articles/about-labels)
