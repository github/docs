---
title: Подключение курса системы управления обучением к классу
intro: 'Вы можете настроить курс управления обучением, совместимый с LTI (LMS), чтобы подключиться к {% данных variables.product.prodname_classroom %} таким образом, чтобы можно было импортировать список для вашего класса.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can connect learning management systems to {% data variables.product.prodname_classroom %}. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/configuring-a-learning-management-system-for-github-classroom
  - /education/manage-coursework-with-github-classroom/connect-to-lms
  - /education/manage-coursework-with-github-classroom/generate-lms-credentials
  - /education/manage-coursework-with-github-classroom/setup-canvas
  - /education/manage-coursework-with-github-classroom/setup-generic-lms
  - /education/manage-coursework-with-github-classroom/setup-moodle
  - /education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom
  - /education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-to-github-classroom
shortTitle: Connect an LMS course
ms.openlocfilehash: 6c750201bf46c7cf5d6965623f60bebc8e64e4ab
ms.sourcegitcommit: 04329ee7464efbb558d77d06664e8578cd154d87
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/15/2022
ms.locfileid: '148046458'
---
## О подключении LMS к классу

Вы можете подключить систему управления обучением (LMS) к {% данных variables.product.prodname_classroom %} и импортировать список идентификаторов учащихся из LMS. 

## Предварительные требования

Прежде чем подключить LMS к аудитории, администратору экземпляра LMS необходимо зарегистрировать LMS в GitHub Classroom, чтобы инициировать подтверждение OAuth. Администратору нужно выполнить этот процесс регистрации только один раз, то любой преподаватель, использующий экземпляр LMS, может синхронизировать свои курсы LMS с классами. Дополнительные сведения см. в статье "[Регистрация системы управления обучением в GitHub Classroom](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom)".

{% note %}

**Примечание.** {% данных для повторного использования.classroom.google-classroom-note %}

{% endnote %}

Чтобы настроить LMS для подключения к {% data variables.product.prodname_classroom %}, необходимо сначала создать класс. Дополнительные сведения см. в статье [Управление аудиториями](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-classroom).

## Поддерживаемые системы управления обучением

{% данных reusables.classroom.supported-lmses %}

## Связывание курса Canvas с классом

