---
title: Sobre o gráfico de dependências
intro: Você pode usar o gráfico de dependências para identificar todas as dependências do seu projeto. O gráfico de dependências é compatível com uma série de ecossistemas de pacotes populares.
redirect_from:
  - /github/visualizing-repository-data-with-graphs/about-the-dependency-graph
  - /code-security/supply-chain-security/about-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Dependency graph
ms.openlocfilehash: 4a8d58f0844337e7b8f88aabe72690a9a46bfaa0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106490'
---
<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->
<!--Marketing-LINK: From /features/security and /features/security/software-supply-chain pages "How GitHub's dependency graph is generated".-->

## Sobre o gráfico de dependências

{% data reusables.dependabot.about-the-dependency-graph %}

Quando você efetua push de um commit para o {% data variables.product.product_name %} que altera ou adiciona um arquivo de manifesto ou de bloqueio compatível para o branch padrão, o grafo de dependência é atualizado automaticamente.{% ifversion fpt or ghec %} Além disso, o grafo é atualizado quando alguém efetua push de uma alteração no repositório de uma das suas dependências.{% endif %} Para obter informações sobre os ecossistemas compatíveis e os arquivos de manifesto, confira "[Ecossistemas de pacotes compatíveis](#supported-package-ecosystems)" abaixo.

