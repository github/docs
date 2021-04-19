---
title: リポジトリが削除されたり可視性が変更されたりするとフォークはどうなりますか？
intro: リポジトリを削除したり、その可視性を変更したりすると、そのリポジトリのフォークに影響します。
redirect_from:
  - /articles/changing-the-visibility-of-a-network/
  - /articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

#### プライベートリポジトリを削除する

プライベートリポジトリを削除すると、そのプライベートフォークもすべて削除されます。

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

#### パブリックリポジトリを削除する

パブリックリポジトリを削除すると、既存のパブリックフォークの 1 つが新しい親リポジトリとして選択されます。 他のすべてのリポジトリはこの新しい親から分岐し、その後のプルリクエストはこの新しい親に送られます。

{% endif %}

#### プライベートフォークと権限

{% data reusables.repositories.private_forks_inherit_permissions %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

#### パブリックリポジトリをプライベートリポジトリに変更する

パブリックリポジトリを非公開にすると、そのパブリックフォークは新しいネットワークに分割されます。 パブリックリポジトリの削除と同様に、既存のパブリックフォークの 1 つが新しい親リポジトリとして選択され、他のすべてのリポジトリはこの新しい親から分岐されます。 後続のプルリクエストは、この新しい親に行きます。

言い換えれば、パブリックリポジトリのフォークは、親リポジトリが非公開にされた後も、独自の別のリポジトリネットワークで公開されたままになります。 これにより、フォークオーナーは作業を中断せずに作業を継続できます。 このようにパブリックフォークが別のネットワークに移動されなかった場合、それらのフォークのオーナーは適切な[アクセス許可](/articles/access-permissions-on-github)を取得してプルする必要があります。 以前はこれらのアクセス権が必要ではなかったとしても、(現在はプライベートになっている) 親リポジトリからの変更を取得して送信します。

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
パブリックリポジトリで匿名の Git 読み取りアクセスが有効になっていて、そのリポジトリが非公開になっている場合、リポジトリのすべてのフォークは匿名の Git 読み取りアクセスを失い、デフォルトの無効設定に戻ります。 分岐したリポジトリが公開された場合、リポジトリ管理者は匿名の Git 読み取りアクセスを再度有効にすることができます。 詳細は「[リポジトリに対する匿名 Git 読み取りアクセスを有効化する](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)」を参照してください。
{% endif %}

##### プライベートリポジトリを削除する

パブリックリポジトリを非公開にしてから削除しても、そのパブリックフォークは別のネットワークに存在し続けます。

#### プライベートリポジトリのパブリックリポジトリへの変更

プライベートリポジトリが公開されると、そのプライベートフォークはそれぞれスタンドアロンのプライベートリポジトリになり、独自の新しいリポジトリネットワークの親になります。 プライベートフォークは、公開されるべきではない機密のコミットを含む可能性があるため、自動的に公開されることはありません。

##### パブリックリポジトリを削除する

プライベートリポジトリを公開してから削除しても、そのプライベートフォークは独立したプライベートリポジトリとして別々のネットワークに存在し続けます。

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}

#### 内部リポジトリの表示を変更する

{% note %}

**注釈:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

Enterprise のポリシーでフォークが許可されている場合、内部リポジトリのフォークはすべてプライベートになります。 内部リポジトリの表示を変更した場合、Organization またはユーザアカウントが所有するフォークはすべてプライベートのままになります。

##### 内部リポジトリを削除する

内部リポジトリの表示を変更してからリポジトリを削除すると、フォークは別のネットワークに引き続き存在します。

{% endif %}

### 参考リンク

- 「[リポジトリの可視性を設定する](/articles/setting-repository-visibility)」
- [フォークについて](/articles/about-forks)
- 「[リポジトリのフォークポリシーを管理する](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)」
- "[Managing the forking policy for your organization](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)"
- 「{% if currentVersion == "free-pro-team@latest" %}[Enterprise アカウントでリポジトリ管理ポリシーを施行する](/github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account#enforcing-a-policy-on-forking-private-or-internal-repositories)」{% else %}「[Enterprise でリポジトリ管理ポリシーを施行する](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-forking-private-or-internal-repositories){% endif %}」
