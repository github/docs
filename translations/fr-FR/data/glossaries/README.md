---
ms.openlocfilehash: 6d982c0371125b4bf2536b0f7840abe05281db2d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145066595"
---
# Glossaires

Les fichiers suivants composent notre [Glossaire Crowdin](https://support.crowdin.com/glossary/) :

* `external.yml` contient les entrées de glossaire destinées au client.
  * Les chaînes présentes dans `external.yml` prennent en charge les instructions conditionnelles Liquid. Consultez [contributing/liquid-helpers.md](/contributing/liquid-helpers.md).
* `internal.yml` contient uniquement les entrées utilisées par les traducteurs. Ces termes sont affichés dans l’IU de Crowdin pour fournir aux traducteurs un contexte supplémentaire sur ce qu’ils traduisent ainsi qu’une suggestion de chaîne localisée pour ce terme.
* `candidates.yml` contient les termes qui doivent éventuellement figurer dans le glossaire interne ou externe, mais qui n’ont pas encore été définis.
