---
title: Bien démarrer avec l’API Checks
intro: 'L’API Vérifications des exécutions vous permet de générer des applications GitHub qui exécutent des vérifications puissantes sur les modifications de code dans un référentiel. Vous pouvez créer des applications qui effectuent une intégration continue, un linting de code ou des services d’analyse de code et fournir des commentaires détaillés sur les validations.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Get started - Checks API
ms.openlocfilehash: 6d98940d9cf4f4fd534034e142aa3d86a0900406
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147710242'
---
## Vue d’ensemble

À la place des états de build binaires « pass/fail », les applications GitHub peuvent signaler des états détaillés, annoter des lignes de code avec des informations détaillées et réexécuter les tests. Les fonctionnalités de l’API Checks sont disponibles exclusivement pour vos applications GitHub.

Pour obtenir un exemple d’utilisation de l’API Checks avec une {% data variables.product.prodname_github_app %}, consultez « [Création de tests CI avec l’API Checks](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/) ».

## À propos des suites de vérifications

Lorsqu’une personne pousse (push) du code vers un dépôt, GitHub crée une suite de vérifications pour le dernier commit. Une suite de vérifications est une collection d’[exécutions de vérifications](/rest/reference/checks#check-runs) créées par une application GitHub pour un commit spécifique. Les suites de vérifications récapitulent l’état et la conclusion des exécutions de vérifications qui se trouvent dans la suite.

![Vérifier le workflow d’une suite](/assets/images/check_suites.png)

La suite de vérifications indique la `conclusion` de l’exécution de vérifications ayant la priorité la plus élevée dans sa propre `conclusion`. Par exemple, si trois séries de vérifications ont les conclusions `timed_out`, `success`et `neutral`, la conclusion de la suite de vérifications sera `timed_out`.

Par défaut, GitHub crée automatiquement une suite de vérifications lorsque le code est poussé vers le dépôt. Ce flux par défaut envoie l’événement `check_suite` (avec l’action `requested`) à toutes les applications GitHub qui disposent de l’autorisation `checks:write`. Lorsque votre application GitHub reçoit l’événement `check_suite`, elle peut créer de nouvelles exécutions de vérifications pour le dernier commit. GitHub ajoute automatiquement de nouvelles exécutions de vérifications à la [suite de vérifications](/rest/reference/checks#check-suites) correspondante, en fonction du dépôt et du SHA de l’exécution de vérification.

Si vous ne souhaitez pas utiliser le flux automatique par défaut, vous pouvez contrôler à quel moment créer les suites de vérifications. Pour modifier les paramètres par défaut de la création de suites de vérifications, utilisez le point de terminaison [Mettre à jour les préférences du dépôt pour les suites de vérifications](/rest/reference/checks#update-repository-preferences-for-check-suites). Toutes les modifications apportées aux paramètres de flux automatique sont enregistrées dans le journal d’audit du dépôt. Si vous avez désactivé le flux automatique, vous pouvez créer une suite de vérifications à l’aide du point de terminaison [Créer une suite de vérifications](/rest/reference/checks#create-a-check-suite). Vous devez continuer à utiliser le point de terminaison [Créer une exécution de vérification](/rest/reference/checks#create-a-check-run) pour fournir des commentaires sur un commit.

{% data reusables.apps.checks-availability %}

Pour utiliser l’API Check Suites, l’application GitHub doit avoir l’autorisation `checks:write` et peut également s’abonner au webhook [check_suite](/webhooks/event-payloads/#check_suite).

{% data reusables.shortdesc.authenticating_github_app %}

## À propos des exécutions de vérifications

Une exécution de vérification est un test individuel qui fait partie d’une suite de vérifications. Chaque exécution comprend un état et une conclusion.

![Workflow des exécutions de vérifications](/assets/images/check_runs.png)

Si une exécution de vérification est à l’état incomplet pendant plus de 14 jours, la `conclusion` de l’exécution de vérification devient `stale` et apparaît dans {% data variables.product.prodname_dotcom %} comme étant obsolète avec {% octicon "issue-reopened" aria-label="The issue-reopened icon" %}. Seul {% data variables.product.prodname_dotcom %} peut marquer les exécutions de vérifications comme étant `stale`. Pour plus d’informations sur les conclusions possibles d’une exécution de vérification, consultez le [ paramètre `conclusion`](/rest/reference/checks#create-a-check-run--parameters).

Dès que vous recevez le webhook [`check_suite`](/webhooks/event-payloads/#check_suite), vous pouvez créer l’exécution de vérification, même si la vérification n’est pas terminée. Vous pouvez mettre à jour le `status` de l’exécution de vérification quand elle est en cours avec les valeurs `queued`, `in_progress` ou `completed`, et vous pouvez mettre à jour `output` lorsque plus de détails sont disponibles. Une exécution de vérification peut contenir des horodatages, un lien vers plus de détails sur votre site externe, des annotations détaillées concernant des lignes de code spécifiques ainsi que des informations sur l’analyse effectuée.

![Annotation d’exécution de vérification](/assets/images/check_run_annotations.png)

Une vérification peut également être réexécutée manuellement dans l’interface utilisateur GitHub. Pour plus d’informations, consultez « [À propos des vérifications d’état](/articles/about-status-checks#checks) ». Lorsque cela se produit, l’application GitHub qui a créé l’exécution de vérification reçoit le webhook [`check_run`](/webhooks/event-payloads/#check_run) demandant une nouvelle exécution de vérification. Si vous créez une exécution de vérification sans créer de suite de vérifications, GitHub créera automatiquement la suite de vérifications.

{% data reusables.apps.checks-availability %}

Pour utiliser l’API Check Suites, l’application GitHub doit avoir l’autorisation `checks:write` et peut également s’abonner au webhook [check_run](/webhooks/event-payloads#check_run).

## Vérifier les exécutions et les actions demandées

Lorsque vous configurez une exécution de vérification avec les actions demandées (à ne pas confondre avec {% data variables.product.prodname_actions %}), vous pouvez afficher un bouton dans la vue de demande de tirage (pull request) sur {% data variables.product.prodname_dotcom %} pour permettre aux utilisateurs de demander à votre {% data variables.product.prodname_github_app %} d’effectuer des tâches supplémentaires.

Par exemple, une application de linting de code peut utiliser les actions demandées pour afficher un bouton dans une demande de tirage permettant de corriger automatiquement les erreurs de syntaxe détectées.

Pour créer un bouton permettant de demander des actions supplémentaires à partir de votre application, utilisez l’[objet `actions`](/rest/reference/checks#create-a-check-run--parameters) lorsque vous [créez une exécution de vérification](/rest/reference/checks/#create-a-check-run). Par exemple, l’objet `actions` ci-dessous affiche un bouton dans une demande de tirage avec l’étiquette « Fix this » (Corriger). Le bouton s’affiche une fois l’exécution de vérification terminée.

   ```json
  "actions": [{
      "label": "Fix this",
      "description": "Let us fix that for you",
      "identifier": "fix_errors"
    }]
  ```

  ![Bouton d’action demandée dans l’exécution de vérification](/assets/images/github-apps/github_apps_checks_fix_this_button.png)

Lorsqu’un utilisateur clique sur le bouton, {% data variables.product.prodname_dotcom %} envoie le [webhook `check_run.requested_action`](/webhooks/event-payloads/#check_run) à votre application. Lorsque votre application reçoit un événement de webhook `check_run.requested_action`, elle peut rechercher la clé `requested_action.identifier` dans la charge utile du webhook afin de déterminer le bouton sur lequel l’utilisateur a cliqué et d’effectuer la tâche demandée.

Pour obtenir un exemple détaillé de la configuration des actions demandées avec l’API Checks, consultez « [Création de tests CI avec l’API Checks](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/#part-2-creating-the-octo-rubocop-ci-test) ».

{% ifversion fpt or ghec %}
## Rétention des données de vérification

{% data reusables.pull_requests.retention-checks-data %} {% endif %}
