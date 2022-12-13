---
title: Установка сервера GitHub Enterprise в AWS
intro: 'Чтобы установить {% data variables.product.prodname_ghe_server %} в Amazon Web Services (AWS), необходимо запустить экземпляр Amazon Elastic Compute Cloud (EC2), а затем создать и подключить отдельный том данных Amazon Elastic Block Store (EBS).'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-aws
  - /enterprise/admin/installation/installing-github-enterprise-server-on-aws
  - /admin/installation/installing-github-enterprise-server-on-aws
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on AWS
ms.openlocfilehash: ff48a8cd466a14259dfe1da895c3b7aa6621df82
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094116'
---
## Предварительные требования

- {% data reusables.enterprise_installation.software-license %}
- У вас должна быть учетная запись AWS, способная запускать экземпляры EC2 и создавать тома EBS. Дополнительные сведения см. на [веб-сайте Amazon Web Services](https://aws.amazon.com/).
- Большинство действий, необходимых для запуска {% данных variables.location.product_location %}, также могут выполняться с помощью консоли управления AWS. Однако для начальной настройки рекомендуется установить интерфейс командной строки (CLI) AWS. Ниже приведены примеры использования интерфейса командной строки AWS. Дополнительные сведения см. в руководствах Amazon [Работа с консолью управления AWS](http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/getting-started.html) и [Что такое интерфейс командной строки AWS](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html).

{% note %}

**Примечание.** В настоящее время {% data variables.product.prodname_ghe_server %} не поддерживает использование API метаданных Amazon IDMSv2.

{% endnote %}

Содержимое этого руководства предполагает, что пользователь уже знаком со следующими понятиями AWS:

 - [Запуск экземпляров EC2](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/LaunchingAndUsingInstances.html);
 - [Управление томами EBS](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html)'
 - [Использование групп безопасности](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html) (для управления сетевым доступом к экземпляру);
 - [Эластичные IP-адреса (EIP)](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) (настоятельно рекомендуется для рабочих сред);
 - [EC2 и виртуальное частное облако](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html) (если планируется запустить виртуальное частное облако);
 - [Цены AWS](https://aws.amazon.com/pricing/) (для расчета затрат и управления ими).

Общие сведения об архитектуре см. в статье [Схема архитектуры AWS для развертывания сервера GitHub Enterprise](/assets/images/installing-github-enterprise-server-on-aws.png). 

В этом руководстве рекомендуется принцип минимальных привилегий при настройке {% данных variables.location.product_location %} в AWS. Дополнительные сведения см. в [документации по управлению идентификацией и доступом (IAM) AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege).

## Рекомендации по оборудованию

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Определение типа экземпляра

Перед запуском {% данных variables.location.product_location %} в AWS необходимо определить тип компьютера, который лучше всего соответствует потребностям вашей организации. Минимальные требования для {% data variables.product.product_name %} см. в статье [Минимальные требования](#minimum-requirements).

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

## Выбор образа AMI {% data variables.product.prodname_ghe_server %}

Образ компьютера Amazon (AMI) можно выбрать для {% data variables.product.prodname_ghe_server %} с помощью портала {% data variables.product.prodname_ghe_server %} или интерфейса командной строки AWS.

Образы AMI для {% data variables.product.prodname_ghe_server %} доступны в регионе AWS GovCloud (восточная часть США и западная часть США). Это позволяет клиентам из США с определенными нормативными требованиями запускать {% data variables.product.prodname_ghe_server %} в облачной среде, соответствующей федеральным стандартам. Дополнительные сведения о соответствии AWS федеральным и другим стандартам см. на [странице AWS GovCloud (США)](http://aws.amazon.com/govcloud-us/) и на [странице соответствия требованиям AWS](https://aws.amazon.com/compliance/).

### Использование портала {% data variables.product.prodname_ghe_server %} для выбора AMI

{% data reusables.enterprise_installation.download-appliance %}
3. В разделе "{% data variables.product.prodname_dotcom %} в облаке" выберите раскрывающееся меню "Выбор платформы" и щелкните **Amazon Web Services**.
4. Выберите раскрывающееся меню "Выберите регион AWS" и щелкните нужный регион.
5. Запишите отображаемый идентификатор AMI.

### Выбор AMI с помощью интерфейса командной строки AWS

1. С помощью интерфейса командной строки AWS получите список идентификаторов образов {% data variables.product.prodname_ghe_server %}, опубликованных владельцем AWS {% data variables.product.prodname_dotcom %} (`025577942450` для GovCloud и `895557238572` для других регионов). Дополнительные сведения см. в статье [Описание образов](http://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html) в документации AWS.
  ```shell
  aws ec2 describe-images \
  --owners OWNER_ID \
  --query 'sort_by(Images,&Name)[*].{Name:Name,ImageID:ImageId}' \
  --output=text
  ```
2. Запишите идентификатор AMI для последнего образа {% data variables.product.prodname_ghe_server %}.

## Создание группы безопасности

Если вы настраиваете AMI в первый раз, необходимо создать группу безопасности и добавить новое правило группы безопасности для каждого порта в таблице ниже. Дополнительные сведения см. в руководстве AWS [Использование групп безопасности](http://docs.aws.amazon.com/cli/latest/userguide/cli-ec2-sg.html).

1. С помощью интерфейса командной строки AWS создайте новую группу безопасности. Дополнительные сведения см. в статье [Создание группы безопасности](http://docs.aws.amazon.com/cli/latest/reference/ec2/create-security-group.html) в документации AWS.
  ```shell
  $ aws ec2 create-security-group --group-name SECURITY_GROUP_NAME --description "SECURITY GROUP DESCRIPTION"
  ```

2. Запишите идентификатор созданной группы безопасности (`sg-xxxxxxxx`).

3. Создайте правило группы безопасности для каждого порта в таблице ниже. Дополнительные сведения см. в разделе [Как разрешить входящий трафик в группу безопасности](http://docs.aws.amazon.com/cli/latest/reference/ec2/authorize-security-group-ingress.html) в документации AWS.
  ```shell
  $ aws ec2 authorize-security-group-ingress --group-id SECURITY_GROUP_ID --protocol PROTOCOL --port PORT_NUMBER --cidr SOURCE IP RANGE
  ```
  Эта таблица определяет, для чего используется каждый порт.

  {% data reusables.enterprise_installation.necessary_ports %}

## Создание экземпляра {% data variables.product.prodname_ghe_server %}

Чтобы создать экземпляр, необходимо запустить экземпляр EC2 с AMI {% data variables.product.prodname_ghe_server %} и подключить дополнительный том хранилища для данных экземпляра. Дополнительные сведения см. в разделе [Рекомендации в отношении оборудования](#hardware-considerations).

{% note %}

**Примечание.** Вы можете зашифровать диск данных, чтобы получить дополнительный уровень защиты для данных, записываемых в экземпляр. При использовании зашифрованных дисков наблюдается небольшое снижение производительности. Если вы решили зашифровать том, мы настоятельно рекомендуем сделать это **перед** первым запуском экземпляра.
Дополнительные сведения см. в [руководстве Amazon по шифрованию EBS](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html).

{% endnote %}

{% warning %}

**Внимание!** Если вы решили включить шифрование после настройки экземпляра, вам потребуется перенести данные в зашифрованный том, что приведет к простою для пользователей.

{% endwarning %}

### Запуск экземпляра EC2

В интерфейсе командной строки AWS запустите экземпляр EC2 с помощью AMI и созданной группы безопасности. Подключите новое блочное устройство для использования в качестве тома хранилища для данных экземпляра и настройте размер в соответствии с количеством лицензий пользователей. Дополнительные сведения см. в статье [Запуск экземпляров](http://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html) в документации AWS.

```shell
aws ec2 run-instances \
  --security-group-ids SECURITY_GROUP_ID \
  --instance-type INSTANCE_TYPE \
  --image-id AMI_ID \
  --block-device-mappings '[{"DeviceName":"/dev/xvdf","Ebs":{"VolumeSize":SIZE,"VolumeType":"TYPE"}}]' \
  --region REGION \
  --ebs-optimized
```

### Выделение эластичного IP-адреса и связывание его с экземпляром

Если экземпляр рабочий, мы настоятельно рекомендуем выделить эластичный IP-адрес (EIP) и связать его с экземпляром, прежде чем переходить к конфигурации {% data variables.product.prodname_ghe_server %}. В противном случае общедоступный IP-адрес экземпляра не будет сохранен после перезапуска экземпляра. Дополнительные сведения см. в статье [Выделение эластичного IP-адреса](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-allocating) и [Связывание эластичного IP-адреса с запущенным экземпляром](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-associating) в документации Amazon.  

В конфигурациях высокого уровня доступности в рабочей среде основной экземпляр и экземпляр-реплика должны назначаться отдельным эластичным IP-адресам. Дополнительные сведения см. в разделе [Настройка {% data variables.product.prodname_ghe_server %} для обеспечения высокого уровня доступности](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/).

## Настройка экземпляра {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Дополнительные сведения см. в статье [Настройка устройства {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance).
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Дополнительные материалы

- [Обзор системы](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [Сведения об обновлении до новых выпусков](/admin/overview/about-upgrades-to-new-releases){% endif %}
