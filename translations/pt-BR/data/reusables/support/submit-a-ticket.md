1. Select the **Account or organization** dropdown menu and click the name of the account your support ticket is regarding. ![Screenshot of the "Account or organization" dropdown menu.](/assets/images/help/support/account-field.png)
1. Selecione o menu suspenso **de** e clique no endereço de e-mail que você deseja que {% data variables.contact.github_support %} entre em contato. ![Screenshot of the "From" dropdown menu.](/assets/images/help/support/from-field.png)
{%- ifversion ghec or ghes %}
1. Select the **Product** dropdown menu and click {% ifversion ghes %}**GitHub Enterprise Server (self-hosted)**{% else %}**GitHub Enterprise Cloud**{% endif %}.
{% ifversion ghec %}![Screenshot of the "Product" dropdown menu.](/assets/images/help/support/product-field-ghec.png){% else %}![Screenshot of the "Product" dropdown menu.](/assets/images/help/support/product-field.png){% endif %}
{%- endif %}
{%- ifversion ghes %}
1. If prompted, select the **Server installation** dropdown menu and click the installation your support ticket is regarding. If the installation is not listed, click **Other**. ![Screenshot of the "Server Installation" dropdown menu](/assets/images/help/support/installation-field.png)
{%- endif %}
{%- ifversion ghes %}
1. Select the **Release series** dropdown menu and click the release {% data variables.product.product_location_enterprise %} is running. ![Screenshot of the "Release series" dropdown menu](/assets/images/help/support/release-field.png)
{%- endif %}
{%- ifversion ghes or ghec %}
1. Select the **Priority** dropdown menu and click the appropriate urgency. For more information, see "[About ticket priority](/support/learning-about-github-support/about-ticket-priority)." ![Screenshot of the "Priority" dropdown menu.](/assets/images/help/support/priority-field.png)
{%- endif %}
{%- ifversion ghes %}
    - Escolha **{% data variables.product.support_ticket_priority_urgent %}** para relatar {% ifversion fpt or ghec %}falhas críticas do sistema{% else %}falhas fatais do sistema, interrupções impactando operações críticas do sistema, incidentes de segurança e licenças expiradas{% endif %}.
    - Escolha **{% data variables.product.support_ticket_priority_high %}** para relatar problemas que afetam as operações de negócios, incluindo {% ifversion fpt or ghec %}removendo dados confidenciais (commits, issues, pull requests, anexos carregados) de suas próprias contas e restaurações da organização{% else %}problemas de desempenho do sistema{% endif %}ou para relatar erros críticos.
    - Escolha **{% data variables.product.support_ticket_priority_normal %}** para {% ifversion fpt or ghec %}solicitar recuperação de conta ou remoção de sinalizador de spam, relatar problemas de login do usuário{% else %}fazer solicitações técnicas, como alterações de configuração e integrações de terceiros{% endif %}e para relatar erros não críticos.
    - Escolha **{% data variables.product.support_ticket_priority_low %}** para fazer perguntas gerais e enviar solicitações para novos recursos, compras, treinamentos ou check-ups do ambiente de segurança de Ti.
{%- endif %}
{%- ifversion ghes or ghec %}
1. Optionally, if your account includes {% data variables.contact.premium_support %} and your ticket is {% ifversion ghes %}urgent or high{% elsif ghec %}high{% endif %} priority, you can request a callback in English. Select **Request a callback from GitHub Support**, select the country code dropdown menu to choose your country, and enter your phone number. ![Screenshot of the "Request callback" checkbox, "Country code" dropdown menu, and "Phone number" text box.](/assets/images/help/support/request-callback.png)
{%- endif %}
1. Em "Subject" (Assunto), insira um título descritivo para o problema que está ocorrendo. ![Screenshot of the "Subject" text box.](/assets/images/help/support/subject-field.png)
1. Em "How can we help" (Como podemos ajudar), insira as informações adicionais que ajudarão a equipe de suporte a resolver o problema. You can use markdown to format your message. ![Screenshot of the "How can we help" text area.](/assets/images/help/support/how-can-we-help-field.png) Helpful information may include:
    - Etapas para reproduzir o problema
    - Quaisquer circunstâncias especiais relacionadas à descoberta do problema (como a primeira ocorrência ou ocorrência após um evento específico, frequência de ocorrência, impacto comercial do problema e urgência sugerida)
    - Redação exata das mensagens de erro
{%- ifversion ghes %}
1. Optionally, attach diagnostics files and other files by dragging and dropping, uploading, or pasting from the clipboard.
{%- endif %}
1. Clique em **Send request** (Enviar solicitação). ![Screenshot of the "Send request" button.](/assets/images/help/support/send-request-button.png)
