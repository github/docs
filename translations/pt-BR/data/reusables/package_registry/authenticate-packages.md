Você precisa de um token de acesso para publicar, instalar e excluir pacotes no {% data variables.product.prodname_registry %}.

You can use a personal access token (PAT) to authenticate to {% data variables.product.prodname_registry %} or the {% data variables.product.prodname_dotcom %} API. Ao criar um token de acesso pessoal, você pode atribuir diferentes escopos de token, dependendo da sua necessidade. For more information about packages-related scopes for a PAT, see "[About permissions for GitHub Packages](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)."

To authenticate to a {% data variables.product.prodname_registry %} registry within a {% data variables.product.prodname_actions %} workflow, you can use:
- `GITHUB_TOKEN` to publish packages associated with the workflow repository.
- a PAT to install packages associated with other private repositories (which `GITHUB_TOKEN` can't access).