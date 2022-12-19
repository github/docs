---
title: Создание группового задания
intro: 'Вы можете создать совместное задание для команд учащихся, участвующих в курсе.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can create and manage group assignments for a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/create-group-assignments
  - /education/manage-coursework-with-github-classroom/create-a-group-assignment
ms.openlocfilehash: 71c5f5eaf97ba58e25921c1e2be6fc638550dfa8
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179763'
---
## Сведения о групповых заданиях

{% data reusables.classroom.assignments-group-definition %} Учащиеся могут совместно работать над групповым заданием в общем репозитории, как команда профессиональных разработчиков.

Когда учащийся принимает групповое задание, он может создать новую команду или присоединиться к существующей. {% data variables.product.prodname_classroom %} сохраняет команды для задания в виде набора. Вы можете назначить набор команд для конкретного задания при создании этого задания, а также повторно использовать этот набор команд для последующего задания.

{% data reusables.classroom.classroom-creates-group-repositories %}

{% data reusables.classroom.about-assignments %}

Вы можете определять, сколько команд может быть ы одном задании, и сколько участников может быть в каждой команде. Каждая команда, созданная учащимся для задания, является командой в вашей организации в {% data variables.product.product_name %}. Команда не отображается открыто. Команды, создаваемые в {% data variables.product.product_name %}, не будут отображаться в {% data variables.product.prodname_classroom %}. Дополнительные сведения см. в статье "[Сведения о командах](/organizations/organizing-members-into-teams/about-teams)".

