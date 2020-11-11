---
title: Sobre o GitHub Packages
intro: '{% data variables.product.prodname_registry %} é um serviço de hospedagem de pacotes de software que permite que você hospede os seus pacotes de software de forma privada ou pública e que você use os pacotes como dependências nos seus projetos.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### Sobre o {% data variables.product.prodname_registry %}

{% data variables.product.prodname_registry %} is a package hosting service, fully integrated with {% data variables.product.prodname_dotcom %}. O {% data variables.product.prodname_registry %} combina seu código-fonte e pacotes em um só lugar para fornecer gerenciamento integrado de permissões e cobrança, para poder centralizar o desenvolvimento do seu software no {% data variables.product.product_name %}.

Você pode integrar {% data variables.product.prodname_registry %} com as APIs de {% data variables.product.product_name %}, {% data variables.product.prodname_actions %} e webhooks para criar um fluxo de trabalho de ponta a ponta que inclui as suas soluções de código, CI e implantação.

You can host multiple packages in one repository and see more information about each package by viewing the package's README, download statistics, version history, and more.

{% if currentVersion == "free-pro-team@latest" %}
When you create a {% data variables.product.prodname_actions %} workflow, you can use the `GITHUB_TOKEN` to publish and install packages in {% data variables.product.prodname_registry %} without needing to store and manage a personal access token. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_github_container_registry %}](/packages/getting-started-with-github-container-registry/about-github-container-registry)."

{% data reusables.package_registry.container-registry-beta %}

{% endif %}

#### Visualizar pacotes

You can configure webhooks to subscribe to package-related events, such as when a package is published or updated. For more information, see the "[`package` webhook event](/webhooks/event-payloads/#package)."

#### Sobre permissões e visibilidade de pacotes
{% if currentVersion == "free-pro-team@latest" %}
|                      | Registros de pacotes                                                                                                                                                                                                                                                                                                                                                                                                                  | {% data variables.product.prodname_github_container_registry %}
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Locais de hospedagem | Você pode hospedar vários pacotes em um só repositório.                                                                                                                                                                                                                                                                                                                                                                               | Você pode hospedar várias imagens de contêiner em uma organização ou conta de usuário.                                                                                                                    |
| Permissões           | {{ site.data.reusables.package_registry.public-or-private-packages }} You can use {{ site.data.variables.product.prodname_dotcom }} roles and teams to limit who can install or publish each package, as packages inherit the permissions of the repository. Anyone with read permissions for a repository can install a package as a dependency in a project, and anyone with write permissions can publish a new package version. | Para cada imagem de container, você pode escolher o nível de acesso que os outros têm. As permissões para acesso a imagens do contêiner são separadas da sua organização e das permissões do repositório. |
 Visibilidade | {% data reusables.package_registry.public-or-private-packages %} | Você pode definir a visibilidade de cada uma de suas imagens de contêiner. Uma imagem privada de contêiner só é visível para pessoas e equipes às quais é fornecido acesso na sua organização. Qualquer pessoa pode ver uma imagem pública de contêiner. | acesso anônimo | N/A | Você pode acessar imagens de contêineres públicas anonimamente.

{% else %}
|                      | Registros de pacotes                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Locais de hospedagem | Você pode hospedar vários pacotes em um só repositório.                                                                                                                                                                                                                                                                                                                                                                               |
| Permissões           | {{ site.data.reusables.package_registry.public-or-private-packages }} You can use {{ site.data.variables.product.prodname_dotcom }} roles and teams to limit who can install or publish each package, as packages inherit the permissions of the repository. Anyone with read permissions for a repository can install a package as a dependency in a project, and anyone with write permissions can publish a new package version. |
| Visibilidade         | {% data reusables.package_registry.public-or-private-packages %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

Para obter mais informações sobre permissões e visibilidade para {% data variables.product.prodname_github_container_registry %}, consulte "[Configurar controle de acesso e visibilidade para contêineres](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)".

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Sobre a cobrança do {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %} Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)".

{% data reusables.package_registry.container-registry-beta-billing-note %}
{% endif %}

### Clientes e formatos compatíveis

O {% data variables.product.prodname_registry %} usa os comandos nativos de ferramentas de pacotes com os quais você já está familiarizado para publicar e instalar versões de pacote.

{% if currentVersion == "free-pro-team@latest" %}
#### Suporte para {% data variables.product.prodname_github_container_registry %}

O {% data variables.product.prodname_github_container_registry %} hospeda contêineres em `ghcr.io/OWNER/IMAGE-NAME`.

| Cliente do pacote | Linguagem | Formato do pacote | Descrição                                       |
| ----------------- | --------- | ----------------- | ----------------------------------------------- |
| arquivo Docker    | N/A       | `arquivo Docker`  | Plataforma de gerenciamento de contêiner Docker |
Para mais informações sobre o suporte do contêiner oferecido por

