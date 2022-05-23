---
title: Recursos de hardware recomendados para executar o CodeQL
shortTitle: Recursos de hardware para CodeQL
intro: 'Especificações recomendadas (RAM, núcleos de CPU e disco) para executar análises de {% data variables.product.prodname_codeql %} em máquinas auto-hospedadas, com base no tamanho de sua base de código.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Integration
  - CI
---

Você pode configurar {% data variables.product.prodname_codeql %} em {% data variables.product.prodname_actions %} ou em um sistema de CI externo. {% data variables.product.prodname_codeql %} é totalmente compatível com executores hospedados em {% data variables.product.prodname_dotcom %} em {% data variables.product.prodname_actions %}.

Se você estiver usando um sistema de CI externo ou executores auto-hospedados em {% data variables.product.prodname_actions %} para repositórios privados, você será responsável pela configuração do seu próprio hardware. A configuração ideal de hardware para a execução de {% data variables.product.prodname_codeql %} pode variar com base no tamanho e complexidade do seu código, as linguagens de programação e sistemas de compilação usados e a configuração do fluxo de trabalho do CI.

A tabela abaixo fornece as especificações de hardware recomendadas para a execução de análise de {% data variables.product.prodname_codeql %}, com base no tamanho da sua base de código. Use isso como ponto de partida para determinar sua escolha de hardware ou máquina virtual. Uma máquina com maiores recursos pode melhorar o desempenho da análise, mas também pode ser mais cara de manter.

| Tamanho da base de código            | RAM               | CPU            |
| ------------------------------------ | ----------------- | -------------- |
| Pequeno (<100 K linhas de código)    | 8 GB ou superior  | 2 núcleos      |
| Médio (100 K a 1 M linhas de código) | 16 GB ou superior | 4 ou 8 núcleos |
| Grande (>1 M de linhas de código)    | 64 GB ou superior | 8 núcleos      |

Para todos os tamanhos da base de código, recomendamos usar um SSD com 14 GB ou mais de espaço em disco. Deve haver espaço em disco suficiente para verificar e criar seu código, mais espaço adicional para dados produzidos por {% data variables.product.prodname_codeql %}.
