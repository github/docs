---
title: Berechtigungen für das Hinzufügen von externen Mitarbeitern festlegen
intro: 'Zum Schutz Deiner Organisationsdaten und der Anzahl der bezahlten Lizenzen in Deiner Organisation kannst Du es ausschließlich Inhabern erlauben, externe Mitarbeiter zu Organisations-Repositorys einzuladen.'
product: '{% data reusables.gated-features.restrict-add-collaborator %}'
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories/
  - /articles/setting-permissions-for-adding-outside-collaborators
  - /github/setting-up-and-managing-organizations-and-teams/setting-permissions-for-adding-outside-collaborators
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set collaborator policy
---

Organisationsinhaber und Mitglieder mit Administratorberechtigungen für ein Repository können externe Mitarbeiter einladen, an dem Repository zu arbeiten. Du kannst das Recht, externe Mitarbeiter einzuladen, auf ausschließlich Organisationsinhaber einschränken.

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Aktiviere unter „Repository invitations“ (Einladung zu Repositorys) das Kontrollkästchen **Allow members to invite outside collaborators to repositories for this organization** (Mitgliedern die Einladung von externen Mitarbeitern zu den Repositorys dieser Organisation erlauben). ![Kontrollkästchen zur Erlaubnis der Einladung externer Mitarbeiter zu Organisationsrepositorys durch Mitglieder](/assets/images/help/organizations/repo-invitations-checkbox-updated.png)
6. Klicke auf **Save** (Speichern).
