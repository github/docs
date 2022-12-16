---
title: Управление аудиториями
intro: 'Вы можете создавать и управлять классами для каждого курса, который вы преподаете, с помощью {% data variables.product.prodname_classroom %}.'
permissions: 'Organization owners who are admins for a classroom can manage the classroom for an organization. {% data reusables.classroom.classroom-admins-link %}'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/archive-a-classroom
  - /education/manage-coursework-with-github-classroom/manage-classrooms
ms.openlocfilehash: 74d9a205f1083598c3c6277cd5862e56c628ffeb
ms.sourcegitcommit: 04329ee7464efbb558d77d06664e8578cd154d87
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/15/2022
ms.locfileid: '148046501'
---
## Сведения об аудиториях

{% data reusables.classroom.about-classrooms %}

![Аудитория](/assets/images/help/classroom/classroom-hero.png)

## Сведения об управлении аудиториями

{% data variables.product.prodname_classroom %} использует учетные записи организации в {% data variables.product.product_name %} для управления разрешениями, администрирования и обеспечения безопасности каждой создаваемой аудитории. У каждой организации может быть несколько аудиторий.

После создания аудитории {% data variables.product.prodname_classroom %} предложит пригласить в нее ассистентов преподавателей и администраторов. У каждой аудитории может быть один или несколько администраторов. Администраторами могут быть преподаватели, ассистенты преподавателей или администраторы курсов, которые должны контролировать аудитории в {% data variables.product.prodname_classroom %}.

Чтобы пригласить ассистентов преподавателей и администраторов в аудиторию, пригласите личные учетные записи {% data variables.product.product_name %} в вашу организацию в качестве ее владельцев, а затем поделитесь с ними URL-адресом аудитории. Владельцы организации могут администрировать любую аудиторию в ней. Дополнительные сведения см. в разделах [Роли в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) и [Приглашение пользователей в организацию](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization).

Завершив работу с аудиторией, можно архивировать ее для обращения к ее данным, списку участников и заданиям позже либо удалить аудиторию, если она больше не нужна. 

{% data reusables.classroom.reuse-assignment-link %}

## Сведения о списках участников аудиторий

У каждой аудитории есть список участников. Он состоит из идентификаторов учащихся, участвующих в курсе.

При первом предоставлении URL-адреса задания учащемуся он должен войти на {% data variables.product.product_name %} с помощью личной учетной записи, чтобы привязать ее к идентификатору аудитории. После того как учащийся привяжет личную учетную запись, она появится в списке участников. Вы также видите, когда учащийся принимает или сдает задание.

![Список участников аудитории](/assets/images/help/classroom/roster-hero.png)

## Предварительные требования

