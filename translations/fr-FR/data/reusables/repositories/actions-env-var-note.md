---
ms.openlocfilehash: 81a94e9dce7fe1354dc1a32f0540ef90a4fe8dcb
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145105789"
---
Quand plusieurs variables d’environnement sont définies avec le même nom, {% data variables.product.prodname_dotcom %} utilise la variable d’environnement la plus spécifique. Par exemple, une variable d’environnement définie dans une étape remplace les variables du travail et du workflow de même nom, pendant l’exécution de l’étape. Une variable définie pour un travail remplace une variable de workflow de même nom, pendant l’exécution du travail.
