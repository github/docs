---
title: Managing the commit signoff policy for your organization
intro: 'You can require users to automatically sign off all commits they make in {% data variables.product.product_name %}''s web interface to repositories owned by your organization.'
versions:
  feature: commit-signoffs
permissions: Organization owners can require all commits to repositories owned by the organization be signed off by the commit author.
topics:
  - Organizations
shortTitle: Manage the commit signoff policy
---

## About commit signoffs

To affirm that a commit complies with the rules and licensing governing a repository, many organizations require developers to sign off on every commit. If your organization requires commit signoffs, you can make signing off a seamless part of the commit process by enabling compulsory commit signoffs for users committing through {% data variables.product.product_name %}'s web interface. After you enable compulsory commit signoffs for an organization, every commit made to repositories in that organization through {% data variables.product.product_name %}'s web interface will automatically be signed off on by the commit author.

People with admin access to a repository can also enable compulsory commit signoffs at the repository level. For more information, see "[Managing the commit signoff policy for your repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)."

{% data reusables.repositories.commit-signoffs %}

## Managing compulsory commit signoffs for your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.repository-defaults %}
1. Select or deselect **Require contributors to sign off on web-based commits**.
  ![Screenshot of Require contributors to sign off on web-based commits](/assets/images/help/organizations/require-signoffs.png)
