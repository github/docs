---
title: Benutzer in eine Organisation umwandeln
redirect_from:
  - /articles/what-is-the-difference-between-create-new-organization-and-turn-account-into-an-organization
  - /articles/explaining-the-account-transformation-warning
  - /articles/converting-a-user-into-an-organization
  - /github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/converting-a-user-into-an-organization
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/converting-a-user-into-an-organization
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/converting-a-user-into-an-organization
intro: 'Du kannst dein persönliches Konto in ein Organisationskonto umwandeln. Dadurch sind feiner abgestufte Berechtigungen für Repositorys möglich, die der Organisation gehören.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: User into an organization
ms.openlocfilehash: 8b99bd119a9fa061c025a4fcc299d7ace31d23eb
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147687127'
---
{% warning %}

**Warnung:** Bevor du ein Benutzerkonto in ein Organisationskonto umwandelst, ist Folgendes zu beachten:

* Du kannst dich **nicht mehr** bei dem konvertierten persönlichen Konto anmelden.
* Du kannst **keine** Gists mehr erstellen oder ändern, die dem konvertierten persönlichen Konto gehören.
* Eine Organisation **kann nicht** wieder in einen Benutzer konvertiert werden.
* Die SSH-Schlüssel, die OAuth-Token, das Auftragsprofil, die Reaktionen und die zugehörigen Benutzerinformationen werden **nicht** an die Organisation übertragen. Dies gilt nur für das persönliche Konto, das umgewandelt wird, nicht für die Mitarbeiter des persönlichen Kontos.
* Alle mit dem konvertierten persönlichen Konto vorgenommenen Commits sind **nicht mehr** mit diesem Konto verknüpft. Die Commits selbst bleiben **erhalten**.
* Alle bestehenden, mit dem konvertierten persönlichen Konto verfassten Kommentare sind **nicht mehr** mit diesem Konto verknüpft. Die Kommentare selbst bleiben **erhalten**, werden jedoch dem `ghost`-Benutzer zugeordnet.
* Alle Forks privater Repositorys, die mit dem konvertierten persönlichen Konto vorgenommen wurden, werden gelöscht.
{% endwarning %}

{% ifversion fpt or ghec or ghes %}
## Beibehalten des persönlichen Kontos und manuelles Erstellen einer neuen Organisation

Wenn du möchtest, dass deine Organisation denselben Namen aufweist, den du zurzeit für dein persönliches Konto verwendest, oder wenn du die Informationen deines persönlichen Kontos beibehalten möchtest, musst du eine neue Organisation erstellen und deine Repositorys auf diese Organisation übertragen, anstatt dein persönliches Konto in eine Organisation umzuwandeln.

1. Um den Namen deines aktuellen persönlichen Kontos für den persönlichen Gebrauch beizubehalten, [ändere den Namen deines persönlichen Kontos](/articles/changing-your-github-username) in einen neuen Namen deiner Wahl.
2. [Erstelle eine neue Organisation](/articles/creating-a-new-organization-from-scratch) mit dem ursprünglichen Namen deines persönlichen Kontos.
3. [Übertrage deine Repositorys](/articles/transferring-a-repository) auf dein neues Organisationskonto.{% endif %}

## Das persönliche Konto automatisch in eine Organisation umwandeln

Du kannst dein persönliches Konto auch direkt in eine Organisation umwandeln. Beim Umwandeln deines Kontos geschieht Folgendes:
 - Die Repositorys werden so beibehalten, wie sie sind, ohne dass du sie manuell an ein anderes Konto übertragen musst
 - Mitarbeiter*innen werden automatisch zu Teams eingeladen. Ihre Berechtigungen entsprechen dabei ihren bisherigen.{% ifversion fpt or ghec %} Bei persönlichen Konten auf {% data variables.product.prodname_pro %} wird die Abrechnung automatisch auf [das kostenpflichtige Produkt {% data variables.product.prodname_team %}](/articles/about-billing-for-github-accounts) umgestellt, ohne dass du die Zahlungsinformationen erneut eingeben, deinen Abrechnungszeitraum anpassen oder doppelt zahlen musst.{% endif %}

1. Erstelle ein neues persönliches Konto, mit dem du Dich nach der Umwandlung bei GitHub anmelden und auf die Organisation und deine Repositorys zugreifst.
2.  [Verlasse Organisationen](/articles/removing-yourself-from-an-organization), denen das persönliche Konto, das du umwandeln möchtest, beigetreten ist.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %}
5. Klicke unter "Transform account" (Konto transformieren) auf **<username> Turn into an organization** (In eine Organisation umwandeln).
    ![Schaltfläche zur Organisationsumwandlung](/assets/images/help/settings/convert-to-organization.png)
6. Überprüfe und bestätige im Dialogfeld „Account Transformation Warning“ (Warnung zur Kontoumwandlung) die Umwandlung. Beachte, dass die Informationen in diesem Feld mit der Warnung oben in diesem Artikel übereinstimmt.
    ![Warnung zur Umwandlung](/assets/images/help/organizations/organization-account-transformation-warning.png)
7. Wähle auf der Seite „Transform your user into an organization“ (Benutzer in eine Organisation umwandeln) unter „Choose an organization owner“ (Organisationsinhaber auswählen) entweder das sekundäre persönliche Konto, das du im vorherigen Abschnitt erstellt hast, oder einen anderen vertrauenswürdigen Benutzer für die Verwaltung der Organisation aus.
    ![Seite zum Hinzufügen eines Organisationsbesitzers](/assets/images/help/organizations/organization-add-owner.png)
8. Wähle das Abonnement der neuen Organisation aus, und gib auf Aufforderung deine Abrechnungsinformationen ein.
9. Klicke auf **Create Organization** (Organisation erstellen).
10. Melde Dich bei dem neuen persönlichen Konto an, das du in Schritt 1 erstellt hast, und greife dann mithilfe des Kontextwechsels auf deine neue Organisation zu.

{% tip %}

**Tipp**: Wenn du ein persönliches Konto in eine Organisation umwandelst, fügen wir Mitarbeiter für Repositorys, die zum Konto gehören, der neuen Organisation als *externe Mitarbeiter* hinzu. Anschließend kannst du optional *externe Mitarbeiter* dazu einladen, Mitglieder deiner neuen Organisation zu werden. Weitere Informationen findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators).

{% endtip %}

## Weitere Informationsquellen
- "[Einrichten von Teams](/articles/setting-up-teams)" {% ifversion fpt or ghec %}- "[Einladen von Benutzern zur Teilnahme an deiner Organisation](/articles/inviting-users-to-join-your-organization)"{% endif %}
- "[Zugreifen auf eine Organisation](/articles/accessing-an-organization)"
