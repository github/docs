---
title: Sobre a visão geral da segurança
intro: 'Você pode exibir, filtrar e classificar os alertas de segurança de repositórios pertencentes à sua organização ou equipe nas páginas de visão geral de Segurança.'
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
redirect_from:
  - /code-security/security-overview/exploring-security-alerts
versions:
  fpt: '*'
  ghae: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Dependabot
  - Dependencies
  - Organizations
  - Teams
shortTitle: About the security overview
ms.openlocfilehash: 0e634bafbb699d27588312b57084b557a3c82ca1
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163749'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## Sobre a visão geral da segurança

{% data reusables.security-overview.about-the-security-overview %} {% ifversion fpt %}Para obter mais informações, confira [a documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview).{% endif %}

{% ifversion ghec or ghes or ghae %} A visão geral de segurança mostra quais recursos de segurança estão habilitados nos repositórios e consolidam alertas para cada recurso. 

- As informações de risco e cobertura sobre os recursos e alertas do {% data variables.product.prodname_dependabot %} são mostradas para todos os repositórios. 
- As informações de risco e cobertura para recursos de recursos do {% data variables.product.prodname_GH_advanced_security %}, como {% data variables.product.prodname_code_scanning %} e {% data variables.product.prodname_secret_scanning %}, são mostradas apenas para empresas que usam o {% data variables.product.prodname_GH_advanced_security %}.

Para obter mais informações, confira "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)" e "[Sobre {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)".

## Sobre filtragem e ordenação de alertas

A visão geral de segurança oferece uma forma poderosa de entender a segurança de um grupo de repositórios. As exibições são interativas com filtros que permitem analisar os dados agregados e identificar fontes de alto risco ou com baixa cobertura de recursos. À medida que você aplica vários filtros para se concentrar em áreas mais específicas de interesse, os dados na exibição são alterados para refletir a seleção. Para obter mais informações, confira "[Como filtrar alertas na visão geral de segurança](/code-security/security-overview/filtering-alerts-in-the-security-overview)".

{% ifversion security-overview-alert-views %} Também há exibições dedicadas para cada tipo de alerta de segurança que você pode usar para limitar sua análise a um conjunto específico de alertas e, assim, restringir ainda mais os resultados com um intervalo de filtros específicos para cada exibição. Por exemplo, na exibição de alertas do {% data variables.product.prodname_secret_scanning %}, use o filtro `Secret type` para exibir somente os alertas do {% data variables.product.prodname_secret_scanning %} de um segredo específico, como um {% data variables.product.pat_generic %} do GitHub.
{% endif %}

{% note %}

**Observação:** a visão geral de segurança exibe alertas ativos criados por funcionalidades de segurança. Se não houver alertas na visão geral de segurança de um repositório, as vulnerabilidades de segurança não detectadas ou erros de código ainda poderão existir.

{% endnote %}

## Sobre a visão geral de segurança a nível da organização

{% data reusables.security-overview.beta-org-risk-coverage %}

Encontre a visão geral de segurança na guia **Segurança** de qualquer organização pertencente a uma empresa. Cada exibição mostra dados agregados nos quais você pode fazer drill down; à medida que você adiciona cada filtro, os dados são atualizados para refletir os repositórios ou alertas selecionados.

A equipe de segurança de aplicativos da sua empresa pode usar as diversas exibições para análises amplas e específicas do status de segurança da sua organização. {% ifversion security-overview-org-risk-coverage %}Por exemplo, a equipe pode usar a página "Cobertura de Segurança" para monitorar a adoção de recursos na organização ou por uma equipe específica à medida que você distribui o {% data variables.product.prodname_GH_advanced_security %} ou usar a página "Risco de Segurança" para identificar repositórios com mais de cinco alertas abertos do {% data variables.product.prodname_secret_scanning %}.{% else %}Por exemplo, eles podem usar a página de visão geral para monitorar a adoção de recursos na organização ou por uma equipe específica à medida que você distribui o {% data variables.product.prodname_GH_advanced_security %} para sua empresa ou para examinar todos os alertas de um tipo e nível de severidade específicos em todos os repositórios da organização.{% endif %}

Proprietários de organizações e gerentes de segurança das organizações têm acesso à visão geral de segurança no nível da organização. {% ifversion ghec or ghes > 3.6 or ghae > 3.6 %}Os membros da organização também podem acessar a visão geral de segurança no nível da organização para exibir os resultados de repositórios em que eles têm privilégios de administrador ou para os quais receberam acesso a alertas de segurança. Para obter mais informações sobre como gerenciar o acesso a alertas de segurança, confira "[Gerenciar configurações de segurança e análise em seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".{% endif %}

{% ifversion security-overview-org-risk-coverage %}
### Exibição do Risco de Segurança

Essa exibição mostra dados sobre os repositórios afetados por diferentes tipos de alerta de segurança. 

