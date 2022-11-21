---
ms.openlocfilehash: 632a3ac2c6b2d5d074ef3b1db598ed57a89195c5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147369252"
---
1. Выполните следующую команду, заменив KEY-ID идентификатором ключа PGP.

   ```bash{:copy}
   gpg --armor --export KEY-ID
   ```
1. Скопируйте ключ PGP, начиная с `-----BEGIN PGP PUBLIC KEY BLOCK-----` и заканчивая `-----END PGP PUBLIC KEY BLOCK-----`.
1. Войдите в {% data variables.product.prodname_ghe_server %} в качестве пользователя `web-flow`.
1. Добавьте открытый ключ PGP в профиль пользователя. Дополнительные сведения см. в статье "[Добавление ключа GPG в учетную запись {% data variables.product.prodname_dotcom %}](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account)".

   {% note %}

   **Примечание.** Не удаляйте другие открытые ключи из списка ключей GPG. Если открытый ключ удален, все фиксации, подписанные соответствующим закрытым ключом, больше не будут помечены как проверенные.

   {% endnote %}
