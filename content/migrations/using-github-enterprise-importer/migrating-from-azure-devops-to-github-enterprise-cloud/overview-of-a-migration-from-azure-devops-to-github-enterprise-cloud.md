---
title: Overview of a migration from Azure DevOps to GitHub Enterprise Cloud
shortTitle: Overview of a migration
intro: 'Learn how to complete the entire process of migrating from Azure DevOps to {% data variables.product.prodname_dotcom %} with {% data variables.product.prodname_importer_proper_name %}, from planning to implementation to completing follow-up tasks.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /early-access/github/migrating-with-github-enterprise-importer/understanding-github-enterprise-importer/migrating-from-azure-devops-with-github-enterprise-importer
  - /early-access/enterprise-importer/understanding-github-enterprise-importer/migrating-from-azure-devops-with-github-enterprise-importer
  - /migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/migrating-from-azure-devops-with-github-enterprise-importer
---

## Overview

With {% data variables.product.prodname_importer_proper_name %}, you can migrate to {% data variables.product.prodname_ghe_cloud %} on a repository-by-repository basis. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer)".

If you're migrating from Azure DevOps (ADO), you can use this guide to plan and implement your migration and complete follow-up tasks.

Enterprises who migrate from ADO to {% data variables.product.prodname_dotcom %} typically follow a multi-phase approach.

1. Migrate repositories from ADO to {% data variables.product.prodname_dotcom %}.
1. Migrate pipelines from Azure Pipelines to {% data variables.product.prodname_actions %}.
1. Migrate remaining assets, such as boards and artifacts, from ADO to {% data variables.product.prodname_dotcom %}.

This guide will guide you through completing the first phase, migrating repositories to {% data variables.product.prodname_dotcom %}, and assumes you're using the {% data variables.product.prodname_ado2gh_cli %}.

## Planning your migration

{% data reusables.enterprise-migration-tool.planning-intro %}