{% ifversion dependency-submission-api %} {% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

Ao criar um pull request que contém alterações para dependências direcionadas ao branch padrão, {% data variables.product.prodname_dotcom %} usará o gráfico de dependências para adicionar revisões de dependências ao pull request. Eles indicam se as dependências contêm vulnerabilidades e, em caso afirmativo, a versão da dependência na qual a vulnerabilidade foi corrigida. Para obter mais informações, confira "[Sobre a revisão de dependência](/code-security/supply-chain-security/about-dependency-review)".

## Disponibilidade do gráfico de dependências

{% ifversion fpt or ghec %}O grafo de dependência está disponível para todos os repositórios públicos que definem dependências em um ecossistema de pacotes compatível usando um formato de arquivo compatível. Os administradores de repositórios também podem configurar o gráfico de dependências para repositórios privados. {% endif %}Para obter mais informações {% ifversion ghes %}sobre a configuração do grafo de dependência{% endif %}, confira "[Como configurar o grafo de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)".

{% data reusables.code-scanning.enterprise-enable-dependency-graph %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

## Dependências incluídas

O grafo de dependência inclui todas as dependências de um repositório detalhadas nos arquivos de manifesto e de bloqueio, ou um equivalente, para ecossistemas com suporte{% ifversion dependency-submission-api %}, bem como todas as dependências enviadas usando a API Envio de dependência (beta){% endif %}. Isso inclui:

- As dependências diretas, que são definidas explicitamente em um arquivo de manifesto ou de bloqueio {% ifversion dependency-submission-api %} ou que foram enviadas usando a API Envio de dependência (beta){% endif %}
- Dependências indiretas dessas dependências diretas, também conhecidas como dependências transitórias ou subdependências

O grafo de dependência identifica as dependências indiretas{% ifversion fpt or ghec %} explicitamente por meio de um arquivo de bloqueio ou verificando as dependências das dependências diretas. Para o gráfico mais confiável, você deve usar os arquivos de bloqueio (ou o equivalente deles), pois definem exatamente quais versões das dependências diretas e indiretas você usa atualmente. Se você usar arquivos de bloqueio, você também terá certeza de que todos os contribuidores do repositório usarão as mesmas versões, o que facilitará para você testar e depurar o código{% else %} dos arquivos de bloqueio{% endif %}.

Para saber mais sobre como {% data variables.product.product_name %} ajuda você a entender as dependências em seu ambiente, confira "[Sobre a segurança da cadeia de suprimentos](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)".

{% ifversion fpt or ghec %}

## Dependentes incluídos

Para repositórios públicos, apenas repositórios públicos que dependem dele ou de pacotes que publica são relatados. Essas informações não foram relatadas para repositórios privados.{% endif %}

## Usar o gráfico de dependências

Você pode usar o gráfico de dependências para:

- Explore os repositórios dos quais o seu código depende{% ifversion fpt or ghec %} e aqueles que dependem dele{% endif %}. Para obter mais informações, confira "[Como explorar as dependências de um repositório](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)". {% ifversion ghec %}
- Visualizar um resumo das dependências usadas nos repositórios da sua organização em um único painel. Para obter mais informações, confira "[Como ver os insights da sua organização](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights)".{% endif %}
- Ver e atualizar dependências vulneráveis no seu repositório. Para obter mais informações, confira "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".{% ifversion fpt or ghes or ghec %}
- Veja as informações sobre dependências vulneráveis em pull requests. Para obter mais informações, confira "[Como revisar as alterações de dependência em uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)".{% endif %}

## Ecossistemas de pacote compatíveis

Os formatos recomendados definem explicitamente quais versões são usadas para todas as dependências diretas e indiretas. Se você usar esses formatos, o grafo de dependência será mais preciso. Ele também reflete a configuração de build atual e permite que o grafo de dependência relate as vulnerabilidades em dependências diretas e indiretas.{% ifversion fpt or ghec %} As dependências indiretas que são inferidas por meio de um arquivo de manifesto (ou um equivalente), são excluídas das verificações de dependências não seguras.{% endif %}

| Gerenciador de pacotes | Idiomas | Formatos recomendados | Todos os formatos com suporte |
| --- | --- | --- | ---|
{%- ifversion dependency-graph-rust-support %} | Cargo | Rust | `Cargo.lock` | `Cargo.toml`, `Cargo.lock` | {%- endif %} | Composer             | PHP           | `composer.lock` | `composer.json`, `composer.lock` | | NuGet | Linguagens .NET (C#, F#, VB), C++  |   `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` |  `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj`, `packages.config` | {%- ifversion github-actions-in-dependency-graph %} | Fluxos de trabalho do {% data variables.product.prodname_actions %} <sup>[†]</sup> | YAML | `.yml`, `.yaml` | `.yml`, `.yaml` | {%- endif %} | Módulos Go | Go | `go.sum` | `go.mod`, `go.sum` | | Maven | Java, Scala |  `pom.xml`  | `pom.xml`  | | npm | JavaScript |            `package-lock.json` | `package-lock.json`, `package.json`| | pip             | Python                    | `requirements.txt`, `pipfile.lock` | `requirements.txt`, `pipfile`, `pipfile.lock`, `setup.py`<sup>[‡]</sup> | {%- ifversion dependency-graph-dart-support %} | pub             | Dart                    | `pubspec.lock` | `pubspec.yaml`, `pubspec.lock` | {%- endif %} {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | Python Poetry | Python                    | `poetry.lock` | `poetry.lock`, `pyproject.toml` | {%- endif %} | RubyGems             | Ruby           | `Gemfile.lock` | `Gemfile.lock`, `Gemfile`, `*.gemspec` | | Yarn | JavaScript | `yarn.lock` | `package.json`, `yarn.lock` |

{% ifversion github-actions-in-dependency-graph %} [†] Os fluxos de trabalho do {% data reusables.enterprise.3-5-missing-feature %} {% data variables.product.prodname_actions %} devem estar localizados no diretório `.github/workflows/` de um repositório para serem reconhecidos como manifestos. As ações ou os fluxos de trabalho referenciados com a sintaxe `jobs[*].steps[*].uses` ou `jobs.<job_id>.uses` serão analisados como dependências. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions)".

{% endif %}

[‡] Se você listar as dependências Python em um arquivo `setup.py`, talvez não será possível analisar nem listar todas as dependências do projeto.

{% ifversion github-actions-in-dependency-graph %} {% note %}

**Observação:** as dependências do fluxo de trabalho do {% data variables.product.prodname_actions %} são exibidas no grafo de dependência para fins informativos. Os alertas de dependência não são atualmente compatíveis com os fluxos de trabalho de {% data variables.product.prodname_actions %}.

{% endnote %} {% endif %}

{% ifversion dependency-submission-api %}Você pode usar a API Envio de dependência (beta) para adicionar dependências do gerenciador de pacotes ou do ecossistema de sua escolha ao grafo de dependência, mesmo que o ecossistema não esteja na lista de ecossistemas com suporte acima. O grafo de dependência exibirá as dependências enviadas agrupadas por ecossistema, mas separadamente das dependências analisadas dos arquivos de manifesto ou de bloqueio. Você só obterá {% data variables.product.prodname_dependabot_alerts %} das dependências de um dos [ecossistemas com suporte](https://github.com/github/advisory-database#supported-ecosystems) do {% data variables.product.prodname_advisory_database %}. Para obter mais informações sobre a API Envio de dependência, confira "[Como usar a API Envio de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)".{% endif %}
## Leitura adicional

- "[Grafo de dependência](https://en.wikipedia.org/wiki/Dependency_graph)" na Wikipédia
- "[Como explorar as dependências de um repositório](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)"
- "[Como ver e atualizar {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"
- "[Solução de problemas de detecção de dependências vulneráveis](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
