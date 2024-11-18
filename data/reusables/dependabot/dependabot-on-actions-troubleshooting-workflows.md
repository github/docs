After you set up {% data variables.product.prodname_dependabot %} updates for {% data variables.location.product_location %}, you may see failures when existing workflows are triggered by {% data variables.product.prodname_dependabot %} events.

By default, {% data variables.product.prodname_actions %} workflow runs that are triggered by {% data variables.product.prodname_dependabot %} from `push`, `pull_request`, `pull_request_review`, or `pull_request_review_comment` events are treated as if they were opened from a repository fork. Unlike workflows triggered by other actors, this means they receive a read-only `GITHUB_TOKEN` and do not have access to any secrets that are normally available. This will cause any workflows that attempt to write to the repository to fail when they are triggered by {% data variables.product.prodname_dependabot %}.

There are three ways to resolve this problem:

1. You can update your workflows so that they are no longer triggered by {% data variables.product.prodname_dependabot %} using an expression like: `if: github.actor != 'dependabot[bot]'`. For more information, see "[AUTOTITLE](/actions/learn-github-actions/expressions)."
1. You can modify your workflows to use a two-step process that includes `pull_request_target` which does not have these limitations. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions#responding-to-events)."
1. You can provide workflows triggered by {% data variables.product.prodname_dependabot %} access to secrets and allow the `permissions` term to increase the default scope of the `GITHUB_TOKEN`.
