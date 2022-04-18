---
title: 对作业使用构建矩阵
shortTitle: 对作业使用构建矩阵
intro: 创建构建矩阵并定义每个作业的变体。
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

## 创建不同作业配置的矩阵

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-matrix %}

## 在 `matrix` 作业失败时取消剩余作业

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

## 定义 `matrix` 中的最大并发作业数

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}
