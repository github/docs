---
title: Sobre o GitHub Packages
intro: '{% data variables.product.prodname_registry %} is a software package hosting service that allows you to host your software packages privately {% if currentVersion == "github-ae@latest" %} for specified users or internally for your enterprise{% else %}or publicly{% endif %} and use packages as dependencies in your projects.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
  - /packages/publishing-and-managing-packages/about-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

### Sobre o {% data variables.product.prodname_registry %}

{% data variables.product.prodname_registry %} is a package hosting service, fully integrated with {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_registry %} combina seu código-fonte e pacotes em um só lugar para fornecer o gerenciamento integrado de permissões{% if currentVersion ! "github-ae@latest" %} e cobrança{% endif %}, para centralizar o desenvolvimento do software em {% data variables.product.product_name %}.

Você pode integrar {% data variables.product.prodname_registry %} com as APIs de {% data variables.product.product_name %}, {% data variables.product.prodname_actions %} e webhooks para criar um fluxo de trabalho de ponta a ponta que inclui as suas soluções de código, CI e implantação.

You can host multiple packages in one repository and see more information about each package by viewing the package's README, download statistics, version history, and more.

![Diagrama que mostra o suporte a pacotes do npm, RubyGems, Apache Maven, Gradle, Nuget e Docker](/assets/images/help/package-registry/packages-overview-diagram.png)

{% if currentVersion == "free-pro-team@latest" %}
When you create a {% data variables.product.prodname_actions %} workflow, you can use the `GITHUB_TOKEN` to publish and install packages in {% data variables.product.prodname_registry %} without needing to store and manage a personal access token. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_github_container_registry %}](/packages/guides/about-github-container-registry)."

{% data reusables.package_registry.container-registry-beta %}

{% endif %}

#### Visualizar pacotes

You can configure webhooks to subscribe to package-related events, such as when a package is published or updated. Para obter mais informações, consulte "[Visualizar pacotes](/packages/manage-packages/viewing-packages)".

#### Sobre permissões e visibilidade de pacotes

|                      | Registros de pacotes                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Locais de hospedagem | Você pode hospedar vários pacotes em um só repositório.                                                                                                                                                                                                                                                                                                                                                                     |
| Permissões           | {% data reusables.package_registry.public-or-private-packages %} You can use {% data variables.product.prodname_dotcom %} roles and teams to limit who can install or publish each package, as packages inherit the permissions of the repository. Anyone with read permissions for a repository can install a package as a dependency in a project, and anyone with write permissions can publish a new package version. |
| Visibilidade         | {% data reusables.package_registry.public-or-private-packages %}

{% if currentVersion == "free-pro-team@latest" %}
### Sobre a cobrança do {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)".

{% data reusables.package_registry.container-registry-beta-billing-note %}
{% endif %}

### Clientes e formatos compatíveis

O {% data variables.product.prodname_registry %} usa os comandos nativos de ferramentas de pacotes com os quais você já está familiarizado para publicar e instalar versões de pacote.
#### Suporte para registros de pacotes

| Linguagem  | Descrição                                                             | Formato do pacote                    | Cliente do pacote |
| ---------- | --------------------------------------------------------------------- | ------------------------------------ | ----------------- |
| JavaScript | Gerenciador de pacotes de nó                                          | `package.json`                       | `npm`             |
| Ruby       | Gerenciador de pacotes de RubyGems                                    | `Gemfile`                            | `gem`             |
| Java       | Ferramenta de gerenciamento de projetos e compreensão do Apache Maven | `pom.xml`                            | `mvn`             |
| Java       | Ferramenta de automação do build Gradle para Java                     | `build.gradle` ou `build.gradle.kts` | `gradle`          |
| .NET       | Gerenciamento de pacotes NuGet para .NET                              | `nupkg`                              | `dotnet` CLI      |
| N/A        | Gerenciamento do contêiner do Docker                                  | `arquivo Docker`                     | `Docker`          |

{% if currentVersion ver_gt "enterprise-server@2.22" %}
{% note %}

**Observação:** O Docker não é compatível quando o isolamento de subdomínio está desativado.

{% endnote %}

Para obter mais informações sobre o isolamento de subdomínio, consulte "[Habilitar o isolamento de subdomínio](/enterprise/admin/configuration/enabling-subdomain-isolation)".

{% endif %}

Para obter mais informações sobre a configuração do cliente do seu pacote para uso com {% data variables.product.prodname_registry %}, consulte "[Guias do cliente do pacote para {% data variables.product.prodname_registry %}](/packages/guides/package-client-guides-for-github-packages)".

{% if currentVersion == "free-pro-team@latest" %}
Para mais informações sobre o Docker e
{% data variables.product.prodname_github_container_registry %}, consulte "[Guias de contêiner para {% data variables.product.prodname_registry %}](/packages/guides/container-guides-for-github-packages)".
{% endif %}
### Autenticar-se no {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

### Sobre escopos e permissões para registros de pacotes

