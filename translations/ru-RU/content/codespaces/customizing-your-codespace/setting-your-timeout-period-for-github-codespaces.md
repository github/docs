---
title: Настройка периода ожидания для GitHub Codespaces
shortTitle: Set the timeout
intro: 'Вы можете задать время ожидания по умолчанию для {% data variables.product.prodname_github_codespaces %} на странице личных параметров.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
redirect_from:
  - /codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces
ms.openlocfilehash: 6ca559fefddc34eb6de0441d17344ff8054db509
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159930'
---
## Сведения об истечении времени ожидания простоя

Пространство кода перестанет работать после некоторого периода бездействия. По умолчанию этот период составляет 30 минут, но вы можете указать более длительный или короткий период времени ожидания по умолчанию в личных параметрах {% data variables.product.prodname_dotcom %}. Обновленный параметр будет применяться ко всем новым пространствам кода, которые вы создаете, или к существующим codespace при следующем запуске. Вы также можете указать время ожидания при использовании {% data variables.product.prodname_cli %} для создания codespace.

{% warning %}

**Предупреждение**. Плата за использование вычислительных ресурсов Codespaces взимается за период активности codespace. Если вы не используете codespace, но оно остается работающим и еще не истекло время ожидания, вам будет выставлен счет за общее время активности codespace, независимо от того, использовали ли вы его. Дополнительные сведения см. в статье [Сведения о выставлении счетов за {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing).

{% endwarning %}

### Периоды ожидания для репозиториев, принадлежащих организации

Организации могут задать политику максимального времени ожидания простоя для codespace, созданных из некоторых или всех своих репозиториев. Если политика организации устанавливает максимальное время ожидания, которое меньше заданного по умолчанию времени ожидания, вместо вашего параметра будет использоваться время ожидания организации. Вы получите уведомление об этом после создания codespace. Дополнительные сведения см. в разделе [Ограничение тайм-аута простоя](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period).

{% webui %}

## Настройка времени ожидания по умолчанию

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. В разделе "Тайм-аут простоя по умолчанию" введите нужное время и нажмите кнопку **Сохранить**. Время должно быть в пределах от 5 до 240 минут (4 часов).
   ![Выбор времени ожидания](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## Установка времени ожидания для codespace

{% data reusables.cli.cli-learn-more %}

Чтобы задать значение времени ожидания при создании пространства кода, используйте аргумент `idle-timeout` с подкомандой `codespace create`. Укажите время в минутах, а затем `m`. Время должно быть в пределах от 5 до 240 минут (4 часов).

```shell
gh codespace create --idle-timeout 90m
```

Если вы не указываете время ожидания при создании пространства кода, будет использоваться время ожидания по умолчанию. Сведения о настройке времени ожидания по умолчанию см. на вкладке "Веб-браузер" на этой странице. В настоящее время вы не можете указывать время ожидания по умолчанию с помощью {% data variables.product.prodname_cli %}.

{% endcli %}

{% vscode %}

## Установка времени ожидания

Вы можете задать время ожидания по умолчанию в веб-браузере на {% data variables.product.prodname_dotcom_the_website %}. Кроме того, если вы используете {% data variables.product.prodname_cli %} для создания codespace, можно задать время ожидания для этого конкретного codespace. Дополнительные сведения см. на соответствующей вкладке.

{% endvscode %}
