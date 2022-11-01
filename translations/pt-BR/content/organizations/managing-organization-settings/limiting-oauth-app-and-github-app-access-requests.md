---
title: Como limitar as solicitações de acesso ao Aplicativo do OAuth e ao Aplicativo do GitHub
intro: 'Como proprietário da organização, você pode escolher se quer permitir que colaboradores externos solicitem acesso a {% data variables.product.prodname_oauth_apps %} e {% data variables.product.prodname_github_apps %}.'
versions:
  feature: limit-app-access-requests
permissions: Organization owners can limit who can make app access requests to the organization.
topics:
  - Organizations
  - GitHub Apps
  - OAuth Apps
shortTitle: Limit app access requests
ms.openlocfilehash: 4ea1bd133dcbabb9e7b3e3cbe65da5ff9c6eabac
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148007640'
---
## Sobre as solicitações de acesso de integração

Quando as solicitações de acesso de integração estão habilitadas, colaboradores externos podem solicitar acesso à organização para {% data variables.product.prodname_github_apps %} e {% data variables.product.prodname_oauth_apps %} que ainda não tenham sido aprovados pela organização. Se você desabilitar as solicitações de acesso de integração, somente os membros da organização poderão solicitar acesso à organização para {% data variables.product.prodname_github_apps %} e {% data variables.product.prodname_oauth_apps %}. Os colaboradores externos ainda poderão consentir que os {% data variables.product.prodname_github_apps %} e {% data variables.product.prodname_oauth_apps %} pré-aprovados acessem os mesmos recursos aos que o colaborador externo solicitante tem acesso.

Por padrão, as solicitações de acesso de integração estão habilitadas. Se a organização tem um grande número de colaboradores externos, convém desabilitar as solicitações de acesso de integração para reduzir o número de solicitações que você precisa revisar. 

## Habilitar ou desabilitar solicitações de acesso de integração

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.profile.org_member_privileges %}
1. Em "Solicitações de acesso de integração", marque ou desmarque **Permitir solicitações de integração de colaboradores externos** e clique em **Salvar**.
    ![Captura de tela da configuração de solicitações de acesso de integração](/assets/images/help/organizations/integration-access-requests.png)
