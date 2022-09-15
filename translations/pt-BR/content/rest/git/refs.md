---
title: Referências do Git
shortTitle: References
intro: 'A API Referências do Git permite que você leia e grave referências no banco de dados do Git no {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 60f76710e14a754f9508f0919c94b9fbe57d21e1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147093051'
---
## Sobre a API de Referências do Git

Uma referência do Git (`git ref`) é um arquivo que contém um hash SHA-1 de commit do Git. Ao referir-se a um commit do Git, você pode usar a referência do Git, que é um nome fácil de lembrar, em vez do hash. A referência do Git pode ser reescrita para apontar para um novo commit. Um branch é uma referência do Git que armazena o novo hash de commit do Git. Esses pontos de extremidade permitem que você leia e grave [referências](https://git-scm.com/book/en/v1/Git-Internals-Git-References) no banco de dados do Git do {% data variables.product.product_name %}.
