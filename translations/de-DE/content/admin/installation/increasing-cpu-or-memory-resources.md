---
title: CPU- und Arbeitsspeicherressourcen erhöhen
intro: 'Um einer vorhandenen {% data variables.product.prodname_ghe_server %}-Instanz CPU- oder Arbeitsspeicherressourcen hinzuzufügen, fahren Sie die Instanz herunter, und verwenden Sie die Tools der zugrunde liegenden virtuellen Plattform, um der virtuellen Maschine die Ressourcen zuzuordnen. Die neu zugeordneten Ressourcen werden beim Start erkannt. Zudem ist keine zusätzliche Konfiguration erforderlich.'
redirect_from:
  - /enterprise/admin/installation/increasing-cpu-or-memory-resources
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

### CPU- oder Arbeitsspeicherressourcen für AWS hinzufügen

{% note %}

**Hinweis:** Um CPU- oder Arbeitsspeicherressourcen für AWS hinzuzufügen, müssen Sie zum Verwalten der EC2-Instanzen mit der Verwendung der AWS Management Console oder der `aws ec2`-Befehlszeilenschnittstelle vertraut sein. Hintergründe und Details zur Verwendung der gewünschten AWS-Tools zum Durchführen der Größenanpassung finden Sie in der AWS-Dokumentation unter [Größenanpassung einer Amazon EBS-gestützten Instanz](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html).

{% endnote %}

#### Grundlegendes zur Größenanpassung

Bevor Sie die CPU- oder Arbeitsspeicherressourcen für {% data variables.product.product_location_enterprise %} erhöhen:
{% if currentVersion != "free-pro-team@latest" %}
- **Arbeitsspeicher mit CPUs skalieren**
    {% data reusables.enterprise_installation.increasing-cpus-max %}{% endif %}
- **Verifizieren Sie, dass der Instanz eine Elastic IP zugewiesen ist**

    Falls keine Elastic IP zugewiesen ist, müssen Sie die DNS A-Einträge für Ihren {% data variables.product.prodname_ghe_server %}-Host nach dem Neustart anpassen, damit die an der öffentlichen IP-Adresse vorgenommenen Änderungen berücksichtigt werden. Sobald Ihre Instanz neu gestartet wird, wird die Elastic IP (EIP) automatisch gespeichert, wenn die Instanz in einer VPC gestartet wird. Wenn die Instanz in EC2-Classic gestartet wird, muss die Elastic IP erneut manuell zugeordnet werden.

#### Unterstützte AWS Instance-Typen

Sie müssen anhand der CPU-/Arbeitsspeicherspezifikationen den Instanztyp bestimmen, für den Sie ein Upgrade vornehmen möchten.
{% data reusables.enterprise_installation.aws-supported-instance-types %}

#### Empfohlene AWS Instance-Typen

{% data reusables.enterprise_installation.aws-recommended-instance-types %}

{% data reusables.enterprise_installation.warning-on-scaling %}

#### Größenanpassung für AWS

{% note %}

**Hinweis:** Notieren Sie sich für die in EC2-Classic gestarteten Instanzen die der Instanz zugeordnete Elastic IP-Adresse und die ID der Instanz. Ordnen Sie nach dem Neustart der Instanz die Elastic IP-Adresse erneut zu.

{% endnote %}

Es ist nicht möglich, einer vorhandenen AWS-/EC2 Instance CPU- oder Arbeitsspeicherressourcen hinzuzufügen. Gehen Sie stattdessen wie folgt vor:

1. Beenden Sie die Instanz.
2. Ändern Sie den Instanztyp.
3. Starten Sie die Instanz.
{% data reusables.enterprise_installation.configuration-recognized %}

### CPU- oder Arbeitsspeicherressourcen für OpenStack KVM hinzufügen

Es ist nicht möglich, einer vorhandenen OpenStack KVM-Instanz CPU- oder Arbeitsspeicherressourcen hinzuzufügen. Gehen Sie stattdessen wie folgt vor:

1. Erstellen Sie einen Snapshot der aktuellen Instanz.
2. Beenden Sie die Instanz.
3. Wählen Sie eine neue Instanzvariante mit den gewünschten CPU- bzw. Arbeitsspeicherressourcen aus.

### CPU- oder Arbeitsspeicherressourcen für VMware hinzufügen

Wenn Vorgänge auf {% data variables.product.product_location_enterprise %} langsam sind, müssen Sie ggf. CPU- oder Arbeitsspeicherressourcen hinzufügen.

{% data reusables.enterprise_installation.increasing-cpus-max %}

1. Verwenden Sie vSphere Client, um eine Verbindung zum VMware ESXi-Host herzustellen.
2. Fahren Sie {% data variables.product.product_location_enterprise %} herunter.
3. Wählen Sie die virtuelle Maschine aus, und klicken Sie auf **Edit Settings** (Einstellungen bearbeiten).
4. Passen Sie unter „Hardware“ die der virtuellen Maschine zugeordneten CPU- bzw. Arbeitsspeicherressourcen nach Bedarf an:![VMware-Einrichtungsressourcen](/assets/images/enterprise/vmware/vsphere-hardware-tab.png)
5. Klicken Sie zum Starten der virtuellen Maschine auf **OK**.
{% data reusables.enterprise_installation.configuration-recognized %}
