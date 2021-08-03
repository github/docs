---
title: Configurar nome de host
intro: 'Em vez de usar um endereço IP codificado, é recomendável definir um nome de host para o seu appliance.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-hostnames/
  - /enterprise/admin/installation/configuring-a-hostname
  - /enterprise/admin/configuration/configuring-a-hostname
  - /admin/configuration/configuring-a-hostname
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
---
Se configurar um nome de host em vez de um endereço IP codificado, você poderá alterar o hardware físico em que a {% data variables.product.product_location %} é executada sem afetar os usuários ou o software cliente.

A configuração do nome de host no {% data variables.enterprise.management_console %} deve ser definida como um nome de domínio totalmente qualificado (FQDN) que seja resolvido na internet ou dentro da sua rede interna. Por exemplo, a configuração do nome de host pode ser `github.nomedaempresa.com.` Também recomendamos habilitar o isolamento de subdomínio para o nome do host escolhido a fim de mitigar várias vulnerabilidades no estilo de script entre sites. Para obter mais informações sobre as configurações de nome de host, consulte a [Seção 2.1 em HTTP RFC](https://tools.ietf.org/html/rfc1123#section-2).

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.hostname-menu-item %}
4. Digite o nome do host que você pretende definir para a {% data variables.product.product_location %}. ![Campo para configurar um nome de host](/assets/images/enterprise/management-console/hostname-field.png)
5. Para testar as configurações DNS e SSL do novo nome de host, clique em **Test domain settings** (Testar configurações de domínio). ![Botão Test domain settings (Testar configurações de domínio)](/assets/images/enterprise/management-console/test-domain-settings.png)
{% data reusables.enterprise_management_console.test-domain-settings-failure %}
{% data reusables.enterprise_management_console.save-settings %}

Depois de configurar um nome de host, recomendamos que você habilite o isolamento de subdomínio para a {% data variables.product.product_location %}. Para obter mais informações, consulte "[Habilitar isolamento de subdomínio](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-subdomain-isolation/)".
