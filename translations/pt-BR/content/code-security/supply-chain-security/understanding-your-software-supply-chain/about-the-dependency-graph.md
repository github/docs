---
title: Sobre o gráfico de dependências
intro: Você pode usar o gráfico de dependências para identificar todas as dependências do seu projeto. O gráfico de dependências é compatível com uma série de ecossistemas de pacotes populares.
redirect_from:
  - /github/visualizing-repository-data-with-graphs/about-the-dependency-graph
  - /code-security/supply-chain-security/about-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
  ghec: '*'
type: overview
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Gráfico de dependências
---

<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->
<!--Marketing-LINK: From /features/security and /features/security/software-supply-chain pages "How GitHub's dependency graph is generated".-->

## Disponibilidade do gráfico de dependências

{% ifversion fpt or ghec %}O gráfico de dependências está disponível para cada repositório público que define as dependências em um ecossistema de pacote compatível usando um formato de arquivo compatível. Os administradores de repositórios também podem configurar o gráfico de dependências para repositórios privados.{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

## Sobre o gráfico de dependências

O gráfico de dependências é um resumo do manifesto e bloqueia arquivos armazenados em um repositório. Para cada repositório, ele mostra{% ifversion fpt or ghec %}:

- As dependências, os ecossistemas e os pacotes do qual depende
- Dependentes, os repositórios e pacotes que dependem dele{% else %} dependências, isto é, os ecossistemas e pacotes de que ele depende. O {% data variables.product.product_name %} não calcula informações sobre dependentes, repositórios e pacotes que dependem de um repositório.{% endif %}

Ao fazer push de um commit para o {% data variables.product.product_name %}, que muda ou adiciona um manifesto compatível ou um arquivo de bloqueio para o branch-padrão, o gráfico de dependências será atualizado automaticamente.{% ifversion fpt or ghec %} Além disso, o gráfico é atualizado quando alguém faz push de uma alteração no repositório de uma de suas dependências.{% endif %} Para obter informações sobre os ecossistemas compatíveis e arquivos de manifesto, consulte "[ecossistemas de pacotes compatíveis](#supported-package-ecosystems)" abaixo.

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
Ao criar um pull request que contém alterações para dependências direcionadas ao branch padrão, {% data variables.product.prodname_dotcom %} usará o gráfico de dependências para adicionar revisões de dependências ao pull request. Eles indicam se as dependências contêm vulnerabilidades e, em caso afirmativo, a versão da dependência na qual a vulnerabilidade foi corrigida. Para obter mais informações, consulte "[Sobre a revisão de dependências](/code-security/supply-chain-security/about-dependency-review)".
{% endif %}

## Dependências incluídas

O gráfico de dependências inclui todas as dependências de um repositório detalhadas nos arquivos de manifesto e de bloqueio ou seu equivalente para ecossistemas compatíveis. Isto inclui:

- Dependências diretas, que são definidas explicitamente em um manifesto ou arquivo de bloqueio
- Dependências indiretas dessas dependências diretas, também conhecidas como dependências transitórias ou subdependências

O gráfico de dependências identifica as dependências indiretas{% ifversion fpt or ghec %} explicitamente a partir de um arquivo de bloqueio ou verificando as dependências das suas dependências diretas. Para o gráfico mais confiável, você deve usar os arquivos de bloqueio (ou o equivalente deles), pois definem exatamente quais versões das dependências diretas e indiretas você usa atualmente. Se você usar arquivos de bloqueio, você também terá certeza de que todos os contribuidores do repositório usarão as mesmas versões, o que facilitará para você testar e depurar o código{% else %} dos arquivos de bloqueio{% endif %}.

{% ifversion fpt or ghec %}
## Dependentes incluídos

Para repositórios públicos, apenas repositórios públicos que dependem dele ou de pacotes que publica são relatados. Essas informações não foram relatadas para repositórios privados.{% endif %}

## Usar o gráfico de dependências

Você pode usar o gráfico de dependências para:

- Explorar os repositórios dos quais o seu código depende{% ifversion fpt or ghec %} e aqueles que dependem dele{% endif %}. Para obter mais informações, consulte "[Explorar as dependências de um repositório](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)". {% ifversion fpt or ghec %}
- Visualizar um resumo das dependências usadas nos repositórios da sua organização em um único painel. Para obter mais informações, consulte "[Visualizar informações na organização](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights)".{% endif %}
- Ver e atualizar dependências vulneráveis no seu repositório. Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)". {% ifversion fpt or ghes > 3.1 or ghec %}
- Veja as informações sobre dependências vulneráveis em pull requests. Para obter mais informações, consulte "[Revisar as alterações de dependências em um pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)".{% endif %}

## Habilitar o gráfico de dependências

