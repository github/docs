---
title: Packages
intro: 'Com a API do {% data variables.product.prodname_registry %}, você pode gerenciar pacotes para seus repositórios e organizações de {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/packages
---

## Sobre a API do {% data variables.product.prodname_registry %}

A API de {% data variables.product.prodname_registry %} permite gerenciar pacotes usando a API REST. Para saber mais sobre como restaurar ou excluir pacotes, consulte "[Restaurar e excluir pacotes](/packages/learn-github-packages/deleting-and-restoring-a-package)"".

Para usar essa API, você deve efetuar a autenticação usando um token de acesso pessoal.
  - Para acessar os metadados do pacote, seu token deve incluir o escopo `read:packages`.
  - Para excluir pacotes e versões de pacote, seu token deverá incluir os escopos `read:packages` e `delete:packages`.
  - Para restaurar pacotes e versões do pacote, o seu token deve incluir os escopos `read:packages` e `write:packages`.

Se seu `package_type` for `npm`, `maven`, `rubygems` ou `nuget`, o seu token também deverá incluir o escopo `repo` já que o pacote herda as permissões de um repositório de {% data variables.product.prodname_dotcom %}. Se seu pacote estiver em {% data variables.product.prodname_container_registry %}, seu `package_type` será `container` e seu token não precisará do escopo `repositório` para acessar ou gerenciar este `package_type`. Os pacotes de `contêiner` oferecem permissões granulares separadas de um repositório. Para obter mais informações, consulte "[Sobre permissões para {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)".

Se você quiser usar a API de {% data variables.product.prodname_registry %} para acessar os recursos em uma organização com SSO habilitado, então você deve habilitar o SSO para o seu token de acesso pessoal. Para mais informações consulte "[Autorizando um token de acesso pessoal para usar com lgon único SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}" na documentação de {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}
