1. Use options in the page summary to filter results to show the repositories you want to assess. The list of repositories and metrics displayed on the page automatically update to match your current selection. For more information on filtering, see [AUTOTITLE](/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/filtering-alerts-in-security-overview).
{% ifversion ai-powered-security-detections %}
   For **AI Scan for pull requests**, the summary shows the number of repositories where the feature is enabled or not enabled, and the repository list shows each repository's status. An `enabled` status reflects effective enablement after enterprise policy, organization configuration, prerequisites, and any repository opt-out are applied. A `not enabled` status can include repositories that are ineligible for AI Scan, and security overview does not distinguish the reason why the feature is not enabled.
{% endif %}
    * Use the **Teams** dropdown to show information only for the repositories owned by one or more teams. For more information, see [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-team-access-to-an-organization-repository).
    * Click **NUMBER enabled** or **NUMBER not enabled** in the header for any feature to show only the repositories with that feature enabled or not enabled.
    * At the top of the list of repositories, click **NUMBER Archived** to show only repositories that are archived.
    * Click in the search box to add further filters to the repositories displayed.
