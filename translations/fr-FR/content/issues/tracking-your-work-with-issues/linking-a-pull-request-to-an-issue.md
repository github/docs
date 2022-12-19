---
title: Relier une demande de tirage à un problème
intro: 'Vous pouvez lier une demande de tirage {% ifversion link-existing-branches-to-issue %}ou branche {% endif %}à un problème pour montrer qu’un correctif est en cours et fermer automatiquement le problème quand la demande de tirage {% ifversion link-existing-branches-to-issue %}ou branche {% endif %} est fusionnée.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/linking-a-pull-request-to-an-issue
  - /articles/closing-issues-via-commit-message
  - /articles/closing-issues-via-commit-messages
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
  - /github/managing-your-work-on-github/linking-a-pull-request-to-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/linking-a-pull-request-to-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Link PR to issue
ms.openlocfilehash: 8c3ec2b778029c91d0e97783ced873e6b9b28a9b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108574'
---
{% note %}

**Remarque :** les mots clés spéciaux d’une description de demande de tirage sont interprétés lorsque la demande de tirage cible la branche *par défaut* du référentiel. Toutefois, si la base de la demande de tirage est *une autre branche*, ces mots clés sont ignorés, aucun lien n’est créé et la fusion de la demande de tirage n’a aucun effet sur les problèmes. **Si vous souhaitez lier une demande de tirage à un problème à l’aide d’un mot clé, la demande de tirage doit se trouver sur la branche par défaut.**

{% endnote %}

## À propos des problèmes et demandes de tirage liés

Vous pouvez lier un problème à une demande de tirage manuellement ou à l’aide d’un mot clé pris en charge dans la description de la demande de tirage.

Lorsque vous liez une demande de tirage au problème, les collaborateurs peuvent voir que quelqu’un travaille sur le problème.

Lorsque vous fusionnez une demande de tirage liée dans la branche par défaut d’un référentiel, son problème lié est automatiquement fermé. Pour plus d’informations sur la branche par défaut, consultez « [Modification de la branche par défaut](/github/administering-a-repository/changing-the-default-branch) ».

## Liaison d’une demande de tirage à un problème à l’aide d’un mot clé

Vous pouvez lier une demande de tirage à un problème à l’aide d’un mot clé pris en charge dans la description de la demande de tirage ou dans un message de validation. La demande de tirage **doit se trouver** sur la branche par défaut.

* close
* closes
* Fermé
* correctif
* fixes
* fixe
* resolve
* resolves
* resolved

Si vous utilisez un mot clé pour référencer un commentaire de demande de tirage dans une autre demande de tirage, les demandes de tirage sont liées. La fusion de la demande de tirage (pull request) de référence ferme également la demande de tirage référencée.

La syntaxe des mots clés fermants dépend du fait que le problème se trouve dans le même référentiel que la demande de tirage.

Problème lié | Syntaxe | Exemple
--------------- | ------ | ------
Problème dans le même référentiel | *KEYWORD* #*ISSUE-NUMBER* | `Closes #10`
Problème dans un autre référentiel | *KEYWORD* *OWNER*/*REPOSITORY*#*ISSUE-NUMBER* | `Fixes octo-org/octo-repo#100`
Plusieurs problèmes | Utiliser la syntaxe complète pour chaque problème | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100`

Seules les demandes de tirage liées manuellement peuvent être dissociées manuellement. Pour dissocier un problème lié à l’aide d’un mot clé, vous devez modifier la description de la demande de tirage pour supprimer le mot clé.

Vous pouvez également utiliser des mots clés fermants dans un message de validation. Le problème est fermé lorsque vous fusionnez la validation dans la branche par défaut, mais la demande de tirage qui contient la validation ne sera pas répertoriée comme une demande de tirage liée.

## Liaison manuelle d’une demande de tirage à un problème à l’aide de la barre latérale de la demande de tirage

Toute personne disposant d’autorisations d’accès en écriture à un dépôt peut lier manuellement une demande de tirage à un problème à partir de la barre latérale de celle-ci.

Vous pouvez lier manuellement jusqu’à dix problèmes à chaque demande de tirage. Le problème et la demande de tirage doivent se trouver dans le même référentiel.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
3. Dans la liste des demandes de tirage, cliquez sur la demande de tirage que vous souhaitez lier à un problème.
{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
4. Dans la barre latérale droite, dans la section « Développement », cliquez sur {% octicon "gear" aria-label="The Gear icon" %}.
{% else %}
4. Dans la barre latérale droite, cliquez sur **Problèmes liés**.
  ![Problèmes liés dans la barre latérale droite](/assets/images/help/pull_requests/linked-issues.png) {% endif %}
5. Cliquez sur le problème que vous souhaitez lier à la demande de tirage.
  ![Liste déroulante vers le problème de lien](/assets/images/help/pull_requests/link-issue-drop-down.png)

{% ifversion link-existing-branches-to-issue %}

## Liaison manuelle d’une demande de tirage ou branche à un problème à l’aide de la barre latérale du problème

Toute personne disposant d’autorisations d’accès en écriture à un dépôt peut lier manuellement une demande de tirage ou branche à un problème à partir de la barre latérale du problème.

Vous pouvez lier manuellement jusqu’à dix problèmes à chaque demande de tirage. Le problème peut se trouver dans un dépôt différent de la demande de tirage ou branche liée. Votre dernier dépôt sélectionné est mémorisé. 

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. Dans la liste des problèmes, cliquez sur celui auquel vous voulez lier une demande de tirage ou branche.
4. Dans la barre latérale droite, cliquez sur **Développement**.
  ![Menu Développement dans la barre latérale droite](/assets/images/help/issues/development-menu.png)
5. Cliquez sur le dépôt contenant la demande de tirage ou branche à lier au problème.
  ![Liste déroulante pour sélectionner le dépôt](/assets/images/help/issues/development-menu-select-repository.png)
6. Cliquez sur la demande de tirage ou branche que vous voulez lier au problème.
  ![Liste déroulante pour lier la demande de tirage ou branche](/assets/images/help/issues/development-menu-select-pr-or-branch.png)
7. Cliquez sur **Appliquer**.
  ![Appliquer](/assets/images/help/issues/development-menu-apply.png)

{% endif %}

## Pour aller plus loin

* « [Références et URL automatiquement liées](/articles/autolinked-references-and-urls/#issues-and-pull-requests) »
