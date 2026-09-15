---
title: Repository roles for an organization
intro: 'You can customize access to each repository in your organization by assigning granular roles, giving people access to the features and tasks they need.'
redirect_from:
  - /articles/repository-permission-levels-for-an-organization-early-access-program
  - /articles/repository-permission-levels-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization
  - /organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization
  - /organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization
  - /organizations/managing-user-access-to-your-organizations-repositories/repository-roles-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Repository roles
category:
  - Control repository access
---

## Repository roles for organizations

You can give organization members, outside collaborators, and teams of people different levels of access to repositories owned by an organization by assigning them to roles. Choose the role that best fits each person or team's function in your project without giving people more access to the project than they need.

From least access to most access, the roles for an organization repository are:
* **Read:** Recommended for non-code contributors who want to view or discuss your project
* **Triage:** Recommended for contributors who need to proactively manage issues{% ifversion discussions-moderators-control-who-can-report %}, discussions,{% endif %} and pull requests without write access
* **Write:** Recommended for contributors who actively push to your project
* **Maintain:** Recommended for project managers who need to manage the repository without access to sensitive or destructive actions
* **Admin:** Recommended for people who need full access to the project, including sensitive and destructive actions like managing security or deleting a repository

{% ifversion fpt %}
If your organization uses {% data variables.product.prodname_ghe_cloud %}, you can create custom repository roles. For more information, see [AUTOTITLE](/enterprise-cloud@latest/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-custom-repository-roles-for-an-organization) in the {% data variables.product.prodname_ghe_cloud %} documentation.
{% elsif ghec or ghes %}
You can create custom repository roles. For more information, see [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-custom-repository-roles-for-an-organization).
{% endif %}

Organization owners can set base permissions that apply to all members of an organization when accessing any of the organization's repositories. For more information, see [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/setting-base-permissions-for-an-organization#setting-base-permissions).

Organization owners can also choose to further limit access to certain settings and actions across the organization. For more information on options for specific settings, see [AUTOTITLE](/organizations/managing-organization-settings).

In addition to managing organization-level settings, organization owners have admin access to every repository owned by the organization. For more information, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).

> [!WARNING]
> When someone adds a deploy key to a repository, any user who has the private key can read from or write to the repository (depending on the key settings), even if they're later removed from the organization.

## Permissions for each role

{% ifversion fpt %}
Some of the features listed below are limited to organizations using {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}

> [!NOTE]
> The roles required to use security features are listed in [Access requirements for security features](#access-requirements-for-security-features) below.

{% rowheaders %}

| Repository action | Read | Triage | Write | Maintain | Admin |
|:---|:---:|:---:|:---:|:---:|:---:|
{%- assign roleColumns = "read,triage,write,maintain,admin" | split: "," -%}
{%- for row in tables.repository-roles.permissions -%}
{%- assign show = row.versions | default: "show" | render_liquid -%}
{%- unless show == "" %}
| {{ row.action | render_liquid }}{% assign granted = row.roles | render_liquid | split: ", " %}{% for role in roleColumns %} | {% if granted contains role %}<span role="img" class="octicon-bg-check" aria-label="Yes">✓</span>{% else %}<span role="img" class="octicon-bg-x" aria-label="No">✗</span>{% endif %}{% endfor %} |
{%- endunless -%}
{%- endfor %}

{% endrowheaders %}

### Access requirements for security features

In this section, you can find the access required for security features, such as {% data variables.product.prodname_GHAS %} features.

> [!NOTE]
> Repository writers and maintainers can only directly view secret scanning alert information for their own commits. They cannot access the alert list view.

{% rowheaders %}

| Repository action | Read | Triage | Write | Maintain | Admin |
|:---|:---:|:---:|:---:|:---:|:---:|
{%- assign roleColumns = "read,triage,write,maintain,admin" | split: "," -%}
{%- for row in tables.repository-roles.securityFeatures -%}
{%- assign show = row.versions | default: "show" | render_liquid -%}
{%- unless show == "" %}
| {{ row.action | render_liquid }}{% assign granted = row.roles | render_liquid | split: ", " %}{% for role in roleColumns %} | {% if granted contains role %}<span role="img" class="octicon-bg-check" aria-label="Yes">✓</span>{% else %}<span role="img" class="octicon-bg-x" aria-label="No">✗</span>{% endif %}{% endfor %} |
{%- endunless -%}
{%- endfor %}

{% endrowheaders %}

## Further reading

* [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories)
* [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization)
