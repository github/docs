---
title: Configuração da revisão de dependência
intro: Você pode usar a análise de dependência para capturar vulnerabilidades antes que elas sejam adicionadas ao projeto.
shortTitle: Configure dependency review
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
ms.openlocfilehash: d032179f1d130509eb81e4629854dada7fd98b4c
ms.sourcegitcommit: b19e5a6ac3fdc0a72c341f9a09e7a24aac060be9
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/27/2022
ms.locfileid: '147424685'
---
{% data reusables.dependency-review.beta %}

## <a name="about-dependency-review"></a>Sobre a análise de dependência

{% data reusables.dependency-review.feature-overview %}   

Para obter mais informações, consulte "[Sobre a revisão de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)" ou "[Como revisar as alterações de dependência em uma solicitação pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)".

## <a name="about-configuring-dependency-review"></a>Sobre a configuração da revisão de dependência

{% ifversion fpt %} A revisão de dependência está disponível em todos os repositórios públicos de todos os produtos e não pode ser desabilitada. A revisão de dependências está disponível em repositórios privados pertencentes a organizações que usam o GitHub Enterprise Cloud e têm uma licença para [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security). Para obter mais informações, confira a [documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review).

{% elsif ghec %} A revisão de dependência está incluída no {% data variables.product.product_name %} em repositórios públicos. Para usar a revisão de dependências em repositórios privados pertencentes a organizações, você deve ter uma licença para [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) e ter o gráfico de dependências habilitado.

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
1. Se o {% data variables.product.prodname_GH_advanced_security %} ainda não estiver habilitado, clique em **Habilitar** ao lado do recurso.
   ![Captura de tela do recurso Segurança Avançada do GitHub com o botão "Habilitar" enfatizado](/assets/images/help/security/enable-ghas-private-repo.png)

{% elsif ghes %} A revisão de dependências está disponível quando o gráfico de dependências está habilitado para {% data variables.product.product_location %} e {% data variables.product.prodname_advanced_security %} está habilitado para a organização ou repositório. Para obter mais informações, confira "[Como habilitar o {% data variables.product.prodname_GH_advanced_security %} para sua empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise)".

### <a name="checking-if-the-dependency-graph-is-enabled"></a>Como verificar se o grafo de dependência está habilitado


{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Em "Configurar recursos de segurança e análise", verifique se o grafo de dependência está habilitado. 
1. Se o grafo de dependência estiver habilitado, clique em **Habilitar** ao lado de "{% data variables.product.prodname_GH_advanced_security %}" para habilitar {% data variables.product.prodname_advanced_security %}, incluindo a revisão de dependência. O botão habilitar estará desabilitado se sua empresa não tiver licenças disponíveis para {% data variables.product.prodname_advanced_security %}.{% ifversion ghes < 3.3 %} ![Captura de tela de "Recursos de segurança e análise de código"](/assets/images/enterprise/3.2/repository/code-security-and-analysis-enable-ghas-3.2.png){% endif %}{% ifversion ghes > 3.2 %} ![Captura de tela de "Recursos de segurança e análise de código"](/assets/images/enterprise/3.4/repository/code-security-and-analysis-enable-ghas-3.4.png){% endif %} {% endif %}

{% ifversion dependency-review-action-configuration %}
## <a name="configuring-the--data-variablesproductprodname_dependency_review_action-"></a>Configuração de {% data variables.product.prodname_dependency_review_action %}

{% data reusables.dependency-review.dependency-review-action-beta-note %} {% data reusables.dependency-review.dependency-review-action-overview %}

As opções de configuração a seguir estão disponíveis.

| Opção | Obrigatório | Uso |
|------------------|-------------------------------|--------|
| `fail-on-severity` | Opcional | Define o limite do nível de severidade (`low`, `moderate`, `high` e `critical`).</br>A ação falhará nas solicitações de pull que apresentarem vulnerabilidades no nível de severidade especificado ou superior. |
{%- ifversion dependency-review-action-licenses %} | `allow-licenses` | Opcional | Contém uma lista de licenças permitidas. Veja os valores possíveis para esse parâmetro na página [Licenças](/rest/licenses) da documentação da API.</br>A ação falhará em solicitações de pull que introduzem dependências com licenças que não correspondem à lista.||{% endif %} {%- ifversion dependency-review-action-licenses %} | `deny-licenses` | Opcional | Contém uma lista de licenças permitidas. Veja os valores possíveis para esse parâmetro na página [Licenças](/rest/licenses) da documentação da API.</br>A ação falhará nas solicitações de pull que apresentarem dependências com licenças que correspondam à lista.|{% endif %}

{% ifversion dependency-review-action-licenses %} {% tip %}

**Dica:** as opções `allow-licenses` e `deny-licenses` são mutuamente exclusivas.

{% endtip %} {% endif %}

Este arquivo de exemplo {% data variables.product.prodname_dependency_review_action %} ilustra como você pode usar essas opções de configuração.

```yaml{:copy}
name: 'Dependency Review'
on: [pull_request]

permissions:
  contents: read

jobs:
  dependency-review:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: {% data reusables.actions.action-checkout %}
      - name: Dependency Review
        uses: actions/dependency-review-action@v2
        with:
          # Possible values: "critical", "high", "moderate", "low" 
          fail-on-severity: critical
{% ifversion dependency-review-action-licenses %}
          # You can only can only include one of these two options: `allow-licenses` and `deny-licences`
          # ([String]). Only allow these licenses (optional)
          # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
          # allow-licenses: GPL-3.0, BSD-3-Clause, MIT

          # ([String]). Block the pull request on these licenses (optional)
          # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
          # deny-licenses: LGPL-2.0, BSD-2-Clause
{% endif %}
```

Para saber mais detalhes sobre as opções de configuração, confira [`dependency-review-action`](https://github.com/actions/dependency-review-action#readme).
{% endif %}
