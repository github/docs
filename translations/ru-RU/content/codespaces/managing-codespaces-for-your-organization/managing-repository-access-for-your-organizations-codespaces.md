---
title: Управление доступом к репозиторию для кодовых пространств организации
shortTitle: Repository access
intro: 'Вы можете управлять репозиториями в организации, к которым у {% data variables.product.prodname_github_codespaces %} есть доступ.'
permissions: 'To manage access and security for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Security
  - Administrator
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces
  - /github/developing-online-with-codespaces/managing-access-and-security-for-codespaces
  - /codespaces/working-with-your-codespace/managing-access-and-security-for-codespaces
ms.openlocfilehash: 9fdec24104a61170977053195446db0b4cf0a62f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160232'
---
{% warning %}

**Примечание об устаревании.** Описанные ниже параметры доступа и безопасности больше не рекомендуются и приводятся исключительно в ознакомительных целях. Чтобы включить расширенный доступ к другим репозиториям, добавьте запрошенные разрешения в файл конфигурации `devcontainer.json`. Дополнительные сведения см. в разделе [Управление доступом к другим репозиториям в кодовом пространстве](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces).

{% endwarning %}

По умолчанию кодовому пространству доступен только тот репозиторий, в котором оно было создано. При включении доступа и безопасности для репозитория, принадлежащего вашей организации, все кодовые пространства, созданные для этого репозитория, также получают разрешения на чтение в отношении всех остальных репозиториев, принадлежащих организации, а создатель кодового пространства — разрешения на доступ. Доступ к репозиториям для кодового пространства можно ограничить либо репозиторием, в котором было создано кодовое пространство, либо отдельными репозиториями. Включайте доступ и безопасность только для тех репозиториев, которым вы доверяете.

Сведения о том, какие пользователи в организации могут использовать {% data variables.product.prodname_github_codespaces %}, см. в разделе [Включение {% data variables.product.prodname_github_codespaces %} для вашей организации](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#enable-codespaces-for-users-in-your-organization).

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. В разделе "Доступ и безопасность" выберите параметр, подходящий для вашей организации.
  ![Переключатели для управления доверенными репозиториями](/assets/images/help/settings/codespaces-org-access-and-security-radio-buttons.png)
1. Если вы выбрали "Выбранные репозитории", выберите раскрывающееся меню, а затем щелкните репозиторий, чтобы разрешить репозиториям codespace доступ к другим репозиториям, принадлежащим вашей организации. Повторите эти действия для всех репозиториев, кодовым пространствам которых необходимо предоставить доступ к другим репозиториям.
    ![Раскрывающееся меню "Выбранные репозитории"](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

## Дополнительные материалы

- [Управление доступом к репозиторию для кодовых пространств](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)
