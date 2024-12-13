# Production deploys

For internal Docs relating to our production deploys see [TODO Docs-Engineering URL]

## Auto deploys

Pushing to `main` on `docs-internal` will automatically kick off a deploy to production.

The status of deployments are posted in the `#docs-ops` Slack channel.

## Building & running the production image locally

Build the production Docker image locally,

```bash
docker build -t docs:latest . --secret id=DOCS_BOT_PAT_READPUBLICKEY,src=<(echo "<your GH PAT value>")
```

Where `<your GH PAT value>` must be a PAT with `contents: read` access to:

1. `docs-internal.<lang>` for every `<lang>` translation repo
2. `docs-early-access`

Run the built image,

```bash
docker run -p 4000:4000 docs:latest
```

> [!NOTE]
> We require `DOCKER_BUILDKIT=1` to support passing `--secret` to the Dockerfile which allows us to clone private repos at build time. This is done in Moda via the `docker-build-env-secrets` argument in the [.github/workflows/moda-ci.yaml](../../.github/workflows/moda-ci.yaml) workflow.