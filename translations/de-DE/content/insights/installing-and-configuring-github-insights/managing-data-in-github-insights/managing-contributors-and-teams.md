---
title: Managing contributors and teams
intro: You can manage the people and teams included in metrics and reports.
redirect_from:
  - /github/installing-and-configuring-github-insights/managing-contributors-and-teams
  - /insights/installing-and-configuring-github-insights/managing-contributors-and-teams
permissions: 'People with admin permissions in {% data variables.product.prodname_insights %} can manage contributors and teams.'
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '*'
---

### About contributors and teams in {% data variables.product.prodname_insights %}

A contributor in {% data variables.product.prodname_insights %} is an entity associated with {% data variables.product.prodname_enterprise %} data. You can edit and hide contributors.

Sometimes, the same person can appear as more than one contributor. For example, if one person has used multiple commit email addresses in Git, there will be a unique contributor for each email address in {% data variables.product.prodname_insights %}. You can merge multiple contributors to combine all the data from one person.

You can also group contributors into teams. You can use teams as a filter on reports. For more information, see "[Viewing key metrics and reports](/insights/exploring-your-usage-of-github-enterprise/viewing-key-metrics-and-reports)."

### Editing a contributor

You can edit a contributor's display name in {% data variables.product.prodname_insights %}.

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
{% data reusables.github-insights.edit-contributor %}
4. Under "First Name", type the contributor's first name. ![First Name field](/assets/images/help/insights/first-name.png)
5. Under "Last Name", type the contributor's last name. ![Last Name field](/assets/images/help/insights/last-name.png)
6. Klicke auf **Rename** (Umbenennen).

### Managing contributor visibility

Hiding a contributor excludes all data associated with that contributor from all metrics.

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
{% data reusables.github-insights.edit-contributor %}
3. Select or deselect **Show contributor**. ![Checkbox to show or hide contributor](/assets/images/help/insights/show-contributor.png)
4. Klicke auf **Done** (Fertig).

### Merging contributor data

When you merge two or more contributors, the {% data variables.product.prodname_insights %} data for those contributors becomes associated with one primary contributor. All of the merged contributor data belongs to the primary contributor in metrics.

You can merge contributors manually or automatically, based on contributors {% data variables.product.prodname_insights %} has detected with matching names.

#### Auto-merging contributors

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
3. Under "All Contributors", click **Auto-Merge** ![Auto-Merge button](/assets/images/help/insights/auto-merge.png)
4. Optionally, to exclude a contributor from being merged, to the right of the contributor, click **Skip**. ![Skip button](/assets/images/help/insights/skip-contributor.png)
5. For each group, select a primary contributor. ![Radio buttons to select primary contributor](/assets/images/help/insights/select-primary.png)
6. Click **Merge All**.

#### Manually merging contributors

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
3. Select the contributors you want to merge. ![Select contributors](/assets/images/help/insights/select-contributors.png)
4. Under "All Contributors", click **Merge**. ![Merge button](/assets/images/help/insights/merge-button.png)
5. Select a primary contributor. ![Radio buttons to select primary contributor](/assets/images/help/insights/select-primary.png)
6. Click **Merge accounts**.

#### Unmerging a contributor

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
4. To the right of the contributor, click **Unmerge**. ![Unmerge button](/assets/images/help/insights/unmerge-contributor.png)

### Managing teams in {% data variables.product.prodname_insights %}

There are two types of teams in {% data variables.product.prodname_insights %}: teams imported from {% data variables.product.product_name %} and custom teams.

When an organization is added to {% data variables.product.prodname_insights %}, all of the organization's teams are imported from {% data variables.product.product_name %}. You can search and filter by these teams in {% data variables.product.prodname_insights %}. You can manage the teams in {% data variables.product.product_name %}.

You can create and manage custom teams in {% data variables.product.prodname_insights %}. Custom teams may include members from multiple organizations in {% data variables.product.product_name %}.

#### Creating a custom team

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
2. To the right of "Teams", click **Create Team**. ![Create Team button](/assets/images/help/insights/create-team.png)
3. Under "Team Name", type a unique name for your team. ![Team Name field](/assets/images/help/insights/team-name.png)
4. Klicke auf **Create** (Erstellen).

#### Adding contributors to a custom team

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
{% data reusables.github-insights.edit-team %}
3. Under "Contributors", use the drop-down menu and select a contributor. ![Contributors drop-down](/assets/images/help/insights/contributors-drop-down.png)
4. Klicke auf **Done** (Fertig).

#### Removing a contributor from a custom team

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
{% data reusables.github-insights.edit-team %}
3. To the right of the contributor you'd like to remove, click {% octicon "trash" aria-label="The trash icon" %}. ![trash button](/assets/images/help/insights/contributor-trashcan.png)

#### Renaming a custom team

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
{% data reusables.github-insights.edit-team %}
3. Under "Team Name", type a unique name for your team. ![Team Name field](/assets/images/help/insights/rename-team.png)
4. Klicke auf **Rename** (Umbenennen). ![Rename button](/assets/images/help/insights/rename-button-team.png)
5. Klicke auf **Done** (Fertig).

#### Deleting a custom team

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
{% data reusables.github-insights.edit-team %}
3. Click **Delete Team**. ![Delete Team button](/assets/images/help/insights/delete-team.png)
4. Click **Confirm**.
