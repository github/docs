---
title: Log forwarding
intro: '{% data variables.product.product_name %} uses `syslog-ng` to forward {% if enterpriseServerVersions contains currentVersion %}system{% elsif currentVersion == "github-ae@latest" %}Git{% endif %} and application logs to the server you specify.'
redirect_from:
  - /enterprise/admin/articles/log-forwarding/
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
  - /admin/enterprise-management/log-forwarding
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - корпоративный
---

Any log collection system that supports syslog-style log streams is supported (e.g., [Logstash](http://logstash.net/) and [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports)).

### Enabling log forwarding

{% if enterpriseServerVersions contains currentVersion %}
1. On the {% data variables.enterprise.management_console %} settings page, in the left sidebar, click **Monitoring**.
1. Select **Enable log forwarding**.
1. In the **Server address** field, type the address of the server to which you want to forward logs. You can specify multiple addresses in a comma-separated list.
1. In the Protocol drop-down menu, select the protocol to use to communicate with the log server. The protocol will apply to all specified log destinations.
1. Select **Enable TLS**.
1. Click **Choose File** and choose a CA certificate to encrypt communication between syslog endpoints. The entire certificate chain will be validated, and must terminate in a root certificate. For more information, see [TLS options in the syslog-ng documentation](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599).
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Under {% octicon "gear" aria-label="The Settings gear" %} **Settings**, click **Log forwarding**. ![Log forwarding tab](/assets/images/enterprise/business-accounts/log-forwarding-tab.png)
1. Under "Log forwarding", select **Enable log forwarding**. ![Checkbox to enable log forwarding](/assets/images/enterprise/business-accounts/enable-log-forwarding-checkbox.png)
1. Under "Server address", enter the address of the server you want to forward logs to. ![Server address field](/assets/images/enterprise/business-accounts/server-address-field.png)
1. Use the "Protocol" drop-down menu, and select a protocol. ![Protocol drop-down menu](/assets/images/enterprise/business-accounts/protocol-drop-down-menu.png)
1. Optionally, to enable TLS encrypted communication between syslog endpoints, select **Enable TLS**. ![Checkbox to enable TLS](/assets/images/enterprise/business-accounts/enable-tls-checkbox.png)
1. Under "Public certificate", paste your x509 certificate. ![Text box for public certificate](/assets/images/enterprise/business-accounts/public-certificate-text-box.png)
1. Click **Save**. ![Save button for log forwarding](/assets/images/enterprise/business-accounts/save-button-log-forwarding.png)
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### Устранение проблем
If you run into issues with log forwarding, contact

{% data variables.contact.contact_ent_support %} and attach the output file from `http(s)://[hostname]/setup/diagnostics` to your email.
{% endif %}
