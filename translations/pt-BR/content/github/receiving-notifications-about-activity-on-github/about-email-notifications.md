---
title: Sobre notificações de e-mail
intro: 'Ao habilitar notificações de e-mail, você receberá notificações de participação e inspeção em seu cliente de e-mail, podendo filtrá-las usando as informações de header do e-mail.'
versions:
  enterprise-server: <2.21
---

Para obter mais informações sobre as diferenças entre notificações de *participação* e *inspeção*, consulte "<a href="/enterprise/[Sobre notificações](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)".

Após habilitar as notificações de e-mail, o {% data variables.product.product_name %} enviará notificações a você como e-mails em diversas partes que contêm cópias do conteúdo em HTML e texto sem formatação. O conteúdo da notificação de e-mail inclui markdown, @menção, emojis, links por hash e muito mais, que aparecem no conteúdo original do {% data variables.product.product_name %}. Se você quiser ver apenas o texto do e-mail, configure o cliente de e-mail para exibir apenas a cópia do texto sem formatação. Para obter mais informações sobre como habilitar notificações de e-mail, consulte "[Escolher o método de entrega das suas notificações](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)".

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

### Filtrar notificações de e-mail

Cada notificação de e-mail que o {% data variables.product.product_name %} envia contém informações de header. As informações de header em cada e-mail são consistentes, de modo que é possível usá-las no cliente de e-mail para filtrar ou encaminhar todas as notificações do {% data variables.product.product_name %} ou determinados tipos de notificação do {% data variables.product.product_name %}.

As notificações de e-mail do {% data variables.product.product_name %} contêm as seguintes informações de header:

| Header                                | Informações                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Endereço do `remetente`               | Este endereço sempre será "o endereço de email configurado no-reply pelo seu administrador do site".                                                                                                                                                                                                                                                                     |
| Campo `To`                            | Esse campo conecta-se diretamente ao thread. Se você responder ao e-mail, será adicionado um novo comentário à conversa.                                                                                                                                                                                                                                                 |
| Endereço de `Cc`                      | O {% data variables.product.product_name %} colocará você em cópia (`Cc`) se você estiver inscrito para uma conversa. O segundo endereço de e-mail de `Cc` corresponde ao motivo da notificação. O sufixo para esses motivos de notificação é {% data variables.notifications.cc_address %}. Os possíveis motivos de notificação são: <ul><li>'assign': você foi atribuído a um problema ou uma pull request.</li><li>'author': você criou um problema ou uma pull request.</li><li>'comment': você comentou um problema ou uma pull request.</li><li>'manual': houve uma atualização em um problema ou uma pull request para o(a) qual você assinou manualmente.</li><li>'mention': você foi mencionado em um problema ou uma pull request.</li><li>'push': alguém fez commit em uma pull request que você assinou.</li><li>'review_requested': você ou uma equipe da qual faz você faz parte foi solicitado para revisar uma pull request.</li><li>'security_alert': o {% data variables.product.prodname_dotcom %} detectou uma vulnerabilidade em um repositório para o qual você recebe alertas de segurança.</li><li>'state_change': um problema ou uma pull request que você assinou foi fechado(a) ou aberto(a).</li><li>'subscribed': houve uma atualização em um repositório que você está inspecionando.</li><li>'team_mention': uma equipe a qual você pertence foi mencionada em um problema ou uma pull request.</li><li>'your_activity': você abriu, comentou ou fechou um problema ou uma pull request.</li></ul> |
| campo `mailing list`                  | Esse campo identifica o nome do repositório e seu proprietário. O formato desse endereço é sempre `<nome do repositório>.<proprietário do repositório>.{% data variables.command_line.backticks %}`.                                                                                                                                                    |{% if currentVersion ver_gt "enterprise-server@2.19" % %}
| campo `X-GitHub-Severity`             | {% data reusables.repositories.security-alerts-x-github-severity %} Os níveis possíveis de gravidade são:<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" |{% endif %}

### Leia mais

- "<a href="/enterprise/[/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching">Listar os repositórios que você está inspecionando](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)"
- "<a href="/enterprise/[/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories">Fazer a inspeção e cancelar a inspeção de repositórios](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)"
- "[Fazer a assinatura e cancelar a assinatura de notificações](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)"{% if currentVersion ver_gt "enterprise-server@2.17" %}
- "[Criar gists](/articles/creating-gists)"{% endif %}
