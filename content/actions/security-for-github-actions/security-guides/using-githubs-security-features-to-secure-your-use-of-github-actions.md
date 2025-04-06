---
title: Using GitHub's security features to secure your use of GitHub Actions
intro: '{% data variables.product.prodname_dotcom %} has several security features that can enhance the security of the actions you consume and publish.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: GitHub security features
redirect_from:
  - /actions/security-guides/using-githubs-security-features-to-secure-your-use-of-github-actions
---

## About {% data variables.product.prodname_dotcom %}'s security features

{% data variables.product.prodname_dotcom %} provides many features to make your code more secure. You can use {% data variables.product.prodname_dotcom %}'s built-in features to understand the actions your workflows depend on, ensure you are notified about vulnerabilities in the actions you consume, or automate the process of keeping the actions in your workflows up to date. If you publish and maintain actions, you can use {% data variables.product.prodname_dotcom %} to communicate with your community about vulnerabilities and how to fix them. For more information about security features that {% data variables.product.prodname_dotcom %} offers, see "[AUTOTITLE](/code-security/getting-started/github-security-features#about-githubs-security-features)."

This article will explain how you can use some of {% data variables.product.prodname_dotcom %}'s security features to increase the security of your use of {% data variables.product.prodname_actions %}.

## Understanding dependencies in your workflows

You can use the dependency graph to explore the actions that the workflows in your repository use. The dependency graph is a summary of the manifest and lock files stored in a repository. It also recognizes files in  `./github/workflows/` as manifests, which means that any actions or workflows referenced using the syntax `jobs[*].steps[*].uses` or `jobs.<job_id>.uses` will be parsed as dependencies.

The dependency graph shows the following information about actions used in workflows:

* The account or organization that owns the action.
* The workflow file that references the action.
* The version or SHA the action is pinned to.

In the dependency graph, dependencies are automatically sorted by vulnerability severity. If any of the actions you use have security advisories, they will display at the top of the list. You can navigate to the advisory from the dependency graph and access instructions for resolving the vulnerability.

{% ifversion fpt or ghec %}The dependency graph is enabled for public repositories, and you can choose to enable it on private repositories. For more information about using the dependency graph, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository)."{% else %}Enterprise owners can configure the dependency graph and {% data variables.product.prodname_dependabot_alerts %} for an enterprise. For more information, see "[AUTOTITLE](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)."{% endif %}

## Being aware of security vulnerabilities in actions you use

For actions available on the marketplace, {% data variables.product.prodname_dotcom %} reviews related security advisories and then adds those advisories to the {% data variables.product.prodname_advisory_database %}. You can search the database for actions that you use to find information about existing vulnerabilities and instructions for how to fix them. To streamline your search, use the {% data variables.product.prodname_actions %} filter in the [{% data variables.product.prodname_advisory_database %}](https://github.com/advisories?query=type%3Areviewed+ecosystem%3Aactions).

You can set up your repositories so that you:

* Receive alerts when actions used in your workflows receive a vulnerability report. For more information, see "[Monitoring the actions in your workflows](#monitoring-the-actions-in-your-workflows)."
* Are warned about existing advisories when you add or update an action in a workflow. For more information, see "[Screening actions for vulnerabilities in new or updated workflows](#screening-actions-for-vulnerabilities-in-new-or-updated-workflows)."

### Monitoring the actions in your workflows

You can use {% data variables.product.prodname_dependabot %} to monitor the actions in your workflows and enable {% data variables.product.prodname_dependabot_alerts %} to notify you when an action you use has a reported vulnerability. {% data variables.product.prodname_dependabot %} performs a scan of the default branch of the repositories where it is enabled to detect insecure dependencies. {% data variables.product.prodname_dependabot %} generates {% data variables.product.prodname_dependabot_alerts %} when a new advisory is added to the {% data variables.product.prodname_advisory_database %} or when an action you use is updated.

{% note %}

**Note:** {% data variables.product.prodname_dependabot %} only creates alerts for vulnerable actions that use semantic versioning and will not create alerts for actions pinned to SHA values.

{% endnote %}

{% ifversion fpt or ghec %}You can enable {% data variables.product.prodname_dependabot_alerts %} for your personal account, for a repository, or for an organization. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)."{% else %}An enterprise owner must first set up {% data variables.product.prodname_dependabot %} for your enterprise before you can manage {% data variables.product.prodname_dependabot_alerts %} for your repository. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."{% endif %}

{% data reusables.dependabot.where-to-view-dependabot-alerts %} For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)."

### Screening actions for vulnerabilities in new or updated workflows

When you open pull requests to update your workflows, it is good practice to use dependency review to understand the security impact of changes you've made to the actions you use. {% data reusables.dependency-review.feature-overview %}

If any of the changes you made to your workflows are flagged as vulnerable, you can avoid adding them to your project or update them to a secure version.

For more information about dependency review, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)" and "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review)."

{% data reusables.dependency-review.about-dependency-review-action %}

![Screenshot of a workflow run that uses the dependency review action.](/assets/images/help/graphs/dependency-review-action.png)

{% data reusables.dependency-review.about-dependency-review-action2 %}

## Keeping the actions in your workflows secure and up to date

{% data reusables.actions.dependabot-version-updates-for-actions %}

The following features can automatically update the actions in your workflows.

* **{% data variables.product.prodname_dependabot_version_updates %}** open pull requests to update actions to the latest version when a new version is released.
* **{% data variables.product.prodname_dependabot_security_updates %}** open pull requests to update actions with reported vulnerabilities to the minimum patched version.

{% note %}

**Notes:**

{% data reusables.actions.dependabot-version-updates-actions-caveats %}

{% endnote %}

For information on how to configure {% data variables.product.prodname_dependabot_version_updates %}, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)."

For information on how to configure {% data variables.product.prodname_dependabot_security_updates %}, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)."

{% ifversion fpt or ghec %}

## Protecting actions you've created

{% data variables.product.prodname_dotcom %} enables collaboration between people who publish and maintain actions and vulnerability reporters in order to promote code security. {% data reusables.security-advisory.security-advisory-overview %}

If you are someone who maintains an action that is used in other projects, you can use the following {% data variables.product.prodname_dotcom %} features to enhance the security of the actions you've published.

* Use the dependants view in the Dependency graph to see which projects depend on your code. If you receive a vulnerability report, this will give you an idea of who you need to communicate with about the vulnerability and how to fix it. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#dependents-view)."
* Use repository security advisories to create a security advisory, privately collaborate to fix the vulnerability in a temporary private fork, and publish a security advisory to alert your community of the vulnerability once a patch is released. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/configuring-private-vulnerability-reporting-for-a-repository)" and "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/creating-a-repository-security-advisory)."

{% endif %}
