---
title: Repository statistics
shortTitle: Estatísticas
allowTitleToDifferFromFilename: true
intro: 'The Repository statistics API allows you to fetch the data that {% data variables.product.product_name %} uses for visualizing different types of repository activity.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Repository statistics API

The Repository statistics API allows you to fetch the data that {% data variables.product.product_name %} uses for visualizing different types of repository activity.

### Umas palavras sobre o armazenamento em cache

Computar as estatísticas do repositório é uma operação cara. Por esse motivo, tentamos retornar dados armazenados em cache sempre que possível.  Se os dados não forem armazenados em cache nas estatísticas de um repositório, você receberá uma resposta de `202`; um trabalho em segundo plano também é acionado para começar a compilar estas estatísticas. Dê ao trabalho alguns instantes para que seja concluído e, em seguida, envie a solicitação novamente. Se o trabalho foi concluído, essa solicitação receberá uma resposta de `200` com as estatísticas no texto da resposta.

As estatísticas do repositório são armazenadas em cache pelo SHA do branch-padrão do repositório; fazer push para o branch-padrão redefine o armazenamento em cache de estatísticas.

### As estatísticas excluem alguns tipos de commits

As estatísticas expostas pela API correspondem às estatísticas mostradas pelos [diferentes gráficos de repositórios](/github/visualizing-repository-data-with-graphs/about-repository-graphs).

Resumo:
- Todas as estatísticas excluem commits de merge.
- As estatísticas do contribuidor também excluem commits vazios.
