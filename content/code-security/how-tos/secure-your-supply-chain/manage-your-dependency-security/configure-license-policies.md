---
title: Configuring open source license policies
shortTitle: Configure license policies
intro: Create and enforce open source license policies to control which licenses your dependencies are allowed to use.
product: 'Organizations owned by a {% data variables.product.prodname_enterprise %} account with {% data variables.product.prodname_GH_code_security %} enabled'
versions:
  feature: open-source-license-compliance
contentType: how-tos
category:
  - Secure your dependencies
redirect_from:
  - /early-access/code-security/supply-chain-security/enforcing-license-policy-across-an-enterprise
---

## Prerequisites

Before you configure license policies, ensure that:

* You are using GitHub Enterprise Cloud (including data-resident GHEC), and your organization has {% data variables.product.prodname_GH_code_security %} enabled on the repositories you want to use license compliance.
* You have access to manage enterprise policy and rulesets.
* Dependency graph is enabled for repositories you want to evaluate.

## About license compliance

Open source license compliance lets you define a policy that specifies which licenses your dependencies are allowed to use.

When the policy is enforced with rulesets, {% data variables.product.github %} evaluates pull requests that change package manifests, checks direct and transitive dependencies, and compares detected licenses to your policy. Pull requests with noncompliant dependencies remain blocked until violations are resolved.

Violations are typically resolved by:

* Updating the pull request to use compliant dependencies
* Approving an exception for a package
* Updating policy to allow a license where appropriate

## Configuring license compliance

### Create a license policy

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
1. In the sidebar, click **License compliance**.
1. Click **Default policy**.
1. On the **Edit license policy** page, click **Add licenses** and choose **Select from list**.
1. From the license picker, select the licenses you want to permit. The licenses in this list are categorized based on their general risk level for use in corporate environments, but this is purely informational and does not constitute legal advice. **Always check with your organization's legal team for policy guidance**.
1. Save your changes.

Alternately, if you have an existing license policy from another tool, you can import it as a list of SPDX expressions.
1. On the **Edit license policy** page, click **Add licenses** and choose **Manual input**.
1. Enter one or more SPDX license identifiers, each on a new line.
1. Save your changes.

The licenses you add form your baseline policy. You can later add package-level exceptions when handling alerts.

### Configure access for Enterprise Open-Source License Managers

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. In the left sidebar, click **{% octicon "globe" aria-hidden="true" aria-label="globe" %} Enterprise roles**.
1. Click **Role assignments**.
1. Click **Assign role**.
1. Select the **Enterprise Open-Source License Manager** role.
1. Choose a user or team to assign the role to.
1. Click **Assign role**.

Assigning this role also subscribes reviewers to request notifications so they can respond to dismissal requests quickly.

### Optionally use custom properties to control rollout per repository

If you want a gradual rollout, use a repository custom property to control whether each repository is in inactive, evaluate, or active enforcement mode.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.access-custom-properties %}
1. Create a single-select repository custom property, for example `open_source_license_compliance`.
1. Add values for `inactive`, `evaluate`, and `active`.
1. Set the default value to `inactive`.
1. Decide who can change the property value.
1. Assign property values to repositories based on their rollout stage.

### Enforce policy in pull requests with rulesets

We suggest making two rulesets, one for **Evaluate** mode and one for **Active** mode. If you created custom properties to control the rollout, you can target those properties here.

1. Go to the rulesets page for the scope where you want enforcement.
1. Create a branch ruleset.
1. Under the ruleset name, set **Enforcement status**:

    * For your first ruleset, select **Evaluate**.
    * For your second ruleset, select **Active**.
1. Choose how to target repositories:

    * If you use custom properties, target by `open_source_license_compliance`:
      * For the evaluate-mode ruleset, target repositories where the property value is `evaluate`.
      * For the active-mode ruleset, target repositories where the property value is `active`.
    * If you do not use custom properties, target repositories by repository pattern or explicit repository selection.
1. Enable **Require license compliance results before merging**.
1. Save your changes.

For more information about rulesets, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets) and [AUTOTITLE](/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization#targeting-repositories-by-properties-in-your-organization).

## Test policy enforcement

1. In a targeted repository, open a pull request that changes dependency manifests.
1. Confirm that pull request annotations show license compliance results.
1. If a dependency violates policy, review the generated alert and request dismissal if an exception is needed.

If the ruleset is in **Active** mode, the pull request remains blocked until all license policy violations are resolved.

## Managing license compliance requests and policy

### Review and handle exception requests

1. As an Enterprise Open Source License Manager, open the list of pending license alert requests in your enterprise security views.
1. Review each request and decide whether to deny or approve it.
1. If you approve, choose whether the exception should apply to a package, a license, or a package pattern.
1. Choose whether to apply the exception at repository scope or enterprise scope.
1. Save the exception.

After a request is approved, the alert is closed and the pull request is unblocked, as long as no other required checks are failing.

### Review effective policy for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the sidebar, under "Security", click **License policy**.
1. Review the combined policy and exception set in effect for that repository.
1. Update enterprise-level or repository-level policy as needed.

Package and license entries that are set at the enterprise level will not be editable in the repository policy. Items marked with a {% octicon "trash" aria-label="The trash can icon" %} indicate repository-level entries which can be deleted.

### Audit events

Changes to the license policy emit events to the audit log. These events are useful to review the history of changes or to feed external systems for compliance purposes. The log events are categorized as **Policy Management**, with a prefix of `license_compliance_policy`. They will have an action type `create` or `modify`. For details about the contents of the audit log events, see [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization).

### License compliance API

There are several REST API endpoints for managing license compliance policy. You can use the API to programatically back up and restore your enterprise policy and to query whether a list of packages would create any policy violations if they were included in a repository's dependencies. In addition, operations on license compliance closure requests can generate webhook events when a request is created, receives a response, or is cancelled.

For details about the enterprise policy management API, see [AUTOTITLE](/rest/dependency-graph/). For more about the package check API, see [AUTOTITLE](/rest/repos#package-checks). For more about webhooks, see [AUTOTITLE](/webhooks/webhook-events-and-payloads).

## Further reading

* [AUTOTITLE](/code-security/concepts/supply-chain-security/open-source-license-compliance)
