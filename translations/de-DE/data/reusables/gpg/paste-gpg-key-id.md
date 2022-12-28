---
ms.openlocfilehash: 36346b397ec99040cea0b0ebd45a65d22352c865
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147614199"
---
1. Um deinen primären GPG-Signaturschlüssel in Git festzulegen, fügst du unten den entsprechenden Text ein, also die ID des primären GPG-Schlüssels, den du verwenden möchtest. In diesem Beispiel lautet die GPG-Schlüssel-ID `3AA5C34371567BD2`:
   ```shell
   $ git config --global user.signingkey <em>3AA5C34371567BD2</em>
   ```
   
   Alternativ kannst du beim Festlegen eines Unterschlüssels das `!`-Suffix anfügen. In diesem Beispiel lautet die GPG-Unterschlüssel-ID `4BB6D45482678BE3`:
   ```shell
   $ git config --global user.signingkey <em>4BB6D45482678BE3</em>!
   ```
