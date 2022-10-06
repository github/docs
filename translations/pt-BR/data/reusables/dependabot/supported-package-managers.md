---
ms.openlocfilehash: 073c21c1480e0f9f699687c730aef2bb670654e7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146689018"
---
A tabela a seguir mostra, para cada gerenciador de pacotes:
- O valor YAML a ser usado no arquivo *dependabot.yml*
- As versões compatíveis do gerenciador de pacotes
- Se as dependências em repositórios ou registros de {% data variables.product.prodname_dotcom %} privados são compatíveis
- Se as dependências delegadas são compatíveis

Gerenciador de pacotes | Valor do YAML      | Versões com suporte | Repositórios privados | Registros privados | Delegação
---------------|------------------|------------------|:---:|:---:|:---:
bundler        | `bundler`        | v1, v2           | | **✓** | **✓** |
Cargo          | `cargo`          | v1               | **✓** | **✓** | |
Compositor       | `composer`       | v1, v2           | **✓** | **✓** | |
Docker         | `docker`         | v1               | **✓** | **✓** | |
Hex            | `mix`            | v1               | | **✓** | |
elm-package    | `elm`            | v0.19            | **✓** | **✓** | |
git submodule  | `gitsubmodule`   | N/A (sem versão) | **✓** | **✓** | |
GitHub Actions | `github-actions` | N/A (sem versão) | **✓** | **✓** | |
Módulos Go     | `gomod`          | v1               | **✓** | **✓** | **✓** |
Gradle         | `gradle`         | N/D (sem versão)<sup>[1]</sup>   | **✓** | **✓** | |
Maven          | `maven`          | N/D (sem versão)<sup>[2]</sup>   | **✓** | **✓** | |
npm            | `npm`            | v6, v7, v8       | **✓** | **✓** | |
NuGet          | `nuget`          | <= 4.8<sup>[3]</sup> | **✓** | **✓** | |
pip            | `pip`            | v21.1.2          | | **✓** | |
pipenv         | `pip`            | <= 2021-05-29    | | **✓** | |
pip-compile    | `pip`            | 6.1.0            | | **✓** | |
poetry         | `pip`            | v1               | | **✓** | |{% ifversion fpt or ghec or ghes > 3.4 %}
pub            | `pub`            | v2 <sup>[4]</sup> | | | |{% endif %}
Terraform      | `terraform`      | >= 0.13, <= 1.2.x  | **✓** | **✓** | |
YARN           | `npm`            | v1               | **✓** | **✓** | |

{% tip %}

**Dica:** para gerenciadores de pacotes como `pipenv` e `poetry`, você precisa usar o valor `pip` do YAML. Por exemplo, se você usar `poetry` para gerenciar suas dependências do Python e quiser que o {% data variables.product.prodname_dependabot %} monitore seu arquivo de manifesto de dependência em busca de novas versões, use `package-ecosystem: "pip"` no arquivo *dependabot.yml*.

{% endtip %}

[1] O {% data variables.product.prodname_dependabot %} não executa o Gradle, mas dá suporte a atualizações nos seguintes arquivos: `build.gradle`, `build.gradle.kts` (para projetos do Kotlin) e arquivos incluídos por meio da declaração `apply` que têm `dependencies` no nome do arquivo. Observe que `apply` não dá suporte a `apply to`, recursão ou sintaxes avançadas (por exemplo, `apply` do Kotlin com `mapOf` e nomes de arquivo definidos por propriedade).

[2] O {% data variables.product.prodname_dependabot %} não executa o Maven, mas dá suporte a atualizações em arquivos `pom.xml`.

[3] {% data variables.product.prodname_dependabot %} não executa o NuGet CLI, mas é compatível com a maioria dos recursos até a versão 4.8.

O suporte a {% ifversion fpt or ghec or ghes > 3.4 %} [4] {% ifversion ghes = 3.5 %}`pub` está em versão beta. Todas as limitações conhecidas estão sujeitas a alterações. Observe que o {% data variables.product.prodname_dependabot %}:
   - Não dá suporte à atualização de dependências do Git em `pub`. 
   - Não executará uma atualização quando a versão para a qual ele tenta atualizar for ignorada, mesmo que uma versão anterior esteja disponível.

   Para obter informações sobre como configurar o arquivo _dependabot.yml_ para `pub`, confira "[Como habilitar o suporte para ecossistemas de nível beta](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems)".
   {%- else %}{% data variables.product.prodname_dependabot %} não executará uma atualização para `pub` quando a versão para a qual ele tenta atualizar for ignorada, mesmo se uma versão anterior estiver disponível.{% endif %} {% endif %} 
