---
title: Управление разрешенными IP-адресами для приложения GitHub
intro: 'Вы можете добавить список разрешенных IP-адресов в {% data variables.product.prodname_github_app %}, чтобы предотвратить блокировку приложения собственным списком разрешений организации.'
versions:
  fpt: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Manage allowed IP addresses
ms.openlocfilehash: 1df357700bec03b86ad0008b2d31fc9db537fe74
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: '147707294'
---
## Сведения о списке разрешенных IP-адресов для {% data variables.product.prodname_github_apps %}

Предприятие и владельцы организации могут ограничить доступ к ресурсам, настроив список разрешенных IP-адресов. В этом списке указаны IP-адреса, к которым разрешено подключение. Дополнительные сведения см. в разделе [Применение политик для параметров безопасности на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise).

Если в организации есть список разрешений, доступ для сторонних приложений, которые подключаются через {% data variables.product.prodname_github_app %}, будет запрещен, если не выполняются оба следующих условия:

* Создатель {% data variables.product.prodname_github_app %} настроил список разрешений для приложения, указывающий IP-адреса, с использованием которых выполняется приложение. Далее приведены подробные инструкции.
* Владелец организации разрешил добавлять адреса в списке разрешений {% data variables.product.prodname_github_app %} в собственный список разрешенных адресов. Дополнительные сведения см. в разделе [«Управление разрешенными IP-адресами для организации](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list){% ifversion fpt %}» в документации по {% data variables.product.prodname_ghe_cloud %}. {% else %}. {% endif %}

{% data reusables.apps.ip-allow-list-only-apps %}

## Добавление списка разрешенных IP-адресов в {% data variables.product.prodname_github_app %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.apps.settings-step %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
1. Прокрутите вниз до раздела «Список разрешенных IP-адресов».
![Раздел основной информации для приложения GitHub](/assets/images/github-apps/github-apps-allow-list-empty.png) {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} Описание приведено в справочных целях и не используется в спсике разрешений для организаций, где установлен {% data variables.product.prodname_github_app %}. Вместо этого списки разрешений организации будут содержать «Управляемые приложением NAME GitHub» в качестве описания.
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}
