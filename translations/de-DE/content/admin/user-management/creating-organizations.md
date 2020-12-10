---
title: Organisationen erstellen
redirect_from:
  - /enterprise/admin/articles/creating-organizations/
  - /enterprise/admin/user-management/creating-organizations
intro: Sie können eine neue Organisation einrichten oder ein vorhandenes persönliches Konto in eine Organisation umwandeln.
versions:
  enterprise-server: '*'
---

Eine Organisation ist eine Sammlung von Benutzerkonten, der Repositorys gehören. Organisationen besitzen mindestens einen Inhaber, der über Verwaltungsberechtigungen für die Organisation verfügt. Organisationen können auch zum Namespacing verwendet werden, so gelangen Sie beispielsweise mit `http(s)://[hostname]/[organization name]/` zum Profil einer Organisation auf {% data variables.product.prodname_ghe_server %}. Demgegenüber gelangen Sie mit `http(s)://[hostname]/[organization name]/[repository name]/` zum Profil eines Repositorys.

Wenn Sie eine Organisation erstellen, sind dieser keine Repositorys zugeordnet. [Mitglieder der Organisation mit der Inhaberrolle können neue Repositorys jederzeit hinzufügen](/enterprise/{{ currentVersion }}/user/articles/permission-levels-for-an-organization) oder vorhandene Repositorys übertragen. Weitere Informationen finden Sie unter „[Repository übertragen](/enterprise/{{ currentVersion }}/user/articles/transferring-a-repository)“.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
3. Klicke im Abschnitt „Organizations“ (Organisationen) auf **New organization** (Neue Organisation). ![Schaltfläche „New organization“ (Neue Organisation)](/assets/images/help/settings/new-org-button.png)
4. Legen Sie unter „Organization name“ (Organisationsname) einen Namen für die Organisation fest.![Neuer Organisationsname](/assets/images/help/organizations/new-org-name.png)
5. Geben Sie unter „Contact email“ (Kontakt-E-Mail) die E-Mail-Adresse einer Person fest, die in Bezug auf weitere Informationen zur Organisation kontaktiert werden kann.
6. Klicke auf **Create organization** (Organisation erstellen).
