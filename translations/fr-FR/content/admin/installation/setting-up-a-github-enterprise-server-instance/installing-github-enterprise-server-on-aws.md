---
title: Installation de GitHub Enterprise Server sur AWS
intro: 'Pour installer {% data variables.product.prodname_ghe_server %} sur Amazon Web Services (AWS), vous devez lancer une instance Amazon Elastic Compute Cloud (EC2), puis créer et attacher un volume de données Amazon Elastic Block Store (EBS) distinct.'
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
ms.openlocfilehash: f91f2337cc13690d0476c836a15ec72a5c0685cb
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147876967'
---
## Prérequis

- {% data reusables.enterprise_installation.software-license %}
- Vous devez disposer d’un compte AWS capable de lancer des instances EC2 et de créer des volumes EBS. Pour plus d’informations, consultez le [site web Amazon Web Services](https://aws.amazon.com/).
- La plupart des actions nécessaires au lancement de {% data variables.product.product_location %} peuvent également être effectuées à l’aide d’AWS Management Console. Toutefois, nous vous recommandons d’installer l’interface de ligne de commande (CLI) AWS pour la configuration initiale. Vous trouverez ci-dessous des exemples utilisant l’interface CLI AWS. Pour plus d’informations, consultez les guides d’Amazon « [Qu’est-ce que AWS Management Console ?](http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/getting-started.html) » et « [What is the AWS Command Line Interface](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html) » (Qu’est-ce que l’interface de ligne de commande AWS ?).

{% note %}

**Remarque :** Pour l’heure, {% data variables.product.prodname_ghe_server %} ne prend pas en charge l’utilisation d’Amazon IDMSv2 Metadata API.

{% endnote %}

Ce guide suppose que vous connaissez les concepts AWS suivants :

 - [Lancement d’instances EC2](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/LaunchingAndUsingInstances.html)
 - [Gestion des volumes EBS](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html)
 - [Utilisation de groupes de sécurité](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html) (pour la gestion de l’accès réseau à votre instance)
 - [Adresses IP Elastic (EIP)](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) (fortement recommandées pour les environnements de production)
 - [EC2 et VPC (Virtual Private Cloud)](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html) (si vous envisagez un lancement dans un cloud privé virtuel)
 - [Tarifs AWS](https://aws.amazon.com/pricing/) (pour le calcul et la gestion des coûts)

Pour une vue d’ensemble de l’architecture, consultez le « [diagramme d’architecture AWS pour le déploiement de GitHub Enterprise Server](/assets/images/installing-github-enterprise-server-on-aws.png) ». 

Ce guide recommande d’appliquer le principe des privilèges minimum pour la configuration de {% data variables.product.product_location %} sur AWS. Pour plus d’informations, reportez-vous à la [documentation sur AWS Identity and Access Management (IAM)](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege).

## Considérations matérielles

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Détermination du type d’instance

Avant de lancer {% data variables.product.product_location %} sur AWS, vous devez déterminer le type de machine qui répond le mieux aux besoins de votre organisation. Pour voir la configuration minimale requise pour {% data variables.product.product_name %}, consultez « [Configuration minimale requise](#minimum-requirements) ».

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

## Sélection de l’AMI {% data variables.product.prodname_ghe_server %}

Vous pouvez sélectionner une AMI (Amazon Machine Image) pour {% data variables.product.prodname_ghe_server %} à l’aide du portail {% data variables.product.prodname_ghe_server %} ou de l’interface CLI AWS.

Les AMI pour {% data variables.product.prodname_ghe_server %} sont disponibles dans la région AWS GovCloud (USA Est et USA Ouest). Les clients américains ayant des exigences réglementaires spécifiques peuvent ainsi exécuter {% data variables.product.prodname_ghe_server %} dans un environnement cloud conforme aux normes fédérales. Pour plus d’informations sur la conformité d’AWS aux normes (notamment fédérales), consultez les pages [AWS GovCloud (US)](http://aws.amazon.com/govcloud-us/) et [Conformité AWS](https://aws.amazon.com/compliance/).

### Utilisation du portail {% data variables.product.prodname_ghe_server %} pour sélectionner une AMI

{% data reusables.enterprise_installation.download-appliance %}
3. Sous « {% data variables.product.prodname_dotcom %} dans le cloud », sélectionnez le menu déroulant « Sélectionner votre plateforme », puis cliquez sur **Amazon Web Services**.
4. Sélectionnez le menu déroulant « Sélectionner votre région AWS » et cliquez sur la région souhaitée.
5. Notez l’ID d’AMI affiché.

### Utilisation de l’interface CLI AWS pour sélectionner une AMI

1. À l’aide de l’interface CLI AWS, listez les images de {% data variables.product.prodname_ghe_server %} publiées par ID de propriétaire AWS de {% data variables.product.prodname_dotcom %} (`025577942450` pour GovCloud et `895557238572` pour les autres régions). Pour plus d’informations, consultez « [describe-images](http://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html) » dans la documentation AWS.
  ```shell
  aws ec2 describe-images \
  --owners <em>OWNER ID</em> \
  --query 'sort_by(Images,&Name)[*].{Name:Name,ImageID:ImageId}' \
  --output=text
  ```
2. Notez l’ID d’AMI de l’image de {% data variables.product.prodname_ghe_server %} la plus récente.

## Création d’un groupe de sécurité

Si vous configurez votre AMI pour la première fois, vous devez créer un groupe de sécurité et ajouter une nouvelle règle de groupe de sécurité pour chaque port indiqué dans le tableau ci-dessous. Pour plus d’informations, consultez le guide AWS « [Utilisation de groupes de sécurité](http://docs.aws.amazon.com/cli/latest/userguide/cli-ec2-sg.html) ».

1. À l’aide de l’interface CLI AWS, créez un groupe de sécurité. Pour plus d’informations, consultez « [create-security-group](http://docs.aws.amazon.com/cli/latest/reference/ec2/create-security-group.html) » dans la documentation AWS.
  ```shell
  $ aws ec2 create-security-group --group-name <em>SECURITY_GROUP_NAME</em> --description "<em>SECURITY GROUP DESCRIPTION</em>"
  ```

2. Notez l’ID du groupe de sécurité (`sg-xxxxxxxx`) de votre groupe de sécurité nouvellement créé.

3. Créez une règle de groupe de sécurité pour chacun des ports du tableau ci-dessous. Pour plus d’informations, consultez « [authorize-security-group-ingress](http://docs.aws.amazon.com/cli/latest/reference/ec2/authorize-security-group-ingress.html) » dans la documentation AWS.
  ```shell
  $ aws ec2 authorize-security-group-ingress --group-id <em>SECURITY_GROUP_ID</em> --protocol <em>PROTOCOL</em> --port <em>PORT_NUMBER</em> --cidr <em>SOURCE IP RANGE</em>
  ```
  Ce tableau identifie le rôle de chaque port.

  {% data reusables.enterprise_installation.necessary_ports %}

## Création de l’instance {% data variables.product.prodname_ghe_server %}

Pour créer l’instance, vous devez lancer une instance EC2 avec votre AMI {% data variables.product.prodname_ghe_server %} et attacher un volume de stockage supplémentaire pour vos données d’instance. Pour plus d’informations, consultez « [Considérations matérielles](#hardware-considerations) ».

{% note %}

**Remarque :** Vous pouvez chiffrer le disque de données pour renforcer votre sécurité et assurer la protection de toutes les données que vous écrivez sur votre instance. L’utilisation de disques chiffrés impacte légèrement les performances. Si vous décidez de chiffrer votre volume, nous vous recommandons vivement de le faire **avant** le premier démarrage de votre instance.
Pour plus d’informations, consultez le [guide Amazon sur le chiffrement EBS](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html).

{% endnote %}

{% warning %}

**Avertissement :** Si vous décidez d’activer le chiffrement après avoir configuré votre instance, vous devez migrer vos données vers le volume chiffré, ce qui entraîne un temps d’arrêt pour vos utilisateurs.

{% endwarning %}

### Lancement d’une instance EC2

Dans l’interface CLI AWS, lancez une instance EC2 en utilisant votre AMI et le groupe de sécurité que vous avez créé. Attachez un nouveau périphérique de stockage en mode bloc à utiliser comme volume de stockage pour vos données d’instance et configurez la taille en fonction du nombre de licences utilisateur. Pour plus d’informations, consultez « [run-instances](http://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html) » dans la documentation AWS.

```shell
aws ec2 run-instances \
  --security-group-ids <em>SECURITY_GROUP_ID</em> \
  --instance-type <em>INSTANCE_TYPE</em> \
  --image-id <em>AMI_ID</em> \
  --block-device-mappings '[{"DeviceName":"/dev/xvdf","Ebs":{"VolumeSize":<em>SIZE</em>,"VolumeType":"<em>TYPE</em>"}}]' \
  --region <em>REGION</em> \
  --ebs-optimized
```

### Allocation d’une IP Elastic et association de celle-ci à l’instance

S’il s’agit d’une instance de production, nous vous recommandons vivement d’allouer une IP Elastic (EIP) et de l’associer à l’instance avant de passer à la configuration de {% data variables.product.prodname_ghe_server %}. Sinon, l’adresse IP publique de l’instance ne sera pas conservée après le redémarrage de l’instance. Pour plus d’informations, consultez « [Allouer une adresse IP Elastic](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-allocating) » et « [Associer une adresse IP Elastic à une instance ou une interface réseau](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-associating) » dans la documentation Amazon.  

Dans les configurations de production à haute disponibilité, des adresses IP Elastic distinctes doivent être affectées aux instances principales et de réplica. Pour plus d’informations, consultez « [Configuration de {% data variables.product.prodname_ghe_server %} pour la haute disponibilité](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/) ».

## Configuration de l’instance {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Pour plus d’informations, consultez « [Configuration de l’appliance {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance) ».
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Pour aller plus loin

- « [Vue d’ensemble du système](/enterprise/admin/guides/installation/system-overview) »{% ifversion ghes %}
- « [À propos des mises à niveau vers de nouvelles mises en production](/admin/overview/about-upgrades-to-new-releases) »{% endif %}
