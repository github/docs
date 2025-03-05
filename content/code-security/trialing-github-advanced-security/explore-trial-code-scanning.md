---
title: Exploring your enterprise trial of code scanning
shortTitle: Trial code scanning
allowTitleToDifferFromFilename: true
intro: 'Introduction to the features of code and dependency scanning available with {% data variables.product.prodname_GH_code_security %} in {% data variables.product.prodname_ghe_cloud %} so you can assess their fit to your business needs.'
type: quick_start
topics:
  - Code Security
versions:
  fpt: '*'
  ghec: '*'
---

This guide assumes that you have planned and started a trial of {% data variables.product.prodname_GHAS %} for an existing or trial {% data variables.product.github %} enterprise account, see [AUTOTITLE](/code-security/trialing-github-advanced-security/planning-a-trial-of-ghas).

## Introduction

{% data variables.product.prodname_code_scanning_caps %} and dependency analysis work in the same way in public repositories and in private and internal repositories with {% data variables.product.prodname_GH_code_security %} enabled. In addition, {% data variables.product.prodname_GH_code_security %} enables you to create security campaigns where security specialists and developers can collaborate to effectively reduce technical debt.

This article focuses on how you can combine these features with enterprise-level controls to standardize and enforce your development process.

### Refine your security configurations

In contrast to {% data variables.product.prodname_secret_scanning %}, where a single security configuration is typically applied to all repositories, you probably want to fine-tune the configuration of {% data variables.product.prodname_code_scanning %} for different types of repositories. For example, you might need to create additional configurations so that:

* {% data variables.product.prodname_code_scanning_caps %} uses runners with a specific label to apply to repositories that require a specialized environment or that use private registeries.
* {% data variables.product.prodname_code_scanning_caps %} is "Not set" to apply to repositories that need to use advanced setup or that require a third-party tool.

For your trial, it's simplest to create a primary enterprise-level security configuration and apply it to your test repositories. Then you can create any additional security configurations you need and apply them to a subset of repositories selected using code language, custom property, visibility, and  other filter options. For more information, see [AUTOTITLE](/code-security/trialing-github-advanced-security/enable-security-features-trial) and [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-a-custom-security-configuration).

### Provide access to view results of {% data variables.product.prodname_code_scanning %}

By default, only the repository administrator and the organization owner can view all {% data variables.product.prodname_code_scanning %} alerts in their area. You should assign the predefined security manager role to all organization teams and users who you want to access the alerts found during the trial. You may also want to give the enterprise account owner this role for each organization in the trial. For more information, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization) and [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles#assigning-an-organization-role).

## Evaluate and refine results from the default setup

The default setup for {% data variables.product.prodname_code_scanning %} runs a set of high confidence queries. These are chosen to ensure that, when you roll out {% data variables.product.prodname_code_scanning %} across your whole codebase, developers see a limited set of high quality results, with few false positive results.

You can see a summary of any results found in the organizations in your trial enterprise in the **Code security** tab for the enterprise. There are also separate views for each type of security alert, see [AUTOTITLE](/code-security/security-overview/viewing-security-insights).

If you don't see the results you expect for {% data variables.product.prodname_code_scanning %}, you can update default setup to run an extended query suite for repositories where you expected to find more results. This is controlled at the repository level, see [AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/editing-your-configuration-of-default-setup).

> [!TIP]
> If you are blocked from editing the repository settings for {% data variables.product.prodname_code_scanning %}, edit the security configuration used by the repository so that settings are not enforced.

If the extended suite still fails to find the results you expect, you may need to enable advanced setup so you can customize the analysis fully. For more information, see [AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/about-the-tool-status-page) and [AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning).

## Enforce automated analysis of pull requests

There are three different types of automated analysis of pull requests built into {% data variables.product.github %}:

* **{% data variables.product.prodname_code_scanning_caps %} analysis** uses queries to highlight known bad coding patterns and security vulnerabilities. {% data variables.product.prodname_copilot_autofix_short %} suggests fixes to problems identified by {% data variables.product.prodname_code_scanning %}.
* **Dependency review** summarizes the dependency changes made by the pull request and highlights any dependencies with known vulnerabilities or that do not meet your development standards.
* **{% data variables.product.prodname_copilot_short %} code review** uses AI to provide feedback on your changes with suggested fixes where possible.

These automated reviews are a valuable extension to self-review and make it easier for developers to present a more complete and secure pull request for peer review. In addition, {% data variables.product.prodname_code_scanning %} and dependency reviews can be enforced to protect the security and compliance of your code.

> [!NOTE]
> {% data variables.product.prodname_copilot_autofix %} is included in the license for {% data variables.product.prodname_GH_code_security %}. {% data variables.product.prodname_copilot_short %} code review requires a paid {% data variables.product.prodname_copilot_short %} plan.

### {% data variables.product.prodname_code_scanning_caps %} analysis

When {% data variables.product.prodname_code_scanning %} is enabled, you can then block merges into important branches unless the pull request meets your requirements by creating a code ruleset for the enterprise or organization. Typically, you would require that results from {% data variables.product.prodname_code_scanning %} are present and that any important alerts are resolved.

* **Type of ruleset:** Branch.
* **Require {% data variables.product.prodname_code_scanning %} results:** Enable to block merging until results are successfully generated for the commit and the reference the pull request targets.
* **Required tools and alert thresholds:** Define the level of alerts that must be resolved before a pull request can be merged for each {% data variables.product.prodname_code_scanning %} tool you use.

As with all rulesets, you can control exactly which organizations (enterprise-level), repositories, and branches it acts on and also define roles or teams who can bypass the rule. For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

### Dependency review

When {% data variables.product.prodname_GH_code_security %} and dependency graph are enabled for a repository, manifest files have a rich diff view which shows a summary of the dependencies that it adds or updates. This is a useful summary for human reviewers of the pull request but does not provide any control of which dependencies are added to the codebase.

Most enterprises put automatic checks in place to block the use of dependencies with known vulnerabilities or unsupported license terms.

1. Create a private repository to serve as a central home where you can store reusable workflows for the enterprise.
1. Edit the actions settings for the repository to allow all private repositories in the enterprise to access workflows in this central repository, see [Allowing access to components in a private repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository).
1. In the central repository, create a reusable workflow to run the dependency review action, configuring the action to meet your business needs, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-review-action).
1. In each organization, create or update branch rulesets to add the new workflow to the required status checks, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/enforcing-dependency-review-across-an-organization).

