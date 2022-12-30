---
title: Configurar notificações
intro: 'Escolha o tipo de atividade no {% data variables.product.prodname_dotcom %} do qual deseja receber notificações e a forma como essas atualizações devem ser entregues.'
redirect_from:
  - /articles/about-web-notifications
  - /format-of-notification-emails
  - /articles/configuring-notification-emails
  - /articles/about-notification-emails
  - /articles/about-email-notifications
  - /articles/accessing-your-notifications
  - /articles/configuring-notification-delivery-methods
  - /articles/managing-notification-delivery-methods
  - /articles/managing-notification-emails-for-organizations
  - /articles/choosing-the-delivery-method-for-your-notifications
  - /articles/choosing-the-types-of-notifications-you-receive
  - /github/managing-subscriptions-and-notifications-on-github/configuring-notifications
  - /github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
ms.openlocfilehash: b7822a7db40455476c5fc5ac6f779e45d7f558a9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060759'
---
## Opções de entrega de notificação

Você pode receber notificações de atividades na {% data variables.product.product_location %} nos locais a seguir.

  - A caixa de entrada de notificações na interface da Web{% ifversion fpt or ghes or ghec %} da {% data variables.product.product_location %}
  - A caixa de entrada de notificações no {% data variables.product.prodname_mobile %}, que é sincronizada com a caixa de entrada na {% data variables.product.product_location %}{% endif %}
  - Um cliente de email que usa um endereço de email verificado, que também pode ser sincronizado com a caixa de entrada de notificações na {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} and {% data variables.product.prodname_mobile %}{% endif %}

{% ifversion fpt or ghes or ghec %} {% data reusables.notifications-v2.notifications-inbox-required-setting %} Para obter mais informações, confira "[Como escolher suas configurações de notificação](#choosing-your-notification-settings)".
{% endif %}

{% data reusables.notifications.shared_state %}

### Benefícios da caixa de entrada de notificações

A caixa de entrada de notificações na {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} e no {% data variables.product.prodname_mobile %}{% endif %} inclui opções de triagem projetadas especificamente para seu fluxo de notificações do {% data variables.product.prodname_dotcom %}, incluindo opções para:
  - Triagem de várias notificações de uma só vez.
  - Marque as notificações concluídas como **Concluídas** e remova-as da caixa de entrada. Para ver todas as notificações marcadas como **Concluído**, use a consulta `is:done`.
  - Salve uma notificação para examiná-la posteriormente. As notificações salvas são sinalizadas na caixa de entrada e mantidas por tempo indefinido. Para exibir todas as notificações salvas, use a consulta `is:saved`.
  - Cancele a assinatura e remova uma notificação da caixa de entrada.
  - Visualize o problema, a solicitação de pull ou a discussão em equipe em que a notificação se origina no {% data variables.product.product_location %} na caixa de entrada de notificações.
  - Veja um dos motivos mais recentes pelos quais você está recebendo uma notificação na caixa de entrada com um rótulo `reasons`.
  - Crie filtros personalizados para se concentrar em notificações diferentes quando quiser.
  - Notificações em grupo em sua caixa de entrada por repositório ou data para obter uma visão geral rápida com menos comutação de contexto

{% ifversion fpt or ghes or ghec %} Além disso, você pode receber notificações e fazer a triagem delas no seu dispositivo móvel com o {% data variables.product.prodname_mobile %}. Para obter mais informações, confira "[Como gerenciar suas configurações de notificação com o GitHub Mobile](#managing-your-notification-settings-with-github-mobile)" ou "[GitHub Mobile](/get-started/using-github/github-mobile)".
{% endif %}

### Benefícios da utilização de um cliente de e-mail para notificações

Um benefício de usar um cliente de e-mail é que todas as suas notificações podem ser mantidas indefinidamente, dependendo da capacidade de armazenamento do seu cliente de e-mail. As notificações da caixa de entrada só são mantidas por cinco meses no {% data variables.product.prodname_dotcom %} a menos que você as tenha marcado como **Salvas**. As notificações **Salvas** são mantidas por tempo indeterminado. Para obter mais informações sobre a política de retenção da sua caixa de entrada, confira "[Sobre as notificações](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notification-retention-policy)".

O envio de notificações para o cliente de e-mail também permite que você personalize sua caixa de entrada de acordo com as configurações do cliente de e-mail que pode incluir etiquetas personalizadas ou codificadas por cores.

