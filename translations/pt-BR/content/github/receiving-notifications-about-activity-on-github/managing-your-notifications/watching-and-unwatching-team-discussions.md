---
title: Inspecionar e cancelar a inspeção de discussões em equipe
intro: Você pode inspecionar uma equipe para receber notificações sobre discussões da equipe. Também pode cancelar a inspeção quando não quiser mais receber notificações sobre discussões dessa equipe.
versions:
  enterprise-server: <2.21
redirect_from:
  - /github/receiving-notifications-about-activity-on-github/watching-and-unwatching-team-discussions
---
Por padrão, você recebe automaticamente notificações sobre discussões de equipes das quais é um integrante. Se você não quiser receber certas notificações sobre uma discussão de equipe, cancele a inspeção dessa equipe. Você também pode fazer ou cancelar a assinatura em determinadas postagens de discussão de equipe. Para obter mais informações, consulte "[Sobre discussões na equipe](/articles/about-team-discussions)" e "[Assinar e cancelar a assinatura de notificações](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)".

Caso você não queira inspecionar discussões de equipe automaticamente quando se tornar um integrante de novas equipes, atualize as configurações automáticas de inspeção.

### Inspecionar todas as discussões de equipe das novas equipes em que você ingressar

Para inspecionar automaticamente todas as discussões de equipe das novas equipes em que você ingressar, defina as configurações automáticas para notificações de inspeção.

{% note %}

**Observação:** o padrão desta configuração é **Automatically watching teams** (Inspecionar equipes automaticamente).

{% endnote %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
{% data reusables.user_settings.automatic_watching_box %} selecione **Automatically watch teams** (Inspecionar equipes automaticamente).
![Caixa de seleção para inspecionar equipes automaticamente](/assets/images/help/notifications/automatic-team-discussions-watching.png)

### Inspecionar as discussões de uma única equipe

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.watch-team-options %} clique em **Watch** (Inspecionar) para abrir suas opções de notificações. Em seguida, clique em **Watching** (Inspecionar).
![Opções de inspeção em um menu suspenso para uma equipe específica](/assets/images/help/notifications/specific-team-watch-options.png)

### Cancelar a inspeção de todas as discussões de equipe das novas equipes em que você ingressar

Se você não quiser receber automaticamente notificações sobre discussões de equipe quando participar de uma equipe, altere as configurações de notificação para cancelar a inspeção de todas novas equipes em que você ingressar.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
{% data reusables.user_settings.automatic_watching_box %} desmarque **Automatically watch teams** (Inspecionar equipes automaticamente).
![Configuração Automatically watching teams (Inspecionar equipes automaticamente) selecionada por padrão](/assets/images/help/notifications/automatic-team-discussions-watching.png)

### Cancelar a inspeção das discussões de uma única equipe

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.watch-team-options %} clique em **Unwatch** (Cancelar inspeção) para abrir suas opções de notificações. Em seguida, clique em **Not watching** (Não inspecionar).
![Opções de inspeção em um menu suspenso para uma equipe específica](/assets/images/help/notifications/specific-team-unwatch.png)

{% note %}

**Observação:** você também pode optar por ignorar as notificações de uma equipe. Nesse caso, você deixará de receber notificações. Não recomendamos ignorar equipes porque você não será notificado caso seja @mencionado.

{% endnote %}

### Leia mais

- "[Sobre notificações](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)"
- "[Sobre discussões de equipe](/articles/about-team-discussions)"
- "[Sobre equipes](/articles/about-teams)"
