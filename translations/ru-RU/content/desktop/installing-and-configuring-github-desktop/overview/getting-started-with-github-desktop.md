---
title: Начало работы с GitHub Desktop
intro: 'Узнайте, как определить, проверить подлинность и настроить {% data variables.product.prodname_desktop %}, чтобы участвовать в проектах непосредственно со своего компьютера.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
redirect_from:
  - /desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop
shortTitle: Get started
ms.openlocfilehash: ae67886e55d88ca3c6330d3d8f3c76528e765c78
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117320'
---
## Введение
{% data variables.product.prodname_desktop %} — это приложение, которое позволяет взаимодействовать с {% data variables.product.prodname_dotcom %} с помощью графического пользовательского интерфейса вместо командной строки или веб-браузера. {% data variables.product.prodname_desktop %} способствует более эффективной совместной работе в команде в соответствии с рекомендациями по использованию Git и {% data variables.product.prodname_dotcom %}. Вы можете использовать {% data variables.product.prodname_desktop %} для выполнения большинства команд Git на компьютере с помощью визуального подтверждения изменений. Вы можете отправлять, вытягивать и клонировать удаленные репозитории с помощью {% data variables.product.prodname_desktop %}, а также использовать средства совместной работы, такие как атрибуция фиксаций и создание запросов на вытягивание.

Это руководство поможет вам приступить к работе с {% data variables.product.prodname_desktop %} путем настройки приложения, проверки подлинности учетной записи, настройки основных параметров и введения основ управления проектами с помощью {% data variables.product.prodname_desktop %}. После прохождения этого учебника вы сможете использовать {% data variables.product.prodname_desktop %} для совместной работы над проектами и подключения к удаленным репозиториям.

Прежде чем приступить к работе с {% data variables.product.prodname_dotcom %}, вам может быть полезно ознакомиться с Git и {% data variables.product.prodname_desktop %}. Дополнительные сведения см. в следующих руководствах.

