---
ms.openlocfilehash: 346aee71fb06f01bf9130c8b80039206816c106a
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145102478"
---
Utilisez le protocole X-Forwarded-For **uniquement** lorsque le protocole PROXY n’est pas disponible. L’en-tête `X-Forwarded-For` fonctionne uniquement avec HTTP et HTTPS. L’adresse IP signalée pour les connexions Git via SSH affiche l’adresse IP de l’équilibreur de charge.
