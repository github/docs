---
ms.openlocfilehash: 13f781a5ff82706ad125c47daecde1e12602dfd9
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: "148098224"
---
{% ifversion ghes %}По умолчанию количество запросов типа "пользователь — сервер"{% else %}Пользователь—сервер{% endif %} ограничено {% ifversion ghae %}15 000{% elsif fpt или ghec или ghes %}5000{% endif %} запросов в час на одного пользователя, прошедшего проверку подлинности. Все запросы от приложений OAuth, авторизованных пользователем или {% данных variables.product.pat_generic %}, принадлежащих пользователю, и запрашивает проверку подлинности с помощью любого из учетных данных проверки подлинности пользователя, используют одну и ту же квоту {% ifversion ghae %}15000{% elsif fpt или ghec или ghes %}5000{% endif %} в час для этого пользователя.
