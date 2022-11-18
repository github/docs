---
ms.openlocfilehash: 27c764ba249fba171877221492b486d59bde7230
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145104038"
---
Les déclencheurs de workflow sont des événements qui entraînent l’exécution d’un workflow. Ces événements peuvent être les suivants :

- Événements qui se produisent dans le dépôt de votre workflow
- Événements qui se produisent en dehors de {% data variables.product.product_name %} et qui déclenchent un événement `repository_dispatch` sur {% data variables.product.product_name %}
- Heures planifiées
- Manuel

Par exemple, vous pouvez configurer votre workflow pour qu’il s’exécute lorsqu’un push est effectué vers la branche par défaut de votre dépôt, lorsqu’une version est créée ou lorsqu’un problème est ouvert.
