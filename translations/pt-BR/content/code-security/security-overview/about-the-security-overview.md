---
title: Sobre a visão geral da segurança
intro: 'É possível exibir, filtrar e classificar os alertas de segurança de repositórios pertencentes à sua organização ou equipe em um só lugar: a página de Visão Geral de Segurança.'
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
shortTitle: About security overview
ms.openlocfilehash: ac069277564d7249d36b54f218c78f33eefc3c47
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147525710'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## Sobre a visão geral da segurança

{% ifversion ghes or ghec or ghae %}Você pode{% elsif fpt %}As organizações que usam o {% data variables.product.prodname_ghe_cloud %} podem{% endif %} usar a visão geral de segurança para ter uma exibição de alto nível do status da segurança da {% ifversion ghes or ghec or ghae %}sua {% elsif fpt %}respectiva{% endif %} organização ou para identificar repositórios problemáticos que exigem intervenção. {% ifversion ghes or ghec or ghae %}Você pode {% elsif fpt %}Essas organizações podem{% endif %} ver as informações de segurança específicas do repositório ou de agregação na visão geral de segurança. {% ifversion ghes or ghec or ghae %}Você também pode {% elsif fpt %}As organizações que usam o {% data variables.product.prodname_ghe_cloud %} também podem{% endif %} usar a visão geral de segurança para ver os recursos de segurança habilitados para {% ifversion ghes or ghec or ghae %}seus {% elsif fpt %}os respectivos {% endif %} repositórios e para configurar todos os recursos de segurança disponíveis que não estão em uso no momento. {% ifversion fpt %}Para obter mais informações, confira [a documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview).{% endif %}

{% ifversion ghec or ghes or ghae %} A visão geral de segurança indica se os recursos de {% ifversion fpt or ghes or ghec %}segurança{% endif %}{% ifversion ghae %} do {% data variables.product.prodname_GH_advanced_security %}{% endif %} estão habilitados para os repositórios pertencentes à organização e consolida os alertas de cada recurso.{% ifversion fpt or ghes or ghec %} Os recursos de segurança incluem recursos do {% data variables.product.prodname_GH_advanced_security %} como {% data variables.product.prodname_code_scanning %} e {% data variables.product.prodname_secret_scanning %}, bem como {% data variables.product.prodname_dependabot_alerts %}.{% endif %} Para obter mais informações sobre as recursos do {% data variables.product.prodname_GH_advanced_security %}, confira "[Sobre o {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)".{% ifversion fpt or ghes or ghec %} Para obter mais informações sobre {% data variables.product.prodname_dependabot_alerts %}, confira "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)".{% endif %}

Para obter mais informações sobre como proteger seu código nos níveis do repositório e da organização, confira "[Como proteger seu repositório](/code-security/getting-started/securing-your-repository)" e "[Como proteger sua organização](/code-security/getting-started/securing-your-organization)".

A equipe de segurança de aplicativos da sua empresa pode usar a visão geral de segurança para análises amplas e específicas do status de segurança da sua organização. Por exemplo, eles podem utilizar a página da visão geral de síntese para monitorar a adoção de funcionalidades pela sua organização ou por uma equipe específica enquanto você implementa{% data variables.product.prodname_GH_advanced_security %} na sua empresa ou revisar todos os alertas de um tipo e gravidade específicos em todos os repositórios da sua organização.

### Sobre filtragem e ordenação de alertas

No resumo da segurança, é possível visualizar, ordenar e filtrar alertas para entender os riscos de segurança na sua organização e nos repositórios específicos. O resumo de segurança é altamente interativo e permite que você investigue categorias específicas de informações, baseado em qualificações, como nível de risco de alerta, tipo de alerta e habilitação de funcionamento. Você também pode aplicar vários filtros para focar em áreas de interesse mais estreitas. Por exemplo, você pode identificar repositórios privados que têm um número elevado de {% data variables.product.prodname_dependabot_alerts %} ou repositórios que não têm alertas {% data variables.product.prodname_code_scanning %}. Para obter mais informações, confira "[Como filtrar alertas na visão geral de segurança](/code-security/security-overview/filtering-alerts-in-the-security-overview)".