{% ifversion fpt or ghec %}Para gerar um gráfico de dependência, o {% data variables.product.product_name %} precisa de acesso somente leitura ao manifesto dependência e aos arquivos de bloqueio em um repositório. O gráfico de dependências é gerado automaticamente para todos os repositórios públicos e você pode optar por habilitá-lo para repositórios privados. For information about enabling or disabling it for private repositories, see "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)."{% endif %}

{% ifversion ghes or ghae %}Se o gráfico de dependências não estiver disponível no seu sistema, o proprietário da empresa poderá habilitar o gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %}. Para obter mais informações, consulte[Habilitando o gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %} para a sua empresa](/admin/configuration/configuring-github-connect/enabling-the-dependency-graph-and-dependabot-alerts-for-your-enterprise)."{% endif %}

Quando o gráfico de dependências é ativado pela primeira vez, todos manifesto e arquivos de bloqueio para ecossistemas suportados são analisados imediatamente. O gráfico geralmente é preenchido em minutos, mas isso pode levar mais tempo para repositórios com muitas dependências. Uma vez habilitado, o gráfico é atualizado automaticamente a cada push no repositório{% ifversion fpt or ghec %} e a cada push para outros repositórios no gráfico{% endif %}.

## Ecossistemas de pacote compatíveis

Os formatos recomendados definem explicitamente quais versões são usadas para todas as dependências diretas e indiretas. Se você usar esses formatos, seu gráfico de dependências será mais preciso. Ele também reflete a configuração da criação atual e permite que o gráfico de dependências relate vulnerabilidades em dependências diretas e indiretas.{% ifversion fpt or ghec %} As dependências indiretas, inferidas a partir de um arquivo de manifesto (ou equivalente), são excluídas das verificações de dependências vulneráveis.{% endif %}

| Gerenciador de pacotes | Linguagem                        | Formatos recomendados                                  | Todos os formatos compatíveis                                             |
| ---------------------- | -------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------- |
| Composer               | PHP                              | `composer.lock`                                        | `composer.json`, `composer.lock`                                          |
| `dotnet` CLI           | .NET languages (C#, C++, F#, VB) | `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` | `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj`, `packages.config` |

{%- if github-actions-in-dependency-graph %}
| {% data variables.product.prodname_actions %} workflows

<sup>[1]</sup> | YAML | `.yml`, `.yaml` | `.yml`, `.yaml` |
{%- endif %}
{%- ifversion fpt or ghes > 3.2 or ghae %}
| Go modules | Go | `go.sum` | `go.mod`, `go.sum` |
{%- elsif ghes = 3.2 %}
| Go modules | Go | `go.mod` | `go.mod` |
{%- endif %}
| Maven | Java, Scala |  `pom.xml`  | `pom.xml`  | | npm | JavaScript |            `package-lock.json` | `package-lock.json`, `package.json`| | Python PIP      | Python                    | `requirements.txt`, `pipfile.lock` | `requirements.txt`, `pipfile`, `pipfile.lock`, `setup.py`{% if github-actions-in-dependency-graph %}<sup>[2]</sup>{% else %}<sup>[1]</sup>{% endif %}
{%- ifversion fpt or ghes > 3.3 %}
| Python Poetry | Python                    | `poetry.lock` | `poetry.lock`, `pyproject.toml` |{% endif %} | RubyGems             | Ruby           | `Gemfile.lock` | `Gemfile.lock`, `Gemfile`, `*.gemspec` | | Yarn | JavaScript | `yarn.lock` | `package.json`, `yarn.lock` |

{% if github-actions-in-dependency-graph %}
[1] Please note that {% data variables.product.prodname_actions %} workflows must be located in the `.github/workflows/` directory of a repository to be recognized as manifests. Any actions or workflows referenced using the syntax `jobs[*].steps[*].uses` or `jobs.<job_id>.uses` will be parsed as dependencies. For more information, see "[Workflow syntax for GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions)."

[2] If you list your Python dependencies within a `setup.py` file, we may not be able to parse and list every dependency in your project.

{% else %}
[1] If you list your Python dependencies within a `setup.py` file, we may not be able to parse and list every dependency in your project.
{% endif %}

{% if github-actions-in-dependency-graph %}
{% note %}

**Note:** {% data variables.product.prodname_actions %} workflow dependencies are displayed in the dependency graph for informational purposes. Dependabot alerts are not currently supported for {% data variables.product.prodname_actions %} workflows.

{% endnote %}
{% endif %}
## Leia mais

- "[Gráfico de dependências](https://en.wikipedia.org/wiki/Dependency_graph)" na Wikipedia
- "[Explorar as dependências de um repositório](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)"{% ifversion fpt or ghec %}
- "[Visualizar informações da sua organização](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"{% endif %}
- "[Visualizar e atualizar dependências vulneráveis no seu repositório](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Solução de problemas na detecção de dependências vulneráveis](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
