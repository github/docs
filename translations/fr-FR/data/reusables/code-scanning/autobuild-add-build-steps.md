---
ms.openlocfilehash: d4d496d4b5c45f557d80aace29013b3b32e478c6
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182273"
---
Si `autobuild` échoue, ou si vous voulez analyser un ensemble de fichiers sources différents de ceux générés par le processus `autobuild`, vous devez supprimer l’étape `autobuild` du workflow et ajouter manuellement les étapes de génération. Pour les projets C/C++, C#, Go,{% ifversion codeql-kotlin-beta %} Kotlin, {% endif %} et Java, {% data variables.product.prodname_codeql %} analyse le code source généré par vos étapes de génération spécifiées.

