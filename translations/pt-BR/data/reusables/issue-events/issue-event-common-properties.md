---
ms.openlocfilehash: 7ddb09d4432677f68ccc7dcb757548555cd65db9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147080973"
---
Nome | Tipo | Descrição
-----|------|--------------
`id` | `integer` | O identificador exclusivo do evento.
`node_id` | `string` | A [ID de Nó Global](/graphql/guides/using-global-node-ids) do evento.
`url`| `string` | A URL da API REST para buscar o evento.
`actor` | `object`| A pessoa que gerou o evento.
`event` | `string` | Identifica o tipo atual do evento que ocorreu.
`commit_id` | `string` | O SHA do commit que fez referência a esta issue.
`commit_url` | `string` | O link da GitHub REST API para o commit que referenciou este problema.
`created_at` | `string` | O timestamp indicando quando ocorreu o evento.
