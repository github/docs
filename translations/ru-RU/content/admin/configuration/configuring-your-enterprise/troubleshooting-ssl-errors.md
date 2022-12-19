---
title: Устранение ошибок SSL
intro: При возникновении на устройстве проблем в работе SSL можно принять меры для их устранения.
redirect_from:
- /enterprise/admin/articles/troubleshooting-ssl-errors
- /enterprise/admin/categories/dns-ssl-and-subdomain-configuration
- /enterprise/admin/installation/troubleshooting-ssl-errors
- /enterprise/admin/configuration/troubleshooting-ssl-errors
- /admin/configuration/troubleshooting-ssl-errors
versions:
  ghes: '*'
type: how_to
topics:
- Enterprise
- Errors
- Infrastructure
- Networking
- Security
- Troubleshooting
shortTitle: Troubleshoot SSL errors
ms.openlocfilehash: cfe73a647b539fa8c9c2aef54f8bc51f2b1becae
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "145120675"
---
## <a name="removing-the-passphrase-from-your-key-file"></a>Удаление парольной фразы из файла ключа

Если на компьютере Linux с установлен OpenSSL, можно удалить парольную фразу.

1. Переименуйте исходный файл ключа.
  ```shell
  $ mv yourdomain.key yourdomain.key.orig
  ```
2. Создайте новый ключ без парольной фразы.
  ```shell
  $ openssl rsa -in yourdomain.key.orig -out yourdomain.key
  ```

При выполнении этой команды вам будет предложено ввести парольную фразу ключа.

Дополнительные сведения об OpenSSL см. в [документации по OpenSSL](https://www.openssl.org/docs/).

## <a name="converting-your-ssl-certificate-or-key-into-pem-format"></a>Преобразование SSL-сертификата или ключа в формат PEM

Если у вас установлен OpenSSL, вы можете преобразовать ключ в формат PEM с помощью команды `openssl`. Например, можно преобразовать ключ из формата DER в формат PEM.

```shell
$ openssl rsa -in yourdomain.der -inform DER -out yourdomain.key -outform PEM
```

В противном случае для преобразования сертификата в формат PEM можно использовать средство SSL Converter. Дополнительные сведения см. в [документации по средству SSL Converter](https://www.sslshopper.com/ssl-converter.html).

## <a name="unresponsive-installation-after-uploading-a-key"></a>Неотвечающая установка после отправки ключа

Если {% data variables.product.product_location %} не отвечает после отправки SSL-ключа, [обратитесь в службу поддержки {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/support), указав конкретные данные и приложив копию SSL-сертификата.

## <a name="certificate-validity-errors"></a>Ошибки допустимости сертификата

Такие клиенты, как веб-браузеры и Git командной строки, будут отображать сообщение об ошибке, если они не могут проверить допустимость SSL-сертификата. Это часто происходит с самозаверяющими сертификатами, а также со связанными по цепочке корневыми сертификатами, выданными из промежуточного корневого сертификата, который не распознается клиентом.

Если вы используете сертификат, подписанный центром сертификации (ЦС), файл сертификата, отправляемый в {% data variables.product.prodname_ghe_server %}, должен включать цепочку сертификатов с корневым сертификатом этого ЦС. Чтобы создать такой файл, присоедините всю цепочку сертификатов (или "пакет сертификатов") к концу сертификата. При этом первым должен быть сертификат субъекта с именем узла. В большинстве систем это можно сделать с помощью следующей команды:

```shell
$ cat yourdomain.com.crt bundle-certificates.crt > yourdomain.combined.crt
```

Вы должны иметь возможность скачать пакет сертификатов (например, `bundle-certificates.crt`) из центра сертификации или поставщика SSL.

## <a name="installing-self-signed-or-untrusted-certificate-authority-ca-root-certificates"></a>Установка самозаверяющих или недоверенных корневых сертификатов центра сертификации (ЦС)

Если устройство {% data variables.product.prodname_ghe_server %} взаимодействует с другими компьютерами в сети, которые используют самозаверяющий или недоверенный сертификат, необходимо импортировать корневой сертификат ЦС для подписи в системное хранилище сертификатов, чтобы получить доступ к этим системам по протоколу HTTPS.

1. Получите корневой сертификат ЦС из локального центра сертификации и проверьте, что он имеет формат PEM.
2. Скопируйте файл на устройство {% data variables.product.prodname_ghe_server %} по протоколу SSH в качестве пользователя admin на порту 122.
  ```shell
  $ scp -P 122 rootCA.crt admin@HOSTNAME:/home/admin
  ```
3. Подключитесь к административной оболочке {% data variables.product.prodname_ghe_server %} по протоколу SSH в качестве пользователя admin на порту 122.
  ```shell
  $ ssh -p 122 admin@HOSTNAME
  ```
4. Импортируйте сертификат в системное хранилище сертификатов.
  ```shell
  $ ghe-ssl-ca-certificate-install -c rootCA.crt
  ```

## <a name="updating-an-ssl-certificate"></a>Обновление SSL-сертификата

С помощью программы командной строки `ghe-ssl-certificate-setup` можно создать новый самозаверяющий сертификат или обновить существующий SSL-сертификат для {% data variables.product.product_location %}. Дополнительные сведения см. в статье "[Программы командной строки](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-setup)".
