---
title: Передача обратной связи с помощью запросов на вытягивание
intro: Вы можете оставить отзыв для учащихся в специальном запросе на вытягивание в репозитории для каждого задания.
permissions: People with read permissions to a repository can leave feedback in a pull request for the repository.
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/leaving-feedback-in-github
  - /education/manage-coursework-with-github-classroom/leave-feedback-with-pull-requests
shortTitle: Pull requests
ms.openlocfilehash: 6315904aaaa02acc66249039e99a402b455a8871
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145119531'
---
## Сведения о запросах на вытягивание для получения обратной связи по заданиям

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

Если включить запрос на вытягивание для получения обратной связи по заданию, {% data variables.product.prodname_classroom %} создаст специальный запрос на вытягивание с названием **Feedback** (Обратная связь) в репозитории заданий для каждого учащегося или команды. Запрос на вытягивание автоматически отображает каждую фиксацию, которую учащийся отправляет в ветвь репозитория заданий по умолчанию.

## Предварительные требования

Чтобы создать и использовать запрос на вытягивание для получения обратной связи, необходимо включить запрос на вытягивание для получения обратной связи при создании задания. {% data reusables.classroom.for-more-information-about-assignment-creation %}

## Передача обратной связи в запросе на вытягивание для задания

{% data reusables.classroom.sign-into-github-classroom %}
1. В списке классов выберите класс с заданием, которое вы хотите просмотреть.
  ![Класс в списке классов для организации](/assets/images/help/classroom/click-classroom-in-list.png) {% data reusables.classroom.click-assignment-in-list %}
1. Справа от области отправки нажмите кнопку **Просмотреть**.
  ![Кнопка просмотра задания в списке отправок для задания](/assets/images/help/classroom/assignments-click-review-button.png)
1. Изучите запрос на вытягивание. Дополнительные сведения см. в разделе [Комментарий к запросу на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request).

## Дополнительные материалы

- [Интеграция {% data variables.product.prodname_classroom %} с интегрированной средой разработки](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)
