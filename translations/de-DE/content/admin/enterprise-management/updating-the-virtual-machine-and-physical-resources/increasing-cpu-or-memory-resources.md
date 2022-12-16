---
title: CPU- und Arbeitsspeicherressourcen erhöhen
intro: 'Wenn Vorgänge auf {% data variables.product.prodname_ghe_server %} langsam sind, musst du ggf. CPU-Ressourcen oder Arbeitsspeicherressourcen hinzufügen.'
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
ms.openlocfilehash: 1ac89694cf374cca1ba47f228f881dc4a5fd405f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331864'
---
{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

{% note %}

**Hinweis:** Bevor du CPU-Ressourcen oder Speicherressourcen erhöhst, versetze deine Instanz in den Wartungsmodus.{% ifversion ip-exception-list %} Du kannst Änderungen überprüfen, indem du eine IP-Ausnahmeliste konfigurierst, um den Zugriff über angegebenen IP-Adressen zuzulassen. {% endif %} Weitere Informationen findest du unter [Aktivieren und Planen des Wartungsmodus](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode).

{% endnote %}

## CPU- oder Arbeitsspeicherressourcen für AWS hinzufügen

{% note %}

**Hinweis:** Zum Hinzufügen von CPU- oder Speicherressourcen für AWS musst du mit der Verwaltung von EC2-Instanzen über die AWS-Verwaltungskonsole oder die `aws ec2`-Befehlszeilenschnittstelle vertraut sein. Hintergrundinformationen und Details zur Verwendung der AWS-Tools deiner Wahl für Größenänderungen findest du in der AWS-Dokumentation unter [Ändern der Größe einer Amazon EBS-gesicherten Instanz](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html).

{% endnote %}

### Grundlegendes zur Größenanpassung

Bevor du die CPU- oder Speicherressourcen für {% data variables.product.product_location %} erhöhst, lies die folgenden Empfehlungen.

- **Skalieren des Arbeitsspeichers mit CPUs**. {% data reusables.enterprise_installation.increasing-cpus-req %}
- **Zuweisen einer Elastic IP-Adresse zu der Instanz**. Falls keine Elastic IP zugewiesen ist, musst du die DNS A-Einträge für deinen {% data variables.product.prodname_ghe_server %}-Host nach dem Neustart anpassen, damit die an der öffentlichen IP-Adresse vorgenommenen Änderungen berücksichtigt werden. Sobald deine Instanz neu gestartet wird, wird die Elastische IP-Adresse (EIP) automatisch gespeichert, wenn die Instanz in einer virtuellen privaten Cloud gestartet wird. Wenn die Instanz in EC2-Classic gestartet wird, muss die Elastic IP erneut manuell zugeordnet werden.

### Unterstützte AWS Instance-Typen

Du musst anhand der CPU-/Arbeitsspeicherspezifikationen den Instanztyp bestimmen, für den du ein Upgrade vornehmen möchtest.

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

### Größenanpassung für AWS

{% note %}

**Hinweis:** Notiere dir für die in EC2-Classic gestarteten Instanzen die der Instanz zugeordnete Elastic IP-Adresse und die ID der Instanz. Ordne nach dem Neustart der Instanz die Elastic IP-Adresse erneut zu.

{% endnote %}

Es ist nicht möglich, einer vorhandenen AWS-/EC2 Instance CPU- oder Arbeitsspeicherressourcen hinzuzufügen. Gehe stattdessen wie folgt vor:

1. Beende die Instanz.
2. Ändere den Instanztyp.
3. Starte die Instanz.
{% data reusables.enterprise_installation.configuration-recognized %}

## Hinzufügen von CPU- oder Speicherressourcen in Microsoft Azure

{% note %}

**Hinweis:** Zum Hinzufügen von CPU- oder Speicherressourcen in Microsoft Azure musst du mit der Verwaltung von VM-Instanzen über das Azure-Portal, die Azure CLI oder die Azure PowerShell vertraut sein. Hintergrundinformationen und Details zur Verwendung der Azure-Tools deiner Wahl für Größenänderungen findest du in der Azure-Dokumentation unter [Ändern der Größe einer VM](https://docs.microsoft.com/en-us/azure/virtual-machines/resize-vm).

{% endnote %}

### Grundlegendes zur Größenanpassung

Bevor du die CPU- oder Speicherressourcen für {% data variables.product.product_location %} erhöhst, lies die folgenden Empfehlungen.

- **Skalieren des Arbeitsspeichers mit CPUs**. {% data reusables.enterprise_installation.increasing-cpus-req %}
- **Zuweisen einer statischen IP-Adresse zu der Instanz**. Falls der Instanz keine statische IP zugewiesen ist, musst du die DNS A-Einträge für deinen {% data variables.product.prodname_ghe_server %}-Host nach dem Neustart eventuell anpassen, damit die Änderungen an der öffentlichen IP-Adresse berücksichtigt werden.

### Unterstützte Microsoft Azure-Instanzgrößen

Du musst anhand der CPU-/Speicherspezifikationen die Instanzgröße für das Upgrade bestimmen.

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.azure-instance-recommendation %}

### Ändern der Größe für Microsoft Azure

Du kannst eine VM zentral hoch- oder herunterskalieren, indem du die VM-Größe änderst. Die Größenänderung führt zu einem Neustart der VM. In einigen Fällen musst du zuerst die Zuordnung des virtuellen Computers aufheben. Dies ist möglicherweise der Fall, falls die neue Größe auf dem Hardwarecluster nicht verfügbar ist, auf dem die VM aktuell gehostet wird. 

1. Die erforderlichen Schritte findest du in der Azure-Dokumentation unter [Ändern der Größe einer VM](https://docs.microsoft.com/en-us/azure/virtual-machines/resize-vm).
{% data reusables.enterprise_installation.configuration-recognized %}

## CPU- oder Arbeitsspeicherressourcen für OpenStack KVM hinzufügen

Es ist nicht möglich, einer vorhandenen OpenStack KVM-Instanz CPU- oder Arbeitsspeicherressourcen hinzuzufügen. Gehe stattdessen wie folgt vor:

1. Erstelle einen Snapshot der aktuellen Instanz.
2. Beende die Instanz.
3. Wähle eine neue Instanzvariante mit den gewünschten CPU- bzw. Arbeitsspeicherressourcen aus.

## Hinzufügen von CPU- oder Speicherressourcen für VMware

{% data reusables.enterprise_installation.increasing-cpus-req %}

1. Verwende vSphere Client, um eine Verbindung zum VMware ESXi-Host herzustellen.
2. Fahre {% data variables.product.product_location %} herunter.
3. Wähle die VM aus, und klicke auf **Einstellungen bearbeiten**.
4. Passe unter „Hardware“ die der VM zugeordneten CPU- und/oder Speicherressourcen je nach Bedarf an: ![VMware setup resources](/assets/images/enterprise/vmware/vsphere-hardware-tab.png)
5. Zum Starten der VM klicke auf **OK**.
{% data reusables.enterprise_installation.configuration-recognized %}
