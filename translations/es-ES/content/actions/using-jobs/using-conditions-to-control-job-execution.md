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

**Nota:** Un job que se omita reportará su estado como "Exitoso". No prevendrá que se fusione una solicitud de cambios, incluso si es una verificación requerida.

{% endnote %}

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

Verías el siguiente estado en un job omitido:

![Skipped-required-run-details](/assets/images/help/repository/skipped-required-run-details.png)
