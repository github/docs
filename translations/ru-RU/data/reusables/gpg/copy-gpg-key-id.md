---
ms.openlocfilehash: 477b5d6f7f1c0d856473991c1cc3f7cf3b52dab9
ms.sourcegitcommit: 219fb805abddaef3e5547638bd798da890020bfd
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: "147869446"
---
1. Из списка ключей GPG скопируйте длинную форму идентификатора ключа GPG, который вы хотите использовать. В этом примере идентификатором ключа GPG является `3AA5C34371567BD2`:
    ```shell{:copy}
  $ gpg --list-secret-keys --keyid-format=long
  /Users/hubot/.gnupg/secring.gpg
  ------------------------------------
  sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
  uid                          Hubot <hubot@example.com>
  ssb   4096R/42B317FD4BA89E7A 2016-03-10
 ```
