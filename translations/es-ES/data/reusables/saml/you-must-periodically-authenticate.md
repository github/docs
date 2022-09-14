---
ms.openlocfilehash: a58f8cdbd481991312d9bce77e1cd41a35ffad75
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145134833"
---
Debes utilizar periódicamente tu idP de SAML para autenticarte y obtener acceso a {% ifversion fpt or ghec %}los recursos de la organización de {% data variables.product.prodname_dotcom_the_website %}{% elsif ghae %}{% data variables.product.product_location %}{% endif %}. Tu IdP especifica la duración de este período de inicio de sesión y, generalmente, es de 24 horas. Este requisito de inicio de sesión periódico limita la duración del acceso y requiere que te vuelvas a identificar para continuar. {% ifversion fpt or ghec %}Puedes ver y administrar tus sesiones de SAML activas en la configuración de seguridad. Para obtener más información, consulta "[Ver y administrar tus sesiones de SAML activas](/articles/viewing-and-managing-your-active-saml-sessions)."{% endif %}
