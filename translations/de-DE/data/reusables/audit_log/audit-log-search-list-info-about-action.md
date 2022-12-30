---
ms.openlocfilehash: e01273fe15058c00b11d380a3c50d4448cfb92b8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "146180783"
---
Der Name für jeden Überwachungsprotokolleintrag besteht aus dem Objekt- oder Kategoriequalifizierer `action`, gefolgt von einem Vorgangstyp. Der Eintrag `repo.create` verweist beispielsweise auf den Vorgang `create` in der Kategorie `repo`.

Jeder Eintrag im Auditprotokoll zeigt die zutreffenden Informationen zu einem Ereignis an, beispielsweise:

- in {% ifversion ghec or ghes or ghae %}welchem Unternehmen oder {% endif %}welcher Organisation eine Aktion durchgeführt wurde
- welcher Benutzer (Akteur) die Aktion durchgeführt hat
- welcher Benutzer von der Aktion betroffen ist
- an welchem Repository eine Aktion durchgeführt wurde
- Die Aktion, die ausgeführt wurde
- in welchem Land die Aktion durchgeführt wurde,
- Datum und Uhrzeit des Auftretens der Aktion {%- ifversion enterprise-audit-log-ip-addresses %}
- Optional wird die Quell-IP-Adresse für den Benutzer (Akteur) verwendet, der die Aktion ausgeführt hat.{%- endif %}
