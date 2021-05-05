---
title: GitHub Enterprise Server auf AWS installieren
intro: 'Zum Installieren von {% data variables.product.prodname_ghe_server %} auf Amazon Web Services (AWS) müssen Sie eine Amazon Elastic Compute Cloud (EC2) Instance starten und ein getrenntes Amazon Elastic Block Store-Datenvolume (EBS) erstellen und anhängen.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-aws/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-aws
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Vorrausetzungen

- {% data reusables.enterprise_installation.software-license %}
- Sie müssen über ein AWS-Konto verfügen, mit dem EC2 Instances gestartet und EBS-Volumes erstellt werden können. Weitere Informationen finden Sie auf der „[Amazon Web Services-Website](https://aws.amazon.com/)“.
- Die meisten Aktionen, die zum Starten von {% data variables.product.product_location %} erforderlich sind, können auch mithilfe der AWS Management Console ausgeführt werden. Zur Ersteinrichtung sollten Sie jedoch die AWS-Befehlszeilen-Schnittstelle (CLI) installieren. Im Folgenden finden Sie Beispiele zur Verwendung der AWS-Befehlszeilen-Schnittstelle. Weitere Informationen finden Sie in den Leitfäden von Amazon unter „[Arbeiten mit der AWS Management Console](http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/getting-started.html)“ und „[Was ist die AWS Command Line Interface?](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)“.

In diesem Leitfaden wird davon ausgegangen, dass Sie mit den folgenden AWS-Konzepten vertraut sind:

 - [EC2 Instances starten](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/LaunchingAndUsingInstances.html)
 - [EBS-Volumes verwalten](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html)
 - [Sicherheitsgruppen verwenden](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html) (Zum Verwalten des Netzwerkzugriffs auf Ihre Instanz)
 - [Elastic IP-Adressen](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) (Wird für Produktionsumgebungen dringend empfohlen)
 - [EC2 und virtuelle Private Cloud](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html) (Wenn Sie planen, eine virtuelle Private Cloud zu verwenden)
 - [AWS Pricing](https://aws.amazon.com/pricing/) (For calculating and managing costs)

 This guide recommends the principle of least privilege when setting up {% data variables.product.product_location %} on AWS. For more information, refer to the [AWS Identity and Access Management (IAM) documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege).

### Grundlegendes zur Hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Instanztyp bestimmen

Before launching {% data variables.product.product_location %} on AWS, you'll need to determine the machine type that best fits the needs of your organization. To review the minimum requirements for {% data variables.product.product_name %}, see "[Minimum requirements](#minimum-requirements)."

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

### AMI für {% data variables.product.prodname_ghe_server %} auswählen

Mithilfe des {% data variables.product.prodname_ghe_server %}-Portals oder der AWS CLI können Sie ein Amazon Machine Image (AMI) für {% data variables.product.prodname_ghe_server %} auswählen.

AMIs für {% data variables.product.prodname_ghe_server %} sind in der AWS-Region „GovCloud“ („US-East“ und „US-West“) verfügbar. Dadurch können US-Kunden mit bestimmten gesetzlichen Anforderungen {% data variables.product.prodname_ghe_server %} in einer föderal konformen Cloud-Umgebung betreiben. Weitere Informationen zur AWS-Compliance mit föderalen und anderen Standards finden Sie auf den Seiten [AWS's GovCloud (US)](http://aws.amazon.com/govcloud-us/) und [AWS-Compliance](https://aws.amazon.com/compliance/).

#### {% data variables.product.prodname_ghe_server %}-Portl zur AMI-Auswahl verwenden

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-appliance %}
3. Klicken Sie im Dropdownmenü „Select your platform“ (Ihre Plattform auswählen) auf **Amazon Web Services**.
4. Wählen Sie im Dropdownmenü „Select your AWS“ (Ihren AWS auswählen) Ihre gewünschte Region aus.
5. Notieren Sie sich die angezeigte AMI-ID.

#### AWS CLI zur AMI-Auswahl verwenden

1. Rufen Sie mithilfe der AWS CLI eine Liste der {% data variables.product.prodname_ghe_server %}-Images ab, die von den AWS-Inhaber-IDs (`025577942450` für GovCloud und `895557238572` für andere Regionen) von {% data variables.product.prodname_dotcom %} veröffentlicht wurden. Weitere Informationen finden Sie unter „[describe-images](http://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html)“ in der AWS-Dokumentation.
  ```shell
  aws ec2 describe-images \
  --owners <em>OWNER ID</em> \
  --query 'sort_by(Images,&Name)[*].{Name:Name,ImageID:ImageId}' \
  --output=text
  ```
2. Notieren Sie sich die AMI-ID für das neueste {% data variables.product.prodname_ghe_server %}-Image.

### Sicherheitsgruppe erstellen

Bei der ersten AMI-Verwendung müssen Sie eine Sicherheitsgruppe erstellen und für jeden in der folgenden Tabelle angegebenen Port eine neue Sicherheitsgruppenregel hinzufügen. Weitere Informationen finden Sie im AWS-Leitfaden zur „[Verwendung von Sicherheitsgruppen](http://docs.aws.amazon.com/cli/latest/userguide/cli-ec2-sg.html)“.

1. Erstellen Sie an der AWS CLI eine neue Sicherheitsgruppe. Weitere Informationen finden Sie unter „[create-security-group](http://docs.aws.amazon.com/cli/latest/reference/ec2/create-security-group.html)“ in der AWS-Dokumentation.
  ```shell
  $ aws ec2 create-security-group --group-name <em>SECURITY_GROUP_NAME</em> --description "<em>SECURITY GROUP DESCRIPTION</em>"
  ```

2. Notieren Sie sich die Sicherheitsgruppen-ID (`sg-xxxxxxxx`) Ihrer neu erstellten Sicherheitsgruppe.

3. Erstellen Sie eine Sicherheitsgruppenregel für jeden der Ports in der folgenden Tabelle. Weitere Informationen finden Sie unter „[authorize-security-group-ingress](http://docs.aws.amazon.com/cli/latest/reference/ec2/authorize-security-group-ingress.html)“ in der AWS-Dokumentation.
  ```shell
  $ aws ec2 authorize-security-group-ingress --group-id <em>SECURITY_GROUP_ID</em> --protocol <em>PROTOCOL</em> --port <em>PORT_NUMBER</em> --cidr <em>SOURCE IP RANGE</em>
  ```
  Diese Tabelle zeigt, wofür jeder Port verwendet wird.

  {% data reusables.enterprise_installation.necessary_ports %}

### {% data variables.product.prodname_ghe_server %}-Instanz erstellen

Zum Erstellen der Instanz müssen Sie eine EC-Instanz mit Ihrem {% data variables.product.prodname_ghe_server %}-AMI starten und ein zusätzliches Storage-Volume für Ihre Instanzdaten anhängen. Weitere Informationen finden Sie unter „[Grundlegendes zur Hardware](#hardware-considerations)“.

{% note %}

**Hinweis:** Sie können die Daten-Disk verschlüsseln, um eine zusätzliche Sicherheitsebene zu schaffen und sicherzustellen, dass alle Daten, die Sie auf Ihre Instanz schreiben, geschützt sind. Die Verwendung verschlüsselter Disks wirkt sich geringfügig auf die Leistung aus. Wenn Sie Ihr Volume verschlüsseln möchten, wird dringend empfohlen, dies zu erledigen, **bevor** Sie Ihre Instanz erstmals starten. Weitere Informationen finden Sie im Leitfaden „[Amazon EBS Encryption](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html)“.

{% endnote %}

{% warning %}

**Warnung:** Wenn Sie die Verschlüsselung nach der Konfiguration Ihrer Instanz aktivieren, müssen Sie Ihre Daten zum verschlüsselten Volume migrieren, was Ausfallzeiten für Ihre Benutzer zur Folge hat.

{% endwarning %}

#### EC-Instanz starten

Starten Sie an der AWS-CLI eine EC2-Instanz mit Ihrem AMI und der von Ihnen erstellten Sicherheitsgruppe. Hänge ein neues Blockgerät an, das als ein Speicher-Volume für Deine Instanzdaten verwendet werden soll, und konfiguriere die Größe anhand der Anzahl Deiner Benutzerlizenzen. Weitere Informationen finden Sie unter „[run-instances](http://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html)“ in der AWS-Dokumentation.

```shell
aws ec2 run-instances \
  --security-group-ids <em>SECURITY_GROUP_ID</em> \
  --instance-type <em>INSTANCE_TYPE</em> \
  --image-id <em>AMI_ID</em> \
  --block-device-mappings '[{"DeviceName":"/dev/xvdf","Ebs":{"VolumeSize":<em>SIZE</em>,"VolumeType":"<em>TYPE</em>"}}]' \
  --region <em>REGION</em> \
  --ebs-optimized
```

#### Elastic IP zuordnen und mit der Instanz verknüpfen

Wenn es sich hierbei um eine Produktionsinstanz handelt, wird dringend empfohlen, eine Elastic IP (EIP) zuzuordnen und sie mit der Instanz zu verknüpfen, bevor Sie zur {% data variables.product.prodname_ghe_server %}-Konfiguration weitergehen. Andernfalls wird die öffentliche IP-Adresse der Instanz nach dem Neustart der Instanz nicht beibehalten. Weitere Informationen finden Sie unter „[Zuweisen einer Elastic IP-Adresse](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-allocating)“ und „[Zuordnen einer Elastic IP-Adresse zu einer laufenden Instance](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-associating)“ in der AWS-Dokumentation.

Den primären und Replikatinstanzen sollten in Hochverfügbarkeitskonfigurationen in der Produktion separate EIPs zugewiesen werden. Weitere Informationen finden Sie unter „[{% data variables.product.prodname_ghe_server %} für Hochverfügbarkeit konfigurieren](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)“.

### {% data variables.product.prodname_ghe_server %}-Instanz konfigurieren

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Weitere Informationen finden Sie unter „[{% data variables.product.prodname_ghe_server %}-Appliance konfigurieren](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)“.
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### Weiterführende Informationen

- "[System overview](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
