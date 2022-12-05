---
title: Clôture d’un incident
intro: 'Vous pouvez fermer un problème lorsque des bogues sont corrigés, des commentaires sont activés ou pour montrer que le travail n’est pas planifié.'
permissions: 'Anyone can close an issue they opened.<br><br>Repository owners, collaborators on repositories owned by a personal account, and people with triage permissions or greater on repositories owned by an organization can close issues opened by others. {% data reusables.enterprise-accounts.emu-permission-repo %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Issues
  - Project management
shortTitle: Close an issue
ms.openlocfilehash: 889775474dc94f10c62e59916e1fa13b263b3474
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060425'
---
{% note %}

**Remarque :** Vous pouvez également fermer automatiquement les problèmes liés aux mots clés dans les demandes de tirage et les messages de validation. Pour plus d’informations, consultez « [Liaison d’une demande de tirage à un problème](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword#linking-a-pull-request-to-an-issue-using-a-keyword) ».

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
1. Dans la liste des problèmes, cliquez sur le problème à fermer.
{%- ifversion issue-close-reasons %}
1. Si vous souhaitez modifier la raison de la fermeture du problème, sélectionnez {% octicon "triangle-down" aria-label="The down triangle octicon" %} à côté de « Fermer le problème » et cliquez sur un motif.
   ![Capture d’écran montrant le menu déroulant contenant les raisons de fermeture du problème](/assets/images/help/issues/close-issue-select-reason.png)
2. Cliquez sur **Fermer le problème**.
   ![Capture d’écran montrant le bouton « Fermer le problème »](/assets/images/help/issues/close-issue-with-reason.png) {%- else %}
1. En bas de la page, cliquez sur **Fermer le problème**.
   ![Capture d’écran montrant le bouton « Fermer le problème »](/assets/images/help/issues/close-issue.png) {% endif %}
