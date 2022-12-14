---
title: Informationen zur Organisationsmitgliedschaft
intro: You can become a member of an organization to collaborate with coworkers or open-source contributors across many repositories at once.
redirect_from:
- /articles/about-organization-membership
- /github/setting-up-and-managing-your-github-user-account/about-organization-membership
- /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/about-organization-membership
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Organization membership
ms.openlocfilehash: 6a7afd8aee12e2c471f564122fb21f07d710f808
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088812"
---
Ein Organisationsinhaber kann Dich einladen, seiner Organisation als Mitglied, Abrechnungsmanager oder Inhaber beizutreten. Ein Organisationsinhaber oder Mitglied mit Administratorberechtigungen für ein Repository kann Dich einladen, als externer Mitarbeiter in einem oder mehreren Repositorys zusammenzuarbeiten. Weitere Informationen findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).

Auf Deiner Profilseite kannst Du auf Organisationen zugreifen, denen Du angehörst. Weitere Informationen findest Du unter [Zugreifen auf eine Organisation](/articles/accessing-an-organization).

Wenn Du eine Einladung annimmst, einer Organisation beizutreten, können die Inhaber der Organisation unter Umständen Folgendes sehen:

- Deine öffentlichen Profilinformationen
- Ihre E-Mail-Adresse
- Ob die Zwei-Faktor-Authentifizierung bei Dir aktiviert hast
- Repositorys, auf die Du innerhalb der Organisation Zugriff hast, und Deine Zugriffsebene
- Bestimmte Aktivitäten innerhalb der Organisation
- Das Land der Antragstellung
- Deine IP-Adresse

Weitere Informationen findest Du in den <a href="/articles/github-privacy-statement/" class="dotcom-only">{% data variables.product.prodname_dotcom %}-Datenschutzbestimmungen</a>.

  {% note %}

  **Hinweis:** Inhaber können die IP-Adressen der Mitglieder nicht im Auditprotokoll der Organisation anzeigen. Bei einem Sicherheitsvorfall, beispielsweise einer Kontokompromittierung oder einer versehentlichen Weitergabe vertraulicher Daten, können Unternehmensinhaber Details zum Zugriff auf private Repositorys anfordern. Zu den von uns übermittelten Informationen kann auch Deine IP-Adresse gehören.

  {% endnote %}

Die Sichtbarkeit Deiner Mitgliedschaft in einer Organisation ist standardmäßig auf privat eingestellt. Du kannst wählen, ob Du einzelne Mitgliedschaften in Organisationen in Deinem Profil veröffentlichen möchtest. Weitere Informationen findest Du unter "[Veröffentlichen oder Ausblenden der Organisationsmitgliedschaft](/articles/publicizing-or-hiding-organization-membership)".

{% ifversion fpt or ghec %}

Wenn Deine Organisation zu einem Enterprise-Konto gehört, bist Du automatisch Mitglied des Enterprise-Kontos und für Inhaber des Enterprise-Kontos sichtbar. Weitere Informationen findest Du unter [Informationen zu Unternehmenskonten](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion fpt %} in der Dokumentation zu {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}

{% endif %}

Du kannst eine Organisation jederzeit verlassen. Weitere Informationen findest Du unter "[Entfernen der eigenen Person aus einer Organisation](/articles/removing-yourself-from-an-organization)".

## <a name="further-reading"></a>Weiterführende Themen

- "[Informationen zu Organisationen](/articles/about-organizations)"
- "[Verwalten Deiner Mitgliedschaft in Organisationen](/articles/managing-your-membership-in-organizations)"
