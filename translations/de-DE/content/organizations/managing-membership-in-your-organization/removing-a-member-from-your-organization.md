---
title: Mitglied aus Deiner Organisation entfernen
intro: 'Wenn Mitglieder Deiner Organisation keinen Zugriff mehr auf die Repositorys Deiner Organisation benötigen, kannst Du diese Mitglieder aus der Organisation entfernen.'
redirect_from:
  - /articles/removing-a-member-from-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/removing-a-member-from-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Nur Organisationsinhaber können Mitglieder aus einer Organisation entfernen.

{% if currentVersion == "free-pro-team@latest" %}

{% warning %}

**Warning:** When you remove members from an organization:
- Die Anzahl der bezahlten Lizenzen wird nicht automatisch heruntergesetzt. Um nach dem Entfernen von Benutzern aus der Organisation für weniger Lizenzen zu bezahlen, folge den Schritten im Artikel „[Die bezahlten Benutzer Deiner Organisation heruntersetzen](/articles/downgrading-your-organization-s-paid-seats)."
- Removed members will lose access to private forks of your organization's private repositories, but they may still have local copies. Eine Synchronisation ihrer lokalen Kopien mit den Repositorys Deiner Organisation ist allerdings nicht mehr möglich. Die privaten Forks eines entfernten Benutzers können wiederhergestellt werden, wenn der Benutzer innerhalb von drei Monaten nach dem Entfernen aus der Organisation [wieder als Organisationsmitglied eingesetzt wird](/articles/reinstating-a-former-member-of-your-organization). Es untersteht Deiner Verantwortung, dafür Sorge zu tragen, dass die Personen, denen Du den Zugriff auf ein Repository entziehst, vertrauliche Informationen oder geistiges Eigentum von ihren Systemen löschen.
- Any organization invitations sent by a removed member, that have not been accepted, are cancelled and will not be accessible.

{% endwarning %}

{% else %}

{% warning %}

**Warning:** When you remove members from an organization:
 - Removed members will lose access to private forks of your organization's private repositories, but may still have local copies. Eine Synchronisation ihrer lokalen Kopien mit den Repositorys Deiner Organisation ist allerdings nicht mehr möglich. Die privaten Forks eines entfernten Benutzers können wiederhergestellt werden, wenn der Benutzer innerhalb von drei Monaten nach dem Entfernen aus der Organisation [wieder als Organisationsmitglied eingesetzt wird](/articles/reinstating-a-former-member-of-your-organization). Es untersteht Deiner Verantwortung, dafür Sorge zu tragen, dass die Personen, denen Du den Zugriff auf ein Repository entziehst, vertrauliche Informationen oder geistiges Eigentum von ihren Systemen löschen.
 - Any organization invitations sent by the removed user, that have not been accepted, are cancelled and will not be accessible.

{% endwarning %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

Um einer Person, die Deine Organisation verlässt, den Umstieg zu erleichtern und sicherzustellen, dass sie vertrauliche Informationen oder geistiges Eigentum von ihren Systemen löscht, empfehlen wir Dir die Bereitstellung einer Checkliste mit Best Practices zum Verlassen Deiner Organisation. Ein Beispiel findest Du unter „[Best Practices für das Verlassen Deines Unternehmens](/articles/best-practices-for-leaving-your-company/).“

{% endif %}

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}

### Einem Benutzer die Mitgliedschaft entziehen

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
4. Wähle das oder die Mitglieder aus, die Du aus Deiner Organisation entfernen möchtest. ![Liste der Mitglieder mit zwei ausgewählten Mitgliedern](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Klicke im Dropdownmenü über der Mitgliederliste auf **Remove from organization** (Aus Organisation entfernen). ![Dropdownmenü mit Option zum Entfernen von Mitgliedern](/assets/images/help/teams/user-bulk-management-options.png)
6. Prüfe die zum Entfernen ausgewählten Mitglieder, und klicke auf **Remove members** (Mitglieder entfernen). ![Liste der zu entfernenden Mitglieder und Schaltfläche „Remove members" (Mitglieder entfernen)](/assets/images/help/teams/confirm-remove-members-bulk.png)

### Weiterführende Informationen

- „[Organisationsmitglieder aus einem Team entfernen](/articles/removing-organization-members-from-a-team)“
