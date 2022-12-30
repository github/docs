---
title: Gerenciar as configurações de segurança e análise para a sua conta pessoal
intro: 'Você pode controlar recursos que protegem e analisam o código nos seus projetos no {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
shortTitle: Manage security & analysis
ms.openlocfilehash: 22ff867691f79360db54f0fe85f5e988c71536a3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107819'
---
## Sobre a gestão de configurações de segurança e análise

O {% data variables.product.prodname_dotcom %} pode ajudar a proteger seus repositórios. Este tópico diz como você pode gerenciar as funcionalidades de segurança e análise de todos os seus repositórios existentes ou novos.

Você ainda pode gerenciar os recursos de segurança e análise para repositórios individuais. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".

Você também pode revisar o log de segurança de todas as atividades na sua conta pessoal. Para obter mais informações, confira "[Como revisar o log de segurança](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)".

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

Para ter uma visão geral da segurança no nível do repositório, confira "[Como proteger seu repositório](/code-security/getting-started/securing-your-repository)".

## Habilitar ou desabilitar recursos para repositórios existentes

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. Em "Segurança e análise de código", à direita do recurso, clique em **Desabilitar tudo** ou **Habilitar tudo**.
  {% ifversion ghes %}![Botão "Habilitar tudo" ou "Desabilitar tudo" dos recursos em "Configurar segurança e análise"](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png){% else %}![Botão "Habilitar tudo" ou "Desabilitar tudo" dos recursos em "Configurar segurança e análise"](/assets/images/enterprise/3.3/settings/security-and-analysis-disable-or-enable-all.png){% endif %}
6. Opcionalmente, habilite o recurso por padrão para novos repositórios que você possui.
  {% ifversion ghes %}![Opção "Habilitar por padrão" para novos repositórios](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-by-default-in-modal.png){% else %}![Opção "Habilitar por padrão" para novos repositórios](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png){% endif %}
7. Clique em **Desabilitar RECURSO** ou em **Habilitar RECURSO** para habilitar ou desabilitar o recurso em todos os repositórios dos quais você é o proprietário.
  {% ifversion ghes %}![Botão usado para desabilitar ou habilitar um recurso](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-dependency-graph.png){% else %}![Botão usado para desabilitar ou habilitar um recurso](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png){% endif %}

{% data reusables.security.displayed-information %}

## Habilitar ou desabilitar recursos para novos repositórios

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. Na opção "Código de segurança e análise", à direita do recurso, habilite ou desabilite o recurso por padrão para novos repositórios que você possui.
  {% ifversion ghes %}![Caixa de seleção usada para habilitar ou desabilitar um recurso em novos repositórios](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% else %}![Caixa de seleção usada para habilitar ou desabilitar um recurso em novos repositórios](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% endif %}

## Leitura adicional

- "[Sobre o grafo de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"
- "[Como manter suas dependências atualizadas automaticamente](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically)"
