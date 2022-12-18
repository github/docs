---
title: Персонализация Codespaces для вашей учетной записи
shortTitle: Personalize your codespaces
intro: Вы можете персонализировать {% data variables.product.prodname_codespaces %} с помощью репозитория `dotfiles` для {% data variables.product.product_name %} или с помощью синхронизации параметров.
redirect_from:
- /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
- /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
- /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Set up
- Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 2c136318f3eff0a8caed8900520b8eb8a7772add
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "146681352"
---
## <a name="about-personalizing--data-variablesproductprodname_codespaces-"></a>Сведения о персонализации {% data variables.product.prodname_codespaces %}

При использовании любой среды разработки важным шагом является настройка параметров и инструментов в соответствии с вашими предпочтениями и рабочими процессами. {% data variables.product.prodname_codespaces %} позволяет использовать два основных способа персонализации пространств codespace.

- [Синхронизация параметров](#settings-sync) — вы можете использовать одинаковые параметры {% data variables.product.prodname_vscode %} в {% data variables.product.prodname_codespaces %} и других экземплярах {% data variables.product.prodname_vscode %}.
- [Файлы с точкой](#dotfiles) — вы можете использовать репозиторий `dotfiles` для указания скриптов, настроек оболочки и других конфигураций.

Персонализация {% data variables.product.prodname_codespaces %} применяется к любому создаваемому пространству codespace.

Обслуживающие проект также могут определить конфигурацию по умолчанию, которая применяется к каждому пространству codespace для репозитория, созданному любым пользователем. Дополнительные сведения см. в разделе [Настройка {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project) для проекта.

## <a name="settings-sync"></a>Синхронизация параметров

С помощью синхронизации параметров можно использовать одинаковые параметры, сочетания клавиш, фрагменты кода, расширения и состояние пользовательского интерфейса на различных компьютерах и экземплярах {% data variables.product.prodname_vscode %}.

Чтобы включить синхронизацию параметров, в левом нижнем углу панели действий выберите {% octicon "gear" aria-label="The gear icon" %} и нажмите **Включить синхронизацию параметров**. В появившемся диалоговом окне выберите параметры, которые нужно синхронизировать.

![Параметр синхронизации параметров в меню управления](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

Дополнительные сведения см. в разделе [Руководство по синхронизации параметров](https://code.visualstudio.com/docs/editor/settings-sync) в документации по {% data variables.product.prodname_vscode %}.

## <a name="dotfiles"></a>Файлы с точкой

Файлы с точкой — это файлы и папки в системах Unix, которые начинаются с `.`. Они служат для управления конфигурациями приложений и оболочки в системе. Хранить файл с точкой и управлять им можно в репозитории на сайте {% data variables.product.prodname_dotcom %}. Рекомендации и учебники по включению в репозиторий файлов с точкой см. в статье, посвященной [файлам с точкой в GitHub](https://dotfiles.github.io/).

Репозиторий файлов с точкой может включать псевдонимы оболочки и настройки, любые инструменты, которые требуется установить, или любую другую персонализацию пространства codespace, которую вы хотите сделать.

Вы можете настроить {% data variables.product.prodname_codespaces %} для использования файлов с точкой из любого репозитория, которым владеете, выбрав этот репозиторий в [личных настройках {% data variables.product.prodname_codespaces %}](https://github.com/settings/codespaces).

При создании нового пространства codespace {% data variables.product.prodname_dotcom %} клонирует выбранный репозиторий в среду codespace и выполняет поиск одного из следующих файлов, чтобы настроить среду.

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

**Примечание.** В настоящее время {% data variables.product.prodname_codespaces %} не поддерживает персонализацию параметров _Пользователь_ для редактора {% data variables.product.prodname_vscode %} в репозитории `dotfiles`. Вы можете задать параметры по умолчанию _Рабочая область_ и _Удаленная среда [Codespaces]_ для определенного проекта в репозитории проекта. Дополнительные сведения см. в статье [Общие сведения о контейнерах разработки](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration).

{% endnote %}

### <a name="enabling-your-dotfiles-repository-for--data-variablesproductprodname_codespaces-"></a>Включение репозитория файлов с точкой для{% data variables.product.prodname_codespaces %}

Вы можете использовать выбранный репозиторий файлов с точкой для персонализации среды {% data variables.product.prodname_codespaces %}. Выбрав репозиторий файлов с точкой, вы можете добавить в него скрипты, настройки и конфигурации. Затем необходимо включить файлы с точкой на странице личных параметров {% data variables.product.prodname_codespaces %}.

{% warning %}

**Предупреждение.** Файлы с точкой могут выполнять произвольные скрипты, которые могут содержать непредвиденный или вредоносный код. Перед установкой репозитория файлов с точкой рекомендуется проверять скрипты, чтобы убедиться, что они не выполняют никаких непредвиденных действий.

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. В разделе "Файлы с точкой" выберите **Автоматически устанавливать файлы с точкой**, чтобы {% data variables.product.prodname_codespaces %} автоматически устанавливал файлы с точкой в каждое создаваемое пространство codespace.
   ![Установка файлов с точкой](/assets/images/help/codespaces/install-custom-dotfiles.png)
2. Выберите репозиторий, из которого нужно установить файлы с точкой.
   ![Выбор репозитория файлов с точкой](/assets/images/help/codespaces/select-dotfiles-repo.png)

Можно добавить в репозиторий файлов с точкой дополнительные скрипты, параметры, файлы конфигурации или изменить существующие файлы при желании. Изменения параметров будут приняты только новыми пространствами codespace.

Если пространству codespace не удается получить параметры конфигурации из файлов с точкой, обратитесь к разделу [Устранение неполадок файлов с точкой для {% data variables.product.prodname_codespaces %}](/codespaces/troubleshooting/troubleshooting-dotfiles-for-codespaces).

## <a name="other-available-settings"></a>Другие доступные параметры

Вы также можете персонализировать {% data variables.product.prodname_codespaces %} с помощью дополнительных [параметров {% data variables.product.prodname_codespaces %}](https://github.com/settings/codespaces):

- Сведения о настройке региона по умолчанию см. в разделе [Настройка региона по умолчанию для {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces).
- Сведения о настройке редактора см. в разделе [Настройка редактора по умолчанию для {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces).
- Сведения о добавлении зашифрованных секретов см. в разделе [Управление зашифрованными секретами для {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces).
- Сведения о включении проверки GPG см. в разделе [Управление проверкой GPG для {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces).
- Чтобы разрешить пространству codespace доступ к другим репозиториям, см. раздел [Управление доступом и безопасностью для {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).

## <a name="further-reading"></a>Дополнительные материалы

* [Создание репозитория](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)
