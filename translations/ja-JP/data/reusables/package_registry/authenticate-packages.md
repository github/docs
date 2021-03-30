{{ site.data.variables.product.prodname_registry }}でパッケージを公開、インストール、削除するにはアクセストークンが必要です。 {% data variables.product.prodname_registry %}に直接、あるいは{% data variables.product.prodname_dotcom %} APIでユーザ名で認証を受けるのに、個人のアクセストークンが利用できます。 個人トークンを作成する際には、必要に応じて様々なスコープをトークンに割り当てできます。

{% if currentVersion == "free-pro-team@latest" %}
認証を
{% data variables.product.prodname_actions %}のワークフローで行うには:
- パッケージレジストリの場合(`PACKAGE-REGISTRY.pkg.github.com`)は、`GITHUB_TOKEN`を利用できます。
- For the container registry (`ghcr.io/OWNER/IMAGE-NAME`), you can use a `GITHUB_TOKEN` or a personal access token. We strongly recommend you use a `GITHUB_TOKEN` to avoid unncessary access to your repositories.

For more information about `GITHUB_TOKEN` used in {% data variables.product.prodname_actions %} workflows, see "[Encrypted secrets](/actions/reference/encrypted-secrets)" and "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)."

{% else %}
認証を
{% data variables.product.prodname_actions %}ワークフローを使って{% data variables.product.prodname_registry %}に対して行うには、`GITHUB_TOKEN`を使わなければなりません。
{% endif %}
