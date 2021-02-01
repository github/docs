---
title: Configurar notificações
intro: 'Escolha o tipo de atividade no {% data variables.product.product_name %} do qual você deseja receber notificações e a forma como deseja que essas atualizações sejam entregues.'
redirect_from:
  - /articles/about-web-notifications
  - /format-of-notification-emails/
  - /articles/configuring-notification-emails/
  - /articles/about-notification-emails/
  - /articles/about-email-notifications
  - /articles/accessing-your-notifications
  - /articles/configuring-notification-delivery-methods/
  - /articles/managing-notification-delivery-methods/
  - /articles/managing-notification-emails-for-organizations/
  - /articles/choosing-the-delivery-method-for-your-notifications
  - /articles/choosing-the-types-of-notifications-you-receive/
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
---

### Opções de entrega de notificação

Você pode receber notificações de atividades em {% data variables.product.product_name %} nos locais a seguir.

  - Caixa de notificações na interface web de {% data variables.product.product_name %} {% if currentVersion == "free-pro-team@latest" %}
  - A caixa de entrada no {% data variables.product.prodname_mobile %}, que sincroniza com a caixa de entrada em {% data variables.product.product_name %}{% endif %}
  - Um cliente de e-mail que usa um endereço de e-mail verificado, que também pode sincronizar com a caixa de entrada de {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %} e {% data variables.product.prodname_mobile %}{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.notifications-v2.notifications-inbox-required-setting %} Para obter mais informações, consulte "[Escolhendo suas configurações de notificação](#choosing-your-notification-settings)".
{% endif %}

{% data reusables.notifications.shared_state %}

#### Benefícios da caixa de entrada de notificações

A caixa de entrada de notificações em {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %} e {% data variables.product.prodname_mobile %}{% endif %} inclui opções de triagem projetadas especificamente para o seu fluxo de notificações de {% data variables.product.product_name %} e inclui opções para:
  - Fazer triagem de várias notificações ao mesmo tempo.
  - Marcar as notificações concluídas como **Concluído** e removê-las da sua caixa de entrada. Para ver todas as suas notificações marcadas como **Concluído**, use a consulta `is:done`.
  - Salvar uma notificação para revisar mais tarde. As notificações salvas são sinalizadas na sua caixa de entrada e mantidas indefinidamente. Para visualizar todas as suas notificações salvas, use a consulta `is:saved`.
  - Cancelar inscrição e remover uma notificação da sua caixa de entrada.
  - Visualizar o problema, a pull request ou uma discussão em equipe onde a notificação se origina no {% data variables.product.product_name %} de dentro da caixa de entrada de notificações.
  - Ver uma das últimas razões pelas quais você está recebendo uma notificação de sua caixa de entrada com uma etiqueta `razões`.
  - Criar filtros personalizados para focar em notificações diferentes quando quiser.
  - Notificações em grupo em sua caixa de entrada por repositório ou data para obter uma visão geral rápida com menos comutação de contexto

{% if currentVersion == "free-pro-team@latest" %}
Além disso, a caixa de entrada de notificações em
{% data variables.product.prodname_mobile %} permite que você faça triagem de notificações no modo escuro e receba notificações push para menções diretas. Para obter mais informações, consulte "[Habilitar notificações push com GitHub para celular](#enabling-push-notifications-with-github-for-mobile)" ou "[GitHub para celular](/github/getting-started-with-github/github-for-mobile)".
{% endif %}

#### Benefícios da utilização de um cliente de e-mail para notificações

Um benefício de usar um cliente de e-mail é que todas as suas notificações podem ser mantidas indefinidamente, dependendo da capacidade de armazenamento do seu cliente de e-mail. Suas notificações na caixa de entrada só serão mantidas por 5 meses, a menos que você as tenha marcado como **Salvas**. As notificações **Saved** (Salvas) são mantidas indefinidamente. Para obter mais informações sobre a política de retenção da sua caixa de entrada, consulte "[Sobre notificações](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notification-retention-policy)".

O envio de notificações para o cliente de e-mail também permite que você personalize sua caixa de entrada de acordo com as configurações do cliente de e-mail que pode incluir etiquetas personalizadas ou codificadas por cores.

As notificações de e-mail também permitem flexibilidade com os tipos de notificações que você recebe e permitem que você escolha diferentes endereços de e-mail para atualizações. Por exemplo, você pode enviar determinadas notificações para um repositório para um endereço de e-mail pessoal verificado. Para obter mais informações, sobre suas opções de personalização de e-mail, consulte "[Personalizando suas notificações de e-mail](#customizing-your-email-notifications)."

### Sobre notificações de participação e inspeção

