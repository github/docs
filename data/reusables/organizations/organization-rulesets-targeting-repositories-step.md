With your ruleset, you can choose to target all repositories in your organization, repositories in your organization that match a certain naming convention, repositories in your organization that have custom properties, or a list of manually selected repositories in your organization.

For more information about custom properties, see [AUTOTITLE](/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization).

If a repository is targeted by a ruleset created at the organization level, only owners of the organization can edit the ruleset. However, people with admin access to the repository, or with a custom role including the "edit repository rules" permission, can create additional rulesets at the repository level. The rules in these rulesets will be aggregated with the rules defined at the organization level. The result is that creating a new ruleset can make the rules targeting a branch or tag more restrictive, but never less restrictive. For more information on creating rulesets, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

#### Targeting repositories by properties in your organization

You can target repositories in your organization by custom properties. See [AUTOTITLE](/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization).

1. To target a dynamic list of repositories in your organization by properties, in the "Target repositories" section, next to "Repository targeting criteria" select **Repositories matching a filter**.
1. To add a target, in the filter section, **enter a query** for example, `visibility:private props.team:infra -language:java` or **Select by filter**.
1. In the modal dialog that appears, select custom or system properties from the dropdown menu, then select a value for each property.
1. Click **Apply**.

#### Targeting all repositories in your organization

To target all repositories in your organization, in the "Target repositories" section, next to "Repository targeting criteria", select **All repositories**.

#### Targeting select repositories in your organization

1. To target a static, manually selected list of repositories in your organization, in the "Target repositories" section, next to "Repository targeting criteria", select  **Only selected repositories**.
1. To select repositories to target, in the "Targeting criteria" section, select **{% octicon "repo" aria-hidden="true" aria-label="repo" %} Select repositories**, then search for the name of each repository you would like to target. Select each repository from the search results.

#### Targeting repositories by naming convention in your organization

1. To target a dynamic list of repositories in your organization by naming convention, in the "Target repositories" section, next to "Repository targeting criteria", select **Repositories matching a name**.
1. To begin defining a targeting pattern, in the "Targeting criteria" section, select **Add a target** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %}, then click **Include by pattern** or **Exclude by pattern**.
1. In the modal dialog that appears, enter a repository naming pattern using `fnmatch` syntax, then click **Add Inclusion pattern** or **Add Exclusion pattern**. For more information on `fnmatch` syntax, see [Using `fnmatch` syntax](#using-fnmatch-syntax).

   > [!NOTE]
   > You can add multiple targeting criteria to the same ruleset. For example, you could include any repositories matching the pattern `*cat*`, then specifically exclude a repository matching the pattern `not-a-cat`.

1. Optionally, on the ruleset configuration page, select **Prevent renaming of target repositories**.
