---
title: Using a build matrix for your jobs
shortTitle: Using a build matrix for your jobs
intro: Create a build matrix and define variations for each job.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 概览

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-strategy %}

## Creating a matrix of different job configurations

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-matrix %}

## Canceling remaining jobs if a `matrix` job fails

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

## Defining the maximum number of concurrent jobs in a `matrix`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}
