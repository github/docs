---
title: Usando condições para controlar a execução do trabalho
shortTitle: Usando condições para controlar a execução do trabalho
intro: Impeça que um trabalho seja executado a menos que suas condições sejam atendidas.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Visão Geral

{% note %}

**Observação:** Um trabalho que ignorado irá relatar seu status como "Sucesso". Isso não impedirá o merge de um pull request mesmo que seja uma verificação necessária.

{% endnote %}

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

Você verá o seguinte status em um trabalho ignorado:

![Skipped-required-run-details](/assets/images/help/repository/skipped-required-run-details.png)
