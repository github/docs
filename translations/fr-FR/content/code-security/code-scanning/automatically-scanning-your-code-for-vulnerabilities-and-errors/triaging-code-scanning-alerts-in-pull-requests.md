---
title: Triage des alertes d’analyse du code dans les demandes de tirage (pull request)
shortTitle: Triage alerts in pull requests
intro: 'Quand l’{% data variables.product.prodname_code_scanning %} identifie un problème dans une demande de tirage, vous pouvez passer en revue le code mis en surbrillance et résoudre l’alerte.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have read permission for a repository, you can see annotations on pull requests. With write permission, you can see detailed information and resolve {% data variables.product.prodname_code_scanning %} alerts for that repository.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Pull requests
  - Alerts
  - Repositories
ms.openlocfilehash: f73b0ef30b4512bc951fdbae4ae2f3c300e4c534
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162741'
---
{% data reusables.code-scanning.beta %}

## À propos des résultats d’{% data variables.product.prodname_code_scanning %} sur les demandes de tirage

Dans les dépôts où l’{% data variables.product.prodname_code_scanning %} est configurée en tant que vérification de demande de tirage, l’{% data variables.product.prodname_code_scanning %} vérifie le code dans la demande de tirage. Par défaut, cela est limité aux demandes de tirage qui ciblent la branche par défaut, mais vous pouvez changer cette configuration dans {% data variables.product.prodname_actions %} ou dans un système CI/CD tiers. Si la fusion des modifications introduit de nouvelles alertes d’{% data variables.product.prodname_code_scanning %} dans la branche cible, celles-ci sont signalées à plusieurs endroits.

- Vérifier les résultats dans l’{% ifversion code-scanning-pr-conversations-tab %} de la demande de tirage
- L’onglet **Conversation** de la demande de tirage, dans le cadre d’une révision de demande de tirage {% endif %} 
- L’onglet **Fichiers modifiés** de la demande de tirage

Si vous disposez d’une autorisation d’écriture pour le dépôt, vous pouvez voir les alertes d’{% data variables.product.prodname_code_scanning %} existantes sous l’onglet **Sécurité**. Pour plus d’informations sur les alertes de dépôt, consultez « [Gestion des alertes d’{% data variables.product.prodname_code_scanning %} pour votre dépôt](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository) ».

Dans les dépôts où l’{% data variables.product.prodname_code_scanning %} est configurée pour effectuer une analyse chaque fois que du code est poussé, l’{% data variables.product.prodname_code_scanning %} mappe également les résultats aux demandes de tirage ouvertes et ajoute les alertes sous forme d’annotations dans les mêmes emplacements que les autres vérifications de demande de tirage. Pour plus d’informations, consultez « [Analyse sur poussée](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push) ».

Si votre demande de tirage cible une branche protégée qui utilise l’{% data variables.product.prodname_code_scanning %} et que le propriétaire du dépôt a configuré les vérifications d’état requises, la vérification « Résultats de l’{% data variables.product.prodname_code_scanning_capc %} » doit réussir pour que vous puissiez fusionner la demande de tirage. Pour plus d’informations, consultez « [À propos des branches protégées](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging) ».

## À propos de l’{% data variables.product.prodname_code_scanning %} en tant que vérification de demande de tirage

Comme il existe de nombreuses options pour configurer l’{% data variables.product.prodname_code_scanning %} en tant que vérification de demande de tirage, la nature des vérifications et leur nombre peuvent varier d’un dépôt à l’autre. 

### Vérification des résultats d’{% data variables.product.prodname_code_scanning_capc %}

Pour toutes les configurations d’{% data variables.product.prodname_code_scanning %}, la vérification qui contient les résultats d’{% data variables.product.prodname_code_scanning %} est : **Résultats d’{% data variables.product.prodname_code_scanning_capc %}** . Les résultats de chaque outil d’analyse utilisé sont affichés séparément. Toutes les nouvelles alertes provoquées par les modifications apportées à la demande de tirage sont affichées sous forme d’annotations. 

Pour voir l’ensemble complet des alertes de la branche analysée, cliquez sur **Voir toutes les alertes de branche**. Cette action ouvre l’affichage complet des alertes, dans lequel vous pouvez filtrer toutes les alertes sur la branche par type, gravité, étiquette, etc. Pour plus d’informations, consultez « [Gestion des alertes d’analyse du code pour votre dépôt](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-and-searching-for-code-scanning-alerts) ».

![Vérification des résultats de l’{% data variables.product.prodname_code_scanning_capc %} sur une demande de tirage](/assets/images/help/repository/code-scanning-results-check.png)

### Échecs de la vérification des résultats d’{% data variables.product.prodname_code_scanning_capc %}

