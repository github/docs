---
title: Configurar la revisión externa
intro: 'Puedes revisar los recursos de sistema básicos en tu aparato {% data variables.product.prodname_ghe_server %} utilizando el SNMP o los protocolos de recopilación de estadísticas collectd.'
redirect_from:
  - /enterprise/admin/installation/setting-up-external-monitoring
  - /enterprise/admin/enterprise-management/setting-up-external-monitoring
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
---

### Acerca de SNMP

El Protocolo de Administración de Red Simple (SNMP) es un método muy compatible para revisar los dispositivos y los servidores de red. El SNMP está inhabilitado por defecto pero puede ser configurado a través del tablero de revisión {% data variables.product.prodname_enterprise %}. El puerto UDP 161 debe abrirse y ser accesible desde tu estación de administración de red. Para obtener más información, consulta "[Revisión utilizando el SNMP](/enterprise/{{ currentVersion }}/admin/guides/installation/monitoring-using-snmp/)."

### Acerca de collectd

collectd es una recopilación de estadísticas de código abierto y daemon de información con apoyo integrado para escribir en archivos RRD. Las estadísticas sobre utilización de CPU, memoria y uso de disco, errores y tráfico de interfaz de red y carga de sistema pueden redireccionarse a un servidor externo collectd donde se pueden configurar los gráficos, los análisis y las alertas utilizando un amplia gama de herramientas y plugins disponibles. Para configurar el redireccionamiento de `collectd`, consulta "[Configurar collectd](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-collectd/)".

Además, las herramientas de supervisión dentro de las plataformas de virtualización subyacentes pueden también usarse para supervisar y alertar sobre los recursos de sistema. Para obtener más información, consulta la documentación [Amazon CloudWatch](http://aws.amazon.com/cloudwatch/) y [Supervisión de VMware vSphere ](http://pubs.vmware.com/vsphere-50/topic/com.vmware.ICbase/PDF/vsphere-esxi-vcenter-server-50-monitoring-performance-guide.pdf).
