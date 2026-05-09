## CI/CD tagging strategy for multi-environment deployments

A consistent tagging strategy helps trace container images back to their source commits, simplify environment promotion, and improve rollback reliability.

### Recommended tag scheme

Apply multiple tags to the same image digest during each build so deployments can reference images by stability level or exact provenance.

| Tag pattern | Example | Purpose |
|---|---|---|
| Commit SHA (short) | `sha-a1b2c3d` | Immutable reference suitable for production rollbacks |
| Branch name | `main`, `release-1.4` | Mutable tag that tracks the latest build for a branch |
| Semantic version | `v1.4.2` | Human-readable release version |
| Environment label | `staging`, `production` | Alias used during environment promotion workflows |

> [!NOTE]
> Avoid relying solely on the `latest` tag in automated deployment pipelines. Because `latest` is mutable, it does not provide reliable traceability between deployments and source revisions.

### Applying multiple tags in a GitHub Actions workflow

Use the `docker/metadata-action` action to generate image tags automatically from Git context and pass them to `docker/build-push-action`.

```yaml
jobs:
  build-and-push:
    runs-on: ubuntu-latest

    permissions:
      contents: read
      packages: write

    steps:
      - name: Check out repository
        uses: actions/checkout@v4

      - name: Log in to the Container registry
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Extract Docker metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ghcr.io/${{ github.repository }}
          tags: |
            type=sha,prefix=sha-,format=short
            type=ref,event=branch
            type=semver,pattern={{version}}
            type=raw,value=staging,enable=${{ github.ref == 'refs/heads/main' }}

      - name: Build and push Docker image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
```

All tags generated during the workflow reference the same image digest. This allows deployments to promote existing images between environments without rebuilding the container image.

### Verifying tag-to-digest traceability

After pushing an image, you can verify that multiple tags reference the same digest.

```bash
docker buildx imagetools inspect ghcr.io/NAMESPACE/IMAGE_NAME:staging
docker buildx imagetools inspect ghcr.io/NAMESPACE/IMAGE_NAME:sha-a1b2c3d
```

Replace `NAMESPACE` with the name of the personal account or organization to which the image is scoped.

Both commands should report the same `Digest` value. If the digest values differ, the tags reference different image versions.
