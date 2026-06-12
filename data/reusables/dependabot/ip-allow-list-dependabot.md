{% data variables.product.prodname_dependabot %} is a first-party {% data variables.product.github %} App whose repository access is exempt from IP allow list restrictions. This means {% data variables.product.prodname_dependabot %} can read dependency files and create pull requests regardless of your IP allow list configuration.

If {% data variables.product.prodname_dependabot %} jobs running on {% data variables.product.prodname_actions %} runners need to reach external resources that require predictable IP addresses (for example, private package registries behind a firewall), you should set up a self-hosted runner or configure {% data variables.actions.hosted_runners %} with a static IP address range. See [AUTOTITLE](/actions/concepts/runners/about-self-hosted-runners) and [AUTOTITLE](/code-security/dependabot/working-with-dependabot/about-dependabot-on-github-actions-runners#enabling-or-disabling-dependabot-on-larger-runners).

Additionally, to learn more about configuring {% data variables.actions.hosted_runners %} with a static IP address range, see [AUTOTITLE](/actions/concepts/runners/about-larger-runners).

To allow your self-hosted runners or {% data variables.actions.hosted_runners %} to communicate with {% data variables.product.github %}, add the IP address or IP address range of your runners to the IP allow list that you have configured for your enterprise.
