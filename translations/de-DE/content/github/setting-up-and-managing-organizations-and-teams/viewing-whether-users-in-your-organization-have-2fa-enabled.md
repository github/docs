---
title: 'Überprüfen, ob die Benutzer Deiner Organisation die 2FA aktiviert haben'
intro: 'Du kannst anzeigen, welche Organisationsinhaber, Mitglieder und externen Mitarbeiter die Zwei-Faktor-Authentifizierung aktiviert haben.'
redirect_from:
  - /articles/viewing-whether-users-in-your-organization-have-2fa-enabled
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% note %}

**Hinweis:** Du kannst festlegen, dass alle Mitglieder{% if currentVersion == "free-pro-team@latest" %}einschließlich Inhabern, Abrechnungsmanagern und{% else %} und{% endif %} externen Mitarbeiter in Deiner Organisation die Zwei-Faktor-Authentifizierung aktiviert haben müssen. Weitere Informationen finden Sie unter „[Zwei-Faktor-Authentifizierung in Ihrer Organisation erzwingen](/articles/requiring-two-factor-authentication-in-your-organization)“.

{% endnote %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Um die Organisationsmitglieder, einschließlich der Organisationsinhaber, anzuzeigen, welche die Zwei-Faktor-Authentifizierung aktiviert oder deaktiviert haben, klicke auf der rechten Seite auf **2FA** (Zwei-Faktor-Authentifizierung), und wähle **Enabled** (Aktiviert) oder **Disabled** (Deaktiviert). ![Organisationsmitglieder nach Zwei-Faktor-Authentifizierung filtern](/assets/images/help/2fa/filter-org-members-by-2fa.png)
5. Wenn Du externe Mitarbeiter in Deiner Organisation anzeigen möchtest, klicke unter der Registerkarte „People“ (Personen) auf **Outside collaborators** (Externe Mitarbeiter). ![Auswahl von externen Mitarbeitern](/assets/images/help/organizations/select-outside-collaborators.png)
6. Um anzuzeigen, welche externen Mitarbeiter die Zwei-Faktor-Authentifizierung aktiviert oder deaktiviert haben, klicke auf der rechten Seite auf **2FA** (Zwei-Faktor-Authentifizierung), und wähle **Enabled** (Aktiviert) oder **Disabled** (Deaktiviert). ![Externe Mitarbeiter nach Zwei-Faktor-Authentifizierung filtern](/assets/images/help/2fa/filter-outside-collaborators-by-2fa.png)

### Weiterführende Informationen

- „[Rollen von Personen in einer Organisation anzeigen](/articles/viewing-people-s-roles-in-an-organization)“
