---
title: Pacotes
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
topics:
  - API
---

A API de {% data variables.product.prodname_registry %} permite gerenciar pacotes usando a API REST. Para saber mais sobre como restaurar ou excluir pacotes, consulte "[Restaurar e excluir pacotes](/packages/learn-github-packages/deleting-and-restoring-a-package)"".

Para usar essa API, você deve efetuar a autenticação usando um token de acesso pessoal.
  - Para acessar os metadados do pacote, seu token deve incluir o escopo `read:packages`.
  - Para excluir pacotes e versões de pacote, seu token deverá incluir os escopos `read:packages` e `delete:packages`.
  - Para restaurar pacotes e versões do pacote, o seu token deve incluir os escopos `read:packages` e `write:packages`.

Se seu `package_type` for `npm`, `maven`, `rubygems` ou `nuget`, o seu token também deverá incluir o escopo `repo` já que o pacote herda as permissões de um repositório de {% data variables.product.prodname_dotcom %}.  Para obter mais informações sobre escopos, consulte "[Sobre escopos e permissões](/packages/learn-github-packages/about-github-packages#about-scopes-and-permissions-for-package-registries)" ou "[Usar a API de {% data variables.product.prodname_registry %} com Docker](#using-the-github-packages-api-with-docker)".

Se você quiser usar a API de {% data variables.product.prodname_registry %} para acessar os recursos em uma organização com SSO habilitado, então você deve habilitar o SSO para o seu token de acesso pessoal. Para obter mais informações, consulte "[Autorizar um token de acesso pessoal para uso com o logon único SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)".

#### Usar a API de {% data variables.product.prodname_registry %} com o Docker

If your package is a Docker image using the package namespace `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`, then your `package_type` is `docker` and your token must include the `repo` scope since your package inherits permissions from a {% data variables.product.prodname_dotcom %} repository.

If your package is a Docker image using the package namespace `ghcr.io/OWNER/IMAGE-NAME`, then your `package_type` is `container` and your token does not need the `repo` scope to access or manage this `package_type`. Os pacotes de `contêiner` oferecem permissões granulares separadas de um repositório.


{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}
