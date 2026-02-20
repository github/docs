---
title: "Phase 1. Understand migrations from Azure DevOps to GitHub"
shortTitle: "1. Understand migrations"
intro: "{% data variables.product.prodname_importer_proper_name %} can automate migrating from Azure DevOps."
versions:
  fpt: '*'
  ghec: '*'
contentType: other
redirect_from:
  - /migrations/ado/about-migrations-from-azure-devops-to-github-enterprise-cloud
  - /migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/about-migrations-from-azure-devops-to-github-enterprise-cloud
  - /early-access/github/migrating-with-github-enterprise-importer/understanding-github-enterprise-importer/migrating-from-azure-devops-with-github-enterprise-importer
  - /early-access/enterprise-importer/understanding-github-enterprise-importer/migrating-from-azure-devops-with-github-enterprise-importer
  - /migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/migrating-from-azure-devops-with-github-enterprise-importer
  - /migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/overview-of-a-migration-from-azure-devops-to-github-enterprise-cloud
  - /migrations/ado/overview-of-a-migration-from-azure-devops-to-github-enterprise-cloud
---

## About migrations from Azure DevOps Cloud

You can use {% data variables.product.prodname_importer_proper_name %} to migrate repositories from Azure DevOps to {% data variables.product.prodname_ghe_cloud %} ({% data variables.product.prodname_dotcom_the_website %} or {% data variables.enterprise.data_residency_site %}).

You can only use {% data variables.product.prodname_importer_proper_name %} to migrate from Azure DevOps Cloud, not from Azure DevOps Server. If you currently use Azure DevOps Server and want to migrate to {% data variables.product.prodname_dotcom %}, you can migrate to Azure DevOps Cloud first. For more information, see [Migrate to Azure DevOps](https://azure.microsoft.com/en-us/services/devops/migrate/) on the Azure site.

Before you create your enterprise account on {% data variables.product.prodname_dotcom %}, decide whether your enterprise will use {% data variables.product.prodname_emus %}. This affects how your members authenticate and how you manage identities and access. See [AUTOTITLE](/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/choose-an-enterprise-type).

## Support for Azure Pipelines and Azure Boards

Both Azure Pipelines and Azure Boards can be fully integrated with your {% data variables.product.prodname_dotcom %} experience. You can configure your enterprise account and Azure DevOps so you can keep using these services while also benefitting from having your repositories hosted on {% data variables.product.prodname_dotcom %}.

If you want to migrate Azure Pipelines to {% data variables.product.prodname_actions %}, contact your {% data variables.product.prodname_dotcom %} account manager.

## Data that is migrated

{% data variables.product.prodname_importer_proper_name %} currently supports migrating the following repository data from Azure DevOps to {% data variables.product.prodname_ghe_cloud %}.

* Git source (including commit history)
* Pull requests
* User history for pull requests
* Work item links on pull requests
* Attachments on pull requests
* Branch policies for the repository (user-scoped branch policies and cross-repo branch policies are not included)

## Limitations on migrated data

There are limits to what {% data variables.product.prodname_importer_proper_name %} can migrate. Some are due to limitations of {% data variables.product.prodname_dotcom %}, while others are limitations of {% data variables.product.prodname_importer_proper_name %} itself.

### Limitations of {% data variables.product.prodname_dotcom %}

* **2 GiB size limit for a single Git commit:** No single commit in your Git repository can be larger than 2 GiB. If any of your commits are larger than 2 GiB, you will need to split the commit into smaller commits that are each 2 GiB or smaller.
* **255 byte limit for Git references:** No single Git reference, commonly known as a "ref", can have a name larger than 255 bytes. Usually, this means that your references cannot be more than 255 characters long, but any non-ASCII characters, such as emojis, may consume more than one byte. If any of your Git references are too large, we'll return a clear error message.
* **100 MiB file size limit:** After you complete your migration, no single file in your Git repository can be larger than 100 MiB. During repository migration this limit is increased to 400 MiB. Consider using {% data variables.large_files.product_name_short %} to store large files.

### Limitations of {% data variables.product.prodname_importer_proper_name %}

* {% data reusables.enterprise-migration-tool.git-repo-size-limit %}
* **400 MiB file size limit:** When migrating a repository with {% data variables.product.prodname_importer_proper_name %}, no single file in your Git repository can be larger than 400 MiB. Consider using {% data variables.large_files.product_name_short %} for storing large files.
* **{% data variables.large_files.product_name_short %} objects not migrated:** The {% data variables.product.prodname_importer_secondary_name %} can migrate repositories that use {% data variables.large_files.product_name_short %}, but the LFS objects themselves will not be migrated. They can be pushed to your migration destination as a follow-up task after the migration is complete.
* **Delayed code search functionality:** Re-indexing the search index can take a few hours after a repository is migrated, and code searches may return unexpected results until re-indexing is complete.
* **Rulesets configured for your organization can cause migrations to fail:** For example, if you configured a rule that requires email addresses for commit authors to end with `@monalisa.cat`, and the repository you're migrating contains commits that don't comply with this rule, your migration will fail.
* **Mannequin content might not be searchable:** Mannequins are placeholder users to which imported content (such as issues, pull requests, comments, etc.) is associated. When you search for content associated with a mannequin, such as assigned issues, the issues may not be found. Once a mannequin is reclaimed, the content should be found via the new owner.


## Next steps

In the next article, you'll decide who will perform the migration and prepare access to both Azure DevOps and {% data variables.product.prodname_ghe_cloud %}. See [AUTOTITLE](/migrations/ado/phase-2-manage-access).
