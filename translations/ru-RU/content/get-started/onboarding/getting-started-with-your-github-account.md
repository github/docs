---
title: Начало работы с учетной записью GitHub
intro: 'С помощью личной учетной записи в {% data variables.product.prodname_dotcom %} можно импортировать или создавать репозитории, сотрудничать с другими пользователями и связаться с сообществом {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 7644db01c91c2f96c94e6799c71405c791538c6a
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093636'
---
В этом руководстве описана настройка учетной записи {% data variables.product.company_short %}и начало работы с функциями {% data variables.product.product_name %} для совместной работы и сообщества.

## Часть 1. Настройка учетной записи {% data variables.product.prodname_dotcom %}

{% ifversion fpt or ghec %} Первыми шагами при работе с {% data variables.product.product_name %} являются создание учетной записи, выбор продукта, который лучше всего соответствует вашим потребностям, подтверждение электронной почты, настройка двухфакторной проверки подлинности и просмотр вашего профиля.
{% elsif ghes %} Первые шаги при работе с {% data variables.product.product_name %} предназначены для доступа к вашей учетной записи, настройки двухфакторной проверки подлинности и просмотра профиля.
{% elsif ghae %} Первые шаги при работе с {% data variables.product.product_name %} — это доступ к вашей учетной записи и просмотр вашего профиля.
{% endif %}

{% ifversion fpt or ghec %}В {% data variables.product.prodname_dotcom %} доступно несколько типов учетных записей. {% endif %} У каждого пользователя, который использует {% data variables.product.product_name %}, есть личная учетная запись, которая может быть частью нескольких организаций и команд. Ваша личная учетная запись — это ваше удостоверение на {% данных variables.location.product_location %} и представляет вас как отдельного пользователя.

{% ifversion fpt or ghec %}
### 1. Создание учетной записи
Чтобы зарегистрироваться для получения учетной записи на {% данных variables.location.product_location %}, перейдите к https://github.com/ запросу и следуйте инструкциям.

Чтобы защитить свою учетную запись {% data variables.product.prodname_dotcom %}, используйте надежный и уникальный пароль. Дополнительные сведения см. в разделе [Создание надежного пароля](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password).

### 2. Выбор продукта {% data variables.product.prodname_dotcom %}
Вы можете выбрать {% data variables.product.prodname_free_user %} или {% data variables.product.prodname_pro %}, чтобы получить доступ к различным функциям своей личной учетной записи. Вы можете выполнить обновление в любое время, если вы не уверены, какой продукт хотите использовать.

