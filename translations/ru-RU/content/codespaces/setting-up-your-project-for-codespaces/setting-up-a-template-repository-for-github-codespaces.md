---
title: Настройка репозитория шаблонов для GitHub Codespaces
shortTitle: Set up a template repo
intro: 'Вы можете помочь пользователям приступить к работе с проектом, настроив репозиторий шаблонов для использования с {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: 155aa9bf839301439d2746b4b6f0f0575d2e60ff
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159914'
---
## Введение

Настроив репозиторий шаблонов, вы можете помочь пользователям приступить к работе с платформой, библиотекой или другим проектом в {% data variables.product.prodname_github_codespaces %}. Пользователи смогут сразу же приступить к работе с файлами шаблонов в облачной среде разработки, не беспокоясь о клонировании репозитория, установке средств или других зависимостей. С некоторой конфигурацией вы сможете настроить пользователей в codespace с важными файлами, которые уже открыты для редактирования, а приложение уже запущено на вкладке браузера предварительного просмотра в веб-редакторе {% data variables.product.prodname_vscode_shortname %}.

Любой пользователь с доступом на чтение к репозиторию шаблонов может создать пространство кода на странице репозитория в {% data variables.product.product_name %}. Вы можете превратить любой существующий репозиторий в шаблон, и вам не нужно изменять параметры, чтобы разрешить пользователям создавать пространство кода из репозитория шаблонов. Дополнительные сведения о превращении репозитория в шаблон см. в разделе [Создание репозитория шаблонов](/repositories/creating-and-managing-repositories/creating-a-template-repository).

Вы можете указать ссылку в формате `https://github.com/codespaces/new?template_repository=OWNER/TEMPLATE-REPO` , чтобы пользователи могли перейти непосредственно на страницу "Создание нового пространства кода" для шаблона.

![Снимок экрана: страница "Создание codespace"](/assets/images/help/codespaces/create-a-new-codespace-page.png)

Например, вы можете указать эту ссылку в руководстве по началу работы с платформой. В ссылке замените `OWNER/TEMPLATE-REPO` именем репозитория шаблонов, например `monalisa/octo-template`.

Когда кто-то создает пространство кода на основе шаблона, содержимое репозитория шаблонов будет клонировано в его codespace. Когда пользователь будет готов, он сможет опубликовать свою работу в новом репозитории на {% data variables.product.product_name %}, принадлежащий его личной учетной записи. Плата за использование codespace будет взиматься с пользователя, создавшего его. Дополнительные сведения см. в разделе [Создание codespace на основе шаблона](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template).

## Описание шаблона

Если у вас его нет, создайте файл сведений для репозитория шаблонов, чтобы описать назначение шаблона и как начать работу с ним. Дополнительные сведения см. в статье [О файлах README](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes).

Краткое описание шаблона отображается на странице "Создание нового пространства кода", на которую пользователи смогут перейти по ссылке `https://github.com/codespaces/new?template_repository=OWNER/TEMPLATE-REPO` . Это описание взято из поля **Описание** , которое можно задать при создании репозитория. Это описание можно изменить в любое время, перейдя на страницу репозитория и щелкнув **{% octicon "gear" aria-label="The Settings gear" %}** рядом с разделом **О** программе в правой части страницы.

![Снимок экрана: раздел "О программе" на странице репозитория](/assets/images/help/repository/repository-settings-icon.png)

## Добавление начальных файлов

Репозитории шаблонов обычно содержат начальные файлы с стандартным кодом, чтобы пользователи могли быстро приступить к работе с библиотекой, платформой или другими технологиями.

Рекомендации по типам файлов, которые необходимо включить, можно просмотреть начальные файлы, включенные в официальные шаблоны {% data variables.product.company_short %} для {% data variables.product.prodname_github_codespaces %}, как показано ниже.

{% data reusables.codespaces.your-codespaces-procedure-step %} {% data reusables.codespaces.view-all-templates-step %}
1. Чтобы просмотреть репозиторий шаблонов, содержащий файлы для шаблона, щелкните имя шаблона.

   ![Снимок экрана: раздел "Изучение шаблонов быстрого запуска" с выделенным элементом "React"](/assets/images/help/codespaces/react-template-name.png)

## Настройка образа контейнера

Вы можете добавить файлы конфигурации контейнера разработки в репозиторий шаблонов, чтобы настроить среду разработки для пользователей, использующих ваш шаблон с {% data variables.product.prodname_github_codespaces %}. Вы можете выбрать из списка предопределенных параметров конфигурации в {% data variables.product.prodname_vscode %} или создать пользовательскую конфигурацию, написав собственный `devcontainer.json` файл. Если не добавить файлы конфигурации, будет использоваться образ контейнера по умолчанию. Дополнительные сведения см. в разделах [Общие сведения о контейнерах разработки](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) и [Добавление конфигурации контейнера разработки в репозиторий](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces).

{% note %}

**Примечание.** {% data reusables.codespaces.configuration-choice-templates %}

{% endnote %}

Вы должны настроить контейнер разработки с помощью средств и настройки, чтобы предоставить пользователям наилучший опыт работы с вашим шаблоном. Например, в файле:`devcontainer.json` 
- Свойство можно использовать для `openFiles` определения списка файлов, которые будут автоматически открываться в веб-клиенте {% data variables.product.prodname_vscode_shortname %} при создании codespace на основе шаблона.
- Если шаблон содержит файлы для веб-приложения, вы можете настроить автоматическое выполнение приложения в пространстве кода пользователя. Это можно сделать, используя `postAttachCommand` свойство для запуска скрипта, который запускает приложение на локальном сервере, как только веб-клиент {% data variables.product.prodname_vscode_shortname %} подключается к codespace, и задав `onAutoForward` свойству порта `openPreview` значение для отображения приложения, работающего на этом порту, в простом браузере, внедренном в веб-клиент {% data variables.product.prodname_vscode_shortname %}.

Следующие параметры конфигурации для шаблона React открывают `app.js` файл в редакторе пользователя, запускают `npm start` (определяются в `package.json` файле) для запуска локального сервера и перенаправят порт `3000` на вкладку браузера предварительного просмотра в codespace.

```JSON
{
    "postAttachCommand": {
      "server": "npm start",
    },

    "portsAttributes": {
      "3000": {
        "label": "Application",
        "onAutoForward": "openPreview"
      }
    },

    "customizations": {
      "codespaces": {
        "openFiles": ["src/App.js"]
      }
    }
}
```
Дополнительные сведения см. в разделе [Автоматическое открытие файлов в codespaces для репозитория](/codespaces/setting-up-your-project-for-codespaces/automatically-opening-files-in-the-codespaces-for-a-repository) и [спецификация контейнеров разработки](https://containers.dev/implementors/json_reference/#general-properties) в containers.dev.
