---
title: Como impor políticas do GitHub Copilot em sua empresa
intro: 'Você pode impor políticas do {% data variables.product.prodname_copilot_for_business %} dentro das organizações de sua empresa ou permitir que as políticas sejam definidas em cada organização.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_copilot_for_business %} in an enterprise.'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  ghec: '*'
type: how_to
topics:
  - Copilot
  - Enterprise
  - Organizations
  - Policies
shortTitle: GitHub Copilot policies
ms.openlocfilehash: f87fa318a6390c9e254c3c115638325b8bfc474a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193154'
---
## Sobre as políticas do {% data variables.product.prodname_copilot %} em sua empresa

{% data reusables.copilot.about-copilot %}

Você pode impor políticas do {% data variables.product.prodname_copilot_for_business %} dentro das organizações de sua empresa ou permitir que as políticas sejam definidas em cada organização. 

Se você configurar uma assinatura para {% data variables.product.prodname_copilot_for_business %}, poderá conceder e revogar o acesso ao {% data variables.product.prodname_copilot %} para organizações em sua empresa. Depois de conceder a uma organização acesso ao {% data variables.product.prodname_copilot %}, os administradores dessa organização poderão conceder acesso a indivíduos e equipes. Para obter mais informações, confira "[Como definir as configurações do {% data variables.product.prodname_copilot %} em sua organização](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)".

As assinaturas do {% data variables.product.prodname_copilot_for_business %} são cobradas mensalmente, com base no número de estações do {% data variables.product.prodname_copilot %} atribuídas aos usuários em sua empresa. Para obter mais informações, confira "Preços do [{% data variables.product.prodname_copilot %} para {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#github-copilot-pricing-for-github-enterprise-cloud)".

O {% data variables.product.prodname_copilot %} inclui um filtro que detecta sugestões de código correspondentes ao código público no {% data variables.product.prodname_dotcom %}. O {% data variables.product.prodname_copilot_for_business %} permite escolher se deseja habilitar ou desabilitar o filtro no nível corporativo ou permitir que os administradores da organização decidam no nível da organização. Quando o filtro está habilitado, o {% data variables.product.prodname_copilot %} verifica sugestões de código com o código ao redor de cerca de 150 caracteres em relação ao código público no {% data variables.product.prodname_dotcom %}. Se houver correspondência ou quase correspondência, a sugestão não será exibida.

## Como impor uma política para gerenciar o uso do {% data variables.product.prodname_copilot_for_business %} em sua empresa 

{% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.copilot-tab %}
1. Em "Gerenciar o acesso da organização ao {% data variables.product.prodname_copilot %}," configure o acesso para sua assinatura do {% data variables.product.prodname_copilot %}. 
    - Para desabilitar o {% data variables.product.prodname_copilot %} para todas as organizações em sua empresa, selecione **Desabilitado**.
    - Para habilitar o {% data variables.product.prodname_copilot %} para todas as organizações em sua empresa, atuais e futuras, selecione **Permitir para todas as organizações**.
    - Para habilitar o {% data variables.product.prodname_copilot %} para organizações específicas, selecione **Permitir para organizações específicas**.
    
    ![Captura de tela das configurações de acesso da organização do {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/manage-org-access-enterprise.png)
    
1. Se você selecionou **Permitir para organizações específicas**, selecione as organizações para as quais deseja ativar o {% data variables.product.prodname_copilot %}. Como alternativa, você pode selecionar as organizações para as quais deseja desabilitar o acesso ao {% data variables.product.prodname_copilot %}
    - Clique em **Definir permissões da organização** e selecione **Habilitar** ou **Desabilitar** para conceder ou negar acesso ao {% data variables.product.prodname_copilot %} para as organizações especificadas.

    ![Captura de tela das configurações de permissões habilitadas ou desabilitadas da organização do {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/set-org-permissions-enterprise.png)
   
1. Clique em **Salvar alterações**.
  
   ![Captura de tela das permissões de salvamento da organização do {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/save-org-settings-enterprise.png)

## Como impor uma política para gerenciar o uso de sugestões de {% data variables.product.prodname_copilot %} que correspondem ao código público em sua empresa

{% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.copilot-tab %}
1. Em "Sugestões correspondentes ao código público", clique no menu suspenso e selecione a política que você deseja impor.
    - Para permitir sugestões sobre o {% data variables.product.prodname_copilot %} correspondentes ao código público, selecione **Permitido**.
    - Para bloquear sugestões sobre o {% data variables.product.prodname_copilot %} correspondentes ao código público, selecione **Bloqueado**.
    - Para permitir que cada uma de suas organizações defina sua própria política sobre o uso de sugestões do {% data variables.product.prodname_copilot %} correspondentes ao código público, selecione **Nenhuma política (permitir que cada organização decida)** .
    
    ![Captura de tela da configurações de sugestões sobre o {% data variables.product.prodname_copilot %} correspondentes ao código público](/assets/images/help/copilot/duplication-detection-enterprise-dropdown.png)

## Leitura adicional

- "[Política de privacidade do {% data variables.product.prodname_copilot_for_business %}](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)"
