---
title: Sobre o GitHub Container Registry
intro: 'Você pode usar {% data variables.product.prodname_github_container_registry %} para hospedar e gerenciar imagens do contêiner Docker na sua organização ou conta pessoal em {% data variables.product.prodname_dotcom %}. O {% data variables.product.prodname_github_container_registry %} permite que você configure quem pode gerenciar e acessar pacotes usando permissões refinadas.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/about-github-container-registry
  - /packages/managing-container-images-with-github-container-registry
versions:
  free-pro-team: '*'
---

{% note %}

**Nota:** {% data variables.product.prodname_github_container_registry %} está atualmente em versão beta público e sujeito a alterações. Durante o beta, o armazenamento e a banda larga são grátis. Para usar {% data variables.product.prodname_github_container_registry %}, você deve habilitar o recurso para sua conta. Para obter mais informações, consulte "[Habilitar suporte ao contêiner aprimorado](/packages/guides/enabling-improved-container-support)".

{% endnote %}

### Sobre o {% data variables.product.prodname_github_container_registry %}

{% data reusables.package_registry.container-registry-feature-highlights %}

Para compartilhar o contexto sobre o uso do seu pacote, você pode vincular um repositório à sua imagem de contêiner no {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Conectar um repositório a uma imagem de contêiner](/packages/guides/connecting-a-repository-to-a-container-image)".

{% data variables.product.prodname_github_container_registry %} tem locais de hospedagem diferentes, permissão e visibilidade diferentes dos outros registros de pacotes.

|                      | Registros de pacotes                                                                                                                                                                                                                                                                                                                                                                                                        | {% data variables.product.prodname_github_container_registry %}
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Locais de hospedagem | Você pode hospedar vários pacotes em um só repositório.                                                                                                                                                                                                                                                                                                                                                                     | Você pode hospedar várias imagens de contêiner em uma organização ou conta de usuário.                                                                                                                    |
| Permissões           | {% data reusables.package_registry.public-or-private-packages %} You can use {% data variables.product.prodname_dotcom %} roles and teams to limit who can install or publish each package, as packages inherit the permissions of the repository. Anyone with read permissions for a repository can install a package as a dependency in a project, and anyone with write permissions can publish a new package version. | Para cada imagem de container, você pode escolher o nível de acesso que os outros têm. As permissões para acesso a imagens do contêiner são separadas da sua organização e das permissões do repositório. |
 Visibilidade | {% data reusables.package_registry.public-or-private-packages %} | Você pode definir a visibilidade de cada uma de suas imagens de contêiner. Uma imagem privada de contêiner só é visível para pessoas e equipes às quais é fornecido acesso na sua organização. Qualquer pessoa pode ver uma imagem pública de contêiner. | acesso anônimo | N/A | Você pode acessar imagens de contêineres públicas anonimamente.

Para obter mais informações, consulte "[Sobre escopos e permissões para {% data variables.product.prodname_github_container_registry %}](#about-scopes-and-permissions-for-github-container-registry)".

### Formatos compatíveis

O {% data variables.product.prodname_container_registry %} é atualmente compatível com os seguintes formatos de imagem do contêiner:

* [Docker Image Manifest V2, Modelo 2](https://docs.docker.com/registry/spec/manifest-v2-2/)
* [Especificações de Open Container Initiative (OCI)](https://github.com/opencontainers/image-spec)

O {% data variables.product.prodname_github_container_registry %} hospeda contêineres em `ghcr.io/OWNER/IMAGE-NAME`.

| Cliente do pacote | Linguagem | Formato do pacote | Descrição                                       |
| ----------------- | --------- | ----------------- | ----------------------------------------------- |
| arquivo Docker    | N/A       | `arquivo Docker`  | Plataforma de gerenciamento de contêiner Docker |


#### Lista de manifestos/Índices de imagens

{% data variables.product.prodname_github_container_registry %} também é compatível com
formatos das [ Listas de Manifesto do Docker](https://docs.docker.com/registry/spec/manifest-v2-2/#manifest-list)/[Índice de Imagens de OCI](https://github.com/opencontainers/image-spec/blob/79b036d80240ae530a8de15e1d21c7ab9292c693/image-index.md) definidos nas especificações do Docker V2, Esquema 2 e na imagem de OCI.</p> 



### Visibilidade e permissões de acesso para imagens de contêiner

Se você tem permissões de administrador para uma imagem de contêiner, você pode definir a imagem do contêiner como privada ou pública. As imagens públicas permitem acesso anônimo e podem ser carregadas sem autenticação ou login via CLI.

Como administrador, você também pode conceder permissões de acesso para uma imagem contêiner separada das permissões que você configurou nos níveis da organização e repositório.

Para imagens de contêiner publicadas e pertencentes a uma conta de usuário, você pode dar a qualquer pessoa uma função de acesso. Para imagens de contêineres publicadas e pertencentes a uma organização, você pode dar uma função de acesso a qualquer pessoa ou equipe na organização.

| Função de permissão | Descrição de acesso                                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Leitura             | Pode fazer o download do pacote. <br> Pode ler metadados do pacote.                                                                                    |
| Gravação            | Pode fazer upload e download deste pacote. <br> Pode ler gravar metadados do pacote.                                                                   |
| Administrador       | Pode fazer upload, download, excluir e gerenciar este pacote. <br> Pode ler gravar metadados do pacote. <br> Pode conceder permissões de pacote. |


Para obter mais informações, consulte "[Configurar controle de acesso e visibilidade para imagens de contêiner](/packages/guides/configuring-access-control-and-visibility-for-container-images)".



### About tokens

To install or publish a package, you must use a token with the appropriate scope, and your user account must have appropriate permissions for that repository.

| Escopo            | Descrição                                                                                                                                                                                                                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `read:packages`   | Faça o download e instale as imagens de contêiner de {% data variables.product.prodname_github_container_registry %}
| `write:packages`  | Faça o upload e publique as imagens do contêiner para {% data variables.product.prodname_github_container_registry %}
| `delete:packages` | Exclua versões especificadas de imagens privadas ou públicas de contêiner do {% data variables.product.prodname_github_container_registry %}. Para obter mais informações, consulte "[Excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)". |


Para aprender sobre escopos e permissões disponíveis para imagens de contêiner, consulte "[Configurar controle de acesso e visibilidade para imagens do contêiner](/packages/guides/configuring-access-control-and-visibility-for-container-images)".

Para obter mais informações, consulte "[Criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token/)" e "[Escopos disponíveis](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)".



### Sobre a cobrança do {% data variables.product.prodname_github_container_registry %}

{% data reusables.package_registry.billing-for-container-registry %}



### Entrar em contato com o suporte

Se você tiver feedback ou solicitações de recursos para {% data variables.product.prodname_github_container_registry %}, use o [formulário de feedback](https://support.github.com/contact/feedback?contact%5Bcategory%5D=packages).

Entre em contato com {% data variables.contact.github_support %} sobre {% data variables.product.prodname_github_container_registry %} usando o [nosso formulário de contato](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages) se:

* Você encontrar qualquer coisa que contradiga a documentação.
* Você encontra erros vagos ou pouco claros.
* Seu pacote publicado contém dados confidenciais, como violações do GDPR, Chaves de API ou informações de identificação pessoal.
