---
title: Revisão de dependência
intro: 'A API de revisão de dependência permite que você entenda as alterações de dependência, e o impacto de segurança dessas alterações, antes de adicioná-las ao seu ambiente.'
versions:
  fpt: '*'
  ghes: '>=3.6'
  ghec: '*'
  ghae: issue-6396
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## Sobre a API de revisão da dependência

{% data reusables.dependency-review.dependency-review-api-beta-note %}

A API de revisão de dependência permite que você entenda as alterações de dependência, e o impacto de segurança dessas alterações, antes de adicioná-las ao seu ambiente. É possível ver o diff de dependências entre dois commits de um repositório, incluindo dados de vulnerabilidade para atualizações de versões com vulnerabilidades conhecidas. Para obter mais informações sobre a análise de dependências, consulte "[Sobre a revisão de dependências](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".
