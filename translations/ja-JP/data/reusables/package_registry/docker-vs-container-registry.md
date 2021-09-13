{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Dockerレジストリと{% data variables.product.prodname_container_registry %}との比較:**
- {% data variables.product.prodname_container_registry %}(`https://ghcr.io`)は、コンテナに対して改善されたパフォーマンスを提供し、将来的にはDockerレジストリを置き換えます。
- Dockerイメージとワークフローは、Dockerレジストリ(`docker.pkg.github.com`)から{% data variables.product.prodname_container_registry %}(`https://ghcr.io`)へ、詳細な権限、コンテナストレージの最適化などのために移行できます。 詳しい情報については「[Dockerレジストリから{% data variables.product.prodname_container_registry %}への移行](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)」を参照してください。

{% endnote %}
{% endif %}
