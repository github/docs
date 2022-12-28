---
ms.openlocfilehash: c03f2677064bae6362b21c172725d334a2b22994
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160142"
---
1. При необходимости рядом с полем "Использование в этом месяце" щелкните **Получить отчет об использовании** , чтобы получить сообщение электронной почты, содержащее ссылку для скачивания отчета об использовании хранилища CSV для {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %} и {% data variables.product.prodname_github_codespaces %}. Это сообщение электронной почты отправляется на основной адрес электронной почты вашей учетной записи. Вы можете выбрать период отчета: 7, 30, 90 или 180 дней.

   ![Загрузить отчет в формате CSV](/assets/images/help/billing/actions-packages-report-download.png)

   Данные, используемые для этого отчета, обновляются ежедневно. 

   Чтобы просмотреть затраты на использование и хранение вычислительных ресурсов {% data variables.product.prodname_github_codespaces %}, отфильтруйте отчет, чтобы в `Product` столбце отображались только строки с упоминанием Codespaces.

   ![Снимок экрана: отчет об использовании, отфильтрованный по {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/CSV-usage-report.png)

   Чтобы просмотреть только затраты на создание, обновление и хранение предварительных сборок, отфильтруйте отчет, чтобы в `Actions Workflow` столбце отображались только строки с упоминанием "Create Codespaces Prebuilds".

   ![Снимок экрана: отчет об использовании, отфильтрованный по предварительным сборкам](/assets/images/help/codespaces/CSV-usage-report-prebuilds.png)
