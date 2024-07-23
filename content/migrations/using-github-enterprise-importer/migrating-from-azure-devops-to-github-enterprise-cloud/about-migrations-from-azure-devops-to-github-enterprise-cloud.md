---
title: About migrations from Azure DevOps to GitHub Enterprise Cloud
shortTitle: About migrations
intro: 'Learn which data {% data variables.product.prodname_importer_proper_name %} can migrate.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## About migrations from Azure DevOps

You can use {% data variables.product.prodname_importer_proper_name %} to migrate repositories from Azure DevOps to {% data variables.product.prodname_ghe_cloud %}.

You can only use {% data variables.product.prodname_importer_proper_name %} to migrate from Azure DevOps Cloud, not from Azure DevOps Server. If you currently use Azure DevOps Server and want to migrate to {% data variables.product.prodname_dotcom %}, you can migrate to Azure DevOps Cloud first. For more information, see [Migrate to Azure DevOps](https://azure.microsoft.com/en-us/services/devops/migrate/) on the Azure site.

## Data that is migrated

We currently only support migrating the following repository data from Azure DevOps to {% data variables.product.prodname_ghe_cloud %}.

* Git source (including commit history)
* Pull requests
* User history for pull requests
* Work item links on pull requests
* Attachments on pull requests
* Branch policies for the repository (user-scoped branch policies and cross-repo branch policies are not included)

If you want to migrate Azure Pipelines to {% data variables.product.prodname_actions %}, contact your {% data variables.product.prodname_dotcom %} account manager.

## Limitations on migrated data

{% data reusables.enterprise-migration-tool.limitations-of-migrated-data %}

## Getting started

Before you migrate from Azure DevOps, you should plan out how you will run your migration. Before migrating any data, you will need to choose someone to run the migration. You must grant that person the necessary access for both the source and the destination of the migration. We also recommend you run a trial migration first.

For an overview of the migration process from beginning to end, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/overview-of-a-migration-from-azure-devops-to-github-enterprise-cloud)."
