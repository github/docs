---
title: Gestion des notifications à partir de votre boîte de réception
intro: 'Utilisez votre boîte de réception pour trier et synchroniser rapidement vos notifications par e-mail{% ifversion fpt or ghes or ghec %} et sur mobile{% endif %}.'
redirect_from:
  - /articles/marking-notifications-as-read
  - /articles/saving-notifications-for-later
  - /github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox
  - /github/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
shortTitle: Manage from your inbox
ms.openlocfilehash: d3e0d5eb5e7cf3e544ab601651951178402e4150
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106804'
---
## À propos de votre boîte de réception

{% ifversion fpt or ghes or ghec %} {% data reusables.notifications-v2.notifications-inbox-required-setting %} Pour plus d’informations, consultez « [Configuration des notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings) ».
{% endif %}

Pour accéder à votre boîte de réception de notifications, dans le coin supérieur droit de n’importe quelle page, cliquez sur {% octicon "bell" aria-label="The notifications bell" %}.

  ![Notification indiquant tout message non lu](/assets/images/help/notifications/notifications_general_existence_indicator.png)

Votre boîte de réception affiche toutes les notifications que vous n’avez pas supprimées ou marquées comme **Terminé**. Vous pouvez personnaliser votre boîte de réception pour mieux répondre à votre flux de travail à l’aide de filtres, afficher toutes les notifications ou uniquement les non lues, et regrouper vos notifications pour obtenir une vue d’ensemble rapide.

  ![affichage de boîte de réception](/assets/images/help/notifications-v2/inbox-view.png)

Par défaut, votre boîte de réception affiche les notifications lues et non lues. Pour afficher uniquement les notifications non lues, cliquez sur **Non lu** ou utilisez la requête `is:unread`.

  ![affichage des messages non lus dans la boîte de réception](/assets/images/help/notifications-v2/unread-inbox-view.png)

## Options de triage

Vous avez plusieurs options pour trier les notifications à partir de votre boîte de réception.

| Option de triage | Description |
|-----------------|-------------|
| Enregistrer            | Enregistre votre notification pour une révision ultérieure. Pour enregistrer une notification, à droite de la notification, cliquez sur {% octicon "bookmark" aria-label="The bookmark icon" %}. <br> <br> Les notifications enregistrées sont conservées indéfiniment, et peuvent être consultées en cliquant sur **Enregistré** dans la barre latérale ou avec la requête `is:saved`. Si votre notification enregistrée est antérieure à cinq mois et devient non enregistrée, elle disparaîtra de votre boîte de réception d’ici 24 heures. |
| Terminé            | Marque une notification comme terminée et la supprime de votre boîte de réception. Vous pouvez voir toutes les notifications terminées en cliquant sur **Terminé** dans la barre latérale ou avec la requête `is:done`. Les notifications marquées comme **Terminé** sont enregistrées pendant cinq mois.
| Se désabonner     | Supprime automatiquement la notification de votre boîte de réception, et vous désinscrit de la conversation jusqu’à ce que vous soyez @mentioned, qu’une équipe dont vous faites partie soit @mentioned, ou que vous soyez sollicité pour une révision.
| Lire            | Marque une notification comme lue. Pour afficher uniquement les notifications lues dans votre boîte de réception, utilisez la requête `is:read`. Cette requête n’inclut pas les notifications marquées comme **Terminé**.
| Unread          | Marque la notification comme non lue. Pour afficher uniquement les notifications non lues dans votre boîte de réception, utilisez la requête `is:unread`. |

