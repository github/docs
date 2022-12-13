---
title: Управление выставлением счетов для Codespaces в организации
shortTitle: Manage billing
intro: Вы можете проверить потребление {% data variables.product.prodname_codespaces %} и задать ограничения использования.
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Billing
ms.openlocfilehash: a5cc1d61c560c534dc2bdf5a543097e49b336478
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "145149727"
---
## <a name="overview"></a>Обзор

Сведения о расценках на {% data variables.product.prodname_codespaces %} см. в разделе [Расценки на {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing).

{% data reusables.codespaces.codespaces-billing %}

- Как владелец организации или менеджер по выставлению счетов вы можете управлять выставлением счетов на {% data variables.product.prodname_codespaces %} для вашей организации: [Сведения о выставлении счетов на Codespaces](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces).

- Для пользователей существует руководство, в котором объясняется, как работает выставление счетов: [Общие сведения о выставлении счетов на Codespaces](/codespaces/codespaces-reference/understanding-billing-for-codespaces).

## <a name="usage-limits"></a>Ограничения использования

Вы можете установить ограничение на использование кодовых пространств в организации или репозитории. Это ограничение применяется к использованию вычислительных ресурсов и хранилищ для {% data variables.product.prodname_codespaces %}:
 
- **Минуты вычислений:** использование вычислений рассчитывается по фактическому количеству минут, используемых всеми экземплярами {% data variables.product.prodname_codespaces %} во время их активности. Результаты передаются в службу выставления счетов ежедневно, а счета выставляются ежемесячно. Вы можете установить предельную сумму расходов на использование {% data variables.product.prodname_codespaces %} в вашей организации. Дополнительные сведения см. в статье [Сведения о предельных суммах расходов для Codespaces](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces).

- **Использование хранилища:** в контексте выставления счетов на {% data variables.product.prodname_codespaces %} сюда входят все хранилища, используемые всеми кодовыми пространствами в вашей учетной записи. Учитывается все, что используют кодовые пространства, включая клонированные репозитории, файлы конфигурации, расширения и т. д. Результаты передаются в службу выставления счетов ежедневно, а счета выставляются ежемесячно. В конце месяца {% data variables.product.prodname_dotcom %} округляет размер хранилища до ближайшего целого мегабайта. Чтобы проверить, сколько минут вычислений и гигабайт хранилища было использовано {% data variables.product.prodname_codespaces %}, см. раздел [Просмотр использования Codespaces](/billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage).

## <a name="disabling-or-limiting--data-variablesproductprodname_codespaces-"></a>Отключение или ограничение {% data variables.product.prodname_codespaces %}

Использование {% data variables.product.prodname_codespaces %} в организации или репозитории можно отключить. Дополнительные сведения см. в разделе [Управление доступом к репозиторию для кодовых пространств организации](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces).

Вы также можете разрешить использовать {% data variables.product.prodname_codespaces %} только определенным пользователям. Дополнительные сведения см. в разделе [Управление разрешениями пользователей для вашей организации](/codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization).

Вы можете ограничить выбор типов компьютеров, доступных для принадлежащих вашей организации репозиториев. Это позволяет запретить пользователям использовать для кодовых пространств компьютеры, потребляющие слишком много ресурсов. Дополнительные сведения см. в разделе [Ограничение доступа по типам компьютеров](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types).

## <a name="deleting-unused-codespaces"></a>Удаление неиспользуемых кодовых пространств

Пользователи могут вручную удалить свои codespace в https://github.com/codespaces, а также в {% data variables.product.prodname_vscode %}. Чтобы уменьшить размер codespace, пользователи могут вручную удалить файлы с помощью терминала или в {% data variables.product.prodname_vscode_shortname %}. 

{% note %}

**Примечание.** Удалить среду codespace может только пользователь, который ее создал. В настоящее время владельцы организации не могут удалять codespace, созданные в организации.

{% endnote %}
