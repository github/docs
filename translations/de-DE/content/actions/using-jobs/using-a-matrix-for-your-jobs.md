---
title: Verwenden von Matrizen für deine Aufträge
shortTitle: Using a matrix
intro: 'Erstelle eine Matrix, um Variationen für jeden Auftrag zu definieren.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /actions/using-jobs/using-a-build-matrix-for-your-jobs
ms.openlocfilehash: 2dd53fd8810e2ca5dcfc74ff8a6e45b46477d55f
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: '145107103'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu Matrixstrategien

{% data reusables.actions.jobs.about-matrix-strategy %}

## Verwenden einer Matrixstrategie

{% data reusables.actions.jobs.using-matrix-strategy %}

### Beispiel: Verwenden einer Matrix mit einer einzelnen Dimension

{% data reusables.actions.jobs.single-dimension-matrix %}

### Beispiel: Verwenden einer Matrix mit mehreren Dimensionen

{% data reusables.actions.jobs.multi-dimension-matrix %}

### Beispiel: Erstellen von Matrizen mithilfe von Kontexten

{% data reusables.actions.jobs.matrix-from-context %}

## Erweitern oder Hinzufügen von Matrixkonfigurationen

{% data reusables.actions.jobs.matrix-include %}

### Beispiel: Erweitern von Konfigurationen

{% data reusables.actions.jobs.matrix-expand-with-include %}

### Beispiel: Hinzufügen von Konfigurationen

{% data reusables.actions.jobs.matrix-add-with-include %}

## Ausschließen von Matrixkonfigurationen

{% data reusables.actions.jobs.matrix-exclude %}

## Behandeln von Fehlern

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

## Definieren der maximalen Anzahl von gleichzeitigen Aufträgen

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}
