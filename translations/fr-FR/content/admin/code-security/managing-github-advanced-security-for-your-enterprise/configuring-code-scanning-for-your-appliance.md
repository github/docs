---
title: Configuration de l’analyse du code pour votre appliance
shortTitle: Configuring code scanning
intro: 'Vous pouvez activer, configurer et désactiver {% data variables.product.prodname_code_scanning %} pour {% data variables.location.product_location %}. {% data variables.product.prodname_code_scanning_capc %} permet aux utilisateurs d’analyser le code à la recherche de vulnérabilités et d’erreurs.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/advanced-security/configuring-code-scanning-for-your-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Security
ms.openlocfilehash: 11ad9bfe108d339af3992277cab0918998eb54fb
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161085'
---
{% data reusables.code-scanning.beta %}

## À propos de l’{% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

Vous pouvez configurer l’{% data variables.product.prodname_code_scanning %} pour exécuter l’analyse {% data variables.product.prodname_codeql %} et l’analyse tierce. {% data variables.product.prodname_code_scanning_capc %} prend aussi en charge l’exécution de l’analyse en mode natif avec {% data variables.product.prodname_actions %} ou en externe en utilisant l’infrastructure CI/CD existante. Le tableau ci-dessous récapitule toutes les options dont disposent les utilisateurs au moment de configurer {% data variables.location.product_location %} pour autoriser l’{% data variables.product.prodname_code_scanning %} à l’aide d’actions.

{% data reusables.code-scanning.enabling-options %}

## Vérification de la présence de {% data variables.product.prodname_GH_advanced_security %} dans votre licence

{% data reusables.advanced-security.check-for-ghas-license %}

## Prérequis pour l’{% data variables.product.prodname_code_scanning %}