As notificações de e-mail também permitem flexibilidade com os tipos de notificações que você recebe e permitem que você escolha diferentes endereços de e-mail para atualizações. Por exemplo, você pode enviar determinadas notificações para um repositório para um endereço de e-mail pessoal verificado. Para obter mais informações sobre as opções de personalização de email, confira "[Como personalizar suas notificações por email](#customizing-your-email-notifications)".

## Sobre notificações de participação e inspeção

Quando você inspeciona um repositório, você assina atualizações de atividade nesse repositório. Da mesma forma, quando você inspeciona as discussões de uma equipe específica, você está inscrito em todas as atualizações de conversa na página daquela equipe. Para obter mais informações, confira "[Sobre as discussões em equipe](/organizations/collaborating-with-your-team/about-team-discussions)".

Para ver os repositórios que você está inspecionando, acesse a [página de inspeção](https://github.com/watching). Para obter mais informações, confira "[Como gerenciar assinaturas e notificações no GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)".

{% ifversion ghae %}
### Configurar notificações
{% endif %} Você pode configurar as notificações de um repositório na página do repositório ou na página de inspeções.

### Sobre as notificações personalizadas
É possível personalizar notificações para um repositório. Por exemplo, você pode optar por receber notificação apenas quando atualizações de um ou mais tipos de eventos ({% data reusables.notifications-v2.custom-notification-types %}) ocorrerem em um repositório, ou ignorar todas as notificações de um repositório. Para obter mais informações, confira "[Como definir as configurações de inspeção de um repositório individual](#configuring-your-watch-settings-for-an-individual-repository)" abaixo.

### Participar de conversas
A qualquer momento que você adiciona um comentário a uma conversa ou quando alguém @mentions seu nome de usuário, você está _participando_ de uma conversa. Por padrão, você é inscrito automaticamente em uma conversa ao participar dela. Você pode cancelar manualmente a inscrição em uma conversa em que participou clicando em **Cancelar inscrição** no problema ou na solicitação de pull ou por meio da opção **Cancelar inscrição** na caixa de entrada de notificações.

Para as conversas que você está inspecionando ou nas quais está participando, escolha se deseja receber notificações por email ou por meio da caixa de entrada de notificações na {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} e no {% data variables.product.prodname_mobile %}{% endif %}.

![Opções de notificações de participação e inspeção](/assets/images/help/notifications-v2/participating-and-watching-options.png)

Por exemplo:
  - Caso não deseje que as notificações sejam enviadas para seu email, desmarque **email** para participar e inspecionar as notificações.
  - Caso deseje receber as notificações por email de quando você participou de uma conversa, selecione **email** abaixo de "Participando".

Se você não habilitar as notificações de inspeção ou de participação para Web{% ifversion fpt or ghes or ghec %} e dispositivo móvel{% endif %}, sua caixa de entrada de notificações não terá nenhuma atualização.

## Personalizando suas notificações por e-mail

Depois de habilitar as notificações por email, a {% data variables.product.product_location %} enviará notificações a você como emails de várias partes que contêm cópias do conteúdo em HTML e texto sem formatação. O conteúdo da notificação por email inclui Markdown, @mentions, emojis, links por hash, entre outros, que aparecem no conteúdo original da {% data variables.product.product_location %}. Se você quiser ver apenas o texto do e-mail, configure o cliente de e-mail para exibir apenas a cópia do texto sem formatação.

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

{% ifversion fpt or ghec %}

Se estiver usando o Gmail, você poderá clicar em um botão junto ao e-mail de notificação para acessar o problema ou a pull request original que gerou a notificação.

![Botões no Gmail](/assets/images/help/notifications/gmail-buttons.png)

{% endif %}

Escolha um endereço de e-mail padrão para enviar atualizações de conversas que você está participando ou inspecionando. Você também pode especificar a atividade da {% data variables.product.product_location %} para a qual deseja receber atualizações usando seu endereço de email padrão. Por exemplo, escolha se você quer atualizações do seu e-mail padrão de:
  - Comentários em problemas ou pull requests.
  - Revisões de solicitação de pull.
  - Pushes de pull request.
  - Suas próprias atualizações, como quando você abre, comenta ou encerra um problema ou uma pull request.

Dependendo da organização proprietária do repositório, você também pode enviar notificações para diferentes endereços de e-mail. Sua organização pode exigir que o endereço de e-mail seja verificado para um domínio específico. Para obter mais informações, confira "[Como escolher o local de envio das notificações por email da sua organização](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-where-your-organizations-email-notifications-are-sent)".

Você também pode enviar notificações de um repositório específico para um endereço de e-mail. Para obter mais informações, confira "[Sobre as notificações por email para pushes ao seu repositório](/github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository)".

{% data reusables.notifications-v2.email-notification-caveats %}

## Filtrar notificações de e-mail

Cada notificação por email que a {% data variables.product.product_location %} envia contém informações de cabeçalho. As informações de cabeçalho de cada email são consistentes, ou seja, é possível usá-las no cliente de email para filtrar ou encaminhar todas as notificações do {% data variables.product.prodname_dotcom %} ou alguns tipos de notificações do {% data variables.product.prodname_dotcom %}.

Se você acredita que está recebendo notificações que não pertencem a você, examine os cabeçalhos `X-GitHub-Recipient` e `X-GitHub-Recipient-Address`. Estes headers mostram quem é o destinatário pretendido. Dependendo de sua configuração de e-mail, você pode receber notificações destinadas a outro usuário.

As notificações por email da {% data variables.product.product_location %} contêm as seguintes informações de cabeçalho:

| parâmetro | Informações |
| --- | --- |
| Endereço `From` | Esse endereço sempre será {% ifversion fpt or ghec %}'`notifications@github.com`'{% else %}'o endereço de email no-reply configurado pelo administrador do site'{% endif %}. |
| Campo do `To` | Esse campo se conecta diretamente à conversa.{% ifversion not ghae %} Se você responder ao email, adicionará um novo comentário à conversa.{% endif %} |
| Endereço `Cc` | O {% data variables.product.product_name %} colocará você em cópia `Cc` se você estiver inscrito em uma conversa. O segundo endereço de email `Cc` corresponde ao motivo da notificação. O sufixo para esses motivos de notificação é {% data variables.notifications.cc_address %}. Os possíveis motivos de notificação são: <ul><li>`assign`: você foi atribuído a um problema ou a uma solicitação de pull.</li><li>`author`: você criou um problema ou uma solicitação de pull.</li><li>`ci_activity`: a execução de um fluxo de trabalho do {% data variables.product.prodname_actions %} que você disparou foi concluída.</li><li>`comment`: você adicionou um comentário a um problema ou a uma solicitação de pull.</li><li>`manual`: houve uma atualização em uma solicitação de pull ou em um problema no qual você se inscreveu manualmente.</li><li>`mention`: você foi mencionado em um problema ou em uma solicitação de pull.</li><li>`push`: alguém fez commit em uma solicitação de pull na qual você se inscreveu.</li><li>`review_requested`: você ou uma equipe da qual você é membro foi solicitado a revisar uma solicitação de pull.</li><li>`security_alert`: o {% data variables.product.prodname_dotcom %} detectou uma vulnerabilidade em um repositório do qual você recebe alertas.</li><li>`state_change`: uma solicitação de pull ou um problema no qual você se inscreveu foi fechado ou aberto.</li><li>`subscribed`: houve uma atualização em um repositório que você está inspecionando.</li><li>`team_mention`: uma equipe a qual você pertence foi mencionada em um problema ou em uma solicitação de pull.</li><li>`your_activity`: você abriu, adicionou um comentário ou fechou um problema ou uma solicitação de pull.</li></ul> |
| Campo do `mailing list` | Esse campo identifica o nome do repositório e seu proprietário. O formato desse endereço é sempre `<repository name>.<repository owner>.{% data variables.command_line.backticks %}`. |
| Campo do `X-GitHub-Severity` | {% data reusables.repositories.security-alerts-x-github-severity %} Os níveis possíveis de gravidade são:<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)". |

