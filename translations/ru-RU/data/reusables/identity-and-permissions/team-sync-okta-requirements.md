---
ms.openlocfilehash: bc73b3b92f131cf0af80606a2650ac5ce898055e
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "147878750"
---
Прежде чем включить синхронизацию команд для Okta, вам или администратору поставщика удостоверений необходимо выполнить следующие действия:

- Настроить SAML, единый вход и интеграцию SCIM для вашей организации с помощью Okta. Дополнительные сведения см. в разделе [Настройка единого входа SAML и SCIM с помощью Okta](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta).
- Указать URL-адрес клиента для экземпляра Okta.
- Создать допустимый токен SSWS с разрешениями администратора только для чтения для установки Okta в качестве пользователя службы. Дополнительные сведения см. в разделах [Создание токена](https://developer.okta.com/docs/guides/create-an-api-token/create-the-token/) и [Пользователи службы](https://help.okta.com/asa/en-us/Content/Topics/Adv_Server_Access/docs/service-users.htm) в документации Okta.
