---
title: Log forwarding
intro: '{% data variables.product.prodname_enterprise %} uses `syslog-ng` to forward system and application logs to the server you specify in the {% data variables.enterprise.management_console %} settings.'
redirect_from:
  - /enterprise/admin/articles/log-forwarding/
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
versions:
  enterprise-server: '*'
---

Any log collection system that supports syslog-style log streams is supported (e.g., [Logstash](http://logstash.net/) and [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports)).

### Enabling log forwarding

1. On the {% data variables.enterprise.management_console %} settings page, in the left sidebar, click **Monitoring**.
1. Select **Enable log forwarding**.
1. In the **Server address** field, type the address of the server to which you want to forward logs. You can specify multiple addresses in a comma-separated list.
1. In the Protocol drop-down menu, select the protocol to use to communicate with the log server. The protocol will apply to all specified log destinations.
1. Select **Enable TLS**.
1. Click **Choose File** and choose a CA certificate to encrypt communication between syslog endpoints. The entire certificate chain will be validated, and must terminate in a root certificate. For more information, see [TLS options in the syslog-ng documentation](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599).

### 문제 해결

If you run into issues with log forwarding, contact {% data variables.contact.contact_ent_support %} and attach the output file from `http(s)://[hostname]/setup/diagnostics` to your email.
