---
title: Inviting people to manage your enterprise
intro: Du kannst Personen dazu einladen, Enterprise-Inhaber oder Abrechnungsmanager in Deinem Enterprise-Konto zu werden. Du kannst auch Enterprise-Inhaber und Abrechnungsmanager entfernen, die nicht mehr auf Dein Enterprise-Konto zugreifen müssen.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account/
  - /articles/inviting-people-to-manage-your-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Informationen zum Einladen von Personen zur Verwaltung Deines Enterprise-Kontos

{% data reusables.enterprise-accounts.enterprise-administrators %} For more information, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise).

{% tip %}

**Tipp:** Weitere Informationen zum Verwalten von Benutzern in einer Organisation Deines Enterprise-Kontos findest Du unter „[Mitgliedschaft in Deiner Organisation verwalten](/articles/managing-membership-in-your-organization)“ und „[Rollenbasierte Zugriffe von Personen auf Deine Organisation verwalten](/articles/managing-peoples-access-to-your-organization-with-roles).“

{% endtip %}

### Einen Enterprise-Administrator zu Deinem Enterprise-Konto einladen

Nur Enterprise-Inhaber können andere Personen dazu einladen, Enterprise-Administratoren zu werden.

Wenn Du jemanden zum Enterprise-Konto eingeladen hast, muss diese Person die per E-Mail erhaltene Einladung annehmen, bevor sie auf das Enterprise-Konto zugreifen kann.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
3. Klicke auf der linken Seitenleiste auf **Administrators** (Administratoren). ![Registerkarte „Administrators“ (Administratoren) in der linken Seitenleiste](/assets/images/help/business-accounts/administrators-tab.png)
4. Klicke oberhalb der Liste der Administratoren auf **Invite admin** (Administrator einladen). ![Schaltfläche „Invite admin“ (Administrator einladen) über der Liste der Enterprise-Inhaber](/assets/images/help/business-accounts/invite-admin-button.png)
5. Gib den Benutzernamen, den vollständigen Namen oder die E-Mail-Adresse der Person ein, die Du dazu einladen möchtest, Enterprise-Administrator zu werden. Wähle dann die gewünschte Person aus den Ergebnissen aus. ![Modales Feld mit Feld für die Eingabe des Benutzernamens, vollständigen Namens oder der E-Mail-Adresse und Schaltfläche zum Einladen](/assets/images/help/business-accounts/invite-admins-modal-button.png)
6. Wähle **Owner** (Inhaber) oder **Billing Manager** (Abrechnungsmanager) aus. ![Modalfeld mit Rollenauswahl](/assets/images/help/business-accounts/invite-admins-roles.png)
7. Klicke auf **Send Invitation** (Einladung senden). ![Schaltfläche „Send invitation“ (Einladung senden)](/assets/images/help/business-accounts/invite-admins-send-invitation.png)

### Einen Enterprise-Administrator aus Deinem Enterprise-Konto entfernen

Nur Enterprise-Inhaber können andere Enterprise-Administratoren aus dem Enterprise-Konto entfernen.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
3. Klicke neben dem Benutzernamen der Person, die Du entfernen möchtest, auf {% octicon "gear" aria-label="The Settings gear" %} und anschließend auf **Remove owner** (Inhaber entfernen) oder **Remove billing manager** (Abrechnungsmanager entfernen). ![Zahnradsymbol für Einstellungen mit Menüoption zum Entfernen eines Enterprise-Administrators](/assets/images/help/business-accounts/remove-admin.png)
