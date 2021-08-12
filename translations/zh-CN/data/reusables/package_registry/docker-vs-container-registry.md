{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**比较 Docker 注册表和 {% data variables.product.prodname_container_registry %}：**
- {% data variables.product.prodname_container_registry %} (`https://ghcr.io`) 可提供更好的容器性能，将来会取代 Docker 注册表。
- 您可以将 Docker 映像和工作流程从 Docker 注册表  (`docker.pkg.github.com`)  迁移到 {% data variables.product.prodname_container_registry %} (`https://ghcr.io`)，以实现精细权限、容器存储优化等。 更多信息请参阅“[从 Docker 注册表迁移到 {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)”。

{% endnote %}
{% endif %}
