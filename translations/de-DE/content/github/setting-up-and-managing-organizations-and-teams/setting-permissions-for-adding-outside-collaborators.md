---
title: Berechtigungen für das Hinzufügen von externen Mitarbeitern festlegen
intro: 'Zum Schutz Deiner Organisationsdaten und der Anzahl der bezahlten Lizenzen in Deiner Organisation kannst Du es ausschließlich Inhabern erlauben, externe Mitarbeiter zu Organisations-Repositorys einzuladen.'
product: '{% data reusables.gated-features.restict-add-collaborator %}'
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories/
  - /articles/setting-permissions-for-adding-outside-collaborators
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Organisationsinhaber und Mitglieder mit Administratorberechtigungen für ein Repository können externe Mitarbeiter einladen, an dem Repository zu arbeiten. Du kannst das Recht, externe Mitarbeiter einzuladen, auf ausschließlich Organisationsinhaber einschränken.

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Repository invitations", select **Allow members to invite outside collaborators to repositories for this organization**.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %} ![Checkbox to allow members to invite outside collaborators to organization repositories](/assets/images/help/organizations/repo-invitations-checkbox-updated.png){% else %}
![Checkbox to allow members to invite outside collaborators to organization repositories](/assets/images/help/organizations/repo-invitations-checkbox.png){% endif %}
6. Klicke auf **Save** (Speichern).
