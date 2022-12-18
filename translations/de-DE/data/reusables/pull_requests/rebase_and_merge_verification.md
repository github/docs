---
ms.openlocfilehash: 038896fa537c7cc3ea3fa95e903900a9eb8f3db7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145917061"
---
Wenn du die Option **Rebase und Merge** für einen Pull Request verwendest, ist es wichtig zu wissen, dass die Commits im Headbranch ohne Überprüfung der Commitsignatur dem Basisbranch hinzugefügt werden. Wenn du diese Option verwendest, erstellt {% data variables.product.prodname_dotcom %} einen geänderten Commit unter Verwendung der Daten und des Inhalts des ursprünglichen Commits. Das bedeutet, dass {% data variables.product.prodname_dotcom %} diesen Commit nicht wirklich erstellt hat und ihn daher nicht als generischer Systembenutzer signieren kann. {% data variables.product.prodname_dotcom %} hat keinen Zugriff auf die privaten Signaturschlüssel des Committers und kann daher den Commit nicht im Auftrag des Benutzers signieren.

Ein Workaround dafür ist, dass du lokal einen Rebase- und Mergevorgang durchführst und die Änderungen dann in den Basisbranch des Pull Requests pushst.
