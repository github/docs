---
title: Using a matrix for your jobs
shortTitle: Matrices
intro: Create a matrix to define variations for each job.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /actions/using-jobs/using-a-build-matrix-for-your-jobs
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

## About matrix strategies

{% data reusables.actions.jobs.about-matrix-strategy %}

## Using a matrix strategy

{% data reusables.actions.jobs.using-matrix-strategy %}

### Example: Using a single-dimension matrix

{% data reusables.actions.jobs.single-dimension-matrix %}

### Example: Using a multi-dimension matrix

{% data reusables.actions.jobs.multi-dimension-matrix %}

### Example: Using contexts to create matrices

{% data reusables.actions.jobs.matrix-from-context %}

## Expanding or adding matrix configurations

{% data reusables.actions.jobs.matrix-include %}

### Example: Expanding configurations

{% data reusables.actions.jobs.matrix-expand-with-include %}

### Example: Adding configurations

{% data reusables.actions.jobs.matrix-add-with-include %}

## Excluding matrix configurations

{% data reusables.actions.jobs.matrix-exclude %}

## Handling failures

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

## Defining the maximum number of concurrent jobs

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}
