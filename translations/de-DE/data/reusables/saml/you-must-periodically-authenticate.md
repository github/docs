---
ms.openlocfilehash: a58f8cdbd481991312d9bce77e1cd41a35ffad75
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145130617"
---
Du musst dich regelmäßig bei deinem SAML-IdP authentifizieren, um dich bei {% ifversion fpt or ghec %}den Organisationsressourcen auf {% data variables.product.prodname_dotcom_the_website %}{% elsif ghae %}{% data variables.product.product_location %}{% endif %} zu authentifizieren und darauf Zugriff zu erhalten. Die Dauer dieser Anmeldephase wird von Deinem IdP festgelegt und beträgt in der Regel 24 Stunden. Durch diese Verpflichtung zur regelmäßigen Anmeldung wird die Dauer des Zugriffs begrenzt, und Du musst Dich erneut identifizieren, um fortzufahren. {% ifversion fpt or ghec %}Du kannst deine aktiven SAML-Sitzungen in deinen Sicherheitseinstellungen anzeigen und verwalten. Weitere Informationen findest du unter [Anzeigen und Verwalten deiner aktiven SAML-Sitzungen](/articles/viewing-and-managing-your-active-saml-sessions).{% endif %}
