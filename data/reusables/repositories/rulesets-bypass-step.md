1. Optionally, to grant bypass permissions for the ruleset, in the "Bypass list" section, click {% octicon "plus" aria-hidden="true" %} **Add bypass**.
   - In the "Add bypass" modal dialog that appears, search for the role, team, or app you would like to grant bypass permissions, then select the role, team, or app from the "Suggestions" section and click **Add Selected**.
   - The following are eligible for bypass access:
     - Repository or organization owners.
     - The maintain or write role, or custom repository roles based on the write role.
     - Teams.
     - {% data variables.product.prodname_github_apps %}.

   Optionally, to grant bypass to an actor without allowing them to push directly to a repository, select **Always** {% octicon "triangle-down" aria-hidden="true" %}, then click **For pull requests only**. That actor is now required to open a pull request to make changes to a repository, creating a clear digital trail with their changes. The actor can then choose to bypass any branch protections and merge that pull request.
