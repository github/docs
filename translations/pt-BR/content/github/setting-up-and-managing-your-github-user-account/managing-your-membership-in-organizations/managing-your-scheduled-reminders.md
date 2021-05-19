---
title: Gerenciar seus lembretes agendados
intro: Receba lembretes no Slack quando você ou sua equipe tiverem pull requests aguardando revisão.
versions:
  free-pro-team: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders
---
### Sobre os lembretes agendados para os usuários

Os lembretes agendados são usados para garantir que os usuários se concentrem nos pedidos de revisão mais importantes que exigem sua atenção. Os lembretes agendados para pull requests enviarão uma mensagem para você no Slack com pull requests abertos que precisam de revisão em um determinado momento. Por exemplo, você pode configurar lembretes agendados para enviar uma mensagem no Slack todas as manhãs às 10h, com pull requests que devem ser revisados por você ou uma das suas equipes.

Para certos eventos, você também pode habilitar alertas em tempo real para agendamentos de lembretes. Os alertas em tempo real são enviados para o seu canal do Slack assim que ocorrer um evento importante, como, por exemplo, a atribuição de uma revisão, ocorre.

Você pode definir lembretes agendados para solicitações de revisão no nível da equipe para pull requests nas organizações das quais você é integrante. Antes de criar um lembrete agendado para você, um proprietário da organização deve autorizar o seu espaço de trabalho do Slack. Para obter mais informações, consulte "[Gerenciar lembretes agendados para a sua organização](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)".

{% data reusables.reminders.scheduled-reminders-limitations %}

### Criar lembretes agendados para a sua conta de usuário

{% data reusables.user_settings.access_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Botão de lembretes agendados](/assets/images/help/profile/scheduled-reminders-profile.png)
3. Ao lado da organização para a qual você gostaria de agendar lembretes, clique em **Editar**. ![Botão editar lembretes agendados](/assets/images/help/settings/scheduled-reminders-org-choice.png)
{% data reusables.reminders.add-reminder %}
{% data reusables.reminders.authorize-slack %}
{% data reusables.reminders.days-dropdown %}
{% data reusables.reminders.times-dropdowns %}
8. Opcionalmente, para receber lembretes agendados para revisões às quais você foi atribuído, selecione **Revisar solicitações atribuídas a você**. ![Caixa de seleção para revisar as solicitações atribuías a você](/assets/images/help/profile/scheduled-reminders-your-requests.png)
9. Opcionalmente, para receber lembretes agendados para revisões atribuídas a uma equipe da qual você é integrante, selecione **Revisar solicitações atribuídas à sua equipe**. ![Caixa de seleção para revisar as solicitações atribuídas à sua equipe](/assets/images/help/profile/scheduled-reminders-your-team-requests.png)
{% data reusables.reminders.real-time-alerts %}
![Caixa de seleção para habilitar alertas em tempo real](/assets/images/help/settings/scheduled-reminders-real-time-alerts-personal.png)
{% data reusables.reminders.create-reminder %}

### Gerenciar lembretes agendados para sua conta de usuário
{% data reusables.user_settings.access_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Botão de lembretes agendados](/assets/images/help/profile/scheduled-reminders-profile.png)
3. Ao lado da organização para a qual você deseja editar lembretes agendados, clique em **Editar**. ![Botão editar lembretes agendados](/assets/images/help/settings/scheduled-reminders-org-choice.png)
{% data reusables.reminders.edit-page %}
{% data reusables.reminders.update-buttons %}

### Excluir lembretes agendados para a sua conta de usuário
{% data reusables.user_settings.access_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Botão de lembretes agendados](/assets/images/help/profile/scheduled-reminders-profile.png)
3. Ao lado da organização para a qual você gostaria de excluir lembretes, clique em **Editar**. ![Botão editar lembretes agendados](/assets/images/help/settings/scheduled-reminders-org-choice.png)
{% data reusables.reminders.delete %}

### Leia mais

- "[Gerenciar lembretes agendados para a sua organização](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)"
- "[Gerenciar lembretes agendados para a sua equipe](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)"
