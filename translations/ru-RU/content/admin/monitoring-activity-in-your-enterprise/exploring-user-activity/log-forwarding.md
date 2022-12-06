---
title: Пересылка журналов
intro: '{% data variables.product.product_name %} использует `syslog-ng` для переадресации {% ifversion ghes %}системных журналов{% elsif ghae %}Git{% endif %} и журналов приложений на заданный вами сервер.'
redirect_from:
  - /enterprise/admin/articles/log-forwarding
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
  - /admin/enterprise-management/log-forwarding
  - /admin/user-management/log-forwarding
  - /admin/user-management/monitoring-activity-in-your-enterprise/log-forwarding
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: 935c8f0221c4541d2801a5e705779efff3d34370
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145115219'
---
## Сведения о пересылке журналов

Поддерживается любая система сбора журналов, поддерживающая потоки журналов, аналогичных системным (например, [Logstash](http://logstash.net/) и [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports)).

При включении пересылки журналов необходимо передать сертификат ЦС для шифрования обмена данными между конечными точками системного журнала. Устройство и удаленный сервер системного журнала будут выполнять двусторонний обмен по протоколу SSL, каждый из которых предоставляет сертификат другому и проверяет полученный сертификат.

## Включение пересылки журналов

{% ifversion ghes %}
1. На странице параметров {% data variables.enterprise.management_console %} на левой боковой панели нажмите кнопку **Мониторинг**.
1. Выберите **Включить пересылку журналов**.
1. В поле **Адрес сервера** введите адрес сервера, на который требуется пересылать журналы. Вы можете указать несколько адресов через запятую.
1. В раскрывающемся меню "Протокол" выберите протокол, используемый для связи с сервером журналов. Протокол будет применяться ко всем указанным назначениям журналов.
1. При необходимости выберите **Включить TLS**. Рекомендуется включить TLS в соответствии с локальными политиками безопасности, особенно, если между устройством и любыми удаленными серверами журналов используются ненадежные сети. 
1. Чтобы зашифровать обмен данными между конечными точками системного журнала, нажмите **Выбрать файл** и выберите сертификат ЦС для удаленного сервера системного журнала. Необходимо отправить пакет ЦС, содержащий объединение сертификатов ЦС, участвующих в подписи сертификата удаленного сервера журналов. Будет проверяться вся цепочка сертификатов, которая должна завершиться в корневом сертификате. Дополнительные сведения см. статью [Параметров TLS в документации syslog-ng](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599).
{% elsif ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. В разделе {% octicon "gear" aria-label="The Settings gear" %} **Параметры** нажмите **Пересылка журналов**.
  ![Вкладка «Пересылка журналов»](/assets/images/enterprise/business-accounts/log-forwarding-tab.png)
1. На вкладке "Пересылка журналов" выберите **Включить пересылку журналов**.
  ![Флажок для включения пересылки журналов](/assets/images/enterprise/business-accounts/enable-log-forwarding-checkbox.png)
1. В поле "Адрес сервера" введите адрес сервера, на который нужно пересылать журналы.
  ![Поле адреса сервера](/assets/images/enterprise/business-accounts/server-address-field.png)
1. В раскрывающемся меню "Протокол" выберите протокол.
  ![Раскрывающееся меню «Протокол»](/assets/images/enterprise/business-accounts/protocol-drop-down-menu.png)
1. При необходимости, чтобы включить шифрование TLS между конечными точками системного журнала, выберите **Включить TLS**.
  ![Флажок для включения TLS](/assets/images/enterprise/business-accounts/enable-tls-checkbox.png)
1. В поле "Общедоступный сертификат" вставьте сертификат x509.
  ![Текстовое поле для общедоступного сертификата](/assets/images/enterprise/business-accounts/public-certificate-text-box.png)
1. Выберите команду **Сохранить**.
  ![Кнопка "Сохранить" для пересылки журналов](/assets/images/enterprise/business-accounts/save-button-log-forwarding.png) {% endif %}

{% ifversion ghes %}
## Устранение неполадок

При возникновении проблем с пересылкой журналов обратитесь в {% data variables.contact.contact_ent_support %} и приложите к сообщению электронной почты выходной файл из `http(s)://[hostname]/setup/diagnostics`.
{% endif %}
