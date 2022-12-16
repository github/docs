---
title: Gestion d’une règle de protection de branche
intro: 'Vous pouvez créer une règle de protection de branche pour appliquer certains workflows dans une ou plusieurs branches, par exemple exiger une révision d’approbation ou passer des vérifications d’état pour toutes les demandes de tirage (pull requests) fusionnées dans la branche protégée.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/configuring-protected-branches
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
  - /articles/enabling-required-status-checks
  - /github/administering-a-repository/enabling-required-status-checks
  - /articles/enabling-branch-restrictions
  - /github/administering-a-repository/enabling-branch-restrictions
  - /articles/enabling-required-reviews-for-pull-requests
  - /github/administering-a-repository/enabling-required-reviews-for-pull-requests
  - /articles/enabling-required-commit-signing
  - /github/administering-a-repository/enabling-required-commit-signing
  - /github/administering-a-repository/requiring-a-linear-commit-history
  - /github/administering-a-repository/enabling-force-pushes-to-a-protected-branch
  - /github/administering-a-repository/enabling-deletion-of-a-protected-branch
  - /github/administering-a-repository/managing-a-branch-protection-rule
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: People with admin permissions to a repository can manage branch protection rules.
topics:
  - Repositories
shortTitle: Branch protection rule
ms.openlocfilehash: aed3ab7599d8c74c16d95e4667e94aa3264c9491
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614174'
---
## À propos des règles de protection de branche

{% data reusables.repositories.branch-rules-example %}

Vous pouvez créer une règle pour toutes les branches actuelles et futures dans votre dépôt avec la syntaxe générique `*`. Étant donné que {% data variables.product.company_short %} utilise l’indicateur `File::FNM_PATHNAME` pour la syntaxe `File.fnmatch`, le caractère générique ne correspond pas aux séparateurs de répertoires (`/`). Par exemple, `qa/*` correspond à toutes les branches commençant par `qa/` et contenant une barre oblique unique. Vous pouvez inclure plusieurs barres obliques avec `qa/**/*`, et vous pouvez étendre la chaîne `qa` avec `qa**/**/*` pour rendre la règle plus inclusive. Pour plus d’informations sur les options de syntaxe des règles de branche, consultez la [documentation fnmatch](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

Si un dépôt a plusieurs règles de branches protégées qui affectent les mêmes branches, les règles qui incluent un nom de branche spécifique ont la priorité la plus élevée. Si plusieurs règles de branche protégée référencent le même nom de branche spécifique, la règle de branche créée en premier aura une priorité plus élevée.

Les règles de branches protégées qui mentionnent un caractère spécial, tel que `*`, `?` ou `]`, sont appliquées dans l’ordre dans lequel elles ont été créées ; les règles les plus anciennes avec ces caractères ont donc une priorité plus élevée.

Pour créer une exception à une règle de branche existante, vous pouvez créer une règle de protection de branche de priorité plus élevée, telle qu’une règle de branche pour un nom de branche spécifique.

Pour plus d’informations sur chacun des paramètres de protection de branche disponibles, consultez « [À propos des branches protégées](/github/administering-a-repository/about-protected-branches) ».

## Création d’une règle de protection de branche

Lorsque vous créez une règle de branche, la branche que vous spécifiez n’a pas encore besoin d’exister dans le dépôt.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %} {% data reusables.repositories.add-branch-protection-rules %} {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5506 %}
1. Si vous le souhaitez, activez les demandes de tirage (pull requests) requises.
   - Sous « Protéger les branches correspondantes », sélectionnez **Exiger une demande de tirage avant de fusionner**.
     ![Case à cocher de restriction de révision de demande de tirage](/assets/images/help/repository/PR-reviews-required-updated.png)
   - Si vous le souhaitez, pour exiger des approbations avant qu’une demande de tirage puisse être fusionnée, sélectionnez **Exiger des approbations**, cliquez sur le menu déroulant **Nombre requis d’approbations avant de fusionner**, puis sélectionnez le nombre de révisions d’approbation que vous souhaitez exiger sur la branche.
     ![Menu déroulant pour sélectionner le nombre d’approbations de révision requises](/assets/images/help/repository/number-of-required-review-approvals-updated.png) {% else %}
