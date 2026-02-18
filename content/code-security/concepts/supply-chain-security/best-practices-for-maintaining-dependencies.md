---
title: Best practices for maintaining dependencies
intro: Guidance and recommendations for maintaining the dependencies you use, including {% data variables.product.github %}'s security products that can help.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Dependabot
  - Security updates
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Dependency best practices
redirect_from:
  - /code-security/dependabot/maintain-dependencies/best-practices-for-maintaining-dependencies
contentType: concepts
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

{% data variables.product.github %} provides security features to help you maintain dependencies:

**Dependency graph**: Tracks your project dependencies and identifies vulnerabilities. See [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph).

**Dependency review**: Catches insecure dependencies in pull requests before they're merged. In addition, the {% data variables.dependency-review.action_name %} can fail checks and, when required by branch protection rules, prevent pull requests that introduce vulnerabilities from being merged. See [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).

**{% data variables.product.prodname_dependabot %}**: Automatically scans for vulnerabilities, creates alerts, and opens pull requests to update vulnerable or outdated dependencies. You can group multiple updates into single pull requests to streamline reviews. See [AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).

**{% data variables.product.prodname_advisory_database %}**: Provides security advisories that power {% data variables.product.prodname_dependabot %}'s vulnerability detection. See [AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/about-the-github-advisory-database).{% ifversion fpt or ghec %}

**Private vulnerability reporting**: Enables maintainers to receive, discuss, and fix vulnerability reports in private before public disclosure. {% endif %}
**Security overview**: Shows your organization's security posture with dashboards for at-risk repositories, alert trends, and feature enablement status. See [AUTOTITLE](/code-security/security-overview/about-security-overview).

For end-to-end supply chain guidance, see [AUTOTITLE](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview).
