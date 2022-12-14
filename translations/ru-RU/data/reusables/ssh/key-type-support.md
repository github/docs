---
ms.openlocfilehash: efa96c86f8e6393265a4052e0ce6d650a21805b4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107344"
---
{% ifversion fpt or ghec %} {% note %}

**Примечание.** {% data variables.product.company_short %} улучшили безопасность за счет удаления старых небезопасных типов ключей 15 марта 2022 г.

По состоянию на эту дату ключи DSA (`ssh-dss`) больше не поддерживаются. Нельзя добавить новые ключи DSA в личную учетную запись на {% данных variables.location.product_location %}.

Ключи RSA (`ssh-rsa`) с `valid_after` до 2 ноября 2021 г. могут продолжать использовать любой алгоритм подписи. Ключи RSA, созданные после этой даты, должны использовать алгоритм подписи SHA-2. Для использования сигнатур SHA-2 может потребоваться обновить некоторые старые клиенты.

{% endnote %}

{% elsif ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

{% note %}

**Примечание.** По умолчанию, начиная с {% data variables.product.product_name %} версии 3.6 и более поздних версий, по состоянию на 0:00 UTC 1 августа 2022 г. подключение по протоколу SSH, удовлетворяющее **обоим** следующим условиям, будет завершено сбоем.

<br/>

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

{% data variables.product.product_name %} версии 3.6 и более поздних версий также не поддерживает SSH-подключения, использующие шифры DSA, HMAC-SHA-1 или CBC. Ключи RSA SSH, отправленные до даты прекращения, могут по-прежнему проходить проверку подлинности с помощью хэш-функции SHA-1, пока ключ остается действительным. Дополнительные сведения о поиске используемой версии {% data variables.product.product_name %} см. в разделе [Сведения о версиях {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server).

Администратор сайта может настроить дату прекращения подключений с помощью RSA-SHA-1 и заблокировать все подключения с помощью RSA-SHA-1. Для получения дополнительных сведений обратитесь к администратору сайта или к разделу [Настройка SSH-подключений к экземпляру](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance).

{% endnote %}

{% endif %}
