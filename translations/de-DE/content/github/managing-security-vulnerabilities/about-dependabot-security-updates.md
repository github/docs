---
title: About Dependabot security updates
intro: '{% data variables.product.prodname_dependabot %} can fix vulnerable dependencies for you by raising pull requests with security updates.'
shortTitle: About Dependabot security updates
redirect_from:
  - /github/managing-security-vulnerabilities/about-github-dependabot-security-updates
versions:
  free-pro-team: '*'
---

### Informationen zu {% data variables.product.prodname_dependabot_security_updates %}

{% data variables.product.prodname_dependabot_security_updates %} make it easier for you to fix vulnerable dependencies in your repository. If you enable this feature, when a {% data variables.product.prodname_dependabot %} alert is raised for a vulnerable dependency in the dependency graph of your repository, {% data variables.product.prodname_dependabot %} automatically tries to fix it. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" and "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)."

{% data variables.product.prodname_dependabot %} checks whether it's possible to upgrade the vulnerable dependency to a fixed version without disrupting the dependency graph for the repository. Then {% data variables.product.prodname_dependabot %} raises a pull request to update the dependency to the minimum version that includes the patch and links the pull request to the {% data variables.product.prodname_dependabot %} alert, or reports an error on the alert. For more information, see "[Troubleshooting {% data variables.product.prodname_dependabot %} errors](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)."

{% note %}

**Hinweis**

The {% data variables.product.prodname_dependabot_security_updates %} feature is available for repositories where you have enabled the dependency graph and {% data variables.product.prodname_dependabot_alerts %}. You will see a {% data variables.product.prodname_dependabot %} alert for every vulnerable dependency identified in your full dependency graph. However, security updates are triggered only for dependencies that are specified in a manifest or lock file. {% data variables.product.prodname_dependabot %} is unable to update an indirect or transitive dependency that is not explicitly defined. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#dependencies-included)."

{% endnote %}

### About pull requests for security updates

Each pull request contains everything you need to quickly and safely review and merge a proposed fix into your project. This includes information about the vulnerability like release notes, changelog entries, and commit details. Details of which vulnerability a pull request resolves are hidden from anyone who does not have access to {% data variables.product.prodname_dependabot_alerts %} for the repository.

When you merge a pull request that contains a security update, the corresponding {% data variables.product.prodname_dependabot %} alert is marked as resolved for your repository. For more information about {% data variables.product.prodname_dependabot %} pull requests, see "[Managing pull requests for dependency updates](/github/administering-a-repository/managing-pull-requests-for-dependency-updates)."

{% data reusables.dependabot.automated-tests-note %}

### Informationen zu Kompatibilitätsbewertungen

{% data variables.product.prodname_dependabot_security_updates %} may include compatibility scores to let you know whether updating a vulnerability could cause breaking changes to your project. These are calculated from CI tests in other public repositories where the same security update has been generated. An update's compatibility score is the percentage of CI runs that passed when updating between specific versions of the dependency.

### About notifications for {% data variables.product.prodname_dependabot %} security updates

You can filter your notifications on {% data variables.product.company_short %} to show {% data variables.product.prodname_dependabot %} security updates. Weitere Informationen findest Du unter „[Benachrichtigungen über Deinen Posteingang verwalten](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)."