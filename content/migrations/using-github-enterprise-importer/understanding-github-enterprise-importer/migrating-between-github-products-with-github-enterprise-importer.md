---
title: Migrating between GitHub products with GitHub Enterprise Importer
shortTitle: Migrate between GitHub products
intro: 'Learn how to complete the entire process of migrating from one {% data variables.product.company_short %} product to another, from planning to implementation to completing follow-up tasks.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /early-access/github/migrating-with-github-enterprise-importer/understanding-github-enterprise-importer/migrating-between-github-products-with-github-enterprise-importer
  - /early-access/enterprise-importer/understanding-github-enterprise-importer/migrating-between-github-products-with-github-enterprise-importer
---

## About migrations between {% data variables.product.company_short %} products

With {% data variables.product.prodname_importer_proper_name %}, you can migrate to {% data variables.product.prodname_ghe_cloud %}. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer)".

If you're migrating between {% data variables.product.company_short %} products, such as from {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %}, you can use this guide to plan and implement your migration and complete follow-up tasks. For a full list of supported migration paths, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/migration-support-for-github-enterprise-importer#supported-migration-paths)."

## Planning your migration

{% data reusables.enterprise-migration-tool.planning-intro %}

- [Do we want to migrate by organization or by repository?](#do-we-want-to-migrate-by-organization-or-by-repository)
- [How soon do we need to complete the migration?](#how-soon-do-we-need-to-complete-the-migration)
- [Do we understand what will be migrated?](#do-we-understand-what-will-be-migrated)
- [Who will run the migration?](#who-will-run-the-migration)
- [Do we want to maintain a similar organization structure after migrating?](#do-we-want-to-maintain-a-similar-organization-structure-after-migrating)

### Do we want to migrate by organization or by repository?

First, if your migration source and destination are both {% data variables.product.prodname_dotcom_the_website %}, decide whether you want to migrate on an organization-by-organization basis or on a repository-by-repository basis.

{% note %}

**Note:** If you're migrating from {% data variables.product.prodname_ghe_server %}, you can only migrate repositories.

{% endnote %}

If you choose repository-by-repository migrations, only repository-level data is migrated. If you pick the organization-by-organization migration strategy, selected organization-level data is also migrated, including teams and their access to repositories.

However, when you migrate an organization, all repositories owned by the source organization are migrated at the same time. You cannot break the repositories into batches or skip migrating any of the organization's repositories. If you have a large number of repositories, or if you can't tolerate downtime for all your repositories at the same time, you might need to run repository migrations instead.

Additionally, an organization migration creates a new organization in the destination enterprise account. If you want to migrate repositories into an existing organization, you'll need to run repository migrations instead.

Finally, you must be an enterprise owner of the destination enterprise account to migrate organizations. If you want to task someone who is not an enterprise owner perform your migrations, they will need to run repository migrations.

### How soon do we need to complete the migration?

{% data reusables.enterprise-migration-tool.timeline-intro %}

- Number of repositories
- Number of pull requests
- Number of issues
- Number of users
- Usage of projects and wikis

Migration timing is largely based on the number of pull requests and issues in a repository. If you want to migrate 1,000 repositories, and each repository has 100 pull requests and issues on average, and only 50 users have contributed to the repositories, your migration will likely be very quick. If you want to migrate only 100 repositories, but the repositories each have 75,000 pull requests and issues on average, and 5,000 users, the migration will take longer and require much more planning and testing.

{% data reusables.enterprise-migration-tool.timeline-tasks %}

### Do we understand what will be migrated?

Ensure that you and your stakeholders understand what data can be migrated by {% data variables.product.prodname_importer_proper_name %}.

1. Review the data that's migrated for your migration source. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/migration-support-for-github-enterprise-importer)."
1. Make a list of any data that you'll need to manually migrate or recreate.

### Who will run the migration?

Decide who will run your migrations, and ensure that this person has the required access. Your options will depend on whether you're migrating by organization or by repository.

#### Deciding who will run organization migrations

To migrate an organization, you must be an organization owner for the source organization, or an organization owner must grant you the migrator role for that organization.

Additionally, you must be an enterprise owner on the destination enterprise account. You cannot grant the migrator role for enterprise accounts.

1. Confirm that the person who will run your migrations is an enterprise owner of the destination enterprise account.
1. If that person is not an organization owner for the source organization, grant them the migrator role for the organization. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/granting-the-migrator-role-for-github-enterprise-importer)."
{% data reusables.enterprise-migration-tool.confirm-migrator-has-correct-pats %}

#### Deciding who will run repository migrations

To migrate a repository, you must be an organization owner for both the source organization and the destination organization, or an organization owner must grant you the migrator role for each organization where you're not an owner.

1. Decide whether you want an organization owner to perform your migrations, or whether you need to grant the migrator role to someone else.
{% data reusables.enterprise-migration-tool.grant-migrator-tasks %}

   {% note %}

   **Note:** Remember to grant the migrator role for both the source organization and the destination organization.

   {% endnote %}
{% data reusables.enterprise-migration-tool.confirm-migrator-has-correct-pats %}

### Do we want to maintain a similar organization structure after migrating?

Next, consider whether you want to maintain a similar organizational structural after migrating. If you want to break your migration effort into batches, this will help you determine your batches. If you intend to keep a one-to-one correspondence between organizations in your source and destination, then we recommend batching migrations by organization. This is the simplest approach, especially if you're migrating from {% data variables.product.prodname_dotcom_the_website %}, because you can migrate an entire organization with one command. If you're migrating from another source, the {% data variables.product.prodname_cli %} can generate a script to migrate all repositories in a single organization.

If you intend to change your organizational structure, consider other batching factors. You can batch repositories owned by similar teams or a business division, or you can batch by the destination organization. We recommend batching by teams if possible. If you batch by business division or destination organizations, you'll increase the number of stakeholders involved, which can lead to shorter windows of time for your migrations.

Even if you change your organizational structure, you can still prepare a script for your migration. Use the {% data variables.product.prodname_cli %} command, then move the lines for each repository into different scripts as needed.

{% note %}

**Note:** You can run multiple batches simultaneously. For example, if you're batching by teams, you could run the migrations for multiple teams in the same time window.

{% endnote %}

{% data reusables.enterprise-migration-tool.organization-structure-tasks %}

## Running your migrations

{% data reusables.enterprise-migration-tool.running-your-migrations %}

For repository migrations, we recommend creating a test organization to use as a destination for your trial migrations. {% data reusables.enterprise-migration-tool.about-test-organizations %}

1. If you're running a repository migration, create a test organization for your trial migrations.
1. If your source organization uses IP allow lists, configure the list to allow access by {% data variables.product.prodname_importer_proper_name %}. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer#configuring-ip-allow-lists-for-migrations)."
{% data reusables.enterprise-migration-tool.trial-migrations-tasks %}
{% data reusables.enterprise-migration-tool.configure-destination-ip-allow-list %}
1. If you're running a repository migration and you want to migrate {% data variables.product.prodname_GH_advanced_security %} settings, enable {% data variables.product.prodname_GH_advanced_security %} for the destination organization. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."
1. Run your production migrations. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-repositories-with-github-enterprise-importer)" or "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-organizations-with-github-enterprise-importer)."
{% data reusables.enterprise-migration-tool.delete-test-organization %}

## Completing follow-up tasks

{% data reusables.enterprise-migration-tool.follow-up-tasks-intro %}

- [Reviewing the migration log](#reviewing-the-migration-log)
- [Migrating {% data variables.large_files.product_name_short %} objects](#migrating-git-lfs-objects)
- [Setting repository visibility](#setting-repository-visibility)
- [Configuring {% data variables.product.prodname_actions %}](#configuring-github-actions)
- [Configuring IP allow lists](#configuring-ip-allow-lists)
- [Managing {% data variables.product.prodname_GH_advanced_security %}](#managing-github-advanced-security)
- [Enabling webhooks](#enabling-webhooks)
- [Reinstalling {% data variables.product.prodname_github_apps %}](#reinstalling-github-apps)
- [Recreating teams](#recreating-teams)
- [Reclaiming mannequins](#reclaiming-mannequins)

### Reviewing the migration log

{% data reusables.enterprise-migration-tool.reviewing-the-migration-log %}

### Migrating {% data variables.large_files.product_name_short %} objects

{% data variables.product.prodname_importer_proper_name %} does not migrate {% data variables.large_files.product_name_short %} objects. If the source repository uses {% data variables.large_files.product_name_short %}, you can manually push {% data variables.large_files.product_name_short %} objects to the migrated repository locally. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/duplicating-a-repository#mirroring-a-repository-that-contains-git-large-file-storage-objects)."

### Setting repository visibility

{% data reusables.enterprise-migration-tool.setting-repository-visibility %}

### Configuring {% data variables.product.prodname_actions %}

If you use {% data variables.product.prodname_actions %} in a repository, your workflows are automatically migrated as part of the Git repository.

During the migration process, {% data variables.product.prodname_actions %} is disabled for all migrated repositories to avoid workflows being accidentally triggered, but {% data variables.product.prodname_actions %} is re-enabled when the migration finishes.

If you were using {% data variables.actions.hosted_runner %}s, self-hosted runners, or encrypted secrets, you must reconfigure them.

{% note %}

**Note:** Workflow run history for {% data variables.product.prodname_actions %} is not included in migrations.

{% endnote %}

1. If you use self-hosted runners, reconfigure your runners.

   - Add runners to the appropriate repository, organization, or enterprise. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners)."
   - To use runners at the organization or enterprise level, update your workflows. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-self-hosted-runners-in-a-workflow)."
1. If you use {% data variables.actions.hosted_runner %}s, reconfigure your runners.

   - Configure runner groups to control access to your runners. For more information, see "[AUTOTITLE]({% ifversion ghes or ghae %}/enterprise-cloud@latest{% endif %}/actions/using-github-hosted-runners/controlling-access-to-larger-runners)."
   - Set up your {% data variables.actions.hosted_runner %}s. For more information, see "[AUTOTITLE]({% ifversion ghes or ghae %}/enterprise-cloud@latest{% endif %}/actions/using-github-hosted-runners/managing-larger-runners)."
   - Update your workflows to point to your runners. For more information, see "[AUTOTITLE]({% ifversion ghes or ghae %}/enterprise-cloud@latest{% endif %}/actions/using-github-hosted-runners/running-jobs-on-larger-runners)."
1. Re-add any encrypted secrets.

   - To use the browser, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository)."
   - To use {% data variables.product.prodname_cli %}, see [`gh secret`](https://cli.github.com/manual/gh_secret) in the {% data variables.product.prodname_cli %} documentation.
1. Reconfigure environments. For more information, see "[AUTOTITLE](/actions/deployment/targeting-different-environments/using-environments-for-deployment)."

### Configuring IP allow lists

If you added the IP ranges for {% data variables.product.prodname_importer_proper_name %} to the IP allow lists for your source or destination organizations, you can remove those entries. {% data reusables.enterprise-migration-tool.reenable-idp-ip-restrictions %}

For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer)."

### Managing {% data variables.product.prodname_GH_advanced_security %}

If you enabled {% data variables.product.prodname_GH_advanced_security %} for the destination organization before migrating repositories, the settings for individual features were migrated. If not, you'll need to re-enable individual features after the migration. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)."

There are additional post-migration steps for each feature.

#### {% data variables.product.prodname_secret_scanning_caps %}

When secret scanning is enabled for the destination repository, a scan of the entire repository will be performed. After the scan is complete, all alerts will be populated, but without remediation states.

You can use the REST API to update the alerts to mirror any remediations in the source repository. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/rest/secret-scanning)" in the REST API documentation.

The user associated with these updated remediations will be the user who owns the {% data variables.product.pat_generic %} that was used for the API calls, not the user who remediated the alert in the source repository, and the date associated with the remediation will be the date of the API call, not the date the alert was remediated in the source repository.

#### {% data variables.product.prodname_code_scanning_caps %}

{% data variables.product.prodname_code_scanning_caps %} alerts are not migrated by {% data variables.product.prodname_importer_proper_name %}. However, the alerts are available as SARIF data in the source repository. You can use the REST API to upload this data to the destination repository. For more information, see "[Code Scanning](/enterprise-cloud@latest/rest/code-scanning)" in the REST API documentation.

{% data variables.product.prodname_code_scanning_caps %} alerts that are populated this way will differ from the original alerts in the source repository.

- Alerts will only include the detection and the latest state of the alert, not the entire timeline from the source repository.
- Alerts will only be identified as `open` or `fixed`. Other remediation states, such as `dismissed` and `reopened`, will be lost.
- The dates for all events on the alert will be the date of the API call, not the dates when the events originally occurred on the source repository.
- All actors, such as the alert creator, will change to the owner of the {% data variables.product.pat_generic %} used for the API call.

#### {% data variables.product.prodname_dependabot_alerts %}

When {% data variables.product.prodname_dependabot_alerts %} and the dependency graph are enabled, {% data variables.product.prodname_dependabot_alerts %} will be rebuilt from the current state of the default branch. Remediation states of these alerts are not migrated, and any previous alerts are also not migrated.

You'll need to re-add any encrypted secrets for {% data variables.product.prodname_dependabot %}. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot)."

### Enabling webhooks

All active webhooks in the source repository are migrated. However, the migrated webhooks will be disabled by default. You can re-enable these webhooks in the repository settings.

1. Navigate to the settings for the migrated repository.
1. In the "Code and automation" section of the sidebar, click **Webhooks**.
1. To the right of the webhook you want to enable, click **Edit**.
1. If you were using a secret token to secure the webhook, under "Secret", re-add the secret.
1. At the bottom of the page, select **Active**.
1. Click **Update webhook**.

### Reinstalling {% data variables.product.prodname_github_apps %}

If you had any {% data variables.product.prodname_github_apps %} installed on the source repository, you'll need to reinstall them on the migrated repository. For more information, see "[AUTOTITLE](/apps/maintaining-github-apps/installing-github-apps)."

### Recreating teams

If you migrated on an organization-by-organization basis, you only need to reinstate team membership. If you migrated on a repository-by-repository basis, you will need to recreate teams, give those teams access to repositories, and then reinstate team membership.

#### Recreating teams for organization migrations

Teams and their repository access are migrated as part of an organization migration, but team membership is not. After your migration, you must add users to the migrated teams.

We highly recommend using team synchronization to manage team membership through your identity provider (IdP). For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users)" or, for enterprises that do not use {% data variables.product.prodname_emus %}, "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-saml-for-enterprise-iam/managing-team-synchronization-for-organizations-in-your-enterprise)."

Otherwise, you can manually add members to your organization, and then add organization members to teams. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)."

#### Recreating teams for repository migrations

Teams are not migrated as part of a repository migration. You must manually recreate teams and give each team access to the repository.

1. Re-create teams. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/creating-a-team)."
1. Add organization members to teams. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)."
1. Give each team access to the repository. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository)."

### Reclaiming mannequins

{% data reusables.enterprise-migration-tool.reclaiming-mannequins %}
