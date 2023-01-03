---
title: Gestion des alertes d’analyse du code pour votre référentiel
shortTitle: Manage alerts
intro: 'À partir de la vue de sécurité, {% ifversion delete-code-scanning-alerts %}vous pouvez afficher, corriger, ignorer ou supprimer des alertes {% else %}vous pouvez afficher, corriger ou ignorer des alertes{% endif %} concernant les vulnérabilités ou erreurs potentielles dans le code de votre projet.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can manage {% data variables.product.prodname_code_scanning %} alerts for that repository.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
ms.openlocfilehash: b672af79096c1f52a0670cd747ef159f071a3d07
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147693326'
---
{% data reusables.code-scanning.beta %}

## Affichage des alertes pour un dépôt

Toute personne disposant d’une autorisation de lecture pour un dépôt peut voir les annotations d’{% data variables.product.prodname_code_scanning %} sur les demandes de tirage (pull request). Pour plus d’informations, consultez « [Triage des alertes d’{% data variables.product.prodname_code_scanning %} dans les demandes de tirage](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests) ».

Vous avez besoin d’une autorisation d’écriture pour voir un récapitulatif de toutes les alertes d’un dépôt sous l’onglet **Sécurité**.

Par défaut, la page des alertes d’analyse du code est filtrée pour montrer uniquement les alertes liées à la branche par défaut du dépôt.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Si vous le souhaitez, utilisez la zone de recherche en texte libre ou les menus déroulants pour filtrer les alertes. Par exemple, vous pouvez filtrer en fonction de l’outil utilisé pour identifier les alertes.
   ![Filtrer par outil](/assets/images/help/repository/code-scanning-filter-by-tool.png) {% data reusables.code-scanning.explore-alert %} ![Résumé des alertes](/assets/images/help/repository/code-scanning-click-alert.png)

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.alert-default-branch %} ![Section « Branches affectées » dans une alerte](/assets/images/help/repository/code-scanning-affected-branches.png){% endif %}
1. Si l’alerte met en évidence un problème avec le flux de données, vous pouvez cliquer sur **Afficher les chemins** pour afficher le chemin depuis la source de données vers le récepteur où il est utilisé.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![ Lien « Afficher les chemins » sur une alerte](/assets/images/help/repository/code-scanning-show-paths.png) {% else %} ![Lien « Afficher les chemins » sur une alerte](/assets/images/enterprise/3.4/repository/code-scanning-show-paths.png) {% endif %}
2. Les alertes de l’analyse {% data variables.product.prodname_codeql %} incluent une description du problème. Cliquez sur **Afficher plus** pour obtenir des conseils sur la façon de corriger votre code.
   ![Détails relatifs à une alerte](/assets/images/help/repository/code-scanning-alert-details.png)

Pour plus d’informations, consultez « [À propos des alertes d’{% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts) ».

{% note %}

**Remarque :** Pour l’{% data variables.product.prodname_code_scanning %} avec {% data variables.product.prodname_codeql %}, vous pouvez voir des informations sur la dernière exécution dans un en-tête en haut de la liste des alertes d’{% data variables.product.prodname_code_scanning %} pour le dépôt. 

Par exemple, vous pouvez voir quand la dernière analyse a été exécutée, le nombre de lignes de code analysées par rapport au nombre total de lignes de code dans votre dépôt et le nombre total d’alertes générées.
  ![Bannière de l’interface utilisateur](/assets/images/help/repository/code-scanning-ui-banner.png)

{% endnote %}

## Filtrage des alertes d’{% data variables.product.prodname_code_scanning %}

Vous pouvez filtrer les alertes affichées dans la vue des alertes d’{% data variables.product.prodname_code_scanning %}. Cela est utile s’il existe de nombreuses alertes, car vous pouvez vous concentrer sur un type particulier d’alerte. Vous disposez de filtres prédéfinis et d’un éventail de mots clés pour affiner la liste des alertes affichées. 

- Pour utiliser un filtre prédéfini, cliquez sur un filtre affiché dans l’en-tête de la liste des alertes ou sur **Filtres**, puis choisissez un filtre dans la liste déroulante.
  {% ifversion fpt or ghes or ghec %}![Filtres prédéfinis](/assets/images/help/repository/code-scanning-predefined-filters.png) {% else %}![Filtres prédéfinis](/assets/images/enterprise/3.0/code-scanning-predefined-filters.png){% endif %}
- Pour utiliser un mot clé, tapez directement dans la zone de texte Filtres ou :
  1. Cliquez dans la zone de texte Filtres pour afficher la liste de tous les mots clés de filtre disponibles.
  2. Cliquez sur le mot clé que vous souhaitez utiliser, puis choisissez une valeur dans la liste déroulante.
  ![Liste des filtres de mots clés](/assets/images/help/repository/code-scanning-filter-keywords.png)

L’avantage d’utiliser des filtres de mots clés est que seules les valeurs ayant des résultats sont affichées dans les listes déroulantes. Vous évitez ainsi de définir des filtres qui ne trouvent aucun résultat.

Si vous entrez plusieurs filtres, l’affichage montre les alertes correspondant à _tous_ ces filtres. Par exemple, `is:closed severity:high branch:main` affiche uniquement les alertes de gravité élevée fermées qui sont présentes sur la branche `main`. L’exception concerne les filtres relatifs aux références (`ref`, `branch` et `pr`) : `is:open branch:main branch:next` vous montre les alertes ouvertes à la fois sur la branche `main` et sur la branche `next`.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.filter-non-default-branches %} {% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}

