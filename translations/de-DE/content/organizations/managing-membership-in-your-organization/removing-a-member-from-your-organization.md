---
title: Entfernen eines Mitglieds aus deiner Organisation
intro: 'Wenn Mitglieder deiner Organisation keinen Zugriff mehr auf die Repositorys deiner Organisation benötigen, kannst du sie aus der Organisation entfernen.'
redirect_from:
  - /articles/removing-a-member-from-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/removing-a-member-from-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Remove a member
permissions: Organization owners can remove members from an organization.
ms.openlocfilehash: 4266172bc2bae6fb95506b98309533919309ccfc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064698'
---
{% ifversion fpt or ghec %}

{% warning %}

**Warnung:** Wenn du Mitglieder aus einer Organisation entfernst:
- Die Anzahl der bezahlten Lizenzen wird nicht automatisch heruntergesetzt. Folge den Schritten unter [Verringern der Anzahl kostenpflichtiger Arbeitsplätze deiner Organisation](/articles/downgrading-your-organization-s-paid-seats), um nach dem Entfernen von Benutzern aus der Organisation für weniger Lizenzen zu bezahlen.
- Entfernte Mitglieder verlieren den Zugriff auf private Forks zu den Repositorys deiner Organisation, nicht jedoch auf ihre eigenen lokalen Kopien. Eine Synchronisation ihrer lokalen Kopien mit den Repositorys deiner Organisation ist allerdings nicht mehr möglich. Ihre privaten Forks können wiederhergestellt werden, wenn die Benutzer*innen innerhalb von drei Monaten nach dem Entfernen aus der Organisation [als Organisationsmitglieder reaktiviert](/articles/reinstating-a-former-member-of-your-organization) werden. Es untersteht deiner Verantwortung, dafür Sorge zu tragen, dass die Personen, denen du den Zugriff auf ein Repository entziehst, vertrauliche Informationen oder geistiges Eigentum von ihren Systemen löschen.
- Wenn private Repositorys für andere Organisationen geforkt werden, können diese Organisationen den Zugriff auf das Forknetzwerk steuern. Dies bedeutet, dass Benutzer den Zugriff auf die Forks auch nach dem Verlust des Zugriffs auf die ursprüngliche Organisation behalten können, da sie weiterhin explizit Zugriff über einen Fork haben. {%- ifversion ghec %}
-  Entfernte Mitglieder verlieren auch den Zugriff auf private Forks der internen Repositorys deiner Organisation, wenn das entfernte Mitglied kein Mitglied einer anderen Organisation ist, die sich im Besitz desselben Unternehmenskontos befindet. Weitere Informationen findest du unter [Informationen zu Unternehmenskonten](/admin/overview/about-enterprise-accounts).
{%- endif %}
- Alle nicht akzeptierten Organisationseinladungen, die von einem entfernten Mitglied gesendet wurden, werden abgebrochen und sind nicht zugänglich.

{% endwarning %}

{% else %}

{% warning %}

**Warnung:** Wenn du Mitglieder aus einer Organisation entfernst:
 - Entfernte Mitglieder verlieren den Zugriff auf private Forks zu den Repositorys deiner Organisation, nicht jedoch auf ihre eigenen lokalen Kopien. Eine Synchronisation ihrer lokalen Kopien mit den Repositorys deiner Organisation ist allerdings nicht mehr möglich. Ihre privaten Forks können wiederhergestellt werden, wenn die Benutzer*innen innerhalb von drei Monaten nach dem Entfernen aus der Organisation [als Organisationsmitglieder reaktiviert](/articles/reinstating-a-former-member-of-your-organization) werden. Es untersteht deiner Verantwortung, dafür Sorge zu tragen, dass die Personen, denen du den Zugriff auf ein Repository entziehst, vertrauliche Informationen oder geistiges Eigentum von ihren Systemen löschen.
- Entfernte Mitglieder verlieren auch den Zugriff auf private Forks der internen Repositorys deiner Organisation, wenn das entfernte Mitglied kein Mitglied einer anderen Organisation in deinem Unternehmen ist.
 - Alle nicht akzeptierten Organisationseinladungen, die von einem entfernten Benutzer gesendet wurden, werden abgebrochen und sind nicht zugänglich.

{% endwarning %}

{% endif %}

{% ifversion fpt or ghec %}

Um einer Person, die deine Organisation verlässt, den Umstieg zu erleichtern und sicherzustellen, dass sie vertrauliche Informationen oder geistiges Eigentum von ihren Systemen löscht, empfehlen wir Dir die Bereitstellung einer Checkliste mit Best Practices zum Verlassen deiner Organisation. Ein Beispiel findest du unter [Bewährte Methoden zum Verlassen deines Unternehmens](/articles/best-practices-for-leaving-your-company/).

{% endif %}

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}

## Einem Benutzer die Mitgliedschaft entziehen

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Wähle das oder die Mitglieder aus, die du aus deiner Organisation entfernen möchtest.
  ![Liste der Mitglieder mit zwei ausgewählten Mitgliedern](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Klicke im Dropdownmenü über der Mitgliederliste auf **Aus Organisation entfernen**.
  ![Dropdownmenü mit Option zum Entfernen von Mitgliedern](/assets/images/help/teams/user-bulk-management-options.png)
6. Prüfe die zum Entfernen ausgewählten Mitglieder, und klicke auf **Mitglieder entfernen**.
  ![Liste der zu entfernenden Mitglieder und Schaltfläche „Mitglieder entfernen“](/assets/images/help/teams/confirm-remove-members-bulk.png)

## Weitere Informationsquellen

- [Entfernen von Organisationsmitgliedern aus einem Team](/articles/removing-organization-members-from-a-team){% ifversion remove-enterprise-members %}
- [Entfernen eines Mitglieds aus deinem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise){% endif %}
