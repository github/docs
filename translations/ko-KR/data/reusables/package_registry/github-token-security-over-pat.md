The {% data variables.product.prodname_container_registry %} now supports `GITHUB_TOKEN` for easy and secure authentication in your workflows. If your workflow is using a personal access token (PAT) to authenticate to `ghcr.io`, then we highly recommend you update your workflow to use `GITHUB_TOKEN`.

For more information about `GITHUB_TOKEN`, see "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)."
