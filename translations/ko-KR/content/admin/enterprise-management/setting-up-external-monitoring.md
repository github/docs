---
title: Setting up external monitoring
intro: 'You can monitor basic system resources on your {% data variables.product.prodname_ghe_server %} appliance using either the SNMP or collectd statistics collection protocols.'
redirect_from:
  - /enterprise/admin/installation/setting-up-external-monitoring
  - /enterprise/admin/enterprise-management/setting-up-external-monitoring
versions:
  enterprise-server: '*'
topics:
  - 엔터프라이즈
---

### About SNMP

Simple Network Management Protocol (SNMP) is a widely supported method of monitoring network devices and servers. SNMP is disabled by default but can be configured through the {% data variables.product.prodname_enterprise %} monitor dashboard. UDP port 161 must be open and reachable from your network management station. For more information, see "[Monitoring using SNMP](/enterprise/{{ currentVersion }}/admin/guides/installation/monitoring-using-snmp/)."

### About collectd

collectd is an open source statistics collection and reporting daemon with built-in support for writing to RRD files. Statistics on CPU utilization, memory and disk consumption, network interface traffic and errors, and system load can be forwarded to an external collectd server where graphs, analysis, and alerting may be configured using a wide range of available tools and plugins. To configure `collectd` forwarding, see "[Configuring collectd](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-collectd/)".

Additionally, the monitoring tools built into underlying virtualization platforms may also be used for basic monitoring and alerting of system resources. For more information, see [Amazon CloudWatch](http://aws.amazon.com/cloudwatch/) and [VMware vSphere Monitoring](http://pubs.vmware.com/vsphere-50/topic/com.vmware.ICbase/PDF/vsphere-esxi-vcenter-server-50-monitoring-performance-guide.pdf) documentation.
