---
title: Configurar servidor proxy web de saída
intro: 'Servidores proxy geram uma camada extra de segurança para a {% data variables.product.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-a-proxy-server/
  - /enterprise/admin/installation/configuring-an-outbound-web-proxy-server
  - /enterprise/admin/configuration/configuring-an-outbound-web-proxy-server
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

Quando houver um servidor proxy habilitado para a {% data variables.product.product_location %}, as mensagens de saída enviadas para o {% data variables.product.prodname_ghe_server %} sairão primeiramente pelo servidor proxy, a menos que o host de destino seja adicionado como exclusão de proxy HTTP. Os tipos de mensagens de saída incluem webhooks de saída, pacotes para upload e fetch de avatares herdados. A URL do servidor proxy é o protocolo, domínio ou endereço IP e o número da porta, por exemplo: `http://127.0.0.1:8123`.

{% note %}

**Observação:** para conectar a {% data variables.product.product_location %} ao {% data variables.product.prodname_dotcom_the_website %}, a sua configuração de proxy deve permitir conectividade com `github.com` e `api.github.com`. Para obter mais informações, consulte "[Conectar o {% data variables.product.prodname_ghe_server %} ao {% data variables.product.prodname_dotcom_the_website %}](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com)".

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
4. Em **HTTP Proxy Server** (Servidor proxy HTTP), digite a URL do seu servidor proxy. ![Campo para digitar a URL do servidor proxy HTTP](/assets/images/enterprise/management-console/http-proxy-field.png)

5. Você também pode ir até **HTTP Proxy Exclusion** (Exclusão de proxy HTTP) e digitar qualquer host que não exija acesso por proxy, separando os hosts por vírgulas. Para excluir todos os hosts de um domínio que exige acesso ao proxy, você pode usar `.` como um prefixo curinga.  Por exemplo: `octo-org.tentacle` ![Campo para digitar qualquer exclusão de proxy HTTP](/assets/images/enterprise/management-console/http-proxy-exclusion-field.png)

{% data reusables.enterprise_management_console.save-settings %}
