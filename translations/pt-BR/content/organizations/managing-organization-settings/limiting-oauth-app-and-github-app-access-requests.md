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
ms.openlocfilehash: 6c991ecfbdac75f1bb3bb4fdb5ea3a0692f1d040
ms.sourcegitcommit: 30b0931723b704e219c736e0de7afe0fa799da29
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186432'
---
## Sobre as solicitações de acesso de integração

Quando as solicitações de acesso de integração estão habilitadas, colaboradores externos podem solicitar acesso à organização para {% data variables.product.prodname_github_apps %} e {% data variables.product.prodname_oauth_apps %} que ainda não tenham sido aprovados pela organização. Se você desabilitar as solicitações de acesso de integração, somente os membros da organização poderão solicitar acesso à organização para {% data variables.product.prodname_github_apps %} e {% data variables.product.prodname_oauth_apps %}. Os colaboradores externos ainda poderão consentir que os {% data variables.product.prodname_github_apps %} e {% data variables.product.prodname_oauth_apps %} pré-aprovados acessem os mesmos recursos aos que o colaborador externo solicitante tem acesso.

Por padrão, as solicitações de acesso de integração estão habilitadas. Se a organização tem um grande número de colaboradores externos, convém desabilitar as solicitações de acesso de integração para reduzir o número de solicitações que você precisa revisar. 

## Habilitando ou desabilitando solicitações de acesso de integração

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.profile.org_member_privileges %}
1. Em "Solicitações de acesso de integração", marque ou desmarque **Permitir solicitações de integração de colaboradores externos** e clique em **Salvar**.
    ![Captura de tela da configuração de solicitações de acesso de integração](/assets/images/help/organizations/integration-access-requests.png)
