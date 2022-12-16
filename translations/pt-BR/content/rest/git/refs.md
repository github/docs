---
title: Referências do Git
shortTitle: References
intro: 'Use a API REST para interagir com referências em seu banco de dados Git no {% data variables.product.product_name %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c248685d867fff1835018f0b3021536a8a968168
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192894'
---
## Sobre referências do Git

Uma referência do Git (`git ref`) é um arquivo que contém um hash SHA-1 de commit do Git. Ao referir-se a um commit do Git, você pode usar a referência do Git, que é um nome fácil de lembrar, em vez do hash. A referência do Git pode ser reescrita para apontar para um novo commit. Um branch é uma referência do Git que armazena o novo hash de commit do Git. Esses pontos de extremidade permitem que você leia e grave [referências](https://git-scm.com/book/en/v2/Git-Internals-Git-References) no banco de dados do Git do {% data variables.product.product_name %}.
