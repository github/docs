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
        uses: docker/login-action@65b78e6e13532edd9afa3aa52ac7964289d1a9c1
        with:
          registry: {% raw %}${{ env.REGISTRY }}{% endraw %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}

      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@9ec57ed1fcdbf14dcef7dfbe97b2010124a938b7
        with:
          images: {% raw %}${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}{% endraw %}

      - name: Build and push Docker image
        uses: docker/build-push-action@f2a1d5e99d037542a71f64918e516c093c6f3fc4
        with:
          context: .
          push: true
          tags: {% raw %}${{ steps.meta.outputs.tags }}{% endraw %}
          labels: {% raw %}${{ steps.meta.outputs.labels }}{% endraw %}
```

