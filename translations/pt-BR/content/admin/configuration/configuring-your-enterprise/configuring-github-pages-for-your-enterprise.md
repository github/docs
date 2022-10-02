---
title: Configurar o GitHub Pages para a sua empresa
intro: 'Você pode habilitar ou desabilitar {% data variables.product.prodname_pages %} para a sua empresa{% ifversion ghes %} e escolher se deseja tornar os sites acessíveis ao público{% endif %}.'
redirect_from:
  - /enterprise/admin/guides/installation/disabling-github-enterprise-pages
  - /enterprise/admin/guides/installation/configuring-github-enterprise-pages
  - /enterprise/admin/installation/configuring-github-pages-on-your-appliance
  - /enterprise/admin/configuration/configuring-github-pages-on-your-appliance
  - /admin/configuration/configuring-github-pages-on-your-appliance
  - /enterprise/admin/guides/installation/configuring-github-pages-for-your-enterprise
  - /admin/configuration/configuring-github-pages-for-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Pages
shortTitle: Configure GitHub Pages
ms.openlocfilehash: 1cb2bd78f006bfd86a3f0a2e42db4fcf2cea3b73
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145094018'
---
{% ifversion ghes %}

## Habilitar sites públicos para {% data variables.product.prodname_pages %}

Se o modo privado for habilitado na sua empresa, o público não poderá acessar sites de {% data variables.product.prodname_pages %} hospedados pela sua empresa, a menos que você habilite os sites públicos.

{% warning %}

**Aviso:** se você habilitar sites públicos no {% data variables.product.prodname_pages %}, todos os sites de cada repositório na sua empresa estará acessível ao público.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
4. Selecione **Páginas Públicas**.
  ![Caixa de seleção usada para habilitar Páginas Públicas](/assets/images/enterprise/management-console/public-pages-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

## Desabilitar {% data variables.product.prodname_pages %} para a sua empresa

Se o isolamento de subdomínio estiver desabilitado para sua empresa, você também deverá desabilitar {% data variables.product.prodname_pages %} para se proteger de possíveis vulnerabilidades de segurança. Para obter mais informações, confira "[Como habilitar o isolamento de subdomínio](/admin/configuration/enabling-subdomain-isolation)".

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
1. Desmarque **Habilitar o Pages**.
  ![Caixa de seleção usada para desabilitar o {% data variables.product.prodname_pages %}](/assets/images/enterprise/management-console/pages-select-button.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghae %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.pages-tab %}
1. Em "Políticas do Pages", desmarque **Habilitar o {% data variables.product.prodname_pages %}** .
  ![Caixa de seleção usada para desabilitar o {% data variables.product.prodname_pages %}](/assets/images/enterprise/business-accounts/enable-github-pages-checkbox.png) {% data reusables.enterprise-accounts.pages-policies-save %}

{% endif %}

{% ifversion ghes > 3.4 %}

## Como configurar cabeçalhos de resposta do {% data variables.product.prodname_pages %} para sua empresa

Você pode adicionar ou substituir cabeçalhos de resposta dos sites do {% data variables.product.prodname_pages %} hospedados pelo {% data variables.product.product_location %}.

{% warning %}

**Aviso:** verifique se os cabeçalhos de resposta estão configurados corretamente antes de salvá-los. Configurações incorretas podem afetar negativamente a segurança do {% data variables.product.product_location %}.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
1. Digite as configurações de cabeçalhos e clique em **Adicionar cabeçalhos**.
   - No campo **Nome do Cabeçalho HTTP**, digite o nome do cabeçalho. O nome do cabeçalho deve ter menos de 128 caracteres.
   - No campo **Valor do Cabeçalho HTTP**, digite o valor do cabeçalho. O valor do cabeçalho deve ter menos de 300 caracteres.
![Os campos de valor e nome do cabeçalho de resposta do {% data variables.product.prodname_pages %} no {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/pages-override-header-section.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghes %}
## Leitura adicional

- "[Como habilitar o modo privado](/admin/configuration/enabling-private-mode)" {% endif %}
