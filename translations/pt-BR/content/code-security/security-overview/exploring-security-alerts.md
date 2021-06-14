---
title: Explorar alertas de segurança
intro: 'Você pode visualizar, filtrar e classificar alertas de segurança para repositórios pertencentes à sua organização ou equipe em um só lugar.'
product: '{% data reusables.gated-features.security-center %}'
versions:
  free-pro-team: '*'
  github-ae: next
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
---

{% data reusables.security-center.beta %}

### Sobre a visão geral de segurança

Você pode usar a visão geral de segurança para uma visão de alto nível do status de segurança da sua organização ou para identificar repositórios problemáticos que exigem intervenção. A nível da organização, a visão geral de segurança exibe informações de segurança agregadas e específicas para repositórios pertencentes à sua organização. No nível da equipe, a visão geral de segurança exibe informações de segurança específicas para repositórios para os quais a equipe tem privilégios de administrador. Para obter mais informações, consulte "[Managing team access to an organization repository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)."

A visão geral de segurança indica se as funcionalidades de {% data variables.product.prodname_GH_advanced_security %} estão habilitadas para repositórios pertencentes à sua organização e consolida alertas das funcionalidades de {% data variables.product.prodname_advanced_security %}, incluindo alertas de {% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_dependabot_alerts %} e alertas de {% data variables.product.prodname_secret_scanning %}. Para obter mais informações, consulte "[Protegendo seu repositório](/code-security/getting-started/securing-your-repository)" e "[Protegendo sua organização](/code-security/getting-started/securing-your-organization)."

No resumo da segurança, é possível visualizar, ordenar e filtrar alertas para entender os riscos de segurança na sua organização e nos repositórios específicos. Você pode aplicar vários filtros para concentrar-se em áreas de interesse. Por exemplo, você pode identificar repositórios privados que têm um número elevado de {% data variables.product.prodname_dependabot_alerts %} ou repositórios que não têm alertas {% data variables.product.prodname_code_scanning %}.

![A visão geral de segurança de uma organização](/assets/images/help/organizations/security-overview.png)

Para cada repositório na visão de segurança, você verá ícones para cada tipo de recurso de {% data variables.product.prodname_advanced_security %} e quantos alertas existem de cada tipo. Se um recurso de {% data variables.product.prodname_advanced_security %} não estiver habilitado para um repositório, o ícone para esse recurso será cinza.

![Ícones na visão geral de segurança](/assets/images/help/organizations/security-overview-icons.png)

| Ícone                                                         | Significado                                                                                                                                                                                                                           |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | Alertas de {% data variables.product.prodname_code_scanning_capc %}. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)         |
| {% octicon "key" aria-label="Secret scanning alerts" %}       | Alertas de {% data variables.product.prodname_secret_scanning_caps %}. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning) |
| {% octicon "hubot" aria-label="Dependabot alerts" %}          | {% data variables.product.prodname_dependabot_alerts %}. Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"       |
| {% octicon "check" aria-label="Check" %}                      | O recurso de {% data variables.product.prodname_advanced_security %} está habilitado, mas não cria alertas neste repositório.                                                                                                       |
| {% octicon "x" aria-label="x" %}                              | O recurso de {% data variables.product.prodname_advanced_security %} não é compatível com este repositório.                                                                                                                         |

Por padrão, os repositórios arquivados são excluídos da visão geral de segurança de uma organização. É possível aplicar filtros para visualizar repositórios arquivados na visão geral de segurança. Para obter mais informações, consulte "[Filtrar a lista de alertas](#filtering-the-list-of-alerts)".

A visão geral de segurança exibe alertas ativos criados por funcionalidades de {% data variables.product.prodname_GH_advanced_security %}. Se não houver alertas na visão geral de segurança de um repositório, as vulnerabilidades de segurança não detectadas ou erros de código ainda poderão existir.

### Visualizar a visão geral de segurança de uma organização

Os proprietários da organização podem ver a visão geral de segurança para uma organização.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. Para visualizar informações agregadas sobre tipos de alertas, clique em **Mostrar mais**. ![Botão mostrar mais](/assets/images/help/organizations/security-overview-show-more-button.png)
{% data reusables.organizations.filter-security-overview %}

### Visualizar a visão geral de segurança de uma equipe

Os integrantes de uma equipe podem visualizar a visão geral de segurança dos repositórios para os quais a equipe tem privilégios de administrador.

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-security-overview %}
{% data reusables.organizations.filter-security-overview %}

### Filtrar a lista de alertas

