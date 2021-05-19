{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Comparing the Docker registry and the {% data variables.product.prodname_container_registry %}:**
- The {% data variables.product.prodname_container_registry %} (`https://ghcr.io`) offers improved performance for containers and will supercede the Docker registry in the future.
- You can migrate your Docker images and workflows from the Docker registry  (`docker.pkg.github.com`)  to the {% data variables.product.prodname_container_registry %} (`https://ghcr.io`) for granular permissions, container storage optimization, and more. For more information, see "[Migrating to the {% data variables.product.prodname_container_registry %} from the Docker registry](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)."

{% endnote %}
{% endif %}