Si la vérification des résultats d’{% data variables.product.prodname_code_scanning %} détecte des problèmes de gravité de type `error`, `critical` ou `high`, la vérification échoue et l’erreur est signalée dans les résultats de la vérification. Si tous les résultats trouvés par l’{% data variables.product.prodname_code_scanning %} ont des gravités inférieures, les alertes sont traitées comme des avertissements ou des remarques et la vérification réussit.

![Échec de la vérification d’{% data variables.product.prodname_code_scanning %} sur une demande de tirage](/assets/images/help/repository/code-scanning-check-failure.png)

Vous pouvez remplacer le comportement par défaut dans les paramètres de votre référentiel, en spécifiant le niveau des gravités et les gravités de sécurité qui provoqueront l’échec de la vérification d’une demande de tirage. Pour plus d’informations, consultez « [Définition des gravités entraînant l’échec de la vérification des demandes de tirage](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure) ».

### Autres vérifications d’{% data variables.product.prodname_code_scanning %}

Selon votre configuration, vous pouvez voir des vérifications supplémentaires qui s’exécutent sur les demandes de tirage quand l’{% data variables.product.prodname_code_scanning %} est configurée. Il s’agit généralement de workflows qui analysent le code ou qui chargent les résultats d’{% data variables.product.prodname_code_scanning %}. Ces vérifications sont utiles pour résoudre les problèmes liés à l’analyse. 

Par exemple, si le dépôt utilise le {% data variables.code-scanning.codeql_workflow %}, une vérification **{% data variables.product.prodname_codeql %} / Analyser (LANGAGE)** est exécutée pour chaque langage avant l’exécution de la vérification des résultats. La vérification de l’analyse peut échouer en cas de problèmes de configuration ou si la demande de tirage interrompt la génération pour un langage dont l’analyse a besoin pour la compilation (par exemple, C/C++, C# ou Java). 

Comme avec les autres vérifications de demande de tirage, vous pouvez voir les détails complets de l’échec de la vérification sous l’onglet **Vérifications**. Pour plus d’informations sur la configuration et la résolution des problèmes, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning) » ou « [Résolution des problèmes liés au workflow {% data variables.product.prodname_codeql %}](/code-security/secure-coding/troubleshooting-the-codeql-workflow) ».

## Affichage d’une alerte sur votre demande de tirage

{% ifversion code-scanning-pr-conversations-tab %} Vous pouvez voir toutes les alertes d’{% data variables.product.prodname_code_scanning %} introduites dans une demande de tirage en consultant l’onglet **Conversation** . {% data variables.product.prodname_code_scanning_capc %} publie une révision de la demande de tirage qui montre chaque alerte sous forme d’annotation sur les lignes de code qui ont déclenché l’alerte. Vous pouvez commenter les alertes, les rejeter et visualiser les chemins pour les alertes, directement à partir des annotations. Vous pouvez consulter tous les détails d’une alerte en cliquant sur le lien « Afficher plus de détails », qui vous mènera à la page des détails de l’alerte.

![Annotation d’alerte dans un onglet Conversations de demande de tirage](/assets/images/help/repository/code-scanning-pr-conversation-tab.png)

Vous pouvez également consulter toutes les alertes d’{% data variables.product.prodname_code_scanning %} dans l’onglet **Fichiers modifiés** de la demande de tirage. Les alertes d’{% data variables.product.prodname_code_scanning %} existantes sur un fichier qui sont en dehors du différentiel des changements introduits dans la demande de tirage apparaîtront uniquement dans l’onglet **Fichiers modifiés**.

{% else %} Vous pouvez voir toutes les alertes d’{% data variables.product.prodname_code_scanning %} introduites dans une demande de tirage en affichant l’onglet **Fichiers modifiés**. Chaque alerte s’affiche sous la forme d’une annotation sur les lignes de code qui ont déclenché l’alerte. La gravité de l’alerte s’affiche dans l’annotation. 

![Annotation d’alerte dans une différence de demande de tirage](/assets/images/help/repository/code-scanning-pr-annotation.png) {% endif %}

Si vous disposez d’une autorisation d’écriture pour le dépôt, certaines annotations contiennent des liens avec un contexte supplémentaire pour l’alerte. Dans l’exemple ci-dessus, à partir de l’analyse {% data variables.product.prodname_codeql %}, vous pouvez cliquer sur **valeur fournie par l’utilisateur** pour voir où les données non approuvées entrent dans le flux de données (la source). Dans ce cas, vous pouvez également afficher le chemin complet depuis la source vers le code qui utilise les données (le récepteur) en cliquant sur **Afficher les chemins**. Cela permet de vérifier facilement si les données ne sont pas approuvées ou si l’analyse n’a pas pu reconnaître une étape d’assainissement des données entre la source et le récepteur. Pour plus d’informations sur l’analyse du flux de données avec {% data variables.product.prodname_codeql %}, consultez « [À propos de l’analyse du flux de données](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/) ».

