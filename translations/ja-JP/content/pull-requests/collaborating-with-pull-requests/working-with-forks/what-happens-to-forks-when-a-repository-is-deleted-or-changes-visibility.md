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
ms.openlocfilehash: 95296f33d9163cd1171481386efd0a2351095c39
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191360'
---
{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

## プライベートリポジトリを削除する

プライベートリポジトリを削除すると、そのプライベートフォークもすべて削除されます。

{% ifversion fpt or ghes or ghec %}

## パブリックリポジトリを削除する

パブリック リポジトリを削除すると、既存のパブリック フォークの 1 つが新しい上流リポジトリとして選択されます。 他のすべてのリポジトリはこの新しい上流から分岐し、その後の pull request はこの新しい上流リポジトリに送られます。

{% endif %}

## プライベートフォークと権限

{% data reusables.repositories.private_forks_inherit_permissions %}

{% ifversion fpt or ghes or ghec %}

## パブリックリポジトリをプライベートリポジトリに変更する

パブリックリポジトリを非公開にすると、そのパブリックフォークは新しいネットワークに分割されます。 パブリック リポジトリの削除と同様に、既存のパブリック フォークの 1 つが新しい上流リポジトリとして選択され、他のすべてのリポジトリはこの新しい上流から分岐します。 後続の pull request は、この新しい上流リポジトリに送られます。

つまり、パブリック リポジトリのフォークは、上流リポジトリがプライベートにされた後も、独自の別のリポジトリ ネットワーク内でパブリックのままになります。 これにより、フォークオーナーは作業を中断せずに作業を継続できます。 このようにパブリック フォークが別のネットワークに移動されなかった場合、それらのフォークの所有者は、適切な[アクセス許可](/articles/access-permissions-on-github)を取得して、(現在はプライベートになっている) 上流リポジトリから変更をプルし、pull request を送信する必要があります (以前はそれらのアクセス許可が必要ではなかったとしても)。

{% ifversion ghes or ghae %} パブリック リポジトリで匿名の Git 読み取りアクセスが有効になっていて、そのリポジトリが非公開になっている場合、リポジトリのすべてのフォークは匿名の Git 読み取りアクセスを失い、既定の無効設定に戻ります。 分岐したリポジトリが公開された場合、リポジトリ管理者は匿名の Git 読み取りアクセスを再度有効にすることができます。 詳細については、「[リポジトリに対する匿名 Git 読み取りアクセスの有効化](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository)」を参照してください。
{% endif %}

### プライベートリポジトリを削除する

パブリックリポジトリを非公開にしてから削除しても、そのパブリックフォークは別のネットワークに存在し続けます。

## プライベートリポジトリのパブリックリポジトリへの変更

プライベート リポジトリがパブリックに変更されると、そのプライベート フォークはそれぞれスタンドアロンのプライベート リポジトリになり、独自の新しいリポジトリ ネットワークの上流になります。 プライベートフォークは、公開されるべきではない機密のコミットを含む可能性があるため、自動的に公開されることはありません。

### パブリックリポジトリを削除する

プライベートリポジトリを公開してから削除しても、そのプライベートフォークは独立したプライベートリポジトリとして別々のネットワークに存在し続けます。

{% endif %}

{% ifversion ghes or ghec or ghae %}

## 内部リポジトリの表示を変更する



Enterprise のポリシーでフォークが許可されている場合、内部リポジトリのフォークはすべてプライベートになります。 内部リポジトリの表示を変更した場合、Organization または個人アカウントが所有するフォークはすべてプライベートのままになります。

### 内部リポジトリを削除する

内部リポジトリの表示を変更してからリポジトリを削除すると、フォークは別のネットワークに引き続き存在します。

{% endif %}

## 参考資料

- 「[リポジトリの可視性を設定する](/articles/setting-repository-visibility)」
- 「[フォークについて](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)」
- 「[リポジトリのフォーク ポリシーを管理する](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)」
- 「[Organization のフォーク ポリシーを管理する](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)」
- 「[Enterprise でリポジトリ管理ポリシーを適用する](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-forking-private-or-internal-repositories)」
