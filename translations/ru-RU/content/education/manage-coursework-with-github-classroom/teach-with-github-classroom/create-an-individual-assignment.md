---
title: Создание отдельного задания
intro: Вы можете создать задание для учащихся в своем курсе для индивидуального выполнения.
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can create and manage individual assignments for a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/creating-an-individual-assignment
  - /education/manage-coursework-with-github-classroom/create-an-individual-assignment
shortTitle: Individual assignment
ms.openlocfilehash: 1ffa725be4e42695b297545f65c998b14ed8e000
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179755'
---
## Сведения об отдельных заданиях

{% data reusables.classroom.assignments-individual-definition %}

{% data reusables.classroom.classroom-creates-individual-repositories %}

{% data reusables.classroom.about-assignments %}

Видеоролик, в котором показано, как создать отдельное задание, можно найти в разделе [Общие сведения о настройке {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom).

{% data reusables.classroom.reuse-assignment-link %}

## Предварительные требования

{% data reusables.classroom.assignments-classroom-prerequisite %}

## Создание задания

{% data reusables.classroom.assignments-guide-create-the-assignment %}

## Настройка основных сведений о задании

Укажите имя задания, определите, следует ли задать крайний срок выполнения для задания, и выберите видимость репозиториев для задания.

- [Указание имени задания](#naming-an-assignment)
- [Назначение крайнего срока выполнения для задания](#assigning-a-deadline-for-an-assignment)
- [Выбор типа задания](#choosing-an-assignment-type)
- [Выбор видимости для репозиториев задания](#choosing-a-visibility-for-assignment-repositories)

### Указание имени задания

Для отдельного задания {% data variables.product.prodname_classroom %} устанавливает имена репозиториев, состоящие из префикса репозитория и имени пользователя учащегося {% data variables.product.product_name %}. По умолчанию префикс репозитория используется в качестве заголовка задания. Например, если имя задания — "assignment-1", а имя пользователя учащегося в {% data variables.product.product_name %} — @octocat, репозиторий задания для @octocat получит имя `assignment-1-octocat`.

{% data reusables.classroom.assignments-type-a-title %}

### Назначение крайнего срока выполнения для задания

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### Выбор типа задания

В разделе "Отдельное или групповое задание" щелкните раскрывающееся меню и выберите **Отдельное задание**. Вы не можете изменить тип задания после создания задания. Если вы хотите создать групповое задание, обратитесь к разделу [Создание группового задания](/education/manage-coursework-with-github-classroom/create-a-group-assignment).

### Выбор видимости для репозиториев задания

{% data reusables.classroom.assignments-repository-visibility-and-permissions %}

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

## Добавление начального кода и настройка среды разработки

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [Выбор репозитория шаблонов](#choosing-a-template-repository)
- [Выбор интегрированной среды разработки (IDE)](#choosing-an-integrated-development-environment-ide)

### Выбор репозитория шаблонов

По умолчанию для нового задания будет создан пустой репозиторий для каждого учащегося в списке аудитории. {% data reusables.classroom.you-can-choose-a-template-repository %}

{% data reusables.classroom.assignments-guide-choose-template-repository %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

### Выбор интегрированной среды разработки (IDE)

{% data reusables.classroom.about-online-ides %} Дополнительные сведения см. в разделе [Интеграция {% data variables.product.prodname_classroom %} с IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide).

{% data reusables.classroom.classroom-codespaces-link %}

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

## Предоставление отзыва о задании

При необходимости можно автоматически оценить задания и создать пространство для обсуждения каждого отправленного задания с учащимся.

- [Автоматическое тестирование заданий](#testing-assignments-automatically)
- [Создание запроса на вытягивание для отзыва](#creating-a-pull-request-for-feedback)

### Автоматическое тестирование заданий

{% data reusables.classroom.assignments-guide-using-autograding %}

### Создание запроса на вытягивание для отзыва

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

{% data reusables.classroom.assignments-guide-create-review-pull-request %}

{% data reusables.classroom.assignments-guide-click-create-assignment-button %}

## Приглашение учащихся в задание

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

На вкладке **Список аудитории** для задания можно узнать, присоединился ли учащийся к аудитории, принял ли он задание и отправил ли он его. На этой вкладке также можно связать псевдонимы учащихся {% data variables.product.prodname_dotcom %} с их идентификаторами в списке и наоборот. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Individual assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

## Отслеживание хода работы учащихся
На странице обзора заданий представлены общие сведения о принятии заданий и ходе работы учащихся. В зависимости от конфигураций заданий могут обращаться различные общие сведения.

- **Учащиеся в списке**. Число учащихся в списке аудитории.
- **Добавленные учащиеся**. Количество учетных записей {% data variables.product.prodname_dotcom %}, которые приняли задание и не связаны с идентификатором в списке.
-  **Учащиеся, принявшие задание**. Число учетных записей, принявших это задание.
-  **Учащиеся, отправившие задание**. Число учащихся, отправивших задание. Отправка выполняется при достижении крайнего срока выполнения для задания.
-  **Учащиеся, которые успешно выполнили задание**. Число учащихся, которые прошли тесты с автоматическим выставлением оценки для этого задания.

## Дальнейшие действия

- После создания задания учащиеся могут начать работу над заданием с использованием Git и возможностей {% data variables.product.product_name %}. Учащиеся могут клонировать репозиторий, отправлять фиксации, управлять ветвями, создавать и просматривать запросы на вытягивание, устранять конфликты слияния и обсуждать изменения с помощью проблем. Журнал фиксаций для репозитория доступен для просмотра как вам, так и учащимся. Дополнительные сведения см. в разделах [Начало работы с {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github), [Репозитории](/repositories) и [Совместная работа с проблемами и запросами на вытягивание](/github/collaborating-with-issues-and-pull-requests).

- Когда учащийся завершит задание, вы можете просмотреть файлы в репозитории или журнал и визуализации репозитория, чтобы лучше понять работу учащегося. Дополнительные сведения см. в разделе [Визуализация данных репозитория с помощью графов](/github/visualizing-repository-data-with-graphs).

- Чтобы предоставить отзыв о задании, можно оставить комментарий к отдельным фиксациям или строкам в запросе на вытягивание. Дополнительные сведения см. в разделах [Комментарии к запросам на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request) и [Открытие проблемы из кода](/github/managing-your-work-on-github/opening-an-issue-from-code). Дополнительные сведения о создании сохраненных ответов для предоставления отзывов о распространенных ошибках см. в разделе [Сведения о сохраненных ответах](/github/writing-on-github/about-saved-replies).

## Дополнительные материалы

- [{% data variables.product.prodname_global_campus %} для преподавателей](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)
- [Подключение системы управления обучением к {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)
