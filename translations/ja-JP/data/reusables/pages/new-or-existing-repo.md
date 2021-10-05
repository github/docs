サイトが独立プロジェクトなら、サイトのソースコードを保存するために新しいリポジトリを作成できます。 サイトが既存のプロジェクトと関連しているなら、ソースコードを{% ifversion fpt or ghes > 2.22 or ghae %}そのサイトのプロジェクトのリポジトリのデフォルトブランチの`/docs`、もしくは他のブランチに{% else %}サイト用に`gh-pages`ブランチもしくはそのプロジェクトのリポジトリの`master`ブランチ上の`docs`フォルダに{% endif %}追加できます。たとえば、すでに{% data variables.product.product_name %}上にあるプロジェクトのためのドキュメンテーションを公開するサイトを作成しているなら、そのサイトのソースコードをプロジェクトと同じリポジトリに保存したいでしょう。

{% ifversion fpt %}リポジトリを所有しているアカウントが{% data variables.product.prodname_free_user %}もしくはOrganization用の{% data variables.product.prodname_free_team %}を使用しているなら、そのリポジトリはパブリックでなければなりません。{% endif %}

既存のリポジトリにサイトを作成したいのなら、[サイトの作成](#creating-your-site)セクションまでスキップしてください。
