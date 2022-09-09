---
title: 设置外部监视
intro: '您可以使用 SNMP 或 collectd 统计信息收集协议监视 {% data variables.product.prodname_ghe_server %} 设备上的基本系统资源。'
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332470'
---
## 关于 SNMP

简单网络管理协议 (SNMP) 是一种受到广泛支持的网络设备和服务器监视方法。 SNMP 默认禁用，但可以通过 {% data variables.product.prodname_enterprise %} 监视仪表板进行配置。 UDP 端口 161 必须打开，并且可以通过您的网络管理站到达。 有关详细信息，请参阅“[使用 SNMP 进行监视](/enterprise/admin/guides/installation/monitoring-using-snmp/)”。

## 关于 collectd

collectd 属于开源统计信息收集和报告守护程序，内置对写入 RRD 文件的支持。 可以将关于 CPU 利用率、内存与磁盘占用量、网络接口流量与错误以及系统负荷的统计信息转发到外部 collectd 服务器，可在该服务器中使用各种可用工具和插件配置图表、分析和警报。 若要配置 `collectd` 转发，请参阅“[配置 collectd](/enterprise/admin/guides/installation/configuring-collectd/)”。

此外，也可以使用内置到底层虚拟化平台的监视工具对系统资源进行基本监视和警报。 有关详细信息，请参阅 [Amazon CloudWatch](http://aws.amazon.com/cloudwatch/) 和 [VMware vSphere 监视](http://pubs.vmware.com/vsphere-50/topic/com.vmware.ICbase/PDF/vsphere-esxi-vcenter-server-50-monitoring-performance-guide.pdf)文档。
