---
title: About migrations between GitHub products
shortTitle: About migrations
intro: 'Learn which data {% data variables.product.prodname_importer_proper_name %} can migrate between {% data variables.product.company_short %} products.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## About migrations between {% data variables.product.company_short %} products

With {% data variables.product.prodname_importer_proper_name %}, you can migrate data from {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %}, or migrate data between accounts on {% data variables.product.prodname_ghe_cloud %}. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer)."

If your migration source is another account on {% data variables.product.prodname_dotcom_the_website %}, you can migrate individual repositories between organizations, or migrate entire organizations between enterprises. If your migration source is {% data variables.product.prodname_ghe_server %}, you can migrate repositories.

The data that {% data variables.product.prodname_importer_proper_name %} migrates depends on the source of the migration and whether you are migrating a repository or organization.

{% ifversion repo-rules-enterprise %}
{% data reusables.enterprise-migration-tool.deploy-key-bypass %}
{% endif %}

## Data that is migrated from {% data variables.product.prodname_ghe_server %}

To migrate from {% data variables.product.prodname_ghe_server %} (GHES), you must have GHES version 3.4.1 or higher. The data that is migrated depends on the version you're using.

Item | GHES 3.4.1+ | GHES 3.5.0+ |
---- | ---------- | ---------- |
Git source (including commit history) | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
Pull requests | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
Issues | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
Milestones | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
Wikis | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
Projects (classic) at the repository level | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
{% data variables.product.prodname_actions %} workflows | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
Commit comments | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
Active webhooks | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
Branch protections | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
{% data variables.product.prodname_pages %} settings | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
User history for the above data | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
Attachments (see "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/attaching-files)") | {% octicon "check" aria-label="Can be migrated" %}  | {% octicon "check" aria-label="Can be migrated" %}  |
Releases | {% octicon "x" aria-label="Cannot be migrated" %} | {% octicon "check" aria-label="Can be migrated" %}  |

Different size limits per repository apply depending on your GHES version.

Limit | GHES <3.8.0 | GHES 3.8.0+ |
----- | ----------- | ----------- |
Git source | 2GB | 10GB
Metadata | 2GB | 10GB

### Data that is not migrated

Currently, the following data is **not** migrated.

{% data reusables.enterprise-migration-tool.data-not-migrated %}
* Teams
* User or team access to the repository
* Repository settings for pull requests

### Branch protections

{% data reusables.enterprise-migration-tool.branch-protection-migration %}

## Data that is migrated from other accounts on {% data variables.product.prodname_dotcom_the_website %}

If your migration source is another account on {% data variables.product.prodname_dotcom_the_website %}, you can migrate individual repositories between organizations, or migrate entire organizations between enterprises.

### Migrated data for an organization

When you migrate an organization, a new organization is created within the destination enterprise account. Then, the following data is migrated to the new organization.

* Teams
* Repositories
* Team access to repositories
* Member privileges
* Organization-level webhooks (must be re-enabled after your migration, see "[Enabling webhooks](/migrations/using-github-enterprise-importer/migrating-between-github-products/overview-of-a-migration-between-github-products#enabling-webhooks)")
* Default branch name for new repositories created in the organization

All repositories are migrated with private visibility. If you want to set a repository's visibility to public or internal, you can do this after the migration using the UI or API.

Team membership is **not** migrated. After the migration, you'll need to add members to migrated teams. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-between-github-products/overview-of-a-migration-between-github-products#recreating-teams)."

{% note %}

**Note:** {% data reusables.enterprise-migration-tool.team-references %} For more information about how to prevent and resolve these issues, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/troubleshooting-your-migration-with-github-enterprise-importer#team-references-are-broken-after-an-organization-migration)."

{% endnote %}

### Migrated data for a repository

When you migrate a repository, either directly or as part of an organization migration, only the following data is migrated.

* Git source (including commit history)
* Pull requests
* Issues
* Milestones
* Wikis (excluding attachments)
* Projects (classic) at the repository level
* {% data variables.product.prodname_actions %} workflows
* Commit comments
* Active webhooks (must be re-enabled after your migration, see "[Enabling webhooks](/migrations/using-github-enterprise-importer/migrating-between-github-products/overview-of-a-migration-between-github-products#enabling-webhooks)")
* Repository topics
* Repository settings
  * Branch protections (see "[Branch protections](#branch-protections)" for more details)
  * {% data variables.product.prodname_pages %} settings
  * Autolink references
  * {% data variables.product.prodname_GH_advanced_security %} settings
  * Pull request settings
    * Automatically delete head branches
    * Allow auto-merge
    * Allow merge commits (commit message setting is reset to the default message)
    * Allow squash merging (commit message setting is reset to the default message)
    * Allow rebase merging
* Releases (up to 10 GB per repository)
* User history for the above data
* Attachments (see "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/attaching-files)")

### Data that is not migrated

Currently, the following data is **not** migrated.

* {% data variables.product.prodname_codespaces %} secrets
{% data reusables.enterprise-migration-tool.data-not-migrated %}
* User access to the repository

When you migrate a repository directly, teams and team access to repositories are not migrated.

#### Branch protections

{% data reusables.enterprise-migration-tool.branch-protection-migration %}

## Limitations on migrated data

{% data reusables.enterprise-migration-tool.limitations-of-migrated-data %}

## Getting started

Before you migrate between {% data variables.product.company_short %} products, you should plan out how you will run your migration. Before migrating any data, you will need to choose someone to run the migration. You must grant that person the necessary access for both the source and the destination of the migration. We also recommend you run a trial migration first.

For an overview of the migration process from beginning to end, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-between-github-products/overview-of-a-migration-between-github-products)."
