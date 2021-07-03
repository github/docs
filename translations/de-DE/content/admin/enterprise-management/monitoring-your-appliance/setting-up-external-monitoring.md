---
title: Externe Überwachung festlegen
intro: 'Mit den Statistikerfassungsprotokollen SNMP oder collectd können Sie grundlegende Systemressourcen auf Ihrer {% data variables.product.prodname_ghe_server %}-Appliance überwachen.'
redirect_from:
  - /enterprise/admin/installation/setting-up-external-monitoring
  - /enterprise/admin/enterprise-management/setting-up-external-monitoring
  - /admin/enterprise-management/setting-up-external-monitoring
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
---

### Informationen zu SNMP

Simple Network Management Protocol (SNMP) ist eine weithin unterstützte Methode für die Überwachung von Netzwerkgeräten und -servern. SNMP ist standardmäßig deaktiviert, kann jedoch über das {% data variables.product.prodname_enterprise %}-Überwachungs-Dashboard konfiguriert werden. UDP-Port 161 muss offen und über Ihre Network Management Station erreichbar sein. Weitere Informationen finden Sie unter „[Überwachung mittels SNMP](/enterprise/{{ currentVersion }}/admin/guides/installation/monitoring-using-snmp/)“.

### Informationen zu collectd

collectd ist ein Open-Source-Daemon zur Statistikerfassung und Berichterstellung mit integrierter Unterstützung zum Schreiben in RRD-Dateien. Die Statistiken zur CPU-Auslastung, zur Arbeitsspeicher- und Disk-Nutzung, zum Traffic und zu den Fehlern der Netzwerkschnittstelle sowie zur Systemauslastung können an einen externen collectd-Server weitergeleitet werden, auf dem Diagramme, Analysen und Meldungen mit einer Vielzahl an Tools und Plug-ins konfiguriert werden können. Informationen zum Konfigurieren der `collectd`-Weiterleitung finden Sie unter „[collectd konfigurieren](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-collectd/)“.

Zusätzlich werden die in die zugrunde liegenden Virtualisierungsplattformen integrierten Überwachungstools für die grundlegende Überwachung und Alarmierung von Systemressourcen verwendet. Weitere Informationen finden Sie unter „[Amazon CloudWatch](http://aws.amazon.com/cloudwatch/)“ und in der Dokumentation „[VMware vSphere Monitoring](http://pubs.vmware.com/vsphere-50/topic/com.vmware.ICbase/PDF/vsphere-esxi-vcenter-server-50-monitoring-performance-guide.pdf)“.