{% data variables.product.prodname_github_container_registry %}, consulte "[Sobre {% data variables.product.prodname_github_container_registry %}](/packages/getting-started-with-github-container-registry/about-github-container-registry).
{% endif %}

#### Suporte para registros de pacotes

{% if currentVersion == "free-pro-team@latest" %}
Os registros do pacote usam `PACKAGE-TYPE.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME` como a URL do host do pacote, substituindo `PACKAGE-TYPE` pelo espaço de nome do pacote. Por exemplo, o seu Gemfile será hospedado em `rubygems.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`.

{% else %}

Os tipos de pacotes suportados no {% data variables.product.product_location %} podem variar, uma vez que o administrador do site pode habilitar ou desabilitar o suporte para diferentes tipos de pacotes. Para obter mais informações, consulte "[Gerenciar pacotes do GitHub para a sua empresa](/enterprise/admin/packages)".

Se {% data variables.product.product_location %} tiver o isolamento de subdomínio habilitado, os registros dos pacotes usarão `PACKAGE-TYPE. OSTNAME/OWNER/REPOSITORY/IMAGE-NAME` como a URL hospedada do pacote, substituindo `PACKAGE-TYPE` pelo espaço de nome do pacote. Por exemplo, o seu arquivo Docker será hospedado em `docker.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`.

