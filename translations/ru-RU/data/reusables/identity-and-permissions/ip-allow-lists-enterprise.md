---
ms.openlocfilehash: f88150299e77eff08e5db75a7ef5bf5bd460328b
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/28/2022
ms.locfileid: "148184092"
---
При включении списка разрешений настроенные IP-адреса сразу добавляются в списки разрешений организаций в пределах вашего предприятия. Если отключить список разрешений, адреса будут удалены из списков разрешений организации. 

{% data reusables.identity-and-permissions.org-enterprise-allow-list-interaction %} Дополнительные сведения см. в разделе [Управление разрешенными IP-адресами для вашей организации](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization).

Вы можете автоматически добавить в список разрешений любые IP-адреса, настроенные для {% data variables.product.prodname_github_apps %}, установленных на предприятии. Создатель {% data variables.product.prodname_github_app %} настроил список разрешений для приложения, указывающий IP-адреса, с использованием которых выполняется приложение. Наследуя их список разрешений в вашей среде, вы избегаете отправки запросов на подключение от отклоняемого приложения. Дополнительные сведения см. в разделе [Разрешение доступа к приложениям GitHub](#allowing-access-by-github-apps).
