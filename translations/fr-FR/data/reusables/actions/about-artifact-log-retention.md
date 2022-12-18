---
ms.openlocfilehash: 8a86f408128b56cc31c0e8876e962994edf7cdc4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145282832"
---
Par défaut, les artefacts et les fichiers journaux générés par les workflows sont conservés pendant 90 jours avant d’être automatiquement supprimés.

{%- ifversion fpt or ghec %} Vous pouvez ajuster la période de conservation en fonction du type de dépôt :

- Pour les dépôts publics : vous pouvez changer cette période de conservation en la remplaçant par une valeur comprise entre 1 jour et 90 jours.
- Pour les dépôts privés{% ifversion ghec %} et internes{% endif %} : vous pouvez changer cette période de conservation en la remplaçant par une valeur comprise entre 1 jour et 400 jours.
{%- else %} Vous pouvez changer cette période de conservation en la remplaçant par une valeur comprise entre 1 jour et 400 jours.
{%- endif %}

Quand vous personnalisez la période de conservation, elle s’applique uniquement aux nouveaux artefacts et fichiers journaux, elle ne s’applique pas rétroactivement aux objets existants. Pour les organisations et dépôts managés, la période de conservation maximale ne peut pas dépasser la limite définie par l’organisation ou l’entreprise responsable.
