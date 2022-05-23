---
title: リポジトリが削除されたり可視性が変更されたりするとフォークはどうなりますか？
intro: リポジトリを削除したり、その可視性を変更したりすると、そのリポジトリのフォークに影響します。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /articles/changing-the-visibility-of-a-network
  - /articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-issues-and-pull-requests/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Deleted or changes visibility
---

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

## プライベートリポジトリを削除する

プライベートリポジトリを削除すると、そのプライベートフォークもすべて削除されます。

{% ifversion fpt or ghes or ghec %}

## パブリックリポジトリを削除する

パブリックリポジトリを削除すると、既存のパブリックフォークの 1 つが新しい親リポジトリとして選択されます。 他のすべてのリポジトリはこの新しい親から分岐し、その後のプルリクエストはこの新しい親に送られます。

{% endif %}

## プライベートフォークと権限

{% data reusables.repositories.private_forks_inherit_permissions %}

{% ifversion fpt or ghes or ghec %}

## パブリックリポジトリをプライベートリポジトリに変更する

パブリックリポジトリを非公開にすると、そのパブリックフォークは新しいネットワークに分割されます。 パブリックリポジトリの削除と同様に、既存のパブリックフォークの 1 つが新しい親リポジトリとして選択され、他のすべてのリポジトリはこの新しい親から分岐されます。 後続のプルリクエストは、この新しい親に行きます。

言い換えれば、パブリックリポジトリのフォークは、親リポジトリが非公開にされた後も、独自の別のリポジトリネットワークで公開されたままになります。 これにより、フォークオーナーは作業を中断せずに作業を継続できます。 このようにパブリックフォークが別のネットワークに移動されなかった場合、それらのフォークのオーナーは適切な[アクセス許可](/articles/access-permissions-on-github)を取得してプルする必要があります。 以前はこれらのアクセス権が必要ではなかったとしても、(現在はプライベートになっている) 親リポジトリからの変更を取得して送信します。

{% ifversion ghes or ghae %}
パブリックリポジトリで匿名の Git 読み取りアクセスが有効になっていて、そのリポジトリが非公開になっている場合、リポジトリのすべてのフォークは匿名の Git 読み取りアクセスを失い、デフォルトの無効設定に戻ります。 分岐したリポジトリが公開された場合、リポジトリ管理者は匿名の Git 読み取りアクセスを再度有効にすることができます。 詳細は「[リポジトリに対する匿名 Git 読み取りアクセスを有効化する](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)」を参照してください。
{% endif %}

### プライベートリポジトリを削除する

パブリックリポジトリを非公開にしてから削除しても、そのパブリックフォークは別のネットワークに存在し続けます。

## プライベートリポジトリのパブリックリポジトリへの変更

プライベートリポジトリが公開されると、そのプライベートフォークはそれぞれスタンドアロンのプライベートリポジトリになり、独自の新しいリポジトリネットワークの親になります。 プライベートフォークは、公開されるべきではない機密のコミットを含む可能性があるため、自動的に公開されることはありません。

### パブリックリポジトリを削除する

プライベートリポジトリを公開してから削除しても、そのプライベートフォークは独立したプライベートリポジトリとして別々のネットワークに存在し続けます。

{% endif %}

{% ifversion ghes or ghec or ghae %}

## 内部リポジトリの表示を変更する



Enterprise のポリシーでフォークが許可されている場合、内部リポジトリのフォークはすべてプライベートになります。 If you change the visibility of an internal repository, any fork owned by an organization or personal account will remain private.

### 内部リポジトリを削除する

内部リポジトリの表示を変更してからリポジトリを削除すると、フォークは別のネットワークに引き続き存在します。

{% endif %}

## 参考リンク

- 「[リポジトリの可視性を設定する](/articles/setting-repository-visibility)」
- 「[フォークについて](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)」
- 「[リポジトリのフォークポリシーを管理する](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)」
- 「[Organization のフォークポリシーを管理する](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)」
- "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-forking-private-or-internal-repositories)"
