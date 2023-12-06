---
title: Log forwarding
intro: '{% data variables.product.product_name %} uses `syslog-ng` to forward {% ifversion ghes %}system{% elsif ghae %}Git{% endif %} and application logs to the server you specify.'
redirect_from:
  - /enterprise/admin/articles/log-forwarding
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
  - /admin/enterprise-management/log-forwarding
  - /admin/user-management/log-forwarding
  - /admin/user-management/monitoring-activity-in-your-enterprise/log-forwarding
  - /admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
---

## About log forwarding

Any log collection system that supports syslog-style log streams is supported (e.g., [Logstash](https://www.elastic.co/products/logstash) and [Splunk](https://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports)).

When you enable log forwarding, you must upload a CA certificate to encrypt communications between syslog endpoints. Your appliance and the remote syslog server will perform two-way SSL, each providing a certificate to the other and validating the certificate which is received.

## Enabling log forwarding

{% ifversion ghes %}
1. On the {% data variables.enterprise.management_console %} settings page, in the left sidebar, click **Monitoring**.
1. Select **Enable log forwarding**.
1. In the **Server address** field, type the address of the server to which you want to forward logs. You can specify multiple addresses in a comma-separated list.
1. In the Protocol drop-down menu, select the protocol to use to communicate with the log server. The protocol will apply to all specified log destinations.
1. Optionally, select **Enable TLS**. We recommend enabling TLS according to your local security policies, especially if there are untrusted networks between the appliance and any remote log servers.
1. To encrypt communication between syslog endpoints, click **Choose File** and choose a CA certificate for the remote syslog server. You should upload a CA bundle containing a concatenation of the certificates of the CAs involved in signing the certificate of the remote log server. The entire certificate chain will be validated, and must terminate in a root certificate.
{% elsif ghae %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Under {% octicon "gear" aria-label="The Settings gear" %} **Settings**, click **Log forwarding**.
1. Under "Log forwarding", select **Enable log forwarding**.
1. Under "Server address", enter the address of the server you want to forward logs to.
1. Select the "Protocol" dropdown menu and click a protocol.
1. Optionally, to encrypt communication between syslog endpoints using TLS, select **Enable TLS**.
1. Under "Public certificate", paste your x509 certificate.
1. Click **Save**.
{% endif %}

{% ifversion ghes %}

## Troubleshooting

If you run into issues with log forwarding, contact us by visiting {% data variables.contact.contact_ent_support %} and attach the output file from `http(s)://[hostname]/setup/diagnostics` to your message.
{% endif %}
