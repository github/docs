---
title: Настройка периода ожидания для Codespaces
shortTitle: Set the timeout
intro: Время ожидания по умолчанию можно задать для {% data variables.product.prodname_codespaces %} на странице личных параметров.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
type: how_to
ms.openlocfilehash: 3a4e009b5494b96e6daa6736a441a5fba9594857
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "147064421"
---
Пространство кода перестанет работать после некоторого периода бездействия. Вы можете задавать длительность этого периода ожидания. Обновленный параметр будет действовать для всех новых создаваемых пространств кода.

В некоторых организациях может быть установлена политика максимального тайм-аута простоя. Если политика организации устанавливает максимальное время ожидания, которое меньше заданного вами времени ожидания по умолчанию, вместо вашего параметра будет использоваться время ожидания организации, и вы получите уведомление об этом после создания пространства кода. Дополнительные сведения см. в разделе [Ограничение тайм-аута простоя](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period).

{% warning %}

**Предупреждение**. Плата за Codespaces взимается поминутно. Если время ожидания пространства кода еще не истекло, то плата за выполнение пространства кода взимается, даже если вы его не используете. Дополнительные сведения см. в разделе [Сведения о выставлении счетов для Codespaces](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing).

{% endwarning %}

{% webui %}

## <a name="setting-your-default-timeout-period"></a>Настройка времени ожидания по умолчанию

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. В разделе "Тайм-аут простоя по умолчанию" введите нужное время и нажмите кнопку **Сохранить**. Время должно быть в пределах от 5 до 240 минут (4 часов).
   ![Выбор времени ожидания](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## <a name="setting-the-timeout-period-for-a-codespace"></a>Установка времени ожидания для codespace

{% data reusables.cli.cli-learn-more %}

Чтобы задать значение времени ожидания при создании пространства кода, используйте аргумент `idle-timeout` с подкомандой `codespace create`. Укажите время в минутах, а затем `m`. Время должно быть в пределах от 5 до 240 минут (4 часов).

```shell
gh codespace create --idle-timeout 90m
```

Если вы не указываете время ожидания при создании пространства кода, будет использоваться время ожидания по умолчанию. Сведения о настройке времени ожидания по умолчанию см. на вкладке "Веб-браузер" на этой странице. В настоящее время вы не можете указывать время ожидания по умолчанию с помощью {% data variables.product.prodname_cli %}.

{% endcli %}

{% vscode %}

## <a name="setting-a-timeout-period"></a>Установка времени ожидания

Вы можете задать время ожидания по умолчанию в веб-браузере на {% data variables.product.prodname_dotcom_the_website %}. Кроме того, если вы используете {% data variables.product.prodname_cli %} для создания codespace, можно задать время ожидания для этого конкретного codespace. Дополнительные сведения см. на соответствующей вкладке.

{% endvscode %}
