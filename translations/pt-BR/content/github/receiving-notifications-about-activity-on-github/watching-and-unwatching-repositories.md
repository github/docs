---
title: Inspecionar e cancelar a inspeção de repositórios
intro: Você pode inspecionar um repositório para receber notificações de novos problemas e pull requests que sejam criados. Também pode cancelar a inspeção quando não quiser mais receber notificações sobre esse repositório específico.
versions:
  enterprise-server: <2.21
---

{% data reusables.notifications.auto-watch %} Para obter mais informações, consulte [Sobre notificações](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)."

Também é possível inspecionar e cancelar versões em um repositório. Para obter mais informações, consulte "[Fazer a inspeção e cancelar a inspeção de versões para um repositório](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-releases-for-a-repository)".

### Inspecionar todos os repositórios aos quais você tem acesso push

{% data reusables.notifications.access_watching %}
2. Clique **Inspecionar**. ![Lista de repositórios inspecionados](/assets/images/help/notifications/notifications-watching-tab.png)
3. Na lateral direita da página, marque **Automatically watch** (Inspecionar automaticamente). ![Caixa de seleção para configurar repositórios automaticamente](/assets/images/help/notifications/ent-automatically-watch-repos.png)

### Inspecionar um único repositório

{% data reusables.repositories.navigate-to-repo %}
2. No canto superior direito, clique em **Watching** (Inspecionar) no menu suspenso "Watch" (Inspecionar). ![Opções de inspeção em um menu suspenso para repositórios](/assets/images/help/notifications/watch-repository.png)

### Cancelar a inspeção de todos os repositórios aos quais você tem acesso push

{% data reusables.notifications.access_watching %}
2. Clique **Inspecionar**. ![Lista de repositórios inspecionados](/assets/images/help/notifications/notifications-watching-tab.png)
3. Na lateral direita da página, desmarque **Automatically watch** (Inspecionar automaticamente). ![Caixa de seleção para configurar repositórios automaticamente](/assets/images/help/notifications/ent-automatically-watch-repos.png)

### Cancelar a inspeção de um único repositório

{% data reusables.repositories.navigate-to-repo %}
2. No canto superior direito, clique em **Unwatch** (Não inspecionar) no menu suspenso "Watch" (Inspecionar). ![Opções de inspeção em um menu suspenso para repositórios](/assets/images/help/notifications/unwatch-repository.png)

{% note %}

**Observação:** você também pode optar por ignorar um repositório. Nesse caso, você deixará de receber notificações. Não recomendamos ignorar repositórios porque você não será notificado caso seja @mencionado. {% if currentVersion == "free-pro-team@latest" %}Se você estiver passando por abuso e desejar ignorar um repositório, entre em contato com {% data variables.contact.contact_support %} para que possamos ajudar. {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

### Leia mais

- "[Assinando e cancelando notificações](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)"
- "[Listar os repositórios que você está inspecionando](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)"
