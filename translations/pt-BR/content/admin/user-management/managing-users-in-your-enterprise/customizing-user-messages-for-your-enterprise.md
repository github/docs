---
title: Personalizar mensagens de usuário para sua empresa
shortTitle: Customizing user messages
redirect_from:
  - /enterprise/admin/user-management/creating-a-custom-sign-in-message
  - /enterprise/admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-for-your-enterprise
intro: 'Você pode criar mensagens personalizadas que os usuários verão em {% data variables.location.product_location %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Maintenance
ms.openlocfilehash: b767a651f19b6200abfc67696d98147ebf65bd9a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106426'
---
## Sobre mensagens de usuário

Existem vários tipos de mensagens de usuário.
- Mensagens exibidas na página {% ifversion ghes %}de entrada ou {% endif %}de saída{% ifversion ghes or ghae %}
- Mensagens obrigatórias, que aparecem uma vez em uma janela pop-up que deve ser ignorada{% endif %}{% ifversion ghes or ghae %}
- Banners de anúncios, que aparecem na parte superior de cada página{% endif %}

{% ifversion ghes %} {% note %}

**Observação:** se você estiver usando o SAML para autenticação, a página de entrada será apresentada pelo provedor de identidade e não poderá ser personalizada por meio do {% data variables.product.prodname_ghe_server %}.

{% endnote %}

Você pode usar markdown para formatar sua mensagem. Para obter mais informações, confira "[Sobre a gravação e a formatação no {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github/)".

## Criar mensagem personalizada de login

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. {% ifversion ghes %}À direita de{% else %}Em{% endif %} "Página de entrada", clique em **Adicionar mensagem** ou **Editar mensagem**.
![{% ifversion ghes %}Botão Adicionar{% else %}Editar{% endif %} mensagem](/assets/images/enterprise/site-admin-settings/edit-message.png)
6. Em **Mensagem de entrada**, digite a mensagem que deseja mostrar aos usuários.
![Mensagem de entrada](/assets/images/enterprise/site-admin-settings/sign-in-message.png){% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %} {% data reusables.enterprise_site_admin_settings.click-preview %} ![Botão Visualizar](/assets/images/enterprise/site-admin-settings/sign-in-message-preview-button.png)
8. Revise a mensagem renderizada.
![Mensagem de entrada renderizada](/assets/images/enterprise/site-admin-settings/sign-in-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %}{% endif %}

## Criar mensagem personalizada de logout

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. {% ifversion ghes or ghae %} À direita de{% else %}Em{% endif %} "Página de Saída", clique em **Adicionar mensagem** ou **Editar mensagem**.
![Botão Adicionar mensagem](/assets/images/enterprise/site-admin-settings/sign-out-add-message-button.png)
6. Em **Mensagem de saída**, digite a mensagem que você deseja mostrar aos usuários.
![Assinar a mensagem two_factor_auth_header](/assets/images/enterprise/site-admin-settings/sign-out-message.png){% ifversion ghes or ghae %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %} {% data reusables.enterprise_site_admin_settings.click-preview %} ![Botão Visualizar](/assets/images/enterprise/site-admin-settings/sign-out-message-preview-button.png)
8. Revise a mensagem renderizada.
![Mensagem de saída renderizada](/assets/images/enterprise/site-admin-settings/sign-out-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %}

{% ifversion ghes or ghae %}
## Criar uma mensagem obrigatória

Você pode criar uma mensagem obrigatória que {% data variables.product.product_name %} mostrará a todos os usuários na primeira vez que efetuarem o login depois de salvar a mensagem. A mensagem aparece em uma janela pop-up que o usuário precisa ignorar para que possa usar {% data variables.location.product_location %}.

As mensagens obrigatórias têm uma série de usos.

- Fornecer informações de integração para novos funcionários
- Contar para os usuários como obter ajuda com {% data variables.location.product_location %}
- Garantir que todos os usuários leiam os termos de serviço para usar {% data variables.location.product_location %}

Se você incluir caixas de seleção de Markdown na mensagem, todas as caixas de seleção deverão ser selecionadas antes de o usuário poder ignorar a mensagem. Por exemplo, se você incluir seus termos de serviço na mensagem obrigatória, você poderá exigir que cada usuário marque uma caixa de seleção para confirmar que o usuário leu os termos.

Cada vez que um usuário vê uma mensagem obrigatória, um evento de log de auditoria é criado. O evento inclui a versão da mensagem que o usuário visualizou. Para obter mais informações, confira "[Eventos de log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)".

{% ifversion display-mandatory-message-again %} {% else %} {% note %}

**Observação:** se você alterar a mensagem obrigatória para {% data variables.location.product_location %}, os usuários que já tinham reconhecido a mensagem não verão a nova mensagem. 

{% endnote %} {% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
1. À direita de "Mensagem obrigatória", clique em **Adicionar mensagem**.
  ![Botão Adicionar mensagem obrigatória](/assets/images/enterprise/site-admin-settings/add-mandatory-message-button.png)
1. Em "Mensagem obrigatória", na caixa de texto, digite sua mensagem.
  ![Captura de tela da caixa de texto de mensagem obrigatória](/assets/images/enterprise/site-admin-settings/mandatory-message-text-box.png) {%- ifversion display-mandatory-message-again %} 
1. Opcionalmente, selecione **Mostrar mensagem atualizada a todos os usuários, mesmo que eles tenham ignorado a anterior**.
![Captura de tela da caixa de seleção que, quando selecionada, envia mensagens obrigatórias por push a todos os usuários](/assets/images/enterprise/site-admin-settings/push-mandatory-message-checkbox.png) {% endif %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}

{% endif %}

{% ifversion ghes or ghae %}
## Criar um banner de anúncio global

Você pode definir um banner de anúncio global para ser exibido para todos os usuários na parte superior de cada página.

{% ifversion ghae or ghes %} Você também pode definir uma faixa de comunicado{% ifversion ghes %} no shell administrativo usando um utilitário de linha de comando ou{% endif %} usando a API. Para obter mais informações, confira {% ifversion ghes %}"[Utilitários de linha de comando](/enterprise/admin/configuration/command-line-utilities#ghe-announce)" e {% endif %}"[Administração do {% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#announcements)".
{% else %}

Você também pode definir um banner de anúncio no shell administrativo usando um utilitário de linha de comando. Para obter mais informações, confira "[Utilitários de linha de comando](/enterprise/admin/configuration/command-line-utilities#ghe-announce)".

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
1. {% ifversion ghes or ghae %} À direita de{% else %}Em {% endif %} "Comunicado", clique em **Adicionar comunicado**.
  ![Botão Adicionar comunicado](/assets/images/enterprise/site-admin-settings/add-announcement-button.png)
1. Em "Anúncio", no campo de texto, digite o anúncio que deseja exibir em um banner.
  ![Campo de texto usado para inserir o comunicado](/assets/images/enterprise/site-admin-settings/announcement-text-field.png)
1. Opcionalmente, em "Expira em", selecione o menu suspenso do calendário e clique em uma data de validade.
  ![Menu suspenso de calendário para escolher a data de validade](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png){% ifversion ghe-announce-dismiss %}
1. Opcionalmente, para permitir que cada usuário ignore o comunicado, selecione **Usuário que pode ignorar**.

   ![Captura de tela da caixa de seleção "Usuário que pode ignorar"](/assets/images/enterprise/site-admin-settings/user-dismissible-checkbox.png){% endif %} {% data reusables.enterprise_site_admin_settings.message-preview-save %} {% endif %}
