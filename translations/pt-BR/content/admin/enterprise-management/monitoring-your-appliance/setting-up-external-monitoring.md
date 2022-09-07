---
title: Configurar monitoramento externo
intro: 'É possível monitorar os recursos básicos do sistema no appliance do {% data variables.product.prodname_ghe_server %} usando os protocolos de coleta de estatísticas SNMP ou collectd.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332469'
---
## Sobre o SNMP

O protocolo Simple Network Management Protocol (SNMP) é uma forma amplamente difundida de monitorar servidores e dispositivos de rede. O SNMP fica desabilitado por padrão, mas pode ser configurado pelo painel de monitoramento do {% data variables.product.prodname_enterprise %}. A porta UDP 161 deve ficar aberta e acessível na estação de gerenciamento de rede. Para obter mais informações, confira "[Monitoramento com o SNMP](/enterprise/admin/guides/installation/monitoring-using-snmp/)".

## Sobre collectd

O collectd é um daemon de código aberto de geração de relatórios e coleta de estatísticas com suporte integrado para gravação em arquivos RRD. As estatísticas de uso de CPU, consumo de memória e disco, tráfego e erros da interface de rede e carga do sistema podem ser encaminhadas para um servidor collectd externo, onde gráficos, análises e alertas podem ser configurados usando uma série de ferramentas e plugins. Para configurar o encaminhamento do `collectd`, confira "[Como configurar o collectd](/enterprise/admin/guides/installation/configuring-collectd/)".

Além disso, as ferramentas de monitoramento integradas às plataformas de virtualização subjacentes podem ser usadas para monitoramento e alerta básico dos recursos do sistema. Para obter mais informações, confira a documentação do [Amazon CloudWatch](http://aws.amazon.com/cloudwatch/) e do [VMware vSphere Monitoring](http://pubs.vmware.com/vsphere-50/topic/com.vmware.ICbase/PDF/vsphere-esxi-vcenter-server-50-monitoring-performance-guide.pdf).
