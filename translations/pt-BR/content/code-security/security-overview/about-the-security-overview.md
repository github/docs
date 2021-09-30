---
title: Sobre a visão geral de segurança
intro: 'You can view, filter, and sort security alerts for repositories owned by your organization or team in one place: the Security Overview page.'
product: '{% data reusables.gated-features.security-center %}'
redirect_from:
  - /code-security/security-overview/exploring-security-alerts
versions:
  fpt: '*'
  ghes: '>3.1'
  ghae: next
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: About security overview
---

{% data reusables.security-center.beta %}

## Sobre a visão geral de segurança

Você pode usar a visão geral de segurança para uma visão de alto nível do status de segurança da sua organização ou para identificar repositórios problemáticos que exigem intervenção. A nível da organização, a visão geral de segurança exibe informações de segurança agregadas e específicas para repositórios pertencentes à sua organização. No nível da equipe, a visão geral de segurança exibe informações de segurança específicas para repositórios para os quais a equipe tem privilégios de administrador. Para obter mais informações, consulte "[Managing team access to an organization repository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)."

The security overview indicates whether {% ifversion fpt or ghes > 3.1 %}security{% endif %}{% ifversion ghae-next %}{% data variables.product.prodname_GH_advanced_security %}{% endif %} features are enabled for repositories owned by your organization and consolidates alerts for each feature.{% ifversion fpt or ghes > 3.1 %} Security features include {% data variables.product.prodname_GH_advanced_security %} features, such as {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_secret_scanning %}, as well as {% data variables.product.prodname_dependabot_alerts %}.{% endif %} For more information about {% data variables.product.prodname_GH_advanced_security %} features, see "[About {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)."{% ifversion fpt or ghes > 3.1 %} For more information about {% data variables.product.prodname_dependabot_alerts %}, see "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)."{% endif %}

For more information about securing your code at the repository and organization levels, see "[Securing your repository](/code-security/getting-started/securing-your-repository)" and "[Securing your organization](/code-security/getting-started/securing-your-organization)."

No resumo da segurança, é possível visualizar, ordenar e filtrar alertas para entender os riscos de segurança na sua organização e nos repositórios específicos. Você pode aplicar vários filtros para concentrar-se em áreas de interesse. Por exemplo, você pode identificar repositórios privados que têm um número elevado de {% data variables.product.prodname_dependabot_alerts %} ou repositórios que não têm alertas {% data variables.product.prodname_code_scanning %}.

![A visão geral de segurança de uma organização](/assets/images/help/organizations/security-overview.png)

For each repository in the security overview, you will see icons for each type of security feature and how many alerts there are of each type. If a security feature is not enabled for a repository, the icon for that feature will be grayed out.

![Ícones na visão geral de segurança](/assets/images/help/organizations/security-overview-icons.png)

| Ícone                                                         | Significado                                                                                                                                                                                                                           |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | Alertas de {% data variables.product.prodname_code_scanning_capc %}. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)         |
| {% octicon "key" aria-label="Secret scanning alerts" %}       | Alertas de {% data variables.product.prodname_secret_scanning_caps %}. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning) |
| {% octicon "hubot" aria-label="Dependabot alerts" %}          | {% data variables.product.prodname_dependabot_alerts %}. Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"       |
| {% octicon "check" aria-label="Check" %}                      | The security feature is enabled, but does not raise alerts in this repository.                                                                                                                                                        |
| {% octicon "x" aria-label="x" %}                              | The security feature is not supported in this repository.                                                                                                                                                                             |

Por padrão, os repositórios arquivados são excluídos da visão geral de segurança de uma organização. É possível aplicar filtros para visualizar repositórios arquivados na visão geral de segurança. Para obter mais informações, consulte "[Filtrar a lista de alertas](#filtering-the-list-of-alerts)".

The security overview displays active alerts raised by security features. Se não houver alertas na visão geral de segurança de um repositório, as vulnerabilidades de segurança não detectadas ou erros de código ainda poderão existir.

## Visualizar a visão geral de segurança de uma organização

Os proprietários da organização podem ver a visão geral de segurança para uma organização.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. Para visualizar informações agregadas sobre tipos de alertas, clique em **Mostrar mais**. ![Botão mostrar mais](/assets/images/help/organizations/security-overview-show-more-button.png)
{% data reusables.organizations.filter-security-overview %}

## Visualizar a visão geral de segurança de uma equipe

