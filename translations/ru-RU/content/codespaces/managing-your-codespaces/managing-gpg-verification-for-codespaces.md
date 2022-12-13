---
title: Управление проверкой GPG для Codespaces
intro: Вы можете разрешить {% data variables.product.company_short %} автоматически использовать GPG для подписывания фиксаций, внесенных в codespaces, чтобы другие пользователи могли быть уверены, что изменения поступают из надежного источника.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Developer
- Security
redirect_from:
- /github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces
- /codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces
shortTitle: GPG verification
ms.openlocfilehash: 588082ccd4d861afd8fc78b3b56ae22a06ba72d9
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "145119827"
---
После включения проверки GPG {% data variables.product.company_short %} автоматически подписывает ваши фиксации в {% data variables.product.prodname_codespaces %}, при этом фиксации будут иметь проверенный статус в {% data variables.product.product_name %}. По умолчанию проверка GPG для создаваемых вами сред codespace отключена. Вы можете разрешить проверку GPG для всех или отдельных репозиториев. Включайте проверку GPG только для доверенных репозиториев. Дополнительные сведения о подписанных {% data variables.product.product_name %} фиксациях см. в разделе [Сведения о проверке подписи фиксации](/github/authenticating-to-github/about-commit-signature-verification).

После включения проверки GPG она будет немедленно применена для всех сред codespace.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. В разделе "GPG verification" (Проверка GPG) выберите нужный параметр для проверки GPG.
  ![Переключатели для управления проверкой GPG](/assets/images/help/settings/codespaces-gpg-verification-radio-buttons.png) 
1. Если вы выбрали значение "Selected repositories" (Выбранные репозитории), выберите раскрывающееся меню, а затем укажите репозиторий, для которого нужно включить проверку GPG. Повторите эту процедуру для всех репозиториев, для которых нужно включить проверку GPG.
  ![Раскрывающееся меню "Selected repositories" (Выбранные репозитории)](/assets/images/help/settings/codespaces-gpg-verification-repository-drop-down.png) 


{% note %}

**Примечание**. После включения проверки GPG для {% data variables.product.prodname_codespaces %} необходимо также добавить `-S` к каждой фиксации, чтобы она была подписана. Для этого убедитесь, что в разделе "Параметры" {% data variables.product.prodname_vscode %}, включен параметр "Git: Enable Commit Signing" (Git: включить подписывание фиксаций).

{% endnote %}
