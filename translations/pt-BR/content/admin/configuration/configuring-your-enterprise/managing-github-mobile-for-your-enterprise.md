---
title: Gerenciando o GitHub Mobile para a sua empresa
intro: 'Você pode decidir se as pessoas podem usar o {% data variables.product.prodname_mobile %} para se conectar ao {% data variables.product.product_location %}.'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_mobile %} for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Mobile
redirect_from:
  - /admin/configuration/configuring-your-enterprise/managing-github-for-mobile-for-your-enterprise
  - /admin/configuration/managing-github-for-mobile-for-your-enterprise
shortTitle: Manage GitHub Mobile
ms.openlocfilehash: f46673c16611a7f1ced6d0476c6ad3d79807f6d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062263'
---
## Sobre o {% data variables.product.prodname_mobile %}

O {% data variables.product.prodname_mobile %} permite que as pessoas façam a triagem, colaborem e gerenciem o trabalho no {% data variables.product.product_location %} em um dispositivo móvel após a autenticação bem-sucedida. {% data reusables.mobile.about-mobile %} Para obter mais informações, confira "[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)".

Você pode permitir ou impedir que os membros corporativos usem o {% data variables.product.prodname_mobile %} para se autenticarem no {% data variables.product.product_location %} e acessar os dados da sua empresa. Por padrão, o {% data variables.product.prodname_mobile %} está {% ifversion ghes > 3.3 %} habilitado para pessoas que usam o {% data variables.product.product_location %}.{% else %} não está habilitado para pessoas que usam o {% data variables.product.product_location %}. Para permitir a conexão com a sua instância com o {% data variables.product.prodname_mobile %}, você precisa habilitar o recurso na instância.{% endif %}

{% ifversion ghes < 3.6 %} {% note %}

**Observação:** se você fizer upgrade para o {% data variables.product.prodname_ghe_server %} 3.4.0 ou posterior e não tiver desabilitado nem habilitado o {% data variables.product.prodname_mobile %}, o {% data variables.product.prodname_mobile %} estará habilitado por padrão. Se você desabilitar ou habilitar o {% data variables.product.prodname_mobile %} na sua instância, sua preferência será preservada após o upgrade. Para obter mais informações sobre como fazer upgrade da sua instância, confira "[Como fazer upgrade do {% data variables.product.product_name %}](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)".

{% endnote %} {% endif %}

## Habilitar ou desabilitar {% data variables.product.prodname_mobile %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %}
1. Na barra lateral esquerda, clique em **Mobile**.
  !["Mobile" na barra lateral esquerda do console de gerenciamento do {% data variables.product.prodname_ghe_server %}](/assets/images/enterprise/management-console/click-mobile.png)
1. Em "GitHub Mobile", marque ou desmarque a opção **Habilitar o GitHub Mobile Apps**.
  ![Caixa de seleção "Habilitar o GitHub Mobile Apps" no console de gerenciamento do {% data variables.product.prodname_ghe_server %}](/assets/images/enterprise/management-console/select-enable-github-mobile-apps.png) {% data reusables.enterprise_management_console.save-settings %}
