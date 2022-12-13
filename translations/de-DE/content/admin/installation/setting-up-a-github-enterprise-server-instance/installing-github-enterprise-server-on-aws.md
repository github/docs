---
title: GitHub Enterprise Server auf AWS installieren
intro: 'Zum Installieren von {% data variables.product.prodname_ghe_server %} in Amazon Web Services (AWS) musst du eine Amazon Elastic Compute Cloud-Instanz (EC2) starten und ein separates Amazon Elastic Block Store-Datenvolume (EBS) erstellen und anfügen.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147876966'
---
## Voraussetzungen

- {% data reusables.enterprise_installation.software-license %}
- Du musst über ein AWS-Konto verfügen, mit dem EC2 Instances gestartet und EBS-Volumes erstellt werden können. Weitere Informationen findest du auf der [Amazon Web Services-Website](https://aws.amazon.com/).
- Die meisten Aktionen, die zum Starten von {% data variables.product.product_location %} erforderlich sind, können auch mithilfe der AWS Management Console ausgeführt werden. Zur Ersteinrichtung solltest du jedoch die AWS-Befehlszeilen-Schnittstelle (CLI) installieren. Im Folgenden findest du Beispiele zur Verwendung der AWS-Befehlszeilen-Schnittstelle. Weitere Informationen findest du in den Leitfäden [Arbeiten mit der AWS Management Console](http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/getting-started.html) und [Was ist die AWS Command Line Interface](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html) von Amazon.

{% note %}

**Hinweis:** Zu diesem Zeitpunkt unterstützt {% data variables.product.prodname_ghe_server %} die Verwendung der Amazon IDMSv2-Metadaten-API nicht.

{% endnote %}

In diesem Leitfaden wird davon ausgegangen, dass du mit den folgenden AWS-Konzepten vertraut bist:

 - [Starten von EC2-Instanzen](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/LaunchingAndUsingInstances.html)
 - [Verwalten von EBS-Volumes](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html)
 - [Verwenden von Sicherheitsgruppen](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html) (zum Verwalten des Netzwerkzugriffs auf deine Instanz)
 - [Elastische IP-Adressen (EIP)](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) (in Produktionsumgebungen dringend empfohlen)
 - [EC2 und Virtual Private Cloud](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html) (wenn du den Start in einer Virtual Private Cloud planst)
 - [AWS-Preise](https://aws.amazon.com/pricing/) (zum Berechnen und Verwalten der Kosten)

Eine Architekturübersicht findest du im [AWS-Architekturdiagramm für die Bereitstellung von GitHub Enterprise Server](/assets/images/installing-github-enterprise-server-on-aws.png). 

Dieser Leitfaden empfiehlt das Prinzip der geringsten Berechtigung beim Einrichten von {% data variables.product.product_location %} auf AWS. Weitere Informationen findest du in der [Dokumentation zu AWS Identity and Access Management (IAM)](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege).

## Hardwareaspekte

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Instanztyp bestimmen

Bevor du {% data variables.product.product_location %} auf AWS startest, musst du den Computertyp ermitteln, der den Anforderungen deiner Organisation am besten entspricht. Informationen zum Überprüfen der Mindestanforderungen für {% data variables.product.product_name %} findest du unter [Mindestanforderungen](#minimum-requirements).

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

## AMI für {% data variables.product.prodname_ghe_server %} auswählen

Mithilfe des {% data variables.product.prodname_ghe_server %}-Portals oder der AWS CLI kannst du ein Amazon Machine Image (AMI) für {% data variables.product.prodname_ghe_server %} auswählen.

AMIs für {% data variables.product.prodname_ghe_server %} sind in der AWS-Region „GovCloud“ („US-East“ und „US-West“) verfügbar. Dadurch können US-Kunden mit bestimmten gesetzlichen Anforderungen {% data variables.product.prodname_ghe_server %} in einer föderal konformen Cloud-Umgebung betreiben. Weitere Informationen zur Einhaltung von behördlichen und anderen Standards durch AWS findest du auf der [AWS-Seite zur GovCloud (US)](http://aws.amazon.com/govcloud-us/) und auf der [Complianceseite von AWS](https://aws.amazon.com/compliance/).

### {% data variables.product.prodname_ghe_server %}-Portl zur AMI-Auswahl verwenden

{% data reusables.enterprise_installation.download-appliance %}
3. Wähle unter „{% data variables.product.prodname_dotcom %} in der Cloud“ das Dropdownmenü „Plattform auswählen“ aus, und klicke auf **Amazon Web Services**.
4. Klicke im Dropdownmenü „AWS-Region auswählen“ auf die gewünschte Region.
5. Notiere dich die angezeigte AMI-ID.

### AWS CLI zur AMI-Auswahl verwenden

1. Rufe mithilfe der AWS CLI eine Liste der {% data variables.product.prodname_ghe_server %}-Images ab, die von den AWS-Inhaber-IDs (`025577942450` für GovCloud und `895557238572` für andere Regionen) von {% data variables.product.prodname_dotcom %} veröffentlicht wurden. Weitere Informationen findest du in der AWS-Dokumentation unter [describe-images](http://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html).
  ```shell
  aws ec2 describe-images \
  --owners <em>OWNER ID</em> \
  --query 'sort_by(Images,&Name)[*].{Name:Name,ImageID:ImageId}' \
  --output=text
  ```
2. Notiere dich die AMI-ID für das neueste {% data variables.product.prodname_ghe_server %}-Image.

## Erstellen einer Sicherheitsgruppe

Bei der ersten AMI-Verwendung musst du eine Sicherheitsgruppe erstellen und für jeden in der folgenden Tabelle angegebenen Port eine neue Sicherheitsgruppenregel hinzufügen. Weitere Informationen findest du im AWS-Leitfaden zum [Verwenden von Sicherheitsgruppen](http://docs.aws.amazon.com/cli/latest/userguide/cli-ec2-sg.html).

1. Erstelle an der AWS CLI eine neue Sicherheitsgruppe. Weitere Informationen findest du in der AWS-Dokumentation unter [create-security-group](http://docs.aws.amazon.com/cli/latest/reference/ec2/create-security-group.html).
  ```shell
  $ aws ec2 create-security-group --group-name <em>SECURITY_GROUP_NAME</em> --description "<em>SECURITY GROUP DESCRIPTION</em>"
  ```

2. Notiere dir die Sicherheitsgruppen-ID (`sg-xxxxxxxx`) deiner neu erstellten Sicherheitsgruppe.

3. Erstelle eine Sicherheitsgruppenregel für jeden der Ports in der folgenden Tabelle. Weitere Informationen findest du in der AWS-Dokumentation unter [authorize-security-group-ingress](http://docs.aws.amazon.com/cli/latest/reference/ec2/authorize-security-group-ingress.html).
  ```shell
  $ aws ec2 authorize-security-group-ingress --group-id <em>SECURITY_GROUP_ID</em> --protocol <em>PROTOCOL</em> --port <em>PORT_NUMBER</em> --cidr <em>SOURCE IP RANGE</em>
  ```
  Diese Tabelle zeigt, wofür jeder Port verwendet wird.

  {% data reusables.enterprise_installation.necessary_ports %}

## {% data variables.product.prodname_ghe_server %}-Instanz erstellen

Zum Erstellen der Instanz musst du eine EC-Instanz mit deinem {% data variables.product.prodname_ghe_server %}-AMI starten und ein zusätzliches Storage-Volume für deine Instanzdaten anhängen. Weitere Informationen findest du unter [Grundlegendes zur Hardware](#hardware-considerations).

{% note %}

**Hinweis:** Du kannst den Datenträger für die Daten verschlüsseln, um eine zusätzliche Sicherheitsebene zu schaffen und sicherzustellen, dass alle Daten geschützt sind, die du auf deine Instanz schreibst. Die Verwendung verschlüsselter Disks wirkt sich geringfügig auf die Leistung aus. Wenn du dein Volume verschlüsseln möchtest, wird dringend empfohlen, dies zu erledigen, **bevor** du deine Instanz erstmals startest.
Weitere Informationen findest du im [Amazon-Leitfaden zur EBS-Verschlüsselung](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html).

{% endnote %}

{% warning %}

**Warnung:** Wenn du die Verschlüsselung nach der Konfiguration deiner Instanz aktivierst, musst du deine Daten zum verschlüsselten Volume migrieren, was Ausfallzeiten für deine Benutzer*innen zur Folge hat.

{% endwarning %}

### EC-Instanz starten

Starte an der AWS-CLI eine EC2-Instanz mit deinem AMI und der von dir erstellten Sicherheitsgruppe. Hänge ein neues Blockgerät an, das als ein Speicher-Volume für deine Instanzdaten verwendet werden soll, und konfiguriere die Größe anhand der Anzahl deiner Benutzerlizenzen. Weitere Informationen findest du in der AWS-Dokumentation unter [run-instances](http://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html).

```shell
aws ec2 run-instances \
  --security-group-ids <em>SECURITY_GROUP_ID</em> \
  --instance-type <em>INSTANCE_TYPE</em> \
  --image-id <em>AMI_ID</em> \
  --block-device-mappings '[{"DeviceName":"/dev/xvdf","Ebs":{"VolumeSize":<em>SIZE</em>,"VolumeType":"<em>TYPE</em>"}}]' \
  --region <em>REGION</em> \
  --ebs-optimized
```

### Elastic IP zuordnen und mit der Instanz verknüpfen

Wenn es sich hierbei um eine Produktionsinstanz handelt, wird dringend empfohlen, eine Elastic IP (EIP) zuzuordnen und sie mit der Instanz zu verknüpfen, bevor du zur {% data variables.product.prodname_ghe_server %}-Konfiguration weitergehst. Andernfalls wird die öffentliche IP-Adresse der Instanz nach dem Neustart der Instanz nicht beibehalten. Weitere Informationen findest du unter [Zuordnen einer elastischen IP-Adresse](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-allocating) und [Zuordnen einer elastischen IP-Adresse zu einer ausgeführten Instanz](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-associating) in der Amazon-Dokumentation.  

Den primären und Replikatinstanzen sollten in Hochverfügbarkeitskonfigurationen in der Produktion separate EIPs zugewiesen werden. Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_ghe_server %} für Hochverfügbarkeit](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/).

## {% data variables.product.prodname_ghe_server %}-Instanz konfigurieren

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Weitere Informationen findest du unter [Konfigurieren der {% data variables.product.prodname_ghe_server %}-Appliance](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance).
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Weitere Informationsquellen

- [Systemübersicht](/enterprise/admin/guides/installation/system-overview){% ifversion ghes %}
- [Informationen zu Upgrades auf neue Releases](/admin/overview/about-upgrades-to-new-releases){% endif %}
