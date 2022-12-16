---
title: Настройка SSH-подключений к экземпляру
shortTitle: Configure SSH connections
intro: 'Вы можете повысить безопасность {% data variables.location.product_location %}, настроив алгоритмы SSH, которые клиенты могут использовать для установления подключения.'
permissions: 'Site administrators can configure SSH connections to a {% data variables.product.product_name %} instance.'
versions:
  ghes: '>= 3.6'
type: how_to
topics:
  - Authentication
  - Enterprise
  - Infrastructure
  - Networking
  - Security
  - SSH
ms.openlocfilehash: 9b2cc81a447018eef350e1c53857dd5a74a3099a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107544'
---
## Настройка SSH-подключений к экземпляру

{% data reusables.enterprise.about-ssh-ports %}

Чтобы разместить клиенты SSH в вашей среде, можно настроить типы подключений, которые будет принимать {% data variables.location.product_location %}.

## Настройка SSH-подключений с помощью ключей RSA

Когда пользователи выполняют операции Git с {% data variables.location.product_location %} через SSH через порт 22, клиент может пройти проверку подлинности с помощью ключа RSA. Клиент может подписать попытку с помощью хэш-функции SHA-1. В этом контексте хэш-функция SHA-1 больше не является безопасной. Дополнительные сведения см. в статье [SHA-1 ](https://en.wikipedia.org/wiki/SHA-1) в Википедии.

По умолчанию{% ifversion ghes < 3.7 %} в {% data variables.product.product_name %} 3.6 и более поздних версий{% endif %}, подключения SSH, удовлетворяющие **обоим** следующим условиям, завершаются ошибкой.

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

Вы можете настроить дату прекращения. Если пользователь загрузил ключ RSA до даты прекращения, клиент может по-прежнему успешно устанавливать подключение с помощью SHA-1, пока ключ остается действительным. Кроме того, можно отклонить все подключения SSH, прошедшие проверку подлинности с помощью ключа RSA, если клиент подписывает подключение с помощью хэш-функции SHA-1.

Независимо от выбранных параметров экземпляра клиенты могут по-прежнему подключаться с использованием любого ключа RSA, подписанного хэш-функцией SHA-2.

Если вы используете центр сертификации SSH, подключения завершаются ошибкой, если дата `valid_after` сертификата установлена позднее, чем дата прекращения. Дополнительные сведения см. в разделе [Сведения о центрах сертификации SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities).

Дополнительные сведения см. в [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server).

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Проверьте журналы экземпляра на наличие подключений, использующих небезопасные алгоритмы или хэш-функции, используя для этого служебную программу `ghe-find-insecure-git-operations`. Дополнительные сведения см. в статье "[Программы командной строки](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-find-insecure-git-operations)".
1. Чтобы настроить дату отсечения, по истечении которой {% data variables.location.product_location %} будет запрещать подключения от клиентов, использующих ключ RSA, отправленный после даты, если соединение подписано хэш-функцией SHA-1, введите следующую команду. Замените _**RFC-3399-UTC-TIMESTAMP**_ допустимой меткой времени RFC 3399 UTC. Например, значение по умолчанию "1 августа 2022 г." будет представлено как `2022-08-01T00:00:00Z`. Дополнительные сведения см. в разделе [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) на веб-сайте IETF.

   <pre>
   $ ghe-config app.gitauth.rsa-sha1 RFC-3339-UTC-TIMESTAMP
   </pre>
1. Кроме того, чтобы полностью отключить SSH-подключения, использующие ключи RSA, подписанные с помощью хэш-функции SHA-1, введите следующую команду.

   ```shell
   ghe-config app.gitauth.rsa-sha1 false
   ```
{% data reusables.enterprise.apply-configuration %}
