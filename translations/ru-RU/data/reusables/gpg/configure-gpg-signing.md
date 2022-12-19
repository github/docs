---
ms.openlocfilehash: 106c5660ab12d4e3e8b87aeafc33cbca8898a7d8
ms.sourcegitcommit: 42536e8cb82d50b98cdaee038f09c6aeb0d037c6
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/07/2022
ms.locfileid: "148012065"
---
1. Если вы ранее настроили Git использование другого формата ключа при подписи с `--gpg-sign`помощью, отмените эту конфигурацию, чтобы будет использоваться формат `openpgp` по умолчанию.

   ```Shell
   $ git config --global --unset gpg.format
   ```
