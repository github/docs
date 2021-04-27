---
title: Configuring an outbound web proxy server
intro: 'A proxy server provides an additional level of security for {% data variables.product.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-a-proxy-server/
  - /enterprise/admin/installation/configuring-an-outbound-web-proxy-server
  - /enterprise/admin/configuration/configuring-an-outbound-web-proxy-server
versions:
  enterprise-server: '*'
topics:
  - enterprise
---
When a proxy server is enabled for {% data variables.product.product_location %}, outbound messages sent by {% data variables.product.prodname_ghe_server %} are first sent through the proxy server, unless the destination host is added as an HTTP proxy exclusion. Types of outbound messages include outgoing webhooks, uploading bundles, and fetching legacy avatars. The proxy server's URL is the protocol, domain or IP address, plus the port number, for example `http://127.0.0.1:8123`.

{% note %}

**Note:**  To connect {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %}, your proxy configuration must allow connectivity to `github.com` and `api.github.com`. For more information, see "[Connecting {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_dotcom_the_website %}](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com)."

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
4. Under **HTTP Proxy Server**, type the URL of your proxy server.
  ![Field to type the HTTP Proxy Server URL](/assets/images/enterprise/management-console/http-proxy-field.png)
  
5. Optionally, under **HTTP Proxy Exclusion**, type any hosts that do not require proxy access, separating hosts with commas. To exclude all hosts in a domain from requiring proxy access, you can use `.` as a wildcard prefix.  For example: `.octo-org.tentacle`
  ![Field to type any HTTP Proxy Exclusions](/assets/images/enterprise/management-console/http-proxy-exclusion-field.png)

{% data reusables.enterprise_management_console.save-settings %}
