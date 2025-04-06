---
title: About ghe-migrator
intro: 'You can use `ghe-migrator` to transfer data from a *source* location (either a {% data variables.product.prodname_dotcom_the_website %} organization or a {% data variables.product.prodname_ghe_server %} instance) to a *target* {% data variables.product.prodname_ghe_server %} instance.'
redirect_from:
  - /enterprise/admin/migrations/about-migrations
  - /enterprise/admin/user-management/about-migrations
  - /admin/user-management/about-migrations
  - /admin/user-management/migrating-data-to-and-from-your-enterprise/about-migrations
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Migration
---

## Types of migrations

There are three types of migrations you can perform:

* A migration from a {% data variables.product.prodname_ghe_server %} instance to another existing {% data variables.product.prodname_ghe_server %} instance. You can migrate any number of repositories owned by any user or organization on the instance. Before performing a migration, you must have site administrator access to both instances.
* A migration from a {% data variables.product.prodname_dotcom_the_website %} organization to a {% data variables.product.prodname_ghe_server %} instance. You can migrate any number of repositories owned by the organization. Before performing a migration, you must have [administrative access](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) to the {% data variables.product.prodname_dotcom_the_website %} organization as well as site administrator access to the target instance.
* _Trial runs_ are migrations that import data to a [staging instance]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance). These can be useful to see what _would_ happen if a migration were applied to {% data variables.location.product_location %}. **We strongly recommend that you perform a trial run on a staging instance before importing data to your production instance.**

{% note %}

**Note:** The use of ghe-migrator is **not recommended** for transferring a {% data variables.product.prodname_ghe_server %} instance between hypervisors. Instead, we suggest either backing up and restoring to the new location with {% data variables.product.prodname_enterprise_backup_utilities %}, or creating a replica in the new location and then failing over to the replica appliance. For more information, see "[AUTOTITLE]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)", "[AUTOTITLE]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/enterprise-management/configuring-high-availability/creating-a-high-availability-replica)" and "[AUTOTITLE]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/enterprise-management/configuring-high-availability/initiating-a-failover-to-your-replica-appliance)."

{% endnote %}

## Migrated data

With ghe-migrator, everything revolves around a repository. Most data associated with a repository can be migrated. For example, a repository within an organization will migrate the repository _and_ the organization, as well as any users, teams, issues, and pull requests associated with the repository.

The items in the table below can be migrated with a repository. Any items not shown in the list of migrated data cannot be migrated, including {% data variables.large_files.product_name_short %} assets.

{% data reusables.enterprise_migrations.fork-persistence %}

|  Data associated with a migrated repository | Notes  |
|---------------------------------------------|--------|
| Users | **@mentions** of users are rewritten to match the target.
| Organizations | An organization's name and details are migrated.
| Repositories | Links to Git trees, blobs, commits, and lines are rewritten to match the target. Internal repositories are migrated as private repositories. Archive status is unset.
| Wikis | All wiki data is migrated.
| Teams | **@mentions** of teams are rewritten to match the target.
| Milestones | Timestamps are preserved.
| {% data variables.product.prodname_projects_v1_caps %} boards | {% data variables.projects.projects_v1_boards_caps %} associated with the repository and with the organization that owns the repository are migrated. {% data variables.product.prodname_projects_v2 %}, the all-new projects experience, is not supported.
| Issues | Issue references and timestamps are preserved.
| Issue comments | Cross-references to comments are rewritten for the target instance.
| Pull requests | Cross-references to pull requests are rewritten to match the target. Timestamps are preserved.
| Pull request reviews | Pull request reviews and associated data are migrated.
| Pull request review comments | Cross-references to comments are rewritten for the target instance. Timestamps are preserved. File-level comments are not migrated.
| Commit comments | Cross-references to comments are rewritten for the target instance. Timestamps are preserved.
| Releases | All releases data is migrated.
| Actions taken on pull requests or issues | All modifications to pull requests or issues, such as assigning users, renaming titles, and modifying labels are preserved, along with timestamps for each action.
|  File attachments | [File attachments on issues and pull requests](/get-started/writing-on-github/working-with-advanced-formatting/attaching-files) are migrated. You can choose to disable this as part of the migration.
| Webhooks | Only active webhooks are migrated.
| Repository deploy keys | Repository deploy keys are migrated.
| Protected branches | Protected branch settings and associated data are migrated.

## About migration of external authentication data

If the source location for your migration is a {% data variables.product.company_short %} product that uses LDAP or SAML authentication, `ghe-migrator` does not migrate external authentication data linked to user accounts. For more information about authentication options, see {% data variables.product.prodname_ghe_server %}, see "About authentication for your enterprise" in the "[{% data variables.product.prodname_ghe_server %} docs](/enterprise-server@latest/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)" or the [{% data variables.product.prodname_ghe_cloud %} docs](/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise).

If you migrate to a destination instance and then configure external authentication, users must sign in to the destination instance with a user account that has the same username or user ID as the account on the source instance. Administrators can review the external attribute that an instance uses to map user account names from the {% data variables.enterprise.management_console %}. For more information, see "[AUTOTITLE]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/administering-your-instance/administering-your-instance-from-the-web-ui/accessing-the-management-console)."
