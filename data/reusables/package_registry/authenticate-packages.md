You need an access token to publish, install, and delete packages. You can use a personal access token to authenticate with your username directly to {% data variables.product.prodname_registry %} or the {% data variables.product.prodname_dotcom %} API. When you create a personal access token, you can assign the token different scopes depending on your needs.

{% if currentVersion == "free-pro-team@latest" %}
To authenticate using a {% data variables.product.prodname_actions %} workflow:
- For package registries (`PACKAGE-REGISTRY.pkg.github.com`), you can use a `GITHUB_TOKEN`.
- For the container registry (`ghcr.io/OWNER/IMAGE-NAME`), you can use a `GITHUB_TOKEN` or a personal access token. We strongly recommend you use a `GITHUB_TOKEN` to avoid unncessary access to your repositories.

For more information about `GITHUB_TOKEN` used in {% data variables.product.prodname_actions %} workflows, see "[Encrypted secrets](/actions/reference/encrypted-secrets)" and "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)."

{% else %}
To authenticate to {% data variables.product.prodname_registry %} using a {% data variables.product.prodname_actions %} workflow, you must use `GITHUB_TOKEN`.
{% endif %}
