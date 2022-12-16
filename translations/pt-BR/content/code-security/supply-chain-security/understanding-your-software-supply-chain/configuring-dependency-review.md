---
title: Configuração da revisão de dependência
intro: Você pode usar a análise de dependência para capturar vulnerabilidades antes que elas sejam adicionadas ao projeto.
miniTocMaxHeadingLevel: 3
shortTitle: Configure dependency review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
ms.openlocfilehash: b5e5ccb5107cd96d1a88f896fd46d5b948a365cd
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163349'
---
## Sobre a análise de dependência

{% data reusables.dependency-review.feature-overview %}   

Para obter mais informações, consulte "[Sobre a revisão de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)" ou "[Como revisar as alterações de dependência em uma solicitação pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)".

## Sobre a configuração da revisão de dependência

{% ifversion fpt %} A revisão de dependência está disponível em todos os repositórios públicos de todos os produtos e não pode ser desabilitada. A revisão de dependências está disponível em repositórios privados pertencentes a organizações que usam o GitHub Enterprise Cloud e têm uma licença para [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security). Para obter mais informações, confira a [documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review).

{% elsif ghec %} A revisão de dependência está incluída no {% data variables.product.product_name %} em repositórios públicos. Para usar a revisão de dependências em repositórios privados pertencentes a organizações, você deve ter uma licença para [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) e ter o gráfico de dependências habilitado.

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
1. Se o {% data variables.product.prodname_GH_advanced_security %} ainda não estiver habilitado, clique em **Habilitar** ao lado do recurso.
   ![Captura de tela do recurso Segurança Avançada do GitHub com o botão "Habilitar" enfatizado](/assets/images/help/security/enable-ghas-private-repo.png)

{% elsif ghes or ghae %}

A revisão de dependência está disponível quando o grafo de dependência está habilitado para {% data variables.location.product_location %} e o {% data variables.product.prodname_advanced_security %} está habilitado para a organização ou o repositório.{% ifversion ghes %} Para obter mais informações, confira "[Como habilitar o {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise)".{% endif %}

### Como verificar se o grafo de dependência está habilitado

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Em "Configurar recursos de segurança e análise", verifique se o grafo de dependência está habilitado. 
1. Se o grafo de dependência estiver habilitado, clique em **Habilitar** ao lado de "{% data variables.product.prodname_GH_advanced_security %}" para habilitar {% data variables.product.prodname_advanced_security %}, incluindo a revisão de dependência. O botão Habilitar fica desabilitado quando a empresa não tem licenças disponíveis para o {% data variables.product.prodname_advanced_security %}.{% ifversion ghes %} ![Captura de tela dos "Recursos de segurança e análise de código"](/assets/images/enterprise/3.4/repository/code-security-and-analysis-enable-ghas-3.4.png){% endif %}

{% endif %}

{% ifversion dependency-review-action-configuration %}
## Sobre a configuração de {% data variables.product.prodname_dependency_review_action %}

{% data reusables.dependency-review.dependency-review-action-overview %}

As opções de configuração a seguir estão disponíveis.

