---
ms.openlocfilehash: 8a86f408128b56cc31c0e8876e962994edf7cdc4
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145282833"
---
Standardmäßig werden die von Workflows generierten Artefakte und Protokolldateien 90 Tage lang aufbewahrt und dann automatisch gelöscht.

{%- ifversion fpt or ghec %} Du kannst den Aufbewahrungszeitraum abhängig von der Art des Repositorys anpassen:

- Öffentliche Repositorys: Der Aufbewahrungszeitraum kann auf einen beliebigen Wert zwischen einem Tag und 90 Tagen festgelegt werden.
- Private{% ifversion ghec %} und interne{% endif %} Repositorys: Der Aufbewahrungszeitraum kann auf einen beliebigen Wert zwischen einem Tag und 400 Tagen festgelegt werden.
{%- else %} Der Aufbewahrungszeitraum kann auf einen beliebigen Wert zwischen einem Tag und 400 Tagen festgelegt werden.
{%- endif %}

Der angepasste Aufbewahrungszeitraum gilt nur für neue Artefakte und Protokolldateien. Er gilt nicht rückwirkend für bereits vorhandene Objekte. Bei verwalteten Repositorys und Organisationen darf der maximale Aufbewahrungszeitraum den von der verwaltenden Organisation oder vom verwaltenden Unternehmen festgelegten Grenzwert nicht übersteigen.
