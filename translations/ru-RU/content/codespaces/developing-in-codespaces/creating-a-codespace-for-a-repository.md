---
title: Создание codespace для репозитория
intro: Вы можете создать codespace для ветви в репозитории для разработки онлайн.
redirect_from:
  - /github/developing-online-with-github-codespaces/creating-a-codespace
  - /github/developing-online-with-codespaces/creating-a-codespace
  - /codespaces/developing-in-codespaces/creating-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Create a codespace for a repo
ms.openlocfilehash: 409c946feda4ffbd3d9ab615b6ea07fabee3f530
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188323'
---
## Сведения о создании codespace для репозитория

{% data reusables.codespaces.ways-to-create-a-codespace %} Используйте вкладки в этой статье, чтобы отобразить инструкции для каждого из этих способов создания codespace.

{% data reusables.codespaces.starting-new-project-template %} Дополнительные сведения см. в разделе [Создание codespace на основе шаблона](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template).

{% note %}

**Примечание**. Если вы используете интегрированную среду разработки JetBrains, вы можете использовать {% data variables.product.prodname_cli %} для создания codespace. Затем можно использовать приложение Шлюза JetBrains, чтобы открыть codespace в интегрированной среде разработки JetBrains. Дополнительные сведения см. в разделе [Использование Codespaces в интегрированной среде разработки JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide).

{% endnote %}

Вы можете использовать {% data variables.product.prodname_github_codespaces %} в вашей личной учетной записи {% data variables.product.prodname_dotcom_the_website %} с квотой бесплатного использования, включенной каждый месяц для учетных записей в планах Free и Pro. {% data reusables.codespaces.codespaces-continue-by-payment %}

Организации могут разрешить участникам и внешним участникам совместной работы создавать и использовать codespace за счет организации. Дополнительные сведения см. в разделе [Включение {% data variables.product.prodname_github_codespaces %} для организации](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization).

{% data reusables.codespaces.codespaces-are-personal %}

При создании codespace из репозитория пространство codespace будет связано с определенной ветвью, которая не может быть пустой. Для каждого репозитория и даже ветви можно создавать несколько кодовых пространств.

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

### Процесс создания codespace

При создании codespace необходимо выполнить ряд шагов, чтобы создать среду разработки и подключиться к ней.

- Шаг 1. Виртуальная машина и хранилище назначаются вашей среде codespace.
- Шаг 2. Создается контейнер и клонируется репозиторий.
- Шаг 3. Вы можете подключиться к codespace.
- Шаг 4. Для codespace выполняется настройка после создания.

Дополнительные сведения о том, что происходит при создании codespace, см. в статье с [подробными сведениями](/codespaces/getting-started/deep-dive).

Дополнительные сведения о жизненном цикле codespace см. в разделе [Жизненный цикл codespace](/codespaces/getting-started/the-codespace-lifecycle).

