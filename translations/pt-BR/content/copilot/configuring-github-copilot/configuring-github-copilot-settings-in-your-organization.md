---
title: Como definir as configurações do GitHub Copilot em sua organização
intro: 'Você pode configurar o {% data variables.product.prodname_copilot %} em sua organização, incluindo a concessão e a revogação de acesso a indivíduos e equipes e a determinação do bloqueio de sugestões que correspondam ao código público.'
product: '{% data reusables.gated-features.copilot %}'
miniTocMaxHeadingLevel: 3
permissions: 'Organization owners and members with admin permissions can configure {% data variables.product.prodname_copilot %} in their organization.'
versions:
  ghec: '*'
topics:
  - Copilot
shortTitle: Organization settings
ms.openlocfilehash: 345d0a48aa3f48e453fd8455027f683ee78a7640
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193186'
---
## Sobre as configurações do {% data variables.product.prodname_copilot %} em sua organização

{% data reusables.copilot.about-copilot %}

Para configurar o uso do {% data variables.product.prodname_copilot %} em sua organização, a organização deve pertencer a uma conta do {% data variables.product.prodname_ghe_cloud %} e um administrador da empresa deve primeiro habilitar o {% data variables.product.prodname_copilot_business_short %} para a organização. Os administradores da organização poderão, então, gerenciar a atribuição de estações dentro da organização. 

Dependendo das configurações de política definidas no nível de empresa, um administrador da organização também pode determinar se deve permitir ou bloquear sugestões sobre o {% data variables.product.prodname_copilot %} que correspondam ao código público. Para obter mais informações, confira "[Como impor políticas do {% data variables.product.prodname_copilot %} em sua empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise)".

## Como configurar o acesso ao {% data variables.product.prodname_copilot %} em sua organização

Depois que um administrador do {% data variables.product.prodname_ghe_cloud %} habilitar uma assinatura do {% data variables.product.prodname_copilot_business_short %} em sua organização, você poderá atribuir estações do {% data variables.product.prodname_copilot %} a indivíduos e equipes em sua organização.

