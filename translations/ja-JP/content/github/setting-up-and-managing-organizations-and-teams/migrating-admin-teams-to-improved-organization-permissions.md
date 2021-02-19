---
title: 管理者 Team を改善された Organization の権限に移行する
intro: '2015 年 9 月以降に作成された Organization の場合、Organization の権限モデルはデフォルトで改善されています。 2015 年 9 月より前に作成された Organization は、古いオーナーおよび管理者 Team から、改善された権限モデルに移行する必要があるかもしれません。 レガシーの管理者 Team は、改善された Organization 権限モデルに移行するまで、リポジトリの作成資格を自動的に維持します。'
redirect_from:
  - /articles/migrating-your-previous-admin-teams-to-the-improved-organization-permissions/
  - /articles/migrating-admin-teams-to-improved-organization-permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

デフォルトでは、Organization のすべてのメンバーがリポジトリを作成できます。 [リポジトリ作成権限](/articles/restricting-repository-creation-in-your-organization) を Organization のオーナーに制限しており、Organization がレガシーの Organization の権限構造で作成されていた場合、レガシーの管理者 Team のメンバーも引き続きリポジトリを作成できます。

レガシーの管理者 Team とは、レガシーの Organization の権限構造で、管理者権限レベルを使用して作成された Team のことです。 この Team のメンバーは、Organization のリポジトリを作成できました。改善された Organization 権限構造でも、その機能は維持されています。

レガシーの 管理者 Team を改善された Organization の権限に移行すれば、この機能をなくすことができます。

詳細は「[Organization のためのリポジトリの権限レベル](/articles/repository-permission-levels-for-an-organization)」を参照してください。

{% warning %}

**警告:** Organization ですべてのメンバーに対して[リポジトリ作成権限](/articles/restricting-repository-creation-in-your-organization)を無効にされている場合は、レガシーの管理者 Team のメンバーの一部がリポジトリ作成権限を失うことがあります。 Organization でメンバーよるリポジトリ作成を有効にしている場合は、レガシーの管理者 Team を改善された Organization の権限に移行しても、チームメンバーのリポジトリ作成機能は影響されません。

{% endwarning %}

### Organization のレガシーの管理者 Team をすべて移行する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.teams_sidebar %}
1. Organization のレガシーの管理者 Team をレビューし、[**Migrate all teams**] をクリックします。 ![[Migrate all teams] ボタン](/assets/images/help/teams/migrate-all-legacy-admin-teams.png)
1. 移行するチームのメンバーについて起きうる変化についての情報を読んだら、[**Migrate all teams**] をクリックします。 ![移行を確定するボタン](/assets/images/help/teams/confirm-migrate-all-legacy-admin-teams.png)

### 1 つの管理者 Team を移行する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
1. チーム説明のボックスで、[**Migrate team**] をクリックします。 ![[Migrate team] ボタン](/assets/images/help/teams/migrate-a-legacy-admin-team.png)
