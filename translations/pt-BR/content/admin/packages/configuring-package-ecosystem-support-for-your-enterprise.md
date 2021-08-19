---
title: Configurar o suporte ao ecossistema de pacote para sua empresa
intro: 'Você pode configurar {% data variables.product.prodname_registry %} para a sua empresa habilitando ou desabilitando globalmente os ecossistemas de pacotes individuais na sua empresa, incluindo Docker, RubyGems, npm, Apache Maven, Gradle ou NuGet. Conheça outros requisitos de configuração para dar suporte aos ecossistemas de pacote específicos.'
redirect_from:
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
  - /admin/packages/configuring-packages-support-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
type: how_to
topics:
  - Enterprise
  - Packages
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### Habilitar ou desabilitar os ecossistemas de cada pacote

Para evitar que novos pacotes sejam carregados, você pode definir um ecossistema que você previamente habilitou como **Read-Only**, ao mesmo tempo que permite que pacotes existentes sejam baixados.

{% if currentVersion == "enterprise-server@2.22" %}
Para usar
{% data variables.product.prodname_registry %} com o Docker, você precisa ter o isolamento de subdomínio habilitado para sua instância. Para obter mais informações, consulte "[Habilitar o isolamento de subdomínio](/enterprise/admin/configuration/enabling-subdomain-isolation)".
{% endif %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
1. Em "Alternância de ecossistema", para cada tipo de pacote, selecione **habilitado**, **somente leitura** ou **Desabilitado**. ![Alternância de ecossistemas](/assets/images/enterprise/site-admin-settings/ecosystem-toggles.png)
{% data reusables.enterprise_management_console.save-settings %}

{% if currentVersion == "enterprise-server@3.0" or currentVersion ver_gt "enterprise-server@3.0" %}
### Conectar ao registro oficial do npm

Se você habilitou os pacotes do npm na sua empresa e deseja permitir acesso ao registro oficial do npm, bem como ao registro npm do {% data variables.product.prodname_registry %}, você deverá executar uma configuração adicional.

{% data variables.product.prodname_registry %} usa um proxy transparente para o tráfego de rede que se conecta ao registro npm oficial em `registry.npmjs.com`. O proxy está habilitado por padrão e não pode ser desabilitado.

Para permitir conexões de rede para o registro npm, você precisa configurar as ACLs de rede que permitem que {% data variables.product.prodname_ghe_server %} envie tráfego de HTTPS para o `registry.npmjs.com` por meio da porta 443:

| Fonte                                              | Destino              | Porta   | Tipo  |
| -------------------------------------------------- | -------------------- | ------- | ----- |
| {% data variables.product.prodname_ghe_server %} | `registry.npmjs.com` | TCP/443 | HTTPS |

Observe que as conexões com `registry.npmjs.com` atravessam a rede Cloudflare e, consequentemente, não se conectam a um único endereço IP estático; em vez disso, é feita uma conexão com um endereço IP dentro dos intervalos de CIDR listados aqui: https://www. loudflare.com/ips/.

{% endif %}

### Próximas etapas

Como a próxima etapa, recomendamos que verifique se precisa atualizar ou carregar um certificado TLS para a URL do seu pacote de host. Para obter mais informações, consulte "[Primeiros passos com o GitHub Packages para sua empresa](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".