Вы можете связать курс Moodle с классом в {% данных variables.product.prodname_classroom %}. Дополнительные сведения о Canvas см. на [веб-сайте Canvas](https://www.instructure.com/canvas/).

Чтобы связать курс LMS, администратор должен зарегистрировать экземпляр LMS в классе. Дополнительные сведения см. в разделе "[Настройка холста для {% данных variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom#configuring-canvas-for-github-classroom)".

1. Войдите в [Canvas](https://www.instructure.com/canvas/#login).
1. Выберите курс Canvas, который нужно интегрировать с {% data variables.product.prodname_classroom %}.
2. Щелкните "Параметры" на левой боковой панели, а затем перейдите на вкладку "Приложения". 
3. Нажмите кнопку **"+ Приложение** ". 
4. В разделе "Тип конфигурации" выберите **"По идентификатору клиента** " в раскрывающемся меню. 
5. В поле "Идентификатор клиента" введите идентификатор клиента, созданный администратором LMS при регистрации экземпляра LMS с {% данных variables.product.prodname_classroom %}.
6. Нажмите кнопку **"Отправить**", а затем нажмите кнопку **"Установить**".
7. Обновите страницу, и вы увидите ссылку **на GitHub Classroom** в меню вложенной навигации курса в правой части страницы сведений о курсе. Обратите внимание, что имя может отличаться, если администратор LMS назвал его другим именем при регистрации LMS.
8. Щелкнув ссылку **на GitHub Classroom** , вы перейдете в {% данных variables.product.prodname_classroom %}, где можно выбрать класс, чтобы связаться с курсом LMS. 

После связывания курса вы можете импортировать список из курса LMS в аудиторию. Дополнительные сведения см. в разделе "[Импорт списка из LMS](#importing-a-roster-from-your-lms)".
## Связывание курса Moodle с классом

Вы можете связать курс Moodle с классом в {% данных variables.product.prodname_classroom %}. Дополнительные сведения о Moodle см. на [веб-сайте Moodle](https://moodle.org).

Чтобы связать курс LMS, администратор должен зарегистрировать экземпляр LMS в классе. Дополнительные сведения см. в разделе "[Настройка Moodle для {% данных variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom#configuring-moodle-for-github-classroom)".

Необходимо использовать Moodle версии 3.0 или более поздней.

1. Войдите в [Moodle](https://moodle.org/login/).
1. Выберите курс Moodle, который нужно интегрировать с {% data variables.product.prodname_classroom %}.
2. В разделе "Внешние инструменты" в разделе "Общие" должна появиться кнопка с именем "GitHub Classroom". Обратите внимание, что имя может отличаться, если администратор LMS назвал его другим именем при регистрации LMS.
3. Нажав кнопку **GitHub Classroom** , вы перейдете в {% данных variables.product.prodname_classroom %}, где можно выбрать аудиторию, чтобы связаться с курсом LMS. 

После связывания курса вы можете импортировать список из курса LMS в аудиторию. Дополнительные сведения см. в разделе "[Импорт списка из LMS](#importing-a-roster-from-your-lms)".
## Связывание курса Sakai с аудиторией

Вы можете связать курс Sakai с классом в {% данных variables.product.prodname_classroom %}. Дополнительные сведения о Сакаи см. на [веб-сайте Sakai](https://www.sakailms.org/).

Чтобы связать курс LMS, администратор должен зарегистрировать экземпляр LMS в классе. Дополнительные сведения см. в разделе "[Настройка Moodle для {% данных variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/register-a-learning-management-system-with-github-classroom#configuring-moodle-for-github-classroom)".

1. Войдите в экземпляр Sakai.
2. Выберите курс Sakai для интеграции с {% данных variables.product.prodname_classroom %}.
3. Щелкните **"Внешние инструменты**". 
4. Щелкните **ссылки на инструмент**.
5. Щелкнув ссылку "Класс GitHub", откроется {% данных variables.product.prodname_classroom %}, где можно выбрать аудиторию, чтобы связаться с курсом LMS.

После связывания курса вы можете импортировать список из курса LMS в аудиторию. Дополнительные сведения см. в разделе "[Импорт списка из LMS](#importing-a-roster-from-your-lms)".


## Импорт списка из вашей системы управления обучением

Чтобы импортировать список из LMS, выполните приведенные далее действия.
1. Откройте связанный класс в {% данных variables.product.prodname_classroom %} и перейдите на вкладку "Учащиеся". 
2. Нажмите кнопку **импорта из...** с именем LMS (Canvas, Sakai или Moodle). 
   
   ![Кнопка "Импорт из холста"](/assets/images/help/classroom/import-from-connected-lms.png)

3. Выберите идентификатор, который вы хотите использовать для учащихся, а затем щелкните **"Импорт записей реестра**", и список будет импортирован.

Чтобы обновить существующий реестр, выполните приведенные далее действия.
 1. Откройте связанный класс в {% данных variables.product.prodname_classroom %} и перейдите на вкладку "Учащиеся". 
 2. Нажмите кнопку **"Синхронизировать из..."** с именем LMS (Canvas, Sakai или Moodle).

![Синхронизация с кнопкой Moodle](/assets/images/help/classroom/moodle-sync-roster.png)

## Импорт списка из Google Classroom

Google Classroom не использует протокол LTI, поэтому не нужно подключаться к GitHub Classroom перед импортом реестра.

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. Если у вашей аудитории уже есть список учащихся, вы можете изменить этот список, либо удалить его и создать новый.
    - Дополнительные сведения об удалении и создании списка приведены в статье [Удаление списка участников аудитории](/education/manage-coursework-with-github-classroom/manage-classrooms#deleting-a-roster-for-a-classroom) и [Создание списка участников для аудитории](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom).
    - Дополнительные сведения об изменении списка можно найти в статье [Добавление учащихся в список участников аудитории](/education/manage-coursework-with-github-classroom/manage-classrooms#adding-students-to-the-roster-for-your-classroom).
1. В списке LMSes щелкните **Google Classroom**.
  ![Кнопка "Google Classroom"](/assets/images/help/classroom/classroom-settings-click-google-classroom.png)
1. Войдите в Google, а затем выберите Класс, чтобы подключиться.

## Отключение системы управления обучением

Класс можно отключить от LMS в параметрах {% данных variables.product.prodname_classroom %}.

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. В разделе "Подключение к системе управления обучением (LMS)" щелкните **Параметры подключения**.
  ![Ссылка "Параметры подключения" в параметрах аудитории](/assets/images/help/classroom/classroom-settings-click-connection-settings.png)
1. В разделе "Удалить подключение к системе управления обучением" нажмите кнопку **Отключиться от системы управления обучением**.
  ![Кнопка "Отключиться от системы управления обучением" в параметрах подключения для аудитории](/assets/images/help/classroom/classroom-settings-click-disconnect-from-your-lms-button.png)
