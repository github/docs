---
title: Sobre a Segurança Avançada do GitHub
intro: 'O {% data variables.product.prodname_dotcom %} disponibiliza funcionalidades extras de segurança aos clientes sob uma licença do {% data variables.product.prodname_advanced_security %}.{% ifversion fpt or ghec %} Esses recursos também estão habilitados para repositórios públicos no {% data variables.product.prodname_dotcom_the_website %}.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Security
redirect_from:
  - /github/getting-started-with-github/about-github-advanced-security
  - /github/getting-started-with-github/learning-about-github/about-github-advanced-security
shortTitle: GitHub Advanced Security
ms.openlocfilehash: 49a58dd78c906982c8c8b9702d55cd11662cb12e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159178'
---
## Sobre o {% data variables.product.prodname_GH_advanced_security %}

{% data variables.product.prodname_dotcom %} tem muitas funcionalidades que ajudam você a melhorar e manter a qualidade do seu código. Alguns deles estão incluídos em todos os planos{% ifversion not ghae %}, como o grafo de dependência e os {% data variables.product.prodname_dependabot_alerts %}{% endif %}. Outras funcionalidades de segurança exigem que o {% data variables.product.prodname_GH_advanced_security %}{% ifversion fpt or ghec %} seja executado em repositórios, além de repositórios públicos no {% data variables.product.prodname_dotcom_the_website %}{% endif %}.

{% ifversion ghes or ghec %}Para obter informações sobre como comprar uma licença do {% data variables.product.prodname_GH_advanced_security %}, confira "[Sobre a cobrança do {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)".{% elsif ghae %}Não há cobrança do {% data variables.product.prodname_GH_advanced_security %} no {% data variables.product.prodname_ghe_managed %} durante a versão beta.{% elsif fpt %}Para comprar uma licença do {% data variables.product.prodname_GH_advanced_security %}, você precisa usar o {% data variables.product.prodname_enterprise %}. Para obter informações sobre como fazer a atualização para o {% data variables.product.prodname_enterprise %} com o {% data variables.product.prodname_GH_advanced_security %}, confira "[Produtos do GitHub](/get-started/learning-about-github/githubs-products)" e "[Sobre a cobrança do {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)".{% endif %}

## Sobre as funcionalidades de {% data variables.product.prodname_advanced_security %}

Uma licença de {% data variables.product.prodname_GH_advanced_security %} fornece as funcionalidades adicionais a seguir:

- **{% data variables.product.prodname_code_scanning_capc %}** – Pesquise possíveis vulnerabilidades de segurança e erros de codificação no seu código. Para obter mais informações, confira "[Sobre a {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)".

- **{% data variables.product.prodname_secret_scanning_caps %}** – Detecte segredos, por exemplo, chaves e tokens, cujo check-in foi feito no repositório.{% ifversion secret-scanning-push-protection %} Se a proteção de push estiver habilitada, também detectará segredos quando eles forem enviados por push ao repositório. Para obter mais informações, confira "[Sobre a {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning)" e "[Como proteger pushes com a {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".{% else %} Para obter mais informações, confira "[Sobre a {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning)".{% endif %}

- **Revisão de dependência** – Mostre o impacto total das alterações nas dependências e veja os detalhes de todas as versões vulneráveis antes de mesclar uma solicitação de pull. Para obter mais informações, confira "[Sobre a revisão de dependência](/code-security/supply-chain-security/about-dependency-review)".

{% ifversion ghes < 3.7 or ghae %}
<!-- Ref: ghae > 3.6 remove GHAE versioning from this section when the `security-overview-displayed-alerts` flag is toggled for GHAE -->
- **Visão geral de segurança** – revise a configuração de segurança e os alertas de uma organização e identifique os repositórios com maior risco. Para obter mais informações, confira "[Sobre visões gerais de segurança](/code-security/security-overview/about-the-security-overview)".
{% endif %}

{% ifversion fpt or ghec %} A tabela abaixo resume a disponibilidade dos recursos do {% data variables.product.prodname_GH_advanced_security %} para repositórios públicos e privados.

