---
title: "Phase 4. Prepare for your migration from Azure DevOps to GitHub"
shortTitle: "4. Prepare to migrate"
intro: Plan your migration by understanding your timeline, what data will be migrated, and your organizational structure.
versions:
  fpt: '*'
  ghec: '*'
contentType: other
---

## Determine how much you have to migrate

Determine your timeline, which will largely dictate your approach. The first step for determining your timeline is to get an inventory of what you need to migrate.

* Number of repositories
* Number of pull requests

>[!NOTE] Migration timing is largely based on the number of pull requests in a repository. If you want to migrate 1,000 repositories, and each repository has 100 pull requests on average, your migration will likely be very quick. If you want to migrate only 100 repositories, but the repositories each have 75,000 pull requests on average, the migration will take much longer and require more planning and testing.

We recommend the `inventory-report` command in the {% data variables.product.prodname_ado2gh_cli %}. This command will connect with the Azure DevOps API, and then create several CSV files. `repos.csv` contains information about your repositories, including the number of pull requests.

To produce the CSV files, use the following command, replacing `YOUR_ADO_ORG` with your organization on Azure DevOps.

```shell copy
gh ado2gh inventory-report --ado-org YOUR_ADO_ORG
```

After you take inventory of the repositories you need to migrate, weigh your inventory data against your desired timeline.

* If your organization can withstand a higher degree of change, then you might be able to migrate all your repositories at once, completing your migration efforts in a few days.
* If you have teams that are not able to migrate at the same time, you might want to batch and stagger your migrations to fit the teams' timelines, extending your migration effort.

## Determine {% data variables.product.github %} organizational structure

Next, plan the organizational structure you'll create in {% data variables.product.github %}. ADO and {% data variables.product.github %} have different ways of organizing an enterprise's work.

* ADO: Organization > team project > repositories
* {% data variables.product.github %}: Enterprise > organization > repositories

After migrating to {% data variables.product.github %}, you should have only one enterprise account and a small number of organizations owned by that enterprise. Each organization from ADO should correspond to a single organization on {% data variables.product.github %}.

>[!NOTE] The concept of a team project, which is used to group repositories in ADO, does not exist in {% data variables.product.github %}. We do not recommend creating an organization on {% data variables.product.github %} for each team project on ADO, as this may result in a large list of ungrouped repositories within each organization. However, you can manage access to groups of repositories by creating teams.

If you want to break your migration effort into batches, the new structure can help you determine them. If you have more than one organization in ADO, and each organization's repositories are reasonably sized batches, consider batching by organization.

{% data reusables.enterprise-migration-tool.organization-structure-tasks %}

## Configuring repository permissions

Because permissions work differently in {% data variables.product.prodname_dotcom %} than in ADO, {% data variables.product.prodname_importer_proper_name %} does not attempt to migrate repository permissions from ADO.

When you use ADO2GH CLI, {% data variables.product.prodname_importer_proper_name %} will create two teams in {% data variables.product.prodname_dotcom %} for each team project in ADO. Each team is granted a different level of access to all repositories that originated from the team project.

Team | Access to migrated repositories
--- | ---
TEAM-PROJECT-Maintainers | Maintainer
TEAM-PROJECT-Admins | Admin

To give access to migrated repositories, you can add people to these teams. You can do this manually on {% data variables.product.prodname_dotcom %}, or if you chose to link the teams to Azure Active Directory (AAD) groups during your migration, by managing group membership in AAD. For more information about manually managing team membership, see [AUTOTITLE](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team).

## Next steps

In the next phase, you'll perform a dry run and then migrate your repositories. See [AUTOTITLE](/migrations/ado/phase-5-migrate-your-repositories-from-azure-devops-to-github).