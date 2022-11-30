---
title: Gerenciando configurações de uso de dados para seu repositório privado
intro: 'Para ajudar o {% data variables.product.product_name %} a conectar você a ferramentas, pessoas, projetos e informações relevantes, você pode configurar o uso de dados de seu repositório privado.'
redirect_from:
  - /articles/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: Manage data use for private repo
ms.openlocfilehash: 36ddc4449726b67863e7d4e045dd1582b12f2c27
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526667'
---
## Sobre o uso de dados para seu repositório privado


Você pode controlar o uso de dados do seu repositório privado com os recursos de segurança e análise. 

- Habilite o grafo de dependência para permitir a análise de dados somente leitura no repositório. 
- Desabilite o grafo de dependência para bloquear a análise de dados somente leitura do repositório. 

Ao habilitar o uso de dados para seu repositório privado, poderá acessar o gráfico de dependências, em que você pode acompanhar as dependências do repositório e receber {% data variables.product.prodname_dependabot_alerts %} quando o {% data variables.product.product_name %} detectar dependências vulneráveis. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)".


{% note %}

**Observação:** se você desabilitar o grafo de dependência, os {% data variables.product.prodname_dependabot_alerts %} e as {% data variables.product.prodname_dependabot_security_updates %} também serão desabilitados. Para obter mais informações, confira "[Sobre o grafo de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)". 

{% endnote %}

## Habilitar ou desabilitar o uso de dados por meio dos recursos de segurança e análise

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Em "Segurança e análise de código", à direita do recurso, clique em **Desabilitar** ou **Habilitar**.{% ifversion fpt %} ![" Botão Habilitar" ou "Desabilitar" para os recursos de "Configurar segurança e análise"](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghec %} !["Habilitar" ou "Desabilitar" para recursos de "Configurar segurança e análise"](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png){% endif %}

## Leitura adicional

- "[Sobre o uso dos seus dados pelo {% data variables.product.prodname_dotcom %}](/articles/about-github-s-use-of-your-data)"
- "[Como ver e atualizar {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"
- "[Como gerenciar as configurações de segurança e de análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
