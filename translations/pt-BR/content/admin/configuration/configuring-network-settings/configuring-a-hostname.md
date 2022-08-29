---
title: Configurar nome de host
intro: 'Em vez de usar um endereço IP codificado, é recomendável definir um nome de host para o seu appliance.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-hostnames
  - /enterprise/admin/installation/configuring-a-hostname
  - /enterprise/admin/configuration/configuring-a-hostname
  - /admin/configuration/configuring-a-hostname
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
---

Se configurar um nome de host em vez de um endereço IP codificado, você poderá alterar o hardware físico em que a {% data variables.product.product_location %} é executada sem afetar os usuários ou o software cliente.

A configuração do nome de host no {% data variables.enterprise.management_console %} deve ser definida como um nome de domínio totalmente qualificado (FQDN) que seja resolvido na internet ou dentro da sua rede interna. Por exemplo, a configuração do nome de host pode ser `github.companyname.com.`As solicitações da web e da API serão automaticamente redirecionadas para o nome de host configurado no {% data variables.enterprise.management_console %}. Observe que `localhost` não é uma configuração válida para o nome de host.

Depois de configurar um nome de host, você poderá habilitar o isolamento de subdomínio para aumentar ainda mais a segurança de {% data variables.product.product_location %}. Para obter mais informações, consulte "[Habilitar isolamento de subdomínio](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)".

Para obter mais informações sobre os tipos de nome de host compatíveis, consulte a [seção 2.1 do HTTP RFC](https://tools.ietf.org/html/rfc1123#section-2).

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.hostname-menu-item %}
4. Digite o nome do host que você pretende definir para a {% data variables.product.product_location %}. ![Campo para configurar um nome de host](/assets/images/enterprise/management-console/hostname-field.png)
5. Para testar as configurações DNS e SSL do novo nome de host, clique em **Test domain settings** (Testar configurações de domínio). ![Botão Test domain settings (Testar configurações de domínio)](/assets/images/enterprise/management-console/test-domain-settings.png)
{% data reusables.enterprise_management_console.test-domain-settings-failure %}
{% data reusables.enterprise_management_console.save-settings %}

Para ajudar a mitigar várias vulnerabilidades de script entre sites, recomendamos que você habilite o isolamento de subdomínio para {% data variables.product.product_location %} depois de configurar um nome de host. Para obter mais informações, consulte "[Habilitar isolamento de subdomínio](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)".
