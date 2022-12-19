---
title: Affichage des journaux d’analyse du code
intro: 'Vous pouvez afficher la sortie générée pendant l’analyse {% data variables.product.prodname_code_scanning %} dans {% data variables.product.product_location %}.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can view the {% data variables.product.prodname_code_scanning %} logs for that repository.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Security
shortTitle: View code scanning logs
ms.openlocfilehash: e4f4c3e601540e02c01bbe3761a11528a746a519
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147444628'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## À propos de la configuration de l’{% data variables.product.prodname_code_scanning %} 

Vous pouvez utiliser divers outils pour configurer l’{% data variables.product.prodname_code_scanning %} dans votre dépôt. Pour plus d’informations, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %} pour un dépôt](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#options-for-setting-up-code-scanning) ».

Les informations de journal et de diagnostic disponibles dépendent de la méthode que vous utilisez pour {% data variables.product.prodname_code_scanning %} dans votre référentiel. Vous pouvez vérifier le type d’{% data variables.product.prodname_code_scanning %} que vous utilisez sous l’onglet **Sécurité** de votre dépôt, en utilisant le menu déroulant **Outil** dans la liste des alertes. Pour plus d’informations, consultez « [Gestion des alertes d’{% data variables.product.prodname_code_scanning %} pour votre dépôt](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository) ».

## À propos des informations d’analyse et de diagnostic

Vous pouvez voir les informations d’analyse et de diagnostic pour l’{% data variables.product.prodname_code_scanning %} exécutée avec l’analyse {% data variables.product.prodname_codeql %} sur {% data variables.product.prodname_dotcom %}. 

Les informations d’**analyse** sont affichées pour l’analyse la plus récente dans un en-tête en haut de la liste des alertes. Pour plus d’informations, consultez « [Gestion des alertes d’analyse du code pour votre dépôt](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository) ».

Les informations de **diagnostic** sont affichées dans les journaux de workflow Action et se composent de métriques récapitulatives et de diagnostics d’extraction. Pour plus d’informations sur l’accès aux journaux d’{% data variables.product.prodname_code_scanning %} sur {% data variables.product.prodname_dotcom %}, consultez « [Affichage de la sortie de journalisation de l’{% data variables.product.prodname_code_scanning %}](#viewing-the-logging-output-from-code-scanning) » ci-dessous.

Si vous utilisez l’{% data variables.product.prodname_codeql_cli %} en dehors de {% data variables.product.prodname_dotcom %}, les informations de diagnostic s’affichent dans la sortie générée lors de l’analyse de la base de données. Ces informations sont également incluses dans le fichier de résultats SARIF que vous chargez sur {% data variables.product.prodname_dotcom %} avec les résultats de l’{% data variables.product.prodname_code_scanning %}.

Pour plus d’informations sur l’{% data variables.product.prodname_codeql_cli %}, consultez « [Configuration de l’{% data variables.product.prodname_codeql_cli %} dans votre système CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#viewing-log-and-diagnostic-information) ».

### À propos des métriques récapitulatives

{% data reusables.code-scanning.summary-metrics %}

### À propos des diagnostics d’extraction de code source {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.extractor-diagnostics %}

{% ifversion codeql-action-debug-logging %}

Vous pouvez voir des informations plus détaillées sur les erreurs et avertissements de l’extracteur {% data variables.product.prodname_codeql %} qui apparaissent lors de la création de la base de données en activant la journalisation du débogage. Pour plus d’informations, consultez « [Résolution des problèmes de workflow CodeQL](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow#creating-codeql-debugging-artifacts-by-re-running-jobs-with-debug-logging-enabled) ».

{% endif %}

## Affichage de la sortie de journalisation de l’{% data variables.product.prodname_code_scanning %}

Cette section s’applique l’{% data variables.product.prodname_code_scanning %} exécutée avec {% data variables.product.prodname_actions %} ({% data variables.product.prodname_codeql %} ou tiers).

Après avoir configuré l’{% data variables.product.prodname_code_scanning %} pour votre dépôt, vous pouvez regarder la sortie des actions à mesure qu’elles s’exécutent.

{% data reusables.repositories.actions-tab %}

  La liste qui apparaît inclut une entrée pour l’exécution du workflow d’{% data variables.product.prodname_code_scanning %}. Le texte de l’entrée est le titre que vous avez donné à votre message de commit.

  ![Liste d’actions montrant le workflow d’{% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-actions-list.png)

1. Cliquez sur l’entrée du workflow d’{% data variables.product.prodname_code_scanning %}.

2. Cliquez sur le nom du travail sur la gauche. Par exemple, **Analyser (LANGAGE)** .

  ![Sortie du journal du workflow d’{% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Passez en revue la sortie de la journalisation des actions de ce workflow à mesure qu’elles s’exécutent.

1. Une fois tous les travaux terminés, vous pouvez afficher les détails de toutes les alertes de l’{% data variables.product.prodname_code_scanning %} qui ont été identifiées. Pour plus d’informations, consultez « [Gestion des alertes d’{% data variables.product.prodname_code_scanning %} pour votre dépôt](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository) ».

{% note %}

**Remarque :** Si vous avez déclenché une demande de tirage (pull request) pour ajouter le workflow d’{% data variables.product.prodname_code_scanning %} au dépôt, les alertes de cette demande de tirage ne s’affichent directement dans la page {% data variables.product.prodname_code_scanning_capc %} qu’une fois la demande de tirage fusionnée. Si des alertes ont été trouvées, vous pouvez les afficher, avant que la demande de tirage ne soit fusionnée, en cliquant sur le lien **_n_ alertes trouvées** dans la bannière de la page {% data variables.product.prodname_code_scanning_capc %}.

![Cliquez sur le lien « n alertes trouvées »](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}
