---
title: Увеличение ресурсов ЦП или памяти
intro: 'Можно увеличить ресурсы ЦП или памяти для экземпляра {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/installation/increasing-cpu-or-memory-resources
  - /enterprise/admin/enterprise-management/increasing-cpu-or-memory-resources
  - /admin/enterprise-management/increasing-cpu-or-memory-resources
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
shortTitle: Increase CPU or memory
ms.openlocfilehash: 05feac78259f145f72bdcd423eff90c331949cb1
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098767'
---
{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

{% note %}

**Примечание.** Перед увеличением ресурсов ЦП или памяти переведите экземпляр в режим обслуживания.{% ifversion ip-exception-list %} Можно проверить изменения, настроив список исключений IP-адресов, чтобы разрешить доступ с указанных IP-адресов. {% endif %} Дополнительные сведения см. в разделе [Включение и планирование режима обслуживания](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode).

{% endnote %}

## Добавление ресурсов ЦП или памяти для AWS

{% note %}

**Примечание.** Чтобы добавить ресурсы ЦП или памяти для AWS, необходимо уметь использовать консоль управления AWS или интерфейс командной строки `aws ec2` для управления экземплярами EC2. Дополнительные сведения об использовании инструментов AWS для изменения размера см. в документации AWS по [изменению размера экземпляра на основе Amazon EBS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html).

{% endnote %}

### Рекомендации по изменению размера

Перед увеличением ресурсов ЦП или памяти для {% данных variables.location.product_location %}ознакомьтесь со следующими рекомендациями.

- **Масштабирование памяти с помощью ЦП**. {% data reusables.enterprise_installation.increasing-cpus-req %}
- **Назначьте экземпляру IP-адрес Elastic**. Если вы не назначили экземпляру IP-адрес Elastic, необходимо настроить записи DNS A для узла {% data variables.product.prodname_ghe_server %} после перезапуска, чтобы учесть изменение общедоступного IP-адреса. После перезапуска экземпляра он сохранит IP-адреса Elastic при запуске экземпляра в виртуальном частном облаке (VPC). При создании экземпляра в сети EC2-Classic необходимо вручную переназначить IP-адрес Elastic экземпляру.

### Поддерживаемые типы экземпляров AWS

Необходимо определить тип экземпляра, который требуется обновить в соответствии со спецификациями ЦП и памяти.

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

### Изменение размера для AWS

{% note %}

**Примечание.** Для экземпляров, запущенных в EC2-Classic, запишите IP-адрес Elastic, связанный с экземпляром, и идентификатор экземпляра. После перезапуска экземпляра повторно настройте связь для IP-адреса Elastic.

{% endnote %}

Невозможно добавить ресурсы ЦП или памяти в существующий экземпляр AWS/EC2. Вместо этого необходимо выполнить следующие действия:

1. Остановите экземпляр.
2. Изменение типа экземпляра.
3. Запустите экземпляр.
{% data reusables.enterprise_installation.configuration-recognized %}

## Добавление ресурсов ЦП или памяти в Microsoft Azure

{% note %}

**Примечание.** Чтобы добавить ресурсы ЦП или памяти в Microsoft Azure, необходимо знать, как использовать портал Azure, Azure CLI или Azure PowerShell для управления экземплярами виртуальных машин. Дополнительные сведения об использовании выбранных средств Azure для изменения размера см. в документации Azure по [изменению размера виртуальной машины](https://docs.microsoft.com/en-us/azure/virtual-machines/resize-vm).

{% endnote %}

### Рекомендации по изменению размера

Перед увеличением ресурсов ЦП или памяти для {% данных variables.location.product_location %}ознакомьтесь со следующими рекомендациями.

- **Масштабирование памяти с помощью ЦП**. {% data reusables.enterprise_installation.increasing-cpus-req %}
- **Назначьте экземпляру статический IP-адрес**. Если вы не назначили экземпляру статический IP-адрес, необходимо настроить записи DNS A для узла {% data variables.product.prodname_ghe_server %} после перезапуска, чтобы учесть изменение IP-адреса.

### Поддерживаемые размеры экземпляров Microsoft Azure

Необходимо определить размер экземпляра, который требуется обновить в соответствии со спецификациями ЦП и памяти.

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.azure-instance-recommendation %}

### Изменение размера для Microsoft Azure

Масштабировать виртуальную машину можно, изменяя ее размер. При изменении размера виртуальной машины выполняется ее перезапуск. В некоторых случаях сначала необходимо освободить виртуальную машину. Это может случиться, если новый размер недоступен в кластере оборудования, в котором она сейчас размещена. 

1. Для выполнения необходимых действий ознакомьтесь с документацией Azure по [изменению размера виртуальной машины](https://docs.microsoft.com/en-us/azure/virtual-machines/resize-vm).
{% data reusables.enterprise_installation.configuration-recognized %}

## Добавление ресурсов ЦП или памяти для KVM OpenStack

Невозможно добавить ресурсы ЦП или памяти в существующий экземпляр KVM OpenStack. Вместо этого необходимо выполнить следующие действия:

1. Создание моментального снимка текущего экземпляра.
2. Остановите экземпляр.
3. Выберите новый вариант приложения экземпляра, который содержит нужные ресурсы ЦП и (или) памяти.

## Добавление ресурсов ЦП или памяти для VMware

{% data reusables.enterprise_installation.increasing-cpus-req %}

1. Используйте клиент vSphere для подключения к узлу VMware ESXi.
2. Завершите работу {% данных variables.location.product_location %}.
3. Выберите виртуальную машину и нажмите кнопку **Изменить параметры**.
4. В разделе "Оборудование" настройте ресурсы ЦП и (или) памяти, выделяемые виртуальной машине по мере необходимости: ![ресурсы установки VMware](/assets/images/enterprise/vmware/vsphere-hardware-tab.png)
5. Чтобы запустить виртуальную машину, нажмите кнопку **ОК**.
{% data reusables.enterprise_installation.configuration-recognized %}
