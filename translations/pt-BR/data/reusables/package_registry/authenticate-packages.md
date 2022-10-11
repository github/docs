Você precisa de um token de acesso para publicar, instalar e excluir pacotes no {% data variables.product.prodname_registry %}.

Você pode usar um token de acesso pessoal (PAT) para efetuar a autenticação em {% data variables.product.prodname_registry %} ou na API de {% data variables.product.prodname_dotcom %} Ao criar um token de acesso pessoal, você pode atribuir diferentes escopos de token, dependendo da sua necessidade. Para obter mais informações sobre os escopos dos pacotes para um PAT, consulte "[Sobre permissões para o GitHub Packages](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)."

Para efetuar a autenticação em um registro do {% data variables.product.prodname_registry %} dentro de um fluxo de trabalho de {% data variables.product.prodname_actions %}, você pode utilizar:
- `GITHUB_TOKEN` para publicar pacotes associados ao repositório do fluxo de trabalho.
- um PAT para instalar pacotes associados a outros repositórios privados (que o `GITHUB_TOKEN` não consegue acessar).
