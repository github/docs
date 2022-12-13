---
title: Установка сервера GitHub Enterprise в XenServer
intro: Чтобы установить {% data variables.product.prodname_ghe_server %} на XenServer, необходимо развернуть образ диска {% data variables.product.prodname_ghe_server %} на узле XenServer.
redirect_from:
- /enterprise/admin/guides/installation/installing-github-enterprise-on-xenserver
- /enterprise/admin/installation/installing-github-enterprise-server-on-xenserver
- /admin/installation/installing-github-enterprise-server-on-xenserver
versions:
  ghes: <=3.2
type: tutorial
topics:
- Administrator
- Enterprise
- Infrastructure
- Set up
shortTitle: Install on XenServer
ms.openlocfilehash: f4991244e74c9a61d953ecba08cc5c4985906fb6
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/12/2022
ms.locfileid: "145116523"
---
{% note %}

  **Примечание.** Поддержка {% data variables.product.prodname_ghe_server %} в XenServer будет прекращена в {% data variables.product.prodname_ghe_server %} версии 3.3. Дополнительные сведения см. в [заметках о выпуске {% data variables.product.prodname_ghe_server %} версии 3.1](/admin/release-notes#3.1.0)

{% endnote %}

## Предварительные требования

- {% data reusables.enterprise_installation.software-license %}
- Необходимо установить гипервизор XenServer на компьютере, на котором будет запущена виртуальная машина {% data variables.product.prodname_ghe_server %}. Поддерживаются версии 6,0–7,0.
- Для начальной настройки рекомендуется использовать консоль управления Windows для XenCenter. Инструкции по использованию консоли управления Windows для XenCenter представлены далее. Дополнительные сведения см. в руководстве по Citrix [Как скачать и установить новую версию XenCenter](https://support.citrix.com/article/CTX118531).

## Рекомендации по оборудованию

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Скачивание образа {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. В разделе "Локальный {% data variables.product.prodname_dotcom %}" выберите раскрывающееся меню "Выбор гипервизора" и щелкните **XenServer (VHD)** .
5. Чтобы скачать файл лицензии, щелкните **Скачать лицензию**.

## Создание экземпляра {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. В XenCenter импортируйте скачанный образ {% data variables.product.prodname_ghe_server %}. Инструкции см. в руководстве по XenCenter [Импорт образов дисков](https://docs.citrix.com/en-us/xencenter/current-release/vms-importdiskimage.html).
    - Для шага "Включить исправление операционной системы" выберите **Не использовать исправление операционной системы**.
    - По завершении оставьте виртуальную машину отключенной.
{% data reusables.enterprise_installation.create-attached-storage-volume %} Инструкции см. в руководстве по XenCenter [Добавление виртуальных дисков](https://docs.citrix.com/en-us/xencenter/current-release/vms-storage-addnewdisk.html).

## Настройка экземпляра {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Дополнительные сведения см. в статье [Настройка устройства {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance).
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Дополнительные материалы

- [Обзор системы](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [Сведения об обновлении до новых выпусков](/admin/overview/about-upgrades-to-new-releases){% endif %}
