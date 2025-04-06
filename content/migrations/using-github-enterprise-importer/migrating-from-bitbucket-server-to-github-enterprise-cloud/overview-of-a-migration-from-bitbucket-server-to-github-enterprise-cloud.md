---
title: Overview of a migration from Bitbucket Server to GitHub Enterprise Cloud
shortTitle: Overview of a migration
intro: 'Learn about the process of migrating from Bitbucket Server to {% data variables.product.prodname_dotcom %} with {% data variables.product.prodname_importer_proper_name %}, from planning to implementation to completing follow-up tasks.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /early-access/enterprise-importer/understanding-github-enterprise-importer/migrating-from-bitbucket-server-with-github-enterprise-importer
  - /migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/migrating-from-bitbucket-server-with-github-enterprise-importer
---

## Overview

With {% data variables.product.prodname_importer_proper_name %}, you can migrate to {% data variables.product.prodname_ghe_cloud %} on a repository-by-repository basis. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer)."

If you're migrating from Bitbucket Server, you can use this guide to plan and implement your migration and complete follow-up tasks.

## Planning your migration

{% data reusables.enterprise-migration-tool.planning-intro %}

* [How soon do we need to complete the migration?](#how-soon-do-we-need-to-complete-the-migration)
* [Do we understand what will be migrated?](#do-we-understand-what-will-be-migrated)
* [Who will run the migration?](#who-will-run-the-migration)
* [What organizational structure do we want in {% data variables.product.prodname_dotcom %}?](#what-organizational-structure-do-we-want-in-github)

### How soon do we need to complete the migration?

Determine your timeline, which will largely dictate your approach. The first step for determining your timeline is to get an inventory of what you need to migrate.

* Number of repositories
* Number of pull requests

Migration timing is largely based on the number of pull requests in a repository. If you want to migrate 1,000 repositories, and each repository has 100 pull requests on average, and only 50 users have contributed to the repositories, your migration will likely be very quick. If you want to migrate only 100 repositories, but the repositories each have 75,000 pull requests on average, and 5,000 users, the migration will take much longer and require much more planning and testing.

After you take inventory of the repositories you need to migrate, you can weigh your inventory data against your desired timeline. If your organization can withstand a higher degree of change, then you might be able to migrate all your repositories at once, completing your migration efforts in a few days. However, you may have various teams that are not able to migrate at the same time. In this case, you might want to batch and stagger your migrations to fit the teams' timelines, extending your migration effort.

1. Determine how many repositories and pull requests you need to migrate.
1. To understand when teams can be ready to migrate, interview stakeholders.
1. Fully review the rest of this guide, then decide on a migration timeline.

### Do we understand what will be migrated?

Ensure that you and your stakeholders understand what data can be migrated by {% data variables.product.prodname_importer_proper_name %}.

For migrations from Bitbucket Server, {% data variables.product.prodname_importer_proper_name %} only migrates Git repositories and pull requests. Any other assets, such as CI pipelines, will remain in Bitbucket Server.

Because permissions work differently in {% data variables.product.prodname_dotcom %} than in Bitbucket Server, {% data variables.product.prodname_importer_proper_name %} does not attempt to migrate repository permissions from Bitbucket Server. For more information, see "[Configuring permissions](#configuring-permissions)."

1. Review the data that's migrated from Bitbucket Server. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/about-migrations-from-bitbucket-server-to-github-enterprise-cloud)."
1. Make a list of any data that you'll need to manually migrate or recreate.

### Who will run the migration?

To migrate a repository, you must be an organization owner for the destination organization in {% data variables.product.prodname_dotcom %}, or an organization owner must grant you the migrator role.

You must also have required permissions and access to your Bitbucket Server instance:

* Admin or super admin permissions
* If your Bitbucket Server instance runs Linux, SFTP access to the instance, using a supported SSH private key (see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/managing-access-for-a-migration-from-bitbucket-server#required-permissions-for-bitbucket-server)")
* If your Bitbucket Server instance runs Windows, file sharing (SMB) access to the instance

1. Decide whether you want an organization owner of the destination organization to perform your migrations, or whether you need to grant the migrator role to someone else.
{% data reusables.enterprise-migration-tool.grant-migrator-tasks %} For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/managing-access-for-a-migration-from-bitbucket-server#about-the-migrator-role)."
{% data reusables.enterprise-migration-tool.confirm-migrator-has-correct-pats %} For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/managing-access-for-a-migration-from-bitbucket-server#required-scopes-for-personal-access-tokens)."
1. Confirm the migrator has admin or super admin permissions and SFTP access for your Bitbucket Server instance.

### What organizational structure do we want in {% data variables.product.prodname_dotcom %}?

Next, plan the organizational structure you'll create in {% data variables.product.prodname_dotcom %}.

In Bitbucket Server, repositories are grouped into projects. In {% data variables.product.prodname_dotcom %}, repositories are owned by organizations. However, you should not assume that the best approach is to create one organization in {% data variables.product.prodname_dotcom %} per project in Bitbucket Server.

After migrating to {% data variables.product.prodname_dotcom %}, you should have only one enterprise account and a small number of organizations owned by that enterprise.

Each migrated repository will be owned by one of these organizations, which may result in a large list of ungrouped repositories within each organization. However, you can manage access to groups of repositories by creating teams on {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams)."

If you want to break your migration effort into batches, consider batching by organization.

{% data reusables.enterprise-migration-tool.organization-structure-tasks %}

## Running your migrations

{% data reusables.enterprise-migration-tool.running-your-migrations %}

We recommend creating a test organization to use as a destination for your trial migrations. {% data reusables.enterprise-migration-tool.about-test-organizations %}

1. Create a test organization for your trial migrations.
{% data reusables.enterprise-migration-tool.trial-migrations-tasks %}
{% data reusables.enterprise-migration-tool.configure-destination-ip-allow-list %} For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/managing-access-for-a-migration-from-bitbucket-server#configuring-ip-allow-lists-for-migrations)."
1. Run your production migrations. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/migrating-repositories-from-bitbucket-server-to-github-enterprise-cloud)."
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

Because permissions work differently in {% data variables.product.prodname_dotcom %} than in Bitbucket Server, {% data variables.product.prodname_importer_proper_name %} does not attempt to migrate repository permissions from Bitbucket Server.

To give access to migrated repositories, you can create teams and give each team access to the repository.

1. Create teams. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/creating-a-team)."
1. Add organization members to teams. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)."
1. Give each team access to the repository. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository)."

### Reclaiming mannequins

{% data reusables.enterprise-migration-tool.reclaiming-mannequins %}

### Configuring IP allow lists

If you added the IP ranges for {% data variables.product.prodname_importer_proper_name %} to the IP allow list for your destination organization, you can remove those entries. {% data reusables.enterprise-migration-tool.reenable-idp-ip-restrictions %}

For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/managing-access-for-a-migration-from-bitbucket-server#configuring-ip-allow-lists-for-migrations)."
