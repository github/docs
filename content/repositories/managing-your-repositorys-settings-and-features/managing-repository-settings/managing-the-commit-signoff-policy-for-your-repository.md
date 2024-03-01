---
title: Managing the commit signoff policy for your repository
intro: 'You can require users to automatically sign off on the commits they make to your repository using {% data variables.product.product_name %}''s web interface.'
versions:
  feature: commit-signoffs
permissions: Organization owners and repository administrators can require all commits to a repository to be signed off by the commit author.
topics:
  - Repositories
shortTitle: Manage the commit signoff policy
---

## About commit signoffs

Commit signoffs enable users to affirm that a commit complies with the rules and licensing governing a repository. You can enable compulsory commit signoffs on individual repositories for users committing through {% data variables.location.product_location %}'s web interface, making signing off on a commit a seamless part of the commit process. Once compulsory commit signoffs are enabled for a repository, every commit made to that repository through {% data variables.location.product_location %}'s web interface will automatically be signed off on by the commit author.

Organization owners can also enable compulsory commit signoffs at the organization level. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization)."

{% data reusables.repositories.commit-signoffs %}

## Enabling or disabling compulsory commit signoffs for your repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Select **Require contributors to sign off on web-based commits**.
