---
title: Suppression d’une exécution de workflow
intro: 'Vous pouvez supprimer une exécution de workflow qui s’est achevée, ou qui date de plus de deux semaines.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 54e494b2cff73650c0b9d5e46c8ce2772926831f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145105190'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %}
1. Pour supprimer une exécution de workflow, utilisez le menu déroulant {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} et sélectionnez **Supprimer une exécution de workflow**.

    ![Suppression d’une exécution de workflow](/assets/images/help/settings/workflow-delete-run.png)
2. Consultez l’invite de confirmation et cliquez sur **Oui, supprimer définitivement cette exécution de workflow**.

    ![Confirmation de la suppression d’une exécution de workflow](/assets/images/help/settings/workflow-delete-run-confirmation.png)
