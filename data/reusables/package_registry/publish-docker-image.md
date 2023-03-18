```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Create and publish a Docker image

on:
  push:
    branches: ['release']

env:
  REGISTRY: {% data reusables.package_registry.container-registry-hostname %}
  IMAGE_NAME: {% raw %}${{ github.repository }}{% endraw %}

jobs:
  build-and-push-image:
    runs-on: {% ifversion ghes %}[self-hosted]{% else %}ubuntu-latest{% endif %}
    permissions:
      contents: read
      packages: write

    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      - name: Log in to the Container registry
        uses: docker/login-action@b61a9ce7bd93239c435d3a7e3d6fe56020bf38c3
        with:
          registry: {% raw %}${{ env.REGISTRY }}{% endraw %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}

      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@5edf56f2c486f342f4319e9c0a1a79d59a474516
        with:
          images: {% raw %}${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}{% endraw %}

      - name: Build and push Docker image
        uses: docker/build-push-action@3b5e8027fcad23fda98b2e3ac259d8d67585f671
        with:
          context: .
          push: true
          tags: {% raw %}${{ steps.meta.outputs.tags }}{% endraw %}
          labels: {% raw %}${{ steps.meta.outputs.labels }}{% endraw %}
```

