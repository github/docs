---
ms.openlocfilehash: b6dfc33713afc09930569825ced59238fcede851
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881860"
---
{% note %}

**Hinweis**: Die Überprüfungs-API sucht nur in dem Repository nach Pushes, in dem die Überprüfungssammlung oder die Überprüfungsausführung erstellt wurden. Pushes an einen Branch in einem geforkten Repository werden nicht erkannt und geben ein leeres `pull_requests`-Array und einen `null`-Wert für `head_branch` zurück.

{% endnote %}
