---
title: À propos de l’intégration à l’analyse du code
shortTitle: About integration
intro: 'Vous pouvez effectuer une {% data variables.product.prodname_code_scanning %} en externe, puis afficher les résultats dans {% data variables.product.prodname_dotcom %}, ou configurer des webhooks qui écoutent l’activité d’{% data variables.product.prodname_code_scanning %} dans votre dépôt.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-integration-with-code-scanning
  - /code-security/secure-coding/about-integration-with-code-scanning
  - /code-security/secure-coding/integrating-with-code-scanning/about-integration-with-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - Webhooks
  - Integration
ms.openlocfilehash: b12f5146a90cae0ed1bd38d452e43eb611232e72
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105009'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

En guise d’alternative à l’exécution de l’{% data variables.product.prodname_code_scanning %} dans {% data variables.product.prodname_dotcom %}, vous pouvez effectuer une analyse ailleurs, puis charger les résultats. Les alertes de l’{% data variables.product.prodname_code_scanning %} que vous exécutez en externe sont affichées de la même façon que celles de {% data variables.product.prodname_code_scanning %} que vous exécutez dans {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Gestion des alertes d’{% data variables.product.prodname_code_scanning %} pour votre dépôt](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository) ».

Si vous utilisez un outil d’analyse statique tiers qui peut produire des résultats en tant que données SARIF (Static Analysis Results Interchange Format) 2.1.0, vous pouvez les charger sur {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Chargement d’un fichier SARIF sur GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github) ».

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

## Intégrations à des webhooks

Vous pouvez utiliser des webhooks d’{% data variables.product.prodname_code_scanning %} pour créer ou configurer des intégrations, telles que des [{% data variables.product.prodname_github_apps %}](/apps/building-github-apps/) ou des [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/), qui s’abonnent aux événements d’{% data variables.product.prodname_code_scanning %} dans votre dépôt. Par exemple, vous pouvez créer une intégration qui crée un problème sur {% data variables.product.product_name %} ou vous envoie une notification Slack quand une nouvelle alerte d’{% data variables.product.prodname_code_scanning %} est ajoutée dans votre dépôt. Pour plus d’informations, consultez « [Création de webhooks](/developers/webhooks-and-events/creating-webhooks) » et « [Événements et charges utiles de webhook ».](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)

## Pour aller plus loin

* « [À propos de l’{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning) »
* « [Utilisation de l’{% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_codeql %} avec votre système CI existant](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system) »
* « [Prise en charge de SARIF pour l’{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning) »
