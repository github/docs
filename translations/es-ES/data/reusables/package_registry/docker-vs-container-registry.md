{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Comparando el registro de Docker y el {% data variables.product.prodname_container_registry %}:**
- El {% data variables.product.prodname_container_registry %} (`https://ghcr.io`) ofrece un rendimiento mejorado para los contenedores y sustituirá al registro de Docker en el futuro.
- Puedes migrar tus imágenes de Docker y flujos de trabajo del registro de Docker (`docker.pkg.github.com`)  al {% data variables.product.prodname_container_registry %} (`https://ghcr.io`) para tener permisos granulares, optimización de almacenamiento de contenedor y más. Para obtener más información, consulta la sección "[Migrarse al {% data variables.product.prodname_container_registry %} desde el registro de Docker](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)".

{% endnote %}
{% endif %}