1. Si vous le souhaitez, activez les révisions de demandes de tirage requises.
   - Sous « Protéger les branches correspondantes », sélectionnez **Exiger des révisions de demandes de tirage avant de fusionner**.
     ![Case à cocher de restriction de révision de demande de tirage](/assets/images/help/repository/PR-reviews-required.png)
   - Cliquez sur le menu déroulant **Approbation requise**, puis sélectionnez le nombre de révisions d’approbation que vous souhaitez exiger sur la branche. 
     ![Menu déroulant pour sélectionner le nombre d’approbations de révision requises](/assets/images/help/repository/number-of-required-review-approvals.png) {% endif %}
   - Si vous le souhaitez, pour ignorer une révision d’approbation de demande de tirage lorsqu’un commit de modification de code est poussé vers la branche, sélectionnez **Ignorer les approbations de demandes de tirage obsolètes lorsque de nouveaux commits sont poussés.**
     ![Case à cocher Ignorer les approbations de demandes de tirage obsolètes lorsque de nouveaux commits sont poussés](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
   - Si vous le souhaitez, pour exiger une révision de la part d’un propriétaire de code lorsque la demande de tirage affecte du code qui a un propriétaire désigné, sélectionnez **Exiger une révision de la part des propriétaires de code**. Pour plus d’informations, consultez « [À propos des propriétaires de code](/github/creating-cloning-and-archiving-repositories/about-code-owners) ».
     ![Exiger une révision de la part des propriétaires de code](/assets/images/help/repository/PR-review-required-code-owner.png) {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5611 %}
   - Si vous le souhaitez, pour autoriser des acteurs spécifiques à pousser du code vers la branche sans créer de demandes de tirage lorsqu’elles sont exigées, sélectionnez **Autoriser les acteurs spécifiés à contourner les demandes de tirage requises**. Ensuite, recherchez et sélectionnez les acteurs qui doivent être autorisés à ignorer la création d’une demande de tirage.
     ![Case à cocher Autoriser les acteurs spécifiés à contourner les demandes de tirage requises]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/PR-bypass-requirements-with-apps.png){% else %}(/assets/images/help/repository/PR-bypass-requirements.png){% endif %} {% endif %}
   - Si vous le souhaitez, si le dépôt fait partie d’une organisation, sélectionnez **Restreindre qui peut ignorer les révisions de demandes de tirage**. Ensuite, recherchez et sélectionnez les acteurs autorisés à ignorer les révisions de demandes de tirage. Pour plus d’informations, consultez « [Abandonner une revue de demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review) ».
     ![Case à cocher Restreindre qui peut ignorer les révisions de demandes de tirage]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/PR-review-required-dismissals-with-apps.png){% else %}(/assets/images/help/repository/PR-review-required-dismissals.png){% endif %}
1. Si vous le souhaitez, activez les vérifications d’état requises. Pour plus d’informations, consultez « [À propos des vérifications d’état](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) ».
   - Sélectionnez **Exiger la réussite des vérifications d’état avant de fusionner**.
     ![Option de vérifications d’état requises](/assets/images/help/repository/required-status-checks.png)
   - Si vous le souhaitez, pour être sûr que les demandes de tirage sont testées avec le code le plus récent de la branche protégée, sélectionnez **Exiger que les branches soient à jour avant la fusion**.
     ![Case à cocher d’état requis lâche ou strict](/assets/images/help/repository/protecting-branch-loose-status.png)
   - Recherchez les vérifications d’état, en sélectionnant celles que vous souhaitez exiger.
     ![Interface de recherche pour les vérifications d’état disponibles, avec la liste des vérifications requises](/assets/images/help/repository/required-statuses-list.png)
1. Si vous le souhaitez, sélectionnez **Exiger une résolution de conversation avant de fusionner**.
  ![Option Exiger une résolution de conversation avant de fusionner](/assets/images/help/repository/require-conversation-resolution.png)
1. Si vous le souhaitez, sélectionnez **Exiger des commits signés**.
  ![Option Exiger des commits signés](/assets/images/help/repository/require-signed-commits.png)
1. Si vous le souhaitez, sélectionnez **Exiger un historique linéaire**.
  ![Option Exiger un historique linéaire](/assets/images/help/repository/required-linear-history.png) {%- ifversion fpt or ghec %}
