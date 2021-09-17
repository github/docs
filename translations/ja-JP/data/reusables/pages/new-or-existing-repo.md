サイトが独立プロジェクトなら、サイトのソースコードを保存するために新しいリポジトリを作成できます。 サイトが既存のプロジェクトと関連しているなら、ソースコードを{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}そのサイトのプロジェクトのリポジトリのデフォルトブランチの`/docs`、もしくは他のブランチに{% else %}サイト用に`gh-pages`ブランチもしくはそのプロジェクトのリポジトリの`master`ブランチ上の`docs`フォルダに{% endif %}追加できます。たとえば、すでに{% data variables.product.product_name %}上にあるプロジェクトのためのドキュメンテーションを公開するサイトを作成しているなら、そのサイトのソースコードをプロジェクトと同じリポジトリに保存したいでしょう。

{% if currentVersion == "free-pro-team@latest" %}リポジトリを保有しているアカウントが{% data variables.product.prodname_free_user %}もしくはOrganization用の{% data variables.product.prodname_free_team %}を使用しているなら、リポジトリはパブリックでなければなりません。{% endif %}

既存のリポジトリにサイトを作成したいのなら、[サイトの作成](#creating-your-site)セクションまでスキップしてください。
