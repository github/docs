---
title: À propos de l’analyse du code
intro: 'Vous pouvez utiliser l’{% data variables.product.prodname_code_scanning %} pour rechercher des vulnérabilités de sécurité et des erreurs dans le code de votre projet sur {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/about-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning
  - /code-security/secure-coding/about-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
ms.openlocfilehash: 0bf49aa695e9e5a60cef7eb78c6e44f5ecd4ece5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085565'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## À propos de l’{% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

Vous pouvez utiliser l’{% data variables.product.prodname_code_scanning %} pour rechercher, trier et hiérarchiser les correctifs pour les problèmes existants dans votre code. L’{% data variables.product.prodname_code_scanning_capc %} empêche également les développeurs d’introduire de nouveaux problèmes. Vous pouvez planifier des analyses pour des jours et des heures spécifiques, ou déclencher des analyses quand un événement spécifique se produit dans le dépôt, comme une poussée (push).

Si l’{% data variables.product.prodname_code_scanning %} trouve une vulnérabilité ou une erreur potentielle dans votre code, {% data variables.product.prodname_dotcom %} affiche une alerte dans le dépôt. Une fois que vous avez corrigé le code qui a déclenché l’alerte, {% data variables.product.prodname_dotcom %} ferme celle-ci. Pour plus d’informations, consultez « [Gestion des alertes d’{% data variables.product.prodname_code_scanning %} pour votre dépôt](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository) ».

Pour superviser les résultats de l’{% data variables.product.prodname_code_scanning %} sur vos dépôts ou votre organisation, vous pouvez utiliser des webhooks et l’API d’{% data variables.product.prodname_code_scanning %}. Pour plus d’informations sur les webhooks pour l’{% data variables.product.prodname_code_scanning %}, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert) ». Pour plus d’informations sur les points de terminaison d’API, consultez « [{% data variables.product.prodname_code_scanning_capc %}](/rest/reference/code-scanning) ». 

Pour bien démarrer avec l’{% data variables.product.prodname_code_scanning %}, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %} pour un dépôt](/code-security/secure-coding/setting-up-code-scanning-for-a-repository) ».

{% ifversion fpt or ghec %}

## À propos de la facturation pour l’{% data variables.product.prodname_code_scanning %}

L’{% data variables.product.prodname_code_scanning_capc %} utilise {% data variables.product.prodname_actions %}, et chaque exécution d’un workflow d’{% data variables.product.prodname_code_scanning %} consomme des minutes pour {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [À propos de la facturation pour {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions) ».

{% endif %}

## À propos des outils pour l’{% data variables.product.prodname_code_scanning %}

Vous pouvez configurer l’{% data variables.product.prodname_code_scanning %} pour utiliser le produit {% data variables.product.prodname_codeql %} géré par {% data variables.product.company_short%} ou un outil d’{% data variables.product.prodname_code_scanning %} tiers. 

### À propos de l’analyse {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.about-codeql-analysis %} Pour plus d’informations sur {% data variables.product.prodname_codeql %}, consultez « [À propos de l’analyse du code avec CodeQL](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql) ».

### À propos des outils d’{% data variables.product.prodname_code_scanning %} tiers

{% data reusables.code-scanning.interoperable-with-tools-that-output-sarif %}

Vous pouvez exécuter des outils d’analyse tiers dans {% data variables.product.product_name %} en utilisant des actions ou dans un système CI externe. Pour plus d’informations, consultez « [Configuration de l’analyse du code pour un dépôt](/code-security/secure-coding/setting-up-code-scanning-for-a-repository) » ou « [Chargement d’un fichier SARIF sur GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github) ».
