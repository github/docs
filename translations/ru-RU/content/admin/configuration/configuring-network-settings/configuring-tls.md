---
title: Настройка TLS
intro: 'Протокол TLS можно настроить для {% данных variables.location.product_location %}, чтобы использовать сертификат, подписанный доверенным центром сертификации.'
redirect_from:
  - /enterprise/admin/articles/ssl-configuration
  - /enterprise/admin/guides/installation/about-tls
  - /enterprise/admin/installation/configuring-tls
  - /enterprise/admin/configuration/configuring-tls
  - /admin/configuration/configuring-tls
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Security
ms.openlocfilehash: 8e4a8842fd30cd0e3d90743324e4a50c1de72512
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098847'
---
## Сведения о протоколе TLS

Протокол TLS, пришедший на замену SSL, включается и настраивается с помощью самозаверяющего сертификата при первом запуске {% data variables.product.prodname_ghe_server %}. Так как самозаверяющие сертификаты не являются доверенными для веб-браузеров и клиентов Git, эти клиенты будут отправлять предупреждения о сертификатах, пока вы не отключите TLS или не отправите сертификат, подписанный доверенным центром, таким как Let's Encrypt.

Устройство {% data variables.product.prodname_ghe_server %} отправляет заголовки HTTP Strict Transport Security при включении SSL. Отключение TLS приведет к тому, что пользователи потеряют доступ к устройству, так как браузеры не разрешают понижение уровня протокола до HTTP. Дополнительные сведения см. в статье [HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) в Википедии.

{% data reusables.enterprise_installation.terminating-tls %}

Чтобы разрешить пользователям использовать FIDO U2F для двухфакторной проверки подлинности, вы должны включить TLS для своего экземпляра. Подробнее: [Настройка двухфакторной проверки подлинности](/articles/configuring-two-factor-authentication).

## Предварительные требования

Чтобы использовать TLS в рабочей среде, необходимо иметь сертификат в незашифрованном формате PEM, подписанный доверенным центром сертификации.

Сертификату также потребуются альтернативные имена субъектов, настроенные для поддоменов, перечисленных в разделе [Включение изоляции поддоменов](/enterprise/admin/guides/installation/enabling-subdomain-isolation#about-subdomain-isolation), и вам нужно будет включить полную цепочку сертификатов, если сертификат был подписан промежуточным центром сертификации. Дополнительные сведения см. в статье [Альтернативное имя субъекта](http://en.wikipedia.org/wiki/SubjectAltName) в Википедии.

Вы можете создать запрос на подпись сертификата (CSR) для своего экземпляра с помощью команды `ghe-ssl-generate-csr`. Дополнительные сведения см. в статье "[Программы командной строки](/enterprise/admin/guides/installation/command-line-utilities/#ghe-ssl-generate-csr)".

Это должен быть ключ RSA, который не имеет парольную фразу. Дополнительные сведения см. в разделе [Удаление парольной фразы из файла ключа](/admin/guides/installation/troubleshooting-ssl-errors#removing-the-passphrase-from-your-key-file).

## Отправка настраиваемого сертификата TLS

{% data reusables.enterprise_site_admin_settings.tls-downtime %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %} {% data reusables.enterprise_management_console.select-tls-only %}
4. В разделе "Поддержка протокола TLS" выберите протоколы, которые вы хотите разрешить.
  ![Переключатели для выбора протоколов TLS](/assets/images/enterprise/management-console/tls-protocol-support.png)
5. В разделе "Сертификат" щелкните **Выбрать файл**, чтобы выбрать сертификат TLS или цепочку сертификатов (в формате PEM) для установки. Обычно этот файл имеет расширение *PEM*, *CRT* или *CER*.
  ![Кнопка для поиска файла сертификата TLS](/assets/images/enterprise/management-console/install-tls-certificate.png)
6. В разделе "Незашифрованный ключ" щелкните **Выбрать файл**, чтобы выбрать ключ RSA (в формате PEM) для установки. Этот файл обычно имеет расширение *KEY*.
  ![Кнопка для поиска файла ключа TLS](/assets/images/enterprise/management-console/install-tls-key.png)

{% data reusables.enterprise_management_console.save-settings %}

## Сведения о поддержке Let's Encrypt

Let's Encrypt — это общедоступный центр сертификации, который выдает бесплатные автоматические сертификаты TLS, которые принимаются как доверенные браузерами, использующими протокол ACME. Вы можете автоматически получать и обновлять сертификаты Let's Encrypt на устройстве без необходимости обслуживания вручную.

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

Если включить автоматизацию управления сертификатами TLS с помощью Let's Encrypt, {% данных variables.location.product_location %} свяжется с серверами Let's Encrypt для получения сертификата. Для обновления сертификата серверы Let's Encrypt должны проверить управление настроенным доменным именем с помощью входящих HTTP-запросов.

Служебную `ghe-ssl-acme` программу командной строки можно также использовать для {% данных variables.location.product_location %} для автоматического создания сертификата Let's Encrypt. Дополнительные сведения см. в статье "[Программы командной строки](/enterprise/admin/guides/installation/command-line-utilities#ghe-ssl-acme)".

## Настройка TLS с помощью Let's Encrypt

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

{% data reusables.enterprise_site_admin_settings.tls-downtime %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %} {% data reusables.enterprise_management_console.select-tls-only %}
5. Выберите **Включить автоматизацию управления сертификатами TLS с помощью Let's Encrypt**.
  ![Флажок для включения Let's Encrypt](/assets/images/enterprise/management-console/lets-encrypt-checkbox.png) {% data reusables.enterprise_management_console.save-settings %} {% data reusables.enterprise_management_console.privacy %}
7. Нажмите кнопку **Запросить сертификат TLS**.
  ![Кнопка запроса сертификата TLS](/assets/images/enterprise/management-console/request-tls-button.png)
8. Подождите, пока состояние изменится со "STARTED" на "DONE".
   ![Состояние Let's Encrypt](/assets/images/enterprise/management-console/lets-encrypt-status.png)
9. Щелкните **Save Configuration** (Сохранить конфигурацию).
