---
title: Персонализация GitHub Codespaces для вашей учетной записи
shortTitle: Personalize your codespaces
intro: 'Вы можете персонализировать {% data variables.product.prodname_github_codespaces %} с помощью репозитория `dotfiles` для {% data variables.product.product_name %} или с помощью синхронизации параметров.'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
  - /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
  - /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
  - /codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
ms.openlocfilehash: 80b6cd1ee982150c1b3c0a66e1247f6098a97bcb
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160256'
---
## Сведения о персонализации {% data variables.product.prodname_codespaces %}

При использовании любой среды разработки важным шагом является настройка параметров и инструментов в соответствии с вашими предпочтениями и рабочими процессами. {% data variables.product.prodname_github_codespaces %} позволяет персонализировать codespace двумя основными способами.

- [Синхронизация параметров](#settings-sync) . Параметры {% data variables.product.prodname_vscode %} можно синхронизировать между классическим приложением и веб-клиентом {% data variables.product.prodname_vscode_shortname %}.
- [Файлы с точкой](#dotfiles) — вы можете использовать репозиторий `dotfiles` для указания скриптов, настроек оболочки и других конфигураций.

Персонализация {% data variables.product.prodname_github_codespaces %} применяется к любому создаваемому пространству codespace.

Обслуживающие проект также могут определить конфигурацию по умолчанию, которая применяется к каждому пространству codespace для репозитория, созданному любым пользователем. Дополнительные сведения см. в статье [Общие сведения о контейнерах разработки](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers).

## Синхронизация параметров

Синхронизация параметров позволяет синхронизировать конфигурации, такие как параметры, сочетания клавиш, фрагменты кода, расширения и состояние пользовательского интерфейса на компьютерах и экземплярах {% data variables.product.prodname_vscode_shortname %}.

Чтобы включить синхронизацию параметров, в левом нижнем углу панели действий {% data variables.product.prodname_vscode %}выберите {% octicon "gear" aria-label="The gear icon" %} и щелкните **Включить синхронизацию параметров...**. В появившемся диалоговом окне выберите параметры, которые нужно синхронизировать.

![Параметр синхронизации параметров в меню управления](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

Дополнительные сведения см. в [руководстве по синхронизации параметров](https://code.visualstudio.com/docs/editor/settings-sync) в документации по {% data variables.product.prodname_vscode_shortname %}.

## Файлы с точкой

Файлы с точкой — это файлы и папки в системах Unix, которые начинаются с `.`. Они служат для управления конфигурациями приложений и оболочки в системе. Хранить файл с точкой и управлять им можно в репозитории на сайте {% data variables.product.prodname_dotcom %}. Рекомендации и учебники по включению в репозиторий файлов с точкой см. в статье, посвященной [файлам с точкой в GitHub](https://dotfiles.github.io/).

Репозиторий файлов с точкой может включать псевдонимы оболочки и настройки, любые инструменты, которые требуется установить, или любую другую персонализацию пространства codespace, которую вы хотите сделать.

Вы можете настроить {% data variables.product.prodname_github_codespaces %} для использования файлов точек из любого репозитория, которым вы владеете, выбрав этот репозиторий в [личных параметрах {% data variables.product.prodname_github_codespaces %}](https://github.com/settings/codespaces).

При создании новой среды codespace {% data variables.product.prodname_dotcom %} клонирует выбранный репозиторий файлов с точкой в среду codespace и выполняет поиск одного из следующих файлов, чтобы настроить среду.

* _install.sh_
* _install_
* _bootstrap.sh_
* _bootstrap_
* _script/bootstrap_
* _setup.sh_
* _setup_
* _script/setup_

Если ни один из этих файлов не найден, для всех файлов или папок в выбранном репозитории файлов с точкой, которые начинаются с `.`, будут созданы символические ссылки на каталог `~` или `$HOME` пространства codespace.

Любые изменения в выбранном репозитории файлов с точкой будут применяться только к каждому новому пространству codespace и не будут влиять на существующее пространство codespace.

{% note %}

**Примечание:** В настоящее время {% data variables.product.prodname_codespaces %} не поддерживает персонализацию параметров уровня пользователя для {% data variables.product.prodname_vscode_shortname %} в репозитории `dotfiles` . Вы можете задать параметры по умолчанию Рабочая область и Удаленная среда [Codespaces] для определенного проекта в репозитории проекта. Дополнительные сведения см. в статье [Общие сведения о контейнерах разработки](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration).

{% endnote %}

### Включение репозитория файлов с точкой для{% data variables.product.prodname_codespaces %}

Вы можете использовать выбранный репозиторий файлов точек для персонализации среды {% data variables.product.prodname_github_codespaces %}. Выбрав репозиторий файлов с точкой, вы можете добавить в него скрипты, настройки и конфигурации. Затем необходимо включить файлы точек на личной странице параметров {% data variables.product.prodname_github_codespaces %}.

{% warning %}

**Предупреждение.** Файлы с точкой могут выполнять произвольные скрипты, которые могут содержать непредвиденный или вредоносный код. Перед установкой репозитория файлов с точкой рекомендуется проверять скрипты, чтобы убедиться, что они не выполняют никаких непредвиденных действий.

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. В разделе "Файлы точек" выберите **Автоматическая установка файлов точек** , чтобы {% data variables.product.prodname_github_codespaces %} автоматически устанавливал файлы точек в каждое новое пространство кода, которое вы создаете.
   ![Установка файлов с точкой](/assets/images/help/codespaces/install-custom-dotfiles.png)
2. Выберите репозиторий, из которого нужно установить файлы с точкой.
   ![Выбор репозитория файлов с точкой](/assets/images/help/codespaces/select-dotfiles-repo.png)

Можно добавить в репозиторий файлов с точкой дополнительные скрипты, параметры, файлы конфигурации или изменить существующие файлы при желании. Изменения параметров будут приняты только новыми пространствами codespace.

Если в codespace не удается получить параметры конфигурации из файлов точек, см. [статью Устранение неполадок с файлами точек для {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-dotfiles-for-codespaces).

## Другие доступные параметры

Вы также можете персонализировать {% data variables.product.prodname_github_codespaces %} с помощью [дополнительных параметров в личных параметрах](https://github.com/settings/codespaces):

- Сведения о включении проверки GPG см. в разделе [Управление проверкой GPG для {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces).
- Сведения о настройке редактора см. в разделе [Настройка редактора по умолчанию для {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces).
- Сведения о том, как долго codespace может оставаться неиспользуемой до автоматической остановки, см. в разделе [Настройка периода ожидания для {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces).
- Чтобы задать период хранения неиспользуемых codespace, см. статью [Настройка автоматического удаления codespace](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces).
- Сведения о настройке региона по умолчанию см. в разделе [Настройка региона по умолчанию для {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces).

## Дополнительные материалы

* [Создание репозитория](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)
* "[Подробное изучение {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive#personalizing-your-codespace-with-extensions-or-plugins)"
