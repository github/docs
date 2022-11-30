---
ms.openlocfilehash: b9aa2cbac3e32319aac7d2b7ef53422f53125643
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876938"
---
Ein Load-Balancer-Design verwendet ein Netzwerkgerät, um den Git- und HTTP-Traffic an einzelne {% data variables.product.prodname_ghe_server %}-Appliances zu leiten. Du kannst einen Load-Balancer verwenden, um aus Sicherheitsgründen den direkten Traffic zur Appliance einzuschränken oder um den Traffic bei Bedarf weiterzuleiten, ohne dass dazu Änderungen am DNS-Eintrag erforderlich sind. Es wird dringend empfohlen, einen TCP-basierten Load-Balancer zu verwenden, der das PROXY-Protokoll unterstützt.
