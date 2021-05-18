---
title: Sobre o gráfico de dependências
intro: 'Informações detalhadas sobre o gráfico de dependência, os ecossistemas que apoia e como determina quais pacotes um repositório depende.'
versions:
  enterprise-server: <=2.22
topics:
  - Repositories
---

<!--See /content/code-security/supply-chain-security/about-the-dependency-graph for the latest version of this article -->

### Disponibilidade do gráfico de dependências

O gráfico de dependências está disponível para cada repositório que define as dependências em um ecossistema de pacote compatível usando um formato de arquivo compatível.

{% data reusables.repositories.enable-security-alerts %}

### Sobre o gráfico de dependências

O gráfico de dependências é um resumo do manifesto e bloqueia arquivos armazenados em um repositório. Para cada repositório, ele mostra dependências, ou seja, os ecossistemas e os pacotes do qual depende. O {% data variables.product.prodname_ghe_server %} não calcula informações sobre dependentes, repositórios e pacotes que dependem de um repositório.

Ao fazer push de um commit para {% data variables.product.product_name %} que muda ou adiciona um manifesto compatível ou um arquivo de bloqueio para o branch padrão, o gráfico de dependências será atualizado automaticamente. Para obter informações sobre ecossistemas compatíveis e arquivos de manifesto, consulte "[Ecossistemas de pacotes compatíveis](#supported-package-ecosystems)" abaixo.

### Dependências incluídas

O gráfico de dependências inclui todas as dependências de um repositório detalhadas nos arquivos de manifesto e de bloqueio ou seu equivalente para ecossistemas compatíveis. Isto inclui:

- Dependências diretas, que são definidas explicitamente em um manifesto ou arquivo de bloqueio
- Dependências indiretas dessas dependências diretas, também conhecidas como dependências transitórias ou subdependências

O gráfico de dependências identifica dependências indiretas.

### Usar o gráfico de dependências

Você pode usar o gráfico de dependências para:

- Explore os repositórios dos quais o código depende. Para obter mais informações, consulte "[Explorar as dependências de um repositório](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)".
- Ver e atualizar dependências vulneráveis no seu repositório. Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)"

### Habilitar o gráfico de dependências

{% if enterpriseServerVersions contém currentVersion and currentVersion ver_gt "enterprise-server@2. 1" %}Se o gráfico de dependências não estiver disponível no seu sistema, o administrador do site poderá habilitar o gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %}. Para obter mais informações, consulte "[Habilitar alertas para dependências vulneráveis em {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server){% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %} Se o gráfico de dependências não estiver disponível no seu sistema, o administrador do site poderá habilitar o gráfico de dependências e os alertas de segurança. Para obter mais informações, consulte "[Habilitar alertas para dependências vulneráveis em {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)".

{% endif %}

Quando o gráfico de dependências é ativado pela primeira vez, todos manifesto e arquivos de bloqueio para ecossistemas suportados são analisados imediatamente. O gráfico geralmente é preenchido em minutos, mas isso pode levar mais tempo para repositórios com muitas dependências. Uma vez habilitado, o gráfico é automaticamente atualizado a cada push no repositório.

### Ecossistemas de pacote compatíveis
<!-- If you make changes to this feature, update /getting-started-with-github/github-language-support to reflect any changes to supported packages. -->

Os formatos recomendados definem explicitamente quais versões são usadas para todas as dependências diretas e indiretas. Se você usar esses formatos, seu gráfico de dependências será mais preciso. Além disso, ele reflete a configuração da compilação atual e permite que o gráfico de dependências relate vulnerabilidades em dependências diretas e indiretas.

Os ecossistemas listados abaixo são compatíveis com o gráfico de dependências e com {% if currentVersion == "enterprise-server@2.22" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}os alertas de segurança{% endif %}.

| Gerenciador de pacotes | Idiomas                          | Formatos recomendados                                  | Todos os formatos compatíveis                                             |
| ---------------------- | -------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------- |
| Composer               | PHP                              | `composer.lock`                                        | `composer.json`, `composer.lock`                                          |
| `dotnet` CLI           | .NET languages (C#, C++, F#, VB) | `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` | `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj`, `packages.config` |
| Maven                  | Java, Scala                      | `pom.xml`                                              | `pom.xml`                                                                 |
| npm                    | JavaScript                       | `package-lock.json`                                    | `package-lock.json`, `package.json`                                       |
| Python PIP             | Python                           | `requirements.txt`, `pipfile.lock`                     | `requirements.txt`, `pipfile`, `pipfile.lock`, `setup.py`*                |
| RubyGems               | Ruby                             | `Gemfile.lock`                                         | `Gemfile.lock`, `Gemfile`, `*.gemspec`                                    |
| Yarn                   | JavaScript                       | `yarn.lock`                                            | `package.json`, `yarn.lock`                                               |

{% note %}

**Observação:** se você listar suas dependências de Python em um arquivo `setup.py`, será provável que não possamos analisar e listar cada dependência no seu projeto.

{% endnote %}

### Leia mais

- "[Gráfico de dependências](https://en.wikipedia.org/wiki/Dependency_graph)" na Wikipedia
- "[Explorar as dependências de um repositório](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)"
