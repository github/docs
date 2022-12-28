---
title: Configuration de l’analyse du code pour un dépôt
shortTitle: Set up code scanning
intro: 'Vous pouvez configurer {% data variables.product.prodname_code_scanning %} en ajoutant un workflow à votre référentiel.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can set up or configure {% data variables.product.prodname_code_scanning %} for that repository.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
ms.openlocfilehash: 7efa88fe860576401bb152f8ed29e56fc9feb56d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108393'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## Options de configuration de l’{% data variables.product.prodname_code_scanning %}

Vous décidez comment générer les alertes d’{% data variables.product.prodname_code_scanning %} et quels outils utiliser, au niveau d’un dépôt. {% data variables.product.product_name %} fournit une prise en charge entièrement intégrée de l’analyse {% data variables.product.prodname_codeql %} et prend également en charge l’analyse avec des outils tiers. Pour plus d’informations, consultez « [À propos de l’{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning#about-tools-for-code-scanning) ».

{% data reusables.code-scanning.enabling-options %}

{% ifversion fpt or ghes > 3.4 or ghae > 3.4 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

{% ifversion ghes or ghae %} {% note %}

**Remarque :** Si vous souhaitez utiliser l’analyse CodeQL, cet article décrit les fonctionnalités disponibles avec la version de l’action CodeQL et le bundle de l’interface CLI de CodeQL associé inclus dans la mise en production initiale de cette version de {% data variables.product.product_name %}. Si votre entreprise utilise une version plus récente de l’action CodeQL, consultez l’[article {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository) pour plus d’informations sur les dernières fonctionnalités. {% ifversion not ghae %} Pour plus d’informations sur l’utilisation de la dernière version, consultez « [Configuration de l’analyse du code pour votre appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access) »{% endif %}

{% endnote %} {% endif %}

{% ifversion ghae %}
## Prérequis

Avant de configurer l’{% data variables.product.prodname_code_scanning %} pour un dépôt, vous devez vous assurer qu’au moins un exécuteur {% data variables.product.prodname_actions %} auto-hébergé est disponible pour le dépôt.

Les propriétaires d’entreprise et les administrateurs d’organisation et de dépôt peuvent ajouter des exécuteurs auto-hébergés. Pour plus d’informations, consultez « [À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners) et « [Ajout d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/adding-self-hosted-runners) ».
{% endif %}

{% ifversion fpt or ghec %}
## Configuration de l’{% data variables.product.prodname_code_scanning %} en utilisant des workflows de démarrage

{% data reusables.advanced-security.starter-workflows-beta %}

{% ifversion ghes or ghae %} {% note %}

**Remarque :** Cet article décrit les fonctionnalités disponibles avec la version de l’action CodeQL et le bundle de l’interface CLI de CodeQL associé inclus dans la mise en production initiale de cette version de {% data variables.product.product_name %}. Si votre entreprise utilise une version plus récente de l’action CodeQL, consultez l’[article {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository) pour plus d’informations sur les dernières fonctionnalités. {% ifversion not ghae %} Pour plus d’informations sur l’utilisation de la dernière version, consultez « [Configuration de l’analyse du code pour votre appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access) »{% endif %}

{% endnote %} {% endif %}

{% data reusables.advanced-security.starter-workflow-overview %} Les workflows de démarrage de l’{% data variables.product.prodname_code_scanning_capc %} ne sont disponibles pour votre dépôt que si l’{% data variables.product.prodname_code_scanning %} est activée.

{% data reusables.code-scanning.billing %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Si au moins un workflow est déjà configuré pour le dépôt et qu’il est en cours d’exécution, cliquez sur **Nouveau workflow** et passez à l’étape 5. Si aucun workflow n’est configuré pour le dépôt, passez à l’étape suivante.
   ![Capture d’écran du bouton Nouveau workflow](/assets/images/help/security/actions-new-workflow-button.png)
1. Faites défiler jusqu’à la catégorie « Sécurité », puis cliquez sur **Configurer** sous le workflow que vous souhaitez configurer, ou cliquez sur **Afficher tout** pour afficher tous les workflows de sécurité disponibles.
   ![Capture d’écran de la section Sécurité (Actions > Workflows)](/assets/images/help/security/actions-workflows-security-section.png)
1. Dans le volet droit de la page du workflow, cliquez sur **Documentation** et suivez les instructions à l’écran pour adapter le workflow à vos besoins.
   ![Capture d’écran de l’onglet Documentation pour les workflows de démarrage](/assets/images/help/security/actions-workflows-documentation.png) Pour plus d’informations, consultez « [Utilisation des workflows de démarrage](/actions/using-workflows/using-starter-workflows#using-starter-workflows) » et « [Configuration de l’{% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning) ».

{% endif %}

## Configuration manuelle de l’{% data variables.product.prodname_code_scanning %}

{% ifversion fpt %}

Vous pouvez configurer {% data variables.product.prodname_code_scanning %} dans n’importe quel dépôt public où vous disposez d’un accès en écriture.

{% endif %}

{% data reusables.code-scanning.billing %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
1. À droite de « Alertes d’{% data variables.product.prodname_code_scanning_capc %} », cliquez sur **Configurer l’{% data variables.product.prodname_code_scanning %}** .{% ifversion ghec or ghes or ghae %} Si l’{% data variables.product.prodname_code_scanning %} est manquante, vous devez demander à un propriétaire d’organisation ou à un administrateur de dépôt d’activer {% data variables.product.prodname_GH_advanced_security %}.{% endif %} Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) » ou « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository) ».
 ![Bouton « Configurer l’{% data variables.product.prodname_code_scanning %} » à droite «d’{% data variables.product.prodname_code_scanning_capc %} » dans la vue d’ensemble de la sécurité](/assets/images/help/security/overview-set-up-code-scanning.png)
4. Sous « Bien démarrer avec l’{% data variables.product.prodname_code_scanning %} », cliquez sur **Configurer ce workflow** sur le {% data variables.product.prodname_codeql_workflow %} ou sur un workflow tiers.
 ![Bouton « Configurer ce workflow » sous le titre « Bien démarrer avec l’{% data variables.product.prodname_code_scanning %} »](/assets/images/help/repository/code-scanning-set-up-this-workflow.png)Les workflows s’affichent uniquement s’ils sont pertinents pour les langages de programmation détectés dans le dépôt. Le {% data variables.product.prodname_codeql_workflow %} est toujours affiché, mais le bouton « Configurer ce workflow » n’est activé que si l’analyse {% data variables.product.prodname_codeql %} prend en charge les langages présents dans le dépôt.
5. Pour personnaliser la façon dont l’{% data variables.product.prodname_code_scanning %} analyse votre code, modifiez le workflow.

   En règle générale, vous pouvez commiter le {% data variables.product.prodname_codeql_workflow %} sans y apporter de modifications. Toutefois, de nombreux workflows tiers nécessitent une configuration supplémentaire. Lisez donc les commentaires dans le workflow avant de commiter.

   Pour plus d’informations, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning) ».
6. Sélectionnez la liste déroulante **Commencer le commit**, puis tapez un message de commit.
 ![Commencer le commit](/assets/images/help/repository/start-commit-commit-new-file.png)
7. Indiquez si vous souhaitez valider directement la branche par défaut ou créer une nouvelle branche et démarrer une requête de tirage (pull request).
 ![Choisir où effectuer le commit](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. Cliquez sur **Valider le nouveau fichier** ou **Proposer un nouveau fichier**.

Dans le {% data variables.product.prodname_codeql_workflow %} par défaut, l’{% data variables.product.prodname_code_scanning %} est configurée pour analyser votre code chaque fois que vous poussez (push) une modification vers la branche par défaut ou à des branches protégées, ou que vous déclenchez une demande de tirage sur la branche par défaut. En conséquence, l’{% data variables.product.prodname_code_scanning %} commence.

Les déclencheurs `on:pull_request` et `on:push` pour l’analyse du code sont chacun utiles à des fins différentes. Pour plus d’informations, consultez « [Analyse des demandes de tirage](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-pull-requests) » et « [Analyse lors d’une poussée](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push) ».
## Configuration en bloc de l’{% data variables.product.prodname_code_scanning %}

Vous pouvez configurer l’{% data variables.product.prodname_code_scanning %} dans de nombreux dépôts à la fois avec un script. Si vous souhaitez utiliser un script pour déclencher des demandes de tirage qui ajoutent un workflow {% data variables.product.prodname_actions %} à plusieurs dépôts, consultez le dépôt [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs), pour obtenir un exemple utilisant PowerShell, ou [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement), pour les équipes qui n’ont pas PowerShell et qui souhaitent utiliser NodeJS.

## Affichage de la sortie de journalisation de l’{% data variables.product.prodname_code_scanning %}

Après avoir configuré l’{% data variables.product.prodname_code_scanning %} pour votre dépôt, vous pouvez regarder la sortie des actions à mesure qu’elles s’exécutent.

{% data reusables.repositories.actions-tab %}

  La liste qui apparaît inclut une entrée pour l’exécution du workflow d’{% data variables.product.prodname_code_scanning %}. Le texte de l’entrée est le titre que vous avez donné à votre message de commit.

  ![Liste d’actions montrant le workflow d’{% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-actions-list.png)

1. Cliquez sur l’entrée du workflow d’{% data variables.product.prodname_code_scanning %}.

1. Cliquez sur le nom du travail sur la gauche. Par exemple, **Analyser (LANGAGE)** .

  ![Sortie du journal du workflow d’{% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Passez en revue la sortie de la journalisation des actions de ce workflow à mesure qu’elles s’exécutent.

1. Une fois tous les travaux terminés, vous pouvez afficher les détails de toutes les alertes de l’{% data variables.product.prodname_code_scanning %} qui ont été identifiées. Pour plus d’informations, consultez « [Gestion des alertes d’{% data variables.product.prodname_code_scanning %} pour votre dépôt](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository) ».

{% note %}

**Remarque :** Si vous avez déclenché une demande de tirage (pull request) pour ajouter le workflow d’{% data variables.product.prodname_code_scanning %} au dépôt, les alertes de cette demande de tirage ne s’affichent directement dans la page {% data variables.product.prodname_code_scanning_capc %} qu’une fois la demande de tirage fusionnée. Si des alertes ont été trouvées, vous pouvez les afficher, avant que la demande de tirage ne soit fusionnée, en cliquant sur le lien **_n_ alertes trouvées** dans la bannière de la page {% data variables.product.prodname_code_scanning_capc %}.

![Cliquez sur le lien « n alertes trouvées »](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}

## Présentation des vérifications des demandes de tirage

Pour chaque workflow d’{% data variables.product.prodname_code_scanning %} configuré pour s’exécuter sur les demandes de tirage, il existe toujours au moins deux entrées dans la section des vérifications d’une demande de tirage. Il existe une entrée pour chacun des travaux d’analyse dans le workflow et une entrée finale pour les résultats de l’analyse.

Les noms des vérifications d’{% data variables.product.prodname_code_scanning %} ont la forme suivante : « NOM DE L’OUTIL / NOM DU TRAVAIL (DÉCLENCHEUR) ». Par exemple, pour {% data variables.product.prodname_codeql %}, l’analyse du code C++ contient l’entrée « {% data variables.product.prodname_codeql %} / Analyser (cpp) (pull_request) ». Vous pouvez cliquer sur **Détails** sur une entrée d’{% data variables.product.prodname_code_scanning %} pour afficher les données de journalisation. Ainsi, vous pouvez déboguer un problème si le travail d’analyse a échoué. Par exemple, pour l’{% data variables.product.prodname_code_scanning %} des langages compilés, cela peut se produire si l’action ne peut pas générer le code.

  ![Vérifications des demandes de tirage pour l’{% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-pr-checks.png)

Pendant l’exécution des travaux d’{% data variables.product.prodname_code_scanning %}, {% data variables.product.prodname_dotcom %} détermine si des alertes ont été ajoutées par la demande de tirage et ajoute l’entrée « Résultats de l’{% data variables.product.prodname_code_scanning_capc %} / NOM DE L’OUTIL » à la liste des vérifications. Après que l’{% data variables.product.prodname_code_scanning %} a été effectuée au moins une fois, vous pouvez cliquer sur **Détails** pour afficher les résultats de l’analyse.

{% ifversion ghes < 3.5 or ghae %} Si vous avez utilisé une demande de tirage pour ajouter l’{% data variables.product.prodname_code_scanning %} au dépôt, vous voyez d’abord un message « Analyse introuvable » quand vous cliquez sur **Détails** dans la vérification « Résultats de l’{% data variables.product.prodname_code_scanning_capc %} / TOOL NAME ».

  ![Analyse introuvable pour le message de commit](/assets/images/enterprise/3.4/repository/code-scanning-analysis-not-found.png)

Le tableau liste une ou plusieurs catégories. Chaque catégorie est liée à des analyses spécifiques, pour le même outil et le même commit, effectuées sur un langage différent ou une partie différente du code. Pour chaque catégorie, le tableau affiche les deux analyses que l’{% data variables.product.prodname_code_scanning %} a tenté de comparer pour déterminer quelles alertes ont été introduites ou corrigées dans la demande de tirage.

Par exemple, dans la capture d’écran ci-dessus, l’{% data variables.product.prodname_code_scanning %} a trouvé une analyse pour le commit de fusion de la demande de tirage, mais aucune analyse pour la tête de la branche primaire.

### Raisons du message « Analyse introuvable »


Une fois que l’{% data variables.product.prodname_code_scanning %} a analysé le code dans une demande de tirage, elle doit comparer l’analyse de la branche de rubrique (branche que vous avez utilisée pour créer la demande de tirage) avec l’analyse de la branche de base (branche dans laquelle vous souhaitez fusionner la demande de tirage). Ainsi, l’{% data variables.product.prodname_code_scanning %} peut calculer les alertes nouvellement introduites par la demande de tirage, les alertes qui étaient déjà présentes dans la branche de base et déterminer si des alertes existantes sont corrigées par les modifications apportées dans la demande de tirage. Au départ, si vous utilisez une demande de tirage pour ajouter l’{% data variables.product.prodname_code_scanning %} à un dépôt, la branche de base n’a pas encore été analysée. Il n’est donc pas possible de calculer ces détails. Dans ce cas, quand vous cliquez dans la vérification des résultats de la demande de tirage, vous voyez le message « Analyse introuvable ».

Il existe d’autres situations où il peut ne pas y avoir d’analyse pour le dernier commit dans la branche de base pour une demande de tirage. notamment :

* La demande de tirage a été déclenchée sur une branche autre que la branche par défaut et cette branche n’a pas été analysée.

  Pour vérifier si une branche a été analysée, accédez à la page {% data variables.product.prodname_code_scanning_capc %}, cliquez sur la liste déroulante **Branche** et sélectionnez la branche appropriée.

  ![Choisir une branche dans le menu déroulant Branche](/assets/images/help/repository/code-scanning-branch-dropdown.png)

  Dans cette situation, la solution consiste à ajouter le nom de la branche de base à la spécification `on:push` et `on:pull_request` dans le workflow d’{% data variables.product.prodname_code_scanning %} sur cette branche, puis à apporter une modification qui met à jour la demande de tirage ouverte que vous souhaitez analyser.

* L’analyse n’est pas encore disponible, car le dernier commit sur la branche de base pour la demande de tirage est en cours d’analyse.

  Attendez quelques minutes, puis poussez une modification vers la demande de tirage pour redéclencher l’{% data variables.product.prodname_code_scanning %}.

* Une erreur s’est produite lors de l’analyse du dernier commit sur la branche de base et l’analyse de ce commit n’est pas disponible.

  Fusionnez une modification triviale dans la branche de base pour déclencher l’{% data variables.product.prodname_code_scanning %} sur ce dernier commit, puis poussez une modification vers la demande de tirage pour redéclencher l’{% data variables.product.prodname_code_scanning %}.

{% endif %}

## Étapes suivantes

Après avoir configuré l’{% data variables.product.prodname_code_scanning %} et autorisé ses actions, vous pouvez :

- Afficher toutes les alertes d’{% data variables.product.prodname_code_scanning %} générées pour ce dépôt. Pour plus d’informations, consultez « [Gestion des alertes d’{% data variables.product.prodname_code_scanning %} pour votre dépôt](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository) ».
- Afficher toutes les alertes générées pour une demande de tirage envoyée après que vous avez configuré l’{% data variables.product.prodname_code_scanning %}. Pour plus d’informations, consultez « [Triage des alertes d’{% data variables.product.prodname_code_scanning %} dans les demandes de tirage](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests) ».
- Configurer des notifications pour les exécutions terminées. Pour plus d’informations, consultez « [Configuration des notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options) ».
- Afficher les journaux générés par l’{% data variables.product.prodname_code_scanning %}. Pour plus d’informations, consultez « [Affichage des journaux de l’{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs) ».
- Examiner les problèmes qui se produisent avec la configuration initiale de l’{% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_codeql %}. Pour plus d’informations, consultez « [Résolution des problèmes liés au workflow {% data variables.product.prodname_codeql %}](/code-security/secure-coding/troubleshooting-the-codeql-workflow) ».
- Personnaliser la façon dont l’{% data variables.product.prodname_code_scanning %} analyse le code dans votre dépôt. Pour plus d’informations, consultez « [Configuration de l’{% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning) ».
