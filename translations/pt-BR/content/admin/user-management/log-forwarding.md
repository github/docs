---
title: Encaminhamento de logs
intro: '{% data variables.product.product_name %} usa `syslog-ng` para encaminhar {% if enterpriseServerVersions contains currentVersion %}sistema{% elsif currentVersion == "github-ae@latest" %}Git{% endif %} e logs de aplicativo para o servidor que você especificou.'
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
1. Em {% octicon "gear" aria-label="The Settings gear" %} **Configurações**, clique em **Encaminhamento de registro**. ![Aba de encaminhamento de log](/assets/images/enterprise/business-accounts/log-forwarding-tab.png)
1. Em "Encaminhamento de registro", selecione **Habilitar o encaminhamento de registro**. ![Caixa de seleção para habilitar o encaminhamento de registro](/assets/images/enterprise/business-accounts/enable-log-forwarding-checkbox.png)
1. Em "Endereço do servidor, digite o endereço do servidor para o qual você deseja encaminhar o registro. ![Campo endereço do servidor](/assets/images/enterprise/business-accounts/server-address-field.png)
1. Use o menu suspenso "Protocolo" e selecione um protocolo. ![Menu suspenso de protocolo](/assets/images/enterprise/business-accounts/protocol-drop-down-menu.png)
1. Opcionalmente, para habilitar comunicação encriptada TLS entre os pontos de extremidade do syslog, selecione **Habilitar TLS**. ![Caixa de seleção para habilitar TLS](/assets/images/enterprise/business-accounts/enable-tls-checkbox.png)
1. Em "Certificado público", cole o seu certificado x509. ![Caixa de texto para certificado público](/assets/images/enterprise/business-accounts/public-certificate-text-box.png)
1. Clique em **Salvar**. ![Botão Salvar para encaminhamento de registro](/assets/images/enterprise/business-accounts/save-button-log-forwarding.png)
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### Solução de Problemas
Se você tiver problemas com o encaminhamento de registro, entre em contato com

{% data variables.contact.contact_ent_support %} e anexe o arquivo de saída de `http(s)://[hostname]/setup/diagnostics` ao seu e-mail.
{% endif %}
