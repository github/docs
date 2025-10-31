By default, {% data variables.product.prodname_dependabot %} raises pull requests with the `dependencies` label.

{% data variables.product.prodname_dependabot %} also applies an ecosystem label, such as `java`, `npm`, or `github-actions`, to pull requests. {% data variables.product.prodname_dependabot %} adds both the `dependencies` label and the ecosystem label to all pull requests, including single-ecosystem updates, to improve filtering and triaging.

{% data variables.product.prodname_dependabot %} creates the default labels it applies to pull requests if they do not already exist in the repository. If you want to use custom labels instead of the defaults, you can set the `labels` option in your `dependabot.yml` file per package ecosystem; this overrides the defaults. For more information, see [AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/managing-labels) and [`labels`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#labels--).
