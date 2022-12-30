---
ms.openlocfilehash: d4d496d4b5c45f557d80aace29013b3b32e478c6
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182274"
---
Wenn bei `autobuild` ein Fehler auftritt oder du andere Quelldateien als die durch den Prozess `autobuild` erstellten Dateien analysieren möchtest, musst du den Schritt `autobuild` aus dem Workflow entfernen und manuell Buildschritte hinzufügen. Für C/C++-, C#-, Go,{% ifversion codeql-kotlin-beta %} Kotlin- {% endif %} und Java-Projekte analysiert {% data variables.product.prodname_codeql %} den Quellcode, der von den von dir angegebenen Buildschritten erstellt wird.