1. Si vous le souhaitez, pour fusionner des demandes de tirage à l’aide d’une file d’attente de fusion, sélectionnez **Exiger une file d’attente de fusion**. {% data reusables.pull_requests.merge-queue-references %} ![Option Exiger une file d’attente de fusion](/assets/images/help/repository/require-merge-queue.png) {% tip %}

  **Astuce :** La fonctionnalité de file d’attente de fusion des demandes de tirage est actuellement en version bêta publique limitée, et soumise à modification. Les propriétaires d’organisation peuvent demander un accès anticipé à la version bêta en rejoignant la [liste d’attente](https://github.com/features/merge-queue/signup).

  {% endtip %} {%- endif %} {%- ifversion required-deployments %}
1. Si vous le souhaitez, pour choisir les environnements sur lesquels les modifications doivent être correctement déployées avant la fusion, sélectionnez **Exiger la réussite des déploiements avant de fusionner**, puis sélectionnez les environnements.
   ![Option d’exigence de réussite de déploiement](/assets/images/help/repository/require-successful-deployment.png) {%- endif %}
1. Si vous le souhaitez, sélectionnez {% ifversion bypass-branch-protections %}**Ne pas autoriser le contournement des paramètres ci-dessus**.
![Case à cocher Ne pas autoriser le contournement des paramètres ci-dessus](/assets/images/help/repository/do-not-allow-bypassing-the-above-settings.png){% else %}**Appliquer les règles ci-dessus aux administrateurs**.
![Case à cocher Appliquer les règles ci-dessus aux administrateurs](/assets/images/help/repository/include-admins-protected-branches.png){% endif %}
1. Si vous le souhaitez,{% ifversion fpt or ghec %} si votre dépôt appartient à une organisation utilisant {% data variables.product.prodname_team %} ou {% data variables.product.prodname_ghe_cloud %},{% endif %} activez les restrictions de branche.
   - Sélectionnez **Restreindre qui peut effectuer un push vers les branches correspondantes**.
     ![Case à cocher de restriction de branche](/assets/images/help/repository/restrict-branch.png){% ifversion restrict-pushes-create-branch %}
   - Si vous le souhaitez, pour restreindre également la création de branches correspondantes, sélectionnez **Restreindre les poussées qui créent des branches correspondantes**.
     ![Case à cocher de restriction de création de branche](/assets/images/help/repository/restrict-branch-create.png){% endif %}
   - Recherchez et sélectionnez les personnes, équipes ou applications qui auront l’autorisation de pousser vers la branche protégée ou de créer une branche correspondante.
     ![Recherche de restriction de branche]{% ifversion restrict-pushes-create-branch %}(/assets/images/help/repository/restrict-branch-search-with-create.png){% else %}(/assets/images/help/repository/restrict-branch-search.png){% endif %}
1. Si vous le souhaitez, sous « Règles appliquées à tous, y compris les administrateurs », sélectionnez **Autoriser les poussées de force**.
  ![Option Autoriser les poussées de force](/assets/images/help/repository/allow-force-pushes.png) {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5624 %} Ensuite, choisissez qui peut forcer la poussée vers la branche.
    - Sélectionnez **Tout le monde** pour autoriser toute personne ayant au moins des autorisations d’écriture dans le dépôt à forcer la poussée vers la branche, y compris celles disposant d’autorisations d’administrateur.
    - Sélectionnez **Spécifier qui peut forcer la poussée** pour autoriser uniquement des acteurs spécifiques à forcer la poussée vers la branche. Ensuite, recherchez et sélectionnez ces acteurs.
      ![Capture d’écran des options permettant de spécifier qui peut forcer la poussée]{% ifversion integration-branch-protection-exceptions %}(/assets/images/help/repository/allow-force-pushes-specify-who-with-apps.png){% else %}(/assets/images/help/repository/allow-force-pushes-specify-who.png){% endif %} {% endif %}

    Pour plus d’informations sur les poussées forcées, consultez « [Autoriser les poussées forcées](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches/#allow-force-pushes) ».
1. Si vous le souhaitez, sélectionnez **Autoriser les suppressions**.
  ![Option Autoriser les suppressions de branche](/assets/images/help/repository/allow-branch-deletions.png)
1. Cliquez sur **Créer**.

## Modification d’une règle de protection de branche

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. À droite de la règle de protection de branche que vous souhaitez modifier, cliquez sur **Modifier**.
  ![Edit button](/assets/images/help/repository/edit-branch-protection-rule.png)
1. Apportez vos modifications souhaitées à la règle de protection de branche.
1. Cliquez sur **Save changes**.
  ![Bouton Enregistrer les modifications](/assets/images/help/repository/save-branch-protection-rule.png)

## Suppression d’une règle de protection de branche

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. À droite de la règle de protection de branche que vous souhaitez supprimer, cliquez sur **Supprimer**.
    ![Delete button](/assets/images/help/repository/delete-branch-protection-rule.png)
