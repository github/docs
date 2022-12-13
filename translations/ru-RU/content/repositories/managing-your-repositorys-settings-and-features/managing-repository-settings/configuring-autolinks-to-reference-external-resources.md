---
title: Настройка автоматической привязки для отсылок на внешние ресурсы
intro: 'Вы можете добавить автоматические привязки ко внешним ресурсам, таким как проблемы JIRA и билеты Zendesk, чтобы упростить рабочий процесс.'
product: '{% data reusables.gated-features.autolinks %}'
redirect_from:
  - /articles/configuring-autolinks-to-reference-external-resources
  - /github/administering-a-repository/configuring-autolinks-to-reference-external-resources
  - /github/administering-a-repository/managing-repository-settings/configuring-autolinks-to-reference-external-resources
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure autolinks
ms.openlocfilehash: ae6e10f55a880a4fa389149ad137300ef3a81514
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146748592'
---
## Сведения об автоматических привязках

Любой пользователь с разрешениями администратора для репозитория может настроить ссылки для автопривязки, чтобы связать проблемы, запросы на вытягивание, сообщения фиксации и описания выпусков с внешними сторонними службами.

{% ifversion autolink-reference-alphanumeric %} Ссылки на автоматические привязки теперь разрешают буквенно-цифровые символы. При первоначальном вводе пользовательские автоматические привязки были ограничены внешними ресурсами, которые использовали числовые идентификаторы. Пользовательские автоматические привязки теперь работают с буквенно-цифровыми идентификаторами. Устаревшие ссылки на автоматические привязки, распознающие только числовые идентификаторы, не рекомендуются и отображаются с меткой "устаревшая".

Вы определяете пользовательские автоматические привязки, указывая префикс ссылки и целевой URL-адрес.
- Префиксы ссылок не могут иметь перекрывающиеся имена. Например, репозиторий не может иметь две пользовательские автоматические привязки с такими префиксами, как `TICKET` и `TICK`, так как оба префикса будут соответствовать строке `TICKET123a`.
- Целевые URL-адреса включают в себя переменную `<num>`, которая поддерживает символы `a-z` (без учета регистра), `0-9` и `-`.
{% endif %}

## Настройка автоматической привязки для отсылок на внешние ресурсы

В этой процедуре показано, как настроить автоматические привязки для ссылки на внешние ресурсы. Например, если вы используете Zendesk для отслеживания билетов из отчетов пользователей, вы можете указать номер билета в запросе на вытягивание, который вы создали для устранения проблемы.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. В разделе "Интеграции" на боковой панели щелкните **{% octicon "cross-reference" aria-label="The cross-reference icon" %} Ссылки для автопривязки**.
{% else %}
1. На левой боковой панели нажмите **Ссылки для автопривязки**.
![Вкладка "Ссылки для автопривязки" на левой боковой панели](/assets/images/help/repository/autolink-references-tab.png) {% endif %}
1. Нажмите **Добавить ссылку для автопривязки**.
![Кнопка для заполнения сведений о ссылке для автопривязки](/assets/images/help/repository/add-autolink-reference-details.png)
5. В разделе "Ссылочный префикс" введите короткий информативный префикс, который будут использовать участники совместной работы для создания автопривязки для внешнего ресурса.
{% ifversion autolink-reference-alphanumeric %}![Поле ввода сокращения для внешней системы](/assets/images/help/repository/add-reference-prefix-field-alphanumeric.png){% else %}![Поле ввода сокращения для внешней системы](/assets/images/help/repository/add-reference-prefix-field.png){% endif %}
6. В поле "Целевой URL-адрес" введите ссылку на внешнюю систему, к которой вы хотите выполнить привязку. Обязательно сохраните `<num>` в качестве переменной для номера ссылки.
{% ifversion autolink-reference-alphanumeric %}![Поле ввода URL-адреса для внешней системы](/assets/images/help/repository/add-target-url-field-alphanumeric.png){% else %}![Поле ввода URL-адреса для внешней системы](/assets/images/help/repository/add-target-url-field.png){% endif %}
7. Нажмите **Добавить ссылку для автопривязки**.
{% ifversion autolink-reference-alphanumeric %}{% else %}![Кнопка для добавления ссылки на автоматическую привязку](/assets/images/help/repository/add-autolink-reference.png){% endif %}
