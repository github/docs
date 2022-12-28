---
title: リポジトリを移譲する
intro: 他のユーザや Organization アカウントにリポジトリを移譲できます。
redirect_from:
  - /articles/about-repository-transfers
  - /move-a-repo
  - /moving-a-repo
  - /articles/what-is-transferred-with-a-repository
  - /articles/what-is-transferred-with-a-repo
  - /articles/how-to-transfer-a-repo
  - /articles/how-to-transfer-a-repository
  - /articles/transferring-a-repository-owned-by-your-personal-account
  - /articles/transferring-a-repository-owned-by-your-organization
  - /articles/transferring-a-repository
  - /github/administering-a-repository/transferring-a-repository
  - /github/administering-a-repository/managing-repository-settings/transferring-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f37ebc1492ae26998a596d90734d1d509b8f73c9
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160681'
---
## リポジトリの移譲について

リポジトリを新たなオーナーに移譲すると、そのオーナーはすぐにリポジトリの内容、Issue、プルリクエスト、リリース、{% data variables.product.prodname_projects_v1 %}、そして設定を管理できるようになります。

リポジトリの移譲の前提条件:
- 所有しているリポジトリを別の個人用アカウントに移譲すると、新しいオーナーに確認のメールが送られます。{% ifversion fpt or ghec %}確認のメールには、移譲を受け入れる手順が記載されています。 新しいオーナーが移譲を 1 日以内に受け入れなければ、招待は期限切れになります。{% endif %}
- 自分が所有しているリポジトリを Organization に移譲するには、対象 Organization のリポジトリを作成する権限が必要です。
- ターゲットのアカウントは、同じ名前のリポジトリを持っていたり、同じネットワーク内にフォークを持っていたりしてはなりません。
- リポジトリのオリジナルのオーナーは、移譲されたリポジトリにコラボレーターとして追加されます。 移譲されたリポジトリの他のコラボレーターはそのまま変わりません。{% ifversion ghes < 3.7 or ghae %}
- 内部リポジトリを移譲することはできません。{% endif %}
- プライベートフォークは移譲できません。
{%- ifversion ghec %}
- 1 つの Enterprise アカウントが所有する Organization から、別の Enterprise アカウントが所有する Organization に内部リポジトリを転送することはできません。
{%- endif %}

{% ifversion fpt or ghec %}プライベート リポジトリを {% data variables.product.prodname_free_user %} ユーザーまたは Organization アカウントに移譲すると、リポジトリは保護されたブランチや {% data variables.product.prodname_pages %} などの機能にアクセスできなくなります。 {% data reusables.gated-features.more-info %}{% endif %}

### リポジトリと共に移譲されるものは？

リポジトリを移譲すると、その Issue、プルリクエスト、ウィキ、Star、そして Watch しているユーザも移譲されます。 移譲されたリポジトリに webhook、サービス、シークレット、あるいはデプロイキーが含まれている場合、移譲が完了した後もそれらは関連付けられたままになります。 コミットに関する Git の情報は、コントリビューションを含めて保持されます。 さらに:

