{% data variables.product.prodname_dependabot %} is a first-party {% data variables.product.github %} App whose access to repositories is exempt from IP allow list restrictions. This means {% data variables.product.prodname_dependabot %} can read repository contents and create pull requests regardless of your IP allow list configuration.

However, if your {% data variables.product.prodname_dependabot %} workflows include additional steps that use the `GITHUB_TOKEN` or other tokens to make API calls, those steps may still be subject to IP allow list enforcement. In that case, dynamically provisioned {% data variables.product.github %}-hosted runners do not guarantee static IP addresses, so those calls may fail.

If your {% data variables.product.prodname_dependabot %} workflows need to make additional authenticated API calls beyond what {% data variables.product.prodname_dependabot %} itself performs, you must set up a self-hosted runner or enable {% data variables.product.prodname_dependabot %} for use with {% data variables.actions.hosted_runners %}. See [AUTOTITLE](/actions/concepts/runners/about-self-hosted-runners) and [AUTOTITLE](/code-security/dependabot/working-with-dependabot/about-dependabot-on-github-actions-runners#enabling-or-disabling-dependabot-on-larger-runners).

Additionally, to learn more about setting up a {% data variables.actions.hosted_runners %} with a static IP address configured, see [AUTOTITLE](/actions/concepts/runners/about-larger-runners).

To allow your self-hosted runners or {% data variables.actions.hosted_runners %} to communicate with {% data variables.product.github %}, add the IP address or IP address range of your runners to the IP allow list that you have configured for your enterprise.