Pour afficher les raccourcis clavier disponibles, consultez « [Raccourcis clavier](/github/getting-started-with-github/keyboard-shortcuts#notifications) ».

Avant de choisir une option de triage, vous pouvez d’abord afficher un aperçu des détails de votre notification et procéder à une investigation. Pour plus d’informations, consultez « [Triage d’une notification unique](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification) ».

## Triage de plusieurs notifications à la fois

Pour trier plusieurs notifications à la fois, sélectionnez les notifications concernées et utilisez la liste déroulante {% octicon "kebab-horizontal" aria-label="The edit icon" %} pour choisir une option de triage.

![Menu déroulant avec options de triage et notifications sélectionnées](/assets/images/help/notifications-v2/triage-multiple-notifications-together.png)

## Filtres de notification par défaut

Par défaut, votre boîte de réception a des filtres pour quand vous êtes affecté, participez à un thread, êtes sollicité afin de réviser une demande de tirage (pull request), ou lorsque votre nom d’utilisateur est @mentioned directement ou une équipe dont vous êtes membre est @mentioned.

  ![Filtres personnalisés par défaut](/assets/images/help/notifications-v2/default-filters.png)

## Personnalisation de votre boîte de réception avec des filtres personnalisés

Vous pouvez ajouter jusqu’à 15 de vos propres filtres personnalisés.

{% data reusables.notifications.access_notifications %}
2. Pour ouvrir les paramètres de filtre, dans la barre latérale gauche, en regard de « Filters », cliquez sur {% octicon "gear" aria-label="The Gear icon" %}.

  {% tip %}

  **Astuce :** Vous pouvez rapidement afficher un aperçu des résultats de la boîte de réception d’un filtre en créant une requête dans votre affichage de boîte de réception et en cliquant sur **Save**, ce qui ouvre les paramètres de filtres personnalisés.

  {% endtip %}

3. Ajoutez un nom pour votre filtre et une requête de filtre. Par exemple, pour afficher uniquement les notifications d’un dépôt spécifique, vous pouvez créer un filtre à l’aide de la requête `repo:octocat/open-source-project-name reason:participating`. Vous pouvez également ajouter des emojis avec un clavier emoji natif. Pour obtenir la liste des requêtes de recherche prises en charge, consultez « [Requêtes prises en charge pour les filtres personnalisés](#supported-queries-for-custom-filters) ».

  ![Exemple de filtre personnalisé](/assets/images/help/notifications-v2/custom-filter-example.png)

4. Cliquez sur **Créer**.

## Limitations des filtres personnalisés

Les filtres personnalisés ne prennent actuellement pas en charge :
  - La recherche en texte intégral dans votre boîte de réception, y compris la recherche de titres de demande de tirage ou de problème.
  - La distinction entre les filtres de requête `is:issue`, `is:pr` et `is:pull-request`. Ces requêtes retournent à la fois des problèmes et des demandes de tirage.
  - La création de plus de 15 filtres personnalisés.
  - La modification des filtres par défaut ou de leur ordre.
  - La recherche d’[exclusion](/github/searching-for-information-on-github/understanding-the-search-syntax#exclude-certain-results) à l’aide de `NOT` ou `-QUALIFIER`.

## Requêtes prises en charge pour les filtres personnalisés

Voici les types de filtres que vous pouvez utiliser :
  - Filtre par dépôt avec `repo:`
  - Filtre par type de discussion avec `is:`
  - Filtre par raison de notification avec `reason:`{% ifversion fpt or ghec %}
  - Filtre par auteur de notification avec `author:`
  - Filtre par organisation avec `org:`{% endif %}

### Requêtes `repo:` prises en charge

Pour ajouter un filtre `repo:`, vous devez inclure le propriétaire du dépôt dans la requête : `repo:owner/repository`. Un propriétaire est l’organisation ou l’utilisateur qui possède la ressource {% data variables.product.prodname_dotcom %} qui déclenche la notification. Par exemple, `repo:octo-org/octo-repo` affiche les notifications déclenchées dans le dépôt octo-repo au sein de l’organisation octo-org.

### Requêtes `is:` prises en charge

Pour filtrer les notifications pour une activité spécifique sur {% data variables.location.product_location %}, vous pouvez utiliser la requête `is`. Par exemple, pour voir uniquement les mises à jour d’invitation à un dépôt, utilisez `is:repository-invitation`{% ifversion not ghae %} ; pour voir uniquement les {% data variables.product.prodname_dependabot_alerts %}, utilisez `is:repository-vulnerability-alert`{% endif %}.

- `is:check-suite`
- `is:commit`
- `is:gist`
- `is:issue-or-pull-request`
- `is:release`
- `is:repository-invitation`
- `is:repository-vulnerability-alert`{% ifversion fpt or ghec %}
- `is:repository-advisory`{% endif %}
- `is:team-discussion`{% ifversion fpt or ghec %}
- `is:discussion`{% endif %}

Pour plus d’informations sur la réduction du bruit lié aux notifications pour {% data variables.product.prodname_dependabot_alerts %}, consultez « [Configuration des notifications pour {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts) ».

Vous pouvez également utiliser la requête `is:` pour décrire comment la notification a été triée.

- `is:saved`
- `is:done`
- `is:unread`
- `is:read`

### Requêtes `reason:` prises en charge

Pour filtrer les notifications d’après la raison pour laquelle vous avez reçu une mise à jour, vous pouvez utiliser la requête `reason:`. Par exemple, pour voir les notifications des occurrences où vous (ou une équipe dont vous êtes membre) êtes sollicité pour une révision de demande de tirage, utilisez `reason:review-requested`. Pour plus d’informations, consultez « [À propos des notifications »](/github/managing-subscriptions-and-notifications-on-github/about-notifications#reasons-for-receiving-notifications).

| Requête | Description |
|-----------------|-------------|
| `reason:assign` | Quand il existe une mise à jour sur une demande de tirage ou un problème auquel vous avez été affecté.
| `reason:author` | Quand vous avez ouvert une demande de tirage ou un problème et qu’il y a eu une mise à jour ou un nouveau commentaire.
| `reason:comment`| Quand vous avez commenté un problème, une demande de tirage ou une discussion d’équipe.
| `reason:participating` | Quand vous avez commenté un problème, une demande de tirage ou une discussion d’équipe, ou que vous avez été @mentioned.
| `reason:invitation` | Quand vous êtes invité à une équipe, une organisation ou un dépôt.
| `reason:manual` | Quand vous cliquez sur **Subscribe** dans une demande de tirage ou un problème auquel vous n’étiez pas encore abonné.
| `reason:mention` | Vous avez été directement @mentioned.
| `reason:review-requested` | Vous ou votre équipe avez été invités à passer en revue une demande de tirage (pull request).
| `reason:security-alert` | Quand une alerte de sécurité est émise pour un dépôt.
| `reason:state-change`  | Quand l’état d’une demande de tirage ou d’un problème est modifié. Par exemple, un problème est fermé ou une demande de tirage est fusionnée.
| `reason:team-mention` | Quand une équipe dont vous êtes membre est @mentioned.
| `reason:ci-activity` | Quand un dépôt a une mise à jour CI, telle qu’un nouvel état d’exécution de flux de travail.

{% ifversion fpt or ghec %}
### Requêtes `author:` prises en charge

Pour filtrer les notifications par utilisateur, vous pouvez utiliser la requête `author:`. Un auteur est l’auteur d’origine du thread (problème, demande de tirage, gist, discussions, et ainsi de suite) pour lequel vous recevez une notification. Par exemple, pour voir les notifications pour les threads créés par l’utilisateur Octocat, utilisez `author:octocat`.

### Requêtes `org:` prises en charge

Pour filtrer les notifications par organisation, vous pouvez utiliser la requête `org`. L’organisation que vous devez spécifier dans la requête est l’organisation du dépôt pour lequel vous recevez une notification sur {% data variables.product.prodname_dotcom %}. Cette requête est utile si vous appartenez à plusieurs organisations et souhaitez voir les notifications relatives à une organisation spécifique.

Par exemple, pour voir les notifications de l’organisation octo-org, utilisez `org:octo-org`. 

{% endif %}

## Filtres personnalisés {% data variables.product.prodname_dependabot %}

{% ifversion fpt or ghec or ghes %} Si vous utilisez {% data variables.product.prodname_dependabot %} pour garder vos dépendances à jour, vous pouvez utiliser et enregistrer ces filtres personnalisés :
- `is:repository_vulnerability_alert` pour afficher les notifications pour les {% data variables.product.prodname_dependabot_alerts %}.
- `reason:security_alert` pour afficher les notifications pour les {% data variables.product.prodname_dependabot_alerts %} et les demandes de tirage de mise à jour de sécurité.
- `author:app/dependabot` pour afficher les notifications générées par {% data variables.product.prodname_dependabot %}. Cela comprend les {% data variables.product.prodname_dependabot_alerts %}, les demandes de tirage de mise à jour de sécurité et les demandes de tirage de mise à jour de version.

Pour plus d’informations sur {% data variables.product.prodname_dependabot %}, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies) ».
{% endif %}

{% ifversion ghae %}

Si vous utilisez {% data variables.product.prodname_dependabot %} pour vous signaler les dépendances non sécurisées, vous pouvez utiliser et enregistrer ces filtres personnalisés pour afficher les notifications liées aux {% data variables.product.prodname_dependabot_alerts %} :
- `is:repository_vulnerability_alert` 
- `reason:security_alert`

Pour plus d’informations sur {% data variables.product.prodname_dependabot %}, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) ».
{% endif %}