## Escolhendo suas configurações de notificação

{% data reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %}
3. Na página de configurações de notificações, escolha como receber notificações quando:
    - Há atualizações em repositórios ou discussões de equipe que você está inspecionando ou em uma conversa na qual você está participando. Para obter mais informações, confira "[Sobre a participação e a inspeção de notificações](#about-participating-and-watching-notifications)".
    - Você obtém acesso a um novo repositório ou se juntou a uma nova equipe. Para obter mais informações, confira "[Inspeções automáticas](#automatic-watching)".
    - Há novos dados {% data variables.product.prodname_dependabot_alerts %} em seu repositório. Para obter mais informações, confira "[Opções de notificação dos {% data variables.product.prodname_dependabot_alerts %}](#dependabot-alerts-notification-options)".  {% ifversion fpt or ghec %}
    - Há atualizações de fluxo de trabalho nos repositórios configurados com o {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Opções de notificação do {% data variables.product.prodname_actions %}](#github-actions-notification-options)".{% endif %}{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5668 %}
    - Há novas chaves de implantação adicionadas em repositórios que pertencem a organizações das quais você é proprietário. Para obter mais informações, confira "[Opções de notificação de alertas da organização](#organization-alerts-notification-options)".{% endif %}

## Inspeção automática

Por padrão, sempre que você obtiver acesso a um novo repositório, você começará a inspecionar aquele repositório automaticamente. Sempre que você entrar em uma nova equipe, será automaticamente inscrito em atualizações e receberá notificações quando essa equipe for @mentioned. Se você não quiser ser automaticamente inscrito, você pode desmarcar as opções de inspeção automática.

  ![Opções de inspeção automática](/assets/images/help/notifications-v2/automatic-watching-options.png)

Se "Inspecionar repositórios automaticamente" estiver desativado, então você não inspecionará automaticamente seus próprios repositórios. É necessário navegar na página do seu repositório e escolher a opção de inspeção.

## Configurando as configurações de inspeção para um repositório individual

É possível escolher se deseja inspecionar ou não inspecionar um repositório individual. Você também pode optar por ser notificado apenas de certos tipos de eventos como {% data reusables.notifications-v2.custom-notification-types %} (se habilitado para o repositório), ou ignorar completamente um repositório individual.

{% data reusables.repositories.navigate-to-repo %}
2. No canto superior direito, selecione o menu suspenso "Inspecionar" para clicar em uma opção de inspecionar.
{% ifversion fpt or ghes or ghae-issue-4910 or ghec %} ![Opções de inspeção em um menu suspenso de um repositório](/assets/images/help/notifications-v2/watch-repository-options-custom.png)

   A opção **Personalizado** permite que você personalize ainda mais as notificações para receber notificações apenas quando eventos específicos ocorrerem no repositório, além de participar e usar @mentions.
{% else %} ![Opções de inspeção em um menu suspenso de um repositório](/assets/images/help/notifications-v2/watch-repository-options.png){% endif %} {% ifversion fpt or ghes or ghae-issue-4910 or ghec %} ![Opções de inspeção personalizadas em um menu suspenso de um repositório](/assets/images/help/notifications-v2/watch-repository-options-custom2-dotcom.png) Se você selecionar "Problemas", receberá notificações e será inscrito nas atualizações sobre cada problema (incluindo aqueles que existiam antes de você selecionar essa opção) do repositório. Se você for @mentioned em uma solicitação de pull neste repositório, receberá notificações sobre isso também e será inscrito em atualizações dessa solicitação de pull específica, além de receber notificações sobre problemas.
   {% endif %}

## Escolhendo para onde as notificações de e-mail da sua organização são enviadas

Se pertencer a uma organização, você poderá escolher a conta de e-mail em que deseja receber as notificações da atividade da organização. Por exemplo, se pertencer a uma organização para fins de trabalho, talvez você queira receber as notificações no seu endereço de e-mail profissional, e não no endereço pessoal.    

{% data reusables.notifications-v2.email-notification-caveats %}

{% data reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %}
3. Em "Default notification email" (E-mail padrão de notificação), selecione o endereço de e-mail em que você quer receber as notificações.   
![Menu suspenso de endereço de e-mail padrão de notificação](/assets/images/help/notifications/notifications_primary_email_for_orgs.png) 
4. Clique em **Salvar**.  

### Personalizar rotas de e-mail por organização   

Se você for integrante de mais de uma organização, você poderá configurar cada uma para enviar notificações para qualquer um dos{% ifversion fpt or ghec %} seus endereços de e-mail verificados{% else %} os endereços de e-mail para a sua conta{% endif %}. {% ifversion fpt or ghec %} Para obter mais informações, confira "[Como confirmar seu endereço de email](/articles/verifying-your-email-address)".{% endif %} 

{% data reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %}
3. Na lista em "Custom routing" (Encaminhamento personalizado), localize o nome da sua organização.   
![Lista de organizações e endereços de e-mail](/assets/images/help/notifications/notifications_org_emails.png)    
4. Clique em **Editar** ao lado do endereço de email que deseja alterar.
![Como editar os endereços de email de uma organização](/assets/images/help/notifications/notifications_edit_org_emails.png)   
5. Selecione um dos seus endereços de email verificados e clique em **Salvar**.    
![Como alternar seu endereço de email por organização](/assets/images/help/notifications/notifications_switching_org_email.gif)

## Opções de notificação de {% data variables.product.prodname_dependabot_alerts %} 

{% data reusables.notifications.vulnerable-dependency-notification-enable %} {% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} {% data reusables.notifications.vulnerable-dependency-notification-options %}

Para obter mais informações sobre os métodos de entrega de notificação disponíveis para você e recomendações de como otimizar as notificações de {% data variables.product.prodname_dependabot_alerts %}, confira "[Como configurar notificações para {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)".

{% ifversion fpt or ghes or ghec %}
## Opções de notificação {% data variables.product.prodname_actions %}

Escolha como você deseja receber atualizações de execução de fluxo de trabalho para repositórios que você está inspecionando que estão configurados com o {% data variables.product.prodname_actions %}. Você também pode optar por receber apenas notificações de execução de fluxo de trabalho falha.

  ![Opções de alertas para {% data variables.product.prodname_actions %}](/assets/images/help/notifications-v2/github-actions-notification-options.png)

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5668 %}
## Opções de notificação de alertas da organização 

