---
title: Dependency caching
intro: 'Learn about dependency caching for workflow speed and efficiency.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Workflows
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

## Next steps

To implement dependency caching in your workflows, see [AUTOTITLE](/actions/reference/dependency-caching-reference).
