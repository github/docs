---
title: Upgrading from Dependabot.com to GitHub-native Dependabot
intro: 'Dependabot.com and Dependabot Preview will shut down on July 7th, 2021. You can upgrade to GitHub-native Dependabot by merging a pull request that will allow your dependencies to keep being updated.'
versions:
  free-pro-team: '*'
topics:
  - repositories
---

### About upgrading from Dependabot Preview to {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %}

The majority of Dependabot Preview features have now been built directly into {% data variables.product.prodname_dotcom %}, so you can use {% data variables.product.prodname_dependabot %} alongside all the other functionality in {% data variables.product.prodname_dotcom %} without having to go to a separate application. By migrating to {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %} and shutting down Dependabot Preview, we can also focus on bringing lots of exciting new features to {% data variables.product.prodname_dependabot %}, including more ecosystem updates, improved notifications, and {% data variables.product.prodname_dependabot %} support for {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_managed %}.

### Shutdown timeline for Dependabot.com and Dependabot Preview

**The Dependabot Preview app and Dependabot.com will shut down on July 7th, 2021**. Any open pull requests from the Dependabot Preview bot will remain open, but the bot itself will no longer work on your {% data variables.product.prodname_dotcom %} accounts and organizations. You’ll need to upgrade to {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %} by July 7th to keep using {% data variables.product.prodname_dependabot %} functionality.

Beginning April 7, 2021, the Dependabot Preview app and Dependabot.com will no longer accept new customers. 

### Differences between Dependabot Preview and {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %}

While we built most of the Dependabot Preview features into {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %}, a few remain unavailable: 
- **Live updates:** We hope to bring these back in the future. For now, you can run {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_dependabot %} daily to catch new packages within one day of release.
- **PHP environment variable and Elixir organization registries:** These features have not been added due to low usage in Dependabot Preview, but we are investigating if there are other solutions. For now, you can use {% data variables.product.prodname_actions %} to fetch dependencies from these registries.
- **Auto-merge:** Auto-merge will not be supported for the foreseeable future. We know some of you have built great workflows that rely on auto-merge, but we’re concerned about auto-merge being used to quickly propagate a malicious package across millions of developers. For those of you who have vetted your dependencies, or are only using internal dependencies, you can install third party auto-merge apps, or set up {% data variables.product.prodname_actions %} to merge. We recommend always verifying your dependencies before merging them.

In {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %}, you can configure all version updates using the configuration file. This file is similar to the Dependabot Preview configuration file with a few changes and improvements that will be automatically included in your upgrade pull request. 

To see update logs for {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %} that were previously on the Dependabot.com dashboard:

  1. Navigate to your repository’s **Insights** page.
  2. Click **Dependency graph** to the left.
  3. Click **{% data variables.product.prodname_dependabot %}**.

For more information about version updates with {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %}, see "[About Dependabot version updates](/code-security/supply-chain-security/about-dependabot-version-updates)."

### Upgrading to {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %}

Upgrading from Dependabot Preview to {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %} requires only one step: enabling version updates by merging a pull request. 

To enable {% data variables.product.prodname_dependabot %} version updates, merge the pull request you will find in your repository called *Upgrade to GitHub-native Dependabot*. This pull request includes the updated configuration file needed for {% data variables.product.prodname_dotcom %}-native {% data variables.product.prodname_dependabot %}.

If you have any questions or need help migrating, you can view or open issues in the [Dependabot repository](https://github.com/dependabot/dependabot-core/issues). 

