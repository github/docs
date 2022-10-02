---
title: Gerenciar a publicação dos sites do GitHub Pages para a sua organização
intro: 'Você pode controlar se os membros da organização podem publicar sites do {% data variables.product.prodname_pages %} por meio de repositórios na organização{% ifversion ghec %} e restringir as visibilidades que os membros podem escolher para os sites{% endif %}.'
permissions: 'Organization owners can manage the publication of {% data variables.product.prodname_pages %} sites from repositories in the organization.'
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization
topics:
  - Organizations
  - Teams
shortTitle: Manage Pages site publication
ms.openlocfilehash: cce086c19dd6f20de28dde599c13074c48851753
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147875517'
---
{% ifversion fpt %} Você pode optar por permitir ou não que os membros da organização publiquem sites do {% data variables.product.prodname_pages %}. Organizações que usam o {% data variables.product.prodname_ghe_cloud %} podem optar por permitir sites publicados de maneira pública, privada, ambas ou nenhuma delas. Para obter mais informações, confira [a documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).
{% elsif ghec %} Você poderá optar por permitir que os integrantes da organização criem sites publicados de maneira pública, privada, ambas ou nenhuma delas. Para obter mais informações sobre o controle de acesso para sites do {% data variables.product.prodname_pages %}, confira "[Como alterar a visibilidade do seu site do {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)".
{% endif %}

Se você não permitir a publicação de sites de {% data variables.product.prodname_pages %}, todos os sites publicados permanecerão publicados. Você pode remover manualmente a publicação do site. Para obter mais informações, confira "[Cancelar a publicação de um site do {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site)".

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}{% ifversion fpt %}
1. Em "Criação de páginas, selecione ou desmarque caixas de seleção **Público**.

   ![para permitir ou não a criação de sites do {% data variables.product.prodname_pages %}](/assets/images/help/organizations/github-pages-creation-checkboxes-fpt.png){% elsif ghec %}
1. Em "Criação de páginas", selecione as visibilidades que você deseja permitir e desmarque as visibilidades que você não deseja permitir.

   ![para permitir ou não a criação de sites do {% data variables.product.prodname_pages %}](/assets/images/help/organizations/github-pages-creation-checkboxes.png){% else %}
1. Em "Criação de páginas", marque ou desmarque a opção **Permitir que os membros publiquem sites**.

   ![Caixa de seleção não marcada na opção "Permitir que os membros publiquem sites"](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png){% endif %}{% ifversion fpt or ghec %}

   {% indented_data_reference reusables.pages.privately-publish-ghec-only spaces=3%}{% endif %}

1. Clique em **Salvar**.

## Leitura adicional

- "[Sobre o {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)"
