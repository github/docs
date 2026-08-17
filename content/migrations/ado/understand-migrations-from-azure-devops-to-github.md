---
title: Understand migrations from Azure DevOps to GitHub
shortTitle: 1. Understand migrations
intro: '{% data variables.product.prodname_importer_proper_name %} can automate migrating from Azure DevOps.'
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
  - /migrations/ado/phase-1-understand-migrations-from-azure-devops-to-github
category:
  - Migrate from Azure DevOps
---

## About migrations from Azure DevOps Cloud

You can use {% data variables.product.prodname_importer_proper_name %} to migrate repositories from Azure DevOps to {% data variables.product.prodname_ghe_cloud %} ({% data variables.product.prodname_dotcom_the_website %} or {% data variables.enterprise.data_residency_site %}).

You can only use {% data variables.product.prodname_importer_proper_name %} to migrate from Azure DevOps Cloud, not from Azure DevOps Server. If you currently use Azure DevOps Server and want to migrate to {% data variables.product.prodname_dotcom %}, you can migrate to Azure DevOps Cloud first. For more information, see [Migrate to Azure DevOps](https://azure.microsoft.com/en-us/services/devops/migrate/) on the Azure site.

Before you create your enterprise account on {% data variables.product.prodname_dotcom %}, decide whether your enterprise will use {% data variables.product.prodname_emus %}. This affects how your members authenticate and how you manage identities and access. See [AUTOTITLE](/enterprise-cloud@latest/enterprise-onboarding/getting-started-with-your-enterprise/choose-an-enterprise-type).

To learn more about the differences between {% data variables.product.prodname_dotcom %} and Azure DevOps, see [AUTOTITLE](/migrations/ado/key-differences-between-azure-devops-and-github).

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

{% data reusables.enterprise-migration-tool.migration-data-limitations %}
