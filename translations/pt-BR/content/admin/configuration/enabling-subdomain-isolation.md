---
title: Habilitar isolamento de subdomínio
intro: 'É possível configurar o isolamento de subdomínio para separar com segurança o conteúdo enviado pelo usuário de outras partes do seu appliance do {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/installation/about-subdomain-isolation/
  - /enterprise/admin/installation/enabling-subdomain-isolation
  - /enterprise/admin/configuration/enabling-subdomain-isolation
versions:
  enterprise-server: '*'
---

### Sobre isolamento de subdomínio

O isolamento de subdomínios reduz os problemas de script entre sites e outras vulnerabilidades relacionadas. Para obter mais informações, leia mais sobre [scripts entre sites](http://en.wikipedia.org/wiki/Cross-site_scripting) na Wikipedia. É altamente recomendável habilitar o isolamento de subdomínio para a {% data variables.product.product_location_enterprise %}.

Quando o isolamento do subdomínio está ativado, o {% data variables.product.prodname_ghe_server %} substitui vários caminhos pelos subdomínios.

{% if currentVersion ver_gt "enterprise-server@2.21" %}
Para usar o Docker com {% data variables.product.prodname_registry %}, você deve habilitar o isolamento de subdomínio. Para obter mais informações, consulte "[Configurar Docker para uso com o {% data variables.product.prodname_registry %}](/enterprise/{{ currentVersion }}/user/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages)".

{% data reusables.package_registry.packages-ghes-release-stage %}
|
{% endif %}
| Caminho sem isolamento de subdomínio                                                                                            | Caminho com isolamento de subdomínio                                   |
| ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `http(s)://HOSTNAME/assets/`                                                                                                    | `http(s)://assets.HOSTNAME/`                                           |
| `http(s)://HOSTNAME/avatars/`                                                                                                   | `http(s)://avatars.HOSTNAME/`                                          |
| `http(s)://HOSTNAME/codeload/`                                                                                                  | `http(s)://codeload.HOSTNAME/`                                         |
| `http(s)://HOSTNAME/gist/`                                                                                                      | `http(s)://gist.HOSTNAME/`                                             |
| `http(s)://HOSTNAME/media/`                                                                                                     | `http(s)://media.HOSTNAME/`                                            |
| `http(s)://HOSTNAME/pages/`                                                                                                     | `http(s)://pages.HOSTNAME/`                                            |
| `http(s)://HOSTNAME/raw/`                                                                                                       | `http(s)://raw.HOSTNAME/`                                              |
| `http(s)://HOSTNAME/render/`                                                                                                    | `http(s)://render.HOSTNAME/`                                           |
| `http(s)://HOSTNAME/reply/`                                                                                                     | `http(s)://reply.HOSTNAME/`                                            |
| `http(s)://HOSTNAME/uploads/`                                                                                                   | `http(s)://uploads.HOSTNAME/`     |{% if currentVersion ver_gt "enterprise-server@2.21" %}
| N/A, Docker com {% data variables.product.prodname_registry %} não funcionará com o isolamento de subdomínio desabilitado. | `http(s)://uploads.HOSTNAME/`                                          |
| `https://HOSTNAME/_registry/npm/`                                                                                               | `https://npm.HOSTNAME/`                                                |
| `https://HOSTNAME/_registry/rubygems/`                                                                                          | `https://rubygems.HOSTNAME/`                                           |
| `https://HOSTNAME/_registry/maven/`                                                                                             | `https://maven.HOSTNAME/`                                              |
| `https://HOSTNAME/_registry/nuget/`                                                                                             | `https://nuget.HOSTNAME/`{% endif %}

### Pré-requisitos

{% data reusables.enterprise_installation.disable-github-pages-warning %}

Antes de habilitar o isolamento de subdomínio, você deve definir as configurações de rede do novo domínio.

- Em vez de um endereço IP, especifique um nome de domínio válido como nome de host. Para obter mais informações, consulte "[Configurar nome de host](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-a-hostname)".

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

- Configure um registro curinga do Sistema de Nomes de Domínio (DNS) ou registros DNS individuais para os subdomínios listados acima. É recomendável criar um registro A para `*.HOSTNAME` que aponte para o endereço IP do servidor, de modo que não seja preciso criar vários registros para cada subdomínio.
- Obtenha um certificado curinga de Segurança da Camada de Transporte (TLS) para `*.HOSTNAME` com Nome Alternativo da Entidade (SAN) para `HOSTNAME` e o domínio curinga `*.HOSTNAME`. Por exemplo, se o nome de host for `github.octoinc.com`, obtenha um certificado com valor de nome comum definido como `*.github.octoinc.com` e valor SAN definido para `github.octoinc.com` e `*.github.octoinc.com`.
- Habilite o TLS no appliance. Para obter mais informações, consulte "[Configurar TLS](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-tls/)".

### Habilitar isolamento de subdomínio

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.hostname-menu-item %}
4. Selecione **Subdomain isolation (recommended)** (Isolamento de subdomínio [recomendado]). ![Caixa de seleção para habilitar o isolamento de subdomínio](/assets/images/enterprise/management-console/subdomain-isolation.png)
{% data reusables.enterprise_management_console.save-settings %}
