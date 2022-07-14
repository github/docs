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
---

## リポジトリの移譲について

リポジトリを新たなオーナーに移譲すると、そのオーナーはすぐにリポジトリの内容、Issue、プルリクエスト、リリース、プロジェクトボード、そして設定を管理できるようになります。

Prerequisites for repository transfers:
- When you transfer a repository that you own to another personal account, the new owner will receive a confirmation email.{% ifversion fpt or ghec %} The confirmation email includes instructions for accepting the transfer. 新しいオーナーが移譲を 1 日以内に受け入れなければ、招待は期限切れになります。{% endif %}
- 自分が所有しているリポジトリを Organization に移譲するには、対象 Organization のリポジトリを作成する権限が必要です。
- ターゲットのアカウントは、同じ名前のリポジトリを持っていたり、同じネットワーク内にフォークを持っていたりしてはなりません。
- リポジトリのオリジナルのオーナーは、移譲されたリポジトリにコラボレーターとして追加されます。 Other collaborators to the transferred repository remain intact.{% ifversion ghec or ghes or ghae %}
- Internal repositories can't be transferred.{% endif %}
- プライベートフォークは移譲できません。

{% ifversion fpt or ghec %}プライベートリポジトリを {% data variables.product.prodname_free_user %} ユーザまたは Organization アカウントに移譲すると、リポジトリは保護されたブランチや {% data variables.product.prodname_pages %} などの機能にアクセスできなくなります。 {% data reusables.gated-features.more-info %}{% endif %}

### リポジトリと共に移譲されるものは？

リポジトリを移譲すると、その Issue、プルリクエスト、ウィキ、Star、そして Watch しているユーザも移譲されます。 移譲されたリポジトリに webhook、サービス、シークレット、あるいはデプロイキーが含まれている場合、移譲が完了した後もそれらは関連付けられたままになります。 コミットに関する Git の情報は、コントリビューションを含めて保持されます。 加えて、

- 移譲されたリポジトリがフォークである場合、それは上流のリポジトリに関連付けられたままになります。
- 移譲されたリポジトリにフォークがある場合、それらのフォークは移譲が完了した後リポジトリに関連付けられたままになります。
- 移譲されたリポジトリが {% data variables.large_files.product_name_long %} を使う場合、すべての {% data variables.large_files.product_name_short %} オブジェクトは自動的に移動します。 This transfer occurs in the background, so if you have a large number of {% data variables.large_files.product_name_short %} objects or if the {% data variables.large_files.product_name_short %} objects themselves are large, it may take some time for the transfer to occur.{% ifversion fpt or ghec %} Before you transfer a repository that uses {% data variables.large_files.product_name_short %}, make sure the receiving account has enough data packs to store the {% data variables.large_files.product_name_short %} objects you'll be moving over. 個人アカウントにストレージを追加する方法の詳細については、「[{% data variables.large_files.product_name_long %} をアップグレードする](/articles/upgrading-git-large-file-storage)」を参照してください。{% endif %}
- When a repository is transferred between two personal accounts, issue assignments are left intact. When you transfer a repository from a personal account to an organization, issues assigned to members in the organization remain intact, and all other issue assignees are cleared. Organization の中のオーナーだけが、新しい Issue のアサインを作成できます。 When you transfer a repository from an organization to a personal account, only issues assigned to the repository's owner are kept, and all other issue assignees are removed.
- 移譲されたリポジトリが {% data variables.product.prodname_pages %} サイトを含む場合、Web 上の Git リポジトリへのリンクや Git のアクティビティを通じたリンクはリダイレクトされます。 しかし、リポジトリに関連付けられている {% data variables.product.prodname_pages %} はリダイレクトされません。
- 以前のリポジトリの場所へのすべてのリンクは、新しい場所へ自動的にリダイレクトされます。 移譲されたリポジトリ上で `git clone`、`git fetch`、または `git push` を使う場合には、これらのコマンドは新しいリポジトリの場所あるいは URL にリダイレクトされます。 しかし、混乱を避けるため、既存のローカルクローンは新しいリポジトリの URL を指すよう更新することを強くおすすめします。 それは `git remote` をコマンドライン上で使って行えます。

  ```shell
  $ git remote set-url origin <em>新しい URL</em>
  ```

- When you transfer a repository from an organization to a personal account, the repository's read-only collaborators will not be transferred. This is because collaborators can't have read-only access to repositories owned by a personal account. For more information about repository permission levels, see "[Permission levels for a personal account repository](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)" and "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."{% ifversion fpt or ghec %}
- Sponsors who have access to the repository through a sponsorship tier may be affected. For more information, see "[Adding a repository to a sponsorship tier](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers#adding-a-repository-to-a-sponsorship-tier)".{% endif %}

詳しい情報については「[リモートリポジトリの管理](/github/getting-started-with-github/managing-remote-repositories)」を参照してください。

### リポジトリの移譲および Organization

Organization にリポジトリを移譲するには、受け取る Organization でのリポジトリ作成許可を持っている必要があります。 Organization のオーナーが Organization のメンバーによるリポジトリ作成を無効化している場合、Organization のオーナーだけが、その Organization に対して、または、Organization からリポジトリを移譲できます。

Organization にリポジトリが移譲されたら、Organization のデフォルトのリポジトリ許可設定およびデフォルトのメンバーシップの権利が、移譲されたリポジトリに適用されます。

## 個人アカウントが所有しているリポジトリを移譲する

You can transfer your repository to any personal account that accepts your repository transfer. When a repository is transferred between two personal accounts, the original repository owner and collaborators are automatically added as collaborators to the new repository.

{% ifversion fpt or ghec %}If you published a {% data variables.product.prodname_pages %} site in a private repository and added a custom domain, before transferring the repository, you may want to remove or update your DNS records to avoid the risk of a domain takeover. 詳しい情報については、「[{% data variables.product.prodname_pages %} サイト用のカスタムドメインを管理する](/articles/managing-a-custom-domain-for-your-github-pages-site)」を参照してください。{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.transfer-repository-steps %}

## Organization が所有しているリポジトリを移譲する

If you have owner permissions in an organization or admin permissions to one of its repositories, you can transfer a repository owned by your organization to your personal account or to another organization.

1. Sign into your personal account that has admin or owner permissions in the organization that owns the repository.
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.transfer-repository-steps %}
