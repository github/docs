---
title: Encaminhamento de logs
intro: 'O {% data variables.product.prodname_enterprise %} usa `syslog-ng` para encaminhar logs do sistema e de aplicativos para o servidor especificado nas configurações do {% data variables.enterprise.management_console %}.'
redirect_from:
  - /enterprise/admin/articles/log-forwarding/
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
versions:
  enterprise-server: '*'
---

Qualquer sistema de coleta de logs com suporte a fluxos de logs do estilo syslog é compatível (por exemplo, [Logstash](http://logstash.net/) e [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports)).

### Habilitar o encaminhamento de logs

1. Na página de configurações do {% data variables.enterprise.management_console %}, na barra lateral esquerda, clique em **Monitoring** (Monitoramento).
1. Selecione **Enable log forwarding** (Habilitar encaminhamento de logs).
1. No campo **Server address** (Endereço do servidor), digite o endereço do servidor para o qual você pretende encaminhar os logs. É possível especificar vários endereços em uma lista separada por vírgulas.
1. No menu suspenso Protocol (Protocolo), selecione o protocolo a ser usado para comunicação com o servidor de logs. O protocolo será aplicado a todos os destinos de log especificados.
1. Selecione **Enable TLS** (Habilitar TLS).
1. Clique em **Choose File** (Escolher arquivo) e escolha um certificado CA para criptografar a comunicação entre os pontos de extremidade do syslog. Toda a cadeia de certificados será validada e deverá terminar em um certificado raiz. Para obter mais informações, consulte [as opções de TLS na documentação syslog-ng](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599).

### Solução de Problemas

Em caso de problemas com o encaminhamento de logs, entre em contato com o {% data variables.contact.contact_ent_support %} e anexe o arquivo de saída de `http(s)://[hostname]/setup/diagnostics` ao seu e-mail.
