---
ms.openlocfilehash: 52206649d45bd9d76bcc593adeffa47318a70880
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160171"
---
Если вы настроили шлюз JetBrains в качестве редактора по умолчанию, шлюз запустится автоматически при открытии пространства кода из {% data variables.product.prodname_dotcom_the_website %}. 

Если шлюз JetBrains не является редактором по умолчанию, вы по-прежнему можете открыть codespace в JetBrains, перейдя на страницу "Ваши codespaces" [в github.com/codespaces](https://github.com/codespaces) и щелкнув многоточие (...) справа от codespace, которое нужно открыть. Дополнительные сведения см. в разделе [Открытие существующего пространства кода](/codespaces/developing-in-codespaces/opening-an-existing-codespace?tool=webui).

Кроме того, можно открыть шлюз JetBrains и выбрать существующее пространство кода, как описано в следующей процедуре.

1. Откройте приложение шлюза JetBrains.
1. Щелкните **Подключиться к {% data variables.product.prodname_codespaces %}**.

   ![Снимок экрана: начальное представление шлюза JetBrains](/assets/images/help/codespaces/jetbrains-gateway-connect.png)

1. В списке "Ваши codespaces" щелкните пространство кода, с которым вы хотите работать.

   ![Снимок экрана: список codespace шлюза JetBrains](/assets/images/help/codespaces/jetbrains-gateway-codespaces.png)

1. В списке "Доступные среды разработки" щелкните интегрированную среду разработки JetBrains, которую вы хотите использовать. Шлюз запомнит ваш выбор при следующем подключении к codespace.

   ![Снимок экрана: список codespace шлюза JetBrains](/assets/images/help/codespaces/jetbrains-gateway-ides.png)

1. Нажмите кнопку **Соединить**.

   {% note %}

   **Примечание**. _Если вы используете брандмауэр:_ при первом подключении к удаленному ресурсу может быть предложено разрешить шлюзу JetBrains взаимодействовать по сети.

   {% endnote %}