Для управления аудиториями в {% data variables.product.prodname_classroom %} требуется учетная запись организации на {% data variables.product.product_name %}. Дополнительные сведения см. в разделах [Типы учетных записей {% data variables.product.company_short %}](/github/getting-started-with-github/types-of-github-accounts#organization-accounts) и [Создание организации с нуля](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).

Для управления аудиториями в учетной записи организации необходимо авторизовать приложение OAuth для {% data variables.product.prodname_classroom %}. Дополнительные сведения см. в разделе [Авторизация приложений OAuth](/github/authenticating-to-github/authorizing-oauth-apps).

## Создание аудитории

{% data reusables.classroom.sign-into-github-classroom %}
1. Нажмите кнопку **Создать аудиторию**.
  ![Кнопка "Создать аудиторию"](/assets/images/help/classroom/click-new-classroom-button.png) {% data reusables.classroom.guide-create-new-classroom %}

После создания аудитории можно приступить к созданию заданий для учащихся. Дополнительные сведения см. в разделе [Использование GIT и начального задания {% data variables.product.company_short %}](/education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment), [Создание индивидуального задания](/education/manage-coursework-with-github-classroom/create-an-individual-assignment), [Создание группового задания](/education/manage-coursework-with-github-classroom/create-a-group-assignment) или [Повторное использование задания](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/reuse-an-assignment).

## Создание списка участников для аудитории

Вы можете создать список учащихся, участвующих в курсе.

Если у курса уже есть список участников, его можно обновить или удалить. Дополнительные сведения см. в разделе [Добавление учащегося в список участников аудитории](#adding-students-to-the-roster-for-your-classroom) или [Удаление списка участников аудитории](#deleting-a-roster-for-a-classroom).

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. Чтобы подключить {% данных variables.product.prodname_classroom %} к LMS и импортировать реестр, администратору LMS сначала потребуется зарегистрировать экземпляр LMS, а затем подключить курс LMS к аудитории. После подключения можно нажать кнопку **"Импорт из..."** для импорта списка из курса LMS. Дополнительные сведения см. в статье "[Подключение курса системы управления обучением к аудитории](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)".
   
   {% note %}

  **Примечание.** {% данных для повторного использования.classroom.google-classroom-note %}

  {% endnote %}

2. Укажите идентификаторы учащихся для списка участников.
     - Чтобы импортировать список участников, отправив файл с идентификаторами учащихся, нажмите кнопку **Отправить файл CSV или текстовый файл**.
     - Чтобы создать список участников вручную, введите идентификаторы учащихся.
       ![Текстовое поле для ввода идентификаторов учащихся и кнопка "Отправить файл CSV или текстовый файл"](/assets/images/help/classroom/type-or-upload-student-identifiers.png)
3. Нажмите кнопку **Создать список участников**.
  ![Кнопка "Создать список участников"](/assets/images/help/classroom/click-create-roster-button.png)

## Добавление учащихся в список участников аудитории

Чтобы добавить учащихся в список участников, необходимо сначала создать его для аудитории. Дополнительные сведения о создании списка участников см. в разделе [Создание списка участников для аудитории](#creating-a-roster-for-your-classroom).

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. Справа от заголовка "Список участников аудитории" нажмите кнопку **Обновить учащихся**. Если вы уже связали свой класс с курсом LMS, вместо этого вы увидите кнопку **"Синхронизировать из...** 
  ![Кнопка "Обновить учащихся" справа от заголовка "Список участников аудитории" над списком учащихся](/assets/images/help/classroom/click-update-students-button.png)
1. Следуйте инструкциям по добавлению учащихся в список.
    - Чтобы импортировать учащихся из LMS, администратору LMS сначала потребуется зарегистрировать экземпляр LMS, а затем подключить курс LMS к аудитории. После подключения можно нажать кнопку **"Синхронизировать" из...** Дополнительные сведения см. в статье "[Подключение курса системы управления обучением к аудитории](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)".
        {% note %}

        **Примечание.** {% данных для повторного использования.classroom.google-classroom-note %}

        {% endnote %}
    - Чтобы вручную добавить учащихся, в разделе "Добавление учащихся вручную" нажмите кнопку **Отправить файл CSV или текстовый файл** или введите идентификаторы учащихся, а затем нажмите кнопку **Добавить элементы списка участников**.
      ![Модальное окно для выбора способа добавления учащихся в аудиторию](/assets/images/help/classroom/classroom-add-students-to-your-roster.png)

## Переименование аудитории

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. В поле "Имя аудитории" введите новое имя аудитории.
  ![Текстовое поле "Имя аудитории" для ввода имени аудитории](/assets/images/help/classroom/settings-type-classroom-name.png)
1. Нажмите кнопку **Переименовать аудиторию**.
  ![Кнопка "Переименовать аудиторию"](/assets/images/help/classroom/settings-click-rename-classroom-button.png)

## Архивирование или разархивирование аудитории

Вы можете архивировать аудиторию, которая больше не используется в {% data variables.product.prodname_classroom %}. Для архивированной аудитории нельзя создавать новые задания или изменять существующие. Учащиеся не могут принимать приглашения к заданиям в архивированных аудиториях.

{% data reusables.classroom.sign-into-github-classroom %}
1. Справа от имени аудитории в раскрывающемся меню {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} выберите пункт **Архивировать**.
  ![Раскрывающееся меню с горизонтальным многоточием и пункт "Архивировать" в нем](/assets/images/help/classroom/use-drop-down-then-click-archive.png)
1. Чтобы разархивировать аудиторию, справа от ее имени в раскрывающемся меню {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} выберите пункт **Разархивировать**.
  ![Раскрывающееся меню с горизонтальным многоточием и пункт "Разархивировать" в нем](/assets/images/help/classroom/use-drop-down-then-click-unarchive.png)

## Удаление списка участников аудитории

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. В разделе "Удаление этого списка участников" нажмите кнопку **Удалить список участников**.
  ![Кнопка "Удалить список участников" в разделе "Удаление этого списка участников" на вкладке "Учащиеся" аудитории](/assets/images/help/classroom/students-click-delete-roster-button.png)
1. Прочтите предупреждения и нажмите кнопку **Удалить список участников**.
  ![Кнопка "Удалить список участников" в разделе "Удаление этого списка участников" на вкладке "Учащиеся" аудитории](/assets/images/help/classroom/students-click-delete-roster-button-in-modal.png)

## Удаление аудитории

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. Справа от заголовка "Удаление этой аудитории" нажмите кнопку **Удалить аудиторию**.
  ![Кнопка "Удалить аудиторию"](/assets/images/help/classroom/click-delete-classroom-button.png)
1. **Прочитайте предупреждения**.
1. Чтобы удалить именно ту аудиторию, которую нужно, введите ее имя.
  ![Модальное окно удаления аудитории с предупреждениями и текстовым полем для ввода имени аудитории](/assets/images/help/classroom/delete-classroom-modal-with-warning.png)
1. Нажмите кнопку **Удалить аудиторию**.
  ![Кнопка "Удалить аудиторию"](/assets/images/help/classroom/delete-classroom-click-delete-classroom-button.png)
