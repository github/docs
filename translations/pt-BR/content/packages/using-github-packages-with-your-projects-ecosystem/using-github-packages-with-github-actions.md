---
title: Usar o GitHub Packages com o GitHub Actions
intro: 'É possível configurar um fluxo de trabalho no {% data variables.product.prodname_actions %} para publicar ou instalar automaticamente um pacote do {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### Sobre {% data variables.product.prodname_registry %} com {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/about-github-actions)".

Você pode estender os recursos de CI e CD do seu repositório publicando ou instalando pacotes como parte do seu fluxo de trabalho.

{% if currentVersion == "free-pro-team@latest" %}
#### Autenticar-se no {% data variables.product.prodname_github_container_registry %}

{% data reusables.package_registry.container-registry-beta %}

Instead of using a personal access token to authenticate to {% data variables.product.prodname_registry %}, use the `GITHUB_TOKEN` that {% data variables.product.prodname_dotcom %} automatically creates for your repository when you enable {% data variables.product.prodname_actions %}. Para um exemplo de autenticação, consulte "[Efetuar a autenticação com o {% data variables.product.prodname_container_registry %}](/packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images#authenticating-with-the-container-registry)".

{% endif %}

#### Efetuar a autenticação nos registros do pacote em {% data variables.product.prodname_dotcom %}

{% if currentVersion == "free-pro-team@latest" %}Se você deseja que seu fluxo de trabalho seja autenticado no {% data variables.product.prodname_registry %} para acessar um registro de pacotes diferente do {% data variables.product.prodname_container_registry %} no {% data variables.product.product_name %}, depois{% else %}Para efetuar a autenticação em um pacote de registros no {% data variables.product.product_name %},{% endif %}, recomendamos usar o `GITHUB_TOKEN` que {% data variables.product.product_name %} cria automaticamente para o seu repositório quando você habilitar o {% data variables.product.prodname_actions %} em vez de um token de acesso pessoal para autenticação. O `GITHUB_TOKEN` tem escopos `read:packages` e `write:packages` do repositório atual. Para bifurcações, o token também tem o escopo `read:packages` para o repositório principal.

Você pode fazer referência ao `GITHUB_TOKEN` no seu arquivo de fluxo de trabalho usando o contexto {% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %}. Para obter mais informações, consulte "[Permissões para o GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)".

### Publicar um pacote usando uma ação

Você pode publicar pacotes como parte do fluxo da sua integração contínua (CI) usando o {% data variables.product.prodname_actions %}. Por exemplo, você pode configurar um fluxo de trabalho para que sempre que um desenvolvedor fizer push do código para o branch-padrão, o fluxo de trabalho executará testes de CI. Se esses testes passarem, o fluxo de trabalho publicará uma nova versão de pacote no {% data variables.product.prodname_registry %}. Este fluxo de trabalho automatiza a criação de novas versões de pacotes somente se o código atender aos seus padrões de qualidade.

{% data reusables.package_registry.actions-configuration %}

### Instalar um pacote usando uma ação

Você pode instalar pacotes como parte de seu fluxo de CI usando o {% data variables.product.prodname_actions %}. Por exemplo, você poderia configurar um fluxo de trabalho para que sempre que um desenvolvedor fizesse push do código para um pull request, o fluxo de trabalho resolveria as dependências, fazendo o download e instalando pacotes hospedados pelo {% data variables.product.prodname_registry %}. Em seguida, o fluxo de trabalho pode executar testes de CI que exigem as dependências.

Installing packages hosted by {% data variables.product.prodname_registry %} through {% data variables.product.prodname_actions %} requires minimal configuration or additional authentication, by using the `GITHUB_TOKEN`. Data transfer is also free when an action installs a package. Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)".

{% if currentVersion == "free-pro-team@latest" %}
`GITHUB_TOKEN` não pode instalar pacotes a partir de qualquer repositório privado além do repositório onde a ação é executada.  Atualmente, você não pode usar `GITHUB_TOKEN` para efetuar a autenticação no {% data variables.product.prodname_github_container_registry %}.
{% endif %}

{% data reusables.package_registry.actions-configuration %}
