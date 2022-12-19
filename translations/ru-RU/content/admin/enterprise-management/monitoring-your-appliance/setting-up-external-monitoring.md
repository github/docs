---
title: Настройка внешнего мониторинга
intro: 'Базовые системные ресурсы можно отслеживать на устройстве {% data variables.product.prodname_ghe_server %} с помощью протокола SNMP или протоколов сбора статистики.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '146332475'
---
## Сведения о протоколе SNMP

Протокол SNMP широко применяется для мониторинга сетевых устройств и серверов. По умолчанию протокол SNMP отключен, но при необходимости его можно настроить с помощью панели мониторинга {% data variables.product.prodname_enterprise %}. При этом должен быть открыт и доступен со станции управления сетью UDP-порт 161. Дополнительные сведения см. в статье [Мониторинг с использованием протокола SNMP](/enterprise/admin/guides/installation/monitoring-using-snmp/).

## Сведения об управляющей программе collectd

collectd — это управляющая программа с открытым исходным кодом, которая обеспечивает сбор статистики, подготовку отчетов и встроенную поддержку записи в RRD-файлы. Статистика по загрузке ЦП, использованию памяти и диска, трафику и ошибкам сетевого интерфейса, а также загрузке системы может перенаправляться на внешний сервер collectd, на котором можно настроить различные графики, функции анализа и оповещения с использованием широкого спектра доступных средств и подключаемых модулей. Сведения о настройке перенаправления для `collectd` см.в разделе [Настройка collectd](/enterprise/admin/guides/installation/configuring-collectd/).

Кроме того, поддерживается использование встроенных средств мониторинга базовых платформ виртуализации, которые реализуют основные функции мониторинга и оповещения для системных ресурсов. Дополнительные сведения см. в документации по [Amazon CloudWatch](http://aws.amazon.com/cloudwatch/) и [средствам мониторинга VMware vSphere](http://pubs.vmware.com/vsphere-50/topic/com.vmware.ICbase/PDF/vsphere-esxi-vcenter-server-50-monitoring-performance-guide.pdf).
