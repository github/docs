---
title: Configurando alertas do Dependabot
intro: 'Permita que o {% data variables.product.prodname_dependabot_alerts %} seja gerado quando uma nova dependência vulnerável {% ifversion GH-advisory-db-supports-malware %}ou malware {% endif %}for encontrado em um de seus repositórios.'
shortTitle: Configure Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 7844380c395b1ab0c43ba01fa151bf403c6a0349
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146455514'
---
## Sobre o {% data variables.product.prodname_dependabot_alerts %} para dependências vulneráveis{% ifversion GH-advisory-db-supports-malware %} e malware{% endif %}

{% data reusables.repositories.a-vulnerability-is %} 

O {% data variables.product.prodname_dependabot %} verifica o código quando um novo aviso é adicionado ao {% data variables.product.prodname_advisory_database %} ou ao grafo de dependência para alterações de repositório. Quando dependências vulneráveis{% ifversion GH-advisory-db-supports-malware %} ou malware{% endif %} são detectados, o {% data variables.product.prodname_dependabot_alerts %} é gerado. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)".

Para habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} para:
* Sua conta pessoal
* Seu repositório
* Sua organização

## Gerenciamento de {% data variables.product.prodname_dependabot_alerts %} para sua conta pessoal

{% ifversion fpt or ghec %}

Você pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} para todos os repositórios de propriedade da sua conta pessoal.

### Habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} em repositórios existentes

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. Em "Segurança e análise de código", à direita de {% data variables.product.prodname_dependabot_alerts %}, clique em **Desabilitar tudo** ou **Habilitar tudo**.
 ![Captura de tela dos recursos de "Configurar segurança e análise" com os botões "Habilitar tudo" ou "Desabilitar todos" enfatizados](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-all.png)
4. Opcionalmente, habilite {% data variables.product.prodname_dependabot_alerts %} por padrão nos novos repositórios que você criar.
  ![Captura de tela de "Habilitar alertas do Dependabot" com a caixa de seleção "Habilitar por padrão para novos repositórios privados" enfatizada](/assets/images/help/dependabot/dependabot-alerts-enable-by-default.png)
5. Clique em **Desabilitar {% data variables.product.prodname_dependabot_alerts %}** ou **Habilitar {% data variables.product.prodname_dependabot_alerts %}** para desabilitar ou habilitar {% data variables.product.prodname_dependabot_alerts %} para todos os seus repositórios.
  ![Captura de tela do botão "Habilitar alertas do Dependabot" com o botão "Habilitar alertas do Dependabot" enfatizado](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts.png)

Ao habilitar {% data variables.product.prodname_dependabot_alerts %} em repositórios existentes, você verá os resultados exibidos no GitHub em poucos minutos.

### Habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} em novos repositórios

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. Em "Segurança e análise de código", à direita de {% data variables.product.prodname_dependabot_alerts %}, habilite ou desabilite {% data variables.product.prodname_dependabot_alerts %} por padrão para novos repositórios que você criar.
  ![Captura de tela de "Configurar segurança e análise" com a caixa de seleção "Habilitar para todos os novos repositórios privados" enfatizada](/assets/images/help/dependabot/dependabot-alerts-enable-for-all-new-repositories.png)

{% else %} Os {% data variables.product.prodname_dependabot_alerts %} para seus repositórios podem ser habilitados ou desabilitados pelo proprietário da empresa. Para obter mais informações, confira "[Habilitando o Dependabot em sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

{% endif %}

## Gerenciamento de {% data variables.product.prodname_dependabot_alerts %} para seu repositório

{% ifversion fpt or ghec %} Você pode gerenciar {% data variables.product.prodname_dependabot_alerts %} em seu repositório público, privado ou interno.

Por padrão, notificamos as pessoas com permissões de administrador nos repositórios afetados sobre os novos {% data variables.product.prodname_dependabot_alerts %}. O {% data variables.product.product_name %} nunca divulga publicamente as dependências não seguras de nenhum repositório. Você também pode tornar o {% data variables.product.prodname_dependabot_alerts %} visível para pessoas ou repositórios de trabalho de equipes adicionais que você possui ou para os quais tem permissões de administrador.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

### Habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} em um repositório

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Em "Segurança e análise de código", à direita do {% data variables.product.prodname_dependabot_alerts %}, clique em **Habilitar** para habilitar alertas ou **Desabilitar** para desabilitar alertas. 
  ![Captura de tela da seção "Segurança e análise de código" com o botão para habilitar o {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png) {% endif %}{% ifversion ghes or ghae %}

Os {% data variables.product.prodname_dependabot_alerts %} para seu repositório podem ser habilitados ou desabilitados pelo proprietário da empresa. Para obter mais informações, confira "[Habilitando o Dependabot em sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
{% endif %}

## Gerenciamento de {% data variables.product.prodname_dependabot_alerts %} para sua organização
{% ifversion fpt or ghec %}Você pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} para todos os repositórios pertencentes à sua organização. Suas alterações afetam todos os repositórios.

### Habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} em todos os repositórios existentes

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
2. Em "Segurança e análise de código", à direita de {% data variables.product.prodname_dependabot_alerts %}, clique em **Desabilitar tudo** ou **Habilitar tudo**. 
   {% ifversion fpt or ghec %} ![ Captura de tela dos recursos de "Configurar segurança e análise" com o botão "Habilitar tudo" ou "Desabilitar tudo" enfatizado para alertas do Dependabot](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-fpt.png) {% endif %} {% ifversion ghae %} !["Habilitar tudo" ou "Desabilitar tudo" para os recursos de "Configurar segurança e análise"](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png) {% endif %} {% ifversion fpt or ghec %}
3. Opcionalmente, habilite {% data variables.product.prodname_dependabot_alerts %} por padrão nos novos repositórios da sua organização.
   {% ifversion fpt or ghec %} ![Captura de tela da opção "Habilitar por padrão" para novos repositórios](/assets/images/help/dependabot/dependabot-alerts-enable-by-default-organizations.png) {% endif %}
   
   {% endif %} {% ifversion fpt or ghec %}
4. Clique em **Desabilitar {% data variables.product.prodname_dependabot_alerts %}** ou **Habilitar {% data variables.product.prodname_dependabot_alerts %}** para desabilitar ou habilitar {% data variables.product.prodname_dependabot_alerts %} para todos os repositórios da sua organização.
   {% ifversion fpt or ghec %} ![ Captura de tela do modal "Habilitar alertas do Dependabot" com botão para desabilitar ou habilitar o recurso enfatizado](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts-organizations.png) {% endif %}{% endif %}{% endif %}{% ifversion ghes or ghae %} Os {% data variables.product.prodname_dependabot_alerts %} para sua organização podem ser habilitados ou desabilitados pelo proprietário da empresa. Para obter mais informações, confira "[Sobre o Dependabot para o GitHub Enterprise Server](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
   {% endif %}
