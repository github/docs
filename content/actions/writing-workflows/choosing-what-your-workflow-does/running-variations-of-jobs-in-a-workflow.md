---
title: Running variations of jobs in a workflow
shortTitle: Run job variations
intro: Create a matrix to define variations for each job.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /actions/using-jobs/using-a-build-matrix-for-your-jobs
  - /actions/using-jobs/using-a-matrix-for-your-jobs
  - /actions/examples/using-concurrency-expressions-and-a-test-matrix
  - /actions/writing-workflows/choosing-what-your-workflow-does/using-a-matrix-for-your-jobs
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

## Example: Using an output to define two matrices

{% data reusables.actions.jobs.matrix-used-twice %}

## Handling failures

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

## Defining the maximum number of concurrent jobs

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}