Os integrantes de uma equipe podem visualizar a visão geral de segurança dos repositórios para os quais a equipe tem privilégios de administrador.

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-security-overview %}
{% data reusables.organizations.filter-security-overview %}

## Filtrar a lista de alertas

### Filtrar por nível de risco para repositórios

The level of risk for a repository is determined by the number and severity of alerts from security features. If one or more security features are not enabled for a repository, the repository will have an unknown level of risk. If a repository has no risks that are detected by security features, the repository will have a clear level of risk.

| Qualifier      | Descrição                                                         |
| -------------- | ----------------------------------------------------------------- |
| `risk:high`    | Exibe repositórios que estão em alto risco.                       |
| `risk:medium`  | Exibe repositórios que estão em risco médio.                      |
| `risk:low`     | Exibe repositórios que estão em risco baixo.                      |
| `risk:unknown` | Exibir repositórios que estão com um nível de risco desconhecido. |
| `risk:clear`   | Exibe repositórios que não tem um nível de risco identificado.    |

### Filtrar por número de alertas

| Qualifier                 | Descrição                                                                                                                                                             |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>code-scanning-alerts:<em>n</em></code> | Exibe repositórios que têm *n* alertas de {% data variables.product.prodname_code_scanning %}. Este qualificador pode usar os operadores &gt e &lt de comparação.   |
| <code>secret-scanning-alerts:<em>n</em></code> | Exibe repositórios que têm *n* alertas de {% data variables.product.prodname_secret_scanning %}. Este qualificador pode usar os operadores &gt e &lt de comparação. |
| <code>dependabot-alerts:<em>n</em></code> | Exibir repositórios que têm *n* {% data variables.product.prodname_dependabot_alerts %}. Este qualificador pode usar os operadores &gt e &lt de comparação.         |

### Filter by whether security features are enabled

| Qualifier                       | Descrição                                                                                            |
| ------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `enabled:code-scanning`         | Exibe repositórios com {% data variables.product.prodname_code_scanning %} habilitado.             |
| `not-enabled:code-scanning`     | Exibe repositórios que não têm {% data variables.product.prodname_code_scanning %} habilitado.     |
| `enabled:secret-scanning`       | Exibe repositórios com {% data variables.product.prodname_secret_scanning %} habilitado.           |
| `not-enabled:secret-scanning`   | Exibe repositórios com {% data variables.product.prodname_secret_scanning %} habilitado.           |
| `enabled:dependabot-alerts`     | Exibe repositórios com {% data variables.product.prodname_dependabot_alerts %} habilitado.         |
| `not-enabled:dependabot-alerts` | Exibe repositórios que não têm {% data variables.product.prodname_dependabot_alerts %} habilitado. |

### Filtrar por tipo de repositório

| Qualifier | Description | | -------- | -------- |{% ifversion fpt or ghes > 3.1 %} | `is:public` | Display public repositories. |{% endif %} | `is:internal` | Display internal repositories. | | `is:private` | Display private repositories. | | `archived:true` | Display archived repositories. |

### Filtrar por equipe

| Qualifier                 | Descrição                                                                         |
| ------------------------- | --------------------------------------------------------------------------------- |
| <code>team:<em>TEAM-NAME</em></code> | Exibe os repositórios para os quais *TEAM-NAME* tem privilégios de administrador. |

### Filtrar por tópico

| Qualifier                 | Descrição                                                    |
| ------------------------- | ------------------------------------------------------------ |
| <code>topic:<em>TOPIC-NAME</em></code> | Exibe repositórios que são classificados com o *TOPIC-NAME*. |

### Classificar a lista de alertas

| Qualifier                     | Descrição                                                                                                                                |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:risk`                   | Classifica os repositórios na visão geral de segurança por risco.                                                                        |
| `sort:repos`                  | Classifica alfabeticamente pelo nome os repositórios na sua visão geral de segurança.                                                    |
| `sort:code-scanning-alerts`   | Classifica os repositórios na visão geral de segurança por número de alertas de {% data variables.product.prodname_code_scanning %}.   |
| `sort:secret-scanning-alerts` | Classifica os repositórios na visão geral de segurança por número de alertas de {% data variables.product.prodname_secret_scanning %}. |
| `sort:dependabot-alerts`      | Classifica os repositórios na sua visão geral de segurança por número de {% data variables.product.prodname_dependabot_alerts %}.      |
