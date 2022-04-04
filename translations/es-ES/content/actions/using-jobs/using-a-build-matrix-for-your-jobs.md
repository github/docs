---
title: Utilizar una matriz de compilación para tus jobs
shortTitle: Utilizar una matriz de compilación para tus jobs
intro: Crear una matriz de compilación y definir las variaciones para cada job.
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

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-strategy %}

## Crear una matriz de varias configuraciones de job diferentes

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-matrix %}

## Cncelar los jobs restantes si falla un job de `matrix`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

## Definir la cantidad máxima de jobs simultáneos en una `matrix`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}
