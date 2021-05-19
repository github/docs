{% warning %}

**ノート:** {% data variables.product.prodname_registry %} Dockerレジストリは{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}将来の{% data variables.product.product_name %}リリースで{% data variables.product.prodname_container_registry %}とともに置き換えられます。これは改善されたコンテナサポートを提供します。{% elsif currentVersion == "free-pro-team@latest" %}、改善されたコンテナサポートを提供する{% data variables.product.prodname_container_registry %}によって置き換えられます。 {% endif %}{% if currentVersion == "free-pro-team@latest" %}既存のDockerイメージと、それらを使うワークフローの移行方法を学ぶには、「[Dockerレジストリから{% data variables.product.prodname_container_registry %}への移行](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)」を参照してください。 {% endif %}

{% endwarning %}