- Use as listas suspensas **Tipo** e **Equipes** para adicionar o tipo de repositório e os filtros de equipe.
- Clique em **Abrir alertas** ou **Repositórios afetados** para mostrar apenas repositórios com um tipo específico de alerta de segurança.

Além disso, quando você clica na caixa de pesquisa, uma lista do conjunto completo de filtros disponíveis é mostrada.

![Captura de tela da exibição Risco de Segurança de uma organização](/assets/images/help/security-overview/security-risk-view.png)

### Exibição de Cobertura de Segurança

Essa exibição mostra dados dos repositórios que estão usando recursos de segurança. 

- Use as listas suspensas **Tipo** e **Equipes** para adicionar o tipo de repositório e os filtros de equipe.
- Clique em **Alertas habilitados** e outros recursos listados no cabeçalho para ver apenas repositórios com esses recursos habilitados.
- Altere qualquer filtro `FEATURE:enabled` para `FEATURE:not-enabled` na caixa de pesquisa para ver repositórios que não habilitaram um recurso.
- Para qualquer repositório, clique nas reticências ( **...** ) e em **Configurações de Segurança** para habilitar recursos adicionais.

Além disso, quando você clica na caixa de pesquisa, uma lista do conjunto completo de filtros disponíveis é mostrada.

![Captura de tela da exibição Risco de Segurança de uma organização](/assets/images/help/security-overview/security-coverage-view.png)

{% else %}

### Noções básicas sobre a visão geral de segurança principal

![Captura de tela da visão gera de segurança de uma organização](/assets/images/help/security-overview/security-overview-org-legacy.png)

Para cada repositório na visão de segurança, você verá ícones para cada tipo de recurso de segurança e quantos alertas existem de cada tipo. Se um recurso de segurança não estiver habilitado para um repositório, o ícone desse recurso ficará esmaecido. Além disso, uma pontuação de risco é calculada para cada repositório com base na verificação de código, no Dependabot e nos alertas da verificação de segredos. Esta pontuação está em fase beta e deve ser usada com cuidado. O seu algoritmo e a abordagem estão sujeitos a mudanças.

![Ícones na visão geral de segurança](/assets/images/help/security-overview/security-overview-icons.png)

| ícone | Significado |
| -------- | -------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | {% data variables.product.prodname_code_scanning_capc %} alerts. Para obter mais informações, confira "[Sobre a {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)". |
| {% octicon "key" aria-label="Secret scanning alerts" %} | Alertas da {% data variables.product.prodname_secret_scanning_caps %}. Para obter mais informações, confira "[Sobre a {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)". |
| {% octicon "hubot" aria-label="Dependabot alerts" %} | {% data variables.product.prodname_dependabot_alerts %}. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)". |
| {% octicon "check" aria-label="Check" %} | O recurso de segurança está habilitado, mas não envia alertas neste repositório. |
| {% octicon "x" aria-label="x" %} | O recurso de segurança não é compatível com este repositório. |

{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## Sobre a visão geral de segurança do nível da empresa

Você pode encontrar a visão geral de segurança na guia **Segurança do Código** da sua empresa. Cada visão geral exibe informações de segurança agregadas e específicas ao repositório para sua empresa. Você pode exibir repositórios pertencentes à sua empresa que tenham alertas de segurança, exibir todos os alertas de segurança ou alertas específicos do recurso de segurança de toda a empresa.

Proprietários de empresas podem exibir alertas para organizações das quais são proprietários ou gerentes de segurança.{% ifversion ghec or ghes > 3.5 or ghae > 3.5 %} Proprietários de empresas podem ingressar em uma organização como um proprietário da organização para ver todos os seus alertas na visão geral de segurança no nível da empresa. Para obter mais informações, confira "[Como gerenciar sua função em uma organização pertencente à sua empresa](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)".{% endif %}

Proprietários de organização e gerentes de segurança das organizações de uma empresa têm acesso à visão geral de segurança no nível da empresa. Eles podem exibir repositórios e alertas das organizações às quais têm acesso total.
{% endif %}

{% ifversion ghes < 3.7 or ghae < 3.7 %}
## Sobre a visão geral de segurança da equipe

Encontre a visão geral de segurança na guia **Segurança** de qualquer equipe em uma organização pertencente a uma empresa.

No nível da equipe, a visão geral de segurança exibe informações de segurança específicas para repositórios para os quais a equipe tem privilégios de administrador. Para obter mais informações, confira "[Como gerenciar o acesso da equipe a um repositório da organização](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)".
{% endif %}

## Leitura adicional

- "[Como proteger seu repositório](/code-security/getting-started/securing-your-repository)"
- "[Protegendo a sua organização](/code-security/getting-started/securing-your-organization)"
- "[Introdução à adoção do GitHub Advanced Security em escala](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)" {% endif %}
