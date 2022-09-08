---
ms.openlocfilehash: 78f339bf711757c45cae1fac32bc100f60816036
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147694205"
---
1. Da lista de chaves GPG, copie a forma longa do ID da chave GPG que você gostaria de usar. Neste exemplo, a ID da chave GPG é `3AA5C34371567BD2`:
    ```shell{:copy}
  $ gpg --list-secret-keys --keyid-format=long
  /Users/hubot/.gnupg/secring.gpg
  ------------------------------------
  sec   4096R/<em>3AA5C34371567BD2</em> 2016-03-10 [expires: 2017-03-10]
  uid                          Hubot <hubot@example.com>
  ssb   4096R/42B317FD4BA89E7A 2016-03-10
 ```
