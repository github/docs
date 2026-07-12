---
title: Dependency caching
intro: Learn about dependency caching for workflow speed and efficiency.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: concepts
category:
  - Write workflows
---

## About workflow dependency caching

Workflow runs often reuse the same outputs or downloaded dependencies from one run to another. For example, package and dependency management tools such as Maven, Gradle, npm, and Yarn keep a local cache of downloaded dependencies.

{% ifversion fpt or ghec %} Jobs on {% data variables.product.prodname_dotcom %}-hosted runners start in a clean runner image and must download dependencies each time, causing increased network utilization, longer runtime, and increased cost. {% endif %}To help speed up the time it takes to recreate files like dependencies, {% data variables.product.prodname_dotcom %} can cache files you frequently use in workflows.

{%- ifversion fpt or ghec %}

> [!NOTE]
> When using self-hosted runners, caches from workflow runs are stored on {% data variables.product.company_short %}-owned cloud storage. A customer-owned storage solution is only available with {% data variables.product.prodname_ghe_server %}.

{%- endif %}

{% data reusables.actions.comparing-artifacts-caching %}

For more information on workflow run artifacts, see [AUTOTITLE](/actions/using-workflows/storing-workflow-data-as-artifacts).

## Cache security

Caches are shared based on the branch or tag a workflow run uses, not on the identity of the workflow or job. See [AUTOTITLE](/actions/reference/workflows-and-actions/events-that-trigger-workflows) and the `GITHUB_REF` for the branch used for various workflow triggers. Any run that can read a cache restores its contents as-is, so you should treat restored files as untrusted input and never store secrets or other sensitive data in a cache.

Untrusted workflows can read sensitive cache contents, such as when a `pull_request` from a fork restores a cache. Poisoned caches can lead to code execution in trusted workflows. To limit the risk of cache poisoning, {% data variables.product.github %} gives workflows that run in response to low-trust triggers read-only access to caches in the default branch's scope.

For details on cache scope, access restrictions, and best practices for using caches securely, see [AUTOTITLE](/actions/reference/dependency-caching-reference#cache-access-for-low-trust-workflow-triggers).

## Next steps

To implement dependency caching in your workflows, see [AUTOTITLE](/actions/reference/dependency-caching-reference).