Vous pouvez préfixer le filtre `tag` avec `-` pour exclure les résultats ayant cette étiquette. Par exemple, `-tag:style` montre uniquement les alertes qui n’ont pas l’étiquette `style`{% ifversion codeql-ml-queries %} et `-tag:experimental` omet toutes les alertes expérimentales. Pour plus d’informations, consultez « [À propos des alertes d’{% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts) ».{% else %}.{% endif %}

{% endif %}

### Restriction des résultats au code d’application uniquement

Vous pouvez utiliser le filtre « Uniquement les alertes dans le code d’application » ou la paire mot clé/valeur `autofilter:true` pour restreindre les résultats aux alertes dans le code d’application. Consultez « [À propos des étiquettes pour les alertes qui ne se trouvent pas dans le code d’application](#about-labels-for-alerts-that-are-not-found-in-application-code) » ci-dessus pour plus d’informations sur les types de code qui ne sont pas du code d’application.

{% ifversion fpt or ghes or ghec %}

## Exploration des alertes d’{% data variables.product.prodname_code_scanning %}

Vous pouvez explorer la liste des alertes. Cela est utile s’il existe un grand nombre d’alertes dans votre dépôt ou si vous ne connaissez pas le nom exact d’une alerte, par exemple. {% data variables.product.product_name %} effectue la recherche en texte libre dans les éléments suivants :
- Nom de l'alerte
- Les détails de l’alerte (cela inclut également les informations masquées par défaut dans la section réductible **Afficher plus**) {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![Informations d’alerte utilisées dans les recherches](/assets/images/help/repository/code-scanning-free-text-search-areas.png) {% else %} ![Informations d’alerte utilisées dans les recherches](/assets/images/enterprise/3.4/repository/code-scanning-free-text-search-areas.png) {% endif %}

| Recherche prise en charge | Exemple de syntaxe | Résultats |
| ---- | ---- | ---- |
| Recherche avec un seul mot | `injection` | Retourne toutes les alertes contenant le mot `injection` |
| Recherche avec plusieurs mots | `sql injection` | Retourne toutes les alertes contenant `sql` ou `injection` |
| Recherche de correspondance exacte</br>(utilisez des guillemets doubles) |  `"sql injection"` | Retourne toutes les alertes contenant l’expression exacte `sql injection` |
| Recherche OU | `sql OR injection` | Retourne toutes les alertes contenant `sql` ou `injection` |
| Recherche ET | `sql AND injection` | Retourne toutes les alertes contenant à la fois les mots `sql` et `injection` | 

{% tip %}

**Conseils :** 
- La recherche avec sur plusieurs mots équivaut à une recherche OU.
- La recherche ET retourne des résultats dans lesquels les termes de recherche se trouvent _n’importe où_, dans n’importe quel ordre dans le nom ou les détails de l’alerte.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}
1. À droite des menus déroulants **Filtres**, tapez les mots clés à rechercher dans la zone de recherche en texte libre.
  ![Zone de recherche en texte libre](/assets/images/help/repository/code-scanning-search-alerts.png)
2. Appuyez sur <kbd>Entrée</kbd>. La liste des alertes contient les alertes d’{% data variables.product.prodname_code_scanning %} ouvertes correspondant à vos critères de recherche.

{% endif %}

{% ifversion code-scanning-task-lists %}
## Suivi des alertes d’{% data variables.product.prodname_code_scanning %} dans les problèmes

{% data reusables.code-scanning.beta-alert-tracking-in-issues %} {% data reusables.code-scanning.github-issues-integration %} {% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## Correction d’une alerte

Toute personne disposant d’une autorisation d’écriture pour un dépôt peut corriger une alerte en commitant une correction dans le code. Si le dépôt a une {% data variables.product.prodname_code_scanning %} planifiée pour s’exécuter sur les demandes de tirage (pull request), il est préférable de déclencher une demande de tirage avec votre correction. Cela déclenche une {% data variables.product.prodname_code_scanning %} des modifications et vérifie que votre correctif n’introduit aucun nouveau problème. Pour plus d’informations, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning) » et « [Triage des alertes d’{% data variables.product.prodname_code_scanning %} dans les demandes de tirage](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests) ».

Si vous disposez d’une autorisation d’écriture pour un dépôt, vous pouvez voir les alertes corrigées en affichant le récapitulatif des alertes et en cliquant sur **Fermées**. Pour plus d’informations, consultez « [Affichage des alertes pour un dépôt](#viewing-the-alerts-for-a-repository) ». La liste « Fermées » affiche les alertes corrigées et les alertes que les utilisateurs ont ignorées.

Vous pouvez utiliser la recherche en texte libre ou les filtres pour afficher un sous-ensemble d’alertes, puis marquer toutes les alertes correspondantes comme fermées. 

Les alertes peuvent être corrigées dans une branche, mais pas dans une autre. Vous pouvez utiliser le filtre « Branche », dans le récapitulatif des alertes, pour vérifier si une alerte est corrigée dans une branche particulière.

![Filtrage des alertes par branche](/assets/images/help/repository/code-scanning-branch-filter.png)

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.filter-non-default-branches %} {% endif %}

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %} {% note %}

**Remarque :** Si vous exécutez l’analyse du code en utilisant plusieurs configurations, une alerte a parfois plusieurs origines d’analyse. Sauf si vous exécutez régulièrement toutes les configurations, vous pouvez voir des alertes qui sont corrigées dans une origine d’analyse, mais pas dans une autre. Pour plus d’informations, consultez « [À propos des origines d’analyse](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-analysis-origins) ».

{% endnote %} {% endif %}
## Ignorer {% ifversion delete-code-scanning-alerts %}ou supprimer{% endif %} les alertes

Il existe deux façons de fermer une alerte. Vous pouvez résoudre le problème dans le code ou ignorer l’alerte. {% ifversion delete-code-scanning-alerts %}Vous pouvez également supprimer des alertes si vous disposez d’autorisations d’administrateur pour le référentiel. La suppression d’alertes est utile dans les situations où vous avez configuré un outil d’{% data variables.product.prodname_code_scanning %}, puis décidé de le supprimer, ou dans lesquelles vous avez configuré l’analyse {% data variables.product.prodname_codeql %} avec un ensemble de requêtes trop grand au point d’avoir supprimé certaines requêtes de l’outil. Dans les deux cas, la suppression d’alertes vous permet de nettoyer les résultats de votre {% data variables.product.prodname_code_scanning %}. Vous pouvez supprimer des alertes de la liste récapitulative sous l’onglet **Sécurité**.{% endif %}

Le rejet d'une alerte est un moyen de fermer une alerte qui, selon vous, ne doit pas être corrigée. {% data reusables.code-scanning.close-alert-examples %} Vous pouvez ignorer des alertes à partir des annotations d’{% data variables.product.prodname_code_scanning %} dans le code ou de la liste récapitulative sous l’onglet **Sécurité**.

Quand vous ignorez une alerte :

- Elle est ignorée dans toutes les branches.
- L’alerte est supprimée du nombre d’alertes actuel pour votre projet.
- L’alerte est déplacée vers la liste « Fermées » dans le récapitulatif des alertes. Vous pouvez la rouvrir depuis cet endroit, si nécessaire.
- La raison pour laquelle vous avez fermé l’alerte est enregistrée.{% ifversion comment-dismissed-code-scanning-alert %} 
- Si vous le souhaitez, vous pouvez commenter un rejet pour enregistrer le contexte du rejet d’une alerte.{% endif %}
- La prochaine fois que l’{% data variables.product.prodname_code_scanning %} s’exécute, le même code ne génère pas d’alerte.

{% ifversion delete-code-scanning-alerts %}Quand vous supprimez une alerte :

- Elle est supprimée de toutes les branches.
- L’alerte est supprimée du nombre d’alertes actuel pour votre projet.
- Elle n’est _pas_ ajoutée à la liste « Fermées » dans le récapitulatif des alertes.
- Si le code qui a généré l’alerte reste le même et que le même outil d’{% data variables.product.prodname_code_scanning %} se réexécute sans modification de la configuration, l’alerte réapparaît dans les résultats de votre analyse.{% endif %}

Pour ignorer {% ifversion delete-code-scanning-alerts %}ou supprimer {% endif %}les alertes :

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}{% ifversion delete-code-scanning-alerts %}
1. Si vous disposez d’autorisations d’administrateur pour le dépôt et que vous souhaitez supprimer des alertes pour cet outil d’{% data variables.product.prodname_code_scanning %}, cochez certaines cases ou toutes les cases, puis cliquez sur **Supprimer**.

   ![Suppression d’alertes](/assets/images/help/repository/code-scanning-delete-alerts.png)

   Vous pouvez également utiliser la recherche en texte libre ou les filtres pour afficher un sous-ensemble d’alertes, puis supprimer toutes les alertes correspondantes simultanément. Par exemple, si vous avez supprimé une requête de l’analyse {% data variables.product.prodname_codeql %}, vous pouvez utiliser le filtre « Règle » pour lister uniquement les alertes pour cette requête, puis sélectionner et supprimer toutes ces alertes.

