---
title: About pre-receive hooks
intro: '*Pre-receive hooks* are scripts that run on the {% data variables.product.prodname_ghe_server %} appliance that you can use to implement quality checks.'
redirect_from:
  - /enterprise/admin/developer-workflow/about-pre-receive-hooks
  - /enterprise/admin/policies/about-pre-receive-hooks
  - /admin/policies/about-pre-receive-hooks
  - /admin/policies/enforcing-policy-with-pre-receive-hooks/about-pre-receive-hooks
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
---

## About pre-receive hooks

When a push occurs, each script runs in an isolated environment and can perform checks on the content of the push. The scripts will cause the push to be accepted if the exit status is 0, or rejected if the exit status is non-zero.

Use pre-receive hooks to satisfy business rules, enforce regulatory compliance, and prevent certain common mistakes.

Examples of how you can use pre-receive hooks:

* Require commit messages to follow a specific pattern or format, such as including a valid ticket number or being over a certain length.
* Lock a branch or repository by rejecting all pushes.
* Prevent sensitive data from being added to the repository by blocking keywords, patterns or file types.
* Prevent a PR author from merging their own changes.

{% data reusables.enterprise_site_admin_settings.pre-receive-hook-examples %}

## Impact on performance and workflows

Impact to developers and their workflows can be significant and must be considered carefully. Pre-receive hooks that are based on business needs and implemented thoughtfully will provide the most benefit to the organization as a whole.

Pre-receive hooks can have unintended effects on the performance of {% data variables.location.product_location %} and should be carefully implemented and reviewed.

Due to risk of failure and performance impact for all users of your instance, we recommend the following.

* Avoid API requests within a pre-receive hook. In particular, we strongly discourage that you make requests to external services, which may take longer and can compound performance impact.
* Avoid long-running Git operations within a pre-receive hook. If your pre-receive hook performs Git operations within large or busy repositories, your instance's Git and overall performance may be negatively impacted.

{% note %}

**Note:** To avoid rejection of a push due to a timeout, all combined pre-receive hooks should run in under five seconds.

{% endnote %}
