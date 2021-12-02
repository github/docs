{% data variables.product.prodname_registry %}でパッケージを公開、インストール、削除するにはアクセストークンが必要です。

You can use a personal access token (PAT) to authenticate to {% data variables.product.prodname_registry %} or the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API. 個人トークンを作成する際には、必要に応じて様々なスコープをトークンに割り当てできます。 PATに関するパッケージ関連のスコープについての詳しい情報は、「[GitHub Packagesの権限について](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)」を参照してください。

{% data variables.product.prodname_actions %}ワークフロー内で{% data variables.product.prodname_registry %}レジストリに認証を受けるには、以下の方法が使えます。
- `GITHUB_TOKEN`を使って、ワークフローリポジトリに関連づけられたパッケージを公開。
- PATで他のプライベートリポジトリ（これには`GITHUB_TOKEN`がアクセスできない）に関連づけられたパッケージをインストール。
