Anyone can fork a public repository, and then submit a pull request that proposes changes to the repository's {% data variables.product.prodname_actions %} workflows. Although workflows from forks do not have access to sensitive data such as secrets, they can be an annoyance for maintainers if they are modified for abusive purposes.

To help prevent this, workflows on pull requests to public repositories from some outside contributors will not run automatically, and might need to be approved first. By default, all first-time contributors require approval to run workflows.

{% note %}

**Note:** Workflows triggered by `pull_request_target` events are run in the context of the base branch. Since the base branch is considered trusted, workflows triggered by these events will always run, regardless of approval settings. For more information about the `pull_request_target` event, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#pull_request_target)."

{% endnote %}
