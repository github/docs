---
title: About migrations
intro: 'A migration is the process of transferring data from a *source* location (either a {% data variables.product.prodname_dotcom_the_website %} organization or a {% data variables.product.prodname_ghe_server %} instance) to a *target* {% data variables.product.prodname_ghe_server %} instance. Migrations can be used to transfer your data when changing platforms or upgrading hardware on your instance.'
redirect_from:
  - /enterprise/admin/migrations/about-migrations
  - /enterprise/admin/user-management/about-migrations
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Types of migrations

There are three types of migrations you can perform:

- A migration from a {% data variables.product.prodname_ghe_server %} instance to another {% data variables.product.prodname_ghe_server %} instance. You can migrate any number of repositories owned by any user or organization on the instance. Before performing a migration, you must have site administrator access to both instances.
- A migration from a {% data variables.product.prodname_dotcom_the_website %} organization to a {% data variables.product.prodname_ghe_server %} instance. You can migrate any number of repositories owned by the organization. Before performing a migration, you must have [administrative access](/enterprise/user/articles/permission-levels-for-an-organization/) to the {% data variables.product.prodname_dotcom_the_website %} organization as well as site administrator access to the target instance.
- *Trial runs* are migrations that import data to a [staging instance](/enterprise/admin/guides/installation/setting-up-a-staging-instance/). These can be useful to see what *would* happen if a migration were applied to {% data variables.product.product_location %}. **We strongly recommend that you perform a trial run on a staging instance before importing data to your production instance.**

### Migrated data

In a migration, everything revolves around a repository. Most data associated with a repository can be migrated. For example, a repository within an organization will migrate the repository *and* the organization, as well as any users, teams, issues, and pull requests associated with the repository.

The items in the table below can be migrated with a repository. Any items not shown in the list of migrated data can not be migrated.

{% data reusables.enterprise_migrations.fork-persistence %}

| Data associated with a migrated repository | Замечания                                                                                                                                                                     |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Users                                      | **@mentions** of users are rewritten to match the target.                                                                                                                     |
| Organizations                              | An organization's name and details are migrated.                                                                                                                              |
| Repositories                               | Links to Git trees, blobs, commits, and lines are rewritten to match the target. The migrator follows a maximum of three repository redirects.                                |
| Wikis                                      | All wiki data is migrated.                                                                                                                                                    |
| Teams                                      | **@mentions** of teams are rewritten to match the target.                                                                                                                     |
| Milestones                                 | Timestamps are preserved.                                                                                                                                                     |
| Project boards                             | Project boards associated with the repository and with the organization that owns the repository are migrated.                                                                |
| Вопросы                                    | Issue references and timestamps are preserved.                                                                                                                                |
| Issue comments                             | Cross-references to comments are rewritten for the target instance.                                                                                                           |
| Pull requests                              | Cross-references to pull requests are rewritten to match the target. Timestamps are preserved.                                                                                |
| Pull request reviews                       | Pull request reviews and associated data are migrated.                                                                                                                        |
| Pull request review comments               | Cross-references to comments are rewritten for the target instance. Timestamps are preserved.                                                                                 |
| Commit comments                            | Cross-references to comments are rewritten for the target instance. Timestamps are preserved.                                                                                 |
| Релизы                                     | All releases data is migrated.                                                                                                                                                |
| Actions taken on pull requests or issues   | All modifications to pull requests or issues, such as assigning users, renaming titles, and modifying labels are preserved, along with timestamps for each action.            |
| File attachments                           | [File attachments on issues and pull requests](/articles/file-attachments-on-issues-and-pull-requests) are migrated. You can choose to disable this as part of the migration. |
| Webhooks                                   | Only active webhooks are migrated.                                                                                                                                            |
| Repository deploy keys                     | Repository deploy keys are migrated.                                                                                                                                          |
| Protected branches                         | Protected branch settings and associated data are migrated.                                                                                                                   |
