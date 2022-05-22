---
title: 外部のコラボレータを Organization のリポジトリに追加する
intro: Organizationのメンバーではないユーザに、Organizationが所有するリポジトリへのアクセスを許可できます。
redirect_from:
  - /articles/adding-outside-collaborators-to-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-outside-collaborators-to-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 外部コラボレータの追加
permissions: People with admin access to a repository can add an outside collaborator to the repository.
---

## 外部のコラボレータについて

外部のコラボレータは、Organizationのメンバーではないものの、Organizationの1つ以上のリポジトリにアクセスできるユーザです。 付与するアクセスレベルは、外部のコラボレータごとに選択できます。 {% data reusables.organizations.outside_collaborator_forks %}

{% data reusables.organizations.outside-collaborators-use-seats %}

{% ifversion fpt %}
{% data variables.product.prodname_ghe_cloud %}を使うOrganizationは、コラボレータの招待機能を制限できます。 詳しい情報については、{% data variables.product.prodname_ghe_cloud %}のドキュメンテーションの「[外部のコラボレータの追加権限の設定](/enterprise-cloud@latest/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)」を参照してください。
{% else %}
Organozationのオーナーは、コラボレータを招待する機能を制限できます。 詳しい情報については「[外部のコラボレータを追加する権限の設定](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)」を参照してください。
{% endif %}

{% ifversion ghes %}
リポジトリに外部コラボレータとして誰かを追加するには、その人は{% data variables.product.product_location %}上に個人アカウントを持っていなければなりません。 EnterpriseがSAMLやLDAPのような外部の認証システムを使っているなら、アカウントを作成するためには追加したい人はそのシステムを通じてサインインしなければなりません。 その人がその認証システムにアクセスできず、Enterpriseではビルトイン認証が有効化されているなら、サイト管理者がその人にアカウントを作成できます。 詳しい情報については、「[ビルトイン認証の設定](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)」を参照してください。
{% endif %}

{% ifversion not ghae %}
Organizationで2要素認証が必須になっているなら、すべての外部のコラボレータはリポジトリでの共同作業への招待を承認する前に、2要素認証を有効化していなければなりません。 詳しい情報日手は「[Organizationでの2要素認証の必須化](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)」を参照してください。
{% endif %}

## リポジトリへの外部のコラボレータの追加

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
リポジトリへのアクセスは、リポジトリ設定で外部のコラボレータに付与できます。 詳しい情報については「[リポジトリへのアクセス権を持つTeamと人の管理](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person)」を参照してください。
{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
5. 左のサイドバーで、[**Collaborators & teams**] をクリックします。 ![コラボレータとTeamがハイライトされたリポジトリ設定のサイドバー](/assets/images/help/repository/org-repo-settings-collaborators-and-teams.png)
6. 「Collaborators（コラボレータ）」の下で、リポジトリへのアクセスを付与したい人の名前を入力し、**Add collaborator（コラボレータの追加）**をクリックしてください。 ![Octocat のユーザ名が検索フィールドに入力されているコラボレーターセクション](/assets/images/help/repository/org-repo-collaborators-find-name.png)
7. 新しいコラボレータの名前の隣で、ドロップダウンメニューを使って適切なアクセスレベルを選択してください。 ![リポジトリ権限ピッカー](/assets/images/help/repository/org-repo-collaborators-choose-permissions.png)
{% endif %}
