---
title: Usando uma matriz para seus trabalhos
shortTitle: Usando uma matriz
intro: Crie uma matriz para definir variações para cada trabalho.
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

## Sobre estratégias da matriz

{% data reusables.actions.jobs.about-matrix-strategy %}

## Usando uma estratégia da matriz

{% data reusables.actions.jobs.using-matrix-strategy %}

### Exemplo: Usando uma matriz de dimensão única

{% data reusables.actions.jobs.single-dimension-matrix %}

### Exemplo: Usando uma matriz de múltiplas dimensões

{% data reusables.actions.jobs.multi-dimension-matrix %}

### Exemplo: Usando contextos para criar matrizes

{% data reusables.actions.jobs.matrix-from-context %}

## Expansão ou adição de configurações da matriz

{% data reusables.actions.jobs.matrix-include %}

### Exemplo: Expandir configurações

{% data reusables.actions.jobs.matrix-expand-with-include %}

### Exemplo: Adicionar configurações

{% data reusables.actions.jobs.matrix-add-with-include %}

## Excluindo configurações de matriz

{% data reusables.actions.jobs.matrix-exclude %}

## Gerenciando as falhas

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

## Definindo o número máximo de trabalhos simultâneos

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}
