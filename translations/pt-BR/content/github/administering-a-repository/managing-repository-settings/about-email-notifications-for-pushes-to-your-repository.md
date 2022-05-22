---
title: Sobre notificações de e-mail para pushes no seu repositório
intro: Você pode optar por enviar notificações por email automaticamente para um endereço de email específico quando alguém fizer push para o repositório.
permissions: People with admin permissions in a repository can enable email notifications for pushes to your repository.
redirect_from:
  - /articles/managing-notifications-for-pushes-to-a-repository/
  - /articles/receiving-email-notifications-for-pushes-to-a-repository/
  - /articles/about-email-notifications-for-pushes-to-your-repository/
  - /github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository
  - /github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% data reusables.notifications.outbound_email_tip %}

Cada notificação de e-mail para um push no repositório lista os novos commits e os vincula a um diff contendo apenas esses commits. Na notificação de e-mail, você verá:

- O nome do repositório onde o commit foi feito
- O branch em que um commit foi feito
- O SHA1 do commit, incluindo um link para o diff no {% data variables.product.product_name %}
- O autor do commit
- A data em que o commit foi feito
- Os arquivos que foram alterados como parte do commit
- A mensagem do commit;

É possível filtrar notificações de e-mail que você recebe para pushes em um repositório. Para obter mais informações, consulte {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2. 0" %}"[Configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications){% else %}"[Sobre e-mails de notificação](/github/receiving-notifications-about-activity-on-github/about-email-notifications)". Você também pode desativar notificações por email para pushes. Para obter mais informações, consulte "
[Escolher o método de entrega das suas notificações](/enterprise/{{ page.version }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications){% endif %}".</p> 



### Habilitando notificações de e-mail para pushes no seu repositório

{% data reusables.repositories.navigate-to-repo %}



{% data reusables.repositories.sidebar-settings %}



{% data reusables.repositories.sidebar-notifications %}

5. Digite até dois endereços de e-mail, separados por um espaço, para os quais deseja enviar as notificações. Se desejar enviar e-mails a mais de duas contas, defina um dos endereços para um endereço de e-mail de grupo. ![Caixa de texto de endereço de e-mail](/assets/images/help/settings/email_services_addresses.png)

1. Se você operar o seu próprio servidor, você poderá verificar a integridade dos e-mails através do **Cabeçalho aprovado**. O **Cabeçalho aprovado** é um token ou segredo que você digita nesse campo e enviado com o e-mail. Se o cabeçalho `Aprovado` de um e-mail corresponder ao token, você poderá confiar que o e-mail é de {% data variables.product.product_name %}. ![Caixa de texto do cabeçalho do e-mail aprovado](/assets/images/help/settings/email_services_approved_header.png)

7. Clique em **Configurar notificações**. ![Botão para configurar notificações](/assets/images/help/settings/setup_notifications_settings.png)



### Leia mais

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

- "[Sobre notificações](/github/managing-subscriptions-and-notifications-on-github/about-notifications)" 
  
  {% else %}

- "[Sobre notificações](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)"

- "[Escolhendo o método de entrega de suas notificações](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)"
- "[Sobre notificações por e-mail](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-email-notifications)"
- "[Sobre notificações web](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-web-notifications)"{% endif %}
