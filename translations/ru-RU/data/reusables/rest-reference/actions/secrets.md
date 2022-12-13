---
ms.openlocfilehash: 4d404225e7ea4975f1e40a3c86f7d23007913b63
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 04/07/2022
ms.locfileid: "141520105"
---
## <a name="secrets"></a>Секреты

API секретов позволяет создавать, обновлять, удалять и извлекать сведения о зашифрованных секретах. {% data reusables.actions.about-secrets %} Дополнительные сведения см. в разделе [Создание и использование зашифрованных секретов для Dependabot](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets).

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} должны иметь разрешение `secrets` на использование этого API. Пользователи, прошедшие проверку подлинности, должны иметь доступ к репозиторию для создания, обновления или чтения секретов, с возможностью совместной работы.