---
title: Introdução aos GitHub Packages
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

{% data variables.product.prodname_registry %} oferece registros de pacotes diferentes para gerentes de pacotes comumente usados, como npm, RubyGems, Apache Maven, Gradle, Docker e NuGet. {% if currentVersion == "free-pro-team@latest" %}O {% data variables.product.prodname_container_registry %} é otimizado para contêineres e é compatível com imagens do Docker e OCI.{% endif %} Para mais informações sobre os registros de pacote diferentes com que {% data variables.product.prodname_registry %} é compatível, consulte "[Trabalhar com um registro de {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry)".

{% if currentVersion == "free-pro-team@latest" %}

![Diagrama que mostra a compatibilidade dos pacotes com o Docker, registro de contêiner, RubyGems, npm, Apache Maven, NuGet e Gradle](/assets/images/help/package-registry/packages-diagram-with-container-registry.png)

{% else %}

![Diagrama que mostra a compatibilidade de pacotes com o Docker, RubyGems, npm, Apache Maven, Gradle, NuGet e Docker](/assets/images/help/package-registry/packages-diagram-without-container-registry.png)

{% endif %}

Você pode visualizar o LEIAME de um pacote, bem como os metadados como licenciamento, estatísticas de download, histórico de versão e muito mais em {% data variables.product.product_name %}. Para obter mais informações, consulte "[Visualizar pacotes](/packages/manage-packages/viewing-packages)".

#### Visão geral das permissões e visibilidade do pacote

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Permissões                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                                                  |
| {% if currentVersion == "free-pro-team@latest" %}As permissões para um pacote são herdadas do repositório em que o pacote está hospedado ou, para pacotes em {% data variables.product.prodname_container_registry %}, eles podem ser definidos para contas específicas de usuário ou organização. Para obter mais informações, consulte "[Configurar o controle de acesso e visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)". {% else %}Cada pacote herda as permissões do repositório em que o pacote está hospedado. <br> <br> Por exemplo, qualquer pessoa com permissões de leitura para um repositório pode instalar um pacote como uma dependência em um projeto, e qualquer pessoa com permissões de gravação pode publicar uma nova versão de pacote.{% endif %} |                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                  |
| Visibilidade                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | {% data reusables.package_registry.public-or-private-packages %}

Para obter mais informações, consulte "[Sobre permissões para {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages)".

{% if currentVersion == "free-pro-team@latest" %}
### Sobre a cobrança do {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)".

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

Para obter mais informações sobre a configuração do seu pacote para uso com {% data variables.product.prodname_registry %}, consulte "[Trabalhar com um registro de {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry)".

{% if currentVersion == "free-pro-team@latest" %}
Para mais informações sobre o Docker e o {% data variables.product.prodname_container_registry %}, consulte "[Trabalhar com o Registro do Contêiner](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)" e "[Trabalhar com o registro Docker](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)".
{% endif %}
### Autenticar-se no {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Gerenciar pacotes

{% if currentVersion == "free-pro-team@latest" %}
Você pode excluir um pacote na interface de usuário {% data variables.product.product_name %} ou usando a API REST. Para obter mais informações, consulte o "[API de {% data variables.product.prodname_registry %}](/rest/reference/packages)".
{% endif %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}
Você pode excluir um pacote privado ou público na interface de usuário do {% data variables.product.product_name %}. Ou para pacotes com escopo de repositório, você pode excluir uma versão de um pacote privado usando o GraphQL.
{% endif %}

{% if currentVersion ver_lt "enterprise-server@3.1" %}
Você pode excluir uma versão de um pacote privado na interface de usuário de {% data variables.product.product_name %} ou usando a API do GraphQL.
{% endif %}

{% if currentVersion == "github-ae@latest" %}
Você pode excluir uma versão de um pacote na interface de usuário {% data variables.product.product_name %} ou usando a API do GraphQL.
{% endif %}

Ao usar a API do GraphQL para consultar e excluir pacotes privados, você deve usar o mesmo token que você usa para efetuar a autenticação no {% data variables.product.prodname_registry %}. Para obter mais informações, consulte "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[Excluindo e restaurando um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}}[Excluindo um pacote](/packages/learn-github-packages/deleting-a-package){% endif %}" e"[Realizando chamadas com o GraphQL](/graphql/guides/forming-calls-with-graphql)".

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