{% ifversion ghes or ghae %} ![Filtrer les alertes par règle](/assets/images/help/repository/code-scanning-filter-by-rule.png) {% else %} ![Filtrer les alertes par règle](/assets/images/enterprise/3.1/help/repository/code-scanning-filter-by-rule.png) {% endif %}{% endif %}
1. Si vous souhaitez ignorer une alerte, il est important d’explorer l’alerte en premier, afin que vous puissiez choisir la bonne raison de l’ignorer. Cliquez sur l’alerte que vous voulez explorer.
![Ouvrez une alerte à partir de la liste récapitulative](/assets/images/help/repository/code-scanning-click-alert.png) {%- ifversion comment-dismissed-code-scanning-alert %}
1. Passez en revue l’alerte, puis cliquez sur **Ignorer l’alerte** et choisissez, ou entrez, une raison de fermer l’alerte. 
  ![Capture d’écran d’une alerte d’analyse de code avec une liste déroulante pour choisir la raison du rejet mise en évidence](/assets/images/help/repository/code-scanning-alert-dropdown-reason.png) {%- else %}
1. Passez en revue l’alerte, puis cliquez sur **Ignorer** et choisissez une raison de fermer l’alerte.
  ![Choix de la raison du rejet d’une alerte](/assets/images/help/repository/code-scanning-alert-close-drop-down.png) {%- endif %} {% data reusables.code-scanning.choose-alert-dismissal-reason %}

   {% data reusables.code-scanning.false-positive-fix-codeql %}

### Ignorer plusieurs alertes à la fois

Si un projet a plusieurs alertes que vous souhaitez ignorer pour la même raison, vous pouvez les ignorer en bloc à partir du récapitulatif des alertes. En règle générale, vous souhaitez filtrer la liste, puis ignorer toutes les alertes correspondantes. Par exemple, vous souhaiterez peut-être ignorer toutes les alertes actuelles dans le projet qui ont été marquées pour une vulnérabilité CWE (Common Weakness Enumeration) particulière.

## Pour aller plus loin

- « [Triage des alertes d’{% data variables.product.prodname_code_scanning %} dans les demandes de tirage](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests) ».
- « [Configuration de l’{% data variables.product.prodname_code_scanning %} pour un dépôt](/code-security/secure-coding/setting-up-code-scanning-for-a-repository) »
- « [À propos de l’intégration à l’{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-integration-with-code-scanning) »
