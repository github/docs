---
ms.openlocfilehash: b9aa2cbac3e32319aac7d2b7ef53422f53125643
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876939"
---
Une conception d’équilibreur de charge utilise un appareil réseau pour diriger le trafic Git et HTTP vers des appliances {% data variables.product.prodname_ghe_server %} individuelles. Vous pouvez utiliser un équilibreur de charge pour restreindre le trafic direct vers l’appliance à des fins de sécurité, ou pour rediriger le trafic si nécessaire sans modifications de l’enregistrement DNS. Nous vous recommandons vivement d’utiliser un équilibreur de charge basé sur TCP qui prend en charge le protocole PROXY.
