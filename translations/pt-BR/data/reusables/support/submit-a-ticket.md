---
ms.openlocfilehash: b7f16729209b711d9ea95d059f5868ae867fa040
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147419878"
---
1. Selecione o menu suspenso **Conta ou organização** e clique no nome da conta à qual seu tíquete de suporte está relacionado.
![Captura de tela do menu suspenso "Conta ou organização".](/assets/images/help/support/account-field.png)
1. Selecione o menu suspenso **De** e clique no endereço de email com o qual deseja que o {% data variables.contact.github_support %} entre em contato.
![Captura de tela do menu suspenso "De".](/assets/images/help/support/from-field.png)
{%- ifversion ghec or ghes %}
1. Selecione o menu suspenso **Produto** e clique em {% ifversion ghes %}**GitHub Enterprise Server (auto-hospedado)** {% else %}**GitHub Enterprise Cloud**{% endif %}.
{% ifversion ghec %}![Captura de tela do menu suspenso "Produto".](/assets/images/help/support/product-field-ghec.png){% else %}![Captura de tela do menu suspenso "Produto".](/assets/images/help/support/product-field.png){% endif %} {%- endif %} {%- ifversion ghes %}
1. Se solicitado, selecione o menu suspenso **Instalação do servidor** e clique na instalação à qual seu tíquete de suporte está relacionada. Se a instalação não estiver listada, clique em **Outros**.
![Captura de tela do menu suspenso "Instalação do Servidor"](/assets/images/help/support/installation-field.png) {%- endif %} {%- ifversion ghes %}
1. Selecione o menu suspenso **Série da versão** e clique na versão executada pelo {% data variables.product.product_location_enterprise %}.
![Captura de tela do menu suspenso "Série da versão"](/assets/images/help/support/release-field.png) {%- endif %} {%- ifversion ghes or ghec %}
1. Selecione o menu suspenso **Prioridade** clique na urgência apropriada. Para obter mais informações, confira "[Sobre a prioridade de tíquetes](/support/learning-about-github-support/about-ticket-priority)".
  ![Captura de tela do menu suspenso "Prioridade".](/assets/images/help/support/priority-field.png)
{%- endif %} {%- ifversion ghes %}
    - Escolha **{% data variables.product.support_ticket_priority_urgent %}** para relatar {% ifversion fpt or ghec %}falhas críticas do sistema{% else %}falhas fatais do sistema, interrupções que afetam operações críticas do sistema, incidentes de segurança e licenças vencidas{% endif %}.
    - Escolha **{% data variables.product.support_ticket_priority_high %}** para relatar problemas que afetam operações de negócios, incluindo {% ifversion fpt or ghec %}remoção de dados confidenciais (commits, problemas, solicitações de pull, anexos carregados) das suas contas e restaurações da organização{% else %}problemas de desempenho do sistema{% endif %} ou para relatar bugs críticos.
    - Escolha **{% data variables.product.support_ticket_priority_normal %}** para {% ifversion fpt or ghec %}solicitar a recuperação de conta ou a remoção de sinalizador de spam, relatar problemas de logon do usuário{% else %}fazer solicitações técnicas, como alterações de configuração e integrações de terceiros{% endif %} e para relatar bugs não críticos.
    - Escolha **{% data variables.product.support_ticket_priority_low %}** para fazer perguntas gerais e enviar solicitações de novos recursos, compras, treinamento ou verificações de integridade.
{%- endif %} {%- ifversion ghes or ghec %}
1. Opcionalmente, se a sua conta incluir o {% data variables.contact.premium_support %} e seu tíquete for {% ifversion ghes %}urgente ou de alta{% elsif ghec %}de alta{% endif %} prioridade, você poderá solicitar um retorno de chamada em inglês. Selecione **Solicitar um retorno de chamada do Suporte do GitHub**, escolha o menu suspenso Código do país para escolher seu país e insira seu número de telefone.
![Captura de tela da caixa de seleção "Solicitar retorno de chamada", do menu suspenso "Código do país" e da caixa de texto "Número de telefone".](/assets/images/help/support/request-callback.png)
{%- endif %}
1. Em "Subject" (Assunto), insira um título descritivo para o problema que está ocorrendo.
![Captura de tela da caixa de texto "Assunto".](/assets/images/help/support/subject-field.png)
1. Em "How can we help" (Como podemos ajudar), insira as informações adicionais que ajudarão a equipe de suporte a resolver o problema. Use o Markdown para formatar sua mensagem.
  ![Captura de tela da área de texto "Como podemos ajudar".](/assets/images/help/support/how-can-we-help-field.png)
   Informações úteis podem incluir:
    - Etapas para reproduzir o problema
    - Quaisquer circunstâncias especiais em torno da descoberta do problema (por exemplo, a primeira ocorrência ou ocorrência após um evento específico, a frequência de ocorrência, o impacto nos negócios do problema e a urgência sugerida)
    - Redação exata de mensagens de erro {% indented_data_reference reusables.repositories.anyone-can-view-anonymized-url spaces=3 %}

{%- ifversion ghes %}
1. Opcionalmente, anexe arquivos de diagnóstico e outros arquivos arrastando e soltando, carregando ou colando o conteúdo da área de transferência.
{%- endif %}
1. Clique em **Enviar solicitação**.
![Captura de tela do botão "Enviar solicitação".](/assets/images/help/support/send-request-button.png)
