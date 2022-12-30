---
ms.openlocfilehash: 49888e7031e048c77d405b1e65d9e06510e3c789
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147063414"
---
Para usar SCIM con tu organización, debes usar una {% data variables.product.prodname_oauth_app %} propiedad de terceros. La {% data variables.product.prodname_oauth_app %} la debe autorizar un usuario específico de {% data variables.product.prodname_dotcom %} y, posteriormente, actuar en nombre de este. Si el usuario que ha autorizado por última vez esta {% data variables.product.prodname_oauth_app %} abandona la organización o le eliminan de esta, SCIM dejará de funcionar. Para evitar este problema, se recomienda crear una cuenta de usuario dedicada para configurar SCIM. Esta cuenta de usuario debe ser un propietario de la organización y consumirá una licencia.
