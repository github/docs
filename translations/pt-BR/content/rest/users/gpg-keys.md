---
title: Chaves GPG
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0781b20628b48b9ca5d411ead6f3ddf1bcd1c6d4
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147875699'
---
## Sobre a API de chaves GPG do Usuário

Os dados retornados no campo de resposta `public_key` não são uma chave formatada em GPG. Quando um usuário faz o upload de uma chave GPG, ela é analisada e a chave pública criptográfica é extraída e armazenada. Essa chave criptográfica é o que é retornado pelas APIs nesta página. Esta chave não é adequada para ser usada diretamente por programas como o GPG.

{% data reusables.user-settings.user-api %}
