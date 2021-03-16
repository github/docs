---
title: Viewing people in your enterprise
intro: 'To audit access to enterprise-owned resources or user license usage, enterprise owners can view every administrator and member of the enterprise.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Viewing enterprise owners{% if currentVersion == "free-pro-team@latest" %} and billing managers{% endif %}

You can view enterprise owners {% if currentVersion == "free-pro-team@latest" %} and billing managers, {% endif %}as well as a list of pending invitations to become owners{% if currentVersion == "free-pro-team@latest" %} and billing managers. You can filter the list of enterprise administrators by role{% endif %}. Du kannst eine bestimmte Person nach ihrem Benutzernamen oder vollständigen Namen suchen.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
{% if currentVersion == "free-pro-team@latest" %}1. Optionally, to view a list of pending invitations, click **_NUMBER_ pending**.
  !["NUMBER pending" button to the right of search and filter options](/assets/images/help/enterprises/administrators-pending.png){% endif %}

### Mitglieder und externe Mitarbeiter anzeigen

Du kannst die Anzahl der ausstehenden Mitglieder und externen Mitarbeiter anzeigen. You can filter the list of members by {% if currentVersion == "free-pro-team@latest" %}deployment ({% data variables.product.prodname_ghe_cloud %} or {% data variables.product.prodname_ghe_server %}),{% endif %}role {% if currentVersion == "free-pro-team@latest" %}, and{% elsif currentVersion == "github-ae@latest" %}or {% endif %}organization. Du kannst die Liste der externen Mitarbeiter nach der Sichtbarkeit der Repositorys filtern, auf die der Mitarbeiter zugreifen kann. Du kannst eine bestimmte Person nach ihrem Benutzernamen oder Anzeigenamen suchen.

You can view {% if currentVersion == "free-pro-team@latest" %}all the {% data variables.product.prodname_ghe_cloud %} organizations and {% data variables.product.prodname_ghe_server %} instances that a member belongs to, and {% endif %}which repositories an outside collaborator has access to{% if currentVersion == "free-pro-team@latest" %}, {% endif %} by clicking on the person's name.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Wenn Du optional anstelle der Liste der Mitglieder eine Liste der externen Mitarbeiter anzeigen möchtest, klicke auf **Outside collaborators** (Externe Mitarbeiter). ![Registerkarte „Outside collaborators“ (Externe Mitarbeiter) auf der Seite „Organization members“ (Organisationsmitglieder)](/assets/images/help/business-accounts/outside-collaborators-tab.png)
{% if currentVersion == "free-pro-team@latest" %}1. Optionally, to view a list of pending invitations, click **_NUMBER_ pending**.
  !["NUMBER pending" button to the right of search and filter options](/assets/images/help/enterprises/members-pending.png){% endif %}

### Weiterführende Informationen

- "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)"
