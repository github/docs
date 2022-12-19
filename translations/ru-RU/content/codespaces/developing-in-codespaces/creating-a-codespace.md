---
title: Создание codespace
intro: Вы можете создать codespace для ветви в репозитории для разработки онлайн.
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
- /github/developing-online-with-github-codespaces/creating-a-codespace
- /github/developing-online-with-codespaces/creating-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Fundamentals
- Developer
shortTitle: Create a codespace
ms.openlocfilehash: ae14b01f409f9c6bfb43c579aaa9c76bb2421cfe
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148106736"
---
## Сведения о создании codespace

codespace можно создать на веб-сайте {% data variables.product.prodname_dotcom_the_website %}, в {% data variables.product.prodname_vscode %} или с помощью {% data variables.product.prodname_cli %}. {% data reusables.codespaces.codespaces-are-personal %}

Среды codespace связаны с определенной ветвью репозитория, и репозиторий не может быть пустым. Для каждого репозитория и даже ветви можно создавать несколько кодовых пространств.

При создании codespace необходимо выполнить ряд шагов, чтобы создать среду разработки и подключиться к ней.

- Шаг 1. Виртуальная машина и хранилище назначаются вашей среде codespace.
- Шаг 2. Создается контейнер и клонируется репозиторий.
- Шаг 3. Вы можете подключиться к codespace.
- Шаг 4. Для codespace выполняется настройка после создания.

Дополнительные сведения о том, что происходит при создании codespace, см. в статье с [подробными сведениями](/codespaces/getting-started/deep-dive).

Дополнительные сведения о жизненном цикле codespace см. в статье "[Жизненный цикл Codespaces](/codespaces/developing-in-codespaces/codespaces-lifecycle)".

Если вы хотите использовать перехватчики Git для codespace, их необходимо настроить с помощью [скриптов жизненного цикла `devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts), например `postCreateCommand`, на шаге 4. Так как контейнер codespace создается после клонирования репозитория, любой [каталог шаблонов Git](https://git-scm.com/docs/git-init#_template_directory), настроенный в образе контейнера, не будет применяться к codespace. Вместо этого после создания codespace необходимо установить перехватчики. Дополнительные сведения об использовании `postCreateCommand` см. в справочнике по [`devcontainer.json` ](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) в документации по {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

{% data reusables.codespaces.prebuilds-crossreference %}

## Доступ к {% data variables.product.prodname_github_codespaces %}

Если у вас есть доступ к {% data variables.product.prodname_github_codespaces %}, при просмотре репозитория вы увидите вкладку "Codespaces" в раскрывающемся меню **{% octicon "code" aria-label="The code icon" %} Код**.

У вас будет доступ к {% data variables.product.prodname_github_codespaces %} в следующих условиях:

Или все эти условия должны иметь значение true:
* Вы являетесь членом или сторонним участником организации, которая включила {% data variables.product.prodname_codespaces %} и задала предельную сумму расходов.
* Владелец организации разрешил создавать codespace за счет организации.
* Репозиторий, для которого требуется создать пространство кода, принадлежит этой организации.

Или оба из них должны иметь значение true:
* Вы участвуете в бета-версии {% data variables.product.prodname_codespaces %} для отдельных пользователей.
* Либо вы являетесь владельцем репозитория, для которого требуется создать codespace, либо он принадлежит организации, членом или сторонним участником которой вы являетесь.

Прежде чем {% data variables.product.prodname_codespaces %} можно будет использовать в организации, владелец или менеджер по выставлению счетов должен задать предельную сумму расходов. Дополнительные сведения см. в разделе [Управление предельными суммами расходов для {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces#about-spending-limits-for-codespaces).

Владельцы организации могут указать, кто может создавать и использовать кодовые пространства за счет организации. Владельцы организации также могут предотвратить выставление организации счетов за использование codespace. Дополнительные сведения см. в разделе [Включение {% data variables.product.prodname_github_codespaces %} для организации](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#choose-who-can-create-codespaces-that-are-billed-to-your-organization).

## Создание codespace

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
1. Под именем репозитория в раскрывающемся меню "Ветвь" выберите ветвь, для которой нужно создать codespace.

   ![Раскрывающееся меню "Ветвь"](/assets/images/help/codespaces/branch-drop-down.png)

1. Нажмите кнопку **Код {% octicon "code" aria-label="The code icon" %}** и выберите вкладку **Кодовые пространства**.

   ![Кнопка "Создать codespace"](/assets/images/help/codespaces/new-codespace-button.png)

   Если кодовые пространства для этого репозитория оплачиваются, под кнопкой **"Создать кодовое пространство" в BRANCH** отображается сообщение, указывающее, кто будет платить за пространство кода.

1. Создайте кодовое пространство с параметрами по умолчанию или настройте расширенные параметры:
 
   * **Использование параметров по умолчанию**

      Чтобы создать кодовое пространство с параметрами по умолчанию, нажмите кнопку **Создать кодовое пространство в BRANCH**.

      При желании перед нажатием кнопки **Создать кодовое пространство в BRANCH** щелкните стрелку вниз в боковой части кнопки, чтобы узнать, какой тип компьютера будет использоваться для вашего кодового пространства.

      ![Просмотр типа компьютера по умолчанию](/assets/images/help/codespaces/default-machine-type.png)

      {% note %}

      **Примечание**. По умолчанию выбирается тип компьютера с наименьшими ресурсами, допустимыми для репозитория.

      {% endnote %}

   * **Настройка параметров**

      Чтобы настроить дополнительные параметры для кодового пространства, например другой тип компьютера или конкретный файл `devcontainer.json`, выполните следующие действия:

      1. Щелкните стрелку вниз в боковой части кнопки **Создать кодовое пространство в BRANCH** и выберите **Настроить и создать кодовое пространство**.
      1. Нажмите кнопку **Настроить и создать кодовое пространство**.
      1. На странице параметров кодового пространства выберите нужные параметры в раскрывающихся меню.

         ![Страница параметров кодового пространства](/assets/images/help/codespaces/advanced-options.png)

         {% note %}
      
         **Примечания**
      
         * Чтобы ускорить создание кодового пространства для этого репозитория и ветви, можно добавить страницу параметров можно в закладки.
         * Страница [https://github.com/codespaces/new](https://github.com/codespaces/new) позволяет быстро создать кодовое пространство для любого репозитория и ветви. Чтобы быстро открыть эту страницу, введите `codespace.new` в адресную строку браузера.
         * Дополнительные сведения о файле `devcontainer.json` см. в статье [Общие сведения о контейнерах разработки](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson).
         * Дополнительные сведения о типах компьютеров см. в разделе [Изменение типа компьютера для кодового пространства](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types).
         * {% data reusables.codespaces.codespaces-machine-type-availability %}
      
         {% endnote %}

      1. Нажмите кнопку **Начать сеанс**.

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

Вам будет предложено выбрать репозиторий. Если кодовые пространства для этого репозитория оплачиваются, отображается сообщение с сообщением о том, кто будет платить за пространство кода. Затем вам будет предложено выбрать ветвь, файл конфигурации контейнера разработки (если доступно несколько) и тип компьютера (если доступно несколько).

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
- Открытие [существующего пространства кода](/codespaces/developing-in-codespaces/opening-an-existing-codespace)
- [Добавление значка "Открыть в GitHub Codespaces"](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge)
