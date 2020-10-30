{% data variables.product.prodname_registry %}でパッケージを公開、インストール、削除するにはアクセストークンが必要です。 {% data variables.product.prodname_registry %}に直接、あるいは{% data variables.product.prodname_dotcom %} APIでユーザ名で認証を受けるのに、個人のアクセストークンが利用できます。 個人トークンを作成する際には、必要に応じて様々なスコープをトークンに割り当てできます。

{% if currentVersion == "free-pro-team@latest" %}
To authenticate using a {% data variables.product.prodname_actions %} workflow:
- For package registries (`PACKAGE-REGISTRY.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`), you can use a `GITHUB_TOKEN`.
- For the container registry (`ghcr.io/OWNER/IMAGE-NAME`), you must use a personal access token.
{% else %}
To authenticate to {% data variables.product.prodname_registry %} using a {% data variables.product.prodname_actions %} workflow, you must use `GITHUB_TOKEN`.
{% endif %}
