---
title: Управление проверкой GPG для GitHub Codespaces
intro: 'Вы можете разрешить {% data variables.product.company_short %} автоматически использовать GPG для подписывания фиксаций, внесенных в codespaces, чтобы другие пользователи могли быть уверены, что изменения поступают из надежного источника.'
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
  - /codespaces/managing-your-codespaces/managing-gpg-verification-for-codespaces
shortTitle: GPG verification
ms.openlocfilehash: ff83eba1720a2841747536ec04bfc0b3db055669
ms.sourcegitcommit: 47e03737d09bed84dfedb7be5924d893d34ea1a8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167104'
---
После включения проверки GPG {% data variables.product.company_short %} автоматически подписывает ваши фиксации в {% data variables.product.prodname_github_codespaces %}, при этом фиксации будут иметь проверенный статус в {% data variables.product.product_name %}. По умолчанию проверка GPG для создаваемых вами сред codespace отключена. Вы можете разрешить проверку GPG для всех или отдельных репозиториев. Включайте проверку GPG только для доверенных репозиториев. Дополнительные сведения о подписанных {% data variables.product.product_name %} фиксациях см. в разделе [Сведения о проверке подписи фиксации](/github/authenticating-to-github/about-commit-signature-verification).

{% data reusables.codespaces.gpg-in-active-codespaces %}

{% note %}

**Примечание:** Если вы связали репозиторий файлов точек с {% data variables.product.prodname_github_codespaces %}, конфигурация Git в файлах с точками может конфликтовать с конфигурацией, которая требуется {% data variables.product.prodname_github_codespaces %} для подписывания фиксаций. Дополнительные сведения см. в разделе [Устранение неполадок с проверкой GPG для {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-gpg-verification-for-github-codespaces).

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. В разделе "GPG verification" (Проверка GPG) выберите нужный параметр для проверки GPG.
  ![Переключатели для управления проверкой GPG](/assets/images/help/settings/codespaces-gpg-verification-radio-buttons.png) 
1. Если вы выбрали "Выбранные репозитории", выберите раскрывающееся меню, а затем выберите репозиторий, для которого требуется включить проверку GPG. Повторите эту процедуру для всех репозиториев, для которых нужно включить проверку GPG.
  ![Раскрывающееся меню "Выбранные репозитории"](/assets/images/help/settings/codespaces-gpg-verification-repository-drop-down.png) 


После включения проверки GPG для {% data variables.product.prodname_github_codespaces %} все фиксации подписываются по умолчанию в codespaces.
