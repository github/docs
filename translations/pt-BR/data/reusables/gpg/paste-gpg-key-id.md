---
ms.openlocfilehash: 36346b397ec99040cea0b0ebd45a65d22352c865
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147614196"
---
1. Para definir a sua chave de assinatura GPG principal no Git, cole o texto abaixo, substituindo o ID da chave GPG principal que você gostaria de usar. Neste exemplo, a ID da chave GPG é `3AA5C34371567BD2`:
   ```shell
   $ git config --global user.signingkey <em>3AA5C34371567BD2</em>
   ```
   
   Como alternativa, ao definir uma subchave, inclua o sufixo `!`. Neste exemplo, a ID da subchave GPG é `4BB6D45482678BE3`:
   ```shell
   $ git config --global user.signingkey <em>4BB6D45482678BE3</em>!
   ```
