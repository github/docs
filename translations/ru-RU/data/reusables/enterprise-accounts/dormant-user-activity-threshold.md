---
ms.openlocfilehash: 0e815b78ccfa3c799c0558fca89fc84f0fccd2bf
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145124051"
---
{% ifversion not ghec%}По умолчанию учетная запись пользователя{% else %}A{% endif %} считается неактивной после 90 дней неактивности. {% ifversion not ghec %}Можно настроить период неактивности пользователя, по истечении которого его учетная запись будет считаться неактивной{% ifversion ghes%}, и выберите приостановку неактивных пользователей для высвобождения пользовательских лицензий{% endif %}.{% endif %}
