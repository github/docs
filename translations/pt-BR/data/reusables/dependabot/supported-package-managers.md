---
ms.openlocfilehash: f37c93394be7f73c417b5cd040696b453c82e42d
ms.sourcegitcommit: e4069b5613c10d74954185995d0fb73224079463
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/17/2022
ms.locfileid: "148169237"
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
Docker {% ifversion dependabot-version-updates-enhanced-docker-support %}<sup>[1]</sup>{% endif %}         | `docker`         | v1               | **✓** | **✓** | |
Hex            | `mix`            | v1               | | **✓** | |
elm-package    | `elm`            | v0.19            | **✓** | **✓** | |
git submodule  | `gitsubmodule`   | N/A (sem versão) | **✓** | **✓** | |
GitHub Actions | `github-actions` | N/A (sem versão) | **✓** | **✓** | |
Módulos Go     | `gomod`          | v1               | **✓** | **✓** | **✓** |
Gradle         | `gradle`         | N/D (sem versão)<sup>[2]</sup>   | **✓** | **✓** | |
Maven          | `maven`          | N/D (sem versão)<sup>[3]</sup>   | **✓** | **✓** | |
npm            | `npm`            | v6, v7, v8       | **✓** | **✓** | |
NuGet          | `nuget`          | <= 4,8<sup>[4]</sup> | **✓** | **✓** | |
pip{% ifversion dependabot-PEP621-support %}<sup>[5]</sup>{% endif %}          | `pip`            | v21.1.2          | | **✓** | |
pipenv         | `pip`            | <= 2021-05-29    | | **✓** | |
pip-compile{% ifversion dependabot-PEP621-support %}<sup>[5]</sup>{% endif %}   | `pip`            | 6.1.0            | | **✓** | |
poetry         | `pip`            | v1               | | **✓** | |{% ifversion fpt or ghec or ghes > 3.4 %}
pub            | `pub`            | v2 <sup>[6]</sup> | | | |{% endif %}
Terraform      | `terraform`      | >= 0.13, <= 1.2.x  | **✓** | **✓** | |
{% ifversion dependabot-yarn-v3-update %}yarn           | `npm`            | v1, v2, v3       | **✓** | **✓** | **✓**<sup>[7]</sup> |{% else %}yarn           | `npm`            | v1               | **✓** | **✓** |  |
{% endif %}

{% tip %}

**Dica:** para gerenciadores de pacotes como `pipenv` e `poetry`, você precisa usar o valor `pip` do YAML. Por exemplo, se você usar `poetry` para gerenciar suas dependências do Python e quiser que o {% data variables.product.prodname_dependabot %} monitore seu arquivo de manifesto de dependência em busca de novas versões, use `package-ecosystem: "pip"` no arquivo *dependabot.yml*.

{% endtip %}

{% ifversion dependabot-version-updates-enhanced-docker-support %} [1] {% data variables.product.prodname_dependabot %} pode atualizar marcas de imagem do Docker em manifestos do Kubernetes. Adicione uma entrada ao elemento Docker `package-ecosystem` do arquivo _dependabot.yml_ para cada diretório que contém um manifesto do Kubernetes que faz referência a marcas de imagem do Docker. Os manifestos do Kubernetes podem ser arquivos YAML de implantação do Kubernetes ou gráficos do Helm. Para obter informações sobre como configurar o arquivo _dependabot.yml_ para `docker`, confira "`package-ecosystem`" em "[Opções de configuração para o arquivo dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#package-ecosystem)".

   {% data variables.product.prodname_dependabot %} dá suporte a Registros do Docker públicos e privados. Para obter uma lista dos registros com suporte, confira "`docker-registry`" em "[Opções de configuração para o arquivo dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#docker-registry)".
{% endif %}

[2] O {% data variables.product.prodname_dependabot %} não executa o Gradle, mas dá suporte a atualizações nos seguintes arquivos: `build.gradle`, `build.gradle.kts` (para projetos do Kotlin) e arquivos incluídos por meio da declaração `apply` que têm `dependencies` no nome do arquivo. Observe que `apply` não dá suporte a `apply to`, recursão ou sintaxes avançadas (por exemplo, `apply` do Kotlin com `mapOf` e nomes de arquivo definidos por propriedade).

[3] O {% data variables.product.prodname_dependabot %} não executa o Maven, mas dá suporte a atualizações em arquivos `pom.xml`.

[4] {% data variables.product.prodname_dependabot %} não executa o NuGet CLI, mas é compatível com a maioria dos recursos até a versão 4.8.

{% ifversion dependabot-PEP621-support %} [5] Além de dar suporte a atualizações de arquivos `requirements.txt`, {% data variables.product.prodname_dependabot %} dá suporte a atualizações de arquivos `pyproject.toml` se eles seguem o padrão PEP 621. {% endif %}

O suporte a {% ifversion fpt or ghec or ghes > 3.4 %} [6] {% ifversion ghes = 3.5 %}`pub` está em versão beta. Todas as limitações conhecidas estão sujeitas a alterações. Observe que o {% data variables.product.prodname_dependabot %}:
   - Não dá suporte à atualização de dependências do Git em `pub`. 
   - Não executará uma atualização quando a versão para a qual ele tenta atualizar for ignorada, mesmo que uma versão anterior esteja disponível.

   Para obter informações sobre como configurar o arquivo _dependabot.yml_ para `pub`, confira "[Como habilitar o suporte para ecossistemas de nível beta](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems)".
   {%- else %}{% data variables.product.prodname_dependabot %} não executará uma atualização para `pub` quando a versão para a qual ele tenta atualizar for ignorada, mesmo se uma versão anterior estiver disponível.{% endif %} {% endif %} 

{% ifversion dependabot-yarn-v3-update %} [7] O dependabot dá suporte a dependências de fornecedores para v2 em diante.{% endif %}