#### Filtrar por nível de risco para repositórios

O nível de risco para um repositório é determinado pelo número e gravidade de alertas de funcionalidades do {% data variables.product.prodname_advanced_security %}. Se uma ou mais funcionalidades de {% data variables.product.prodname_advanced_security %} não estiverem habilitadas para um repositório, o repositório terá um nível de risco desconhecido. Se um repositório não tiver riscos detectados por funcionalidades de {% data variables.product.prodname_advanced_security %}, o repositório terá um nível claro de risco.

| Qualifier      | Descrição                                                         |
| -------------- | ----------------------------------------------------------------- |
| `risk:high`    | Exibe repositórios que estão em alto risco.                       |
| `risk:medium`  | Exibe repositórios que estão em risco médio.                      |
| `risk:low`     | Exibe repositórios que estão em risco baixo.                      |
| `risk:unknown` | Exibir repositórios que estão com um nível de risco desconhecido. |
| `risk:clear`   | Exibe repositórios que não tem um nível de risco identificado.    |

#### Filtrar por número de alertas

| Qualifier                 | Descrição                                                                                                                                                             |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>code-scanning-alerts:<em>n</em></code> | Exibe repositórios que têm *n* alertas de {% data variables.product.prodname_code_scanning %}. Este qualificador pode usar os operadores &gt e &lt de comparação.   |
| <code>secret-scanning-alerts:<em>n</em></code> | Exibe repositórios que têm *n* alertas de {% data variables.product.prodname_secret_scanning %}. Este qualificador pode usar os operadores &gt e &lt de comparação. |
| <code>dependabot-alerts:<em>n</em></code> | Exibir repositórios que têm *n* {% data variables.product.prodname_dependabot_alerts %}. Este qualificador pode usar os operadores &gt e &lt de comparação.         |

#### Filtrar por se as funcionalidades de {% data variables.product.prodname_advanced_security %} estão habilitadas

| Qualifier                       | Descrição                                                                                            |
| ------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `enabled:code-scanning`         | Exibe repositórios com {% data variables.product.prodname_code_scanning %} habilitado.             |
| `not-enabled:code-scanning`     | Exibe repositórios que não têm {% data variables.product.prodname_code_scanning %} habilitado.     |
| `enabled:secret-scanning`       | Exibe repositórios com {% data variables.product.prodname_secret_scanning %} habilitado.           |
| `not-enabled:secret-scanning`   | Exibe repositórios com {% data variables.product.prodname_secret_scanning %} habilitado.           |
| `enabled:dependabot-alerts`     | Exibe repositórios com {% data variables.product.prodname_dependabot_alerts %} habilitado.         |
| `not-enabled:dependabot-alerts` | Exibe repositórios que não têm {% data variables.product.prodname_dependabot_alerts %} habilitado. |

#### Filtrar por tipo de repositório

| Qualifier       | Descrição                       |
| --------------- | ------------------------------- |
| `is:public`     | Exibir repositórios públicos.   |
| `is:internal`   | Exibir repositórios internos.   |
| `is:private`    | Exibir repositórios privados.   |
| `archived:true` | Exibir repositórios arquivados. |

#### Filtrar por equipe

| Qualifier                 | Descrição                                                                         |
| ------------------------- | --------------------------------------------------------------------------------- |
| <code>team:<em>TEAM-NAME</em></code> | Exibe os repositórios para os quais *TEAM-NAME* tem privilégios de administrador. |

#### Filtrar por tópico

| Qualifier                 | Descrição                                                    |
| ------------------------- | ------------------------------------------------------------ |
| <code>topic:<em>TOPIC-NAME</em></code> | Exibe repositórios que são classificados com o *TOPIC-NAME*. |

#### Classificar a lista de alertas

| Qualifier                     | Descrição                                                                                                                                |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:risk`                   | Classifica os repositórios na visão geral de segurança por risco.                                                                        |
| `sort:repos`                  | Classifica alfabeticamente pelo nome os repositórios na sua visão geral de segurança.                                                    |
| `sort:code-scanning-alerts`   | Classifica os repositórios na visão geral de segurança por número de alertas de {% data variables.product.prodname_code_scanning %}.   |
| `sort:secret-scanning-alerts` | Classifica os repositórios na visão geral de segurança por número de alertas de {% data variables.product.prodname_secret_scanning %}. |
| `sort:dependabot-alerts`      | Classifica os repositórios na sua visão geral de segurança por número de {% data variables.product.prodname_dependabot_alerts %}.      |
