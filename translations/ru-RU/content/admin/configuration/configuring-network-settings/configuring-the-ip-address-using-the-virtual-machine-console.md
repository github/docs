---
title: Настройка IP-адреса с помощью консоли виртуальной машины
intro: 'По умолчанию {% data variables.product.prodname_ghe_server %} извлекает параметры сети с помощью протокола DHCP. Можно также настроить параметры сети с помощью консоли виртуальной машины, если платформа поддерживает эту функцию или если DHCP недоступен.'
redirect_from:
  - /enterprise/admin/installation/configuring-the-ip-address-using-the-virtual-machine-console
  - /enterprise/admin/configuration/configuring-the-ip-address-using-the-virtual-machine-console
  - /admin/configuration/configuring-the-ip-address-using-the-virtual-machine-console
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Set the IP using the console
ms.openlocfilehash: db183677409757e516515a5ac7def5a70affd01f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120771'
---
{% note %}

**Примечание.** Мы не поддерживаем добавление дополнительных сетевых адаптеров в {% data variables.product.prodname_ghe_server %}.

{% endnote %}

{% data reusables.enterprise_installation.open-vm-console-start %}
3. Выберите настройку `IPv4` или протокол `IPv6`.
  ![Параметры выбора протокола IPv4 или IPv6](/assets/images/enterprise/network-configuration/IPv4-or-IPv6-protocol.png)
4. Настройте параметры для выбранного протокола.
  ![Меню с параметрами протокола IP](/assets/images/enterprise/network-configuration/network-settings-selection.png) {% data reusables.enterprise_installation.vm-console-done %}
