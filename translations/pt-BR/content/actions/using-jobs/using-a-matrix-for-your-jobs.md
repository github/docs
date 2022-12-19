---
title: Usando uma matriz para seus trabalhos
shortTitle: Using a matrix
intro: Crie uma matriz para definir as variações de cada trabalho.
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145096052'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre estratégias de matriz

{% data reusables.actions.jobs.about-matrix-strategy %}

## Usando uma estratégia de matriz

{% data reusables.actions.jobs.using-matrix-strategy %}

### Exemplo: usando uma matriz unidimensional

{% data reusables.actions.jobs.single-dimension-matrix %}

### Exemplo: usando uma matriz multidimensional

{% data reusables.actions.jobs.multi-dimension-matrix %}

### Exemplo: usar contextos para criar matrizes

{% data reusables.actions.jobs.matrix-from-context %}

## Expandir ou adicionar configurações de matriz

{% data reusables.actions.jobs.matrix-include %}

### Exemplo: expandindo configurações

{% data reusables.actions.jobs.matrix-expand-with-include %}

### Exemplo: adicionando configurações

{% data reusables.actions.jobs.matrix-add-with-include %}

## Excluindo configurações de matriz

{% data reusables.actions.jobs.matrix-exclude %}

## Tratamento de falhas

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

## Como definir o número máximo de trabalhos simultâneos

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}
