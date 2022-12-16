---
title: Ambientes Pre-receive
intro: 'A API de Ambientes Pre-receive permite que você crie, liste, atualize e apague ambientes para hooks pre-receive.'
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 9db8635691ae2f8fcb8649b648948763168081ac
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883259'
---
*Ela só está disponível para administradores [autenticados](/rest/overview/resources-in-the-rest-api#authentication) do site.* Os usuários normais receberão uma resposta `404` se tentarem acessá-la.

### Atributos do objeto

#### Ambiente pre-receive

| Nome                  | Tipo      | Descrição                                                                |
|-----------------------|-----------|----------------------------------------------------------------------------|
| `name`                | `string`  | O nome do ambiente conforme exibido na interface do usuário.                        |
| `image_url`           | `string`  | URL do tarball que será baixado e extraído.                  |
| `default_environment` | `boolean` | Se este é o ambiente-padrão que vem com {% data variables.product.product_name %}. |
| `download`            | `object`  | Status do download deste ambiente.                                        |
| `hooks_count`         | `integer` | O número de hooks de pre-receive que usam este ambiente.                 |

#### Download do ambiente pre-receive

| Nome            | Tipo     | Descrição                                             |
|-----------------|----------|---------------------------------------------------------|
| `state`         | `string` | O estado do download mais recente.                  |
| `downloaded_at` | `string` | A hora em que o download mais recente começou.         |
| `message`       | `string` | Em caso de falha, serão produzidas mensagens de erro. |

Os valores possíveis para `state` são `not_started`, `in_progress`, `success` e `failed`.
