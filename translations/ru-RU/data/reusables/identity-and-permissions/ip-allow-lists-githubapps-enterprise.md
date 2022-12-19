---
ms.openlocfilehash: dc4b17d3c5f283d72fcda54e4a95e8db2821714a
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180180"
---
Если вы используете список разрешений, вы также можете автоматически добавить в список разрешений любые IP-адреса, настроенные для {% data variables.product.prodname_github_apps %}, которые установлены на предприятии. 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

Дополнительные сведения о создании списка разрешений для созданного {% data variables.product.prodname_github_app %} см. в разделе [Управление разрешенными IP-адресами для приложения GitHub](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app).

Чтобы включить автоматическое добавление IP-адресов для {% data variables.product.prodname_github_apps %}:

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Выберите **Включить конфигурацию списка разрешенных IP-адресов для установленных приложений GitHub**. Если вы используете {% data variables.product.prodname_emus %} с OIDC, сначала выберите **GitHub** в качестве конфигурации списка разрешенных IP-адресов, а затем выберите **Включить конфигурацию списка разрешенных IP-адресов для установленных приложений GitHub**.
  ![Установите флажок, чтобы разрешить IP-адреса приложений GitHub](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. Выберите команду **Сохранить**.
