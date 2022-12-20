---
title: Настройка региона по умолчанию для Codespaces
shortTitle: Set the default region
intro: Вы можете задать регион по умолчанию на странице параметров профиля {% data variables.product.prodname_github_codespaces %} для настройки хранения данных.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
- /codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces
topics:
- Codespaces
type: how_to
ms.openlocfilehash: 48d2838060953b5718eda19748f72244a06941dd
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "146688968"
---
Можно вручную выбрать регион, в который будут создаваться codespace, что позволяет соответствовать строгим требованиям к безопасности и соответствию. По умолчанию регион задается автоматически в зависимости от местоположения.

## <a name="setting-your-default-region"></a>Настройка региона по умолчанию

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. В разделе "Регион" выберите нужный параметр.
2. Если вы выбрали "Задать вручную", выберите регион в раскрывающемся списке.
   ![Выбор региона](/assets/images/help/codespaces/select-default-region.png)
