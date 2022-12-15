---
title: Создание фиксации от имени организации
intro: 'Вы можете создавать фиксации от имени организации, добавляя к сообщению фиксации заключительную часть. Фиксации, отнесенные к организации, включают индикатор событий `on-behalf-of` в {% data variables.product.product_name %}.'
redirect_from:
  - /articles/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization
versions:
  fpt: '*'
  ghec: '*'
shortTitle: On behalf of an organization
ms.openlocfilehash: 6769b78698e8a5c5a412c8f49324c8a30825206a
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094428'
---
{% note %}

**Примечание**. Возможность создания фиксации от имени организации в настоящее время находится в общедоступной бета-версии и может быть изменена.

{% endnote %}

Чтобы создать фиксацию от имени организации:

- нужно быть членом организации, указанной в заключительном фрагменте
- нужно подписать фиксацию
- электронная почта фиксации и электронная почта организации должны находиться в домене, подтвержденном организацией
- сообщение о фиксации должно заканчиваться заключительным фрагментом фиксации `on-behalf-of: @org <name@organization.com>`
  - `org` — это имя организации для входа
  - `name@organization.com` — это домен организации

Организации могут использовать электронную почту `name@organization.com` в качестве общедоступной точки связи для действий с открытым кодом.

## Создание фиксаций с индикатором `on-behalf-of` в командной строке

1. Введите сообщение о фиксации и краткое, понятное описание изменений. После описания фиксации вместо закрывающей кавычки добавьте две пустые строки.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **Совет**. Если вы используете текстовый редактор в командной строке для ввода сообщения о фиксации, убедитесь в том, что между концом описания фиксации и заключительным фрагментом фиксации `on-behalf-of:` есть два символа новой строки.

  {% endtip %}

2. В следующей строке сообщения о фиксации введите `on-behalf-of: @org <name@organization.com>`, а потом закрывающую кавычку.

  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  on-behalf-of: @ORG NAME@ORGANIZATION.COM"
  ```

Новая фиксация, сообщение и эмблема будут отображаться на {% данных variables.location.product_location %} при следующей отправке. Дополнительные сведения см. в разделе [Отправка изменений в удаленный репозиторий](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/).

## Создание фиксаций с индикатором `on-behalf-of` в {% data variables.product.product_name %}

После внесения изменений в файл с помощью веб-редактора в {% data variables.product.product_name %} можно создать фиксацию от имени организации, добавив заключительный фрагмент `on-behalf-of:` в сообщение о фиксации.

1. После внесения изменений в нижней части страницы введите короткое, понятное сообщение о фиксации, описывающее внесенные изменения.
  ![Сообщение о фиксации для изменения](/assets/images/help/repository/write-commit-message-quick-pull.png)

2. Добавьте `on-behalf-of: @org <name@organization.com>` в текстовое поле под сообщением о фиксации.

  ![Пример заключительного фрагмента on-behalf-of во втором текстовом поле сообщения о фиксации](/assets/images/help/repository/write-commit-message-on-behalf-of-trailer.png)
4. Нажмите кнопку **Зафиксировать изменения** или **Предложить изменения**.

Новая фиксация, сообщение и эмблема будут отображаться на {% данных variables.location.product_location %}.

## Дополнительные материалы

- [Просмотр вкладов в профиле](/articles/viewing-contributions-on-your-profile)
- [Почему мои вклады не отображаются в моем профиле](/articles/why-are-my-contributions-not-showing-up-on-my-profile)
- [Просмотр участников проекта](/articles/viewing-a-projects-contributors)
- [Изменение сообщения о фиксации](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)
