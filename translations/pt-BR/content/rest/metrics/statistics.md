---
title: Estatísticas do repositório
shortTitle: Statistics
allowTitleToDifferFromFilename: true
intro: 'A API de Estatísticas do repositório permite que você busque os dados usados pelo {% data variables.product.product_name %} para visualizar diferentes tipos de atividades do repositório.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 74692780426dd848634bf18f16bacd3770da001c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066127'
---
## Sobre a API de Estatísticas do repositório

A API de Estatísticas do repositório permite que você busque os dados usados pelo {% data variables.product.product_name %} para visualizar diferentes tipos de atividades do repositório.

### Umas palavras sobre o armazenamento em cache

Computar as estatísticas do repositório é uma operação cara. Por esse motivo, tentamos retornar dados armazenados em cache sempre que possível.  Se os dados não forem armazenados em cache nas estatísticas de um repositório, você receberá uma resposta `202`. Um trabalho em segundo plano também é disparado para começar a compilar essas estatísticas. Dê ao trabalho alguns instantes para que ele seja concluído e envie a solicitação novamente. Se o trabalho for concluído, essa solicitação receberá uma resposta `200` com as estatísticas no corpo da resposta.

As estatísticas do repositório são armazenadas em cache pelo SHA do branch-padrão do repositório; fazer push para o branch-padrão redefine o armazenamento em cache de estatísticas.

### As estatísticas excluem alguns tipos de commits

As estatísticas expostas pela API correspondem às estatísticas mostradas por [diferentes grafos de repositório](/github/visualizing-repository-data-with-graphs/about-repository-graphs).

Para resumir:
- Todas as estatísticas excluem commits de merge.
- As estatísticas do contribuidor também excluem commits vazios.
