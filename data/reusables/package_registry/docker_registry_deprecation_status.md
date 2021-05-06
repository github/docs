{% warning %}

**Note:** The {% data variables.product.prodname_registry %} Docker registry {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} will be superseded in a future {% data variables.product.product_name %} release with the {% data variables.product.prodname_capitalized_container_registry %}, which offers improved container support.{% elsif currentVersion == "free-pro-team@latest" %} is superseded by the {% data variables.product.prodname_capitalized_container_registry %}, which offers improved container support. {% endif %} {% if currentVersion == "free-pro-team@latest" %} To learn how to migrate your existing Docker images and any workflows using them, see "[Migrating to the {% data variables.product.prodname_capitalized_container_registry %} from the Docker registry](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)." {% endif %}

{% endwarning %}
