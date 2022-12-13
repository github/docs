---
title: Управление зашифрованными секретами для Dependabot
intro: 'Вы можете хранить конфиденциальную информацию, например, пароли и маркеры доступа, как зашифрованные секреты, а затем ссылаться на них в файле конфигурации {% data variables.product.prodname_dependabot %}.'
redirect_from:
  - /github/administering-a-repository/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Secret store
  - Repositories
  - Dependencies
shortTitle: Manage encrypted secrets
ms.openlocfilehash: 94b9e4c1945385ee9abca9cc548b159231e212c3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106376'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

## Сведения о зашифрованных секретах для {% data variables.product.prodname_dependabot %}

Секреты {% data variables.product.prodname_dependabot %} — это зашифрованные учетные данные, создаваемые на уровне организации или репозитория.
При добавлении секрета на уровне организации можно указать, какие репозитории могут получать к нему доступ. С помощью секретов можно разрешить {% data variables.product.prodname_dependabot %} обновлять зависимости, расположенные в частных реестрах пакетов. Добавленный секрет шифруется до поступления в {% data variables.product.prodname_dotcom %} и остается зашифрованным до тех пор, пока {% data variables.product.prodname_dependabot %} не воспользуется им для доступа к частному реестру пакетов.

После добавления секрета {% data variables.product.prodname_dependabot %} его можно указать в файле конфигурации _dependabot.yml_ следующим образом: {% raw %}`${{secrets.NAME}}`{% endraw %}, где "NAME" — это имя, выбранное для секрета. Пример. 

{% raw %}
```yaml
password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

Дополнительные сведения см. в разделе [Параметры конфигурации для файла dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries).

### Присвоение имен секретам

Имя секрета {% data variables.product.prodname_dependabot %}:
* может содержать только буквы и цифры (`[A-Z]`, `[0-9]`) или символы подчеркивания (`_`); Пробелы недопустимы. Если ввести строчные буквы, они будут изменены на прописные.
* не должно начинаться с префикса `GITHUB_`;
* не должно начинаться с цифры.

## Добавление секрета репозитория для {% data variables.product.prodname_dependabot %}

{% data reusables.actions.permissions-statement-secrets-repository %}

{% данных reusables.repositories.navigate-to-repo %} {% данных reusables.repositories.sidebar-settings %} {% данных для повторного использования.dependabot.sidebar-secret %}
1. Выберите **Новый секрет репозитория**.
1. Введите имя секрета в поле ввода **Имя**.
1. Введите значение секрета.
1. Щелкните **Добавить секрет**.

   Имя секрета отображается на странице секретов Dependabot. Можно нажать кнопку **Обновить**, чтобы изменить значение секрета. Можно нажать кнопку **Удалить**, чтобы удалить секрет.

   ![Обновление или удаление секрета репозитория](/assets/images/help/dependabot/update-remove-repo-secret.png)

## Добавление секрета организации для {% data variables.product.prodname_dependabot %}

При создании секрета в организации можно использовать политику, чтобы ограничить для репозиториев доступ к секрету. Например, можно предоставить доступ ко всем репозиториям или ограничить доступ только частными репозиториями или указанным списком репозиториев.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% данных reusables.organizations.navigate-to-org %} {% данных reusables.organizations.org_settings %} {% данных для повторного использования.dependabot.sidebar-secret %}
1. Щелкните **Создать секрет организации**.
1. Введите имя секрета в поле ввода **Имя**.
1. Введите **значение** для своего секрета.
1. В раскрывающемся списке **Доступ к репозиторию** выберите политику доступа.
1. Если вы выбрали вариант **Выбранные репозитории**:

   * Щелкните {% octicon "gear" aria-label="The Gear icon" %}.
   * Выберите репозитории, которые могут получать доступ к этому секрету. 
     ![Выбор репозиториев для этого секрета](/assets/images/help/dependabot/secret-repository-access.png)
   * Нажмите **Обновить выбор**.

1. Щелкните **Добавить секрет**.

   Имя секрета отображается на странице секретов Dependabot. Можно нажать кнопку **Обновить**, чтобы изменить значение секрета или политику доступа. Можно нажать кнопку **Удалить**, чтобы удалить секрет.

   ![Обновление или удаление секрета организации](/assets/images/help/dependabot/update-remove-org-secret.png)
   
## Добавление {% data variables.product.prodname_dependabot %} в список разрешенных IP-адресов реестров

Если для частного реестра настроен список разрешенных IP-адресов, вы можете найти IP-адреса, используемые {% data variables.product.prodname_dependabot %} для доступа к реестру в конечной точке API Meta, в разделе `dependabot`. Дополнительные сведения см. в [этой статье](/rest/reference/meta).