{% ifversion security-overview-views %}

Na visão geral de segurança, há exibições dedicadas para cada tipo de alerta de segurança, como Dependabot, verificação de código e alertas de verificação de segredo. Você pode usar essas visualizações para limitar sua análise para um conjunto específico de alertas e estreitar os resultados com uma variedade de filtros específicos para cada visualização. Por exemplo, na exibição de alertas da verificação de segredos, use o filtro `Secret type` para ver somente os alertas da verificação de segredos de um segredo específico, como um token de acesso pessoal do GitHub. No nível do repositório, é possível usar a visão geral de segurança para avaliar o status de segurança atual do repositório específico e configurar todos as funcionalidades adicionais de segurança que ainda não estão sendo usadas no repositório.

{% endif %}

![A visão geral de segurança de uma organização](/assets/images/help/organizations/security-overview.png)

Para cada repositório na visão de segurança, você verá ícones para cada tipo de recurso de segurança e quantos alertas existem de cada tipo. Se um recurso de segurança não estiver habilitado para um repositório, o ícone desse recurso ficará esmaecido. Além disso, uma pontuação de risco é calculada para cada repositório com base na verificação de código, no Dependabot e nos alertas da verificação de segredos. Esta pontuação está em fase beta e deve ser usada com cuidado. O seu algoritmo e a abordagem estão sujeitos a mudanças.

![Ícones na visão geral de segurança](/assets/images/help/organizations/security-overview-icons.png)

| ícone | Significado |
| -------- | -------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | {% data variables.product.prodname_code_scanning_capc %} alerts. Para obter mais informações, confira "[Sobre a {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)". |
| {% octicon "key" aria-label="Secret scanning alerts" %} | Alertas da {% data variables.product.prodname_secret_scanning_caps %}. Para obter mais informações, confira "[Sobre a {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)". |
| {% octicon "hubot" aria-label="Dependabot alerts" %} | {% data variables.product.prodname_dependabot_alerts %}. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)". |
| {% octicon "check" aria-label="Check" %} | O recurso de segurança está habilitado, mas não envia alertas neste repositório. |
| {% octicon "x" aria-label="x" %} | O recurso de segurança não é compatível com este repositório. |

A visão geral de segurança exibe alertas ativos criados por funcionalidades de segurança. Se não houver alertas na visão geral de segurança de um repositório, as vulnerabilidades de segurança não detectadas ou erros de código ainda poderão existir.

### Sobre a visão geral de segurança a nível da organização

A nível da organização, a visão geral de segurança exibe informações de segurança agregadas e específicas para repositórios pertencentes à sua organização. Você pode filtrar informações por funcionalidades de segurança a nível da organização.

{% ifversion ghec or ghes > 3.4 or ghae-issue-6199 %}
### Sobre a visão geral de segurança do nível da empresa
A nível da empresa, a visão geral de segurança exibe informações de segurança agregadas e específicas ao repositório para sua empresa. Você pode exibir repositórios pertencentes à sua empresa que tenham alertas de segurança, exibir todos os alertas de segurança ou alertas específicos do recurso de segurança de toda a empresa.

Os proprietários da organização e os gerentes de segurança das organizações da sua empresa também têm acesso limitado à visão geral de segurança no nível da empresa. Eles só podem ver repositórios e alertas das organizações aos quais têm acesso total.

{% elsif fpt %}
### Sobre a visão geral de segurança do nível da empresa
A nível da empresa, a visão geral de segurança exibe informações agregadas e específicas ao repositório de uma empresa. Para obter mais informações, confira "[Sobre a visão geral de segurança em nível empresarial](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview#about-the-enterprise-level-security-overview)" na documentação do {% data variables.product.prodname_ghe_cloud %}.
{% endif %}

### Sobre a visão geral de segurança da equipe
No nível da equipe, a visão geral de segurança exibe informações de segurança específicas para repositórios para os quais a equipe tem privilégios de administrador. Para obter mais informações, confira "[Como gerenciar o acesso da equipe a um repositório da organização](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)".
{% endif %}
