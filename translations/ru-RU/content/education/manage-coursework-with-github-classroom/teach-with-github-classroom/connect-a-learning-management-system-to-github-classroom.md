---
title: Подключение системы управления обучением к GitHub Classroom
intro: Вы можете настроить систему управления обучением, совместимую с LTI (LMS), для подключения к {% data variables.product.prodname_classroom %}, чтобы можно было импортировать реестр для вашего класса.
versions:
  fpt: '*'
permissions: Organization owners who are admins for a classroom can connect learning management systems to {% data variables.product.prodname_classroom %}. {% data reusables.classroom.classroom-admins-link %}
redirect_from:
- /education/manage-coursework-with-github-classroom/configuring-a-learning-management-system-for-github-classroom
- /education/manage-coursework-with-github-classroom/connect-to-lms
- /education/manage-coursework-with-github-classroom/generate-lms-credentials
- /education/manage-coursework-with-github-classroom/setup-canvas
- /education/manage-coursework-with-github-classroom/setup-generic-lms
- /education/manage-coursework-with-github-classroom/setup-moodle
- /education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom
shortTitle: Connect an LMS
ms.openlocfilehash: e97a90ee822e779ecdf6ca94b7d35c29ddab5e5e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147717832"
---
## Сведения о настройке системы управления обучением

Вы можете подключить систему управления обучением (LMS) к {% data variables.product.prodname_classroom %}, а {% data variables.product.prodname_classroom %} может импортировать список идентификаторов учащихся из LMS. Чтобы подключить LMS к {% data variables.product.prodname_classroom %}, необходимо ввести учетные данные конфигурации для {% data variables.product.prodname_classroom %} в LMS.

## Предварительные требования

Чтобы настроить LMS для подключения к {% data variables.product.prodname_classroom %}, необходимо сначала создать класс. Дополнительные сведения см. в статье [Управление аудиториями](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-classroom).

## Поддерживаемые системы управления обучением

{% note %}

**Примечание.** {% data variables.product.prodname_classroom %} раньше поддерживал импорт списков учащихся из систем управления обучением (LMS), реализующих взаимодействие средств обучения (LTI) версий 1.0 и 1.1. 30 июня 2022 г. консорциум IMS Global Learning [завершил поддержку LTI версий 1.0 и 1.1](https://www.imsglobal.org/lti-security-announcement-and-deprecation-schedule). В интересах обеспечения безопасности и защиты конфиденциальной информации учащегося {% data variables.product.company_short %} временно отключил импорт данных списка учащихся из LMS, совместимых с LTI.<br><br>

Поддержка последней версии взаимодействия средств обучения, [LTI 1.3](https://www.imsglobal.org/activity/learning-tools-interoperability), в настоящее время работает и будет доступна в {% data variables.product.prodname_classroom %} в ближайшее время.

{% endnote %}

LTI — это протокол, который является стандартом в отрасли, и использование GItHub Classroom LTI сертифицировано Instructional Management System (IMS) Global Learning Consortium. Дополнительные сведения можно найти на страницах [Взаимодействие средств обучения](https://www.imsglobal.org/activity/learning-tools-interoperability) и [Сведения о IMS Global Learning Consortium](http://www.imsglobal.org/aboutims.html) на веб-сайте IMS Global Learning Consortium.

{% data variables.product.company_short %} проверила импорт данных списка учащихся из следующих систем управления обучением в {% data variables.product.prodname_classroom %}.

- Google Classroom;


## Подключение к Google Классу

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. Если у вашей аудитории уже есть список учащихся, вы можете изменить этот список, либо удалить его и создать новый.
    - Дополнительные сведения об удалении и создании списка приведены в статье [Удаление списка участников аудитории](/education/manage-coursework-with-github-classroom/manage-classrooms#deleting-a-roster-for-a-classroom) и [Создание списка участников для аудитории](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom).
    - Дополнительные сведения об изменении списка можно найти в статье [Добавление учащихся в список участников аудитории](/education/manage-coursework-with-github-classroom/manage-classrooms#adding-students-to-the-roster-for-your-classroom).
1. В списке систем управления обучением щелкните Google Класс.
  ![Google Classroom;](/assets/images/help/classroom/classroom-settings-click-google-classroom.png)
1. Войдите в Google, а затем выберите Класс, чтобы подключиться.


## Подключение к Canvas, Moodle, Sakai и другим системам управления обучением

Подключение к другим системам управления обучением временно недоступно, так как {% data variables.product.company_short %} обновляется для взаимодействия с инструментами обучения версии 1.3. Дополнительные сведения см. в статье [Поддерживаемые системы управления обучением](#supported-lmses).

Пока вы можете вручную ввести список учащихся для вашего класса. Дополнительные сведения об импорте списка из вашей системы управления обучением в {% data variables.product.prodname_classroom %} вручную приведены в статье [Управление аудиториями](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom).

## Отключение системы управления обучением

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. В разделе "Подключение к системе управления обучением (LMS)" щелкните **Параметры подключения**.
  ![Ссылка "Параметры подключения" в параметрах аудитории](/assets/images/help/classroom/classroom-settings-click-connection-settings.png)
1. В разделе "Удалить подключение к системе управления обучением" нажмите кнопку **Отключиться от системы управления обучением**.
  ![Кнопка "Отключиться от системы управления обучением" в параметрах подключения для аудитории](/assets/images/help/classroom/classroom-settings-click-disconnect-from-your-lms-button.png)
