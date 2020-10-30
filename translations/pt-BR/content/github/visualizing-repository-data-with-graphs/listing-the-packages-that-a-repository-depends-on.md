---
title: Listar os pacotes dos quais o repositório depende
intro: 'No gráfico de dependências, você pode ver as dependências de seu projeto, assim como quaisquer vulnerabilidades detectadas.'
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Sobre o gráfico de dependências

The dependency graph is available for every{% if currentVersion == "free-pro-team@latest" %} public{% endif %} repository that define dependencies in a supported package ecosystem using a supported file format.{% if currentVersion == "free-pro-team@latest" %} Repository administrators can also set up the dependency graph for private repositories.{% endif %}

{% data reusables.repositories.enable-security-alerts %}

Você pode visualizar e atualizar dependências vulneráveis no gráfico de dependências do repositório. O gráfico de dependências lista dependências vulneráveis antes de outras dependências. Para obter mais informações, consulte "[Sobre alertas de segurança para dependências vulneráveis](/articles/about-security-alerts-for-vulnerable-dependencies)".

{% if currentVersion == "free-pro-team@latest" %}
Você pode visualizar as dependências usadas em repositórios da organização em um painel único. Para obter mais informações, consulte "[Visualizar informações na organização](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights)".{% endif %}

### Supported package ecosystems

| Gerenciador de pacotes | Linguagem                        | Formatos recomendados                                  | Formatos compatíveis                                                      |
| ---------------------- | -------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------- |
| Maven                  | Java, Scala                      | `pom.xml`                                              | `pom.xml`                                                                 |
| npm                    | JavaScript                       | `package-lock.json`                                    | `package-lock.json`, `package.json`                                       |
| Yarn                   | JavaScript                       | `yarn.lock`                                            | `package.json`, `yarn.lock`                                               |
| `dotnet` CLI           | .NET languages (C#, C++, F#, VB) | `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` | `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj`, `packages.config` |
| Python PIP             | Python                           | `requirements.txt`, `pipfile.lock`                     | `requirements.txt`, `pipfile.lock`, `setup.py`*                           |
| RubyGems               | Ruby                             | `Gemfile.lock`                                         | `Gemfile.lock`,`Gemfile`, `*.gemspec`                                     |
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}| Composer             | PHP           | `composer.lock` | `composer.json`, `composer.lock` |{% endif %}

{% note %}

**Observação:** se você listar suas dependências Python em um arquivo `setup.py`, pode não ser possível analisar, listar e alertar sobre cada dependência de seu projeto.

{% endnote %}

### Listar dependências em um repositório com gráfico de dependências habilitado

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}

{% if currentVersion == "free-pro-team@latest" %}
### Habilitar o gráfico de dependências em um repositório privado

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
4. Leia a mensagem sobre concessão de {% data variables.product.product_name %} acesso a dados de repositórios para habilitar o gráfico de dependências e depois clique em **Allow access** (Habilitar acesso). ![Botão para permitir acesso a dados do repositório para habilitar o gráfico de dependências](/assets/images/help/repository/dependency-graph-allow-access-button.png)

Para obter mais informações, consulte "[Entender como o {% data variables.product.product_name %} usa e protege seus dados](/categories/understanding-how-github-uses-and-protects-your-data)".

### Desabilitar o gráfico de dependências em um repositório privado

{% data reusables.repositories.you-can-enable-or-disable-security-features %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em "Data services" (Serviços de dados), desmarque **Dependency graph** (Gráfico de dependências). ![Caixa de seleção para desabilitar o gráfico de dependências](/assets/images/help/repository/private-repo-data-use-dependency-graph-disabled.png)

Para optar por recusar o uso de dados do repositório, consulte "[Aceitar ou recusar o uso de dados do repositório privado](/articles/opting-into-or-out-of-data-use-for-your-private-repository)".
{% endif %}

### Solução de problemas para o gráfico de dependências

{% data reusables.repositories.troubleshooting-dependency-graph %}

### Leia mais

- "[Listar os projetos com dependências em um repositório](/articles/listing-the-projects-that-depend-on-a-repository)"{% if currentVersion == "free-pro-team@latest" %}
- "[Entender como o {% data variables.product.product_name %} usa e protege seus dados](/categories/understanding-how-github-uses-and-protects-your-data)"
- "[Exibir e atualizar dependências vulneráveis no repositório](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)"{% endif %}
