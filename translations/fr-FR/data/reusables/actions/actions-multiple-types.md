---
ms.openlocfilehash: 4c39c079fb88a8a1b86ed9359ebe55be268389bb
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145103969"
---
Si vous spécifiez des types d’activités ou des filtres pour un événement et que votre workflow se déclenche sur plusieurs événements, vous devez configurer chaque événement séparément. Vous devez ajouter un signe deux-points (`:`) à tous les événements, notamment aux événements sans configuration.

Par exemple, un workflow avec la valeur `on` suivante s’exécute quand :

- Une étiquette est créée.
- Une poussée (push) est effectuée dans la branche `main` du dépôt.
- Une poussée (push) est effectuée dans une branche compatible avec {% data variables.product.prodname_pages %}.

```yaml
on:
  label:
    types:
      - created
  push:
    branches:
      - main
  page_build:
```
