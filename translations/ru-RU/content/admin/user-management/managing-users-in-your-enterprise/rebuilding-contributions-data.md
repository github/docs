---
title: Перестроение данных вкладов
intro: 'Возможно, потребуется выполнить повторную сборку данных вкладов, чтобы связать существующие фиксации с учетной записью пользователя.'
redirect_from:
  - /enterprise/admin/articles/rebuilding-contributions-data
  - /enterprise/admin/user-management/rebuilding-contributions-data
  - /admin/user-management/rebuilding-contributions-data
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Repositories
  - User account
shortTitle: Rebuild contributions
ms.openlocfilehash: 66a4aff597be725eb06dd4c8743ee2ad8691c7e4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116219'
---
При передаче фиксации в {% data variables.product.prodname_enterprise %} она связывается с учетной записью пользователя, если они оба связаны с одним и тем же адресом электронной почты. Однако существующие фиксации *не* связываются задним числом, когда пользователь регистрирует новый адрес электронной почты или создает новую учетную запись.

1. Посетите страницу профиля пользователя.
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. В левой части страницы щелкните **Администратор**. ![Вкладка "Администратор"](/assets/images/enterprise/site-admin-settings/admin-tab.png)
4. В разделе **Данные о вкладе** нажмите кнопку **Перестроить**.
![Кнопка "Перестроить"](/assets/images/enterprise/site-admin-settings/rebuild-button.png)

{% data variables.product.prodname_enterprise %} теперь запустит задания в фоновом режиме для повторного связывания фиксаций с этой учетной записью пользователя.
  ![Задания перестроения в очереди](/assets/images/enterprise/site-admin-settings/rebuild-jobs.png)
