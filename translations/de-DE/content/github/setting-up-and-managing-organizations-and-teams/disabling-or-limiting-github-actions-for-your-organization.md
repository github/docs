---
title: GitHub Actions für Deine Organisation Deaktivieren oder Einschränken
intro: 'Organisationsinhaber können GitHub Actions für eine Organisation deaktivieren, aktivieren oder einschränken.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - organisationen
  - teams
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Über {% data variables.product.prodname_actions %}-Berechtigungen für Deine Organisation

{% data reusables.github-actions.disabling-github-actions %} Weitere Informationen zu {% data variables.product.prodname_actions %} findest Du unter „[Über {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)."

Du kannst {% data variables.product.prodname_actions %} für alle Repositories in Deiner Organisation aktivieren. {% data reusables.github-actions.enabled-actions-description %} Du kannst {% data variables.product.prodname_actions %} für alle Repositorys in Deiner Organisation deaktivieren. {% data reusables.github-actions.disabled-actions-description %}

Alternativ kannst Du {% data variables.product.prodname_actions %} für alle Repository in Deiner Organisation aktivieren, aber die Aktionen limitieren, die ein Workflow ausführen kann. {% data reusables.github-actions.enabled-local-github-actions %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}

### {% data variables.product.prodname_actions %}-Berechtigungen für Deine Organisation verwalten

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Under **Local and third-party Actions**, select an option. ![Aktiviere, deaktiviere oder limitiere die Aktionen für diese Organisation](/assets/images/help/repository/enable-org-actions.png)
1. Klicke auf **Save** (Speichern).

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

### {% data variables.product.prodname_actions %}-Berechtigungen für Deine Organisation verwalten

You can disable all workflows for an organization or set a policy that configures which actions can be used in an organization.

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**Note:** You might not be able to manage these settings if your organization is managed by an enterprise that has overriding policy. For more information, {% if currentVersion == "free-pro-team@latest" %}"[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)."{% else %}"[Enforcing {% data variables.product.prodname_actions %} policies for your enterprise](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)."{% endif %}

{% endnote %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Under **Policies**, select an option. ![Set actions policy for this organization](/assets/images/help/organizations/actions-policy.png)
1. Klicke auf **Save** (Speichern).

### Allowing specific actions to run

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Under **Policies**, select **Allow select actions** and add your required actions to the list. ![Add actions to allow list](/assets/images/help/organizations/actions-policy-allow-list.png)
1. Klicke auf **Save** (Speichern).

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Enabling workflows for private repository forks

{% data reusables.github-actions.private-repository-forks-overview %}

#### Configuring the private fork policy for an organization

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}