- 移譲されたリポジトリがフォークである場合、それは上流のリポジトリに関連付けられたままになります。
- 移譲されたリポジトリにフォークがある場合、それらのフォークは移譲が完了した後リポジトリに関連付けられたままになります。
- 移譲されたリポジトリが {% data variables.large_files.product_name_long %} を使う場合、すべての {% data variables.large_files.product_name_short %} オブジェクトは自動的に移動します。 この移譲はバックグラウンドで行われます。このため、多数の {% data variables.large_files.product_name_short %} オブジェクトがあるか、{% data variables.large_files.product_name_short %} オブジェクト自体のサイズが大きい場合、移譲には時間がかかることがあります。{% ifversion fpt or ghec %}{% data variables.large_files.product_name_short %} を利用するリポジトリを移譲する前に、受信側のアカウントが、移動する {% data variables.large_files.product_name_short %} オブジェクトを保存するために十分なデータ パックを所有していることを確認してください。 個人用アカウントにストレージを追加する方法について詳しくは、「[{% data variables.large_files.product_name_long %} をアップグレードする](/articles/upgrading-git-large-file-storage)」をご覧ください。{% endif %}
- リポジトリを 2 つの個人用アカウント間で移譲する場合、Issue の割り当てはそのまま残ります。 個人用アカウントから Organization にリポジトリを移譲する場合、Organization のメンバーに割り当てられた Issue はそのまま残ります。その他のすべての Issue 担当者はクリアされます。 Organization の中のオーナーだけが、新しい Issue のアサインを作成できます。 Organization から個人用アカウントにリポジトリを移譲する場合、リポジトリのオーナーに割り当てられた Issue のみが保持されて、その他のすべての Issue 担当者は削除されます。
- 移譲されたリポジトリが {% data variables.product.prodname_pages %} サイトを含む場合、Web 上の Git リポジトリへのリンクや Git のアクティビティを通じたリンクはリダイレクトされます。 しかし、リポジトリに関連付けられている {% data variables.product.prodname_pages %} はリダイレクトされません。
- 以前のリポジトリの場所へのすべてのリンクは、新しい場所へ自動的にリダイレクトされます。 移譲されたリポジトリで `git clone`、`git fetch`、または `git push` を使う場合には、これらのコマンドは新しいリポジトリの場所または URL にリダイレクトされます。 しかし、混乱を避けるため、既存のローカルクローンは新しいリポジトリの URL を指すよう更新することを強くおすすめします。 これはコマンド ラインで `git remote` を使うことで行えます。

  ```shell
  $ git remote set-url origin NEW_URL
  ```

  {% warning %}

  **警告**: 将来的にアカウントで新しいリポジトリを作成する場合、移譲したリポジトリの元の名前を再利用しないでください。 そうすると、移譲されたリポジトリへのリダイレクトは機能しなくなります。

  {% endwarning %}

- Organization から個人用アカウントにリポジトリを移譲する場合、リポジトリの読み取り専用コラボレーターは移譲されません。 個人用アカウントが所有するリポジトリに対して、コラボレーターが読み取り専用アクセス権を持つことはできないからです。 リポジトリの権限レベルについて詳しくは、「[個人用アカウントのリポジトリの権限レベル](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)」と「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」をご覧ください。{% ifversion fpt or ghec %}
- スポンサーシップ層を通じてリポジトリにアクセスできるスポンサーが影響を受ける可能性があります。 詳しくは、「[スポンサーシップ層へのリポジトリの追加](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers#adding-a-repository-to-a-sponsorship-tier)」をご覧ください。{% endif %}

詳細については、「[リモート リポジトリを管理する](/github/getting-started-with-github/managing-remote-repositories)」を参照してください。

### リポジトリの移譲および Organization

Organization にリポジトリを移譲するには、受け取る Organization でのリポジトリ作成許可を持っている必要があります。 Organization のオーナーが Organization のメンバーによるリポジトリ作成を無効化している場合、Organization のオーナーだけが、その Organization に対して、または、Organization からリポジトリを移譲できます。

Organization にリポジトリが移譲されたら、Organization のデフォルトのリポジトリ許可設定およびデフォルトのメンバーシップの権利が、移譲されたリポジトリに適用されます。

## 個人アカウントが所有しているリポジトリを移譲する

リポジトリの移譲を受け入れるどの個人用アカウントにも、リポジトリを移譲できます。 2 つの個人用アカウント間でリポジトリを移譲する場合、元のリポジトリ オーナーとコラボレーターは、新しいリポジトリにコラボレーターとして自動的に追加されます。

{% ifversion fpt or ghec %}プライベート リポジトリに {% data variables.product.prodname_pages %} サイトを公開し、カスタム ドメインを追加した場合、ドメイン乗っ取りのリスクを避けるために、リポジトリを移譲する前に DNS レコードを削除または更新することをお勧めします。 詳しくは、「[{% data variables.product.prodname_pages %} サイトのカスタム ドメインを管理する](/articles/managing-a-custom-domain-for-your-github-pages-site)」をご覧ください。{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.transfer-repository-steps %}

## Organization が所有しているリポジトリを移譲する

Organization でオーナー権限がある場合、または Organization のリポジトリの 1 つに対する管理者権限がある場合、Organization が所有しているリポジトリを個人用アカウントまたは別の Organization に移譲できます。

1. リポジトリを所有している Organization で管理者またはオーナー権限がある個人用アカウントにサインインします。
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.transfer-repository-steps %}