Дополнительные сведения обо всех планах {% data variables.product.prodname_dotcom %} см. в статье [Продукты {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/githubs-products).

### 3. Подтверждение вашего адреса электронной почты
Чтобы убедиться, что вы можете использовать все функции плана {% data variables.product.product_name %}, подтвердите свой адрес электронной почты после регистрации новой учетной записи. Дополнительные сведения см. в статье "[Проверка адреса электронной почты](/github/getting-started-with-github/signing-up-for-github/verifying-your-email-address)".
{% endif %}

{% ifversion ghes %}
### 1. Доступ к вашей учетной записи
Администратор вашего экземпляра {% data variables.product.product_name %} сообщит вам, как пройти проверку подлинности и получить доступ к вашей учетной записи. Процесс зависит от режима проверки подлинности, настроенного для экземпляра.
{% endif %}

{% ifversion ghae %}
### 1. Доступ к вашей учетной записи
Вы получите уведомление по электронной почте, как только владелец вашего предприятия для {% data variables.product.product_name %} настроит вашу учетную запись, что позволит вам пройти проверку подлинности с помощью единого входа (SSO) SAML и получить доступ к своей учетной записи.
{% endif %}

{% ifversion fpt or ghes or ghec %}
### {% ifversion fpt or ghec %}4.{% else %}2.{% endif %} Настройка двухфакторной проверки подлинности
Двухфакторная проверка подлинности — это дополнительный слой обеспечения безопасности, используемый при входе на веб-сайты или в приложения. Мы настоятельно рекомендуем настроить 2FA для безопасности вашей учетной записи. Подробнее см. в разделе "[Сведения о двухфакторной проверке подлинности](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)".
{% endif %}
### {% ifversion fpt or ghec %}5.{% elsif ghes %}3.{% else %}2.{% endif %} Просмотр вашего профиля {% data variables.product.prodname_dotcom %} и диаграммы вкладов
В вашем профиле {% data variables.product.prodname_dotcom %} отображается история вашей работы с помощью репозиториев и списков, которые вы закрепили, о членстве в организациях, которые вы выбрали для публикации, о внесенных вами вкладах и созданных вами проектах. Дополнительные сведения см. в статьях [О вашем профиле](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile) и [Просмотр вкладов в вашем профиле](/github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile).

## Часть 2. Использование инструментов и процессов {% data variables.product.product_name %}
Чтобы наилучшим образом использовать {% data variables.product.product_name %}, вам необходимо настроить Git. Git отвечает за все, что связано с {% data variables.product.prodname_dotcom %} и происходит локально на вашем компьютере. Для эффективной совместной работы в {% data variables.product.product_name %} вы будете писать в задачах и запросах на вытягивание, используя {% data variables.product.prodname_dotcom %} Flavored Markdown.

### 1. Изучение Git
Совместный подход {% data variables.product.prodname_dotcom %} к разработке зависит от публикации фиксаций из вашего локального репозитория в {% data variables.product.product_name %} для просмотра, извлечения и обновления другими людьми с помощью Git. Дополнительные сведения о Git см. в [руководстве по Git](https://guides.github.com/introduction/git-handbook/). Дополнительные сведения о том, как Git используется в {% data variables.product.product_name %}, см. в статье [поток {% data variables.product.prodname_dotcom %}](/get-started/quickstart/github-flow).
### 2. Настройка Git
Если вы планируете использовать Git локально на своем компьютере, будь то через командную строку, IDE или текстовый редактор, вам необходимо будет установить и настроить Git. Дополнительные сведения см. в статье [Настройка Git](/get-started/quickstart/set-up-git).

Если вы предпочитаете использовать визуальный интерфейс, вы можете скачать и использовать {% data variables.product.prodname_desktop %}. {% data variables.product.prodname_desktop %} поставляется в комплекте с Git, поэтому нет необходимости устанавливать Git отдельно. Дополнительные сведения см. в статье [Начало работы с {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop).

После установки Git вы можете подключаться к репозиториям {% data variables.product.product_name %} со своего локального компьютера, будь то ваш собственный репозиторий или вилка другого пользователя. При подключении к репозиторию на {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %} из Git необходимо пройти проверку подлинности с помощью {% данных variables.product.product_name %} с помощью ПРОТОКОЛА HTTPS или SSH. Дополнительные сведения см. в разделе [Сведения об удаленных репозиториях](/get-started/getting-started-with-git/about-remote-repositories).

### 3. Выбор способа взаимодействия с {% data variables.product.product_name %}
У каждого есть свой уникальный рабочий процесс взаимодействия с {% data variables.product.prodname_dotcom %}. Интерфейсы и методы, которые вы используете, зависят от ваших предпочтений и от того, что лучше всего подходит для ваших нужд.

Дополнительные сведения о проверке подлинности в {% data variables.product.product_name %} с помощью каждого из этих методов см. в статье [О проверке подлинности в {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/about-authentication-to-github).

| **Метод**  | **Описание** | **Варианты использования** |
| ------------- | ------------- | ------------- |
| Перейдите на {% data variables.product.prodname_dotcom_the_website %} | Если вам не нужно работать с файлами локально, {% data variables.product.product_name %} позволяет выполнять большинство действий, связанных с Git, прямо в браузере — от создания и разветвления репозиториев до редактирования файлов и открытия запросов на вытягивание.| Этот метод полезен, если вам нужен визуальный интерфейс и вам нужно быстро внести небольшие изменения, не требующие локальной работы. |
| {% data variables.product.prodname_desktop %} | {% data variables.product.prodname_desktop %} позволяет расширить и упростить рабочий процесс {% data variables.product.prodname_dotcom_the_website %} за счет визуального интерфейса вместо текстовых команд в командной строке. Дополнительные сведения о начале работы с {% data variables.product.prodname_desktop %} см. в статье [Начало работы с {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop). | Этот метод лучше всего подходит, если вам нужно или вы хотите работать с файлами локально, но предпочитаете использовать визуальный интерфейс для использования Git и взаимодействия с {% data variables.product.product_name %}. |
| IDE или текстовый редактор  | Вы можете задать текстовый редактор по умолчанию, например [{% данных variables.product.prodname_vscode %}](https://code.visualstudio.com/) для открытия и редактирования файлов с помощью Git, использования расширений и просмотра структуры проекта. Дополнительные сведения см. в статье [Связывание текстовых редакторов с Git](/github/using-git/associating-text-editors-with-git). | Это удобно, если вы работаете с более сложными файлами и проектами и хотите, чтобы все было в одном месте, так как текстовые редакторы или IDE часто позволяют напрямую обращаться к командной строке в редакторе. |
| Командная строка с {% data variables.product.prodname_cli %} или без нее | Для наиболее детального контроля и настройки использования Git и взаимодействия с {% data variables.product.product_name %} можно использовать командную строку. Дополнительные сведения об использовании команд Git см. в статье [Памятка по Git](/github/getting-started-with-github/quickstart/git-cheatsheet).<br/><br/> {% data variables.product.prodname_cli %} — это отдельный инструмент командной строки, который можно установить и который выдает запросы на вытягивание, проблемы, {% data variables.product.prodname_actions %} и другие функции {% data variables.product.prodname_dotcom %} в ваш терминал, чтобы вы могли выполнять всю свою работу в одном расположении. Дополнительные сведения см. в разделе [{% data variables.product.prodname_cli %}](/github/getting-started-with-github/using-github/github-cli). | Это наиболее удобно, если вы уже работаете из командной строки, что позволяет избежать переключения контекста, или если вам удобнее использовать командную строку. |
| {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API | {% data variables.product.prodname_dotcom %} имеет REST API и API GraphQL, которые можно использовать для взаимодействия с {% data variables.product.product_name %}. Дополнительные сведения см. в статье [Начало работы с API](/github/extending-github/getting-started-with-the-api). | API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} будут наиболее полезны, если необходимо автоматизировать обычные задачи, резервное копирование данных или создание интеграций, расширяющих {% data variables.product.prodname_dotcom %}. |
### 4. Написание содержимого на {% data variables.product.product_name %}
Чтобы ваше общение относительно проблем и запросов на вытягивание было понятным и организованным, вы можете использовать {% data variables.product.prodname_dotcom %} Flavored Markdown для форматирования, которое сочетает в себе простой для чтения и написания синтаксис с некоторыми пользовательскими функциями. Дополнительные сведения см. в разделе [Сведения о написании и форматировании в {% data variables.product.prodname_dotcom %}](/github/writing-on-github/about-writing-and-formatting-on-github).

Вы можете изучить {% data variables.product.prodname_dotcom %} Flavored Markdown с помощью курса [Общение с использованием Markdown](https://github.com/skills/communicate-using-markdown) на {% data variables.product.prodname_learning %}.

### 5. Поиск на {% data variables.product.product_name %}
Наш встроенный поиск позволяет вам найти необходимые сведения среди множества репозиториев, пользователей и строк кода на {% data variables.product.product_name %}. Вы можете осуществлять глобальный поиск по всем {% data variables.product.product_name %} или ограничить поиск определенным репозиторием или организацией. Дополнительные сведения о типах поиска, которые можно выполнять в {% data variables.product.product_name %}, см. в статье [О поиске в {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github).

Наш синтаксис поиска позволяет вам составлять запросы, используя квалификаторы, чтобы указать, что необходимо найти. Дополнительные сведения о синтаксисе поиска для использования в поиске см. в статье [Поиск в {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/searching-on-github).

### 6. Управление файлами в {% data variables.product.product_name %}
С помощью {% data variables.product.product_name %} вы можете создавать, редактировать, перемещать и удалять файлы в своем репозитории или любом репозитории, к которому у вас есть доступ на запись. Вы также можете отслеживать историю изменений в файле построчно. Дополнительные сведения см. в статье [Управление файлами в {% data variables.product.prodname_dotcom %}](/github/managing-files-in-a-repository/managing-files-on-github).

## Часть 3. Совместная работа над {% data variables.product.product_name %}
В репозиториях {% data variables.product.product_name %} может работать вместе любое количество людей. Вы можете настраивать параметры, создавать доски проектов и управлять своими уведомлениями, чтобы способствовать эффективному сотрудничеству.

### 1. Работа с репозиториями

#### Создание репозитория
Репозиторий подобен папке для вашего проекта. У вас может быть сколько угодно публичных и приватных репозиториев в вашей личной учетной записи. Репозитории могут содержать папки и файлы, изображения, видео, электронные таблицы и наборы данных, а также журнал изменений для всех файлов в репозитории. Дополнительные сведения см. в разделе [Сведения о репозиториях](/github/creating-cloning-and-archiving-repositories/about-repositories).

При создании нового репозитория необходимо инициализировать репозиторий с файлом README, чтобы сообщить людям о вашем проекте. Дополнительные сведения см. в разделе [Создание репозитория](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository).

#### Клонирование репозитория
Вы можете клонировать имеющийся репозиторий из {% data variables.product.product_name %} на свой локальный компьютер, чтобы упростить добавление или удаление файлов, устранение конфликтов объединения или выполнение сложных фиксаций. При клонировании репозитория извлекается полная копия всех данных репозитория, которые {% data variables.product.prodname_dotcom %} содержит на данный момент времени, включая все версии каждого файла и папки для проекта. Дополнительные сведения см. в разделе [Клонирование репозитория](/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).

#### Создание вилки репозитория
Вилка — это копия репозитория, которым вы управляете, где любые изменения, которые вы вносите, не повлияют на исходный репозиторий, если только вы не отправите запрос на вытягивание владельцу проекта. Чаще всего вилки используются либо для того, чтобы предложить изменения в чужом проекте, либо для того, чтобы использовать чужой проект в качестве отправной точки для вашей собственной идеи. Дополнительные сведения см. в разделе [Работа с вилками](/github/collaborating-with-pull-requests/working-with-forks).
### 2. Импорт ваших проектов
При наличии проектов, которые необходимо перенести в {% data variables.product.product_name %}, вы можете импортировать проекты с помощью {% data variables.product.prodname_dotcom %} Importer, командной строки или внешних инструментов переноса. Дополнительные сведения см. в статье [Импорт исходного кода в {% data variables.product.prodname_dotcom %}](/github/importing-your-projects-to-github/importing-source-code-to-github).

### 3. Управление участниками совместной работы и разрешениями
Вы можете совместно работать над своим проектом с другими, используя проблемы вашего репозитория, запросы на вытягивание и доски проектов. Вы можете пригласить других людей в свой репозиторий в качестве участников совместной работы на вкладке **Участники совместной работы** в настройках репозитория. Дополнительные сведения см. в статье [Приглашение участников совместной работы в личный репозиторий](/github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository).

Вы являетесь владельцем любого репозитория, созданного вами в учетной записи, и имеете полный контроль над ним. Участники совместной работы имеют доступ на запись в ваш репозиторий, что ограничивает их имеющиеся разрешения. Дополнительные сведения см. в статье [Уровни разрешений для репозитория личных учетных записей](/github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository).

### 4. Управление параметрами репозитория
Как владелец репозитория, вы можете настроить несколько параметров, включая видимость репозитория, темы и предварительный просмотр в социальных сетях. Дополнительные сведения см. в статье [Управление параметрами репозитория](/github/administering-a-repository/managing-repository-settings).

### 5. Настройка вашего проекта для действенных вкладов
{% ifversion fpt or ghec %} Чтобы поощрять участников совместной работы вашего репозитория, вам необходимо сообщество, которое поощряет людей использовать ваш проект, вносить в него свой вклад и распространять его. Дополнительные сведения см. в статье [Создание доброжелательных сообществ](https://opensource.guide/building-community/) в руководствах по открытому исходному коду.

Добавляя в репозиторий такие файлы, как рекомендации по внесению вклада, правила поведения и лицензию, вы можете создать окружение, в котором участникам совместной работы будет легче вносить значимый и полезный вклад. Дополнительные сведения см. в разделе "[Настройка проекта для внесения действенных вкладов](/communities/setting-up-your-project-for-healthy-contributions)".
{% endif %} {% ifversion ghes or ghae %} Добавляя в репозиторий такие файлы, как рекомендации по внесению вклада, правила поведения и ресурсы поддержки, вы можете создать окружение, в котором участникам совместной работы будет легче вносить значимый и полезный вклад. Дополнительные сведения см. в разделе "[Настройка проекта для внесения действенных вкладов](/communities/setting-up-your-project-for-healthy-contributions)".
{% endif %}

### 6. Использование проблем и досок проектов GitHub
Вы можете использовать проблемы GitHub для организации своей работы с проблемами и запросами на вытягивание, а также для управления рабочим процессом с помощью досок проектов. Дополнительные сведения см. в статьях [О проблемах](/issues/tracking-your-work-with-issues/about-issues) и [О досках проектов](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards).

### 7. Управление уведомлениями
Уведомления предоставляют обновления о действиях на {% data variables.product.prodname_dotcom %}, на который вы подписаны или в котором участвовали. Если вам больше не интересна беседа, вы можете отменить подписку, отменить отслеживание или настроить типы уведомлений, которые вы будете получать в будущем. Дополнительные сведения см. в разделе [Сведения об уведомлениях](/github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications).

### 8. Работа с {% data variables.product.prodname_pages %}
Вы можете использовать {% данных variables.product.prodname_pages %} для создания и размещения веб-сайта непосредственно из репозитория на {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %}. Дополнительные сведения см. в статье [Сведения о {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages).

{% ifversion discussions %}
### 9. Использование {% data variables.product.prodname_discussions %}
Вы можете включить {% data variables.product.prodname_discussions %} для своего репозитория, чтобы создать сообщество вокруг вашего проекта. Сопровождающие, участники и посетители могут использовать обсуждения, чтобы делиться объявлениями, задавать вопросы и отвечать на них, а также участвовать в обсуждениях целей. Дополнительные сведения см. в разделе [Сведения об обсуждениях](/discussions/collaborating-with-your-community-using-discussions/about-discussions).
{% endif %}
## Часть 4: Настройка и автоматизация работы с {% data variables.product.product_name %}

{% data reusables.getting-started.customizing-and-automating %}

{% ifversion fpt or ghec %}
### 1. Использование {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %} {% endif %}
### {% ifversion fpt or ghec %}2.{% else %}1.{% endif %} Использование API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}

### {% ifversion fpt or ghec %}3.{% else %}2.{% endif %} Building {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

### {% ifversion fpt or ghec %}4.{% else %}3.{% endif %} Публикация и управление {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}

## Часть 5. Безопасное создание в {% data variables.product.product_name %}
{% data variables.product.product_name %} обладает множеством функций безопасности, которые помогают защитить код и секреты в репозиториях. Некоторые функции доступны для всех репозиториев, а другие доступны только для общедоступных репозиториев и репозиториев с лицензией {% data variables.product.prodname_GH_advanced_security %}. Обзор функций безопасности {% data variables.product.product_name %} см. в статье о [функциях безопасности {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features).

### 1. Защита вашего репозитория
Как администратор репозитория, вы можете защитить свои репозитории, настроив параметры безопасности репозитория. К ним относятся управление доступом к вашему репозиторию, настройка политики безопасности и управление зависимостями. Для общедоступных репозиториев и для частных репозиториев, принадлежащих организациям, в которых включен {% data variables.product.prodname_GH_advanced_security %}, вы также можете настроить сканирование кода и секретов для автоматического выявления уязвимостей и защиты маркеров и ключей. 

Дополнительные сведения о шагах, которые можно предпринять для защиты репозиториев, см. в статье [Защита репозитория](/code-security/getting-started/securing-your-repository).

{% ifversion fpt or ghec %}
### 2. Управление вашими зависимостями
Большая часть безопасного построения — это поддержка зависимостей вашего проекта, чтобы гарантировать, что все пакеты и приложения, от которых вы зависите, обновлены и безопасны. Вы можете управлять зависимостями вашего репозитория от {% data variables.product.product_name %}, изучая граф зависимостей для вашего репозитория, используя Dependabot, чтобы автоматически инициировать запросы на вытягивание в целях поддержания ваших зависимостей в актуальном состоянии, а также получая оповещения Dependabot и обновления безопасности для уязвимых зависимостей. 

Дополнительные сведения см. в статье [Защита цепочки поставок программного обеспечения](/code-security/supply-chain-security).
{% endif %}

## Часть 6. Участие в сообществе {% data variables.product.prodname_dotcom %}

{% data reusables.getting-started.participating-in-community %}

### 1. Участие в проектах с открытым кодом
{% data reusables.getting-started.open-source-projects %}

### 2. Взаимодействие с {% data variables.product.prodname_gcf %}
{% data reusables.support.ask-and-answer-forum %}

### 3. Информация о {% data variables.product.product_name %} on {% data variables.product.prodname_docs %}

{% data reusables.docs.you-can-read-docs-for-your-product %}

### 4. Обучение с {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning %}

{% ifversion fpt or ghec %}
### 5. Поддержка сообщества разработчиков решений с открытым кодом
{% data reusables.getting-started.sponsors %}

### 6. Обращение в {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}

{% ifversion fpt %}
## Дополнительные материалы
- "[Начало работы с {% data variables.product.prodname_team %}](/get-started/onboarding/getting-started-with-github-team)" {% endif %} {% endif %}