Если вы хотите использовать перехватчики Git для codespace, их необходимо настроить с помощью [скриптов жизненного цикла `devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts), например `postCreateCommand`, на шаге 4. Так как контейнер codespace создается после клонирования репозитория, любой [каталог шаблонов Git](https://git-scm.com/docs/git-init#_template_directory), настроенный в образе контейнера, не будет применяться к codespace. Вместо этого после создания codespace необходимо установить перехватчики. Дополнительные сведения об использовании `postCreateCommand` см. в справочнике по [`devcontainer.json` ](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) в документации по {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.prebuilds-crossreference %}

## Создание codespace для репозитория

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
1. Под именем репозитория используйте раскрывающееся меню "Ветвь" и выберите ветвь, для которой нужно создать codespace.

   ![Раскрывающееся меню "Ветвь"](/assets/images/help/codespaces/branch-drop-down.png)

1. Нажмите кнопку **Код {% octicon "code" aria-label="The code icon" %}** и выберите вкладку **Кодовые пространства**.

   ![Кнопка "Создать codespace"](/assets/images/help/codespaces/new-codespace-button.png)

   Если за codespaces для этого репозитория взимается плата за организацию или ее родительское предприятие, под кнопкой **Создать codespace on BRANCH** отображается сообщение о том, кто будет платить за codespace.

1. Создайте кодовое пространство с параметрами по умолчанию или настройте расширенные параметры:
 
   * **Использование параметров по умолчанию**

      Чтобы создать codespace с помощью параметров по умолчанию, щелкните знак "плюс" ({% octicon "plus" aria-label="The plus icon" %}). Кроме того, если у вас нет codespace для этого репозитория, можно щелкнуть **Создать codespace в BRANCH**.

   * **Настройка параметров**

      Чтобы настроить дополнительные параметры для кодового пространства, например другой тип компьютера или конкретный файл `devcontainer.json`, выполните следующие действия:

      1. Щелкните многоточие (**...**) в правом верхнем углу **вкладки Codespaces** и выберите **Создать с параметрами**.

      ![Просмотр типа компьютера по умолчанию](/assets/images/help/codespaces/default-machine-type.png)

      1. На странице параметров для codespace выберите нужные параметры в раскрывающихся меню.

         ![Страница параметров кодового пространства](/assets/images/help/codespaces/advanced-options.png)

         {% note %}
      
         **Примечания**
      
         * Чтобы ускорить создание кодового пространства для этого репозитория и ветви, можно добавить страницу параметров можно в закладки.
         * Страница [https://github.com/codespaces/new](https://github.com/codespaces/new) позволяет быстро создать кодовое пространство для любого репозитория и ветви. Чтобы быстро открыть эту страницу, введите `codespace.new` в адресную строку браузера.
         * Дополнительные сведения о файле `devcontainer.json` см. в статье [Общие сведения о контейнерах разработки](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson).
         * Дополнительные сведения о типах компьютеров см. в разделе [Изменение типа компьютера для кодового пространства](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types).
         * {% data reusables.codespaces.codespaces-machine-type-availability %}
      
         {% endnote %}

      1. Щелкните **Create codespace** (Создать codespace).

{% endwebui %}
   
{% vscode %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

{% endvscode %}
   
{% cli %}

{% data reusables.cli.cli-learn-more %}

Чтобы создать codespace, используйте подкоманду `gh codespace create`. 

```shell
gh codespace create 
```

Вам будет предложено выбрать репозиторий. Если codespace для этого репозитория оплачивается организацией или ее родительским предприятием, отображается сообщение о том, кто будет платить за codespace. Затем вам будет предложено выбрать ветвь, файл конфигурации контейнера разработки (если доступно несколько) и тип компьютера (если доступно несколько).

Или же можно использовать флаги для указания некоторых или всех параметров:

```shell
gh codespace create -r OWNER/REPO -b BRANCH --devcontainer-path PATH -m MACHINE-TYPE
```

Замените в этом примере `owner/repo` идентификатором репозитория. Замените `branch` именем ветви или полным хэшем SHA фиксации, которую вы хотите сначала извлечь в codespace. Если флаг `-r` используется без флага `b`, codespace создается из ветви по умолчанию.

Замените `path` на путь к файлу конфигурации контейнера разработки, который планируется использовать для нового пространства кода. Если этот флаг пропущен, и доступно несколько файлов контейнера разработки, вам будет предложено выбрать один из списка. Дополнительные сведения о файле конфигурации контейнеров разработки см. в разделе [Общие сведения о контейнерах разработки](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers).

Замените `machine-type` допустимым идентификатором для доступного типа компьютера. Идентификаторы — это строки, такие как `basicLinux32gb` и `standardLinux32gb`. Тип доступных компьютеров зависит от репозитория, вашей личной учетной записи и расположения. При вводе недопустимого или недоступного типа компьютера, доступные типы отображаются в сообщении об ошибке. Если этот флаг пропущен, и доступно несколько типов компьютеров, вам будет предложено выбрать один из списка.

Подробные сведения о параметрах этой команды см. в [руководстве по {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_create).

{% endcli %}

## Дополнительные материалы
- ["Открытие существующего пространства кода](/codespaces/developing-in-codespaces/opening-an-existing-codespace)"
- [Добавление значка "Открыть в {% data variables.product.prodname_github_codespaces %}"](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge)