Видеоролик, в котором показано, как создать групповое задание, см. в разделе [Общие сведения о настройке {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom).

{% data reusables.classroom.reuse-assignment-link %}

## Предварительные требования

{% data reusables.classroom.assignments-classroom-prerequisite %}

## Создание задания

{% data reusables.classroom.assignments-guide-create-the-assignment %}

## Настройка основных сведений о задании

Укажите имя задания, решите, следует ли установить крайний срок выполнения, определите команды и выберите видимость репозиториев для задания.

- [Указание имени задания](#naming-an-assignment)
- [Назначение крайнего срока выполнения для задания](#assigning-a-deadline-for-an-assignment)
- [Выбор типа задания](#choosing-an-assignment-type)
- [Определение команд для задания](#defining-teams-for-an-assignment)
- [Выбор видимости для репозиториев задания](#choosing-a-visibility-for-assignment-repositories)

### Указание имени задания

Для группового задания {% data variables.product.prodname_classroom %} именует репозитории, используя префикс репозитория и имя команды. По умолчанию префикс репозитория используется в качестве заголовка задания. Например, если вы назвали задание как "assignment-1", а команда в {% data variables.product.product_name %} имеет имя "student-team", репозиторий задания для участников команды будет иметь имя `assignment-1-student-team`.

{% data reusables.classroom.assignments-type-a-title %}

### Назначение крайнего срока выполнения для задания

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### Выбор типа задания

В разделе "Индивидуальное или групповое задание" щелкните раскрывающееся меню и выберите **Групповое задание**. Вы не можете изменить тип задания после создания задания. Если вы хотите создать индивидуальное задание, см. раздел [Создание индивидуального задания](/education/manage-coursework-with-github-classroom/create-an-individual-assignment).

### Определение команд для задания

Если вы уже создали групповое задание для аудитории, то можете повторно использовать набор команд для нового задания. Чтобы создать новый набор с командами, создаваемыми учащимися для задания, введите имя набора. При необходимости введите максимальное количество участников команд и максимальное количество команд.

{% tip %}

**Совет**.

- Рекомендуется включить в имя набора команд сведения об этом наборе. Например, если вы хотите использовать набор команд для одного задания, присвойте ему имя после задания. Если вы хотите неоднократно использовать этот набор в течение семестра или курса, назовите набор после семестра или курса.

- Если вы хотите назначить учащихся в определенную команду, присвойте учащимся имя этой команды и предоставьте список участников.

{% endtip %}

![Параметры для команд, участвующих в групповом задании](/assets/images/help/classroom/assignments-define-teams.png)

### Выбор видимости для репозиториев задания

{% data reusables.classroom.assignments-repository-visibility-and-permissions %}

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

## Добавление начального кода и настройка среды разработки

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [Выбор репозитория шаблонов](#choosing-a-template-repository)
- [Выбор интегрированной среды разработки (IDE)](#choosing-an-integrated-development-environment-ide)

### Выбор репозитория шаблонов

По умолчанию новое задание создаст пустой репозиторий для каждой команды, созданной учащимися. {% data reusables.classroom.you-can-choose-a-template-repository %} 

{% data reusables.classroom.assignments-guide-choose-template-repository %}

### Выбор интегрированной среды разработки (IDE)

{% data reusables.classroom.about-online-ides %} Дополнительные сведения см. в разделе [Интеграция {% data variables.product.prodname_classroom %} с IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide).

{% data reusables.classroom.classroom-codespaces-link %}

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

## Предоставление отзыва

При необходимости можно автоматически оценивать задания и создать пространство для обсуждения с командой каждого отправленного задания.

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

Вы можете просматривать команды, которые работают над заданием или отправили его, на вкладке **Команды** для задания. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Group assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-group-hero.png">
</div>

## Отслеживание хода работы учащихся
На странице обзора задания отображаются сведения о принятии заданий и ходе работы команды. В зависимости от конфигураций заданий могут обращаться различные общие сведения.

- **Всего команд**. Количество созданных команд.
- **Учащиеся в списке**. Число учащихся в списке аудитории.
- **Учащиеся не в команде**. Количество учащихся в списке аудиторий, которые еще не присоединились к команде.
-  **Принявшие команды**. Количество команд, которые приняли это задание.
-  **Отправки задания**. Количество команд, отправивших задание. Отправка выполняется при достижении крайнего срока выполнения для задания.
-  **Прошедшие команды**. Количество команд, которые на данный момент прошли тесты с автоматическим выставлением оценки для этого задания.

## Дальнейшие действия

- После того как вы создадите задание, и ваши учащиеся сформируют команды, члены команд могут начать работу над заданием с использованием Git и возможностей {% data variables.product.product_name %}. Учащиеся могут клонировать репозиторий, отправлять фиксации, управлять ветвями, создавать и просматривать запросы на вытягивание, устранять конфликты слияния и обсуждать изменения с помощью проблем. Журнал фиксаций для репозитория может просматриваться как вами, так и командой. Дополнительные сведения см. в разделах [Начало работы с {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github), [Репозитории](/repositories), [Использование Git](/github/getting-started-with-github/using-git) и [Совместная работа с проблемами и запросами на вытягивание](/github/collaborating-with-issues-and-pull-requests), а также в бесплатном курсе по [разрешению конфликтов слияния](https://github.com/skills/resolve-merge-conflicts) от {% data variables.product.prodname_learning %}.

- Когда команда завершит задание, вы можете просмотреть файлы в репозитории или журнал и визуализации для репозитория, чтобы лучше понять совместную работу команды. Дополнительные сведения см. в разделе [Визуализация данных репозитория с помощью графов](/github/visualizing-repository-data-with-graphs).

- Чтобы предоставить отзыв о задании, можно оставить комментарий к отдельным фиксациям или строкам в запросе на вытягивание. Дополнительные сведения см. в разделах [Комментарии к запросам на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request) и [Открытие проблемы из кода](/github/managing-your-work-on-github/opening-an-issue-from-code). Дополнительные сведения о создании сохраненных ответов для предоставления отзывов о распространенных ошибках см. в разделе [Сведения о сохраненных ответах](/github/writing-on-github/about-saved-replies).

## Дополнительные материалы

- [{% data variables.product.prodname_global_campus %} для преподавателей](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)
- "[Подключение курса системы управления обучением к аудитории](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)"
- [Использование существующих команд в групповых заданиях](https://education.github.community/t/using-existing-teams-in-group-assignments/6999) в сообществе {% data variables.product.prodname_education %}
