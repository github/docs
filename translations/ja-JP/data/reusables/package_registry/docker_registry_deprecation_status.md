{% warning %}

**ノート:**{% data variables.product.prodname_registry %} Dockerレジストリは、{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}将来の{% data variables.product.product_name %}リリースで改善されたコンテナサポートを提供します。{% elsif currentVersion == "free-pro-team@latest" %}改善されたコンテナサポートを提供しています。 詳しい情報については「[GitHub Container Registryについて](/packages/guides/about-github-container-registry)」を参照してください。 既存のDockerイメージと、それらを使うワークフローの移行方法を学ぶには、「[Dockerイメージのための{% data variables.product.prodname_github_container_registry %}への移行](/packages/guides/migrating-to-github-container-registry-for-docker-images)」及び「[{% data variables.product.prodname_registry %}のためのコンテナガイド](/packages/guides/container-guides-for-github-packages)」を参照してください。{% endif %}

{% endwarning %}
