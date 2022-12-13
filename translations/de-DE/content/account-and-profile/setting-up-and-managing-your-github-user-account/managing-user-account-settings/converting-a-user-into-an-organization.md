---
title: Benutzer in eine Organisation umwandeln
redirect_from:
- /articles/what-is-the-difference-between-create-new-organization-and-turn-account-into-an-organization
- /articles/explaining-the-account-transformation-warning
- /articles/converting-a-user-into-an-organization
- /github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/converting-a-user-into-an-organization
intro: You can convert your personal account into an organization. This allows more granular permissions for repositories that belong to the organization.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: User into an organization
ms.openlocfilehash: 0c167e3e389230e6ac2dccb9f1f2f3dc67791bd0
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145068793"
---
{% warning %}

**Warnung**: Bevor du einen Benutzer in eine Organisation umwandelst, ist Folgendes zu beachten:

 - Du kannst dich **nicht mehr** bei dem konvertierten persönlichen Konto anmelden.
 - Du kannst **keine** Gists mehr erstellen oder ändern, die dem konvertierten persönlichen Konto gehören.
 - Eine Organisation **kann nicht** wieder in einen Benutzer konvertiert werden.
 - Die SSH-Schlüssel, OAuth-Token, das Auftragsprofil, Reaktionen und die zugehörigen Benutzerinformationen werden **nicht** auf die Organisation übertragen. Dies gilt nur für das persönliche Konto, das umgewandelt wird, nicht für die Mitarbeiter des persönlichen Kontos.
 - Alle mit dem konvertierten persönlichen Konto vorgenommenen Commits sind **nicht mehr** mit diesem Konto verknüpft. Die Commits selbst bleiben **erhalten**.
 - Alle Forks privater Repositorys, die mit dem konvertierten persönlichen Konto vorgenommen wurden, werden gelöscht.

{% endwarning %}

## <a name="keep-your-personal-account-and-create-a-new-organization-manually"></a>Beibehalten des persönlichen Kontos und manuelles Erstellen einer neuen Organisation

Wenn Du möchtest, dass Deine Organisation denselben Namen aufweist, den Du zurzeit für Dein persönliches Konto verwendest, oder wenn Du die Informationen Deines persönlichen Kontos beibehalten möchtest, musst Du eine neue Organisation erstellen und Deine Repositorys auf diese Organisation übertragen, anstatt Dein persönliches Konto in eine Organisation umzuwandeln.

1. Um den Namen Deines aktuellen persönlichen Kontos für den persönlichen Gebrauch beizubehalten, [ändere den Namen Deines persönlichen Kontos](/articles/changing-your-github-username) in einen neuen Namen Deiner Wahl.
2. [Erstelle eine neue Organisation](/articles/creating-a-new-organization-from-scratch) mit dem ursprünglichen Namen Deines persönlichen Kontos.
3. [Übertrage Deine Repositorys](/articles/transferring-a-repository) auf Dein neues Organisationskonto.

## <a name="convert-your-personal-account-into-an-organization-automatically"></a>Das persönliche Konto automatisch in eine Organisation umwandeln

Du kannst Dein persönliches Konto auch direkt in eine Organisation umwandeln. Beim Umwandeln Deines Kontos geschieht Folgendes:
 - Die Repositorys werden so beibehalten, wie sie sind, ohne dass Du sie manuell an ein anderes Konto übertragen musst
 - Mitarbeiter werden automatisch zu Teams eingeladen, deren Berechtigungen ihren bisherigen Berechtigungen entsprechen.{% ifversion fpt or ghec %}- Bei persönlichen Konten auf {% data variables.product.prodname_pro %} wird die Abrechnung automatisch auf [das kostenpflichtige {% data variables.product.prodname_team %}](/articles/about-billing-for-github-accounts) umgestellt, ohne dass Du die Zahlungsinformationen erneut eingeben, Deinen Abrechnungszeitraum anpassen oder doppelt zahlen musst.{% endif %}

1. Erstelle ein neues persönliches Konto, mit dem Du Dich nach der Umwandlung bei GitHub anmelden und auf die Organisation und Deine Repositorys zugreifst.
2.  [Verlasse Organisationen](/articles/removing-yourself-from-an-organization), denen das persönliche Konto, das du umwandeln möchtest, beigetreten ist.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %}
5. Klicke unter "Transform account" (Konto transformieren) auf **<username> Turn into an organization** (In eine Organisation umwandeln).
    ![Schaltfläche zur Organisationsumwandlung](/assets/images/help/settings/convert-to-organization.png)
6. Überprüfe und bestätige im Dialogfeld „Account Transformation Warning“ (Warnung zur Kontoumwandlung) die Umwandlung. Beachte, dass die Informationen in diesem Feld mit der Warnung oben in diesem Artikel übereinstimmt.
    ![Warnung zur Umwandlung](/assets/images/help/organizations/organization-account-transformation-warning.png)
7. Wähle auf der Seite „Transform your user into an organization“ (Benutzer in eine Organisation umwandeln) unter „Choose an organization owner“ (Organisationsinhaber auswählen) entweder das sekundäre persönliche Konto, das Du im vorherigen Abschnitt erstellt hast, oder einen anderen vertrauenswürdigen Benutzer für die Verwaltung der Organisation aus.
    ![Seite zum Hinzufügen eines Organisationsbesitzers](/assets/images/help/organizations/organization-add-owner.png)
8. Wähle das Abonnement der neuen Organisation aus, und gib auf Aufforderung Deine Abrechnungsinformationen ein.
9. Klicke auf **Create Organization** (Organisation erstellen).
10. Melde Dich bei dem neuen persönlichen Konto an, das Du in Schritt 1 erstellt hast, und greife dann mithilfe des Kontextwechsels auf Deine neue Organisation zu.

{% tip %}

**Tipp**: Wenn Du ein persönliches Konto in eine Organisation umwandelst, fügen wir Mitarbeiter für Repositorys, die zum Konto gehören, der neuen Organisation als *externe Mitarbeiter* hinzu. Anschließend kannst Du optional *externe Mitarbeiter* dazu einladen, Mitglieder Deiner neuen Organisation zu werden. Weitere Informationen findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators).

{% endtip %}

## <a name="further-reading"></a>Weiterführende Themen
- "[Einrichten von Teams](/articles/setting-up-teams)" {% ifversion fpt or ghec %}- "[Einladen von Benutzern zur Teilnahme an Deiner Organisation](/articles/inviting-users-to-join-your-organization)"{% endif %}
- "[Zugreifen auf eine Organisation](/articles/accessing-an-organization)"
