---
title: Создание фиксации с несколькими авторами
intro: 'Вы можете присвоить фиксацию нескольким авторам, добавив один или несколько трейлеров `Co-authored-by` в сообщение фиксации. Совместно созданные фиксации отображаются в {% data variables.product.product_name %}{% ifversion ghes or ghae %} и могут быть включены в граф вкладов профиля и статистику репозитория{% endif %}.'
redirect_from:
  - /articles/creating-a-commit-with-multiple-authors
  - /github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors
  - /github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: With multiple authors
ms.openlocfilehash: dafc83a883f9c3cc6a1915d9f03b493dbd99d669
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094516'
---
## Необходимые сведения о соавторах

Прежде чем добавлять соавтора в фиксацию, необходимо знать соответствующий адрес электронной почты для него. Чтобы фиксация соавтора считалась вкладом, необходимо использовать сообщение электронной почты, связанное с учетной записью {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %}.

{% ifversion fpt or ghec %}

Если пользователь хочет оставить свой адрес электронной почты закрытым, для защиты конфиденциальности следует использовать его адрес `no-reply`, предоставленный {% data variables.product.product_name %}. В противном случае адрес электронной почты соавтора будет находиться в открытом доступе в сообщении о фиксации. Чтобы не разглашать свой адрес электронной почты, вы можете использовать адрес `no-reply`, предоставленный {% data variables.product.product_name %}, для операций GIT и попросить других соавторов указывать ваш адрес `no-reply` в заключительных фрагментах фиксаций.

Дополнительные сведения см. в разделе [Настройка адреса электронной почты для фиксации](/articles/setting-your-commit-email-address).

  {% tip %}

  **Совет**. Вы можете помочь соавтору найти предпочтительный адрес электронной почты, сообщив ему указанные ниже сведения.
  - Чтобы найти предоставленный {% data variables.product.product_name %} адрес электронной почты `no-reply`, на странице параметров электронной почты перейдите к разделу "Не разглашать мой адрес электронной почты".
  - Чтобы узнать адрес электронной почты, использовавшийся для настройки GIT на компьютере, выполните в командной строке команду `git config user.email`.

  {% endtip %}

{% endif %}

## Создание фиксаций с соавторами с помощью {% data variables.product.prodname_desktop %}

Для создания фиксации с соавтором можно использовать {% data variables.product.prodname_desktop %}. Дополнительные сведения см. в разделах [Написание сообщения о фиксации и отправка изменений](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#4-write-a-commit-message-and-push-your-changes) и [{% data variables.product.prodname_desktop %}](https://desktop.github.com).

![Добавление соавтора в сообщение о фиксации](/assets/images/help/desktop/co-authors-demo-hq.gif)

## Создание фиксаций с соавторами в командной строке

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}

1. Введите сообщение о фиксации и краткое, понятное описание изменений. После описания фиксации вместо закрывающей кавычки добавьте две пустые строки.
  ```
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **Совет**. Если вы используете текстовый редактор в командной строке для ввода сообщения о фиксации, убедитесь в том, что между концом описания фиксации и заключительным фрагментом фиксации `Co-authored-by:` есть два символа новой строки.

  {% endtip %}

3. В следующей строке сообщения о фиксации введите `Co-authored-by: name <name@example.com>` со сведениями о каждом соавторе. После сведений о соавторе добавьте закрывающую кавычку.

  Если вы добавляете несколько соавторов, для каждого из них должна быть отдельная строка и заключительный фрагмент фиксации `Co-authored-by:`.
  ```
  $ git commit -m "Refactor usability tests.
  >
  >
  Co-authored-by: NAME <NAME@EXAMPLE.COM>
  Co-authored-by: AUTHOR-NAME <ANOTHER-NAME@EXAMPLE.COM>"
  ```

Новая фиксация и сообщение появятся в {% данных variables.location.product_location %} при следующей отправке. Дополнительные сведения см. в разделе [Отправка изменений в удаленный репозиторий](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/).

## Создание фиксаций с соавторами на {% data variables.product.product_name %}

После внесения изменений в файл с помощью веб-редактора на {% data variables.product.product_name %} можно создать фиксацию с соавтором, добавив заключительный фрагмент `Co-authored-by:` в сообщение о фиксации.

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}
2. После совместного внесения изменений в нижней части страницы введите короткое, понятное сообщение о фиксации, описывающее внесенные изменения.
  ![Сообщение о фиксации для изменения](/assets/images/help/repository/write-commit-message-quick-pull.png)
3. В текстовом поле под сообщением о фиксации добавьте `Co-authored-by: name <name@example.com>` со сведениями о каждом соавторе. Если вы добавляете несколько соавторов, для каждого из них должна быть отдельная строка и заключительный фрагмент фиксации `Co-authored-by:`.

  ![Пример заключительного фрагмента со сведениями о соавторе для сообщения о фиксации в текстовом поле](/assets/images/help/repository/write-commit-message-co-author-trailer.png)
4. Нажмите кнопку **Зафиксировать изменения** или **Предложить изменения**.

Новая фиксация и сообщение будут отображаться в {% данных variables.location.product_location %}.

## Дополнительные материалы
{% ifversion ghes or ghae %}
- [Просмотр вкладов в профиле](/articles/viewing-contributions-on-your-profile)
- [Почему мои вклады не отображаются в моем профиле?](/articles/why-are-my-contributions-not-showing-up-on-my-profile){% endif %}
- [Просмотр участников проекта](/articles/viewing-a-projects-contributors)
- [Изменение сообщения о фиксации](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)
- Раздел [Фиксация и просмотр изменений в проекте](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#4-write-a-commit-message-and-push-your-changes) в документации по {% data variables.product.prodname_desktop %}
