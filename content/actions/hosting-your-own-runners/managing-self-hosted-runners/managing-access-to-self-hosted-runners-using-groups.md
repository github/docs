---
title: Managing access to self-hosted runners using groups
shortTitle: Manage access with runner groups
intro: You can use policies to limit access to self-hosted runners that have been added to an organization{% ifversion ghec or ghes or ghae %} or enterprise{% endif %}.
permissions: 'Enterprise accounts, organizations owned by enterprise accounts, and organizations using {% data variables.product.prodname_team %} can create and manage additional runner groups.'
redirect_from:
  - /actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

## About runner groups

{% data reusables.actions.about-runner-groups %}

## Creating a self-hosted runner group for an organization

{%- ifversion fpt or ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-organization %}

{% ifversion ghec or ghes or ghae %}

## Creating a self-hosted runner group for an enterprise

 {%- ifversion ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

## Changing which organizations can access a runner group

{%- ifversion fpt or ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

For runner groups in an enterprise, you can change what organizations in the enterprise can access a runner group.

{% data reusables.actions.runner-groups-enterprise-navigation %}
{% data reusables.actions.changing-organization-access-for-a-runner-group %}

{% endif %}

## Changing which repositories can access a runner group

{%- ifversion fpt or ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

For runner groups in an organization, you can change what repositories in the organization can access a runner group.

{% data reusables.actions.runner-groups-org-navigation %}
{% data reusables.actions.changing-repository-access-for-a-runner-group %}

{% ifversion restrict-groups-to-workflows %}

## Changing which workflows can access a runner group

{%- ifversion fpt or ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.about-restricting-workflow-access-with-runner-groups %}

- [Changing which workflows can access an organization runner group](#changing-which-workflows-can-access-an-organization-runner-group)
- [Changing which workflows can access an enterprise runner group](#changing-which-workflows-can-access-an-enterprise-runner-group)

### Changing which workflows can access an organization runner group

{% data reusables.actions.runner-groups-org-navigation %}
{% data reusables.actions.changing-workflow-access-for-a-runner-group %}

### Changing which workflows can access an enterprise runner group

{% data reusables.actions.runner-groups-enterprise-navigation %}
{% data reusables.actions.changing-workflow-access-for-a-runner-group %}

{% endif %}

## Changing the name of a runner group

{% ifversion ghes or ghec or ghae %}
You can edit the name of your runner groups at the enterprise and organization levels.

- [Changing the name of an organization runner group](#changing-the-name-of-an-organization-runner-group)
- [Changing the name of an enterprise runner group](#changing-the-name-of-an-enterprise-runner-group)

### Changing the name of an organization runner group

{% endif %}

{% data reusables.actions.runner-groups-org-navigation %}
{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghes or ghec or ghae %}

### Changing the name of an enterprise runner group

{% data reusables.actions.runner-groups-enterprise-navigation %}
{% data reusables.actions.changing-the-name-of-a-runner-group %}
{% endif %}

## Automatically adding a self-hosted runner to a group

{% data reusables.actions.automatically-adding-a-runner-to-a-group %}

## Moving a self-hosted runner to a group

{% data reusables.actions.about-moving-a-runner-to-a-group %}
{% ifversion ghes or ghec or ghae %}

- [Moving an organization runner to a group](#moving-an-organization-runner-to-a-group)
- [Moving an enterprise runner to a group](#moving-an-enterprise-runner-to-a-group)

### Moving an organization runner to a group

{% endif %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runners %}
{% data reusables.actions.moving-a-runner-to-a-group %}

{% ifversion ghes or ghec or ghae %}

### Moving an enterprise runner to a group

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.actions.moving-a-runner-to-a-group %}
{% endif %}

## Removing a self-hosted runner group

{% data reusables.actions.about-removing-a-runner-group %}
{% ifversion ghes or ghec or ghae %}

- [Removing a runner group from an organization](#removing-a-runner-group-from-an-organization)
- [Removing a runner group from an enterprise](#removing-a-runner-group-from-an-enterprise)

### Removing a runner group from an organization

{% endif %}

{% data reusables.actions.runner-groups-org-navigation %}
{% data reusables.actions.removing-a-runner-group %}

{% ifversion ghes or ghec or ghae %}

### Removing a runner group from an enterprise

{% data reusables.actions.runner-groups-enterprise-navigation %}
{% data reusables.actions.removing-a-runner-group %}
{% endif %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}
