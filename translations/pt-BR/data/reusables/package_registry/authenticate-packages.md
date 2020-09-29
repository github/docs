Você precisa de um token de acesso para publicar, instalar e excluir pacotes no {% data variables.product.prodname_registry %}. Você pode usar um token de acesso pessoal para autenticar com seu nome de usuário diretamente no {% data variables.product.prodname_registry %} ou na API {% data variables.product.prodname_dotcom %}. Ao criar um token de acesso pessoal, você pode atribuir diferentes escopos de token, dependendo da sua necessidade.

{% if currentVersion == "free-pro-team@latest" %}
To authenticate using a {% data variables.product.prodname_actions %} workflow:
- For package registries (`PACKAGE-REGISTRY.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`), you can use a `GITHUB_TOKEN`.
- For the container registry (`ghcr.io/OWNER/IMAGE-NAME`), you must use a personal access token.
{% else %}
To authenticate to {% data variables.product.prodname_registry %} using a {% data variables.product.prodname_actions %} workflow, you must use `GITHUB_TOKEN`.
{% endif %}
