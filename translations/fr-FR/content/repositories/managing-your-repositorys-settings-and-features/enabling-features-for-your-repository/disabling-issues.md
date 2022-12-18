---
title: Désactivation des problèmes
intro: Vous souhaiterez peut-être désactiver les problèmes pour votre dépôt si vous n’acceptez pas les contributions ou les rapports de bogues.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/disabling-issues
  - /articles/disabling-issues
  - /github/managing-your-work-on-github/disabling-issues
  - /github/administering-a-repository/managing-repository-settings/disabling-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: a706b1431f4f43c9866fb6ef0f01f6d25d6edc46
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881827'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Sous Fonctionnalités, désactivez la case **Problèmes** .
  ![Case à cocher Supprimer les problèmes](/assets/images/help/issues/issues_settings_remove_from_repo.png)

Si vous décidez de réactiver les problèmes à l’avenir, tous les problèmes précédemment ajoutés seront disponibles.

{% ifversion fpt or ghec %}

{% tip %}

Veuillez contacter {% data variables.contact.contact_support %} si vous souhaitez désactiver les problèmes en raison d’un abus d’étrangers.
{% data reusables.policies.abuse %}

{% endtip %}

{% endif %}
