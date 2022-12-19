---
title: Issues deaktivieren
intro: 'Du kannst Issues für dein Repository deaktivieren, wenn du keine Beiträge oder Fehlerberichte akzeptierst.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881828'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Deaktiviere unter „Funktionen“ das Kontrollkästchen **Issues**.
  ![Kontrollkästchen zum Entfernen von Issues](/assets/images/help/issues/issues_settings_remove_from_repo.png)

Wenn Du Issues zukünftig erneut aktivieren möchtest, sind alle Issues wieder verfügbar, die zuvor hinzugefügt wurden.

{% ifversion fpt or ghec %}

{% tip %}

Wende Dich an {% data variables.contact.contact_support %}, wenn Du Issues wegen missbräuchlicher Verwendung durch Fremde deaktivieren möchtest.
{% data reusables.policies.abuse %}

{% endtip %}

{% endif %}
