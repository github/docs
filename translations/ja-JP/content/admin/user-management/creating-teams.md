---
title: Teamの作成
intro: 'Team は Organization がメンバーのグループを作成し、リポジトリへのアクセスを制御できるようにします。 Team のメンバーには特定のリポジトリの読み取り、書き込み、管理権限を与えることができます。'
redirect_from:
  - /enterprise/admin/user-management/creating-teams
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

Teamは、team@メンションのように適切なグループに入力や注目を求めたい場合に通知をするような、{% data variables.product.prodname_dotcom %}のコラボレーションの機能の多くにおいて中心的な役割を果たします。 詳しい情報については[Organizationのリポジトリの権限レベル](/enterprise/{{ currentVersion }}/user/articles/repository-permission-levels-for-an-organization/)を参照してください。

Teamは、企業内のグループを表したり、特定の関心や専門分野を持つ人々を含めたりできます。 たとえば{% data variables.product.product_location %}のアクセシビリティの専門家のTeamは、様々な部署からの人々で構成されるといったことがあります。 Teamは、企業の既存の部門階層を補完する機能的な関心事項を表します。

Organizationには、企業やグループの階層構造を反映させた入れ子チームを複数レベルで作成できます。 詳しい情報については"[Teamについて](/enterprise/{{ currentVersion }}/user/articles/about-teams/#nested-teams)"を参照してください。

### Team の作成

Teamの良く考えられた組み合わせは、リポジトリへのアクセスを制御する強力な方法です。 たとえば、Organization が、任意のリポジトリのデフォルトブランチにコードのプッシュすることを、 リリースエンジニアリングの Team にのみ許可する場合、Organization のリポジトリに対する**管理者**権限をリリースエンジニアリングの Team にのみ与え、他のすべての Team には**読み取り**権限だけを与えることができます。

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
{% data reusables.organizations.team_description %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create-team-choose-parent %}
{% data reusables.organizations.create_team %}

### LDAP Syncを有効化したTeamの作成

ユーザ認証にLDAPを使っているインスタンスでは、Teamのメンバー管理にLDAP Syncが使えます。 **LDAP group** フィールド内のグループの **Distinguished Name** (DN) を設定すれば、Team を LDAP サーバ上の LDAP グループにマッピングできます。 Teamのメンバー管理にLDAP Syncを使う場合、{% data variables.product.product_location %}内でTeamを管理することはできません。 LADP Syncを有効化すると、マッピングされたTeamはそのメンバーをバックグラウンドで定期的に設定された間隔で同期します。 詳しい情報については[LDAP Syncの有効化](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#enabling-ldap-sync)を参照してください。

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**ノート:**
- LDAP Sync は Team のメンバーリストだけを管理します。 Team のリポジトリと権限は {% data variables.product.prodname_ghe_server %} 内で管理しなければなりません。
- LDAP グループが削除されるなどして、DN への LDAP グループのマッピングが削除されたなら、すべてのメンバーは同期されている {% data variables.product.prodname_ghe_server %} Team から削除されます。 これを修復するには、Teamを新しいDNにマップし、Teamのメンバーを再度追加し、[手動でマッピングを同期](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap/#manually-syncing-ldap-accounts)してください。
- LDAP Sync が有効化されていると、ある人がリポジトリから削除された場合、その人はアクセスを失いますが、その人のフォークは削除されません。 元々のOrganizationのリポジトリへのアクセスできるように3ヶ月以内にその人がTeamに追加されたなら、次回の同期の際にフォークへのアクセスは自動的に回復されます。

{% endwarning %}

1. [LDAP Syncが有効化](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#enabling-ldap-sync)されていることを確認してください。
{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
6. TeamをマッピングするLDAPグループのDNを検索してください。 DNが分からないなら、LDAPグループの名前を入力してください。
{% data variables.product.prodname_ghe_server %} は検索を行い、マッチがあればオートコンプリートします。
![LDAP グループ DN へのマッピング](/assets/images/enterprise/orgs-and-teams/ldap-group-mapping.png)
{% data reusables.organizations.team_description %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create-team-choose-parent %}
{% data reusables.organizations.create_team %}
