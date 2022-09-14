---
title: Hooks pré-recebidos do repositório
intro: A API de Ganchos de Pré-recebimento do Repositório permite que você veja e modifique a imposição dos ganchos de pré-recebimento disponíveis para um repositório.
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 63ba6f4f7d67b43dd39609a6520a0938365cfc12
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065159'
---
### Atributos do objeto

| Nome                | Tipo     | Descrição                                               |
|---------------------|----------|-----------------------------------------------------------|
| `name`              | `string` | O nome do hook.                                     |
| `enforcement`       | `string` | O estado de aplicação para o hook neste repositório. |
| `configuration_url` | `string` | URL para o ponto de extremidade em que a aplicação é definida.            |

Os possíveis valores para *a imposição* são `enabled`, `disabled` e `testing`. `disabled` indica que o gancho de pré-recebimento não será executado. `enabled` indica que ele será executado e rejeitará os pushes que resultem em um status diferente de zero. `testing` significa que o script será executado, mas não fará com que nenhum push seja rejeitado.

`configuration_url` pode ser um link para esse repositório, o proprietário da organização ou a configuração global. A autorização para acessar o ponto de extremidade em `configuration_url` é determinada no nível do proprietário ou do administrador do site.
