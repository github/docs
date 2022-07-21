---
title: 对作业使用矩阵
shortTitle: 使用矩阵
intro: 创建矩阵以定义每个作业的变体。
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

## 关于矩阵策略

{% data reusables.actions.jobs.about-matrix-strategy %}

## 使用矩阵策略

{% data reusables.actions.jobs.using-matrix-strategy %}

### 示例：使用单维矩阵

{% data reusables.actions.jobs.single-dimension-matrix %}

### 示例：使用多维矩阵

{% data reusables.actions.jobs.multi-dimension-matrix %}

### 示例：使用上下文创建矩阵

{% data reusables.actions.jobs.matrix-from-context %}

## 扩展或添加矩阵配置

{% data reusables.actions.jobs.matrix-include %}

### 示例：展开配置

{% data reusables.actions.jobs.matrix-expand-with-include %}

### 示例：添加配置

{% data reusables.actions.jobs.matrix-add-with-include %}

## 排除矩阵配置

{% data reusables.actions.jobs.matrix-exclude %}

## 失败处理

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

## 定义并发作业的最大数量

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}
