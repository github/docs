---
title: Использование начального назначения Git и GitHub
intro: 'Можно использовать начальное назначение Git и {% data variables.product.company_short %} для предоставления учащимся основных сведений о Git и информации о принципах работы с {% data variables.product.company_short %}.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can use Git & {% data variables.product.company_short %} starter assignments. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment
shortTitle: Starter assignment
ms.openlocfilehash: fa4c3e648efee4e73a9ab3fc9e2d99897a09c9f3
ms.sourcegitcommit: bafb4fe4c8c086a510eafee6e54a2d172fd3a01b
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/16/2022
ms.locfileid: '148046574'
---
Начальное назначение Git & {% data variables.product.company_short %} — это предварительно подготовленный курс, который резюмирует основы Git и {% data variables.product.company_short %} и направляет учащихся на ресурсы, где можно узнать больше о конкретных темах.

## Предварительные требования

{% data reusables.classroom.assignments-classroom-prerequisite %}

## Создание начального назначения

### Если в классе нет существующих назначений

1. Войдите в {% data variables.product.prodname_classroom_with_url %}.
2. Перейдите к аудитории.
3. На вкладке {% octicon "repo" aria-label="The repo icon" %} **Назначения** щелкните **Использовать начальное назначение**.

<div class="procedural-image-wrapper">
  <img alt="Creating your first assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-create-first-assignment.png">
</div>

### Если в классе уже есть назначения

1. Войдите в {% data variables.product.prodname_classroom_with_url %}.
2. Перейдите к аудитории.
3. На вкладке {% octicon "repo" aria-label="The repo icon" %} **Назначения** щелкните ссылку на синий баннер.

<div class="procedural-image-wrapper">
  <img alt="The 'New assignment' button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-new-starter-assignment-button.png">
</div>

## Настройка основных сведений о задании

Импортируйте начальный курс в организацию, назовите назначение, решите, назначать ли крайний срок, и выберите видимость репозиториев назначений.

- [Предварительные требования](#prerequisites)
- [Создание начального назначения](#creating-the-starter-assignment)
  - [Если в классе нет существующих назначений](#if-there-are-no-existing-assignments-in-the-classroom)
  - [Если в классе уже есть назначения](#if-there-already-are-existing-assignments-in-the-classroom)
- [Настройка основных сведений о назначении](#setting-up-the-basics-for-an-assignment)
  - [Импорт назначения](#importing-the-assignment)
  - [Присвоение имени назначению](#naming-the-assignment)
  - [Назначение крайнего срока выполнения для задания](#assigning-a-deadline-for-an-assignment)
  - [Выбор видимости для репозиториев задания](#choosing-a-visibility-for-assignment-repositories)
- [Приглашение учащихся в назначение](#inviting-students-to-an-assignment)
- [Следующие шаги](#next-steps)
- [Дополнительные материалы](#further-reading)

### Импорт назначения

Сначала необходимо импортировать начальное назначение Git & {% data variables.product.product_name %} в организацию.

<div class="procedural-image-wrapper">
  <img alt="The `Import the assignment` button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-import-starter-assignment.png">
</div>

### Присвоение имени назначению

Для отдельного задания {% data variables.product.prodname_classroom %} устанавливает имена репозиториев, состоящие из префикса репозитория и имени пользователя учащегося {% data variables.product.product_name %}. По умолчанию префикс репозитория используется в качестве заголовка задания. Например, если имя задания — "assignment-1", а имя пользователя учащегося в {% data variables.product.product_name %} — @octocat, репозиторий задания для @octocat получит имя `assignment-1-octocat`.

{% data reusables.classroom.assignments-type-a-title %}

### Назначение крайнего срока выполнения для задания

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### Выбор видимости для репозиториев задания

Репозитории для задания могут быть общедоступными или частными. Если используются частные репозитории, то отзыв сможет увидеть только учащийся. В разделе "Видимость репозитория" выберите видимость.

По завершении нажмите кнопку **Продолжить**. {% data variables.product.prodname_classroom %} создаст назначение и откроется страница назначения.

<div class="procedural-image-wrapper">
  <img alt="'Continue' button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-continue-button.png">
</div>

## Приглашение учащихся в задание

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

На вкладке **Все учащиеся** для назначения можно увидеть, присоединился ли учащийся к классу, а также принял ли он назначение и отправил ли он его. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Individual assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

Начальное назначение Git & {% data variables.product.company_short %} доступно только для отдельных учащихся, а не для групп. После создания назначения учащиеся могут начать работу над ним.

## Дальнейшие действия

- Адаптируйте дополнительные назначения для курса. Дополнительные сведения см. в разделе [Создание индивидуального назначения](/education/manage-coursework-with-github-classroom/create-an-individual-assignment), [Создание назначения для группы](/education/manage-coursework-with-github-classroom/create-a-group-assignment) и [Повторное использование назначения](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/reuse-an-assignment).

## Дополнительные материалы

- [{% data variables.product.prodname_global_campus %} для преподавателей](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)
- "[Подключение курса системы управления обучением к аудитории](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)"