To install or publish a package, you must use a token with the appropriate scope, and your user account must have appropriate permissions for that repository.

Por exemplo:
-  Para fazer o download e instalar pacotes a partir de um repositório, seu token deve ter o escopo `read:packages`, e sua conta de usuário deve ter permissões de leitura para o repositório.
- {% if currentVersion == "free-pro-team@latest" or if currentVersion ver_gt "enterprise-server@3.0" %}Para excluir um pacote em {% data variables.product.product_name %}, o seu token deve ter pelo menos o escopo `delete:packages` e `read:packages`. O escopo de `repo` também é necessário para pacotes com escopo de repositórios.{% elsif currentVersion ver_lt "enterprise-server@3.1" %}Para excluir uma versão especificada de um pacote privado em {% data variables.product.product_name %}, o seu token deve ter o escopo `delete:packages` e `repo`. Public packages cannot be deleted.{% elsif currentVersion == "github-ae@latest" %}To delete a specified version of a package on {% data variables.product.product_name %}, your token must have the `delete:packages` and `repo` scope.{% endif %} For more information, see "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[Deleting a package](/packages/learn-github-packages/deleting-a-package){% endif %}."

| Escopo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Descrição                                                                             | Permissões do repositório |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------- |
| `read:packages`                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Faça o download e instale pacotes do {% data variables.product.prodname_registry %}   | leitura                   |
| `write:packages`                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Faça o upload e publique os pacotes em {% data variables.product.prodname_registry %} | gravação                  |
| `delete:packages`                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                       |                           |
| {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} Delete packages from {% data variables.product.prodname_registry %} {% elsif currentVersion ver_lt "enterprise-server@3.1" %} Delete specified versions of private packages from {% data variables.product.prodname_registry %}{% elsif currentVersion == "github-ae@latest" %} Delete specified versions of packages from {% data variables.product.prodname_registry %} {% endif %} |                                                                                       |                           |
| administrador                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                       |                           |
| `repo`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Faça o upload e exclua os pacotes (junto com `write:packages` ou `delete:packages`)   | gravação ou admin         |

Ao criar um fluxo de trabalho de {% data variables.product.prodname_actions %}, você pode usar o `GITHUB_TOKEN` para publicar e instalar pacotes no {% data variables.product.prodname_registry %} sem precisar armazenar e gerenciar um token de acesso pessoal.

Para obter mais informações, consulte:
- "[Usando {% data variables.product.prodname_registry %} com {% data variables.product.prodname_actions %}](/packages/using-github-packages-with-your-projects-ecosystem/)"
- "[Criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token/)"
- "[Escopos disponíveis](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)"

### Gerenciar pacotes

{% if currentVersion == "free-pro-team@latest" %}
Você pode excluir um pacote na
interface de usuário de {% data variables.product.product_name %} ou usando a API REST. Para obter mais informações, consulte o "[API de {% data variables.product.prodname_registry %}](/rest/reference/packages)".
{% endif %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}
You can delete a private or public package in the
interface de usuário de {% data variables.product.product_name %}. Or for repo-scoped packages, you can delete a version of a private package using GraphQL.
{% endif %}

{% if currentVersion ver_lt "enterprise-server@3.1" %}
You can delete a version of a private package in the
{% data variables.product.product_name %} user interface or using the GraphQL API.
{% endif %}

{% if currentVersion == "github-ae@latest" %}
You can delete a version of a package in the
{% data variables.product.product_name %} user interface or using the GraphQL API.
{% endif %}

Ao usar a API do GraphQL para consultar e excluir pacotes privados, você deve usar o mesmo token que você usa para efetuar a autenticação no {% data variables.product.prodname_registry %}. For more information, see "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[Deleting a package](/packages/learn-github-packages/deleting-a-package){% endif %}" and "[Forming calls with GraphQL](/graphql/guides/forming-calls-with-graphql)."

Você pode configurar webhooks para assinar eventos relacionados aos pacotes, como quando um pacote é publicado ou atualizado. Para obter mais informações, consulte o evento de webhook de "[`pacote`](/webhooks/event-payloads/#package)".

### Entrar em contato com o suporte

{% if currentVersion == "free-pro-team@latest" %}
Se você tiver feedback ou pedidos de recursos para
{% data variables.product.prodname_registry %}, use o [formulário de feedback para {% data variables.product.prodname_registry %}](https://support.github.com/contact/feedback?contact%5Bcategory%5D=github-packages).

Entre em contato com {% data variables.contact.github_support %} sobre {% data variables.product.prodname_registry %} usando o [nosso formulário de contato](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages) se:

* Você encontrar qualquer coisa que contradiga a documentação
* Você encontra erros vagos ou pouco claros
* Seu pacote publicado contém dados confidenciais, como violações do RGPD, chaves API ou informações de identificação pessoal

{% else %}
Se precisar de suporte para
{% data variables.product.prodname_registry %}, entre em contato com os administradores do site.

{% endif %}
