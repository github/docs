---
title: Configurando as atualizações de segurança do Dependabot
intro: 'Você pode usar {% data variables.product.prodname_dependabot_security_updates %} ou pull requests manuais para atualizar facilmente dependências vulneráveis.'
shortTitle: Configure security updates
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-updates
  - /github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/configuring-dependabot-security-updates
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 49db730fb0830dc59a5cead63068eb1fb5add14d
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180766'
---
<!--Marketing-LINK: From home page "Learn more about Dependabot".-->

{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Sobre a configuração de {% data variables.product.prodname_dependabot_security_updates %}

Você pode habilitar as {% data variables.product.prodname_dependabot_security_updates %} no nível do repositório ou para todos os repositórios que pertencem à sua conta pessoal ou à organização. É possível habilitar o {% data variables.product.prodname_dependabot_security_updates %} para qualquer repositório que use {% data variables.product.prodname_dependabot_alerts %} e o gráfico de dependências. Para obter mais informações, confira "[Sobre as {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".

Você pode desativar as {% data variables.product.prodname_dependabot_security_updates %} em um repositório individual ou para todos os repositórios que pertencem à sua conta pessoal ou organização.

{% ifversion fpt or ghec %}{% data reusables.dependabot.dependabot-tos %}{% endif %}

## Repositórios com suporte

O {% data variables.product.prodname_dotcom %} habilita automaticamente as {% data variables.product.prodname_dependabot_security_updates %} para repositórios recém-criados quando na conta pessoal na ou organização estiver habilitada a opção **Habilitar automaticamente para novos repositórios** de {% data variables.product.prodname_dependabot_security_updates %}. Para obter mais informações, confira "[Como gerenciar as {% data variables.product.prodname_dependabot_security_updates %} dos repositórios](#managing-dependabot-security-updates-for-your-repositories)" abaixo. 

Se você criar um fork de um repositório com atualizações de segurança habilitadas, o {% data variables.product.prodname_dotcom %} desabilitará automaticamente as {% data variables.product.prodname_dependabot_security_updates %} do fork. Depois, você poderá decidir se deseja habilitar as {% data variables.product.prodname_dependabot_security_updates %} no fork específico.

Se as atualizações de segurança não estiverem habilitadas para o seu repositório e você não souber o motivo, primeiro tente habilitá-las utilizando as instruções fornecidas nas seções de procedimento abaixo. Se atualizações de segurança ainda não funcionarem, você pode entrar em contato com {% data variables.contact.contact_support %}.

## Gerenciar {% data variables.product.prodname_dependabot_security_updates %} para seus repositórios

Você pode habilitar ou desabilitar as {% data variables.product.prodname_dependabot_security_updates %} para todos os repositórios qualificados pertencentes à sua conta pessoal ou à organização. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e análise da sua conta pessoal](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)" ou "[Como gerenciar as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)". 

Você pode habilitar ou desabilitar as {% data variables.product.prodname_dependabot_security_updates %} em um repositório individual.

### Habilitar ou desabilitar {% data variables.product.prodname_dependabot_security_updates %} para um repositório individual

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Em "Segurança e análise de código", à direita de "Atualizações de segurança do {% data variables.product.prodname_dependabot %}", clique em **Habilitar** para habilitar o recurso ou **Desabilitar** para desabilitá-lo. {% ifversion fpt or ghec %}Para repositórios públicos, o botão será desabilitado se o recurso estiver sempre habilitado.{% endif %} {% ifversion fpt or ghec %}![Captura de tela da seção "Segurança e análise de código" com o botão para habilitar as {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghes > 3.6 or ghae > 3.6 %}<!--Insert screenshot for GHES 3.7 when available--> {% else %}![Captura de tela da seção "Segurança e análise de código" com o botão para habilitar {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}

## Como substituir o comportamento padrão com um arquivo de configuração

Você pode substituir o comportamento padrão de {% data variables.product.prodname_dependabot_security_updates %} adicionando um arquivo dependabot.yml ao repositório. Para obter mais informações, confira "[Opções de configuração para o arquivo dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)". 

Se você precisar apenas das atualizações de segurança e quiser excluir as atualizações de versão, defina `open-pull-requests-limit` como `0` para evitar atualizações de versão de um determinado `package-ecosystem`. Para obter mais informações, confira "[`open-pull-requests-limit`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#open-pull-requests-limit)".

```
# Example configuration file that:
#  - Ignores lodash dependency
#  - Disables version-updates

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      - dependency-name: "lodash"
        # For Lodash, ignore all updates
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0
```

Para obter mais informações sobre as opções de configuração disponíveis para atualizações de segurança, confira a tabela em "[Opções de configuração do arquivo dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#configuration-options-for-the-dependabotyml-file)".

## Leitura adicional

- "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"
- "[Configurando {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)"{% ifversion fpt or ghec %}
- "[Como gerenciar configurações de uso de dados para seu repositório privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)"{% endif %}
- "[Ecossistemas de pacotes compatíveis](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)"
