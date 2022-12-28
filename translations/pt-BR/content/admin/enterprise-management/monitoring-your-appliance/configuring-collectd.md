---
title: Configurar collectd
intro: 'O {% data variables.product.prodname_enterprise %} pode coletar dados com `collectd` e enviá-los a um servidor externo `collectd`. Reunimos um conjunto padrão de dados e outras métricas, como uso de CPU, consumo de memória e disco, tráfego e erros da interface de rede e carga geral da VM.'
redirect_from:
  - /enterprise/admin/installation/configuring-collectd
  - /enterprise/admin/articles/configuring-collectd
  - /enterprise/admin/enterprise-management/configuring-collectd
  - /admin/enterprise-management/configuring-collectd
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
ms.openlocfilehash: f63eb940681be3131a470a7786e134550fdba152
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145095928'
---
## Configurar um servidor externo do `collectd`

Se você ainda não tiver configurado um servidor externo do `collectd`, precisará fazer isso antes de habilitar o encaminhamento do `collectd` no {% data variables.product.product_location %}. O servidor do `collectd` precisa executar o `collectd` versão 5.x ou superior.

1. Faça logon no servidor do `collectd`.
2. Crie ou edite o arquivo de configuração `collectd` para carregar o plug-in de rede e preencher as diretivas de servidor e porta com os valores adequados. Na maioria das distribuições, isso está localizado em `/etc/collectd/collectd.conf`

Um exemplo de *collectd.conf* para executar um servidor do `collectd`:

    LoadPlugin network
    ...
    ...
    <Plugin network>
        Listen "0.0.0.0" "25826"
    </Plugin>

## Habilitar o encaminhamento collectd no {% data variables.product.prodname_enterprise %}

Por padrão, o encaminhamento do `collectd` está desabilitado no {% data variables.product.prodname_enterprise %}. Siga as etapas abaixo para habilitar e configurar o encaminhamento do `collectd`:

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
1. Abaixo das configurações de encaminhamento de log, selecione **Habilitar encaminhamento do collectd**.
1. No campo **Endereço do servidor**, digite o endereço do servidor do `collectd` para o qual deseja encaminhar as estatísticas do dispositivo do {% data variables.product.prodname_enterprise %}.
1. No campo **Porta**, digite a porta usada para se conectar ao servidor do `collectd`. (o padrão é 25826).
1. No menu suspenso **Configuração de criptografia**, selecione o nível de segurança de comunicações com o servidor do `collectd`. (Nenhum, pacotes assinados ou pacotes criptografados).{% data reusables.enterprise_management_console.save-settings %}

## Como exportar os dados do collectd com `ghe-export-graphs`

A ferramenta de linha de comando `ghe-export-graphs` exportará os dados que o `collectd` armazena em bancos de dados RRD. Esse comando transforma os dados em XML e os exporta em um só tarball (`.tgz`).

Seu uso principal é fornecer à equipe do {% data variables.contact.contact_ent_support %} dados sobre o desempenho de uma VM sem que seja necessário baixar um pacote de suporte completo. Ele não deve ser incluído nas exportações de backup regulares e não há contrapartida de importação. Se você entrar em contato com o {% data variables.contact.contact_ent_support %} para fins de solução de problemas, esses dados podem ser solicitados.

### Uso

```shell
ssh -p 122 admin@[hostname] -- 'ghe-export-graphs' && scp -P 122 admin@[hostname]:~/graphs.tar.gz .
```

## Solução de problemas

### Central do servidor collectd não recebe dados

O {% data variables.product.prodname_enterprise %} é fornecido com o `collectd` versão 5.x. O `collectd` 5.x não é compatível com versões anteriores da série de versões 4.x. Seu servidor central do `collectd` precisa ter, no mínimo, a versão 5.x para aceitar dados enviados do {% data variables.product.product_location %}.

Em caso de dúvidas ou perguntas, entre em contato com o {% data variables.contact.contact_ent_support %}.
