---
title: Управление зашифрованными секретами для codespace
intro: 'Вы можете хранить конфиденциальную информацию, например маркеры, которые нужны вам в пространствах кода, с помощью переменных среды.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces
  - /codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
  - Secret store
shortTitle: Encrypted secrets
ms.openlocfilehash: a1ea1c87581feccd737314db0d7bf237f983357a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192812'
---
## Сведения о зашифрованных секретах для {% data variables.product.prodname_github_codespaces %}

Можно добавить зашифрованные секреты в личную учетную запись, которую вы хотите использовать в codespace. Например, может потребоваться сохранить и иметь доступ к следующей конфиденциальной информации в виде зашифрованных секретов.

- Маркеры доступа к облачным службам
- Субъекты-службы
- Идентификаторы подписок
- Учетные данные для частного реестра образов (дополнительные сведения см. в разделе [Предоставление codespace доступа к частному реестру](/codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-registry))

Можно выбрать какие репозитории должны иметь доступ к каждому секрету. Затем можно использовать секрет в любом codespace, создаваемом для репозитория с доступом к секрету. Чтобы поделиться секретом с codespace, созданным на основе шаблона, необходимо опубликовать codespace в репозитории на {% data variables.product.prodname_dotcom %}, а затем предоставить репозиторию доступ к секрету.

{% data reusables.codespaces.secrets-on-start %}

### Именование секретов

{% data reusables.codespaces.secrets-naming %} Например, секрет, созданный на уровне репозитория, должен иметь уникальное имя в этом репозитории.

  {% data reusables.codespaces.secret-precedence %}

### Ограничения для секретов

Можно хранить до 100 секретов для {% data variables.product.prodname_github_codespaces %}.

Размер секретов ограничен 64 КБ.

## Добавление секрета

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Справа от "Секреты Codespaces" щелкните **Создать секрет**.
  ![Кнопка "Создать секрет"](/assets/images/help/settings/codespaces-new-secret-button.png)
1. В поле "Имя" введите имя секрета.
  ![Текстовое поле "Имя"](/assets/images/help/settings/codespaces-secret-name-field.png) {% data reusables.user-settings.codespaces-secret-value %} {% data reusables.user-settings.codespaces-secret-repository-access %}
1. Щелкните **Добавить секрет**.

## Изменение секрета

Можно обновить значение существующего секрета и изменить то, какие репозитории имеют доступ к секрету.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. В разделе "Секреты Codespaces", справа от секрета, который нужно изменить, щелкните **Обновить**.
  ![Кнопка "Обновить"](/assets/images/help/settings/codespaces-secret-update-button.png)
1. В разделе "Значение" щелкните **Ввести новое значение**.
  ![Ссылка "Ввести новое значение"](/assets/images/help/settings/codespaces-secret-update-value-text.png) {% data reusables.user-settings.codespaces-secret-value %} {% data reusables.user-settings.codespaces-secret-repository-access %}
1. При необходимости, чтобы удалить доступ секрета к репозиторию, отмените выбор репозитория.
  ![Флажок удаления доступа к репозиториям](/assets/images/help/settings/codespaces-secret-repository-checkboxes.png)
1. Нажмите кнопку **Сохранить изменения**.

## Удаление секрета

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. В разделе "Секреты Codespaces", справа от секрета, который нужно удалить, щелкните **Удалить**.
  ![Кнопка "Удалить"](/assets/images/help/settings/codespaces-secret-delete-button.png)
1. Ознакомьтесь с предупреждением и нажмите кнопку **ОК**.
  ![Подтверждение удаления секрета](/assets/images/help/settings/codespaces-secret-delete-warning.png)

## Использование секретов

Секрет экспортируется в пользовательский сеанс терминала в качестве переменной среды.

  ![Отображение значения экспортированного секрета в терминале](/assets/images/help/codespaces/exported-codespace-secret.png)

Можно использовать секреты в среде codespace после ее создания и запуска. Например, секрет можно использовать в следующих случаях:

* При запуске приложения из встроенного терминала или сеанса SSH.
* В скрипте жизненного цикла контейнера разработки, который запускается после запуска среды codespace. Дополнительные сведения о скриптах жизненного цикла контейнера разработки см. в [документации по контейнерам разработки](https://containers.dev/implementors/json_reference/#lifecycle-scripts).

Секреты Codespace нельзя использовать:

* Во время сборки codespace (то есть в dockerfile или пользовательской точке входа).
* В компоненте контейнера разработки. Дополнительные сведения см. в свойстве `features` [в спецификации контейнеров разработки](https://containers.dev/implementors/json_reference/#general-properties) на containers.dev.

## Дополнительные материалы

- [Управление зашифрованными секретами репозитория и организации для {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)
