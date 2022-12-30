---
title: Suivi des alertes d’analyse du code dans les problèmes en utilisant des listes de tâches
shortTitle: Track alerts in issues
intro: Vous pouvez ajouter des alertes d’analyse de code à des problèmes à l’aide de listes de tâches. Cela facilite la création d’un plan pour le travail de développement qui inclut la résolution des alertes.
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can track {% data variables.product.prodname_code_scanning %} alerts in issues using task lists.'
versions:
  feature: code-scanning-task-lists
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
  - Issues
ms.openlocfilehash: a5112bc5982415865a47d752af4e980a2e3d12ea
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145105014'
---
{% data reusables.code-scanning.beta-alert-tracking-in-issues %}

## À propos du suivi des alertes d’{% data variables.product.prodname_code_scanning %} dans les problèmes

{% data reusables.code-scanning.github-issues-integration %}

Vous pouvez également créer un problème pour suivre une alerte :
- À partir d’une alerte d’{% data variables.product.prodname_code_scanning %}, ce qui ajoute automatiquement l’alerte d’analyse du code à une liste de tâches dans le nouveau problème. Pour plus d’informations, consultez « [Création d’un problème de suivi à partir d’une alerte d’{% data variables.product.prodname_code_scanning %}](#creating-a-tracking-issue-from-a-code-scanning-alert) » ci-dessous.

- Par le biais de l’API comme vous le feriez normalement, et fournissez ensuite le lien d’analyse du code dans le corps du problème. Vous devez utiliser la syntaxe de la liste de tâches pour créer la relation suivie : 
   - `- [ ] <full-URL- to-the-code-scanning-alert>`
   - Par exemple, si vous ajoutez `- [ ] https://github.com/octocat-org/octocat-repo/security/code-scanning/17` à un problème, celui-ci suit l’alerte d’analyse du code qui a le numéro d’ID 17 sous l’onglet « Sécurité » du dépôt `octocat-repo` dans l’organisation `octocat-org`.

Vous pouvez utiliser plusieurs problèmes pour suivre la même alerte d’{% data variables.product.prodname_code_scanning %} et les problèmes peuvent appartenir à d’autres dépôts que celui où l’alerte d’{% data variables.product.prodname_code_scanning %} a été trouvée.


{% data variables.product.product_name %} fournit des indications visuelles à différents endroits de l’interface utilisateur pour indiquer quand vous suivez des alertes d’{% data variables.product.prodname_code_scanning %} dans les problèmes.

- La page de la liste des alertes d’analyse du code indique les alertes qui sont suivies dans les problèmes. Vous pouvez ainsi repérer rapidement les alertes nécessitant un traitement.

  ![Dispositif de suivi dans la page des alertes d’analyse du code](/assets/images/help/repository/code-scanning-alert-list-tracked-issues.png)

- Une section « Suivi dans » s’affiche également dans la page d’alerte correspondante. 

  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![Section « Suivi dans » dans la page des alertes d’analyse du code](/assets/images/help/repository/code-scanning-alert-tracked-in-pill.png) {% else %} ![Section « Suivi dans » dans la page des alertes d’analyse du code](/assets/images/enterprise/3.4/repository/code-scanning-alert-tracked-in-pill.png) {% endif %}

- Sur le problème de suivi, {% data variables.product.prodname_dotcom %} affiche une icône de badge de sécurité dans la liste des tâches et dans la fiche contextuelle. 
  
  {% note %}

  Seuls les utilisateurs disposant d’autorisations d’écriture sur le dépôt voient l’URL complète vers l’alerte dans le problème ainsi que la fiche contextuelle. Pour les utilisateurs disposant d’autorisations de lecture sur le dépôt ou dépourvus d’autorisations, l’alerte s’affiche sous la forme d’une URL simple.

  {% endnote %}
  
  L’icône est grise, car une alerte a l’état « ouvert » ou « fermé » sur chaque branche. Le problème suit une alerte, de sorte que l’alerte ne peut pas avoir un seul état ouvert/fermé dans le problème. Si l’alerte est fermée sur une branche, la couleur de l’icône ne change pas.

  ![Fiche contextuelle dans le problème de suivi](/assets/images/help/repository/code-scanning-tracking-issue-hovercard.png)

L’état de l’alerte suivie ne change pas si vous changez l’état de la case à cocher de l’élément de liste de tâches correspondant (coché/décoché) dans le problème.

## Création d’un problème de suivi à partir d’une alerte d’analyse de code

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %} {% ifversion fpt or ghes or ghae %} {% data reusables.code-scanning.explore-alert %}
1. Si vous le souhaitez, pour rechercher l’alerte à suivre, vous pouvez utiliser la recherche en texte libre ou les menus déroulants afin de filtrer et localiser l’alerte. Pour plus d’informations, consultez « [Gestion des alertes d’analyse du code pour votre dépôt](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-code-scanning-alerts) ».
{% endif %}
1. En haut de la page, sur le côté droit, cliquez sur **Créer un problème**. 
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![Créer un problème de suivi pour l’alerte d’analyse de code](/assets/images/help/repository/code-scanning-create-issue-for-alert.png) {% else %} ![Créer un problème de suivi pour l’alerte d’analyse de code](/assets/images/enterprise/3.4/repository/code-scanning-create-issue-for-alert.png) {% endif %} {% data variables.product.prodname_dotcom %} crée automatiquement un problème pour suivre l’alerte et ajoute l’alerte en tant qu’élément de liste de tâches.
   {% data variables.product.prodname_dotcom %} préremplit le problème :
   - Le titre contient le nom de l’alerte d’{% data variables.product.prodname_code_scanning %}.
   - Le corps contient l’élément de liste de tâches avec l’URL complète vers l’alerte d’{% data variables.product.prodname_code_scanning %}. 
2. Si vous le souhaitez, modifiez le titre et le corps du problème.
   {% warning %}

    **Avertissement :** Vous pouvez modifier le titre du problème, car il peut exposer des informations de sécurité. Vous pouvez également modifier le corps du problème, mais ne modifiez pas l’élément de liste de tâches, sinon le problème ne suivrait plus l’alerte.
   {% endwarning %}

   ![Nouveau problème de suivi pour l’alerte d’analyse du code](/assets/images/help/repository/code-scanning-new-tracking-issue.png)
3. Cliquez sur **Envoyer le nouveau problème**.
