---
ms.openlocfilehash: 49888e7031e048c77d405b1e65d9e06510e3c789
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147063410"
---
Du musst eine {% data variables.product.prodname_oauth_app %} von einem Drittanbieter verwenden, um SCIM in deiner Organisation zu verwenden. Die {% data variables.product.prodname_oauth_app %} muss von einem bestimmten {% data variables.product.prodname_dotcom %}-Benutzer autorisiert worden sein und agiert anschließend in dessen Namen. Wenn der bzw. die Benutzer*in, der oder die die {% data variables.product.prodname_oauth_app %} zuletzt autorisiert hat, die Organisation verlässt oder aus dieser entfernt wird, funktioniert SCIM nicht mehr. Es wird empfohlen, ein dediziertes Benutzerkonto für die SCIM-Konfiguration zu erstellen, um dieses Problem zu vermeiden. Dieses Benutzerkonto muss ein Organisationsbesitzer sein und benötigt eine Lizenz.
