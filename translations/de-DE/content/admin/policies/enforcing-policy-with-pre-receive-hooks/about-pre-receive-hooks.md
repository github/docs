---
title: Informationen zu Pre-Receive-Hooks
intro: '*Pre-Receive-Hooks* sind Skripts, die auf der {% data variables.product.prodname_ghe_server %}-Appliance ausgeführt werden, die du zum Implementieren von Qualitätsprüfungen verwenden kannst.'
redirect_from:
  - /enterprise/admin/developer-workflow/about-pre-receive-hooks
  - /enterprise/admin/policies/about-pre-receive-hooks
  - /admin/policies/about-pre-receive-hooks
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
ms.openlocfilehash: a62d5391f9733c4a79ea8ba5d5f8f0d821d47d5c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145102855'
---
Wenn ein Push vorgenommen wird, wird jedes Skript in einer isolierten Umgebung ausgeführt und kann den Inhalt der Pushs überprüfen. Die Skripts sorgen dafür, dass der Push bei dem Beendigungsstatus 0 akzeptiert und bei einem Beendigungsstatus ungleich 0 abgelehnt wird.

## Verwendungsszenarios
Verwende Pre-Receive-Hooks, um Geschäftsregeln zu erfüllen, Regelüberwachungen durchzusetzen und bestimmte allgemeine Fehler zu verhindern.

Beispiele zur möglichen Verwendungsweise von Pre-Receive-Hooks:

- Lege fest, dass Commit-Mitteilungen einem bestimmtem Muster oder Format folgen, also dass sie beispielsweise eine gültige Ticketnummer enthalten oder eine bestimmte Länge aufweisen.
- Sperre einen Branch oder ein Repository, indem du alle Push-Vorgänge ablehnst.
- Verhindere, dass dem Repository vertrauliche Daten hinzugefügt werden, indem du Schlüsselwörter, Muster oder Dateitypen blockierst.
- Verhindere, dass der Autor eines privaten Repositorys seine eigenen Änderungen mergen kann.

## Auswirkung auf die Leistung und Workflows
Die Auswirkung auf Entwickler und auf deren Workflows kann erheblich sein und muss sorgsam durchdacht werden. Von Pre-Receive-Hooks, die auf Geschäftsanforderungen basieren und durchdacht implementiert werden, kann die Organisation als Ganzes am meisten profitieren.

Pre-Receive-Hooks können unerwünschte Auswirkungen auf die Leistung von {% data variables.product.product_location %} haben und sollten sorgfältig implementiert und überprüft werden.
