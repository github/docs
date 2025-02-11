---
title: Best practices for maintaining dependencies
intro: 'Guidance and recommendations for maintaining the dependencies you use, including {% data variables.product.github %}''s security products that can help.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Dependency management best practices
---

## Best practices for maintaining dependencies

Staying up to date on dependencies is crucial to maintaining a secure software environment. Here are some recommendations:

**Adopt security-focused dependency management tools**

   * Use and set up tools that scan your dependencies for vulnerabilities and automatically suggest updates.
   * Ensure these tools are integrated into your CI/CD pipeline for continuous monitoring and updating.
   * Set up your processes to follow semantic versioning to avoid breaking changes.

**Perform regular vulnerability scans and audits**

   * Schedule regular dependency audits and dependency scans to identify outdated or vulnerable dependencies.

**Automate security patch management**

   * Configure your dependency management tools to automatically apply security patches.
   * Set up automated pull requests for critical security updates so they can be reviewed and merged quickly.

**Enforce policies on the use of dependencies**

   * Implement policies that enforce the use of secure versions of dependencies.
   * Use tools that can block merging of pull requests if they introduce vulnerabilities or fail to update vulnerable dependencies.

**Integrate security testing in CI/CD**

   * Incorporate security testing tools into your CI/CD pipeline.
   * Ensure that dependency updates are automatically tested for security compliance.

**Use lock files and dependency pinning**

   * Use lock files (for example, `package-lock.json`, `yarn.lock`, `Pipfile.lock`) to pin dependencies to known secure versions.
   * Regularly update and review these lock files to ensure dependencies are up-to-date without unintended security issues.

**Monitor security advisories**

   * Subscribe to security advisories for the languages and frameworks you use.
   * Automate the integration of advisories into your development workflow to stay informed of new vulnerabilities.
   * Keep an eye on the dashboards provided by your dependency management tools.
   * Be aware of critical updates, especially security patches, and prioritize them.

**Version control and change management**

   * Track dependency changes in version control (for example, through automated pull requests).
   * Conduct regular code reviews to ensure updates do not introduce new vulnerabilities.

 **Training and awareness**

   * Educate your development and operations teams about the importance of keeping dependencies secure and up-to-date.
   * Provide training on how to use dependency management and security tools effectively.

**Response plan for vulnerabilities**

   * Have a clear incident response plan for when vulnerabilities are identified in dependencies.
   * Ensure the team knows how to quickly address and remediate security issues.

By following these practices, you can significantly reduce the risk posed by outdated and vulnerable dependencies and maintain a more secure environment.

## How {% data variables.product.github %} can help

{% data variables.product.github %} offers several security features that can help maintain the security of your codebases:

**Dependency Graph**

   * Provides a tabular representation of your project's dependencies.
   * The graph helps you understand the dependencies of your project and {% data variables.product.github %} uses this to identify vulnerable dependencies.
   * For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph).

**Dependency review**

   * Is integrated into your CI/CD pipeline, and allows you to catch insecure dependencies in your code at every pull request. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).

   * The {% data variables.dependency-review.action_name %} is a tool that can block the merging of pull requests if they introduce vulnerabilities or fail to update vulnerable dependencies. For more information, see "About the {% data variables.dependency-review.action_name %}" in [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#about-the-dependency-review-action).

**{% data variables.product.prodname_dependabot %}**

   * **{% data variables.product.prodname_dependabot_alerts %}**: {% data variables.product.prodname_dependabot %} scans your dependencies for known vulnerabilities and automatically  creates alerts when vulnerabilities are found in the repository. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).

   * **{% data variables.product.prodname_dependabot_security_updates %}**: Automatically opens pull requests to update vulnerable dependencies to versions that do not have known vulnerabilities. This allows you to quickly review and merge fixes. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates).

   * **{% data variables.product.prodname_dependabot_version_updates %}**: Can also be configured to automatically open pull requests to update your dependencies to their latest versions regularly, ensuring you are always using current packages. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates).{% ifversion dependabot-grouped-security-updates-config %}

   * **Grouped updates**: Makes it easier to review and deploy pull requests for {% data variables.product.prodname_dependabot_updates %} by grouping several updates into a single pull request, see [About grouped security updates](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates#about-grouped-security-updates) and examples in [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/optimizing-pr-creation-version-updates#reducing-the-volume-of-dependabot-pull-requests){% endif %}

**Security Advisories**{% ifversion fpt or ghec %}

   * **Private vulnerability reporting**: Allows maintainers to privately discuss, fix, and publish security advisories for their repositories. For more information, see [AUTOTITLE](/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability).{% endif %}

   * **{% data variables.product.prodname_advisory_database %}**: A database of security advisories that is used by {% data variables.product.prodname_dependabot %} to identify vulnerabilities in your dependencies. For more information, see [AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/about-the-github-advisory-database).

**Security overview**

   * You can keep an eye on the dashboards on the security overview page, which provide  insights about your organization or enterprise's security landscape and progress. It helps users identify repositories that need attention and monitor the health of their application security program.{% ifversion ghec or ghes %} For example, you can see a summary of an organization's security risk, trends in detection, remediation, and prevention of security alerts, as well as the enablement status of {% data variables.product.github %}'s security features.{% endif %} For more information, see [AUTOTITLE](/code-security/security-overview/about-security-overview).

**Security policy**

   * You can create a `SECURITY.md` file in your repository that outlines the security policies and procedures for reporting and handling security issues. For more information, see [AUTOTITLE](/code-security/getting-started/adding-a-security-policy-to-your-repository).

For additional guidance across the whole supply chain using {% data variables.product.github %}'s security features, see [AUTOTITLE](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview).
