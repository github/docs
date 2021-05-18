---
title: リポジトリを移譲する
intro: 他のユーザや Organization アカウントにリポジトリを移譲できます。
redirect_from:
  - /articles/about-repository-transfers/
  - /move-a-repo/
  - /moving-a-repo/
  - /articles/what-is-transferred-with-a-repository/
  - /articles/what-is-transferred-with-a-repo/
  - /articles/how-to-transfer-a-repo/
  - /articles/how-to-transfer-a-repository/
  - /articles/transferring-a-repository-owned-by-your-personal-account/
  - /articles/transferring-a-repository-owned-by-your-organization/
  - /articles/transferring-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

### リポジトリの移譲について

リポジトリを新たなオーナーに移譲すると、そのオーナーはすぐにリポジトリの内容、Issue、プルリクエスト、リリース、プロジェクトボード、そして設定を管理できるようになります。

リポジトリを移譲するための必須条件は以下の通りです。{% if currentVersion == "free-pro-team@latest" %}
- 自分が所有しているリポジトリを他のユーザアカウントに移譲すると、新しい所有者に確認メールが届きます。 確認メールには、移譲を受け入れるための指示が書かれています。 新しいオーナーが移譲を 1 日以内に受け入れなければ、招待は期限切れになります。{% endif %}
- 自分が所有しているリポジトリを Organization に移譲するには、対象 Organization のリポジトリを作成する権限が必要です。
- ターゲットのアカウントは、同じ名前のリポジトリを持っていたり、同じネットワーク内にフォークを持っていたりしてはなりません。
- リポジトリのオリジナルのオーナーは、移譲されたリポジトリにコラボレーターとして追加されます。 他のコラボレーターは、移譲されたリポジトリにそのまま残されます。
- プライベートフォークは移譲できません。

{% if currentVersion == "free-pro-team@latest" %}プライベートリポジトリを {% data variables.product.prodname_free_user %} ユーザまたは Organization アカウントに移譲すると、リポジトリは保護されたブランチや {% data variables.product.prodname_pages %} などの機能にアクセスできなくなります。 {% data reusables.gated-features.more-info %}{% endif %}

#### リポジトリと共に移譲されるものは？

リポジトリを移譲すると、その Issue、プルリクエスト、ウィキ、Star、そして Watch しているユーザも移譲されます。 移譲されたリポジトリに webhook、サービス、シークレット、あるいはデプロイキーが含まれている場合、移譲が完了した後もそれらは関連付けられたままになります。 コミットに関する Git の情報は、コントリビューションを含めて保持されます。 加えて、

- 移譲されたリポジトリがフォークである場合、それは上流のリポジトリに関連付けられたままになります。
- 移譲されたリポジトリにフォークがある場合、それらのフォークは移譲が完了した後リポジトリに関連付けられたままになります。
- 移譲されたリポジトリが {% data variables.large_files.product_name_long %} を使う場合、すべての {% data variables.large_files.product_name_short %} オブジェクトは自動的に移動します。 この移譲はバックグラウンドで行われます。そのため、多数の {% data variables.large_files.product_name_short %} オブジェクトがあるか、{% data variables.large_files.product_name_short %} オブジェクト自体が大容量である場合、移譲には時間がかかることがあります。{% if currentVersion == "free-pro-team@latest" %}{% data variables.large_files.product_name_short %} を利用するリポジトリを移譲する前に、受信側のアカウントが、移動する {% data variables.large_files.product_name_short %} オブジェクトを保存するために十分なデータパックを所有していることを確認してください。 ユーザアカウントにストレージを追加する方法の詳細については、「[{% data variables.large_files.product_name_long %} をアップグレードする](/articles/upgrading-git-large-file-storage)」を参照してください。{% endif %}
- リポジトリを 2 つのユーザアカウント間で移譲する場合、Issue の割り当てはそのまま残ります。 ユーザアカウントから Organization にリポジトリを移譲する場合、Organization のメンバーにアサインされた Issue はそのまま残ります。そして、すべての他の Issue のアサイニーは消えます。 Organization の中のオーナーだけが、新しい Issue のアサインを作成できます。 Organization からユーザアカウントにリポジトリを移譲する場合、リポジトリのオーナーにアサインされた Issue だけが保管され、すべての他のアサイニーは削除されます。
- 移譲されたリポジトリが {% data variables.product.prodname_pages %} サイトを含む場合、Web 上の Git リポジトリへのリンクや Git のアクティビティを通じたリンクはリダイレクトされます。 しかし、リポジトリに関連付けられている {% data variables.product.prodname_pages %} はリダイレクトされません。
- 以前のリポジトリの場所へのすべてのリンクは、新しい場所へ自動的にリダイレクトされます。 移譲されたリポジトリ上で `git clone`、`git fetch`、または `git push` を使う場合には、これらのコマンドは新しいリポジトリの場所あるいは URL にリダイレクトされます。 しかし、混乱を避けるため、既存のローカルクローンは新しいリポジトリの URL を指すよう更新することを強くおすすめします。 それは `git remote` をコマンドライン上で使って行えます。

  ```shell
  $ git remote set-url origin <em>新しい URL</em>
  ```

For more information, see "[Managing remote repositories](/github/getting-started-with-github/managing-remote-repositories)."

#### リポジトリの移譲および Organization

Organization にリポジトリを移譲するには、受け取る Organization でのリポジトリ作成許可を持っている必要があります。 Organization のオーナーが Organization のメンバーによるリポジトリ作成を無効化している場合、Organization のオーナーだけが、その Organization に対して、または、Organization からリポジトリを移譲できます。

Organization にリポジトリが移譲されたら、Organization のデフォルトのリポジトリ許可設定およびデフォルトのメンバーシップの権利が、移譲されたリポジトリに適用されます。

### ユーザアカウントが所有しているリポジトリを移譲する

リポジトリの移譲を受け入れるどのユーザアカウントにも、リポジトリを移譲できます。 ２つのユーザアカウントの間でリポジトリを移譲した場合、当初のリポジトリコードオーナーとコラボレーターは、新しいリポジトリにコラボレーターとして自動的に追加されます。

{% if currentVersion == "free-pro-team@latest" %}プライベートリポジトリに {% data variables.product.prodname_pages %} サイトを公開し、カスタムドメインを追加した場合、ドメイン乗っ取りのリスクを回避するため、DNS レコードを削除するか更新することをおすすめします。 詳しい情報については、「[{% data variables.product.prodname_pages %} サイト用のカスタムドメインを管理する](/articles/managing-a-custom-domain-for-your-github-pages-site)」を参照してください。{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.transfer-repository-steps %}

### Organization が所有しているリポジトリを移譲する

Organization のコードオーナー権限、または、そのリポジトリの 1 つの管理者権限を有している場合、Organization が所有しているリポジトリをユーザアカウントや他の Organization に移譲できます。

1. リポジトリのある Organization で管理者またはオーナー権限を有しているユーザアカウントにサインインします。
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.transfer-repository-steps %}