Quando você inspeciona um repositório, você assina atualizações de atividade nesse repositório. Da mesma forma, quando você inspeciona as discussões de uma equipe específica, você está inscrito em todas as atualizações de conversa na página daquela equipe. Para obter mais informações, consulte "[Sobre discussões de equipe](/github/building-a-strong-community/about-team-discussions)".

Para ver repositórios que você está inspecionando, acesse a sua [página de inspeção](https://github.com/watching). Para obter mais informações, consulte "[Gerenciando assinaturas e notificações do GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)".
{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
#### Configurar notificações
{% endif %}
Você pode configurar as notificações para um repositório na página do repositório ou na página de visitas.
{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2. 0" %} Você pode optar por receber apenas notificações de versões em um repositório ou ignorar todas as notificações de um repositório.{% endif %}{% if currentVersion == "free-pro-team@latest" %}

#### Sobre as notificações personalizadas
{% data reusables.notifications-v2.custom-notifications-beta %}
É possível personalizar notificações para um repositório. Você pode optar, por exemplo, por receber notificações somente quando atualizações para um ou mais tipos de eventos (problemas, pull request, versões, discussões) ocorrerem dentro de um repositório ou ignorar todas as notificações de um repositório.
{% endif %} Para obter mais informações, consulte "[Visualizar suas assinaturas](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions#configuring-your-watch-settings-for-an-individual-repository)".

#### Participar de conversas
A qualquer momento que você comentar em uma conversa ou quando alguém @mencionar seu nome de usuário, você estará _participando_ de uma conversa. Por padrão, você é inscrito automaticamente em uma conversa ao participar dela. Você pode cancelar manualmente a inscrição de uma conversa que você participou, clicando em **Cancelar inscrição** no problema ou na pull request ou através da opção **Cancelar inscrição** na caixa de entrada de notificações.

Para conversas que você está inspecionando ou participando, você pode escolher se deseja receber notificações por e-mail ou através da caixa de entrada em {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %} e {% data variables.product.prodname_mobile %}{% endif %}.

![Opções de notificações de participação e inspeção](/assets/images/help/notifications-v2/participating-and-watching-options.png)

Por exemplo:
  - Se você não quiser que as notificações sejam enviadas para o seu e-mail, desmarque **e-mail** para participar e inspecionar as notificações.
  - Se quiser receber notificações por e-mail quando você participou de uma conversa, então selecione **e-mail** abaixo de "Participar".

Se você não permite assistir ou participar de notificações da web{% if currentVersion == "free-pro-team@latest" %} e móvel{% endif %}, sua caixa de entrada de notificações não terá nenhuma atualização.

### Personalizando suas notificações por e-mail

Após habilitar as notificações de e-mail, o {% data variables.product.product_name %} enviará notificações a você como e-mails em diversas partes que contêm cópias do conteúdo em HTML e texto sem formatação. O conteúdo da notificação de e-mail inclui markdown, @menção, emojis, links por hash e muito mais, que aparecem no conteúdo original do {% data variables.product.product_name %}. Se você quiser ver apenas o texto do e-mail, configure o cliente de e-mail para exibir apenas a cópia do texto sem formatação.

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

{% if currentVersion == "free-pro-team@latest" %}

Se estiver usando o Gmail, você poderá clicar em um botão junto ao e-mail de notificação para acessar o problema ou a pull request original que gerou a notificação.

![Botões no Gmail](/assets/images/help/notifications/gmail-buttons.png)

{% endif %}

Escolha um endereço de e-mail padrão para enviar atualizações de conversas que você está participando ou inspecionando. Você também pode especificar qual atividade no {% data variables.product.product_name %} você deseja receber atualizações usando seu endereço de e-mail padrão. Por exemplo, escolha se você quer atualizações do seu e-mail padrão de:
  - Comentários em problemas ou pull requests.
  - Revisões de pull request.
  - Pushes de pull request.
  - Suas próprias atualizações, como quando você abre, comenta ou encerra um problema ou uma pull request.

Dependendo da organização proprietária do repositório, você também pode enviar notificações para diferentes endereços de e-mail. Sua organização pode exigir que o endereço de e-mail seja verificado para um domínio específico. Para obter mais informações, consulte "[Escolher onde as notificações de e-mail da sua organização são enviadas](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-where-your-organizations-email-notifications-are-sent)".

Você também pode enviar notificações de um repositório específico para um endereço de e-mail. Para obter mais informações, consulte "[Sobre notificações de email para push no seu repositório](/github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository)".

{% data reusables.notifications-v2.email-notification-caveats %}

### Filtrar notificações de e-mail

Cada notificação de e-mail que o {% data variables.product.product_name %} envia contém informações de header. As informações de header em cada e-mail são consistentes, de modo que é possível usá-las no cliente de e-mail para filtrar ou encaminhar todas as notificações do {% data variables.product.product_name %} ou determinados tipos de notificação do {% data variables.product.product_name %}.

Se você acredita que está recebendo notificações que não pertencem a você, examine os headers `X-GitHub-Recipient` e `X-GitHub-Recipient-Address`. Estes headers mostram quem é o destinatário pretendido. Dependendo de sua configuração de e-mail, você pode receber notificações destinadas a outro usuário.

As notificações de e-mail do {% data variables.product.product_name %} contêm as seguintes informações de header:

| Header                    | Informações                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Endereço do `remetente`   | Este endereço será sempre {% if currentVersion == "free-pro-team@latest" %}'`notifications@github. om`'{% else %}'endereço de e-mail de não responda configurado pelo administrador do site'{% endif %}.                                                                                                                                                       |
| Campo `To`                | Este campo conecta-se diretamente à corrente.{% if currentVersion != "github-ae@latest" %} Se você responder ao e-mail, você adicionará um novo comentário na conversa.{% endif %}
| Endereço de `Cc`          | O {% data variables.product.product_name %} colocará você em cópia (`Cc`) se você estiver inscrito para uma conversa. O segundo endereço de e-mail de `Cc` corresponde ao motivo da notificação. O sufixo para esses motivos de notificação é {% data variables.notifications.cc_address %}. Os possíveis motivos de notificação são: <ul><li>'assign': você foi atribuído a um problema ou uma pull request.</li><li>'author': você criou um problema ou uma pull request.</li><li>'comment': você comentou um problema ou uma pull request.</li><li>'manual': houve uma atualização em um problema ou uma pull request para o(a) qual você assinou manualmente.</li><li>'mention': você foi mencionado em um problema ou uma pull request.</li><li>'push': alguém fez commit em uma pull request que você assinou.</li><li>'review_requested': você ou uma equipe da qual faz você faz parte foi solicitado para revisar uma pull request.</li>{% if currentVersion != "github-ae@latest" %}<li>'security_alert': o {% data variables.product.prodname_dotcom %} detectou uma vulnerabilidade em um repositório para o qual você recebe alertas de segurança.</li>{% endif %}<li>'state_change': um problema ou uma pull request que você assinou foi fechado(a) ou aberto(a).</li><li>'subscribed': houve uma atualização em um repositório que você está inspecionando.</li><li>'team_mention': uma equipe a qual você pertence foi mencionada em um problema ou uma pull request.</li><li>'your_activity': você abriu, comentou ou fechou um problema ou uma pull request.</li></ul> |
| campo `mailing list`      | Esse campo identifica o nome do repositório e seu proprietário. O formato desse endereço é sempre `<nome do repositório>.<proprietário do repositório>.{% data variables.command_line.backticks %}`. |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
| campo `X-GitHub-Severity` | {% data reusables.repositories.security-alerts-x-github-severity %} Os níveis possíveis de gravidade são:<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" |{% endif %}

### Escolhendo suas configurações de notificação

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. Na página de configurações de notificações, escolha como receber notificações quando:
    - Há atualizações em repositórios ou discussões de equipe que você está inspecionando ou em uma conversa na qual você está participando. Para obter mais informações, consulte "[Sobre notificações de participação e inspeção](#about-participating-and-watching-notifications)".
    - Você obtém acesso a um novo repositório ou se juntou a uma nova equipe. Para obter mais informações, consulte "[Inspeção automática](#automatic-watching)."{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
    - Há novos {% if page.version == 'dotcom' %} {% data variables.product.prodname_dependabot_alerts %} {% else %} alertas de segurança {% endif %} em seu repositório. Para obter mais informações, consulte "[{% data variables.product.prodname_dependabot_alerts %} opções de notificação](#dependabot-alerts-notification-options)". {% endif %}{% if currentVersion == "enterprise-server@2.21" %}
    - Existem novos alertas de segurança no seu repositório. Para obter mais informações, consulte "[Opções de notificação de alerta de segurança](#security-alert-notification-options)". {% endif %} {% if currentVersion == "free-pro-team@latest" %}
    - Há atualizações de fluxo de trabalho nos repositórios configurados com o {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[{% data variables.product.prodname_actions %} opções de notificação](#github-actions-notification-options)".{% endif %}

### Inspeção automática

Por padrão, sempre que você obtiver acesso a um novo repositório, você começará a inspecionar aquele repositório automaticamente. Sempre que você entrar em uma nova equipe, você será automaticamente inscrito em atualizações e receberá notificações quando essa equipe for @mencionada. Se você não quiser ser automaticamente inscrito, você pode desmarcar as opções de inspeção automática.

  ![Opções de inspeção automática](/assets/images/help/notifications-v2/automatic-watching-options.png)

Se "Inspecionar repositórios automaticamente" estiver desativado, então você não inspecionará automaticamente seus próprios repositórios. É necessário navegar na página do seu repositório e escolher a opção de inspeção.

### Escolhendo para onde as notificações de e-mail da sua organização são enviadas

Se pertencer a uma organização, você poderá escolher a conta de e-mail em que deseja receber as notificações da atividade da organização. Por exemplo, se pertencer a uma organização para fins de trabalho, talvez você queira receber as notificações no seu endereço de e-mail profissional, e não no endereço pessoal.

{% data reusables.notifications-v2.email-notification-caveats %}

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. Em "Default notification email" (E-mail padrão de notificação), selecione o endereço de e-mail em que você quer receber as notificações.   
   ![Menu suspenso de endereço de e-mail padrão de notificação](/assets/images/help/notifications/notifications_primary_email_for_orgs.png)
4. Clique em **Salvar**.

#### Personalizar rotas de e-mail por organização

Se você for integrante de mais de uma organização, você poderá configurar cada uma para enviar notificações a qualquer um de{% if currentVersion == "free-pro-team@latest" %} seus endereços de e-mail verificados{% else %} o e-mail que você adicionou à sua conta de {% data variables.product.product_name %}{% endif %}. {% if currentVersion == "free-pro-team@latest" %} Para obter mais informações, consulte "[verificar o seu endereço de e-mail](/articles/verifying-your-email-address)".{% endif %}

{% data reusables.notifications.access_notifications %}
{% data reusables.notifications-v2.manage-notifications %}
3. Na lista em "Custom routing" (Encaminhamento personalizado), localize o nome da sua organização.   
   ![Lista de organizações e endereços de e-mail](/assets/images/help/notifications/notifications_org_emails.png)
4. Clique em **Edit** (Editar) ao lado do endereço de e-mail que você pretende alterar. ![Editar endereços de e-mail da organização](/assets/images/help/notifications/notifications_edit_org_emails.png)
5. Selecione um dos seus endereços de e-mail verificados e clique em **Save** (Salvar).    
   ![Alterar o endereço de e-mail por organização](/assets/images/help/notifications/notifications_switching_org_email.gif)

{% if currentVersion != "github-ae@latest" %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### Opções de notificação {% data variables.product.prodname_dependabot_alerts %}
{% else %}
### Opções de notificação de alerta de segurança
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}
{% data reusables.notifications.vulnerable-dependency-notification-options %}
Para obter mais informações sobre os métodos de entrega de notificações disponíveis para você e conselhos sobre otimização de suas notificações

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 1" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de segurança{% endif %}, consulte "[Configurar notificações para dependências vulneráveis](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)".
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### Opções de notificação {% data variables.product.prodname_actions %}

Escolha como você deseja receber atualizações de execução de fluxo de trabalho para repositórios que você está inspecionando que estão configurados com o {% data variables.product.prodname_actions %}. Você também pode optar por receber apenas notificações de execução de fluxo de trabalho falha.

  ![Opções de alertas {% data variables.product.prodname_dependabot_short %}](/assets/images/help/notifications-v2/github-actions-notification-options.png)

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Habilitando notificações push com {% data variables.product.prodname_mobile %}

Quando você instalar {% data variables.product.prodname_mobile %}, você será automaticamente incluído em notificações da web. Você poderá então ativar notificações push para menções diretas no app.

Você só pode receber notificações de pushes para repositórios no {% data variables.product.prodname_mobile %} neste momento.

#### Habilitar notificações de push com {% data variables.product.prodname_ios %}

1. Acima de "Home", clique na foto do seu perfil.
2. Para ver suas configurações, clique em {% octicon "gear" aria-label="The Gear icon" %}. ![Ícone de configurações para GitHub para iOS](/assets/images/help/mobile/ios-settings-icon.png)
3. Para atualizar suas configurações de notificação, clique em **Notificações push**.
4. Para ativar as notificações push para menções diretas, use a alternância **Menções Diretas**.

#### Habilitar notificações de push com {% data variables.product.prodname_android %}

1. Acima de "Home", clique na foto do seu perfil.
2. Para ver suas configurações, clique em {% octicon "gear" aria-label="The Gear icon" %}. ![Ícone de configurações para GitHub para iOS](/assets/images/help/mobile/android-settings-icon.png)
3. Para ativar as notificações push para menções diretas, use a alternância **Menções Diretas**.
{% endif %}
