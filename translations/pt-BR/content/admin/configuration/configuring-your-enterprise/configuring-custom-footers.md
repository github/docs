---
title: Configurando rodapés personalizados
intro: 'Você pode facilitar o acesso dos usuários aos links específicos da empresa, adicionando rodapés personalizados a {% data variables.product.product_name %}.'
versions:
  ghec: '*'
  ghes: '>=3.4'
  ghae: '>= 3.4'
type: how_to
topics:
  - Enterprise
  - Fundamentals
shortTitle: Configure custom footers
ms.openlocfilehash: d051e2399841e90291de62e496c534520465235a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145095974'
---
Os proprietários de empresas podem configurar {% data variables.product.product_name %} para mostrar rodapés personalizados com até cinco links adicionais.

![Rodapé personalizado](/assets/images/enterprise/custom-footer/octodemo-footer.png)

O rodapé personalizado é exibido acima do rodapé do {% data variables.product.prodname_dotcom %} {% ifversion ghes or ghae %}para todos os usuários, em todas as páginas do {% data variables.product.product_name %}{% elsif ghec %}para todos os membros e colaboradores da empresa, em todas as páginas do repositório e da organização para os repositórios e as organizações que pertencem à empresa{% endif %}.

## Configurar rodapés personalizados para sua empresa

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}

1. Em "Configurações", clique em **Perfil**.
{%- ifversion ghec %} ![Configurações de perfil da empresa](/assets/images/enterprise/custom-footer/enterprise-profile-ghec.png) {%- else %} ![Configurações de perfil da empresa](/assets/images/enterprise/custom-footer/enterprise-profile-ghes.png) {%- endif %}

1. Na parte superior da seção Perfil, clique em **Rodapé personalizado**.
![Seção de rodapé personalizado](/assets/images/enterprise/custom-footer/custom-footer-section.png)

1. Adicione até cinco links nos campos mostrados.
![Adicionar links de rodapé](/assets/images/enterprise/custom-footer/add-footer-links.png)

1. Clique em **Atualizar rodapé personalizado** para salvar o conteúdo e ver o rodapé personalizado.
![Atualizar rodapé personalizado](/assets/images/enterprise/custom-footer/update-custom-footer.png)