### Como habilitar o acesso ao {% data variables.product.prodname_copilot %} para todos os usuários atuais e futuros em sua organização

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Na seção "Planejamento de código e automação" da barra lateral, clique em **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}** e, em seguida, clique em **Acesso**.
1. Em "Permissões de usuário", para habilitar o {% data variables.product.prodname_copilot %} para todos os usuários atuais e futuros em sua organização, selecione **Permitir para todos os membros**.

   ![Captura de tela das permissões do usuário do {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/allow-all-members.png)

1. No diálogo "Confirmar atribuição de estação", para confirmar que você deseja habilitar o {% data variables.product.prodname_copilot %} para todos os usuários atuais e futuros em sua organização, clique em **Confirmar**.

   ![Captura de tela do diálogo Confirmar atribuição de estação](/assets/images/help/copilot/confirm-seat-assignment.png)

1. Para salvar suas alterações, clique em **Salvar**.

   ![Captura de tela do botão de salvamento das permissões do usuário do {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/user-permissions-save.png)

### Como habilitar o acesso ao {% data variables.product.prodname_copilot %} para usuários específicos em sua organização

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Na seção "Planejamento de código e automação" da barra lateral, clique em **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}** e, em seguida, clique em **Acesso**.
1. Em "Permissões de usuário", para habilitar o {% data variables.product.prodname_copilot %} para equipes ou usuários selecionados em sua organização, selecione **Equipes/usuários selecionados** e clique em **Salvar**.

   ![Captura de tela das permissões de usuários/equipes selecionadas do {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/selected-users-teams.png)

1. Se você estiver atualizando o acesso do usuário na configuração **Permitir para todos os membros**, no diálogo "Confirmar atribuição de estação", selecione como você deseja começar a atribuir acesso.
    - Para cancelar a atribuição de todos os membros e, em seguida, selecionar aqueles que devem ter acesso, selecione **Iniciar do zero**.
    - Para manter todos os membros que atualmente têm acesso e selecionar aqueles que não devem ter acesso, selecione **Manter todos os usuários**.

      ![Captura de tela do diálogo Confirmar atribuição de estação](/assets/images/help/copilot/confirm-seat-assignment-selected.png)

1. Se você selecionou **Iniciar do zero**, clique em **Adicionar pessoas** ou **Adicionar equipes** para adicionar usuários individuais ou equipes inteiras.

   ![Captura de tela do botão Adicionar pessoas ou adicionar equipes](/assets/images/help/copilot/add-people-add-teams.png)

1. Se você selecionou **Adicionar pessoas**, no diálogo "Habilitar o acesso do GitHub Copilot para membros selecionados da ORGANIZAÇÃO", você pode pesquisar membros individuais ou adicionar membros em massa carregando um arquivo CSV.
 
   ![Captura de tela do diálogo Habilitar o acesso para membros selecionados](/assets/images/help/copilot/enable-access-for-selected-members.png)

    - Para pesquisar membros, digite o nome de usuário, o nome completo ou o endereço de email do membro na barra de pesquisa.
    - Para adicionar membros em massa, clique em **Carregar CSV** e carregue um arquivo CSV, incluindo o nome de usuário ou o endereço de email para cada membro que você deseja adicionar, separado por uma vírgula.

        {% warning %}

      **Aviso:** quando você carrega um arquivo CSV, o {% data variables.product.prodname_copilot %} pesquisa todos os usuários no {% data variables.product.prodname_dotcom_the_website %} em busca de correspondências. Se o CSV incluir usuários que não são membros da sua organização, eles serão convidados a ingressar em sua organização quando você clicar em **Adicionar XX membros**.

      {% endwarning %}

    - Examine a lista de usuários gerados do arquivo CSV. Para confirmar que você deseja conceder acesso aos usuários listados, clique em **Adicionar XX membros à lista de acesso** ou, para rejeitar a lista, clique em **Cancelar**.

     ![Captura de tela dos resultados da lista csv](/assets/images/help/copilot/csv-results.png)

1. Se você selecionou **Adicionar equipes**, no diálogo "Habilitar o acesso do GitHub Copilot para equipes selecionadas da ORGANIZAÇÃO", comece a digitar o nome da equipe na barra de pesquisa, selecione a equipe que deseja adicionar e clique em **Selecionar uma equipe acima**.

   ![Captura de tela do diálogo Habilitar o acesso para equipes selecionadas](/assets/images/help/copilot/add-teams.png)

1. Se você selecionou **Manter todos os usuários**, examine a lista completa de membros da sua organização e selecione os indivíduos cujo acesso ao {% data variables.product.prodname_copilot %} você deseja revogar.

   ![Captura de tela da lista Manter todos os usuários](/assets/images/help/copilot/access-removal-list.png)

1. Clique no menu suspenso **XX membros selecionados** e clique em **Remover**.

   ![Captura de tela do botão Remover acesso](/assets/images/help/copilot/remove-access.png)

### Como desabilitar o acesso ao {% data variables.product.prodname_copilot %} para toda a sua organização

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Na seção "Planejamento de código e automação" da barra lateral, clique em **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}** e, em seguida, clique em **Acesso**.
1. Em "Permissões de usuário", para desabilitar o {% data variables.product.prodname_copilot %} para todos os usuários em sua organização, selecione **Desabilitado**.

   ![Captura de tela das permissões de usuário do {% data variables.product.prodname_copilot %} desabilitadas](/assets/images/help/copilot/disable-access.png)

1. Para salvar suas alterações, clique em **Salvar**.
   
   ![Captura de tela do botão de salvamento das permissões do usuário do {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/save-disabled.png)

### Como desabilitar o acesso ao {% data variables.product.prodname_copilot %} para usuários específicos em sua organização

A remoção de um usuário da organização ou organizações que atribuíram a ele uma estação do {% data variables.product.prodname_copilot %} cancelará automaticamente a atribuição da estação dada a ele. Como alternativa, você pode cancelar a atribuição da estação do {% data variables.product.prodname_copilot %} a um membro, preservando sua associação. Essas alterações entrarão em vigor a partir do início do próximo ciclo de cobrança.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Na seção "Planejamento de código e automação" da barra lateral, clique em **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}** e, em seguida, clique em **Acesso**.
1. Em "Permissões de usuário", selecione **Equipes/usuários selecionados** e clique em **Salvar**. 

   ![Captura de tela das permissões de usuários/equipes selecionadas do {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/selected-users-teams.png)

    - No diálogo pop-up "Confirmar atribuição de estação", selecione **Manter todos os usuários**.

      ![Captura de tela do diálogo Confirmar atribuição de estação](/assets/images/help/copilot/confirm-seat-assignment-selected.png)
  
1. Em "Gerenciar acesso," na barra de pesquisa, digite o nome de usuário, nome completo ou endereço de email do membro.

   ![Captura de tela da barra de pesquisa](/assets/images/help/copilot/manage-access-search.png)

1. Para remover o membro da lista de usuários que têm acesso ao {% data variables.product.prodname_copilot %}, clique em **Remover**.

   ![Captura de tela do botão Remover acesso](/assets/images/help/copilot/remove-access-button.png)

## Como configurar políticas de correspondência de sugestões para o {% data variables.product.prodname_copilot %} em sua organização

O {% data variables.product.prodname_copilot %} inclui um filtro que detecta sugestões de código correspondentes ao código público no {% data variables.product.prodname_dotcom %}. Quando o filtro está habilitado, o {% data variables.product.prodname_copilot %} verifica sugestões de código com o código ao redor de cerca de 150 caracteres em relação ao código público no {% data variables.product.prodname_dotcom %}. Se houver uma correspondência exata ou próxima, a sugestão não será mostrada a você.

Se o administrador da sua empresa tiver selecionado **Nenhuma política (permitir que cada organização decida)** para correspondência de sugestões no nível da empresa, você poderá definir uma política de correspondência de sugestões para sua organização. Se um membro da organização receber uma estação de várias organizações com diferentes políticas de correspondência de sugestões na mesma empresa, {% data variables.product.prodname_copilot %} usará a política mais restritiva.


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Na seção "Planejamento de código e automação" da barra lateral, clique em **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}** e, em seguida, clique em **Políticas**.
1. Na lista suspensa "Sugestões correspondentes ao código público", selecione **Permitir** ou **Bloquear** para permitir ou bloquear sugestões correspondentes ao código público.

   ![Captura de tela do menu suspenso de sugestões correspondentes ao código público](/assets/images/help/copilot/duplication-detection-org-policy.png)

## Leitura adicional

- "[Política de privacidade do {% data variables.product.prodname_copilot_for_business %}](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)"
