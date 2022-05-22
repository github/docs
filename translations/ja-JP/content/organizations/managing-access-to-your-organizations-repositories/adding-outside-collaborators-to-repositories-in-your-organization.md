---
title: 外部のコラボレータを Organization のリポジトリに追加する
intro: '*外部のコラボレータ*は、Organization の明示的なメンバーではありませんが、Organization の 1 つ以上のリポジトリに読み取り、書き込み、あるいは管理権限を持っている人です。'
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

## About outside collaborators

{% data reusables.organizations.outside-collaborators-use-seats %}

An organization owner can restrict the ability to invite collaborators. 詳しい情報については、「[外部のコラボレーターを追加するための権限を設定する](/articles/setting-permissions-for-adding-outside-collaborators)」を参照してください。

{% ifversion ghes %}
Before you can add someone as an outside collaborator on a repository, the person must have a user account on {% data variables.product.product_location %}. If your enterprise uses an external authentication system such as SAML or LDAP, the person you want to add must sign in through that system to create an account. If the person does not have access to the authentication system and built-in authentication is enabled for your enterprise, a site admin can create a user account for the person. 詳しい情報については、「[ビルトイン認証の利用](/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication#inviting-users)」を参照してください。
{% endif %}

{% ifversion not ghae %}
Organization が[メンバーおよび外部コラボレーターに 2 要素認証を使うことを求める](/articles/requiring-two-factor-authentication-in-your-organization)なら、メンバーおよび外部コラボレーターはあなたからの Organization のリポジトリでのコラボレーションの招待を受諾する前に、2 要素認証を有効化しなければなりません。
{% endif %}

{% data reusables.organizations.outside_collaborator_forks %}

{% ifversion fpt %}
To further support your team's collaboration abilities, you can upgrade to {% data variables.product.prodname_ghe_cloud %}, which includes features like protected branches and code owners on private repositories. {% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}

## Adding outside collaborators to a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec %}
{% data reusables.repositories.navigate-to-manage-access %}
{% data reusables.organizations.invite-teams-or-people %}
5. 検索フィールドで、招待する人の名前を入力し、一致するリストの名前をクリックします。 ![リポジトリに招待する人の名前を入力するための検索フィールド](/assets/images/help/repository/manage-access-invite-search-field.png)
6. [Choose a role] で、人に付与する権限を選択し、[**Add NAME to REPOSITORY**] をクリックします。 ![人の権限を選択する](/assets/images/help/repository/manage-access-invite-choose-role-add.png)
{% else %}
5. 左のサイドバーで、[**Collaborators & teams**] をクリックします。 ![コラボレーターと Team がハイライトされたリポジトリ設定サイドバー](/assets/images/help/repository/org-repo-settings-collaborators-and-teams.png)
6. "Collaborators" の下で、リポジトリへのアクセスを許可したい人の名前を入力し、[**Add collaborator**] をクリックします。 ![Octocat のユーザ名が検索フィールドに入力されているコラボレーターセクション](/assets/images/help/repository/org-repo-collaborators-find-name.png)
7. 新しいコラボレータの名前の隣で、*Write (書き込み)*、*Read (読み取り)*、*Admin (管理)* の中から適切な権限レベルを選択してください。 ![リポジトリの権限の選択](/assets/images/help/repository/org-repo-collaborators-choose-permissions.png)
{% endif %}
