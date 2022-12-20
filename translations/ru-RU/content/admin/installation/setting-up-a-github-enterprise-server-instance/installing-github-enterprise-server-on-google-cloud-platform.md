---
title: "Установка сервера GitHub Enterprise на Google\_Cloud\_Platform"
intro: 'Чтобы установить {% data variables.product.prodname_ghe_server %} на платформу Google Cloud Platform, необходимо развернуть на компьютере поддерживаемого типа и использовать постоянный стандартный диск или постоянный SSD.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-google-cloud-platform
  - /enterprise/admin/installation/installing-github-enterprise-server-on-google-cloud-platform
  - /admin/installation/installing-github-enterprise-server-on-google-cloud-platform
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on GCP
ms.openlocfilehash: d996dbfa32cf76e5d86b5b66da1c068d1c5177d8
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094276'
---
## Предварительные требования

- {% data reusables.enterprise_installation.software-license %}
- У вас должна быть учетная запись Google Cloud Platform, способная запускать экземпляры виртуальной машины (VM) Google Compute Engine (GCE). Дополнительные сведения см. на [веб-сайте Google Cloud Platform](https://cloud.google.com/) и в [документации Google Cloud Platform](https://cloud.google.com/docs/).
- Большинство действий, необходимых для запуска экземпляра, также могут выполняться с помощью [консоли Google Cloud Platform](https://cloud.google.com/compute/docs/console). Однако для начальной настройки рекомендуется установить средство командной строки вычислений gcloud. Ниже приведены примеры использования средства командной строки вычислений gcloud. Дополнительные сведения см. в руководстве по установке и настройке [вычислений gcloud](https://cloud.google.com/compute/docs/gcloud-compute/) в документации Google.

## Рекомендации по оборудованию

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Определение типа компьютера

Перед запуском {% данных variables.location.product_location %} на Google Cloud Platform необходимо определить тип компьютера, который лучше всего соответствует потребностям вашей организации. Минимальные требования для {% data variables.product.product_name %} см. в статье [Минимальные требования](#minimum-requirements).

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data variables.product.company_short %} рекомендует компьютер с высокой памятью общего назначения для {% data variables.product.prodname_ghe_server %}. Дополнительные сведения см. в разделе [Типы компьютеров](https://cloud.google.com/compute/docs/machine-types#n2_high-memory_machine_types) в документации по Google Compute Engine.

## Выбор образа {% data variables.product.prodname_ghe_server %}

1. С помощью программы командной строки [вычислений gcloud](https://cloud.google.com/compute/docs/gcloud-compute/) выведите список общедоступных образов {% data variables.product.prodname_ghe_server %}:
   ```shell
   $ gcloud compute images list --project github-enterprise-public --no-standard-images
   ```

2. Запишите имя образа для последнего образа GCE {% data variables.product.prodname_ghe_server %}.

## Настройка брандмауэра

Виртуальные машины GCE создаются как член сети, которая имеет брандмауэр. Для сети, связанной с виртуальной машиной {% data variables.product.prodname_ghe_server %}, необходимо настроить брандмауэр, чтобы разрешить необходимые порты, перечисленные в таблице ниже. Дополнительные сведения о правилах брандмауэра на Google Cloud Platform см. в руководстве Google [Обзор правил брандмауэра](https://cloud.google.com/vpc/docs/firewalls).

1. Создайте сеть с помощью средства командной строки вычислений gcloud. Дополнительные сведения см. в разделе [Создание сетей для вычислений gcloud](https://cloud.google.com/sdk/gcloud/reference/compute/networks/create) в документации Google.
   ```shell
   $ gcloud compute networks create NETWORK-NAME --subnet-mode auto
   ```
2. Создайте правило брандмауэра для каждого порта в таблице ниже. Дополнительные сведения см. в разделе [Правила брандмауэра для вычислений gcloud](https://cloud.google.com/sdk/gcloud/reference/compute/firewall-rules/) в документации Google.
   ```shell
   $ gcloud compute firewall-rules create RULE-NAME \
   --network NETWORK-NAME \
   --allow tcp:22,tcp:25,tcp:80,tcp:122,udp:161,tcp:443,udp:1194,tcp:8080,tcp:8443,tcp:9418,icmp
   ```
   В этой таблице определены необходимые порты и то, для чего используется каждый порт.

   {% data reusables.enterprise_installation.necessary_ports %}

## Выделение статического IP-адреса и его назначение виртуальной машине

Если это производственное устройство, настоятельно рекомендуется зарезервировать статический внешний IP-адрес и назначить его виртуальной машине {% data variables.product.prodname_ghe_server %}. В противном случае общедоступный IP-адрес виртуальной машины не будет сохранен после перезапуска. Дополнительные сведения см. в руководстве Google [Резервирование статического внешнего IP-адреса](https://cloud.google.com/compute/docs/configure-instance-ip-addresses).

В конфигурациях высокого уровня доступности в рабочей среде основное устройство и устройство-реплика должны назначаться отдельным статическим IP-адресам.

## Создание экземпляра {% data variables.product.prodname_ghe_server %}

Чтобы создать экземпляр {% data variables.product.prodname_ghe_server %}, необходимо создать экземпляр GCE с вашим образом {% data variables.product.prodname_ghe_server %} и подключить дополнительный том хранилища для данных экземпляра. Дополнительные сведения см. в разделе [Рекомендации в отношении оборудования](#hardware-considerations).

1. С помощью инструмента командной строки вычислений gcloud создайте диск данных, который будет использоваться в качестве подключенного тома хранилища для данных вашего экземпляра, и настройте размер в зависимости от количества пользовательских лицензий. Дополнительные сведения см. в разделе [Создание дисков для вычислений gcloud](https://cloud.google.com/sdk/gcloud/reference/compute/disks/create) в документации Google.
   ```shell
   $ gcloud compute disks create DATA-DISK-NAME --size DATA-DISK-SIZE --type DATA-DISK-TYPE --zone ZONE
   ```

2. Затем создайте экземпляр, используя имя образа {% data variables.product.prodname_ghe_server %}, который вы выбрали, и подключите диск с данными. Дополнительные сведения см. в разделе [Создание экземпляров для вычислений gcloud](https://cloud.google.com/sdk/gcloud/reference/compute/instances/create) в документации Google.
   ```shell
   $ gcloud compute instances create INSTANCE-NAME \
   --machine-type n1-standard-8 \
   --image GITHUB-ENTERPRISE-IMAGE-NAME \
   --disk name=DATA-DISK-NAME \
   --metadata serial-port-enable=1 \
   --zone ZONE \
   --network NETWORK-NAME \
   --image-project github-enterprise-public
   ```

## Настройка экземпляра

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Дополнительные сведения см. в разделе [Настройка устройства {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance).
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Дополнительные материалы

- [Обзор системы](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [Сведения об обновлении до новых выпусков](/admin/overview/about-upgrades-to-new-releases){% endif %}
