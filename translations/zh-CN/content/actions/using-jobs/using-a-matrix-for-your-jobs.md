---
title: 对作业使用矩阵
shortTitle: Using a matrix
intro: 创建一个矩阵来定义每个作业的变体。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /actions/using-jobs/using-a-build-matrix-for-your-jobs
ms.openlocfilehash: 2dd53fd8810e2ca5dcfc74ff8a6e45b46477d55f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145100146'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

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

## 展开或添加矩阵配置

{% data reusables.actions.jobs.matrix-include %}

### 示例：扩展配置

{% data reusables.actions.jobs.matrix-expand-with-include %}

### 示例：添加配置

{% data reusables.actions.jobs.matrix-add-with-include %}

## 排除矩阵配置

{% data reusables.actions.jobs.matrix-exclude %}

## 处理故障

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

## 定义最大并发作业数

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}