Se o {% data variables.product.product_location %} tiver o isolamento de subdomínio desabilitado, os registros do pacote usarão `HOSTNAME/_registry/PACKAGE-TYPE/OWNER/REPOSITORY/IMAGE-NAME` como URL de host do pacote. Por exemplo, o seu Gemfile será hospedado em `HOSTNAME/_registry/rubygems/OWNER/REPOSITORY/IMAGE-NAME`, substituindo *NOME DE HOST* pelo nome do host da sua instância do {% data variables.product.prodname_ghe_server %}. |{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
| Linguagem  | Descrição                                                             | Formato do pacote                    | Cliente do pacote | Espaço de nome do pacote                              |
| ---------- | --------------------------------------------------------------------- | ------------------------------------ | ----------------- | ----------------------------------------------------- |
| JavaScript | Gerenciador de pacotes de nó                                          | `package.json`                       | `npm`             | `npm.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | Gerenciador de pacotes de RubyGems                                    | `Gemfile`                            | `gem`             | `rubygems.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Ferramenta de gerenciamento de projetos e compreensão do Apache Maven | `pom.xml`                            | `mvn`             | `maven.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`    |
| Java       | Ferramenta de automação do build Gradle para Java                     | `build.gradle` ou `build.gradle.kts` | `gradle`          | `maven.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`    |
| .NET       | Gerenciamento de pacotes NuGet para .NET                              | `nupkg`                              | `dotnet` CLI      | `nuget.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`    |

{% else %}

Com o isolamento de subdomínio habilitado em {% data variables.product.product_location %}:

| Linguagem  | Descrição                                                             | Formato do pacote                    | Cliente do pacote | Espaço de nome do pacote                        |
| ---------- | --------------------------------------------------------------------- | ------------------------------------ | ----------------- | ----------------------------------------------- |
| JavaScript | Gerenciador de pacotes de nó                                          | `package.json`                       | `npm`             | `npm.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | Gerenciador de pacotes de RubyGems                                    | `Gemfile`                            | `gem`             | `rubygems.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Ferramenta de gerenciamento de projetos e compreensão do Apache Maven | `pom.xml`                            | `mvn`             | `maven.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| Java       | Ferramenta de automação do build Gradle para Java                     | `build.gradle` ou `build.gradle.kts` | `gradle`          | `maven.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| .NET       | Gerenciamento de pacotes NuGet para .NET                              | `nupkg`                              | `dotnet` CLI      | `nuget.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| N/A        | Gerenciamento do contêiner do Docker                                  | `arquivo Docker`                     | `Docker`          | `docker.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`   |

Com o isolamento de subdomínio desabilitado em {% data variables.product.product_location %}:

| Linguagem  | Descrição                                                             | Formato do pacote                    | Cliente do pacote | Espaço de nome do pacote                                  |
| ---------- | --------------------------------------------------------------------- | ------------------------------------ | ----------------- | --------------------------------------------------------- |
| JavaScript | Gerenciador de pacotes de nó                                          | `package.json`                       | `npm`             | `HOSTNAME/_registry/npm/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | Gerenciador de pacotes de RubyGems                                    | `Gemfile`                            | `gem`             | `HOSTNAME/_registry/rubygems/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Ferramenta de gerenciamento de projetos e compreensão do Apache Maven | `pom.xml`                            | `mvn`             | `HOSTNAME/_registry/maven/OWNER/REPOSITORY/IMAGE-NAME`    |
| Java       | Ferramenta de automação do build Gradle para Java                     | `build.gradle` ou `build.gradle.kts` | `gradle`          | `HOSTNAME/_registry/maven/OWNER/REPOSITORY/IMAGE-NAME`    |
| .NET       | Gerenciamento de pacotes NuGet para .NET                              | `nupkg`                              | `dotnet` CLI      | `HOSTNAME/_registry/nuget/OWNER/REPOSITORY/IMAGE-NAME`    |

{% note %}

**Observação:** O Docker não é compatível quando o isolamento de subdomínio está desativado.

{% endnote %}

Para obter mais informações sobre o isolamento de subdomínio, consulte "[Habilitar o isolamento de subdomínio](/enterprise/admin/configuration/enabling-subdomain-isolation)".

{% endif %}

Para obter mais informações sobre como configurar o seu cliente de pacote para ser usado com {% data variables.product.prodname_registry %}, consulte "[Usando o {% data variables.product.prodname_registry %} com o ecossistema do seu projeto](/packages/using-github-packages-with-your-projects-ecosystem)."

### Autenticar-se no {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% if currentVersion == "free-pro-team@latest" %}
### About tokens

| Escopo            | Descrição                                                                                                                                                                                                                                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `read:packages`   | Faça o download e instale as imagens de contêiner de {% data variables.product.prodname_github_container_registry %}
| `write:packages`  | Faça o upload e publique as imagens do contêiner para {% data variables.product.prodname_github_container_registry %}
| `delete:packages` | Exclua versões especificadas de imagens privadas ou públicas de contêiner do {% data variables.product.prodname_github_container_registry %}. Para obter mais informações, consulte "[Excluir uma imagem de contêiner](/packages/managing-container-images-with-github-container-registry/deleting-a-container-image)". |

Para aprender sobre escopos e permissões disponíveis para imagens de contêiner, ver "[Sobre {% data variables.product.prodname_github_container_registry %}](/packages/getting-started-with-github-container-registry/about-github-container-registry)" ou "[Configurar controle de acesso e visibilidade para imagens de contêiner](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)".

Para obter mais informações, consulte "[Criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token/)" e "[Escopos disponíveis](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)".

{% endif %}

### Sobre escopos e permissões para registros de pacotes

To install or publish a package, you must use a token with the appropriate scope, and your user account must have appropriate permissions for that repository.

Por exemplo:
-  Para fazer o download e instalar pacotes a partir de um repositório, seu token deve ter o escopo `read:packages`, e sua conta de usuário deve ter permissões de leitura para o repositório.
- Para excluir uma versão especificada de um pacote privado no {% data variables.product.product_name %}, seu token deve ter o escopo `delete:packages` e `repo`. Não é possível excluir pacotes públicos. Para obter mais informações, consulte "[Excluir um pacote](/packages/publishing-and-managing-packages/deleting-a-package)".

| Escopo            | Descrição                                                                                           | Permissões do repositório |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------- |
| `read:packages`   | Faça o download e instale pacotes do {% data variables.product.prodname_registry %}                 | leitura                   |
| `write:packages`  | Faça o upload e publique os pacotes em {% data variables.product.prodname_registry %}               | gravação                  |
| `delete:packages` | Excluir versões especificadas de pacotes privados de {% data variables.product.prodname_registry %} | administrador             |
| `repo`            | Upload and delete packages (along with `write:packages`, or `delete:packages`)                      | write, or admin           |

Ao criar um fluxo de trabalho de {% data variables.product.prodname_actions %}, você pode usar o `GITHUB_TOKEN` para publicar e instalar pacotes no {% data variables.product.prodname_registry %} sem precisar armazenar e gerenciar um token de acesso pessoal.

Para obter mais informações, consulte:
- "[Usando {% data variables.product.prodname_registry %} com {% data variables.product.prodname_actions %}](/packages/using-github-packages-with-your-projects-ecosystem/)"
- "[Criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token/)"
- "[Escopos disponíveis](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)"

### Gerenciar pacotes

Você pode excluir uma versão de um pacote privado em {% data variables.product.product_name %} ou usar a API do GraphQL. Ao usar a API do GraphQL para consultar e excluir pacotes privados, você deve usar o mesmo token que você usa para efetuar a autenticação no {% data variables.product.prodname_registry %}. Para obter mais informações, consulte "[Excluir um pacote](/packages/publishing-and-managing-packages/deleting-a-package)" e "[Formando chamadas com GraphQL](/v4/guides/forming-calls/)".

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