- Une licence pour {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (consultez « [À propos de la facturation de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security) »){% endif %}

- L’{% data variables.product.prodname_code_scanning_capc %} activée dans la console de gestion (consultez « [Activation de {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise) »)

- Une machine virtuelle ou un conteneur pour y exécuter {% data variables.product.prodname_code_scanning %}.

## Exécution de l’{% data variables.product.prodname_code_scanning %} à l’aide de {% data variables.product.prodname_actions %}

### Configuration d’un exécuteur auto-hébergé

{% data variables.product.prodname_ghe_server %} peut exécuter l’{% data variables.product.prodname_code_scanning %} en utilisant un workflow {% data variables.product.prodname_actions %}. Tout d’abord, vous devez provisionner un ou plusieurs exécuteurs {% data variables.product.prodname_actions %} auto-hébergés dans votre environnement. Vous pouvez provisionner des exécuteurs auto-hébergés au niveau du dépôt, de l’organisation ou du compte d’entreprise. Pour plus d’informations, consultez « [À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners) et « [Ajout d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/adding-self-hosted-runners) ».

Vous devez vérifier que Git se trouve dans la variable PATH des exécuteurs auto-hébergés que vous utilisez pour exécuter des actions {% data variables.product.prodname_codeql %}.

{% ifversion ghes > 3.7 or ghae > 3.7 %} {% note %}

Si vous utilisez l’{% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_codeql %} pour analyser le code écrit en Python dans votre entreprise, vous devez vérifier que votre exécuteur auto-hébergé a Python 3 installé.

{% endnote %} {% endif %}

### Provisionnement des actions pour l’{% data variables.product.prodname_code_scanning %}

{% ifversion ghes %} Si vous souhaitez utiliser des actions pour exécuter l’{% data variables.product.prodname_code_scanning %} sur {% data variables.product.prodname_ghe_server %}, les actions doivent être disponibles sur votre appliance.

L’action {% data variables.product.prodname_codeql %} est incluse dans votre installation de {% data variables.product.prodname_ghe_server %}. Si {% data variables.product.prodname_ghe_server %} {{ allVersions[currentVersion].currentRelease }} et votre exécuteur {% data variables.product.prodname_actions %} ont accès à Internet, l’action télécharge automatiquement le bundle {% data variables.product.prodname_codeql %} {% data variables.product.codeql_cli_ghes_recommended_version %} nécessaire pour effectuer l’analyse. Vous pouvez également utiliser un outil de synchronisation pour mettre à disposition localement la dernière version du bundle d’analyse {% data variables.product.prodname_codeql %}. Pour plus d’informations, consultez « [Configuration de l’analyse {% data variables.product.prodname_codeql %} sur un serveur sans accès à Internet](#configuring-codeql-analysis-on-a-server-without-internet-access) » ci-dessous.

Vous pouvez aussi mettre des actions tierces à la disposition des utilisateurs pour {% data variables.product.prodname_code_scanning %} en configurant {% data variables.product.prodname_github_connect %}. Pour plus d’informations, consultez « [Configuration de {% data variables.product.prodname_github_connect %} pour synchroniser {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions) » ci-dessous.

### Configuration de l’analyse {% data variables.product.prodname_codeql %} sur un serveur sans accès à Internet
Si le serveur sur lequel vous exécutez {% data variables.product.prodname_ghe_server %} n’est pas connecté à Internet et que vous souhaitez permettre aux utilisateurs d’activer l’{% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_codeql %} pour leurs dépôts, vous devez utiliser l’outil de synchronisation d’actions {% data variables.product.prodname_codeql %} pour copier le bundle d’analyse {% data variables.product.prodname_codeql %} de {% data variables.product.prodname_dotcom_the_website %} vers votre serveur. L’outil et les instructions d’utilisation sont disponibles à l’adresse [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/).

Si vous configurez l’outil de synchronisation d’actions {% data variables.product.prodname_codeql %}, vous pouvez vous en servir pour synchroniser les dernières versions de l’action {% data variables.product.prodname_codeql %} et le bundle d’analyse {% data variables.product.prodname_codeql %} associé. Ils sont compatibles avec {% data variables.product.prodname_ghe_server %}.

{% endif %}

### Configuration de {% data variables.product.prodname_github_connect %} pour synchroniser {% data variables.product.prodname_actions %}
1. Si vous voulez télécharger des workflow d’actions à la demande à partir de {% data variables.product.prodname_dotcom_the_website %}, vous devez activer {% data variables.product.prodname_github_connect %}. Pour plus d’informations, consultez « [Activation de {% data variables.product.prodname_github_connect %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud#enabling-github-connect) ».
2. Vous devez également activer {% data variables.product.prodname_actions %} pour {% data variables.location.product_location %}. Pour plus d’informations, consultez « [Bien démarrer avec {% data variables.product.prodname_actions %} pour {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server) ».
3. L’étape suivante consiste à configurer l’accès aux actions sur {% data variables.product.prodname_dotcom_the_website %} à l’aide de {% data variables.product.prodname_github_connect %}. Pour plus d’informations, consultez « [Activation de l’accès automatique aux actions {% data variables.product.prodname_dotcom_the_website %} à l’aide de {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)."
4. Ajoutez un exécuteur auto-hébergé à votre dépôt, organisation ou compte d’entreprise. Pour plus d’informations, consultez « [Ajout d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/adding-self-hosted-runners) ».

## Exécution de l’analyse du code à l’aide de {% data variables.product.prodname_codeql_cli %}

Si vous ne souhaitez pas utiliser {% data variables.product.prodname_actions %}, vous devez exécuter {% data variables.product.prodname_code_scanning %} à l’aide de {% data variables.product.prodname_codeql_cli %}. 

{% data variables.product.prodname_codeql_cli %} est un outil en ligne de commande qui permet d’analyser des codebases sur n’importe quel ordinateur, y compris sur un système CI/CD tiers. Pour plus d’informations, consultez « [Installation de CodeQL CLI dans votre système CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system) ».

{% ifversion codeql-runner-supported %}

## Exécution de l’{% data variables.product.prodname_code_scanning %} à l’aide de l’{% data variables.code-scanning.codeql_runner %}

{% data reusables.code-scanning.deprecation-codeql-runner %}

Si vous ne souhaitez pas utiliser {% data variables.product.prodname_actions %}, vous pouvez exécuter l’{% data variables.product.prodname_code_scanning %} avec l’{% data variables.code-scanning.codeql_runner %}. 

L’{% data variables.code-scanning.codeql_runner %} est un outil en ligne de commande que vous pouvez ajouter à votre système CI/CD tiers. Cet outil exécute l’analyse {% data variables.product.prodname_codeql %} lors d’une extraction d’un dépôt {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Exécution de l’{% data variables.product.prodname_code_scanning %} dans votre système CI](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system) ».

{% endif %}
