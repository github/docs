---
title: Benutzer in eine Organisation umwandeln
redirect_from:
  - /articles/what-is-the-difference-between-create-new-organization-and-turn-account-into-an-organization/
  - /articles/explaining-the-account-transformation-warning/
  - /articles/converting-a-user-into-an-organization
  - /github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization
intro: 'Du kannst Dein Benutzerkonto in eine Organisation umwandeln. Dadurch sind feiner abgestufte Berechtigungen für Repositorys möglich, die zu der Organisation gehören.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Accounts
---
{% warning %}

**Warnung:** Bevor Du einen Benutzer in eine Organisation umwandelst, beachte Folgendes:

 - Du kannst Dich **nicht mehr** beim umgewandelten Benutzerkonto anmelden.
 - Du kannst **keine** Gists mehr erstellen oder ändern, die zum umgewandelten Benutzerkonto gehören.
 - Eine Organisation **kann nicht** zurück in einen Benutzer umgewandelt werden.
 - The SSH keys, OAuth tokens, job profile,  reactions, and associated user information, **will not** be transferred to the organization. Dies gilt nur für das Benutzerkonto, das umgewandelt wird, nicht für die Mitarbeiter des Benutzerkontos.
 - Alle Commits, die mit dem umgewandelten Benutzerkonto vorgenommen wurden, **sind nicht mehr** mit diesem Konto verknüpft. Die Commits selbst **bleiben** intakt.

{% endwarning %}

### Das persönliche Benutzerkonto behalten und manuell eine neue Organisation erstellen

Wenn Du möchtest, dass Deine Organisation denselben Namen aufweist, den Du aktuell für Dein persönliches Konto verwendest, oder wenn Du die Informationen Deines persönlichen Benutzerkontos intakt halten möchtest, musst Du eine neue Organisation erstellen und Deine Repositorys in diese Organisation übertragen, anstatt Dein Benutzerkonto in eine Organisation umzuwandeln.

1. Um den aktuellen Namen Deines Benutzerkontos für den persönlichen Gebrauch zu behalten, [ändere den Namen Deines persönlichen Benutzerkontos](/articles/changing-your-github-username) in einen neuen Namen, der Dir gefällt.
2. [Erstelle eine neue Organisation](/articles/creating-a-new-organization-from-scratch) mit dem ursprünglichen Namen Deines persönlichen Benutzerkontos.
3. [Übertrage Deine Repositorys](/articles/transferring-a-repository) in Dein neues Organisationskonto.

### Das persönliche Konto automatisch in eine Organisation umwandeln

Du kannst Dein persönliches Benutzerkonto auch direkt in eine Organisation umwandeln. Beim Umwandeln Deines Kontos geschieht Folgendes:
 - Die Repositorys werden so beibehalten, wie sie sind, ohne dass Du sie manuell an ein anderes Konto übertragen musst
 - Es werden automatisch Mitarbeiter zu Teams eingeladen, wobei die Berechtigungen den bisherigen Berechtigungen entsprechen.
 {% if currentVersion == "free-pro-team@latest" %}– Bei Benutzerkonten auf {% data variables.product.prodname_pro %} wird die Abrechnung automatisch auf [das bezahlte {% data variables.product.prodname_team %}](/articles/about-billing-for-github-accounts) umgestellt, ohne dass Du die Zahlungsinformationen erneut eingeben, Deinen Abrechnungszeitraum anpassen oder doppelt bezahlen musst.{% endif %}

1. Erstelle ein neues persönliches Konto, mit dem Du Dich nach der Umwandlung bei GitHub anmelden und auf die Organisation und Deine Repositorys zugreifst.
2.  [Verlasse alle Organisationen](/articles/removing-yourself-from-an-organization), denen das Benutzerkonto angehört, das Du gerade umwandelst.
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
5. Klicke unter „Transform account“ (Konto umwandeln) auf **Turn <username> into an organization** (Benutzer in eine Organisation umwandeln). ![Schaltfläche „Organization conversion" (Umwandeln in eine Organisation)](/assets/images/help/settings/convert-to-organization.png)
6. Überprüfe und bestätige im Dialogfeld „Account Transformation Warning“ (Warnung zur Kontoumwandlung) die Umwandlung. Beachte, dass die Informationen in diesem Feld mit der Warnung oben in diesem Artikel übereinstimmt. ![Warnung zur Umwandlung](/assets/images/help/organizations/organization-account-transformation-warning.png)
7. Wähle auf der Seite „Transform your user into an organization“ (Benutzer in eine Organisation umwandeln) unter „Choose an organization owner“ (Organisationsinhaber auswählen) entweder das sekundäre persönliche Konto, das Du im vorherigen Abschnitt erstellt hast, oder einen anderen vertrauenswürdigen Benutzer für die Verwaltung der Organisation aus. ![Seite „Add organization owner" (Hinzufügen eines Organisationsinhabers)](/assets/images/help/organizations/organization-add-owner.png)
8. Wähle das Abonnement der neuen Organisation aus, und gib auf Aufforderung Deine Abrechnungsinformationen ein.
9. Klicke auf **Create Organization** (Organisation erstellen).
10. Melde Dich bei dem neuen Benutzerkonto an, das Du in Schritt 1 erstellt hast, und greife dann mithilfe des Kontextumschalters auf Deine neue Organisation zu.

{% tip %}

**Tipp:** Wenn Du ein Benutzerkonto in eine Organisation umwandelst, fügen wir Mitarbeiter von Repositorys, die zum Konto gehören, als *externe Mitarbeiter* zur neuen Organisation hinzu. Du kannst dann *externe Mitarbeiter* dazu einladen, Mitglieder Deiner neuen Organisation zu werden. Weitere Informationen findest Du unter „[Berechtigungsebenen für eine Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization#outside-collaborators)."

{% endtip %}

### Weiterführende Informationen
- „[Teams einrichten](/articles/setting-up-teams)“
{% if currentVersion == "free-pro-team@latest" %}- „[Benutzer zum Beitritt zu Deiner Organisation einladen](/articles/inviting-users-to-join-your-organization)“{% endif %}
- „[Auf eine Organisation zugreifen](/articles/accessing-an-organization)“