Se você for proprietário de uma organização, você receberá notificações de e-mail por padrão quando os integrantes da organização adicionarem novas chaves de implantação nos repositórios dentro da organização. Você pode cancelar a assinatura dessas notificações. Na página de configurações de notificação, em "Alertas da organização", desmarque **Email**. 

{% endif %}

{% ifversion fpt or ghes or ghec %}
## Gerenciar as suas configurações de notificação com {% data variables.product.prodname_mobile %}

Quando você instalar {% data variables.product.prodname_mobile %}, você será automaticamente incluído em notificações da web. No aplicativo, você pode habilitar notificações push para os seguintes eventos.
- Menções diretas
- Atribuições para problemas ou pull requests
- Solicitações para revisar um pull request
- Solicitações para aprovação de implantação

Você também pode agendar quando {% data variables.product.prodname_mobile %} enviará notificações por push para o seu dispositivo móvel.

{% data reusables.mobile.push-notifications-on-ghes %}

### Gerenciar as suas configurações de notificação com {% data variables.product.prodname_ios %}

1. No menu inferior, toque em **Perfil**.
2. Para ver as configurações, toque em {% octicon "gear" aria-label="The Gear icon" %}.
3. Para atualizar as configurações de notificação, toque em **Notificações** e use as alternâncias para habilitar ou desabilitar seus tipos preferidos de notificações por push.
4. Opcionalmente, para agendar quando o {% data variables.product.prodname_mobile %} enviará notificações por push para seu dispositivo móvel, toque em **Horário Comercial**, use a alternância **Horário comercial personalizado** e escolha quando deseja receber as notificações por push.