- [Использование Git](/github/getting-started-with-github/using-git)
- [Общие сведения о {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/learning-about-github)
- [Начало работы с {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)

{% data variables.product.prodname_desktop %} — это проект с открытым кодом. Вы можете ознакомиться со стратегией, внести свой вклад в проект или открыть проблему, чтобы предоставить отзыв или запросить новую функцию. Дополнительные сведения можно найти в статье Репозиторий [`desktop/desktop`](https://github.com/desktop/desktop).

## Часть 1. Установка и проверка подлинности
Установить {% data variables.product.prodname_desktop %} можно в любой поддерживаемой операционной системе. Дополнительные сведения см. в разделе [Поддерживаемые операционные системы](/desktop/getting-started-with-github-desktop/supported-operating-systems).

Чтобы установить {% data variables.product.prodname_desktop %}, перейдите на страницу скачивания [{% data variables.product.prodname_desktop %}](https://desktop.github.com/). Дополнительные сведения см. в разделе [Установка {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/installing-github-desktop).

После установки {% data variables.product.prodname_desktop %} вы можете выполнить пройти проверку подлинности приложения с помощью учетной записи на {% data variables.product.prodname_dotcom %} или {% data variables.product.prodname_enterprise %}. Проверка подлинности позволяет подключаться к удаленным репозиториям на {% data variables.product.prodname_dotcom %} или {% data variables.product.prodname_enterprise %}.

{% mac %}

1. Чтобы пройти проверку подлинности для {% data variables.product.prodname_dotcom %} или {% data variables.product.prodname_enterprise %}, вам потребуется учетная запись. Дополнительные сведения о создании учетной записи см. в разделе [Регистрация для новой учетной записи {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-a-new-github-account) или обратитесь к своему администратору сайта {% data variables.product.prodname_enterprise %}.

2. В раскрывающемся меню {% data variables.product.prodname_desktop %} выберите **Параметры**. В окне параметров щелкните **Учетные записи** и выполните действия для входа. Дополнительные сведения о см. в статье [Проверка подлинности в {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github).
  ![Кнопка входа для GitHub](/assets/images/help/desktop/mac-sign-in-github.png)

{% endmac %}

{% windows %}

1. Чтобы пройти проверку подлинности для {% data variables.product.prodname_dotcom %} или {% data variables.product.prodname_enterprise %}, вам потребуется учетная запись. Дополнительные сведения о создании учетной записи см. в разделе [Регистрация для новой учетной записи {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-a-new-github-account) или обратитесь к своему администратору сайта {% data variables.product.prodname_enterprise %}.

2. В раскрывающемся меню "Файл" выберите **Параметры**. В окне параметров щелкните **Учетные записи** и выполните действия для входа. Дополнительные сведения о см. в статье [Проверка подлинности в {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github).
  ![Кнопка входа для GitHub](/assets/images/help/desktop/windows-sign-in-github.png)

{% endwindows %}

## Часть 2. Настройка {% data variables.product.prodname_desktop %}
После установки {% data variables.product.prodname_desktop %}, вы можете настроить приложение в соответствии с вашими потребностями.

{% mac %}

Вы можете подключать или удалять учетные записи для {% data variables.product.prodname_dotcom %} или {% data variables.product.prodname_enterprise %}, выбрать текстовый редактор или оболочку по умолчанию, изменить конфигурацию Git, изменить внешний вид {% data variables.product.prodname_desktop %}, настроить системные диалоговые окна и задать параметры конфиденциальности в окне "Настройки" {% data variables.product.prodname_desktop %}. Дополнительные сведения см. в разделе [Настройка основных параметров](/desktop/getting-started-with-github-desktop/configuring-basic-settings).

  ![Основные параметры в окне настроек](/assets/images/help/desktop/mac-appearance-tab-themes.png)

{% endmac %}

{% windows %}

Вы можете подключать или удалять учетные записи для {% data variables.product.prodname_dotcom %} или {% data variables.product.prodname_enterprise %}, выбрать текстовый редактор или оболочку по умолчанию, изменить конфигурацию Git, изменить внешний вид {% data variables.product.prodname_desktop %}, настроить системные диалоговые окна и задать параметры конфиденциальности в окне "Настройки" {% data variables.product.prodname_desktop %}. Дополнительные сведения см. в разделе [Настройка основных параметров](/desktop/getting-started-with-github-desktop/configuring-basic-settings).

  ![Основные параметры в окне настроек](/assets/images/help/desktop/windows-appearance-tab-themes.png)

{% endwindows %}

## Часть 3. Участие в проектах с помощью {% data variables.product.prodname_desktop %}
После установки, проверки подлинности и настройки приложения можно приступить к использованию {% data variables.product.prodname_desktop %}. Вы можете создавать, добавлять или клонировать репозитории и использовать {% data variables.product.prodname_desktop %} для управления своими вкладами в репозитории.

### Создание, добавление и клонирование репозиториев
Вы можете создать новый репозиторий, выбрав меню "Файл" и нажав кнопку **Создать репозиторий...** . Дополнительные сведения приведены в статье [Создание первого репозитория с помощью {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop).

Вы можете добавить репозиторий с локального компьютера, выбрав меню "Файл" и нажав кнопку **Добавить локальный репозиторий...** . Дополнительные сведения см. в статье [Добавление репозитория с локального компьютера в {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/adding-a-repository-from-your-local-computer-to-github-desktop).

Вы можете клонировать репозиторий из {% data variables.product.prodname_dotcom %}, выбрав меню "Файл" и щелкнув **Клонировать репозиторий...** . Дополнительные сведения см. в статье [Клонирование и создание вилок репозиториев с помощью {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop).

{% mac %}

  ![Пункты меню "Файл" для создания, добавления и клонирования репозиториев](/assets/images/help/desktop/mac-file-menu.png)

{% endmac %}

{% windows %}

  ![Пункты меню "Файл" для создания, добавления и клонирования репозиториев](/assets/images/help/desktop/windows-file-menu.png)

{% endwindows %}

### Внесение изменений в ветвь
Вы можете использовать {% data variables.product.prodname_desktop %} для создания ветви проекта. Ветви изолируют вашу работу по разработке от других ветвей в репозитории, чтобы вы могли безопасно экспериментировать с изменениями. Дополнительные сведения см. в статье [Управление ветвями](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches).

  ![Кнопка "Создать ветвь"](/assets/images/help/desktop/new-branch-button-mac.png)

После внесения изменений в ветвь их можно просмотреть в {% data variables.product.prodname_desktop %} и выполнить фиксацию для отслеживания изменений. Дополнительные сведения см. в статье [Фиксация и проверка изменений в проекте](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project).

  ![Просмотр и создание фиксаций](/assets/images/help/desktop/commit-button.png)

Если вы хотите получить доступ к изменениям удаленно или поделиться ими с другими пользователями, вы можете отправить фиксации в {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Отправка изменений в {% data variables.product.prodname_dotcom %}](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github).

### Совместная работа с помощью {% data variables.product.prodname_desktop %}
Вы можете использовать {% data variables.product.prodname_desktop %}, чтобы создавать проблемы и запросы на вытягивание для совместной работы над проектами с другими пользователями. Проблемы помогают отслеживать идеи и обсуждать возможные изменения проектов. Запросы на вытягивание позволяют делиться предлагаемыми изменениями с другими пользователями, получать отзывы и объединять изменения в проект. Дополнительные сведения см. в статье [Создание проблемы или запроса на вытягивание](/desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request).

Вы можете просматривать собственные запросы на вытягивание и запросы других участников совместной работы в {% data variables.product.prodname_desktop %}. Просмотр запроса на вытягивание в {% data variables.product.prodname_desktop %} позволяет увидеть любые предлагаемые изменения и внести дополнительные изменения, открыв файлы и репозитории проекта в текстовом редакторе по умолчанию. Дополнительные сведения см. в статье [Просмотр запроса на вытягивание в {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/viewing-a-pull-request-in-github-desktop).

### Синхронизация локального репозитория
Когда вы вносите изменения в локальный репозиторий или когда другие пользователи вносят изменения в удаленные репозитории, вам потребуется синхронизировать локальную копию проекта с удаленным репозиторием. {% data variables.product.prodname_desktop %} может поддерживать синхронизацию локальной копии проекта с удаленной версией путем отправки и извлечения фиксаций. Дополнительные сведения см. в разделе [Синхронизация ветви](/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch).

## Дополнительные материалы
- [Установка и проверка подлинности в {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/installing-and-authenticating-to-github-desktop)
- [Участие в проектах и совместная работа с помощью {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop)
