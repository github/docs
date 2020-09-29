---
title: Managing repositories
intro: 'You can manage the repositories connected to {% data variables.product.prodname_insights %} and the data included in metrics for each repository.'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/managing-repositories
permissions: 'People with admin permissions in {% data variables.product.prodname_insights %} can manage repositories.'
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '*'
---

### About repository management

For {% data variables.product.prodname_insights %} to include data from a repository in {% data variables.product.prodname_enterprise %}, you must add the organization that owns the repository to {% data variables.product.prodname_insights %}. For more information, see "[Managing organizations](/github/installing-and-configuring-github-insights/managing-organizations)."

After you add an organization to {% data variables.product.prodname_insights %}, each repository owned by the organization is automatically imported if the repository:
- Has at least one commit
- Is not private
- Is not archived
- Has been pushed to in the last 6 months

Repository data is updated through webhooks and periodic synchronizations. You can manually refresh repository data at any time or cancel a data import that is in progress.

{% data reusables.github-insights.repository-groups %}

You can exclude specific files from {% data variables.product.prodname_insights %} for a specific repository or for all repositories.

### About import times

{% data variables.product.prodname_insights %} imports the last three years of data for each repository. Depending on the size and complexity of your repositories, the initial import can some time, during which {% data variables.product.prodname_insights %} data is incomplete. Typically, the initial import of a few teams will take one or two days. Large and complex initial imports can take up to two weeks.

| Repository Size           | Initial import time |
| ------------------------- | ------------------- |
| < 10,000 commits          | < 1 hour            |
| 10,000 to 300,000 commits | 1 to 10 days        |
| 300,000 commits or more   | 10 days +           |

Once the initial import is complete, subsequent imports from incremental changes should take two minutes or less.

To reduce import times, you can exclude any third party libraries in non-standard folders from {% data variables.product.prodname_insights %} before importing. For more information, see using "[Managing exclusion filters](#managing-exclusion-filters)."

If you have many large repositories, you can improve initial import times by providing the application server with more cores. Application servers with more cores can perform more parallel import jobs.

| Application server cores | Parallel initial import jobs |
| ------------------------ | ---------------------------- |
| 16 core                  | 1 job                        |
| 32 core                  | 4 jobs                       |

Importing a large number of pull requests can trigger rate-limiting from {% data variables.product.prodname_enterprise %}. In this case, importing will pause for one hour before resuming. You can temporarily increase the {% data variables.product.prodname_enterprise %} rate limit to improve import times. For more information, see "[Configuring rate limits](/enterprise/{{ currentVersion }}/admin/installation/configuring-rate-limits)."

### Viewing and managing repositories

You can view imported repositories and repositories that are available to import. If an import is in progress, you can see the import's status and a time estimate for the import's completion.

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repositories-tab %}
3. Optionally, to add a repository which has not been imported, to the right of the repository's name, click **Add**. ![Add button](/assets/images/help/insights/add-button.png)
4. Optionally, to manually refresh repository data, to the right of the repository's name, click **{% octicon "sync" aria-label="The refresh icon" %}** the refresh icon. ![Refresh button](/assets/images/help/insights/refresh-button.png)
5. Optionally, to cancel an import in progress, to the right of the repository's name, click **Cancel**. ![Cancel button](/assets/images/help/insights/cancel-button.png)
6. Optionally, to remove an imported repository, to the right of the repository's name, click **Remove**. ![Remove button](/assets/images/help/insights/remove-button.png)

### Managing repository groups for reports

You can create a repository group, add or remove repositories to a group, and delete a repository group.

#### Creating a repository group

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repo-groups-tab %}
2. In the upper-right corner, click **Create Group**. ![Create Group button](/assets/images/help/insights/create-group.png)
3. Under "Group Name", type a name for your group. ![Group Name field](/assets/images/help/insights/group-name.png)
4. Click **Create**.

#### Adding a repository to a repository group

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repo-groups-tab %}
{% data reusables.github-insights.edit-group %}
4. Under "Repositories", use the drop-down menu and select a repository to add to the group. ![Repositories drop-down menu](/assets/images/help/insights/repositories-drop-down.png)
5. Click **Done**.

#### Deleting a repository group

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repo-groups-tab %}
{% data reusables.github-insights.edit-group %}
4. Click **Delete Group**. ![Delete Group button](/assets/images/help/insights/delete-group.png)
5. Click **Confirm**.

### Managing exclusion filters

You can create a list of file exclusion rules to omit specified files from all {% data variables.product.prodname_insights %} data. File exclusion rules follow the same rules used in *.gitignore* files. For more information, see "[gitignore](https://git-scm.com/docs/gitignore)" in the Git documentation.

#### Adding a file exclusion rule for all repositories

Changes to global file exclusions only apply to newly imported data and will not retroactively affect existing data. To apply new exclusion rules to existing data, you can remove and re-add repositories to {% data variables.product.prodname_insights %}.

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.exclude-files-tab %}
3. Optionally, under "Exclude files", select **Include all binaries**. ![Include all binaries checkbox](/assets/images/help/insights/include-all-binaries-global.png)
4. In the code editor, add a new exclusion rule to the list. ![Code editor to add global exclusion rule](/assets/images/help/insights/global-exclusion-list.png)
5. Click **Save Changes**.

#### Adding a file exclusion rule for a repository

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.exclude-files-tab %}
3. To the right of "Repositories with File Filters", click **Add Filter**. ![Add Filter button](/assets/images/help/insights/add-filter.png)
4. Use the "Repository" drop-down menu, and select a repository. ![Repository drop-down menu](/assets/images/help/insights/repository-drop-down-exclude.png)
5. Optionally, to apply exclusion rules to existing data, select **Re-import**. ![Re-import checkbox](/assets/images/help/insights/re-import-checkbox.png)
6. Optionally, select **Include all binaries**. ![Include all binaries checkbox](/assets/images/help/insights/include-all-binaries-repo.png)
7. In the code editor, add exclusion rules you want to apply to the repository. ![Code editor to add repository exclusion rule](/assets/images/help/insights/repo-exclusion-list.png)
8. Click **Create Filter**.
