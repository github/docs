---
title: Basisberechtigungen für eine Organisation festlegen
intro: 'Du kannst Basisberechtigungen für die Repositorys festlegen, die einer Organisation gehören.'
permissions: Organization owners can set base permissions for an organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set base permissions
---

## Über Basisberechtigungen für eine Organisation

Du kannst Basisberechtigungen festlegen, die für alle Mitglieder einer Organisation gelten, wenn sie auf eines der Repositorys der Organisation zugreifen. Basisberechtigungen gelten nicht für externen Mitarbeiter.

{% ifversion fpt or ghec %}Standardmäßig haben Mitglieder einer Organisation **Lese**-Berechtigung für die Repositorys der Organisation.{% endif %}

If someone with admin access to an organization's repository grants a member a higher level of access for the repository, the higher level of access overrides the base permission.

{% ifversion ghec %}
If you've created a custom repository role with an inherited role that is lower access than your organization's base permissions, any members assigned to that role will default to the organization's base permissions rather than the inherited role. For more information, see "[Managing custom repository roles for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."
{% endif %}

## Basisberechtigungen festlegen

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Wähle unter „Base permissions" (Basisberechtigungen) das Dropdownmenü, um neue Basisberechtigungen auszuwählen. ![Neue Berechtigungsstufe aus der Dropdownliste der Basisberechtigungen auswählen](/assets/images/help/organizations/base-permissions-drop-down.png)
6. Überprüfen Sie die Änderungen. Klicke zur Bestätigung auf **Change default permission to PERMISSION** (Ändere die Basisberechtigungen in BERECHTIGUNG). ![Überprüfen und Bestätigen der Änderung der Basisberechtigungen](/assets/images/help/organizations/base-permissions-confirm.png)

## Weiterführende Informationen

- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- „[Externe Mitarbeiter zu Organisations-Repositorys hinzufügen](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)“
