---
ms.openlocfilehash: 1d927654aef94ef5050b99120b27a6f41e1cc03b
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 04/07/2022
ms.locfileid: "141519985"
---
API секретов {% data variables.product.prodname_dependabot %} позволяет создавать, обновлять, удалять и извлекать сведения о зашифрованных секретах. {% data reusables.actions.about-secrets %} Дополнительные сведения см. в разделе [Управление зашифрованными секретами для Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot).

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} должны иметь разрешение `dependabot_secrets` на использование этого API. Пользователи, прошедшие проверку подлинности, должны иметь доступ к репозиторию для создания, обновления или чтения секретов, с возможностью совместной работы.