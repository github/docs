---
title: About GitHub Dependabot security updates
intro: '{% data variables.product.prodname_dependabot %} can fix vulnerable dependencies for you by raising pull requests with security updates.'
shortTitle: About Dependabot security updates
versions:
  free-pro-team: '*'
---

### 关于 {% data variables.product.prodname_dependabot_security_updates %}

{% data variables.product.prodname_dependabot_security_updates %} make it easier for you to fix vulnerable dependencies in your repository. If you enable this feature, when a {% data variables.product.prodname_dependabot_short %} alert is raised for a vulnerable dependency in the dependency graph of your repository, {% data variables.product.prodname_dependabot_short %} automatically tries to fix it. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" and "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates)."

{% data variables.product.prodname_dependabot %} checks whether it's possible to upgrade the vulnerable dependency to a fixed version without disrupting the dependency graph for the repository. Then {% data variables.product.prodname_dependabot_short %} raises a pull request to update the dependency to the minimum version that includes the patch and links the pull request to the {% data variables.product.prodname_dependabot %} alert, or reports an error on the alert. For more information, see "[Troubleshooting {% data variables.product.prodname_dependabot %} errors](/github/managing-security-vulnerabilities/troubleshooting-github-dependabot-errors)."

{% note %}

**注**

The {% data variables.product.prodname_dependabot_security_updates %} feature is available for repositories where you have enabled the dependency graph and {% data variables.product.prodname_dependabot_short %} alerts. You will see a {% data variables.product.prodname_dependabot_short %} alert for every vulnerable dependency identified in your full dependency graph. However, security updates are triggered only for dependencies that are specified in a manifest or lock file. {% data variables.product.prodname_dependabot_short %} is unable to update an indirect or transitive dependency that is not explicitly defined. 更多信息请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#dependencies-included)”。

{% endnote %}

### About pull requests for security updates

Each pull request contains everything you need to quickly and safely review and merge a proposed fix into your project. 这包括漏洞的相关信息，如发行说明、变更日志条目和提交详细信息。 无法访问仓库的 {% data variables.product.prodname_dependabot_short %} 警报的任何人都看不到拉取请求所解决的漏洞详细信息。

When you merge a pull request that contains a security update, the corresponding {% data variables.product.prodname_dependabot_short %} alert is marked as resolved for your repository. For more information about {% data variables.product.prodname_dependabot_short %} pull requests, see "[Managing pull requests for dependency updates](/github/administering-a-repository/managing-pull-requests-for-dependency-updates)."

{% data reusables.dependabot.automated-tests-note %}

### 关于兼容性分数

{% data variables.product.prodname_dependabot_security_updates %} may include compatibility scores to let you know whether updating a vulnerability could cause breaking changes to your project. These are calculated from CI tests in other public repositories where the same security update has been generated. An update's compatibility score is the percentage of CI runs that passed when updating between specific versions of the dependency.
