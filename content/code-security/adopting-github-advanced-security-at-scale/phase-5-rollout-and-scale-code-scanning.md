---
title: 'Phase 5: Rollout and scale code scanning'
intro: 'You can leverage the available APIs to rollout {% data variables.product.prodname_code_scanning %} programmatically by team and by language across your enterprise using the repository data you collected earlier.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 5. Rollout code scanning
---

{% note %}

This article is part of a series on adopting {% data variables.product.prodname_GH_advanced_security %} at scale. For the previous article in this series, see "[AUTOTITLE](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation)."

{% endnote %}

## Enabling code scanning

Using the data you collated in [Phase 2](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale), you can begin to enable GHAS and then {% data variables.product.prodname_code_scanning %} on your repositories, one language at a time. The step-by-step process for enabling GHAS should look like this:

1. Enable GHAS on the repository. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)."
1. Create a pull request against the repository's default branch with a `codeql-analysis.yml` file containing an example of how to run {% data variables.product.prodname_codeql %} for that language. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)."
1. Create an issue in the repository to explain why a pull request has been raised. The issue you create can contain a link to the previous communication sent to all users, but can also explain what changes the pull request introduces, what next steps the team have to take, what the team's responsibilities are, and how the team should be using {% data variables.product.prodname_code_scanning %}. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)."

There is a publicly available tool that completes the first two steps called the [ghas-enablement tool](https://github.com/NickLiffen/ghas-enablement). You can re-run the ghas-enablement tool in batches of languages where it makes sense. For example, JavaScript, TypeScript, Python, and Go likely have a similar build process and could therefore use a similar {% data variables.product.prodname_codeql %} analysis file. The ghas-enablement tool can also be used for languages such as Java, C, and C++, but due to the varied nature of how these languages build and compile you may need to create more targeted {% data variables.product.prodname_codeql %} analysis files.

{% note %}

**Note:** If you are intending to use {% data variables.product.prodname_actions %} to control {% data variables.product.prodname_code_scanning %} and you do not use the [ghas-enablement tool](https://github.com/NickLiffen/ghas-enablement), keep in mind that there is no API access to the `.github/workflow` directory. This means that you cannot create a script without a git client underlying the automation. The workaround is to leverage bash scripting on a machine or container which has a git client. The git client can push and pull files into the `.github/workflows` directory where the `codeql-analysis.yml` file is located.

{% endnote %}

It is important to not just push the `codeql-analysis.yml` file the repository's default branch. Using a pull request puts ownership on the development team to review and merge, allowing the development team to learn about {% data variables.product.prodname_code_scanning %} and involving the team in the process.

You should capture the pull request URLs created by automation, and check each week for any activity and see which ones are closed. After a few weeks, it may be worth creating another issue or sending internal emails if the pull request remains unmerged.

## Creating subject matter experts

You can then proceed to the next stage of enablement, which is creating internal subject matter experts (or SMEs) and arranging company meetings. Opening pull requests and issues in repositories will likely tackle a large percentage of your adoption, but this doesn’t tackle one-off use cases where a specific build process, framework, or library needs specific feature flags to be enabled. A more personalized and hands-on approach is required to push high adoption, especially for Java, C, and C++.

It’s a good idea to run regular company meetings on specific topics to educate and discuss the rollout with a larger group. This is much more time-efficient for an enterprise with thousands of repositories compared to working with one team at a time. Teams can come to sessions that are relevant to them. Some example sessions that have been run before include:

- {% data variables.product.prodname_code_scanning_caps %} in a container
- {% data variables.product.prodname_code_scanning_caps %} & Java Struts
- {% data variables.product.prodname_code_scanning_caps %} & JSP

You can use the data you have collected about the distribution of different languages among repositories to create targeted meetings.

{% note %}

For the next article in this series, see "[AUTOTITLE](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning)."

{% endnote %}
