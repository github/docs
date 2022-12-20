---
title: Настройка электронной почты для получения уведомлений
intro: 'Чтобы пользователи могли быстро реагировать на действия в {% данных variables.product.product_name %}, можно настроить {% данных variables.location.product_location %} для отправки уведомлений по электронной почте о проблеме, запросе на вытягивание и фиксации комментариев.'
redirect_from:
  - /enterprise/admin/guides/installation/email-configuration
  - /enterprise/admin/articles/configuring-email
  - /enterprise/admin/articles/troubleshooting-email
  - /enterprise/admin/articles/email-configuration-and-troubleshooting
  - /enterprise/admin/user-management/configuring-email-for-notifications
  - /admin/configuration/configuring-email-for-notifications
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Notifications
shortTitle: Configure email notifications
ms.openlocfilehash: 499c10953d0fb26287596a8a056b4a9c60af4c3d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098844'
---
{% ifversion ghae %} Владельцы предприятия могут настраивать электронную почту для получения уведомлений.
{% endif %}
## Настройка SMTP для предприятия

{% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.email-settings %}
4. Установите флажок **Включить электронную почту**. Это позволит включить как исходящие, так и входящие сообщения электронной почты, однако для работы входящих сообщений электронной почты необходимо также настроить параметры DNS, как описано ниже в разделе [Настройка параметров DNS и брандмауэра для разрешения входящих сообщений электронной почты](#configuring-dns-and-firewall-settings-to-allow-incoming-emails).
![Включение исходящих сообщений электронной почты](/assets/images/enterprise/management-console/enable-outbound-email.png)
5. Введите параметры для вашего SMTP-сервера.
      - В поле **Адрес сервера** введите адрес SMTP-сервера.
      - В поле **Порт** введите порт, используемый SMTP-сервером для отправки электронной почты.
      - В поле **Домен** введите доменное имя, которое SMTP-сервер будет отправлять с ответом HELO, если таковой имеется.
      - Щелкните раскрывающийся список **Проверка подлинности** и выберите в нем тип шифрования, используемый SMTP-сервером.
      - В поле **Адрес электронной почты для автоматической рассылки** введите адрес электронной почты, который будет использоваться в полях "От" и "Кому" для всех уведомлений.      
6. Если вы хотите отменить все входящие сообщения электронной почты, поступающие на адрес для автоматической рассылки, установите флажок **Отменить сообщения на адрес электронной почты для автоматической рассылки**.
![Флажок отмены сообщений электронной почты, поступающих на адрес для автоматической рассылки](/assets/images/enterprise/management-console/discard-noreply-emails.png)
7. В разделе **Поддержка** выберите тип ссылки для предложения дополнительной поддержки вашим пользователям.
    - **Электронная почта:** внутренний адрес электронной почты.
    - **URL-адрес:** ссылка на внутренний сайт поддержки. Вы должны включить `http://` или `https://`.
  ![Электронная почта или URL-адрес поддержки](/assets/images/enterprise/management-console/support-email-url.png)
8. [Проверьте доставку по электронной почте](#testing-email-delivery).
{% elsif ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.email-tab %}
2. Установите флажок **Включить электронную почту**.
  ![Флажок "Включить" для параметров электронной почты](/assets/images/enterprise/configuration/ae-enable-email-configure.png)
3. Введите параметры для вашего почтового сервера.
    - В поле **Адрес сервера** введите адрес SMTP-сервера.
    - В поле **Порт** введите порт, используемый SMTP-сервером для отправки электронной почты.
    - В поле **Домен** введите доменное имя, которое SMTP-сервер будет отправлять с ответом HELO, если таковой имеется.
    - Щелкните раскрывающийся список **Проверка подлинности** и выберите в нем тип шифрования, используемый SMTP-сервером.
    - В поле **Адрес электронной почты для автоматической рассылки** введите адрес электронной почты, который будет использоваться в полях "От" и "Кому" для всех уведомлений.
4. Если вы хотите отменить все входящие сообщения электронной почты, поступающие на адрес для автоматической рассылки, установите флажок **Отменить сообщения на адрес электронной почты для автоматической рассылки**.
  ![Флажок "Отменить" для настройки параметров электронной почты](/assets/images/enterprise/configuration/ae-discard-email.png)
5. Нажмите **Проверить параметры электронной почты**.
  ![Кнопка "Проверить параметры электронной почты" для настройки параметров электронной почты](/assets/images/enterprise/configuration/ae-test-email.png)
6. В поле "Куда отправить тестовое сообщение" введите адрес электронной почты, на который хотите отправить тестовое сообщение, а затем нажмите кнопку **Отправить тестовое сообщение**.
  ![Кнопка "Отправить тестовое сообщение" для настройки параметров электронной почты](/assets/images/enterprise/configuration/ae-send-test-email.png)
7. Выберите команду **Сохранить**.
  ![Кнопка "Сохранить" для настройки контактных данных службы поддержки организации](/assets/images/enterprise/configuration/ae-save.png) {% endif %}

{% ifversion ghes %}
## Проверка доставки по электронной почте

1. В верхней части раздела **Электронная почта** щелкните **Проверить параметры электронной почты**.
![Проверить параметры электронной почты](/assets/images/enterprise/management-console/test-email.png)
2. В поле **Куда отправить тестовое сообщение** введите адрес электронной почты, на который следует отправить тестовое сообщение.
![Проверка адреса электронной почты](/assets/images/enterprise/management-console/test-email-address.png)
3. Нажмите **Отправить тестовое сообщение**.
![Отправьте тестовое сообщение электронной почты](/assets/images/enterprise/management-console/test-email-address-send.png)

  {% tip %}

  **Совет.** Если при отправке тестового сообщения электронной почты возникают ошибки SMTP( например, сбой немедленной доставки или ошибка конфигурации исходящей почты), вы увидите их в диалоговом окне "Проверка параметров электронной почты".

  {% endtip %}

4. Если проверка электронной почты завершается неудачно, [исправьте параметры электронной почты](#troubleshooting-email-delivery).
5. После успешной проверки электронной почты нажмите кнопку **Сохранить параметры** внизу страницы.
![Кнопка "Сохранить параметры"](/assets/images/enterprise/management-console/save-settings.png) {% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

{% ifversion require-tls-for-smtp %}
## Принудительное применение TLS для SMTP-подключений

Шифрование TLS можно применить для всех входящих SMTP-подключений, чтобы обеспечить соответствия требованиям сертификации ISO-27017.

{%- ifversion ghes = 3.6 %} {% note %}

**Примечание.** Принудительное применение TLS для SMTP-подключений недоступно в {% данных variables.product.product_name %} 3.6.0 и 3.6.1. Эта функция доступна в версии 3.6.2 и более поздних версиях.

{% endnote %} {%- endif %}

{% data reusables.enterprise_site_admin_settings.email-settings %}
1. В разделе "Проверка подлинности" выберите **Принудительно применить проверку подлинности TLS (рекомендуется)** .

   ![Снимок экрана: флажок "Принудительно применить проверку подлинности TLS (рекомендуется)"](/assets/images/enterprise/configuration/enforce-tls-for-smtp-checkbox.png) {% data reusables.enterprise_management_console.save-settings %} {% endif %}

## Настройка параметров DNS и брандмауэра для разрешения входящих сообщений электронной почты

Если вы хотите разрешить ответы на уведомления по электронной почте, необходимо настроить параметры DNS.

1. Убедитесь, что порт 25 в экземпляре доступен для вашего SMTP-сервера.
2. Создайте запись A, указывающую на `reply.[hostname]`. В некоторых конфигурациях поставщика DNS и узла экземпляра можно вместо этого создать одну запись A, указывающую на `*.[hostname]`.
3. Создайте запись MX, указывающую на `reply.[hostname]`, чтобы сообщения электронной почты для данного домена перенаправлялись в этот экземпляр.
4. Создайте запись MX, указывающую `noreply.[hostname]` на `[hostname]`, чтобы ответы на адрес `cc` в сообщениях с уведомлениями перенаправлялись в этот экземпляр. Дополнительные сведения см. в разделе {% ifversion ghes %}[Настройка уведомлений](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications){% else %}[Сведения об уведомлениях по электронной почте](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}.

## Устранение неполадок доставки электронной почты

### Создание Пакета поддержки

Если вы не можете определить проблему из отображаемого сообщения об ошибке, можно скачать [Пакет поддержки](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support), содержащий все SMTP-взаимодействие между вашим почтовым сервером и {% data variables.product.prodname_ghe_server %}. После того как вы скачаете и извлечете этот пакет, проверьте записи в *enterprise-manage-logs/unicorn.log* для всего журнала SMTP-взаимодействия и все связанные ошибки.

В журнале unicorn должна отображаться транзакция, аналогичная следующей:

```shell
This is a test email generated from https://10.0.0.68/setup/settings
Connection opened: smtp.yourdomain.com:587
-> "220 smtp.yourdomain.com ESMTP nt3sm2942435pbc.14\r\n"
<- "EHLO yourdomain.com\r\n"
-> "250-smtp.yourdomain.com at your service, [1.2.3.4]\r\n"
-> "250-SIZE 35882577\r\n"
-> "250-8BITMIME\r\n"
-> "250-STARTTLS\r\n"
-> "250-ENHANCEDSTATUSCODES\r\n"
-> "250 PIPELINING\r\n"
<- "STARTTLS\r\n"
-> "220 2.0.0 Ready to start TLS\r\n"
TLS connection started
<- "EHLO yourdomain.com\r\n"
-> "250-smtp.yourdomain.com at your service, [1.2.3.4]\r\n"
-> "250-SIZE 35882577\r\n"
-> "250-8BITMIME\r\n"
-> "250-AUTH LOGIN PLAIN XOAUTH\r\n"
-> "250-ENHANCEDSTATUSCODES\r\n"
-> "250 PIPELINING\r\n"
<- "AUTH LOGIN\r\n"
-> "334 VXNlcm5hbWU6\r\n"
<- "dGhpc2lzbXlAYWRkcmVzcy5jb20=\r\n"
-> "334 UGFzc3dvcmQ6\r\n"
<- "aXRyZWFsbHl3YXM=\r\n"
-> "535-5.7.1 Username and Password not accepted. Learn more at\r\n"
-> "535 5.7.1 http://support.yourdomain.com/smtp/auth-not-accepted nt3sm2942435pbc.14\r\n"
```

Журнал показывает, что на устройстве произошли следующие события.

* Открыто подключение к SMTP-серверу (`Connection opened: smtp.yourdomain.com:587`).
* Подключение успешно выполнено и выбрано использование TLS (`TLS connection started`).
* Выполнен тип `login` проверки подлинности (`<- "AUTH LOGIN\r\n"`).
* SMTP-сервер отклонил проверку подлинности как недопустимую (`-> "535-5.7.1 Username and Password not accepted.`).

### Проверка журналов {% данных variables.location.product_location %}

Если вам нужно убедиться, что входящие сообщения электронной почты функционируют, вы можете изучить два файла журнала в вашем экземпляре: */var/log/mail.log* и */var/log/mail-replies/metroplex.log*.

Журнал */var/log/mail.log* проверяет, что сообщения достигают вашего сервера. Ниже приведен пример успешного ответа по электронной почте.

```
Oct 30 00:47:18 54-171-144-1 postfix/smtpd[13210]: connect from st11p06mm-asmtp002.mac.com[17.172.124.250]
Oct 30 00:47:19 54-171-144-1 postfix/smtpd[13210]: 51DC9163323: client=st11p06mm-asmtp002.mac.com[17.172.124.250]
Oct 30 00:47:19 54-171-144-1 postfix/cleanup[13216]: 51DC9163323: message-id=<b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
Oct 30 00:47:19 54-171-144-1 postfix/qmgr[17250]: 51DC9163323: from=<tcook@icloud.com>, size=5048, nrcpt=1 (queue active)
Oct 30 00:47:19 54-171-144-1 postfix/virtual[13217]: 51DC9163323: to=<reply+i-1-1801beb4df676a79250d1e61e54ab763822c207d-5@reply.ghe.tjl2.co.ie>, relay=virtual, delay=0.12, delays=0.11/0/0/0, dsn=2.0.0, status=sent (delivered to maildir)
Oct 30 00:47:19 54-171-144-1 postfix/qmgr[17250]: 51DC9163323: removed
Oct 30 00:47:19 54-171-144-1 postfix/smtpd[13210]: disconnect from st11p06mm-asmtp002.mac.com[17.172.124.250]
```

Обратите внимание, что клиент сначала подключается, затем очередь становится активной. Затем сообщение доставляется, клиент удаляется из очереди, и сеанс отключается.

Журнал */var/log/mail-replies/metroplex.log* показывает, обрабатываются ли входящие сообщения электронной почты для добавления в проблемы и запросы на вытягивание в виде ответов. Ниже приведен пример успешного сообщения.

```
[2014-10-30T00:47:23.306 INFO (5284) #] metroplex: processing <b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
[2014-10-30T00:47:23.333 DEBUG (5284) #] Matched /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie
[2014-10-30T00:47:23.334 DEBUG (5284) #] Moving /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie => /data/user/incoming-mail/success
```

Обратите внимание, что `metroplex` перехватывает входящее сообщение, обрабатывает его, а затем перемещает файл в `/data/user/incoming-mail/success`.{% endif %}

### Проверка параметров DNS

Для правильной обработки входящих сообщений электронной почты необходимо настроить допустимую запись A (или CNAME), а также запись MX. Дополнительные сведения см. в разделе [Настройка параметров DNS и брандмауэра для разрешения входящих сообщений электронной почты](#configuring-dns-and-firewall-settings-to-allow-incoming-emails).

### Проверка параметров брандмауэра или группы безопасности AWS

Если {% данных variables.location.product_location %} находится за брандмауэром или обслуживается через группу безопасности AWS, убедитесь, что порт 25 открыт для всех почтовых серверов, отправляющих сообщения электронной почты `reply@reply.[hostname]`.

### Обращение в службу поддержки
{% ifversion ghes %} Если вам все же не удалось устранить проблему, обратитесь в {% data variables.contact.contact_ent_support %}. Вложите в свое сообщение электронной почты выходной файл из `http(s)://[hostname]/setup/diagnostics`, чтобы помочь нам устранить проблему.
{% elsif ghae %} Вы можете связаться с {% data variables.contact.github_support %}, чтобы вам помогли настроить электронную почту для отправки уведомлений через ваш SMTP-сервер. Дополнительные сведения см. в разделе [Получение помощи от {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support).
{% endif %}
