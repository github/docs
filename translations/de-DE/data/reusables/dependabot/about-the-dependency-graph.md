---
ms.openlocfilehash: 8cf9b4b70c5295ad2c7178a586fd660e05a88076
ms.sourcegitcommit: 770ed406ec075528ec9c9695aa4bfdc8c8b25fd3
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "147885548"
---
Das Abhängigkeitsdiagramm ist eine Zusammenfassung von Manifest- und Sperrdateien, die in einem Repository gespeichert sind{% ifversion dependency-submission-api %}, und aller mithilfe der Abhängigkeitsübermittlungs-API (Beta) für das Repository übermittelten Abhängigkeiten{% endif %}. Für jedes Repository wird Folgendes angezeigt{% ifversion fpt or ghec %}:

- Abhängigkeiten (die Ökosysteme und Pakete, von denen es abhängig ist)
- Abhängige Elemente (die Repositorys und Pakete, die von ihm abhängig sind){% else %} Abhängigkeiten, also die Ökosysteme und Pakete, von denen es abhängig ist. {% data variables.product.product_name %} berechnet weder Informationen zu abhängigen Elementen noch zu den Repositorys und Paketen, die von einem Repository abhängig sind.{% endif %}
