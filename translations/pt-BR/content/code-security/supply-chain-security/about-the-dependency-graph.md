---
title: Sobre o gráfico de dependências
intro: 'Você pode usar o gráfico de dependências para identificar todas as dependências do seu projeto. O gráfico de dependências é compatível com uma série de ecossistemas de pacotes populares.'
redirect_from:
  - /github/visualizing-repository-data-with-graphs/about-the-dependency-graph
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
topics:
  - repositories
---

<!--Marketing-LINK: From /features/security and /features/security/software-supply-chain pages "How GitHub's dependency graph is generated".-->

### Disponibilidade do gráfico de dependências

O gráfico de dependências está disponível para todos{% if currentVersion == "free-pro-team@latest" %} os repositórios públicos{% endif %} que definem dependências em um ecossistema de pacote suportado usando um formato de arquivo suportado. {% if currentVersion == "free-pro-team@latest" %} Os administradores do repositório também podem configurar o gráfico de dependências para repositórios privados.{% endif %}

{% data reusables.repositories.enable-security-alerts %}

### Sobre o gráfico de dependências

O gráfico de dependências é um resumo do manifesto e bloqueia arquivos armazenados em um repositório. Para cada repositório, é exibido{% if currentVersion == "free-pro-team@latest" %}:

- As dependências, os ecossistemas e os pacotes do qual depende
- Dependentes, os repositórios e pacotes que dependem dele{% else %} dependências, isto é, os ecossistemas e pacotes de que ele depende. O {% data variables.product.prodname_ghe_server %} não calcula informações sobre dependentes, repositórios e pacotes que dependem de um repositório.{% endif %}

Ao fazer push de um commit para {% data variables.product.product_name %} que altera ou adiciona um manifesto compatível ou um arquivo de bloqueio para o branch-padrão, o gráfico de dependências é atualizado automaticamente.{% if currentVersion == "free-pro-team@latest" %} Além disso, o gráfico é atualizado quando alguém faz push de uma alteração no repositório de uma de suas dependências.{% endif %} Para informações sobre os ecossistemas compatíveis e arquivos de manifesto, consulte "[ecossistemas de pacote compatíveis](#supported-package-ecosystems)" abaixo.

{% if currentVersion == "free-pro-team@latest" %}
Ao criar um pull request que contém alterações para dependências direcionadas ao branch padrão, {% data variables.product.prodname_dotcom %} usará o gráfico de dependências para adicionar revisões de dependências ao pull request. Eles indicam se as dependências contêm vulnerabilidades e, em caso afirmativo, a versão da dependência na qual a vulnerabilidade foi corrigida. For more information, see "[About dependency review](/code-security/supply-chain-security/about-dependency-review)."
{% endif %}

### Dependências incluídas

O gráfico de dependências inclui todas as dependências de um repositório detalhadas nos arquivos de manifesto e de bloqueio ou seu equivalente para ecossistemas compatíveis. Isto inclui:

- Dependências diretas, que são definidas explicitamente em um manifesto ou arquivo de bloqueio
- Dependências indiretas dessas dependências diretas, também conhecidas como dependências transitórias ou subdependências

O gráfico de dependências identifica dependências indiretas{% if currentVersion == "free-pro-team@latest" %} explicitamente a partir de um arquivo de bloqueio ou verificando as dependências de suas dependências diretas. Para o gráfico mais confiável, você deve usar os arquivos de bloqueio (ou o equivalente deles), pois definem exatamente quais versões das dependências diretas e indiretas você usa atualmente. Se você usar arquivos de bloqueio, você também terá certeza de que todos os contribuidores do repositório usarão as mesmas versões, o que facilitará para você testar e depurar o código{% else %} dos arquivos de bloqueio{% endif %}.

{% if currentVersion == "free-pro-team@latest" %}
### Dependentes incluídos

Para repositórios públicos, apenas repositórios públicos que dependem dele ou de pacotes que publica são relatados. Essas informações não foram relatadas para repositórios privados.{% endif %}

### Usar o gráfico de dependências

Você pode usar o gráfico de dependências para:

- Explore os repositórios dos quais o seu código depende {% if currentVersion == "free-pro-team@latest" %} e aqueles que dependem dele {% endif %}. Para obter mais informações, consulte "[Explorar as dependências de um repositório](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)". {% if currentVersion == "free-pro-team@latest" %}
- Visualizar um resumo das dependências usadas nos repositórios da sua organização em um único painel. Para obter mais informações, consulte "[Visualizar informações na organização](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights)".{% endif %}
- Ver e atualizar dependências vulneráveis no seu repositório. Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies).{% if currentVersion == "free-pro-team@latest" %}
- Veja as informações sobre dependências vulneráveis em pull requests. Para obter mais informações, consulte "[Revisar as alterações de dependências em um pull request](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)".{% endif %}

### Habilitar o gráfico de dependências

{% if currentVersion == "free-pro-team@latest" %}Para gerar um gráfico dependente, {% data variables.product.product_name %} precisa de acesso somente-leitura ao manifesto dependência e aos arquivos de bloqueios de um repositório. O gráfico de dependências é gerado automaticamente para todos os repositórios públicos e você pode optar por habilitá-lo para repositórios privados. For information about enabling or disabling it for private repositories, see "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)."{% endif %}

{% if enterpriseServerVersions contém currentVersion and currentVersion ver_gt "enterprise-server@2. 1" %}Se o gráfico de dependências não estiver disponível no seu sistema, o administrador do site poderá habilitar o gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %}. Para obter mais informações, consulte "[Habilitar alertas para dependências vulneráveis em {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server){% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %} Se o gráfico de dependências não estiver disponível no seu sistema, o administrador do site poderá habilitar o gráfico de dependências e os alertas de segurança. Para obter mais informações, consulte "[Habilitar alertas para dependências vulneráveis em {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)".

{% endif %}

Quando o gráfico de dependências é ativado pela primeira vez, todos manifesto e arquivos de bloqueio para ecossistemas suportados são analisados imediatamente. O gráfico geralmente é preenchido em minutos, mas isso pode levar mais tempo para repositórios com muitas dependências. Uma vez habilitado, o gráfico é atualizado automaticamente a cada push para o repositório{% if currentVersion == "free-pro-team@latest" %} e cada push para outros repositórios no gráfico{% endif %}.

### Ecossistemas de pacote compatíveis

Os formatos recomendados definem explicitamente quais versões são usadas para todas as dependências diretas e indiretas. Se você usar esses formatos, seu gráfico de dependências será mais preciso. Ele também reflete a configuração da criação atual e permite que o gráfico de dependências relate vulnerabilidades em dependências diretas e indiretas.{% if currentVersion == "free-pro-team@latest" %} As dependências indiretas que são inferidas a partir de um arquivo de manifesto (ou equivalente) são excluídas das verificações de dependências vulneráveis.{% endif %}

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
- "[Explorar as dependências de um repositório](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)"{% if currentVersion == "free-pro-team@latest" %}
- "[Visualizar ideias para sua organização](/github/setting-up-and-managing-organizations-and-teams/viewing-insights-for-your-organization)"
- "[Visualizar e atualizar dependências vulneráveis no seu repositório](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Solução de problemas na detecção de dependências vulneráveis](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"{% endif %}
