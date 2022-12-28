---
ms.openlocfilehash: 3bb3621aef6adcf7c0d40336a4d4fc2495c10d47
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: "148099207"
---
Прежде чем авторизовать ключ {% данных variables.product.pat_generic %} или SSH, необходимо иметь связанное удостоверение SAML. Если вы являетесь членом организации, в которой включен единый вход SAML, можно создать связанное удостоверение, выполнив проверку подлинности в организации с помощью поставщика удостоверений хотя бы один раз. Дополнительные сведения см. в разделе [Сведения о проверке подлинности с помощью единого входа SAML](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on).

После авторизации ключа {% данных variables.product.pat_generic %} или SSH маркер или ключ останутся авторизованными до отмены одним из следующих способов.
- Владелец организации или предприятия отменяет авторизацию.
- Вас удалили из организации.
- Области в {% данных variables.product.pat_generic %} редактируются или маркер создается повторно.
- Срок действия {% данных variables.product.pat_generic %} истек, как определено во время создания.
