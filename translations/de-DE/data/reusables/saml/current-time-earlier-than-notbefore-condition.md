---
ms.openlocfilehash: a9ba68f182b48a4186a4ae63909ef4e146d7c392
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108506"
---
## Fehler: „Current time is earlier than NotBefore condition“ (Aktuelle Zeit liegt vor notBefore-Bedingung)

Dieser Fehler kann auftreten, wenn der Zeitunterschiede zwischen deinem IdP und {% data variables.product.product_name %} zu groß ist, was bei selbstgehosteten IdPs häufig vorkommt.

{% ifversion ghes %} Um dieses Problem zu verhindern, wird empfohlen, die Appliance möglichst auf dieselbe NTP-Quelle (Network Time Protocol) wie den IdP zu verweisen. {% endif %} Wenn dieser Fehler auftritt, achte darauf, dass die Zeit auf {% ifversion ghes %}deiner Appliance{% else %}deinem IdP{% endif %} ordnungsgemäß mit deinem NTP-Server synchronisiert wird.

Wenn du ADFS als IdP verwendest, lege außerdem `NotBeforeSkew` in ADFS für {% data variables.product.prodname_dotcom %} auf 1 Minute fest. Wenn `NotBeforeSkew` auf 0 festgelegt ist, können selbst sehr kleine Zeitunterschiede, einschließlich Millisekunden, Authentifizierungsprobleme verursachen.
