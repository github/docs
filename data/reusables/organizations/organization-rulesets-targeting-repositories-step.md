With your ruleset, you can choose to target all repositories in your organization, repositories in your organization that match a certain naming convention, {% ifversion repository-properties %}repositories in your organization that have custom properties, {% endif %}or a list of manually selected repositories in your organization.

{% ifversion repository-properties %}

For more information about custom properties, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization)."

{% endif %}

If a repository is targeted by a ruleset created at the organization level, only owners of the organization can edit the ruleset. However, people with admin access to the repository, or with a custom role including the "edit repository rules" permission, can create additional rulesets at the repository level. The rules in these rulesets will be aggregated with the rules defined at the organization level. The result is that creating a new ruleset can make the rules targeting a branch or tag more restrictive, but never less restrictive. For more information on creating rulesets, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)."

#### Targeting all repositories in your organization

To target all repositories in your organization, in the "Target repositories" section, select {% octicon "goal" aria-hidden="true" %} **Target: REPOSITORIES**, then click **All repositories**.

#### Targeting repositories by naming convention in your organization

1. To target a dynamic list of repositories in your organization by naming convention, in the "Target repositories" section, select {% octicon "goal" aria-hidden="true" %} **Target: REPOSITORIES**, then click **Dynamic list of repositories**.
1. To begin defining a targeting pattern, in the "Targeting criteria" section, select **Add a target** {% octicon "triangle-down" aria-hidden="true" %}, then click **Include by pattern** or **Exclude by pattern**.
1. In the modal dialog that appears, enter a repository naming pattern using `fnmatch` syntax, then click **Add Inclusion pattern** or **Add Exclusion pattern**. For more information on `fnmatch` syntax, see "[Using `fnmatch` syntax](#using-fnmatch-syntax)."

   {% note %}

    **Note:** You can add multiple targeting criteria to the same ruleset. For example, you could include any repositories matching the pattern `*cat*`, then specifically exclude a repository matching the pattern `not-a-cat`.

   {% endnote %}

1. Optionally, on the ruleset configuration page, select **Prevent renaming of target repositories**.

{% ifversion repository-properties %}

#### Targeting repositories by properties in your organization

You can target repositories in your organization by custom properties. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization)."

1. To target a dynamic list of repositories in your organization by properties, in the "Target repositories" section, select {% octicon "goal" aria-hidden="true" %} **Target: REPOSITORIES**, then click **Dynamic list by property**.
1. To add a target, in the "Targeting criteria" section, select **Add a target** {% octicon "triangle-down" aria-hidden="true" %}, then click **Include by property** or **Exclude by property**.
1. In the modal dialog that appears, select a property from the dropdown menu, then select a value for the property.
1. Click **Add target**.

{% endif %}

#### Targeting select repositories in your organization

1. To target a static, manually selected list of repositories in your organization, in the "Target repositories" section, select {% octicon "goal" aria-hidden="true" %} **Target: REPOSITORIES**, then click **Select repositories**.
1. To select repositories to target, in the "Targeting criteria" section, select {% octicon "repo" aria-hidden="true" %} **Select repositories**, then search for the name of each repository you would like to target. Select each repository from the search results.
