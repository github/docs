---
ms.openlocfilehash: 5466f29d4bb496b6451846f80a90f7b0471f8cda
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145067272"
---
Любой пользователь может отменить авторизацию приложения GitHub со своей [страницы параметров учетной записи GitHub](https://github.com/settings/apps/authorizations). Отмена авторизации приложения GitHub не деинсталлирует приложение GitHub. Стоит запрограммировать приложение GitHub таким образом, чтобы при получении этого веб-перехватчика оно переставало вызывать API от имени пользователя, который отозвал маркер. Если приложение GitHub продолжает использовать отозванный маркер доступа, оно получит ошибку `401 Bad Credentials`.
