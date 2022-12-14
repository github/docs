---
title: Краткое руководство для преподавателей GitHub
intro: 'Через 15 минут преподаватели смогут приступить к работе со скидками, обучением и инструментами для {% data variables.product.company_short %}, а затем можно создать класс для учащихся в рамках курса по разработке программного обеспечения с помощью {% data variables.product.prodname_classroom %}.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
shortTitle: Quickstart
ms.openlocfilehash: 8ab34de6a7e2583fc2447fc01729ced7044b3fa7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573887'
---
## Введение

Преподаватели курса по разработке программного обеспечения могут использовать скидки, возможности для партнеров, обучение и инструменты из {% data variables.product.prodname_education %} для эффективного обучения учащихся соответствующим навыкам.

В этом руководстве описано, как приступить к работе с {% data variables.product.product_name %}, зарегистрироваться для получения учетных записей и служб со скидкой с помощью {% data variables.product.prodname_education %}, а также создать пространство для курса и назначения в {% data variables.product.prodname_classroom %}.

{% tip %}

**Совет**. Если вы учащийся и хотите воспользоваться преимуществами академической скидки, см. статью [Заявка учащегося на {% data variables.product.prodname_global_campus %}](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-students/apply-to-github-global-campus-as-a-student).

{% endtip %}

## Создание учетных записей в {% data variables.product.product_name %}

Сначала необходимо создать личную учетную запись пользователя в {% data variables.product.product_name %}.

{% data reusables.accounts.create-account %}
1. Создайте личную учетную запись пользователя, следуя инструкциям.

После создания личной учетной записи создайте бесплатную учетную запись организации. Эта учетная запись организации будет использоваться для создания аудиторий {% data variables.product.prodname_classroom %}.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %} {% data reusables.organizations.new-organization %}
4. Создайте бесплатную организацию, следуя инструкциям.

Дополнительные сведения см. в разделе [Типы учетных записей {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/types-of-github-accounts).

## Заявка на преимущества для преподавателей

Затем зарегистрируйтесь для получения преимуществ и ресурсов для преподавателей из {% data variables.product.company_short %}, подав заявку на {% data variables.product.prodname_global_campus %}, портале, который позволяет получить доступ ко всем образовательным преимуществам в одном месте.  {% data reusables.education.educator-requirements %}

{% tip %}

**Совет.** Помимо персональных скидок, {% data variables.product.company_short %} предлагает партнерство с образовательными учреждениями в рамках {% data variables.product.prodname_campus_program %}. Дополнительные сведения см. на веб-сайте [{% data variables.product.prodname_campus_program %}](https://education.github.com/schools).

{% endtip %}

{% data reusables.education.benefits-page %} {% data reusables.education.click-get-teacher-benefits %} {% data reusables.education.select-email-address %} {% data reusables.education.upload-proof-status %} {% data reusables.education.school-name %} {% data reusables.education.plan-to-use-github %} {% data reusables.education.submit-application %}

Когда вы пройдете проверку {% data variables.product.prodname_global_campus %}, вы сможете получить доступ к {% data variables.product.prodname_global_campus %} в любое время, перейдя на [веб-сайт {% data variables.product.prodname_education %}](https://education.github.com).

## Настройка {% data variables.product.prodname_classroom %}

После создания личной учетной записи и учетной записи организации можно приступать к работе с {% data variables.product.prodname_classroom %}. {% data variables.product.prodname_classroom %} предоставляется бесплатно. Можно отслеживать задания и управлять ими, автоматически оценивать работу и оставлять отзывы для учащихся.

{% data reusables.classroom.sign-into-github-classroom %}
1. Чтобы разрешить {% data variables.product.prodname_classroom %} доступ к личной учетной записи в {% data variables.product.prodname_dotcom %}, просмотрите сведения, а затем нажмите кнопку **Авторизовать {% data variables.product.prodname_classroom %}** .
  ![Кнопка "Авторизовать {% data variables.product.prodname_classroom %}" для личной учетной записи](/assets/images/help/classroom/setup-click-authorize-github-classroom.png)
1. Проверьте сведения. Чтобы разрешить {% data variables.product.prodname_classroom %} доступ к учетной записи организации в {% data variables.product.prodname_dotcom %}, нажмите кнопку **Предоставить**.
  ![Кнопка "Предоставить" для организации](/assets/images/help/classroom/setup-click-grant.png)
  
  {% tip %}
  
  **Совет.** Если вместо кнопки **Предоставить** отображается кнопка **Запросить**, это означает, что вы являетесь членом организации, а не ее владельцем. Запрос {% data variables.product.prodname_classroom %} должен быть утвержден владельцем. Вы должны быть владельцем организации, чтобы создавать аудитории, назначать их и управлять ими в {% data variables.product.prodname_classroom %}. Дополнительные сведения см. в разделе [Авторизация приложений OAuth](/github/authenticating-to-github/authorizing-oauth-apps#oauth-apps-and-organizations).
  
  {% endtip %}
  
1. Нажмите **Авторизовать github**.
  ![Нажмите кнопку "Авторизовать" для организации](/assets/images/help/classroom/setup-click-authorize-github.png)

## Создание аудитории

{% data reusables.classroom.about-classrooms %}

{% data reusables.classroom.sign-into-github-classroom %}
1. Нажмите кнопку **Создайте свою первую аудиторию** или **Создать аудиторию**.
{% data reusables.classroom.guide-create-new-classroom %}

## Дальнейшие действия

После создания аудитории можно указать {% data variables.product.product_name %} и {% data variables.product.prodname_classroom %} для своего курса!  🎉

- Ознакомьтесь с видео, посвященными {% data variables.product.prodname_classroom %}. Дополнительные сведения см. в разделе "[Основные принципы настройки {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)".
- Управляйте аудиториями и их администраторами, а также создайте список учащихся для аудитории. Дополнительные сведения см. в статье [Управление аудиториями](/education/manage-coursework-with-github-classroom/manage-classrooms).
- Используйте задание Git и {% data variables.product.company_short %} начального уровня для предоставления учащимся общих сведений об основах Git и {% data variables.product.product_name %}. Дополнительные сведения см. в разделе "[Использование задания Git и {% data variables.product.company_short %} начального уровня](/education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment)
- Создайте задание для отдельных учащихся или команд. {% data reusables.classroom.for-more-information-about-assignment-creation %}
- Создайте и реализуйте автоматические тесты для мгновенной отправки отзывов учащимся непосредственно в репозиториях заданий. Дополнительные сведения см. в статье "[Использование автоматической проверки](/education/manage-coursework-with-github-classroom/use-autograding).
- Участвуйте в жизни сообщества {% data variables.product.prodname_education_community_with_url %}.
