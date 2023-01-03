---
title: Управление зашифрованными секретами для репозитория и организации в Codespaces
shortTitle: Encrypted secrets
intro: Зашифрованные секреты позволяют хранить конфиденциальную информацию в организации, репозитории или {% data variables.product.prodname_codespaces %}.
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage secrets for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
- Secret store
- Security
ms.openlocfilehash: 062b73c8559b700bdbd37a6b31da44403c2092f5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "145119896"
---
## <a name="about-secrets"></a>Сведения о секретах

Секреты — это зашифрованные переменные среды, которые вы создаете в организации или репозитории. Создаваемые секреты доступны для использования в {% data variables.product.prodname_codespaces %}. GitHub использует [запечатанный прямоугольник libsodium](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) для шифрования секретов перед тем, как они попадут в GitHub, и расшифровывает их только при использовании в кодовом пространстве.

Секреты уровня организации позволяют использовать секреты сразу в нескольких репозиториях и не создавать повторяющиеся секреты. Для управления тем, какие репозитории могут использовать секреты организации, можно использовать политики доступа. 

{% data reusables.codespaces.secrets-on-start %}

### <a name="naming-secrets"></a>Именование секретов

{% data reusables.codespaces.secrets-naming %} Например, секрет, созданный на уровне репозитория, должен иметь уникальное имя в этом репозитории, а секрет, созданный на уровне организации, — уникальное имя на уровне организации.

  {% data reusables.codespaces.secret-precedence %}

### <a name="limits-for-secrets"></a>Ограничения для секретов

Максимальное количество хранимых секретов — 100 на организацию и 100 на репозиторий.

Размер секретов ограничен 64 КБ.

## <a name="adding-secrets-for-a-repository"></a>Добавление секретов для репозитория

Чтобы создавать секреты для репозитория организации, нужен доступ администратора.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. В разделе "Безопасность" на боковой панели выберите **{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} Секреты**, а затем **{% data variables.product.prodname_codespaces %}** .
2. В верхней части страницы нажмите **Новый секрет репозитория**.
3. Введите имя секрета в поле ввода **Имя**.
4. Введите значение секрета.
5. Щелкните **Добавить секрет**.

## <a name="adding-secrets-for-an-organization"></a>Добавление секретов для организации

При создании секрета в организации можно использовать политику, чтобы ограничить для репозиториев доступ к секрету. Например, можно предоставить доступ ко всем репозиториям или ограничить доступ только частными репозиториями или указанным списком репозиториев.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %}
1. В разделе "Безопасность" на боковой панели выберите **{% octicon "key-asterisk" aria-label="The key-asterisk icon" %} Секреты**, а затем **{% data variables.product.prodname_codespaces %}** .
2. В верхней части страницы нажмите **Новый секрет организации**.
3. Введите имя секрета в поле ввода **Имя**.
4. Введите **значение** для своего секрета.
5. В раскрывающемся списке **Доступ к репозиторию** выберите политику доступа.
    ![Список доступа репозиториев с выбранными частными репозиториями](/assets/images/help/codespaces/secret-repository-access.png)
6. Щелкните **Добавить секрет**.

## <a name="reviewing-access-to-organization-level-secrets"></a>Проверка доступа к секретам на уровне организации

Вы можете проверить, какие политики доступа применяются к секрету в вашей организации.

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. Список секретов включает все настроенные разрешения и политики. Например: ![список секретов](/assets/images/help/settings/actions-org-secrets-list.png)
1. Для получения дополнительных сведений о настроенных разрешениях для каждого секрета щелкните **Обновить**.

## <a name="further-reading"></a>Дополнительные материалы

- [Управление зашифрованными секретами для кодовых пространств](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)
