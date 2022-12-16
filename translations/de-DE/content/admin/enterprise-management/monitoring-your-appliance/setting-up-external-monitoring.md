---
title: Externe Überwachung festlegen
intro: 'Mit den Statistikerfassungsprotokollen SNMP oder collectd kannst du grundlegende Systemressourcen auf deiner {% data variables.product.prodname_ghe_server %}-Appliance überwachen.'
redirect_from:
  - /enterprise/admin/installation/setting-up-external-monitoring
  - /enterprise/admin/enterprise-management/setting-up-external-monitoring
  - /admin/enterprise-management/setting-up-external-monitoring
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
shortTitle: Set up external monitoring
ms.openlocfilehash: 43fa6a7b0d6d4686a69460f23f38126ec5457613
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '146332472'
---
## Informationen zu SNMP

Simple Network Management Protocol (SNMP) ist eine weithin unterstützte Methode für die Überwachung von Netzwerkgeräten und -servern. SNMP ist standardmäßig deaktiviert, kann jedoch über das {% data variables.product.prodname_enterprise %}-Überwachungs-Dashboard konfiguriert werden. UDP-Port 161 muss offen und über Ihre Network Management Station erreichbar sein. Weitere Informationen findest du unter [Überwachen mit SNMP](/enterprise/admin/guides/installation/monitoring-using-snmp/).

## Informationen zu collectd

collectd ist ein Open-Source-Daemon zur Statistikerfassung und Berichterstellung mit integrierter Unterstützung zum Schreiben in RRD-Dateien. Die Statistiken zur CPU-Auslastung, zur Arbeitsspeicher- und Disk-Nutzung, zum Traffic und zu den Fehlern der Netzwerkschnittstelle sowie zur Systemauslastung können an einen externen collectd-Server weitergeleitet werden, auf dem Diagramme, Analysen und Meldungen mit einer Vielzahl an Tools und Plug-ins konfiguriert werden können. Informationen zum Konfigurieren der `collectd`-Weiterleitung findest du unter [Konfigurieren von collectd](/enterprise/admin/guides/installation/configuring-collectd/).

Zusätzlich werden die in die zugrunde liegenden Virtualisierungsplattformen integrierten Überwachungstools für die grundlegende Überwachung und Alarmierung von Systemressourcen verwendet. Weitere Informationen findest du in der Dokumentation zu [Amazon CloudWatch](http://aws.amazon.com/cloudwatch/) und [VMware vSphere-Überwachung](http://pubs.vmware.com/vsphere-50/topic/com.vmware.ICbase/PDF/vsphere-esxi-vcenter-server-50-monitoring-performance-guide.pdf).
