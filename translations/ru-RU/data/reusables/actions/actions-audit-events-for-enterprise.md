---
ms.openlocfilehash: ed7e94a18edf6d5c55ba6fb12c5f09236a9f2fe5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114795"
---
| Действие | Описание
|------------------|-------------------
| `remove_self_hosted_runner` | Активируется при удалении средства выполнения тестов локального размещения.
| `register_self_hosted_runner` | Активируется при регистрации нового локального средства выполнения тестов. Дополнительные сведения см. в разделе [Добавление локальных средств выполнения](/actions/hosting-your-own-runners/adding-self-hosted-runners).
| `runner_group_created` | Активируется при создании группы средства выполнения тестов локального размещения. Дополнительную информацию см. в разделе [Сведения о группах локальных средств выполнения](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#about-self-hosted-runner-groups).
| `runner_group_removed` | Активируется при удалении группы средства выполнения тестов локального размещения. Дополнительные сведения см. в разделе [Удаление средства выполнения тестов локального размещения в группу](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group).
| `runner_group_runner_removed` | Активируется при использовании REST API для удаления средства выполнения тестов локального размещения из группы.
| `runner_group_runners_added` | Активируется при добавлении средства выполнения тестов локального размещения в группу. Дополнительные сведения см. в разделе [Перемещение локального средства выполнения в группу](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).
| `runner_group_runners_updated` | Активируется при обновлении списка участников группы средства выполнения тестов. Дополнительные сведения см. в разделе [Настройка локальных средств выполнения в группе для организации](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization).
| `runner_group_updated` | Активируется при изменении конфигурации группы средства выполнения тестов локального размещения. Дополнительные сведения см. в разделе [Изменение политики доступа для группы средства выполнения тестов локального размещения](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group).
| `self_hosted_runner_updated` | Активируется при обновлении приложения средства выполнения тестов. Можно просматривать с помощью REST API и пользовательского интерфейса; не отображается в экспорте JSON/CSV. Дополнительные сведения см. в разделе [Локальные средства выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners).{% ifversion fpt or ghec %}
| `self_hosted_runner_online` | Активируется при запуске приложения средства выполнения. Можно просматривать только с помощью REST API; не отображается в пользовательском интерфейсе или экспорте JSON/CSV. Дополнительные сведения см. в разделе [Проверка статуса средства выполнения тестов локального размещения](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).
| `self_hosted_runner_offline` | Активируется при остановке приложения средства выполнения тестов. Можно просматривать только с помощью REST API; не отображается в пользовательском интерфейсе или экспорте JSON/CSV. Дополнительные сведения см. в разделе [Проверка состояния локального средства выполнения](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).{% endif %}
