Você precisa de um token de acesso para publicar, instalar e excluir pacotes no {% data variables.product.prodname_registry %}.

You can use a personal access token (PAT) to authenticate to {% data variables.product.prodname_registry %} or the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API. Ao criar um token de acesso pessoal, você pode atribuir diferentes escopos de token, dependendo da sua necessidade. Para obter mais informações sobre os escopos dos pacotes para um PAT, consulte "[Sobre permissões para o GitHub Packages](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)."

Para efetuar a autenticação em um registro do {% data variables.product.prodname_registry %} dentro de um fluxo de trabalho de {% data variables.product.prodname_actions %}, você pode utilizar:
- `GITHUB_TOKEN` para publicar pacotes associados ao repositório do fluxo de trabalho.
- um PAT para instalar pacotes associados a outros repositórios privados (que o `GITHUB_TOKEN` não consegue acessar).