### Gerenciar as suas configurações de notificação com {% data variables.product.prodname_android %}

1. No menu inferior, toque em **Perfil**.
2. Para ver as configurações, toque em {% octicon "gear" aria-label="The Gear icon" %}.
3. Para atualizar as configurações de notificação, toque em **Configurar Notificações** e use as alternâncias para habilitar ou desabilitar seus tipos preferidos de notificações por push.
4. Opcionalmente, para agendar quando o {% data variables.product.prodname_mobile %} enviará notificações por push para seu dispositivo móvel, toque em **Horário Comercial**, use a alternância **Horário comercial personalizado** e escolha quando deseja receber as notificações por push.

## Configurar as configurações de inspeção para um repositório individual com {% data variables.product.prodname_mobile %} 

É possível escolher se deseja inspecionar ou não inspecionar um repositório individual. Você também pode optar por receber notificações apenas sobre {% ifversion fpt or ghec %}alguns tipos de eventos como problemas, solicitações de pull, discussões (se habilitado para o repositório) e {% endif %}novas versões ou ignorar por completo um repositório individual.

1. No {% data variables.product.prodname_mobile %}, acesse a página principal do repositório.
2. Toque em **Inspecionar**.
   ![O botão Inspecionar do {% data variables.product.prodname_mobile %}](/assets/images/help/notifications-v2/mobile-watch-button.png)
3. Para escolher para quais atividades você recebe notificações, toque nas suas configurações de inspeção preferenciais.
   ![Menu suspenso de configurações de inspeção do {% data variables.product.prodname_mobile %}](/assets/images/help/notifications-v2/mobile-watch-settings.png)

{% endif %}
