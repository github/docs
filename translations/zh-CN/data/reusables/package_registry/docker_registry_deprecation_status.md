{% warning %}

**注：**{% data variables.product.prodname_registry %} Docker 注册表 {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} 将在未来的 {% data variables.product.product_name %} 版本中被 {% data variables.product.prodname_container_registry %} 取代，后者将提供更好的容器支持。{% elsif currentVersion == "free-pro-team@latest" %} 被 {% data variables.product.prodname_container_registry %} 取代，后者提供更好的容器支持。 {% endif %} {% if currentVersion == "free-pro-team@latest" %} 要了解如何迁移现有的 Docker 映像以及任何使用它们的工作流程，请参阅“[从 Docker 注册表迁移到 {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)”。 {% endif %}

{% endwarning %}
