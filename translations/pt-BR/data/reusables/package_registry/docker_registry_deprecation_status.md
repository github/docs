{% warning %}

**Note:** The {% data variables.product.prodname_registry %} Docker registry {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} will offer improved container support in a future {% data variables.product.product_name %} release.{% elsif currentVersion == "free-pro-team@latest" %} now offers improved container support. For more information, see "[About GitHub Container Registry](/packages/guides/about-github-container-registry)." To learn how to migrate your existing Docker images and any workflows using them, see "[Migrating to {% data variables.product.prodname_github_container_registry %} for Docker images](/packages/guides/migrating-to-github-container-registry-for-docker-images)" and "[Container guides for {% data variables.product.prodname_registry %}](/packages/guides/container-guides-for-github-packages)."{% endif %}

{% endwarning %}
