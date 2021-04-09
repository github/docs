{% warning %}

**注意：**{% data variables.product.prodname_registry %} Docker 注册表 {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} 将在未来的 {% data variables.product.product_name %} 版本中提供改进的容器支持。{% elsif currentVersion == "free-pro-team@latest" %} 现在提供改进的容器支持。 更多信息请参阅“[关于 GitHub Container Registry](/packages/guides/about-github-container-registry)”。 要了解如何迁移您现有的 Docker 映像和使用它们的任何工作流程，请参阅“[迁移到 Docker 映像的 {% data variables.product.prodname_github_container_registry %}](/packages/guides/migrating-to-github-container-registry-for-docker-images)”和“[ {% data variables.product.prodname_registry %} 容器指南](/packages/guides/container-guides-for-github-packages)”。{% endif %}

{% endwarning %}
