---
ms.openlocfilehash: 5466f29d4bb496b6451846f80a90f7b0471f8cda
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145069246"
---
Cualquiera puede revocar su autorización de una aplicación de GitHub desde su [página de configuración de cuenta de GitHub](https://github.com/settings/apps/authorizations). Revocar la autorización de una GitHub App no la desinstalará. Debes programar tu GitHub App para que cuando reciba su webhook deje de llamar a la API en nombre de la persona que revocó el token. Si la aplicación de GitHub sigue usando un token de acceso revocado, recibirá el error `401 Bad Credentials`.
