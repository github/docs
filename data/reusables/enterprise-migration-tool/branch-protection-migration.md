Branch protections apply a specified set of rules to a specific branch name or branch name pattern. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)."

Branch protections will always be migrated, but certain rules will not be migrated. The following branch protection rules are not migrated.

* Allow specific actors to bypass required pull requests
* Require approval of the most recent push
* Require deployments to succeed before merging
* Lock branch
* Restrict pushes that create matching branches
* Allow force pushes

The following limitations also apply:

* If a branch protection rule optionally allows you to specify people, teams, or apps that are exempt from the rule, such as "Restrict who can dismiss pull request reviews," the exceptions will not be migrated.
* If the "Allow force pushes" rule is enabled in "Specify who can force push" mode, the rule will not be migrated.
