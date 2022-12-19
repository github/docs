---
ms.openlocfilehash: 00bdf100d02b27ce76aff35582cb4a1f5a2469a3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145116976"
---
1. Настройте профиль публикации Azure и создайте секрет `AZURE_WEBAPP_PUBLISH_PROFILE`.

   Создайте учетные данные развертывания Azure с помощью профиля публикации. Дополнительные сведения см. в разделе [Создание учетных данных развертывания](https://docs.microsoft.com/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials) в документации по Azure.

   В репозитории {% data variables.product.prodname_dotcom %} создайте секрет `AZURE_WEBAPP_PUBLISH_PROFILE`, содержащий сведения из профиля публикации. Дополнительные сведения о создании секретов см. в разделе [Зашифрованные секреты](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository).
