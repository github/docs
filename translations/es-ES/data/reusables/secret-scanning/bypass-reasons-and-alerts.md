---
ms.openlocfilehash: eb4b729cf490728306961ff3d2ef2835700c8735
ms.sourcegitcommit: 80edcdbff4726de4d196584fcb603bca2efffd1f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/24/2022
ms.locfileid: "148181809"
---
En esta tabla se muestra el comportamiento de las alertas para cada forma en que un usuario puede omitir un bloque de protección de inserción.

| Razón de la omisión         | Comportamiento de alerta                                              |
|-----------------------|------------------------------------------------------|
| Se usa en pruebas    | {% data variables.product.prodname_dotcom %} crea una alerta cerrada, resuelta como "se usa en pruebas"  |
| Es un falso positivo | {% data variables.product.prodname_dotcom %} crea una alerta cerrada, resuelta como "falso positivo" |
| Lo arreglaré más tarde     | {% data variables.product.prodname_dotcom %} crea una alerta abierta                                |