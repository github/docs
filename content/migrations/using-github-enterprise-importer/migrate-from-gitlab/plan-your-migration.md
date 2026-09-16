---
title: "Plan your migration from GitLab to GitHub"
allowTitleToDifferFromFilename: true
shortTitle: "2. Plan your migration"
intro: Plan your migration by understanding your timeline, what data will be migrated, and your organizational structure.
versions:
  fpt: '*'
  ghec: '*'
contentType: other
---

## Determine how much you have to migrate

Figure out your timeline first, since it will largely shape your approach. The first step for determining your timeline is to get an inventory of what you need to migrate.

* Number of repositories (projects)
* Number of merge requests

>[!NOTE] Migration timing is largely based on the number of merge requests in a repository. If you want to migrate 1,000 repositories, and each repository has 100 merge requests on average, your migration will likely be very quick. If you want to migrate only 100 repositories, but the repositories each have 75,000 merge requests on average, the migration will take much longer and require more planning and testing.

We recommend the `inventory-report` command in the {% data variables.product.prodname_gl2gh_cli %}. This command connects to the GitLab API and creates two CSV files. `groups.csv` lists your GitLab groups, and `projects.csv` lists your projects, including the number of merge requests.

To produce the CSV files, use the following command, replacing `GITLAB_SERVER_URL` with the URL of your GitLab server (for example, `https://gitlab.com`) and `YOUR_GITLAB_GROUP` with the group you want to report on. To report on all projects you can access, omit `--gitlab-group`. For all available options, run `gh gl2gh inventory-report --help`.

```shell copy
gh gl2gh inventory-report --gitlab-server-url GITLAB_SERVER_URL --gitlab-group YOUR_GITLAB_GROUP
```

After you take inventory of the repositories you need to migrate, weigh your inventory data against your desired timeline.

* If your organization can withstand a higher degree of change, then you might be able to migrate all your repositories at once, completing your migration efforts in a few days.
* If you have teams that are not able to migrate at the same time, you might want to batch and stagger your migrations to fit the teams' timelines, extending your migration effort.

## Determine {% data variables.product.github %} organizational structure

Next, plan the organizational structure you'll create in {% data variables.product.github %}. GitLab and {% data variables.product.github %} have different ways of organizing an enterprise's work.

* GitLab: instance > groups > subgroups (which can be nested up to 20 levels deep) > projects (repositories)
* {% data variables.product.github %}: enterprise > organization > repositories

After migrating to {% data variables.product.github %}, you should have only one enterprise account and a number of organizations owned by that enterprise. Each top-level group from GitLab typically corresponds to a single organization on {% data variables.product.github %}. For guidance on how many organizations to create, see [AUTOTITLE](/enterprise-cloud@latest/admin/concepts/enterprise-best-practices/organize-work).

>[!NOTE] {% data variables.product.github %} does not have an equivalent of GitLab's nested subgroups. We do not recommend creating an organization on {% data variables.product.github %} for each subgroup, as this may result in a large list of ungrouped repositories within each organization. Instead, you can manage access to groups of repositories by creating teams.

If you want to break your migration effort into batches, the new structure can help you determine them. If you have more than one group in GitLab, and each group's repositories are reasonably sized batches, consider batching by group.

{% data reusables.enterprise-migration-tool.organization-structure-tasks %}

## Configuring repository permissions

Because permissions work differently in {% data variables.product.prodname_dotcom %} than in GitLab, {% data variables.product.prodname_importer_proper_name %} does not migrate repository permissions, group settings, or group membership from GitLab.

In GitLab, members are granted roles (such as Guest, Reporter, Developer, Maintainer, or Owner) at the group, subgroup, or project level, and these roles are inherited down the hierarchy. These roles do not map directly to {% data variables.product.prodname_dotcom %}, so you'll need to recreate access after migrating.

To give people access to migrated repositories on {% data variables.product.prodname_dotcom %}, we recommend creating teams and granting each team the appropriate level of access to the relevant organizations and repositories. You can then add people to those teams. See [AUTOTITLE](/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/teams-in-an-enterprise).
