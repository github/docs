---
title: Setting up external monitoring
intro: 'You can monitor basic system resources on your {% data variables.product.prodname_ghe_server %} appliance using either the SNMP or collectd statistics collection protocols.'
redirect_from:
  - /enterprise/admin/installation/setting-up-external-monitoring
  - /enterprise/admin/enterprise-management/setting-up-external-monitoring
  - /admin/enterprise-management/setting-up-external-monitoring
  - /admin/enterprise-management/monitoring-your-appliance/setting-up-external-monitoring
  - /admin/monitoring-managing-and-updating-your-instance/monitoring-your-appliance/setting-up-external-monitoring
  - /admin/monitoring-managing-and-updating-your-instance/monitoring-your-instance/setting-up-external-monitoring
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
shortTitle: Set up external monitoring
---
## About SNMP

Simple Network Management Protocol (SNMP) is a widely supported method of monitoring network devices and servers. SNMP is disabled by default but can be configured through the {% data variables.product.prodname_enterprise %} monitor dashboard. UDP port 161 must be open and reachable from your network management station. For more information, see [AUTOTITLE](/admin/enterprise-management/monitoring-your-appliance/monitoring-using-snmp).

## About collectd

collectd is an open source statistics collection and reporting daemon with built-in support for writing to RRD files. Statistics on CPU utilization, memory and disk consumption, network interface traffic and errors, and system load can be forwarded to an external collectd server where graphs, analysis, and alerting may be configured using a wide range of available tools and plugins. To configure `collectd` forwarding, see [AUTOTITLE](/admin/enterprise-management/monitoring-your-appliance/configuring-collectd).

Additionally, the monitoring tools built into underlying virtualization platforms may also be used for basic monitoring and alerting of system resources. For more information, see [Amazon CloudWatch](https://aws.amazon.com/cloudwatch/) and [VMware vSphere](https://docs.vmware.com/en/VMware-vSphere/index.html) documentation.
