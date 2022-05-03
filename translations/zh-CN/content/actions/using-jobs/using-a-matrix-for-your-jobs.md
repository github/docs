---
title: Using a matrix for your jobs
shortTitle: 使用矩阵
intro: Create a matrix to define variations for each job.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /actions/using-jobs/using-a-build-matrix-for-your-jobs
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About matrix strategies

{% data reusables.actions.jobs.about-matrix-strategy %}

## Using a matrix strategy

{% data reusables.actions.jobs.using-matrix-strategy %}

### 示例：使用单维矩阵

{% data reusables.actions.jobs.single-dimension-matrix %}

### 示例：使用多维矩阵

{% data reusables.actions.jobs.multi-dimension-matrix %}

### 示例：使用上下文创建矩阵

{% data reusables.actions.jobs.matrix-from-context %}

## Expanding or adding matrix configurations

{% data reusables.actions.jobs.matrix-include %}

### 示例：展开配置

{% data reusables.actions.jobs.matrix-expand-with-include %}

### 示例：添加配置

{% data reusables.actions.jobs.matrix-add-with-include %}

## Excluding matrix configurations

{% data reusables.actions.jobs.matrix-exclude %}

## Handling failures

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

## Defining the maximum number of concurrent jobs

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}
