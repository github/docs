---
title: Configurar collectd
intro: 'O {% data variables.product.prodname_enterprise %} pode coletar dados com `collectd` e enviá-los para um servidor externo `collectd`. Reunimos um conjunto padrão de dados e outras métricas, como uso de CPU, consumo de memória e disco, tráfego e erros da interface de rede e carga geral da VM.'
redirect_from:
  - /enterprise/admin/installation/configuring-collectd
  - /enterprise/admin/articles/configuring-collectd/
  - /enterprise/admin/enterprise-management/configuring-collectd
versions:
  enterprise-server: '*'
---

### Configurar um servidor externo `collectd`

Se você ainda não configurou um servidor externo `collectd`, será preciso fazê-lo antes de ativar o encaminhamento `collectd` na {% data variables.product.product_location %}. Seu servidor `collectd` deve ser configurado executando uma versão `collectd` 5.x ou mais recente.

1. Faça login no servidor `collectd`.
2. Crie ou edite o arquivo de configuração `collectd` para carregar o plugin de rede e preencher as diretivas de servidor e porta com os valores adequados. Na maioria das distribuições, esses dados ficam em `/etc/collectd/collectd.conf`

Exemplo de *collectd.conf* para executar um servidor `collectd`:

    LoadPlugin network
    ...
    ...
    <Plugin network>
        Listen "0.0.0.0" "25826"
    </Plugin>

### Habilitar o encaminhamento collectd no {% data variables.product.prodname_enterprise %}

Por padrão, o encaminhamento `collectd` fica desabilitado no {% data variables.product.prodname_enterprise %}. Siga as etapas abaixo para habilitar e configurar o encaminhamento `collectd`:

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Abaixo das configurações de encaminhamento de log, selecione **Enable collectd forwarding** (Habilitar encaminhamento collectd).
1. No campo **Server address** (Endereço do servidor), digite o endereço do servidor `collectd` para o qual você deseja encaminhar as estatísticas do appliance do {% data variables.product.prodname_enterprise %}.
1. No campo **Port** (Porta), digite a porta usada para conexão com o servidor `collectd` (o padrão é 25826).
1. No menu suspenso **Cryptographic setup** (Configuração criptográfica), selecione o nível de segurança das comunicações com o servidor `collectd` (nenhum, pacotes assinados ou pacotes criptografados).
{% data reusables.enterprise_management_console.save-settings %}

### Exportar dados coletados com `ghe-export-graphs`

A ferramenta de linha de comando `ghe-export-graphs` exportará os dados que `collectd` armazenar em bancos de dados RRD. O comando transforma os dados em XML e os exporta para um único tarball (.tgz).

Seu uso principal é fornecer à equipe do {% data variables.contact.contact_ent_support %} dados sobre o desempenho de uma VM sem que seja necessário baixar um pacote de suporte completo. Ele não deve ser incluído nas exportações de backup regulares e não há contrapartida de importação. Se você entrar em contato com o {% data variables.contact.contact_ent_support %} para fins de solução de problemas, esses dados podem ser solicitados.

#### Uso

```shell
ssh -p 122 admin@[hostname] -- 'ghe-export-graphs' && scp -P 122 admin@[hostname]:~/graphs.tar.gz .
```

### Solução de Problemas

#### Central do servidor collectd não recebe dados

{% data variables.product.prodname_enterprise %} vem com a versão 5.x. de `collectd`. `collectd` 5.x não é retrocompatível com a série de versões 4.x. Seu servidor central `collectd` precisa ser da versão 5.x para aceitar os dados enviados pela {% data variables.product.product_location %}.

Em caso de dúvidas ou perguntas, entre em contato com o {% data variables.contact.contact_ent_support %}.
