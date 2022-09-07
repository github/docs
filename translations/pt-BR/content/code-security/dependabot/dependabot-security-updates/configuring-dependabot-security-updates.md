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
  ghes: '>3.2'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: d45ba3ee3e45bcab91d9ddafdb8fb23da4963c8e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146027952'
---
<!--Marketing-LINK: From home page "Learn more about Dependabot".-->

{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Sobre a configuração de {% data variables.product.prodname_dependabot_security_updates %}

É possível habilitar o {% data variables.product.prodname_dependabot_security_updates %} para qualquer repositório que use {% data variables.product.prodname_dependabot_alerts %} e o gráfico de dependências. Para obter mais informações, confira "[Sobre as {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".

Você pode desativar as {% data variables.product.prodname_dependabot_security_updates %} em um repositório individual ou para todos os repositórios que pertencem à sua conta pessoal ou organização. Para obter mais informações, confira "[Como gerenciar as {% data variables.product.prodname_dependabot_security_updates %} para seus repositórios](#managing-dependabot-security-updates-for-your-repositories)" abaixo.

{% ifversion fpt or ghec %}{% data reusables.dependabot.dependabot-tos %}{% endif %}

## Repositórios com suporte

O {% data variables.product.prodname_dotcom %} habilita automaticamente o {% data variables.product.prodname_dependabot_security_updates %} para cada repositório que atende a estes pré-requisitos.

{% note %}

**Observação**: você pode habilitar as {% data variables.product.prodname_dependabot_security_updates %} manualmente, mesmo que o repositório não atenda a alguns dos pré-requisitos abaixo. Por exemplo, você pode habilitar as {% data variables.product.prodname_dependabot_security_updates %} em um fork ou, para um gerenciador de pacotes que não tem suporte direto seguindo as instruções descritas em "[Como gerenciar as {% data variables.product.prodname_dependabot_security_updates %} para seus repositórios](#managing-dependabot-security-updates-for-your-repositories)".

{% endnote %}

| Pré-requisito de habilitação automática | Mais informações |
| ----------------- | ----------------------- |
| O repositório não é uma bifurcação | "[Sobre os forks](/github/collaborating-with-issues-and-pull-requests/about-forks)" |
| Repositório não está arquivado | "[Como arquivar repositórios](/github/creating-cloning-and-archiving-repositories/archiving-repositories)" |{% ifversion fpt or ghec %}
| O repositório é público ou o repositório é privado e você ativou a análise somente leitura por {% data variables.product.prodname_dotcom %}, dependência gráfico e alertas de vulnerabilidade nas configurações do repositório | "[Como gerenciar configurações de uso de dados para seu repositório privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)". |{% endif %}
| O repositório contém o arquivo de manifesto de dependência de um ecossistema de pacote compatível com o {% data variables.product.prodname_dotcom %} | "[Ecossistemas de pacotes compatíveis](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)" |
| {% data variables.product.prodname_dependabot_security_updates %} não estão desativadas para o repositório | "[Como gerenciar as {% data variables.product.prodname_dependabot_security_updates %} para seu repositório](#managing-dependabot-security-updates-for-your-repositories)" |

Se as atualizações de segurança não estiverem habilitadas para o seu repositório e você não souber o motivo, primeiro tente habilitá-las utilizando as instruções fornecidas nas seções de procedimento abaixo. Se atualizações de segurança ainda não funcionarem, você pode entrar em contato com {% data variables.contact.contact_support %}.

## Gerenciar {% data variables.product.prodname_dependabot_security_updates %} para seus repositórios

Você pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_security_updates %} para um repositório individual (veja abaixo).


Você também pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_security_updates %} para todos os repositórios pertencentes à sua conta pessoal ou organização. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e análise da sua conta pessoal](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)" ou "[Como gerenciar as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)". 

O {% data variables.product.prodname_dependabot_security_updates %} exige configurações específicas do repositório. Para obter mais informações, confira "[Repositórios compatíveis](#supported-repositories)".

### Habilitar ou desabilitar {% data variables.product.prodname_dependabot_security_updates %} para um repositório individual

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Em "Segurança e análise de código", à direita de "Atualizações de segurança do {% data variables.product.prodname_dependabot %}", clique em **Habilitar** para habilitar o recurso ou **Desabilitar** para desabilitá-lo. {% ifversion fpt or ghec %}Para repositórios públicos, o botão será desabilitado se o recurso estiver sempre habilitado.{% endif %} {% ifversion fpt or ghec %}![Captura de tela da seção "Segurança e análise de código" com o botão para habilitar {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghes > 3.6 or ghae-issue-7044 %}<!--Insert screenshot for GHES 3.7 when available--> {% else %}![Captura de tela da seção "Segurança e análise de código" com o botão para habilitar {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}

## Como substituir o comportamento padrão com um arquivo de configuração

Você pode substituir o comportamento padrão de {% data variables.product.prodname_dependabot_security_updates %} adicionando um arquivo dependabot.yml ao repositório. Para obter mais informações, confira "[Opções de configuração para o arquivo dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)". 

Se você precisar apenas das atualizações de segurança e quiser excluir as atualizações de versão, defina `open-pull-request-limit` como `0` para evitar atualizações de versão de um determinado `package-ecosystem`. Para obter mais informações, confira "[`open-pull-request-limit`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#open-pull-requests-limit)".

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
