---
title: Установка сервера GitHub Enterprise на OpenStack KVM
intro: 'Чтобы установить {% data variables.product.prodname_ghe_server %} на OpenStack KVM, необходимо получить доступ к OpenStack и загрузить образ QCOW2 {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-openstack-kvm
  - /enterprise/admin/installation/installing-github-enterprise-server-on-openstack-kvm
  - /admin/installation/installing-github-enterprise-server-on-openstack-kvm
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on OpenStack
ms.openlocfilehash: 7b0f84fa34a0d4177b8a6f316d2b8c7d724c987a
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098383'
---
## Предварительные требования

- {% data reusables.enterprise_installation.software-license %}
- У вас должен быть доступ к установке OpenStack Horizon, пользовательского веб-интерфейса к службам OpenStack. Дополнительные сведения см. в статье [Документация по Horizon](https://docs.openstack.org/horizon/latest/).

## Рекомендации по оборудованию

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Скачивание образа {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. В локальной среде "{% data variables.product.prodname_dotcom %}" выберите раскрывающееся меню "Выберите свой гипервизор" и нажмите кнопку **OpenStack KVM (QCOW2)** .
5. Нажмите **Скачать OpenStack KVM (QCOW2)** .

## Создание экземпляра {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. В OpenStack Horizon отправьте скаченный вами образ {% data variables.product.prodname_ghe_server %}. Инструкции см. в разделе "Отправка образа" руководства OpenStack "[Отправка образов и управление ими](https://docs.openstack.org/horizon/latest/user/manage-images.html)".
{% data reusables.enterprise_installation.create-attached-storage-volume %} Инструкции см. в руководстве OpenStack "[Создание томов и управление ими](https://docs.openstack.org/horizon/latest/user/manage-volumes.html)".
3. Создайте группу безопасности и добавьте новое правило группы безопасности для каждого порта в таблице ниже. Инструкции см. в руководстве OpenStack "[Настройка доступа и безопасности для экземпляров](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html)".

  {% data reusables.enterprise_installation.necessary_ports %}
4. При необходимости свяжите плавающий IP-адрес с экземпляром. В зависимости от настройки OpenStack может потребоваться выделить плавающий IP-адрес для проекта и связать его с экземпляром. Чтобы определить, подходит ли это для вас, обратитесь к системному администратору. Дополнительные сведения см. в разделе "[Выделение плавающего IP-адреса экземпляру](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html#allocate-a-floating-ip-address-to-an-instance)" в документации OpenStack.
5. Запустите {% данных variables.location.product_location %} с помощью образа, тома данных и группы безопасности, созданной на предыдущих шагах. Инструкции см. в руководстве OpenStack "[Запуск экземпляров и управление ими](https://docs.openstack.org/horizon/latest/user/launch-instances.html)".

## Настройка экземпляра {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Дополнительные сведения см. в статье [Настройка устройства {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance).
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Дополнительные материалы

- [Обзор системы](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [Сведения об обновлении до новых выпусков](/admin/overview/about-upgrades-to-new-releases){% endif %}
