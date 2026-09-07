## About workflow execution protections

Workflow execution protections let you define an allow list that controls who can trigger {% data variables.product.prodname_actions %} workflows and which events are permitted to run them. Previously, a workflow ran based on the workflow file in the commit that triggered it, and an attacker with repository access could modify that file to run malicious code. Workflow execution protections close that gap. Administrators define the rules, and {% data variables.product.prodname_actions %} evaluates them before a workflow runs, so an unauthorized actor or event never reaches execution.

Workflow execution protections are available at the enterprise, organization, and repository levels.

## Backed by rulesets

Workflow execution protections are built on the {% data variables.product.github %} rulesets framework, so the targeting you already know from rulesets works here too. You can apply protections with rulesets and scope them to specific repositories using repository custom properties. This means you can enforce broad protections from one place rather than configuring each workflow file individually. For more information about rulesets, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

You can also use evaluate mode to run your rules without enforcing them. Evaluate mode shows you exactly what a rule would block before you enforce it, so you can roll out policies without breaking existing workflows.

## Available rules

Event and actor are the first two rules, and {% data variables.product.github %} plans to add more rules over time.

* **Actor rules** control who can trigger workflows, including individual users, repository roles such as Read, Maintain, and Admin, {% data variables.product.prodname_github_apps %}, {% data variables.product.prodname_copilot_short %}, and {% data variables.product.prodname_dependabot %}.
* **Event rules** control which events are permitted, such as `push`, `pull_request`, `pull_request_target`, and `workflow_dispatch`.

By default, every user with write access to a repository can trigger workflows. Actor rules let you separate who contributes code from who runs your CI, so you can grant a contributor write access without granting them the ability to execute workflows.

## Stop common attacker techniques

Workflow execution protections disrupt several real-world attack patterns:

* **Poisoned pipeline execution from pull requests.** Restrict or prohibit `pull_request_target`, including in public repositories where it is most often exploited.
* **Manual-trigger abuse.** Limit `workflow_dispatch` to maintainers so untrusted identities cannot start workflows.
* **Untrusted-actor execution.** Block low-trust identities from triggering workflows entirely.
* **Misconfiguration exploitation.** Apply central policy that overrides any single misconfigured workflow file.
