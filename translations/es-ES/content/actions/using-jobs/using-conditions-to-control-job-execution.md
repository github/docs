---
title: Utilizar condiciones para controlar la ejecución de jobs
shortTitle: Utilizar condiciones para controlar la ejecución de jobs
intro: Prevenir que un job se ejecute a menos de que tus condiciones se cumplan.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Resumen

{% note %}

**Note:** A job that is skipped will report its status as "Success". It will not prevent a pull request from merging, even if it is a required check.

{% endnote %}

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

You would see the following status on a skipped job:

![Skipped-required-run-details](/assets/images/help/repository/skipped-required-run-details.png)
