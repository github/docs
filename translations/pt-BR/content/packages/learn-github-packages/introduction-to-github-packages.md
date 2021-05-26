---
title: Introduction to GitHub Packages
intro: '{% data variables.product.prodname_registry %} é um serviço de hospedagem de pacotes de software que permite que você hospede seus pacotes de software de forma privada{% if currentVersion == "github-ae@latest" %} para usuários especificados ou internamente para a empresa{% else %}ou publicamente{% endif %} e use pacotes como dependências dos seus projetos.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
  - /packages/publishing-and-managing-packages/about-github-packages
  - /packages/learn-github-packages/about-github-packages
  - /packages/learn-github-packages/core-concepts-for-github-packages
  - /packages/guides/about-github-container-registry
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

{% data variables.product.prodname_registry %} offers different package registries for commonly used package managers, such as npm, RubyGems, Apache Maven, Gradle, Docker, and NuGet. {% if currentVersion == "free-pro-team@latest" %}The {% data variables.product.prodname_container_registry %} is optimized for containers and supports Docker and OCI images.{% endif %} For more information on the different package registries that {% data variables.product.prodname_registry %} supports, see "[Working with a {% data variables.product.prodname_registry %} registry](/packages/working-with-a-github-packages-registry)."

{% if currentVersion == "free-pro-team@latest" %}

![Diagram showing packages support for Docker, Container registry, RubyGems, npm, Apache Maven, NuGet, and Gradle](/assets/images/help/package-registry/packages-diagram-with-container-registry.png)

{% else %}

![Diagram showing packages support for Docker, RubyGems, npm, Apache Maven, Gradle, NuGet, and Docker](/assets/images/help/package-registry/packages-diagram-without-container-registry.png)

{% endif %}

You can view a package's README, as well as metadata such as licensing, download statistics, version history, and more on {% data variables.product.product_name %}. Para obter mais informações, consulte "[Visualizar pacotes](/packages/manage-packages/viewing-packages)".

#### Overview of package permissions and visibility

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| Permissões                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                  |
| {% if currentVersion == "free-pro-team@latest" %}The permissions for a package are either inherited from the repository where the package is hosted or, for packages in the {% data variables.product.prodname_container_registry %}, they can be defined for specific user or organization accounts. For more information, see "[Configuring a package’s access control and visibility](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)." {% else %}Each package inherits the permissions of the repository where the package is hosted. <br> <br> For example, anyone with read permissions for a repository can install a package as a dependency in a project, and anyone with write permissions can publish a new package version.{% endif %} |                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                  |
| Visibilidade                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | {% data reusables.package_registry.public-or-private-packages %}

For more information, see "[About permissions for {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages)."

{% if currentVersion == "free-pro-team@latest" %}
### Sobre a cobrança do {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)".

{% endif %}

### Clientes e formatos compatíveis
<!-- If you make changes to this feature, update /getting-started-with-github/github-language-support to reflect any changes to supported clients or formats. -->

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

For more information about configuring your package client for use with {% data variables.product.prodname_registry %}, see "[Working with a {% data variables.product.prodname_registry %} registry](/packages/working-with-a-github-packages-registry)."

{% if currentVersion == "free-pro-team@latest" %}
For more information about Docker and the {% data variables.product.prodname_container_registry %}, see "[Working with the Container registry](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)" and "[Working with the Docker registry](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)."
{% endif %}
### Autenticar-se no {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Gerenciar pacotes

{% if currentVersion == "free-pro-team@latest" %}
You can delete a package in the {% data variables.product.product_name %} user interface or using the REST API. Para obter mais informações, consulte o "[API de {% data variables.product.prodname_registry %}](/rest/reference/packages)".
{% endif %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}
You can delete a private or public package in the {% data variables.product.product_name %} user interface. Ou para pacotes com escopo de repositório, você pode excluir uma versão de um pacote privado usando o GraphQL.
{% endif %}

{% if currentVersion ver_lt "enterprise-server@3.1" %}
Você pode excluir uma versão de um pacote privado na interface de usuário de {% data variables.product.product_name %} ou usando a API do GraphQL.
{% endif %}

{% if currentVersion == "github-ae@latest" %}
You can delete a version of a package in the {% data variables.product.product_name %} user interface or using the GraphQL API.
{% endif %}

Ao usar a API do GraphQL para consultar e excluir pacotes privados, você deve usar o mesmo token que você usa para efetuar a autenticação no {% data variables.product.prodname_registry %}. For more information, see "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[Deleting a package](/packages/learn-github-packages/deleting-a-package){% endif %}" and "[Forming calls with GraphQL](/graphql/guides/forming-calls-with-graphql)."

Você pode configurar webhooks para assinar eventos relacionados aos pacotes, como quando um pacote é publicado ou atualizado. Para obter mais informações, consulte o evento de webhook de "[`pacote`](/webhooks/event-payloads/#package)".

### Entrar em contato com o suporte

{% if currentVersion == "free-pro-team@latest" %}
Se você tiver comentários ou solicitações de recursos para {% data variables.product.prodname_registry %}, use o [formulário de feedback para {% data variables.product.prodname_registry %}](https://support.github.com/contact/feedback?contact%5Bcategory%5D=github-packages).

Entre em contato com {% data variables.contact.github_support %} sobre {% data variables.product.prodname_registry %} usando o [nosso formulário de contato](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages) se:

* Você encontrar qualquer coisa que contradiga a documentação
* Você encontra erros vagos ou pouco claros
* Seu pacote publicado contém dados confidenciais, como violações do RGPD, chaves API ou informações de identificação pessoal

{% else %}
Se você precisar de suporte para {% data variables.product.prodname_registry %}, entre em contato com os administradores do seu site.

{% endif %}
