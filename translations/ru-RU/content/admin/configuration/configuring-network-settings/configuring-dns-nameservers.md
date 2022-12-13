---
title: Настройка серверов доменных имен (DNS)
intro: '{% data variables.product.prodname_ghe_server %} использует протокол конфигурации динамического узла (DHCP) для параметров DNS, когда аренда DHCP предоставляет серверы доменных имен. Если серверы доменных имен не предоставляются в рамках аренды протокола DHCP или если вам нужно использовать определенные параметры DNS, можно указать серверы доменных имен вручную.'
redirect_from:
  - /enterprise/admin/guides/installation/about-dns-nameservers
  - /enterprise/admin/installation/configuring-dns-nameservers
  - /enterprise/admin/configuration/configuring-dns-nameservers
  - /admin/configuration/configuring-dns-nameservers
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure DNS servers
ms.openlocfilehash: d97a4557fd2d9837e2f6f78ad962b426a91d256c
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098071'
---
Указанные серверы доменных имен должны разрешать {% данных variables.location.product_location имени узла %}.

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

## Настройка серверов доменных имен с помощью консоли виртуальной машины

{% data reusables.enterprise_installation.open-vm-console-start %}
2. Настройте серверы доменных имен для своего экземпляра.
{% data reusables.enterprise_installation.vm-console-done %}

## Настройка серверов доменных имен с помощью административной оболочки

{% data reusables.enterprise_installation.ssh-into-instance %}

2. Чтобы изменить серверы доменных имен, воспользуйтесь командой `ghe-setup-network` в визуальном режиме. Дополнительные сведения см. в статье "[Программы командной строки](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-setup-network)".

  ```shell
  ghe-setup-network -v
  ```

5. Чтобы добавить новые записи сервера доменных имен в {% данных variables.location.product_location %}, выполните следующую команду:

  ```shell
  sudo service resolvconf restart
  sudo service dnsmasq restart
  ```
