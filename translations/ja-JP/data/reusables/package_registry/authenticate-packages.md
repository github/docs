{{ site.data.variables.product.prodname_registry }}でパッケージを公開、インストール、削除するにはアクセストークンが必要です。 {% data variables.product.prodname_registry %}に直接、あるいは{% data variables.product.prodname_dotcom %} APIでユーザ名で認証を受けるのに、個人のアクセストークンが利用できます。 個人トークンを作成する際には、必要に応じて様々なスコープをトークンに割り当てできます。

{% if currentVersion == "free-pro-team@latest" %}
認証を
{% data variables.product.prodname_actions %}のワークフローで行うには:
- パッケージレジストリの場合(`PACKAGE-REGISTRY.pkg.github.com`)は、`GITHUB_TOKEN`を利用できます。
- コンテナレジストリ（`ghcr.io/OWNER/IMAGE-NAME`）の場合は、`GITHUB_TOKEN`もしくは個人アクセストークンを利用できます。 `GITHUB_TOKEN`を利用し、リポジトリに不要なアクセスをしないようにすることを強くおすすめします。

{% data variables.product.prodname_actions %}ワークフローで使われる`GITHUB_TOKEN`に関する情報については、「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」及び「[ワークフロー内での認証](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)」を参照してください。

{% else %}
認証を
{% data variables.product.prodname_actions %}ワークフローを使って{% data variables.product.prodname_registry %}に対して行うには、`GITHUB_TOKEN`を使わなければなりません。
{% endif %}
