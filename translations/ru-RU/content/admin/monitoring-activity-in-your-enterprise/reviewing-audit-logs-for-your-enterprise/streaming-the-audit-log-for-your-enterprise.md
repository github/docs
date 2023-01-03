---
title: Потоковая передача журнала аудита для предприятия
intro: 'Можно выполнять потоковую передачу аудита и данных событий Git из {% data variables.product.prodname_dotcom %} во внешнюю систему управления данными.'
miniTocMaxHeadingLevel: 3
versions:
  feature: audit-log-streaming
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - Organizations
shortTitle: Stream audit logs
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
  - /admin/user-management/managing-organizations-in-your-enterprise/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
permissions: Enterprise owners can configure audit log streaming.
ms.openlocfilehash: d8397a86be7e1d93bcd063b2713ca4c4f00a5386
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094044'
---
{% ifversion ghes %} {% note %}

**Примечание.** Потоковая передача журналов аудита в настоящее время доступна в бета-версии {% data variables.product.product_name %} и может быть изменена.

{% endnote %} {% endif %}

## Сведения о потоковой передаче журналов аудита

Чтобы обеспечить безопасность интеллектуальной собственности и соответствие требованиям вашей организации, можно использовать потоковую передачу для хранения копий данных журнала аудита и мониторинга: {% data reusables.audit_log.audited-data-list %}

Преимущества потоковой передачи данных аудита включают в себя следующее:

* **Исследование данных.** Вы можете изучить передаваемые потоком события с помощью предпочтительного средства для запроса больших объемов данных. Поток содержит события аудита и события Git во всей учетной записи предприятия.{% ifversion pause-audit-log-stream %}
* **Непрерывность данных.** Поток можно приостановить до семи дней без потери данных аудита.{% endif %}
* **Хранение данных**. Вы можете хранить экспортированные журналы аудита и данные событий Git до тех пор, пока это необходимо.

Владельцы предприятия могут в любое время настроить{% ifversion pause-audit-log-stream %}, приостановить,{% endif %} или удалить поток. Поток экспортирует данные аудита и событий Git для всех организаций на предприятии.

## Настройка потоковой передачи журналов аудита

Настраивайте поток журнала аудита в {% data variables.product.product_name %}, следуя инструкциям поставщика.

