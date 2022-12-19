---
title: Löschen eines Organisationskontos
intro: 'Wenn Du eine Organisation löschst, werden alle Repositorys, Forks von privaten Repositorys, Wikis, Issues, Pull Requests und Projekt- respektive Organisationsseiten ebenfalls gelöscht. {% ifversion fpt or ghec %}Deine Abrechnung endet, und nach 90 Tagen ist der Organisationsname für ein neues Benutzer- oder Organisationskonto verfügbar.{% endif %}'
redirect_from:
  - /articles/deleting-an-organization-account
  - /github/setting-up-and-managing-organizations-and-teams/deleting-an-organization-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Delete organization
ms.openlocfilehash: e923dcf7fb9135243c5bfe0e68a310719e87ef2e
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: '145101467'
---
{% ifversion fpt or ghec %} {% tip %}

**Tipp**: Wenn du dein kostenpflichtiges Abonnement kündigen möchtest, kannst du [deine Organisation auf {% data variables.product.prodname_free_team %} herunterstufen](/articles/downgrading-your-github-subscription), anstatt die Organisation und deren Inhalt zu löschen.

{% endtip %}

{% endif %}

## 1. Sichere die Inhalte deiner Organisation

{% ifversion not ghes %} Nachdem du eine Organisation gelöscht hast, kann {% data variables.product.company_short %} **deine Inhalte nicht wiederherstellen**. Bevor du also{% else %}Bevor du{% endif %} deine Organisation löschst, stelle sicher, dass du eine Kopie aller Repositorys, Wikis, Issues und Projektboards des Kontos besitzt.

{% ifversion ghes %} {% note %}

**Hinweis:** Falls erforderlich, kann ein Websiteadministrator für {% data variables.product.product_location %} eine gelöschte Organisation vielleicht teilweise wiederherstellen. Weitere Informationen findest du unter [Wiederherstellen einer gelöschten Organisation](/admin/user-management/managing-organizations-in-your-enterprise/restoring-a-deleted-organization).

{% endnote %} {% endif %}

## 2. Lösche die Organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. Klicke unten auf der Seite mit den Einstellungen der Organisation auf **Diese Organisation löschen**.
   ![Schaltfläche „Diese Organisation löschen“](/assets/images/help/settings/settings-organization-delete.png)
