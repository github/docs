---
title: Hooks de pré-recebimento da organização
intro: A API de Ganchos de Pré-recebimento da Organização permite que você veja e modifique a imposição dos ganchos de pré-recebimento disponíveis para uma organização.
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 802ed40ac8e42c1f0a9ef3b6bab4a150dd68603c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063959'
---
### Atributos do objeto

| Nome                             | Tipo      | Descrição                                               |
|----------------------------------|-----------|-----------------------------------------------------------|
| `name`                           | `string`  | O nome do hook.                                     |
| `enforcement`                    | `string`  | O estado de aplicação para o hook neste repositório. |
| `allow_downstream_configuration` | `boolean` | Se os repositórios podem substituir a imposição.            |
| `configuration_url`              | `string`  | URL para o ponto de extremidade em que a aplicação é definida.            |

Os possíveis valores para *a imposição* são `enabled`, `disabled` e `testing`. `disabled` indica que o gancho de pré-recebimento não será executado. `enabled` indica que ele será executado e rejeitará os pushes que resultem em um status diferente de zero. `testing` significa que o script será executado, mas não fará com que nenhum push seja rejeitado.

`configuration_url` pode ser um link para esse ponto de extremidade ou para a configuração global desse gancho. Apenas administradores do site podem acessar a configuração global.
