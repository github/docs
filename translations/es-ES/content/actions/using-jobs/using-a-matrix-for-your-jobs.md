---
title: Uso de una matriz para tus trabajos
shortTitle: Using a matrix
intro: Crea una matriz a fin de definir variaciones para cada trabajo.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /actions/using-jobs/using-a-build-matrix-for-your-jobs
ms.openlocfilehash: 2dd53fd8810e2ca5dcfc74ff8a6e45b46477d55f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145121017'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de las estrategias de matriz

{% data reusables.actions.jobs.about-matrix-strategy %}

## Uso de una estrategia de matriz

{% data reusables.actions.jobs.using-matrix-strategy %}

### Ejemplo: Uso de una matriz de una sola dimensión

{% data reusables.actions.jobs.single-dimension-matrix %}

### Ejemplo: Uso de una matriz de varias dimensiones

{% data reusables.actions.jobs.multi-dimension-matrix %}

### Ejemplo: Uso de contextos para crear matrices

{% data reusables.actions.jobs.matrix-from-context %}

## Expansión o incorporación de configuraciones de matriz

{% data reusables.actions.jobs.matrix-include %}

### Ejemplo: Expansión de configuraciones

{% data reusables.actions.jobs.matrix-expand-with-include %}

### Ejemplo: Incorporación de configuraciones

{% data reusables.actions.jobs.matrix-add-with-include %}

## Exclusión de configuraciones de matriz

{% data reusables.actions.jobs.matrix-exclude %}

## Administración de errores

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

## Definición del número máximo de trabajos simultáneos

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}
