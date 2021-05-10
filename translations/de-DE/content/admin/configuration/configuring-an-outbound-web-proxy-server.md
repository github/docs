---
title: Ausgehenden Webproxyserver konfigurieren
intro: 'Ein Proxyserver bietet eine zusätzliche Sicherheitsebene für {% data variables.product.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-a-proxy-server/
  - /enterprise/admin/installation/configuring-an-outbound-web-proxy-server
  - /enterprise/admin/configuration/configuring-an-outbound-web-proxy-server
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

Wenn ein Proxyserver für {% data variables.product.product_location %} aktiviert wird, werden ausgehende Nachrichten, die von {% data variables.product.prodname_ghe_server %} gesendet wurden, zunächst über den Proxyserver gesendet, sofern der Zielhost nicht als HTTP-Proxyausschluss hinzugefügt wurde. Zu den Typen ausgehender Nachrichten zählen ausgehende Webhooks, das Hochladen von Bundles und das Abrufen von veralteten Avataren. Die URL des Proxyservers ist das Protokoll, die Domain oder IP-Adresse plus die Portnummer, also beispielsweise `http://127.0.0.1:8123`.

{% note %}

**Hinweis:** Um zwischen {% data variables.product.product_location %} und {% data variables.product.prodname_dotcom_the_website %} eine Verbindung herzustellen, muss Ihre Proxykonfiguration die Konnektivität zwischen `github.com` und `api.github.com` zulassen. Weitere Informationen finden Sie unter „[{% data variables.product.prodname_ghe_server %} mit {% data variables.product.prodname_dotcom_the_website %}](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com) verbinden“.

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
4. Geben Sie unter **HTTP Proxy Server** (HTTP-Proxyserver) die URL Ihres Proxyservers ein. ![Feld zur Eingabe der HTTP-Proxyserver-URL](/assets/images/enterprise/management-console/http-proxy-field.png)

5. Geben Sie optional unter **HTTP Proxy Exclusion** (HTTP-Proxyausschluss) die Hosts ein, für die kein Proxyzugriff erforderlich ist. Trennen Sie dabei die Hosts durch Kommas voneinander. To exclude all hosts in a domain from requiring proxy access, you can use `.` as a wildcard prefix.  For example: `.octo-org.tentacle` ![Feld zur Eingabe von HTTP-Proxyausschlüssen](/assets/images/enterprise/management-console/http-proxy-exclusion-field.png)

{% data reusables.enterprise_management_console.save-settings %}
