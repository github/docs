By default, dynamically provisioned {% data variables.product.github %}-hosted runners do not guarantee static IP addresses. This includes the runners that are used by default with {% data variables.product.prodname_dependabot %}.

If you use an IP allow list and {% data variables.product.prodname_dependabot %}, you must set up a self-hosted runner or enable {% data variables.product.prodname_dependabot %} for use with {% data variables.actions.hosted_runners %}. See [AUTOTITLE](/actions/concepts/runners/about-self-hosted-runners) and [AUTOTITLE](/code-security/dependabot/working-with-dependabot/about-dependabot-on-github-actions-runners#enabling-or-disabling-dependabot-on-larger-runners).

Additionally, to learn more about setting up a {% data variables.actions.hosted_runners %} with a static IP address configured, see [AUTOTITLE](/actions/concepts/runners/about-larger-runners).

To allow your self-hosted runners or {% data variables.actions.hosted_runners %} to communicate with {% data variables.product.github %}, add the IP address or IP address range of your runners to the IP allow list that you have configured for your enterprise.
