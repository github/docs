---
title: Configurar o suporte ao ecossistema de pacote para sua empresa
intro: 'Você pode configurar {% data variables.product.prodname_registry %} para a sua empresa habilitando ou desabilitando globalmente os ecossistemas de pacotes individuais na sua empresa, incluindo {% ifversion ghes > 3.4 %}{% data variables.product.prodname_container_registry %}, {% endif %}Docker e npm. Conheça outros requisitos de configuração para dar suporte aos ecossistemas de pacote específicos.'
redirect_from:
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
  - /admin/packages/configuring-packages-support-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
shortTitle: Configurar os ecossistemas dos pacotes
---

{% data reusables.package_registry.packages-ghes-release-stage %}

## Habilitar ou desabilitar os ecossistemas de cada pacote

Para evitar que novos pacotes sejam carregados, você pode definir um ecossistema que você previamente habilitou como **Read-Only**, ao mesmo tempo que permite que pacotes existentes sejam baixados.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
1. Em "Alternância de ecossistema", para cada tipo de pacote, selecione **habilitado**, **somente leitura** ou **Desabilitado**.
   {%- ifversion ghes > 3.4 %}{% note -%}
**Observação**: O isolamento de subdomínio deve estar habilitado para alternar as
   opções de {% data variables.product.prodname_container_registry %}.
   {%- endnote %}{%- endif %}{%- ifversion ghes %}
  ![Alternância de ecossistemas](/assets/images/enterprise/site-admin-settings/ecosystem-toggles.png){% else %}
![Ecosystem toggles](/assets/images/enterprise/3.1/site-admin-settings/ecosystem-toggles.png){% endif %}
{% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes %}
## Conectar ao registro oficial do npm

Se você habilitou os pacotes do npm na sua empresa e deseja permitir acesso ao registro oficial do npm, bem como ao registro npm do {% data variables.product.prodname_registry %}, você deverá executar uma configuração adicional.

{% data variables.product.prodname_registry %} usa um proxy transparente para o tráfego de rede que se conecta ao registro npm oficial em `registry.npmjs.com`. O proxy está habilitado por padrão e não pode ser desabilitado.

Para permitir conexões de rede para o registro npm, você precisa configurar as ACLs de rede que permitem que {% data variables.product.prodname_ghe_server %} envie tráfego de HTTPS para o `registry.npmjs.com` por meio da porta 443:

| Fonte                                              | Destino              | Porta   | Tipo  |
| -------------------------------------------------- | -------------------- | ------- | ----- |
| {% data variables.product.prodname_ghe_server %} | `registry.npmjs.com` | TCP/443 | HTTPS |

Observe que as conexões com `registry.npmjs.com` atravessam a rede Cloudflare e, consequentemente, não se conectam a um único endereço IP estático; em vez disso, é feita uma conexão com um endereço IP dentro dos intervalos de CIDR listados aqui: https://www. loudflare.com/ips/.

Se você deseja habilitar fontes upstream do npm, selecione `habilitado` para `upstream do npm`.

{% endif %}

## Próximas etapas

Como a próxima etapa, recomendamos que verifique se precisa atualizar ou carregar um certificado TLS para a URL do seu pacote de host. Para obter mais informações, consulte "[Primeiros passos com o GitHub Packages para sua empresa](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".
