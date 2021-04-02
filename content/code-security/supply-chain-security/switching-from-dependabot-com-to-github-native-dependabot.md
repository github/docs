---
title: Switching from Dependabot.com to Github-native Dependabot
intro: 'Dependabot.com and Dependabot Preview are being shut down on July 7th, 2021. You can easily upgrade to Github-native Dependabot by merging a pull request, and your packages will keep being updated.'
allowTitleToDifferFromFilename: true
versions:
  free-pro-team: '*'
topics:
  - repositories
---

### About the switch from Dependabot Preview to GitHub-native {% data variables.product.prodname_dependabot %}

The majority of Dependabot Preview features have now been built directly into GitHub, so you can use {% data variables.product.prodname_dependabot %} alongside all the other functionality in GitHub without having to go to a separate application. By migrating to GitHub-native {% data variables.product.prodname_dependabot %} and shutting down Dependabot Preview, we can also focus on bringing lots of exciting new features to {% data variables.product.prodname_dependabot %}, including more ecosystem updates, improved notifications, and {% data variables.product.prodname_dependabot %} support for {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_managed %}.

### Shutdown timeline for Dependabot.com and Dependabot Preview

**The Dependabot Preview app and Dependabot.com will shut down on July 7th, 2021**. Any open PRs from the dependabot-preview bot will remain open, but the bot itself will no longer work on your GitHub accounts and organizations. You’ll need to upgrade to GitHub-native {% data variables.product.prodname_dependabot %} by that time to keep using {% data variables.product.prodname_dependabot %} functionality.

As of April 7, 2021, the Dependabot Preview app and Dependabot.com will no longer accept new customers. 

### Differences between Dependabot Preview and GitHub-native {% data variables.product.prodname_dependabot %}

While most Dependabot Preview features were built into GitHub-native {% data variables.product.prodname_dependabot %}, several aren't available: 
- **Live updates:** We hope to bring these back in the future. For now, you can run GitHub {% data variables.product.prodname_dependabot %} daily to catch new packages within one day of release.
- **PHP environment variable and Elixir organization registries:** These features have not been added due to low usage in Dependabot Preview, but we are investigating if there are other solutions. For now, you can use {% data variables.product.prodname_actions %} to fetch dependencies from these registries.
- **Auto-merge:** Auto-merge will not be supported for the foreseeable future. We know some of you have built great workflows that rely on auto-merge, but we’re concerned about auto-merge being used to quickly propagate a malicious package across millions of developers. For those of you who have vetted your dependencies, or are only using internal dependencies, you can install third party auto-merge apps, or set up {% data variables.product.prodname_actions %} to merge. We recommend always verifying your dependencies before merging them.

In GitHub-native {% data variables.product.prodname_dependabot %}, all configuration of version updates is done via the configuration file. This file is very similar to the Dependabot Preview configuration file, but we’ve made a few changes and improvements that will be automatically included in the upgrade pull request. You can see the update logs that used to be on the Dependabot.com dashboard by going to your repository’s **Insights** page, clicking the **Dependency graph** tab on the left, and then clicking **{% data variables.product.prodname_dependabot %}**.

For more information about version updates with GitHub-native Dependabot, see "[About Dependabot version updates](/code-security/supply-chain-security/about-dependabot-version-updates)."

### Upgrading to GitHub-native {% data variables.product.prodname_dependabot %}

Upgrading from Dependabot Preview to GitHub-native {% data variables.product.prodname_dependabot %} requires only one step: enabling version updates.

To enable {% data variables.product.prodname_dependabot %} version updates, merge the pull request in your repository called *Upgrade to GitHub-native Dependabot by July 7th*. This pull request includes the updated configuration file needed for Github-native {% data variables.product.prodname_dependabot %}.

If you have any questions or need help migrating, you can view or open issues in [dependabot/dependabot-core/issues](https://github.com/dependabot/dependabot-core/issues). 

