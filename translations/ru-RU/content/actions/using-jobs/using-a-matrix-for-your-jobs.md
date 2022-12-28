---
title: Использование матрицы для заданий
shortTitle: Matrixes
intro: Создайте матрицу для определения вариантов для каждого задания.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /actions/using-jobs/using-a-build-matrix-for-your-jobs
ms.openlocfilehash: 77eee0cad601e4c871149837d098670d459b7371
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009987'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о стратегиях матрицы

{% data reusables.actions.jobs.about-matrix-strategy %}

## Использование стратегии матрицы

{% data reusables.actions.jobs.using-matrix-strategy %}

### Пример. Использование матрицы с одним измерением

{% data reusables.actions.jobs.single-dimension-matrix %}

### Пример. Использование матрицы с несколькими измерениями

{% data reusables.actions.jobs.multi-dimension-matrix %}

### Пример. Использование контекстов для создания матриц

{% data reusables.actions.jobs.matrix-from-context %}

## Развертывание или добавление конфигураций матрицы

{% data reusables.actions.jobs.matrix-include %}

### Пример. Развертывание конфигураций

{% data reusables.actions.jobs.matrix-expand-with-include %}

### Пример. Добавление конфигураций

{% data reusables.actions.jobs.matrix-add-with-include %}

## Исключение конфигураций матрицы

{% data reusables.actions.jobs.matrix-exclude %}

## Обработка сбоев

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

## Определение максимального числа параллельных заданий

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}