* [How soon do we need to complete the migration?](#how-soon-do-we-need-to-complete-the-migration)
* [Do we understand what will be migrated?](#do-we-understand-what-will-be-migrated)
* [Who will run the migration?](#who-will-run-the-migration)
* [What organizational structure do we want in {% data variables.product.prodname_dotcom %}?](#what-organizational-structure-do-we-want-in-github)

### How soon do we need to complete the migration?

{% data reusables.enterprise-migration-tool.timeline-intro %}

* Number of repositories
* Number of pull requests

Migration timing is largely based on the number of pull requests in a repository. If you want to migrate 1,000 repositories, and each repository has 100 pull requests on average, and only 50 users have contributed to the repositories, your migration will likely be very quick. If you want to migrate only 100 repositories, but the repositories each have 75,000 pull requests on average, and 5,000 users, the migration will take much longer and require much more planning and testing.

{% data reusables.enterprise-migration-tool.timeline-tasks %}

### Do we understand what will be migrated?

Ensure that you and your stakeholders understand what data can be migrated by {% data variables.product.prodname_importer_proper_name %}.

For migrations from ADO, {% data variables.product.prodname_importer_proper_name %} only migrates Git repositories, including pull requests and some branch policies. Any other assets, such as pipelines, work items, artifacts, test plans, releases, and dashboards, will remain in ADO.

Because permissions work differently in {% data variables.product.prodname_dotcom %} than in ADO, {% data variables.product.prodname_importer_proper_name %} does not attempt to migrate repository permissions from ADO. For more information, see "[Configuring permissions](#configuring-permissions)."

Service hooks are not migrated from ADO, so you will need to recreate them separately.

1. Review the data that's migrated from Azure DevOps. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/about-migrations-from-azure-devops-to-github-enterprise-cloud)."
1. Make a list of any data that you'll need to manually migrate or recreate.

### Who will run the migration?

To migrate a repository, you must be an organization owner for the destination organization, or an organization owner must grant you the migrator role.

1. Decide whether you want an organization owner of the destination organization to perform your migrations, or whether you need to grant the migrator role to someone else.
{% data reusables.enterprise-migration-tool.grant-migrator-tasks %} For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/managing-access-for-a-migration-from-azure-devops#about-the-migrator-role)."
{% data reusables.enterprise-migration-tool.confirm-migrator-has-correct-pats %} For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/managing-access-for-a-migration-from-azure-devops#required-scopes-for-personal-access-tokens)."

### What organizational structure do we want in {% data variables.product.prodname_dotcom %}?

Next, plan the organizational structure you'll create in {% data variables.product.prodname_dotcom %}. ADO and {% data variables.product.prodname_dotcom %} have different ways of organizing an enterprise's work.

* ADO: Organization > team project > repositories
* {% data variables.product.prodname_dotcom %}: Enterprise > organization > repositories

{% note %}

**Note:** The concept of a team project, which is used to group repositories in ADO, does not exist in {% data variables.product.prodname_dotcom %}. We do not recommend treating organizations in {% data variables.product.product_name %} as the equivalent of team projects in ADO.

{% endnote %}

After migrating to {% data variables.product.prodname_dotcom %}, you should have only one enterprise account and a small number of organizations owned by that enterprise. Each organization from ADO should correspond to a single organization on {% data variables.product.prodname_dotcom %}. We do not recommend creating an organization on {% data variables.product.prodname_dotcom %} for each team project on ADO.

This may result in a large list of ungrouped repositories within each organization. However, you can manage access to groups of repositories by creating teams. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)."

If you want to break your migration effort into batches, the new structure can help you determine your batches. If you have more than one organization in ADO, and each organization's repositories are reasonably sized batches, consider batching by organization. You can use the {% data variables.product.prodname_cli %} to generate a migration script for an entire organization on ADO.

{% data reusables.enterprise-migration-tool.organization-structure-tasks %}

## Running your migrations

{% data reusables.enterprise-migration-tool.running-your-migrations %}

We recommend creating a test organization to use as a destination for your trial migrations. {% data reusables.enterprise-migration-tool.about-test-organizations %}

1. Create a test organization for your trial migrations.
{% data reusables.enterprise-migration-tool.trial-migrations-tasks %}
{% data reusables.enterprise-migration-tool.configure-destination-ip-allow-list %} For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/managing-access-for-a-migration-from-azure-devops#configuring-ip-allow-lists-for-migrations)."
1. Run your production migrations. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/migrating-repositories-from-azure-devops-to-github-enterprise-cloud)."
{% data reusables.enterprise-migration-tool.delete-test-organization %}

## Completing follow-up tasks

{% data reusables.enterprise-migration-tool.follow-up-tasks-intro %}

* [Checking the migration status](#checking-the-migration-status)
* [Reviewing the migration log](#reviewing-the-migration-log)
* [Setting repository visibility](#setting-repository-visibility)
* [Configuring permissions](#configuring-permissions)
* [Reclaiming mannequins](#reclaiming-mannequins)
* [Configuring IP allow lists](#configuring-ip-allow-lists)

### Checking the migration status

{% data reusables.enterprise-migration-tool.checking-the-migration-status %}

### Reviewing the migration log

{% data reusables.enterprise-migration-tool.reviewing-the-migration-log %}

### Setting repository visibility

{% data reusables.enterprise-migration-tool.setting-repository-visibility %}

### Configuring permissions

Because permissions work differently in {% data variables.product.prodname_dotcom %} than in ADO, {% data variables.product.prodname_importer_proper_name %} does not attempt to migrate repository permissions from ADO.

If you used the ADO2GH CLI, {% data variables.product.prodname_importer_proper_name %} will create two teams in {% data variables.product.prodname_dotcom %} for each team project in ADO. Each team is granted a different level of access to all repositories that originated from the team project.

Team | Access to migrated repositories
-- | ---
TEAM-PROJECT</em>-Maintainers | Maintainer
TEAM-PROJECT</em>-Admins | Admin

To give access to migrated repositories, you can add people to these teams. You can do this manually on {% data variables.product.prodname_dotcom %}, or if you chose to link the teams to Azure Active Directory (AAD) groups during your migration, by managing group membership in AAD. For more information about manually managing team membership, see "[AUTOTITLE](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)."

If you aren't using the ADO2GH CLI, or if you require a permissions configuration that is more advanced than this default, configure permissions for your migrated repositories. You can modify the migration script to suit your needs, or you can manually configure permissions after your migration. For more information about managing access to repositories on {% data variables.product.prodname_dotcom %}, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)."

1. Decide what permissions structure you require in {% data variables.product.prodname_dotcom %}.
1. If different than the default, make a plan for setting up team membership and permissions.

### Reclaiming mannequins

{% data reusables.enterprise-migration-tool.reclaiming-mannequins %}

### Configuring IP allow lists

If you added the IP ranges for {% data variables.product.prodname_importer_proper_name %} to the IP allow list for your destination organization, you can remove those entries. {% data reusables.enterprise-migration-tool.reenable-idp-ip-restrictions %}

For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-azure-devops-to-github-enterprise-cloud/managing-access-for-a-migration-from-azure-devops#configuring-ip-allow-lists-for-migrations)."