This allows you to update the configuration in a single location, but use the workflow in many repositories. You may want to use this central repository to maintain other workflows. For more information, see [AUTOTITLE](/actions/sharing-automations/reusing-workflows).

### {% data variables.product.prodname_copilot_short %} review

> [!NOTE]
>
> {% data reusables.copilot.code-review.preview-note %}
> * If you get a {% data variables.product.prodname_copilot_short %} subscription from an organization, you will only be able to participate in the {% data variables.release-phases.public_preview %} on the {% data variables.product.github %} website if an owner of your organization {% ifversion ghec %}or enterprise{% endif %} has enabled **Copilot in GitHub.com > Opt in to preview features** in the **{% data variables.product.prodname_copilot %} policies** page of the organization {% ifversion ghec %}or enterprise{% endif %} settings. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#enabling-copilot-features-in-your-organization){% ifversion ghec %} and [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise#copilot-in-githubcom){% endif %}.

By default, users request a review from {% data variables.product.prodname_copilot_short %} in the same way as they do from human reviewers. However, you can update or create an organization-level branch ruleset to automatically add {% data variables.product.prodname_copilot_short %} as a reviewer to all pull requests made to selected branches in all or selected repositories. See [AUTOTITLE](/copilot/using-github-copilot/code-review/configuring-automatic-code-review-by-copilot).

{% data variables.product.prodname_copilot_short %} leaves a review comment on each pull request it reviews, without approving the pull request or requesting changes. This ensures that its review is advisory and will not block development work. Similarly, you should not enforce the resolution of suggestions made by {% data variables.product.prodname_copilot_short %} because AI suggestions have known limitations, see [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-code-review#limitations-of-github-copilot-code-review).

## Define where {% data variables.product.prodname_copilot_autofix_short %} is allowed and enabled

{% data variables.product.prodname_copilot_autofix_short %} helps developers understand and fix {% data variables.product.prodname_code_scanning %} alerts found in their pull requests. We recommend that you enable this feature for all repositories to help developers resolve alerts efficiently and increase their understanding of secure coding.

There are two levels of control:

* Enterprises can allow or block use of {% data variables.product.prodname_copilot_autofix_short %} throughout the enterprise using the "Code security" policy, see: [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).
* Organizations can enable or disable {% data variables.product.prodname_copilot_autofix_short %} for all organization-owned repositories in the "Global settings" for the organization, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization).

## Engage developers in security remediation

Security campaigns provide a way for security teams to engage with developers to remediate security technical debt. They also provide a practical way to combine education in secure coding with examples of vulnerable code in code that your developers are familar with. For more information, see [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/about-security-campaigns) and [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/best-practice-fix-alerts-at-scale).

## Provide a secure development environment

The development environment has many components. Some of the most useful features for scaling and standardizing a secure development environment in {% data variables.product.github %} are:

* **Security configurations:** define the setup of security features for the enterprise, an organization, a subset of organization repositories, or new repositories, see [Refine your security configurations](#refine-your-security-configurations).
* **Policies:** protect and control use of resources for the enterprise or an organization, see [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise).
* **Rulesets:** protect and control branches, tags, and pushes for an organization, a subset of organization repositories, or a repository, see [AUTOTITLE](/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization).
* **Repository templates:** define the security workflows and processes needed for each type of environment, see [AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-template-repository). For example, each template might contain a specialized:
   * Security policy file defining the company's security stance and how to report any security concerns.
   * Workflow to enable {% data variables.product.prodname_dependabot_version_updates %} for package managers used by the company.
   * Workflow defining advanced setup for {% data variables.product.prodname_code_scanning %} for supported development languages where the default setup results are not enough.

In addition, when a developer creates a repository from a template they must define the value of any required custom properties. Custom properties are very useful for selecting a subset of repositories that you want to apply configurations, policies, or rulesets to, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/managing-custom-properties-for-repositories-in-your-enterprise).

## Next steps

When you have finished exploring these options and {% data variables.product.prodname_secret_scanning %} features, you are ready to test your discoveries so far against your business needs, and then explore further.

## Further reading

* [AUTOTITLE](/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions)
* [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise)
* [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/governing-how-people-use-repositories-in-your-enterprise)
* [Enforce {% data variables.product.prodname_GHAS %} at Scale](https://wellarchitected.github.com/library/application-security/scenarios-and-recommendations/enforce-ghas-at-scale/)
