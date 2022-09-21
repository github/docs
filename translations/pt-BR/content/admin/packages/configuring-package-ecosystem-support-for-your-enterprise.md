---
title: Configurar o suporte ao ecossistema de pacote para sua empresa
intro: 'Você pode configurar o {% data variables.product.prodname_registry %} para sua empresa habilitando ou desabilitando globalmente ecossistemas de pacotes individuais na empresa, incluindo {% ifversion ghes > 3.4 %}{% data variables.product.prodname_container_registry %}, {% endif %}o Docker e o npm. Conheça outros requisitos de configuração para dar suporte aos ecossistemas de pacote específicos.'
redirect_from:
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
  - /admin/packages/configuring-packages-support-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
shortTitle: Configure package ecosystems
ms.openlocfilehash: 83de80e4233f671a7a923394d2fd3f6e554bba10
ms.sourcegitcommit: 770ed406ec075528ec9c9695aa4bfdc8c8b25fd3
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147062543'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## Habilitar ou desabilitar os ecossistemas de cada pacote

Para evitar que novos pacotes sejam carregados, você pode definir um ecossistema que já você habilitou como **Somente Leitura**, permitindo que os pacotes existentes sejam baixados.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %}
1. Abaixo de “Alternâncias de ecossistema”, para cada tipo de pacote, selecione **Habilitado**, **Somente leitura** ou **Desabilitado**.
   {%- ifversion ghes > 3.4 %}{% note -%} **Observação**: o isolamento de subdomínio deve ser habilitado para alternar as opções {% data variables.product.prodname_container_registry %}
   {%- endnote %}{%- endif %}{%- ifversion ghes %} ![Alternâncias de ecossistema](/assets/images/enterprise/site-admin-settings/ecosystem-toggles.png){% else %} ![Alternâncias de ecossistema](/assets/images/enterprise/3.1/site-admin-settings/ecosystem-toggles.png){% endif %} {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes %}
## Conectar ao registro oficial do npm

Se você habilitou os pacotes do npm na sua empresa e deseja permitir acesso ao registro oficial do npm, bem como ao registro npm do {% data variables.product.prodname_registry %}, você deverá executar uma configuração adicional.

O {% data variables.product.prodname_registry %} usa um proxy transparente para o tráfego de rede que se conecta ao registro npm oficial em `registry.npmjs.com`. O proxy está habilitado por padrão e não pode ser desabilitado.

Para permitir conexões de rede com o registro npm, você precisará configurar ACLs de rede que permitem que o {% data variables.product.prodname_ghe_server %} envie o tráfego HTTPS para `registry.npmjs.com` pela porta 443:

| Fonte | Destino | Porta | Tipo |
|---|---|---|---|
| {% data variables.product.prodname_ghe_server %} | `registry.npmjs.com` | TCP/443 | HTTPS |

Observe que as conexões com o `registry.npmjs.com` percorrem a rede do Cloudflare e, em seguida, não se conectam a um único endereço IP estático. Em vez disso, uma conexão é feita com um endereço IP dentro dos intervalos CIDR listados aqui: https://www.cloudflare.com/ips/.

Caso deseje habilitar fontes upstream do npm, selecione `Enabled` para `npm upstreaming`.

{% endif %}

## Próximas etapas

Como a próxima etapa, recomendamos que verifique se precisa atualizar ou carregar um certificado TLS para a URL do seu pacote de host. Para obter mais informações, confira "[Introdução aos Pacotes do GitHub para sua empresa](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".
