---
title: Создание codespace на основе шаблона
intro: 'Если вы начинаете новый проект, вы можете создать пространство кода из пустого шаблона или выбрать шаблон, специально разработанный для нужного типа работы.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Create a codespace from a template
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 9e7ee0d110e962fa755f5f57cc70bc3cab341808
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188315'
---
## Сведения о шаблонах для {% data variables.product.prodname_github_codespaces %}

Если вы начинаете новый проект, вы можете быстро приступить к разработке, создав codespace на основе шаблона. Вы сможете работать над проектом в облачной среде разработки, сохранять файлы в облаке и публиковать свои работы в новом удаленном репозитории, которым можно поделиться с другими пользователями или клонировать на локальный компьютер.

{% note %}

**Примечание.** Счета за codespace, созданные на основе шаблона, а не из репозитория, всегда выставляются в вашей личной учетной записи. Дополнительные сведения см. в статье [Сведения о выставлении счетов за {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

{% endnote %}

Вы можете начать с пустого шаблона, выбрать шаблоны, поддерживаемые {% data variables.product.company_short %} для популярных технологий, таких как React или Jupyter Notebook, или запустить пространство кода из любого репозитория шаблонов в {% data variables.product.prodname_dotcom %}. С пустым шаблоном вы начнете с пустого каталога с доступом к облачным вычислительным ресурсам и средствам, языкам и средам выполнения, которые предустановлены с изображением codespace по умолчанию. С помощью других шаблонов вы получите начальные файлы для технологии, с которой вы работаете, а также, как правило, некоторые дополнительные файлы, такие как файл сведений `.gitignore` , файл и файлы конфигурации контейнера разработки, содержащие некоторые пользовательские конфигурации среды. Дополнительные сведения о контейнерах разработки и образе по умолчанию см. в разделе [Общие сведения о контейнерах разработки](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers).

Например, если создать codespace на основе шаблона React {% data variables.product.company_short %}, вы будете поступать в рабочую область, содержащую файлы шаблонов для простого приложения, например `index.js`, `app.js`и `package.json`. Вскоре после открытия codespace сервер разработки запустится автоматически, и вы сможете просматривать запущенное приложение на простой вкладке браузера в веб-клиенте {% data variables.product.prodname_vscode_shortname %}.

![Снимок экрана: шаблон React, выполняющийся в codespace](/assets/images/help/codespaces/react-template.png)

Файлы и конфигурация, включенные в шаблоны, определяются в репозиториях шаблонов. Репозиторий шаблонов клонируется в codespace при создании codespace. После этого ссылка будет разорвана, и пространство кода не будет связано с удаленным репозиторием, пока вы не опубликуете его. 

{% tip %}

**Совет:** Чтобы помочь пользователям приступить к работе с платформой, библиотекой или другим проектом, можно настроить репозиторий шаблонов для использования с {% data variables.product.prodname_github_codespaces %}. Дополнительные сведения см. в разделе [Настройка репозитория шаблонов для {% data variables.product.prodname_github_codespaces %}](/codespaces/setting-up-your-project-for-codespaces/setting-up-a-template-repository-for-github-codespaces).

{% endtip %}

## Создание codespace на основе шаблона {% data variables.product.company_short %}

Шаблоны, поддерживаемые {% data variables.product.company_short %}, включая пустой шаблон, доступны на странице "Ваши пространства кода".

{% data reusables.codespaces.your-codespaces-procedure-step %} {% data reusables.codespaces.view-all-templates-step %}
1. При необходимости, чтобы просмотреть репозиторий шаблонов, содержащий файлы для шаблона, щелкните имя шаблона.

   ![Снимок экрана: раздел "Изучение шаблонов быстрого запуска" с выделенным элементом "React"](/assets/images/help/codespaces/react-template-name.png)

1. Под шаблоном, который вы хотите запустить, щелкните **Использовать этот шаблон**.
   
   ![Снимок экрана: шаблоны быстрого запуска с выделенной кнопкой "Использовать этот шаблон" в шаблоне React](/assets/images/help/codespaces/react-template-button.png)

{% data reusables.codespaces.template-codespaces-default-editor %}

## Создание codespace из репозитория шаблонов

Вы можете создать codespace из любого репозитория шаблонов, а затем опубликовать свою работу в новом репозитории, когда будете готовы. Дополнительные сведения о репозиториях шаблонов см. в разделе [Создание репозитория на основе шаблона](/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#about-repository-templates).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.codespaces.open-template-in-codespace-step %}

   {% note %}

   **Примечание:** Если вы являетесь хранителем репозитория шаблонов и хотите зафиксировать изменения в самом репозитории шаблонов, создайте пространство кода из раскрывающегося списка **{% octicon "code" aria-label="The code icon" %} Code** . Дополнительные сведения см. в разделе [Создание codespace для репозитория](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

   {% endnote %}

{% data reusables.codespaces.template-codespaces-default-editor %}

## Публикация в репозитории на {% data variables.product.product_name %}

{% data reusables.codespaces.about-publishing-templates %}

### Публикация из {% data variables.product.prodname_vscode_shortname %} 

{% data reusables.codespaces.publishing-template-codespaces %}

При публикации codespace у вас есть доступ к большему набору параметров для настройки интерфейса {% data variables.product.prodname_github_codespaces %}. Например, вы можете:

- Измените тип компьютера codespace, чтобы убедиться, что вы используете ресурсы, соответствующие выполняемой работе (см. [раздел Изменение типа компьютера для codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)).
- Разрешить {% data variables.product.prodname_dotcom %} автоматически использовать GPG для подписывания фиксаций, которые вы делаете в codespace (см. раздел [Управление проверкой GPG для {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)).
- Совместное использование зашифрованных секретов с codespace (см. раздел [Управление зашифрованными секретами для codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)).

### Публикация из {% data variables.product.prodname_dotcom_the_website %} 

Неопубликованное пространство кода можно опубликовать на странице "Ваши codespaces" на {% data variables.product.prodname_dotcom_the_website %}. Это полезно, если вы хотите опубликовать пространство кода, которое в настоящее время не открыто в браузере. В этом случае работа будет сохранена в репозитории, но не будет связи между существующим пространством кода и новым репозиторием. Однако вы можете перейти к новому репозиторию и создать оттуда codespace, и это пространство кода будет подключено к репозиторию.

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. Рядом с неопубликованным пространством кода щелкните многоточие (**...**), а затем выберите **Опубликовать в новом репозитории**.

   ![Снимок экрана: кнопка "Опубликовать в новом репозитории"](/assets/images/help/codespaces/publish-to-new-repository.png)
1. Выберите имя для нового репозитория, задайте для него значение **Общедоступный** или **Частный** и нажмите кнопку **Создать репозиторий**.

   ![Снимок экрана: раскрывающийся список "Опубликовать в новом репозитории"](/assets/images/help/codespaces/template-new-repository-settings.png)
1. При необходимости, чтобы просмотреть новый репозиторий, щелкните **Просмотреть репозиторий**.

## Дополнительные материалы

- [Создание codespace для репозитория](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)
- [Жизненный цикл codespace](/codespaces/getting-started/the-codespace-lifecycle)
- ["Использование системы управления версиями в codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)"