|                   | Repositório público           | Repositório privado sem {% data variables.product.prodname_advanced_security %} | Repositório privado com {% data variables.product.prodname_advanced_security %} |
| :-----------------: | :---------------------------: | :--------------------------------------------: | :-----------------------------------------: |
| Varredura de código     | Sim                         | Não                                           | Sim                                        |
| Verificação de segredo   | Sim **(somente funcionalidade limitada)** | No                                           | Sim                                       |
| Análise de Dependência | Sim                         | Não                                           | Sim                                       |
{% endif %}

Para obter informações sobre os recursos do {% data variables.product.prodname_advanced_security %} em desenvolvimento, confira "[Roteiro público do {% data variables.product.prodname_dotcom %}](https://github.com/github/roadmap)". Para ter uma visão geral de todos os recursos de segurança, confira "[Recursos de segurança do {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

As funcionalidades de {% ifversion fpt or ghec %} {% data variables.product.prodname_GH_advanced_security %} estão habilitadas para todos os repositórios públicos no {% data variables.product.prodname_dotcom_the_website %}. As organizações que usam {% data variables.product.prodname_ghe_cloud %} com {% data variables.product.prodname_advanced_security %} também podem habilitar essas funcionalidades para repositórios internos e privados. {% ifversion fpt %}Para obter mais informações, confira a [documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security#enabling-advanced-security-features).
{% endif %}

{% ifversion ghes or ghec or ghae %}
## Implantando o GitHub Advanced Security na sua empresa

Saiba as informações necessárias para planejar sua implantação do {% data variables.product.prodname_GH_advanced_security %} de alto nível e revise as etapas de lançamento recomendadas em "[Adoção do {% data variables.product.prodname_GH_advanced_security %} em escala](/code-security/adopting-github-advanced-security-at-scale)".

{% endif %}

{% ifversion not fpt %}
## Habilitando funcionalidades de {% data variables.product.prodname_advanced_security %}

{%- ifversion ghes %} O administrador do site precisa habilitar o {% data variables.product.prodname_advanced_security %} em {% data variables.location.product_location %} para que você possa usar esses recursos. Para obter mais informações, confira "[Como configurar recursos do Advanced Security](/admin/configuration/configuring-advanced-security-features)".

Após configurar o sistema, você poderá habilitar e desabilitar esses recursos no nível da organização ou repositório.

{%- elsif ghec %} Para repositórios públicos, esses recursos ficam permanentemente ativados e só poderão ser desabilitados se você alterar a visibilidade do projeto para que o código não seja mais público.

Para outros repositórios, uma vez que você tenha uma licença da conta corporativa, é possível habilitar e desabilitar essas funcionalidades no nível da organização ou repositório.

{%- elsif ghae %} Você pode habilitar e desabilitar esses recursos no nível da organização ou do repositório.
{%- endif %} Para obter mais informações, confira "[Como gerenciar as configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" e "[Como gerenciar as configurações de segurança e análise para seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".

{% ifversion ghec or ghes %} Se você tiver uma conta corporativa, o uso de licença para toda a empresa será mostrado na página de licença da empresa. Para obter mais informações, confira "[Como ver seu uso do {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage)".
{% endif %}

{% endif %}

{% ifversion fpt or ghec %}
## Sobre os fluxos de trabalho iniciais para {% data variables.product.prodname_advanced_security %}

{% data reusables.advanced-security.starter-workflows-beta %} {% data reusables.advanced-security.starter-workflow-overview %}

Para obter mais informações sobre fluxos de trabalho iniciais, confira "[Como configurar a {% data variables.product.prodname_code_scanning %} usando fluxos de trabalho iniciais](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows)" e "[Como usar fluxos de trabalho iniciais](/actions/using-workflows/using-starter-workflows)".

{% endif %}

{% ifversion ghec or ghes or ghae %}
## Leitura adicional

- "[Como impor políticas para o {% data variables.product.prodname_advanced_security %} na sua conta corporativa](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)"

{% endif %} {% endif %}
