---
title: Repository-Erstellung in Deiner Organisation einschränken
intro: Zum Schutz Deiner Organisationsdaten kannst Du die Berechtigungen für die Erstellung von Repositorys innerhalb Deiner Organisation konfigurieren.
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Restrict repository creation
---

Du kannst wählen, ob Mitglieder in Deiner Organisation Repositorys erstellen können. If you allow members to create repositories, you can choose which types of repositories members can create.{% ifversion fpt %} To allow members to create private repositories only, your organization must use {% data variables.product.prodname_ghe_cloud %}.{% endif %} For more information, see "[About repositories](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)."

Organisationsinhaber können immer jede Art von Repository erstellen.

{% ifversion fpt %}Enterprise-Inhaber{% else %}Website-Administratoren{% endif %} können die Optionen einschränken, die Du für die Richtlinie zur Erstellung von Repositorys in Deiner Organisation zur Verfügung hast. For more information, see {% ifversion fpt %}"[Enforcing repository management policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account)."{% else %}"[Restricting repository creation in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)."{% endif %}

{% warning %}

**Warning**: This setting only restricts the visibility options available when repositories are created and does not restrict the ability to change repository visibility at a later time. For more information about restricting changes to existing repositories' visibilities, see "[Restricting repository visibility changes in your organization](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)."

{% endwarning %}

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Under "Repository creation", select one or more options. ![Optionen für die Repository-Erstellung](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png)
6. Klicke auf **Save** (Speichern).
