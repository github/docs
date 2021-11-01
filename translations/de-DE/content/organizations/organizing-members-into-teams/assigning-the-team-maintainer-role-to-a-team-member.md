---
title: Assigning the team maintainer role to a team member
intro: You can give a team member the ability to manage team membership and settings by assigning the team maintainer role.
redirect_from:
  - /articles/giving-team-maintainer-permissions-to-an-organization-member-early-access-program/
  - /articles/giving-team-maintainer-permissions-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/giving-team-maintainer-permissions-to-an-organization-member
  - /organizations/managing-peoples-access-to-your-organization-with-roles/giving-team-maintainer-permissions-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Team maintainers
permissions: Organization owners can promote team members to team maintainers.
---

## About team maintainers

People with the team maintainer role can manage team membership and settings.

- [Den Namen und die Beschreibung des Teams ändern](/articles/renaming-a-team)
- [Die Sichtbarkeit des Teams ändern](/articles/changing-team-visibility)
- [Anfordern, ein untergeordnetes Team hinzuzufügen](/articles/requesting-to-add-a-child-team)
- [Anfordern, ein übergeordnetes Team hinzuzufügen oder zu ändern](/articles/requesting-to-add-or-change-a-parent-team)
- [Das Teamprofilbild festlegen](/articles/setting-your-team-s-profile-picture)
- [Teamdiskussionen bearbeiten](/articles/managing-disruptive-comments/#editing-a-comment)
- [Teamdiskussionen löschen](/articles/managing-disruptive-comments/#deleting-a-comment)
- [Dem Team Organisationsmitglieder hinzufügen](/articles/adding-organization-members-to-a-team)
- [Organisationsmitglieder aus dem Team entfernen](/articles/removing-organization-members-from-a-team)
- Entfernen des Zugriffs eines Teams auf Repositorys{% ifversion fpt or ghes or ghae or ghec %}
- [Code-Review-Zuweisung für das Team verwalten](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team){% endif %}{% ifversion fpt or ghec %}
- [Geplante Erinnerungen für Pull Requests verwalten](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team){% endif %}


## Ein Organisationsmitglied zum Team-Betreuer ernennen

Before you can promote an organization member to team maintainer, the person must already be a member of the team.

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_members_tab %}
4. Wähle die Person(en) aus, die Du zum Team-Betreuer ernennen möchtest. ![Kontrollkästchen neben dem Organisationsmitglied](/assets/images/help/teams/team-member-check-box.png)
5. Klicke im Dropdownmenü über der Liste der Teammitglieder auf **Change role** (Rolle ändern). ![Dropdownmenü mit Option zum Ändern der Rolle](/assets/images/help/teams/bulk-edit-drop-down.png)
6. Wähle eine neue Rolle aus, und klicke dann auf **Change role** (Rolle ändern). ![Optionsfelder für Betreuer- oder Mitglieder-Rollen](/assets/images/help/teams/team-role-modal.png)
