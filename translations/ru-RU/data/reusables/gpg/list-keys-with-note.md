---
ms.openlocfilehash: 85c4e104344284797c4fc047569b99657a08d342
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: "147694227"
---
1. Команда `gpg --list-secret-keys --keyid-format=long` позволяет получить длинную форму ключей GPG, для которых у вас есть открытый и закрытый ключ. Закрытый ключ необходим для подписания фиксаций или тегов.

   ```shell{:copy}
   $ gpg --list-secret-keys --keyid-format=long
   ```
   
   {% note %}

   **Примечание.** В некоторых установках GPG в Linux для просмотра списка существующих ключей может требоваться `gpg2 --list-keys --keyid-format LONG`. В этом случае также нужно будет настроить Git для использования `gpg2`, выполнив `git config --global gpg.program gpg2`.

   {% endnote %}
