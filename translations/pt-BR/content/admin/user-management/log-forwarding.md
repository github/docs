---
title: Encaminhamento de logs
intro: '{% data variables.product.product_name %} uses `syslog-ng` to forward {% if enterpriseServerVersions contains currentVersion %}system{% elsif currentVersion == "github-ae@latest" %}Git{% endif %} and application logs to the server you specify.'
redirect_from:
  - /enterprise/admin/articles/log-forwarding/
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
  - /admin/enterprise-management/log-forwarding
versions:
  enterprise-server: '*'
  github-ae: '*'
---

Qualquer sistema de coleta de logs com suporte a fluxos de logs do estilo syslog é compatível (por exemplo, [Logstash](http://logstash.net/) e [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports)).

### Habilitar o encaminhamento de logs

{% if enterpriseServerVersions contains currentVersion %}
1. Na página de configurações do {% data variables.enterprise.management_console %}, na barra lateral esquerda, clique em **Monitoring** (Monitoramento).
1. Selecione **Enable log forwarding** (Habilitar encaminhamento de logs).
1. No campo **Server address** (Endereço do servidor), digite o endereço do servidor para o qual você pretende encaminhar os logs. É possível especificar vários endereços em uma lista separada por vírgulas.
1. No menu suspenso Protocol (Protocolo), selecione o protocolo a ser usado para comunicação com o servidor de logs. O protocolo será aplicado a todos os destinos de log especificados.
1. Selecione **Enable TLS** (Habilitar TLS).
1. Clique em **Choose File** (Escolher arquivo) e escolha um certificado CA para criptografar a comunicação entre os pontos de extremidade do syslog. Toda a cadeia de certificados será validada e deverá terminar em um certificado raiz. Para obter mais informações, consulte [as opções de TLS na documentação syslog-ng](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599).
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Under {% octicon "gear" aria-label="The Settings gear" %} **Settings**, click **Log forwarding**. ![Log forwarding tab](/assets/images/enterprise/business-accounts/log-forwarding-tab.png)
1. Under "Log forwarding", select **Enable log forwarding**. ![Checkbox to enable log forwarding](/assets/images/enterprise/business-accounts/enable-log-forwarding-checkbox.png)
1. Under "Server address", enter the address of the server you want to forward logs to. ![Server address field](/assets/images/enterprise/business-accounts/server-address-field.png)
1. Use the "Protocol" drop-down menu, and select a protocol. ![Protocol drop-down menu](/assets/images/enterprise/business-accounts/protocol-drop-down-menu.png)
1. Optionally, to enable TLS encrypted communication between syslog endpoints, select **Enable TLS**. ![Checkbox to enable TLS](/assets/images/enterprise/business-accounts/enable-tls-checkbox.png)
1. Under "Public certificate", paste your x509 certificate. ![Text box for public certificate](/assets/images/enterprise/business-accounts/public-certificate-text-box.png)
1. Clique em **Salvar**. ![Save button for log forwarding](/assets/images/enterprise/business-accounts/save-button-log-forwarding.png)
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### Solução de Problemas
If you run into issues with log forwarding, contact

{% data variables.contact.contact_ent_support %} and attach the output file from `http(s)://[hostname]/setup/diagnostics` to your email.
{% endif %}