Pour plus d’informations sur une alerte, les utilisateurs disposant d’une autorisation d’écriture peuvent cliquer sur le lien **Afficher plus de détails** affiché dans l’annotation. Cela vous permet de voir tout le contexte et les métadonnées fournis par l’outil dans un affichage d’alerte. Dans l’exemple ci-dessous, vous pouvez voir les étiquettes montrant la gravité, le type et les énumérations des faiblesses courantes pertinentes pour le problème. L’affichage montre également quel commit a introduit le problème.

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} {% data reusables.code-scanning.alert-default-branch %} {% endif %}

Dans l’affichage détaillé d’une alerte, certains outils d’{% data variables.product.prodname_code_scanning %} , tels que l’analyse {% data variables.product.prodname_codeql %}, incluent également une description du problème et un lien **Afficher plus** qui vous permet d’obtenir des conseils sur la résolution de votre code.

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} ![Description de l’alerte et lien pour montrer plus d’informations](/assets/images/help/repository/code-scanning-pr-alert.png) {% else %} ![Description de l’alerte et lien pour montrer plus d’informations](/assets/images/enterprise/3.4/repository/code-scanning-pr-alert.png) {% endif %}

{% ifversion code-scanning-pr-conversations-tab %}
## Commenter une alerte dans une demande de tirage

Vous pouvez commenter toute alerte d’{% data variables.product.prodname_code_scanning %} introduite par les changements dans une demande de tirage. Les alertes apparaissent sous forme d’annotations dans l’onglet **Conversation** d’une demande de tirage, dans le cadre d’une révision de demande de tirage, et sont également affichées dans l’onglet **Fichiers modifiés**. Vous pouvez uniquement commenter les alertes introduites par les changements dans une demande de tirage. Les alertes d’{% data variables.product.prodname_code_scanning %} existantes, sur des fichiers qui sont en dehors des changements introduits dans la demande de tirage, apparaîtront dans l’onglet **Fichiers modifiés**, mais ne pourront pas être commentées.

Vous pouvez choisir d’exiger que toutes les conversations dans une demande de tirage, y compris celles sur les alertes d’{% data variables.product.prodname_code_scanning %}, soient résolues avant qu’une demande de tirage puisse être fusionnée. Pour plus d’informations, consultez « [À propos des branches protégées](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-conversation-resolution-before-merging) ».
{% endif %}
## Résolution d’une alerte sur votre demande de tirage

Toute personne disposant d’un accès en poussée à une demande de tirage peut résoudre une alerte d’{% data variables.product.prodname_code_scanning %} identifiée sur cette demande de tirage. Si vous commitez des modifications apportées à la demande de tirage, une nouvelle exécution des vérifications de la demande de tirage est déclenchée. Si vos modifications résolvent le problème, l’alerte est fermée et l’annotation supprimée.

## Ignorer une alerte sur votre demande de tirage

Une autre façon de fermer une alerte consiste à l’ignorer. Vous pouvez ignorer une alerte si vous ne pensez pas qu’elle doit être résolue. {% data reusables.code-scanning.close-alert-examples %} Si vous disposez d’une autorisation d’écriture pour le dépôt, le bouton **Ignorer** est disponible dans les annotations de code et dans le résumé des alertes. Quand vous cliquez sur **Ignorer**, vous êtes invité à choisir une raison de fermer l’alerte.
{% ifversion comment-dismissed-code-scanning-alert %} ![Capture d’écran d’une alerte d’analyse de code avec une liste déroulante pour choisir la raison du rejet mise en évidence](/assets/images/help/repository/code-scanning-alert-dropdown-reason.png) {% else %} ![Choix de la raison du rejet d’une alerte](/assets/images/help/repository/code-scanning-alert-close-drop-down.png) {% endif %} {% data reusables.code-scanning.choose-alert-dismissal-reason %}

{% data reusables.code-scanning.false-positive-fix-codeql %}

Pour plus d’informations sur l’abandon d’alertes, consultez {% ifversion delete-code-scanning-alerts %}« [Gestion des alertes d’{% data variables.product.prodname_code_scanning %} pour votre dépôt](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#dismissing-or-deleting-alerts) ».{% else %} « [Gestion des alertes d’{% data variables.product.prodname_code_scanning %} pour votre dépôt](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#dismissing--alerts) ».{% endif %}