| Opção | Obrigatório | Uso |
|------------------|-------------------------------|--------|
| `fail-on-severity` | Opcional | Define o limite do nível de severidade (`low`, `moderate`, `high` e `critical`).</br>A ação falhará nas solicitações de pull que apresentarem vulnerabilidades no nível de severidade especificado ou superior. |
{%- ifversion dependency-review-action-licenses %} | `allow-licenses` | Opcional | Contém uma lista de licenças permitidas. Veja os valores possíveis para esse parâmetro na página [Licenças](/rest/licenses) da documentação da API.</br>A ação falhará em solicitações de pull que introduzem dependências com licenças que não correspondem à lista.||{% endif %} {%- ifversion dependency-review-action-licenses %} | `deny-licenses` | Opcional | Contém uma lista de licenças permitidas. Veja os valores possíveis para esse parâmetro na página [Licenças](/rest/licenses) da documentação da API.</br>A ação falhará em solicitações de pull que introduzem dependências com licenças que correspondem à lista.|{% endif %}{% ifversion dependency-review-action-fail-on-scopes %} | `fail-on-scopes` | Opcional | Contém uma lista de cadeias de caracteres que representam os ambientes de compilação aos quais você deseja dar suporte (`development`, `runtime` e `unknown`). </br>A ação falhará em solicitações de pull que introduzem vulnerabilidades nos escopos que correspondem à lista.|{% endif %} | `allow-ghsas` | Opcional | Contém um lista de IDs do {% data variables.product.prodname_advisory_database %} que podem ser ignoradas durante a detecção. É possível encontrar os valores possíveis para este parâmetro no [{% data variables.product.prodname_advisory_database %}](https://github.com/advisories). | | `config-file` | Opcional | Especifica um caminho para um arquivo de configuração. O arquivo de configuração pode ser local no repositório ou estar em um repositório externo.| | `external-repo-token` | Opcional | Especifica um token para buscar o arquivo de configuração, se ele residir em um repositório externo privado. O token deve ter acesso de leitura ao repositório.|

{% ifversion dependency-review-action-licenses %} {% tip %}

**Dica:** as opções `allow-licenses` e `deny-licenses` são mutuamente exclusivas.

{% endtip %} {% endif %}

## Configuração de {% data variables.product.prodname_dependency_review_action %}

Há dois métodos de configuração de {% data variables.product.prodname_dependency_review_action %}: 
- Integrar as opções de configuração no arquivo de fluxo de trabalho. 
- Fazer referência a um arquivo de configuração no arquivo de fluxo de trabalho.

Observe que todos os exemplos usam um número de versão curto para a ação (`v3`) em vez de um número de versão semver (por exemplo, `v3.0.8`). Isso garante que você use a versão secundária mais recente da ação.
### Usar a configuração em linha para configurar a {% data variables.product.prodname_dependency_review_action %}

1. Adicione um fluxo de trabalho YAML à pasta `.github/workflows`.   
   
   {% ifversion ghes %}Para `runs-on`, o rótulo padrão é `self-hosted`. É possível substituir o rótulo padrão pelo de qualquer um dos executores.{% endif %}
  ```yaml{:copy}
  name: 'Dependency Review'
  on: [pull_request]

  permissions:
    contents: read

  jobs:
    dependency-review:
     {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
   ```
1. Especifique suas configurações.   

   Esse arquivo de exemplo de {% data variables.product.prodname_dependency_review_action %} ilustra como usar as opções de configuração disponíveis.
   ```yaml{:copy}
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
     contents: read

   jobs:
     dependency-review:
     {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
           with:
           # Possible values: "critical", "high", "moderate", "low" 
           fail-on-severity: critical
  {% ifversion dependency-review-action-licenses %}
           # You can only include one of these two options: `allow-licenses` and `deny-licences`
           # ([String]). Only allow these licenses (optional)
           # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
           allow-licenses: GPL-3.0, BSD-3-Clause, MIT
           # ([String]). Block the pull request on these licenses (optional)
           # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
           deny-licenses: LGPL-2.0, BSD-2-Clause
  {% endif %}
           # ([String]). Skip these {% data variables.product.prodname_advisory_database %} IDs during detection (optional)
           # Possible values: Any valid {% data variables.product.prodname_advisory_database %} ID from https://github.com/advisories  
           allow-ghsas: GHSA-abcd-1234-5679, GHSA-efgh-1234-5679
  {% ifversion dependency-review-action-fail-on-scopes %}
           # ([String]). Block pull requests that introduce vulnerabilities in the scopes that match this list (optional)
           # Possible values: "development", "runtime", "unknown"
           fail-on-scopes: development, runtime
  {% endif %}
   ```
### Usar um arquivo de configuração para configurar a {% data variables.product.prodname_dependency_review_action %}

1. Adicione um fluxo de trabalho YAML à pasta `.github/workflows` e use `config-file` para especificar que você está usando um arquivo de configuração.

   {% ifversion ghes %}Para `runs-on`, o rótulo padrão é `self-hosted`. É possível substituir o rótulo padrão pelo de qualquer um dos executores.{% endif %}
   ```yaml{:copy}
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
    contents: read

   jobs:
     dependency-review:
       {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
           with:
            # ([String]). Representing a path to a configuration file local to the repository or in an external repository.
            # Possible values: An absolute path to a local file or an external file.
            config-file: './.github/dependency-review-config.yml'   
            # Syntax for an external file: OWNER/REPOSITORY/FILENAME@BRANCH
            config-file: 'github/octorepo/dependency-review-config.yml@main'

            # ([Token]) Use if your configuration file resides in a private external repository.
            # Possible values: Any GitHub token with read access to the private external repository.  
            external-repo-token: 'ghp_123456789abcde'
   ```
1. Crie o arquivo de configuração no caminho especificado.   

   Esse arquivo de exemplo YAML ilustra como é possível usar as opções de configuração disponíveis. 
   ```yaml{:copy}
     # Possible values: "critical", "high", "moderate", "low" 
     fail-on-severity: critical
   {% ifversion dependency-review-action-licenses %}
     # You can only include one of these two options: `allow-licenses` and `deny-licences`
     # ([String]). Only allow these licenses (optional)
     # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
     allow-licenses: 
       - GPL-3.0
       - BSD-3-Clause
       - MIT
      # ([String]). Block the pull request on these licenses (optional)
      # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
     deny-licenses: 
       - LGPL-2.0
       - BSD-2-Clause
   {% endif %}
      # ([String]). Skip these {% data variables.product.prodname_advisory_database %} IDs during detection (optional)
      # Possible values: Any valid {% data variables.product.prodname_advisory_database %} ID from https://github.com/advisories  
     allow-ghsas: 
       - GHSA-abcd-1234-5679 
       - GHSA-efgh-1234-5679
   {% ifversion dependency-review-action-fail-on-scopes %}
      # ([String]). Block pull requests that introduce vulnerabilities in the scopes that match this list (optional)
      # Possible values: "development", "runtime", "unknown"
     fail-on-scopes: 
       - development 
       - runtime
  {% endif %}
  ```
Para saber mais detalhes sobre as opções de configuração, confira [`dependency-review-action`](https://github.com/actions/dependency-review-action#readme).
{% endif %}