- [Amazon S3](#setting-up-streaming-to-amazon-s3)
- [Хранилище BLOB-объектов Azure](#setting-up-streaming-to-azure-blob-storage)
- [Центры событий Azure](#setting-up-streaming-to-azure-event-hubs){% ifversion streaming-datadog %}
- [Datadog](#setting-up-streaming-to-datadog){% endif %}
- [Google Cloud Storage](#setting-up-streaming-to-google-cloud-storage)
- [Splunk](#setting-up-streaming-to-splunk)

### Настройка потоковой передачи в Amazon S3

{% ifversion streaming-oidc-s3 %} Вы можете настроить потоковую передачу в S3 с помощью ключей доступа или, чтобы не хранить долгоживущие секреты в {% data variables.product.product_name %}, с помощью OpenID Connect (OIDC).

- [Настройка потоковой передачи в S3 с помощью ключей доступа](#setting-up-streaming-to-s3-with-access-keys)
- [Настройка потоковой передачи в S3 с помощью OpenID Connect](#setting-up-streaming-to-s3-with-openid-connect)
- [Отключение потоковой передачи в S3 с помощью OpenID Connect](#disabling-streaming-to-s3-with-openid-connect)

#### Настройка потоковой передачи в S3 с помощью ключей доступа
{% endif %}

Для потоковой передачи журналов аудита в конечную точку Amazon S3 необходимо иметь контейнер и ключи доступа. Дополнительные сведения см. в статье [Создание, настройка и работа с контейнерами Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) документации по Amazon Web Services. Не забудьте заблокировать общий доступ к контейнеру для защиты сведений журнала аудита. 

Чтобы настроить потоковую передачу журналов аудита из {% data variables.product.prodname_dotcom %}, вам потребуется:
* имя контейнера Amazon S3;
* ИД ключа доступа AWS;
* секретный ключ AWS.

Сведения о создании ИД ключа доступа и секретного ключа или доступе к ним см. в статье [Основные сведения об учетных данных AWS и их получение](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html) документации по AWS.

{% data reusables.enterprise.navigate-to-log-streaming-tab %} {% data reusables.audit_log.streaming-choose-s3 %}{% ifversion streaming-oidc-s3 %}
1. В разделе "Проверка подлинности" нажмите кнопку **Ключи доступа**.

   ![Снимок экрана: параметры проверки подлинности для потоковой передачи в Amazon S3](/assets/images/help/enterprises/audit-log-streaming-s3-access-keys.png){% endif %}
1. Настройте параметры потоковой передачи.

   - В разделе "Контейнер" введите имя контейнера, в который нужно выполнять потоковую передачу. Например, `auditlog-streaming-test`.
   - В разделе "Идентификатор ключа доступа" введите идентификатор ключа доступа. Например, `ABCAIOSFODNN7EXAMPLE1`.
   - В разделе "Секретный ключ" введите секретный ключ. Например, `aBcJalrXUtnWXYZ/A1MDENG/zPxRfiCYEXAMPLEKEY`.
{% data reusables.audit_log.streaming-check-s3-endpoint %} {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion streaming-oidc-s3 %}
#### Настройка потоковой передачи в S3 с помощью OpenID Connect

1. В AWS добавьте поставщика OIDC {% data variables.product.prodname_dotcom %} в IAM. Дополнительные сведения см. в статье [Создание поставщиков удостоверений OpenID Connect (OIDC)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html) в документации по Amazon Web Services.

   - Для URL-адреса поставщика используйте `https://oidc-configuration.audit-log.githubusercontent.com`.
   - Для параметра "Аудитория" используйте `sts.amazonaws.com`.
1. Создайте контейнер и заблокируйте открытый доступ к нему. Дополнительные сведения см. в статье [Создание, настройка и работа с контейнерами Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) документации по Amazon Web Services.
1. Создайте политику, которая позволяет {% данных variables.product.company_short %} записывать данные в контейнер, копируя следующий код JSON и заменяя `EXAMPLE-BUCKET` именем контейнера. Для {% данных variables.product.prodname_dotcom %} требуются только разрешения в этом JSON.

   ```
   {
      "Version": "2012-10-17",
      "Statement": [
         {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
               "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::EXAMPLE-BUCKET/*"
        }
      ]
   }
   ```
   Дополнительные сведения см. в статье [Создание политик IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html) в документации по Amazon Web Services.
1. Настройте политику роли и доверия для поставщика удостоверений {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в статье [Создание роли для веб-удостоверений или федерации OpenID Connect (консоль)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html) в документации по Amazon Web Services.
  
   - Добавьте политику разрешений, созданную ранее, чтобы разрешить запись в контейнер.
   - Измените отношение доверия, чтобы добавить поле `sub` в условия проверки, заменив `ENTERPRISE` на имя предприятия.
     ```
     "Condition": {
        "StringEquals": {
           "oidc-configuration.audit-log.githubusercontent.com:aud": "sts.amazonaws.com",
           "oidc-configuration.audit-log.githubusercontent.com:sub": "https://github.com/ENTERPRISE"
         }
      }
      ```
   - Запишите имя ресурса Amazon (ARN) созданной роли.
{% data reusables.enterprise.navigate-to-log-streaming-tab %} {% data reusables.audit_log.streaming-choose-s3 %}
1. В разделе "Проверка подлинности" щелкните **OpenID Connect**.

   ![Снимок экрана: параметры проверки подлинности для потоковой передачи в Amazon S3](/assets/images/help/enterprises/audit-log-streaming-s3-oidc.png)
1. Настройте параметры потоковой передачи.

   - В разделе "Контейнер" введите имя контейнера, в который нужно выполнять потоковую передачу. Например, `auditlog-streaming-test`.
   - В разделе "Роль ARN" введите роль ARN, записанную ранее. Например, `arn:aws::iam::1234567890:role/github-audit-log-streaming-role`.
{% data reusables.audit_log.streaming-check-s3-endpoint %} {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

#### Отключение потоковой передачи в S3 с помощью OpenID Connect

Если по какой-либо причине необходимо отключить потоковую передачу в S3 с помощью OIDC, например, если обнаружена уязвимость безопасности в OIDC, удалите поставщика OIDC {% data variables.product.prodname_dotcom %}, созданного в AWS, при настройке потоковой передачи. Дополнительные сведения см. в статье [Создание поставщиков удостоверений OpenID Connect (OIDC)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html) в документации по Amazon Web Services.

Затем настройте потоковую передачу с помощью ключей доступа, пока уязвимость не будет устранена. Дополнительные сведения см. в статье "[Настройка потоковой передачи в S3 с помощью ключей доступа](#setting-up-streaming-to-s3-with-access-keys)".

{% endif %}

### Настройка потоковой передачи в Хранилище BLOB-объектов Azure

Перед настройкой потока в {% data variables.product.prodname_dotcom %} необходимо сначала создать учетную запись хранения и контейнер в Microsoft Azure. Дополнительные сведения см. в статье [Общие сведения о Хранилище BLOB-объектов Azure](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction) документация Майкрософт. 

Чтобы настроить поток в {% data variables.product.prodname_dotcom %}, вам потребуется URL-адрес маркера SAS.

**На портале Microsoft Azure:**
1. На домашней странице выберите **Учетные записи хранения**.
2. Щелкните имя учетной записи хранения, которую вы хотите использовать, а затем выберите **Контейнеры**.
   
   ![Ссылка "Контейнеры" в Azure](/assets/images/azure/azure-storage-containers.png)

1. Щелкните имя контейнера, который хотите использовать.
1. Щелкните **Shared access tokens** (Маркеры общего доступа). 
   
   ![Ссылка на маркеры общего доступа в Azure](/assets/images/azure/azure-storage-shared-access-tokens.png)

1. В раскрывающемся меню **Разрешения** измените разрешения, чтобы разрешить только `Create` и `Write`.
   
   ![Раскрывающееся меню разрешений](/assets/images/azure/azure-storage-permissions.png)

1. Задайте дату окончания срока действия, соответствующую политике смены секретов.
1. Щелкните **Создать маркер SAS и URL-адрес**.
1. Скопируйте значение отображаемого поля **URL-адрес SAS BLOB-объекта**. Этот URL-адрес вы используете в {% data variables.product.prodname_dotcom %}.

**В {% data variables.product.prodname_dotcom %}:** {% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Щелкните **Configure stream** (Настроить поток) и выберите **Azure Blob Storage** (Хранилище BLOB-объектов Azure).
   
   ![Выбор Хранилища BLOB-объектов Azure в раскрывающемся меню](/assets/images/help/enterprises/audit-stream-choice-azureblob.png)

1. На странице конфигурации введите URL-адрес SAS BLOB-объекта, скопированный в Azure. Поле **Container** (Контейнер) заполняется автоматически на основе URL-адреса.

   ![Ввод параметров потока](/assets/images/help/enterprises/audit-stream-add-azureblob.png)
  
1. Нажмите кнопку **Check endpoint** (Проверить конечную точку), чтобы убедиться, что {% data variables.product.prodname_dotcom %} может подключиться к конечной точке Хранилища BLOB-объектов Azure и записывать в нее.
   
   ![Проверка конечной точки](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Настройка потоковой передачи в Центры событий Azure

Перед настройкой потока в {% data variables.product.prodname_dotcom %} необходимо иметь пространство имен концентратора событий в Microsoft Azure. Затем необходимо создать экземпляр концентратора событий в пространстве имен. При настройке потока потребуются сведения об этом экземпляре концентратора событий. Дополнительные сведения см. в статье [Краткое руководство. Создание концентратора событий с помощью портала Azure](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create) документации Майкрософт. 

Вам потребуется информация о двух значениях концентратора событий: имя экземпляра и строка подключения. 

**На портале Microsoft Azure:**
1. Найдите "Центры событий".

   ![Поле поиска на портале Azure](/assets/images/azure/azure-resources-search.png )

1. Выберите **Концентраторы событий**. Здесь перечислены имена концентраторов событий. 
   
   ![Список концентраторов событий](/assets/images/help/enterprises/azure-event-hubs-list.png)

1. Запишите имя концентратора событий, в который требуется выполнить потоковую передачу.
1. Щелкните необходимый концентратор событий. Затем в меню слева выберите пункт **Политики общего доступа**.
1. Выберите политику общего доступа в списке политик или создайте ее.
   
   ![Список политик общего доступа](/assets/images/help/enterprises/azure-shared-access-policies.png)

1. Нажмите кнопку справа от поля **Строка подключения — первичный ключ**, чтобы скопировать строку подключения.
   
   ![Строка подключения концентратора событий](/assets/images/help/enterprises/azure-connection-string.png)

**В {% data variables.product.prodname_dotcom %}:** {% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Щелкните **Configure stream** (Настроить поток) и выберите **Центры событий Azure**.
   
   ![Выбор Центров событий Azure в раскрывающемся меню](/assets/images/help/enterprises/audit-stream-choice-azure.png)

1. На странице конфигурации введите:
   * Имя экземпляра Центров событий Azure.
   * Строка подключения.
  
   ![Ввод параметров потока](/assets/images/help/enterprises/audit-stream-add-azure.png)
   
1. Нажмите кнопку **Check endpoint** (Проверить конечную точку), чтобы убедиться, что {% data variables.product.prodname_dotcom %} может подключиться к конечной точке Центров событий Azure и записывать в нее.
   
   ![Проверка конечной точки](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion streaming-datadog %}
### Настройка потоковой передачи в Datadog

Чтобы настроить потоковую передачу в Datadog, необходимо создать маркер клиента или ключ API в Datadog, а затем настроить потоковую передачу журнала аудита в {% data variables.product.product_name %} с помощью маркера для проверки подлинности. Вам не нужно создавать контейнер bucket или другой контейнер хранилища в Datadog.

После настройки потоковой передачи в Datadog можно просмотреть данные журнала аудита, отфильтровав их по github.audit.streaming. Дополнительные сведения см. в разделе [Управление журналами](https://docs.datadoghq.com/logs/).

1. Если у вас еще нет учетной записи Datadog, создайте ее.
1. В Datadog создайте маркер клиента или ключ API, а затем нажмите кнопку **Копировать ключ**. Дополнительные сведения см. в разделе [API и ключи приложений](https://docs.datadoghq.com/account_management/api-app-keys/) в документации по Datadog. {% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Выберите раскрывающийся список **Настройка потока** и щелкните **Datadog**.
   
   ![Снимок экрана: раскрывающееся меню "Настройка потока" с выделенным элементом Datadog](/assets/images/help/enterprises/audit-stream-choice-datadog.png)
1. В поле "Маркер" вставьте скопированный ранее маркер.

   ![Снимок экрана: поле "Маркер"](/assets/images/help/enterprises/audit-stream-datadog-token.png)
1. Выберите раскрывающееся меню "Сайт" и щелкните сайт Datadog. Чтобы определить сайт Datadog, сравните URL-адрес Datadog с таблицей на [сайтах Datadog](https://docs.datadoghq.com/getting_started/site/) в документации по Datadog.

   ![Снимок экрана: раскрывающееся меню "Сайт"](/assets/images/help/enterprises/audit-stream-datadog-site.png)
1. Нажмите кнопку **Проверить конечную точку**, чтобы убедиться, что {% data variables.product.prodname_dotcom %} может подключиться к конечной точке Datadog и записывать в нее.
   
   ![Проверка конечной точки](/assets/images/help/enterprises/audit-stream-check.png) {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}
1. Через несколько минут убедитесь, что данные журнала аудита отображаются на вкладке **Журналы** в Datadog. Если данные журнала аудита не отображаются, убедитесь, что маркер и сайт верны в {% data variables.product.prodname_dotcom %}.
{% endif %}

### Настройка потоковой передачи в Google Cloud Storage

Чтобы настроить потоковую передачу в Google Cloud Storage, необходимо создать учетную запись службы в Google Cloud с соответствующими учетными данными и разрешениями. Затем настроить потоковую передачу журналов аудита в {% data variables.product.product_name %}, используя данные для входа учетной записи службы для проверки подлинности.

1. Создайте учетную запись службы для Google Cloud. Не нужно настраивать управление доступом или роли IAM для учетной записи службы. Дополнительные сведения см. в статье [Создание учетных записей служб и управление ими](https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating) документации Google Cloud.
1. Создайте ключ JSON для учетной записи службы и безопасно его храните. Дополнительные сведения см. в статье [Создание ключей учетной записи службы и управление ими](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating) документации Google Cloud.
1. Если вы еще не создали контейнер, сделайте это. Дополнительные сведения см. в статье [Создание контейнеров хранилища](https://cloud.google.com/storage/docs/creating-buckets) документации Google Cloud.
1. Предоставьте учетной записи службы роль Storage Object Creator (Создатель объектов хранилища) для контейнера. Дополнительные сведения см. в статье [Использование разрешений Cloud IAM](https://cloud.google.com/storage/docs/access-control/using-iam-permissions#bucket-add) документации Google Cloud.
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Выберите раскрывающееся меню Configure stream (Настроить поток) и щелкните **Google Cloud Storage**.

   ![Снимок экрана: раскрывающееся меню Configure stream (Настроить поток)](/assets/images/help/enterprises/audit-stream-choice-google-cloud-storage.png)

1. В поле Bucket (Контейнер) введите имя контейнера Google Cloud Storage.

   ![Снимок экрана: текстовое поле Bucket (Контейнер)](/assets/images/help/enterprises/audit-stream-bucket-google-cloud-storage.png)

1. В поле JSON Credentials (Учетные данные JSON) вставьте все содержимое файла для ключа JSON учетной записи службы.

   ![Снимок экрана: текстовое поле JSON Credentials (Учетные данные JSON)](/assets/images/help/enterprises/audit-stream-json-credentials-google-cloud-storage.png)

1. Чтобы убедиться, что {% data variables.product.prodname_dotcom %} может подключиться к контейнеру Google Cloud Storage и записывать в него, нажмите кнопку **Check endpoint** (Проверить конечную точку). 

   ![Снимок экрана: кнопка Check endpoint (Проверить конечную точку)](/assets/images/help/enterprises/audit-stream-check-endpoint-google-cloud-storage.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Настройка потоковой передачи в Splunk

Для потоковой передачи журналов аудита в конечную точку сборщика событий HTTP (HEC) Splunk необходимо убедиться, что эта конечная точка настроена для приема подключений HTTPS. Дополнительные сведения см. в статье [Настройка и использование сборщика событий HTTP в Splunk Web](https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector) документации Splunk.

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Щелкните **Configure stream** (Настроить поток) и выберите **Splunk**.
   
   ![Выбор Splunk в раскрывающемся меню](/assets/images/help/enterprises/audit-stream-choice-splunk.png)

1. На странице конфигурации введите:
   * Домен размещенного приложения, для которого требуется выполнить потоковую передачу.
  
     Если вы используете Splunk Cloud, параметр `Domain` должен быть такого вида: `http-inputs-<host>`. Где `host` — это домен, используемый в Splunk Cloud. Например: `http-inputs-mycompany.splunkcloud.com`. 

   * Порт, на котором приложение принимает данные.<br>

     Если вы используете Splunk Cloud, параметр `Port` должен иметь значение — `443`, если вы не изменили конфигурацию порта. Если вы используете бесплатную пробную версию Splunk Cloud, параметр `Port` должен иметь значение — `8088`.

   * Маркер, который {% data variables.product.prodname_dotcom %} может использовать для проверки подлинности в стороннем приложении.
  
   ![Ввод параметров потока](/assets/images/help/enterprises/audit-stream-add-splunk.png)

1. Оставьте флажок **Enable SSL verification** (Включить проверку SSL).

    Журналы аудита всегда передаются в виде зашифрованных данных, но при выборе этого параметра {% data variables.product.prodname_dotcom %} проверяет SSL-сертификат экземпляра Splunk при доставке событий. Проверка SSL помогает обеспечить безопасную доставку событий в конечную точку URL-адреса. Можно снять флажок с этого параметра, но рекомендуем оставить проверку SSL включенной.
1. Нажмите кнопку **Check endpoint** (Проверить конечную точку), чтобы убедиться, что {% data variables.product.prodname_dotcom %} может подключиться к конечной точке Splunk и записывать в нее.
   ![Проверка конечной точки](/assets/images/help/enterprises/audit-stream-check-splunk.png) {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion pause-audit-log-stream %}
## Приостановка потоковой передачи журналов аудита

Приостановка потока позволяет выполнять обслуживание принимающего приложения без потери данных аудита. Журналы аудита хранятся в течение семи дней на {% данных variables.location.product_location %} и затем экспортируются при отмене потоковой передачи.

{% ifversion streaming-datadog %} Datadog принимает только журналы за последние 18 часов. Если вы приостанавливаете поток в конечной точке Datadog более чем на 18 часов, вы рискуете потерять журналы, которые Datadog не примет после возобновления потоковой передачи.
{% endif %}

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Нажмите кнопку **Pause stream** (Приостановить поток).
   
   ![Приостановка потока](/assets/images/help/enterprises/audit-stream-pause.png)

1. Вы увидите сообщение с подтверждением. Нажмите кнопку **Pause stream** (Приостановить поток), чтобы подтвердить.

Когда приложение будет готово к повторному получению журналов аудита, нажмите кнопку **Resume stream** (Возобновить поток), чтобы перезапустить потоковую передачу журналов аудита.
{% endif %}

## Удаление потока журналов аудита

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Нажмите кнопку **Delete stream** (Удалить поток).
   
   ![Удаление потока](/assets/images/help/enterprises/audit-stream-delete.png)

1. Вы увидите сообщение с подтверждением. Нажмите кнопку **Delete stream** (Удалить поток), чтобы подтвердить.
