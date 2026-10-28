Your {% data variables.product.github %} plan includes a monthly amount of **included compute usage**. Each product measures usage in its own units and applies its own rate. {% data variables.product.github %} calculates the cost of that usage, which counts against the included compute usage. After the included amount is consumed, additional usage is billed to your account. The included amount resets at the start of each billing cycle.

The following usage can draw from the same included compute usage:

* **Standard {% data variables.actions.github_hosted_runners %}** for private or internal repositories, and **cloud sandbox compute and memory**, on all plans.
* **{% data variables.actions.hosted_runners_caps %}**, where available, when the billing account uses {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %}.

No eligible usage type has priority over another when drawing from the shared included compute usage.

The following usage remains free independently and does not reduce the included compute usage:

* Standard {% data variables.actions.github_hosted_runners %} in public repositories. See [AUTOTITLE](/actions/how-tos/write-workflows/choose-where-workflows-run/choose-the-runner-for-a-job#standard-github-hosted-runners-for-public-repositories).
* Self-hosted runners.

{% data variables.actions.hosted_runners_caps %} are billed for public repositories.
