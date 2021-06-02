---
title: Sobre notificações
intro: 'Notificações fornecem atualizações sobre a atividade no {% data variables.product.product_name %} que você assinou. Você pode usar a caixa de entrada de notificações para personalizar, fazer triagem e gerenciar suas atualizações.'
redirect_from:
  - /articles/notifications/
  - /articles/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications-beta
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - Notifications
---
{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.mobile.ghes-release-phase %}
{% endif %}

### Notificações e assinaturas

Você pode optar por receber atualizações em curso sobre a atividade específica no {% data variables.product.product_name %} por meio de uma assinatura. As notificações são atualizações que você recebe para atividades específicas que você assinou.

#### Opções de assinaturas

Você pode optar por assinar notificações para:
- Uma conversa em um problema específico, pull request ou gist.
- Todas as atividades em um repositório ou em uma discussão em equipe.
- Atividade CI, como o status de fluxos de trabalho nos repositórios configurados com {% data variables.product.prodname_actions %}. {% if currentVersion == "free-pro-team@latest" or  currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
- Repository {% data reusables.notifications-v2.custom-notification-types %} (if enabled). {% elsif currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
- Releases in a repository.{% endif %}

Você também pode optar por assistir automaticamente todos os repositórios aos quais você tem acesso de push, exceto as bifurcações. É possível assistir qualquer outro repositório ao qual você tenha acesso manualmente clicando em **Watch** (Assistir).

Se não estiver mais interessado em uma conversa, cancele a assinatura dela, deixe de acompanhar ou personalize os tipos de notificações que você receberá no futuro. Por exemplo, se você não quiser mais receber notificações de um repositório específico, você pode clicar em **Cancelar a assinatura**. Para obter mais informações, consulte "[Gerenciando suas assinaturas](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)."

#### Assinaturas padrão

Em geral, você é automaticamente inscrito em conversas por padrão quando você tem:
- Visualização automática não desabilitada de repositórios ou equipes às quais você se afiliou em suas configurações de notificação. Essa configuração é habilitada por padrão.
- Responsabilização por um problema ou uma pull request.
- A abertura de uma pull request, um problema ou tenha criado um post de discussão em equipe.
- Comentários em uma thread.
- Assinatura de uma thread feita manualmente ao clicar em **Watch** (Inspecionar) ou **Subscribe** (Assinar).
- Seu username @mencionado.
- Alteração do estado de uma thread, como por exemplo, fechando um problema ou mesclando uma pull request.
- Uma @menção a uma equipe da qual você é integrante

Por padrão, você também inspeciona automaticamente todos os repositórios que você cria e são pertencentes à sua conta de usuário.

Para cancelar a inscrição de conversas que você se inscreveu automaticamente, você pode alterar suas configurações de notificação ou cancelar diretamente a inscrição ou desmarcar a atividade em {% data variables.product.product_name %}. Para obter mais informações, consulte "[Gerenciando suas assinaturas](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)."

### Personalizando notificações e assinaturas

Você pode optar por visualizar as notificações por meio da caixa de entrada [https://github.com/notifications](https://github.com/notifications){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %} e no aplicativo de {% data variables.product.prodname_mobile %}{% endif %}, por meio do seu e-mail ou alguma combinação dessas opções.

Para personalizar os tipos de atualizações que você gostaria de receber e para onde enviar essas atualizações, configure suas configurações de notificação. Para obter mais informações, consulte “[Configurando notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)".

Para manter suas assinaturas gerenciáveis, revise suas assinaturas e os repositórios inspecionados e cancele sua assinatura conforme necessário. Para obter mais informações, consulte "[Gerenciando assinaturas de atividade do GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)".

Para personalizar como você gostaria de receber atualizações de pull requests ou problemas específicos, é possível configurar suas preferências dentro do problema ou da pull request. Para obter mais informações, consulte “[Fazendo triagem de uma só notificação](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22"%}
Você pode personalizar e agendar notificações push no
aplicativo {% data variables.product.prodname_mobile %}. Para obter mais informações, consulte “[Configurando notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#managing-your-notification-settings-with-github-for-mobile)".
{% endif %}

### Motivos para receber notificações

Sua caixa de entrada está configurada com filtros-padrão, que representam as razões mais comuns para que as pessoas precisem acompanhar suas notificações. Para obter mais informações sobre filtros na caixa de entrada, consulte "[Gerenciar notificações de sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#default-notification-filters)".

Sua caixa de entrada mostra as `razões` de você estar recebendo notificações como uma etiqueta.

![Etiquetas de razões na caixa de entrada](/assets/images/help/notifications-v2/reasons-as-labels-in-inbox.png)

Você pode filtrar sua caixa de entrada pelo motivo pelo qual está inscrito nas notificações. Por exemplo, para ver apenas pull requests em que alguém solicitou sua revisão, você pode usar o filtro de consulta `review-requested`.

![Filtrar notificações por revisão da razão solicitada](/assets/images/help/notifications-v2/review-requested-reason.png)

Se você configurou as notificações para serem enviadas por e-mail e acredita que está recebendo notificações que não pertencem a você, considere a resolução de problemas com cabeçalhos de e-mail, que mostram o destinatário pretendido. Para obter mais informações, consulte “[Configurando notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)".

### Fazendo a triagem de notificações da sua caixa de entrada

Para gerenciar suas notificações efetivamente, você pode fazer a triagem de sua caixa de entrada com opções para:
- Remover uma notificação da caixa de entrada com **Done** (Concluído). Você pode revisar as notificações marcadas com **Concluído** em um só lugar clicando em **Concluído** na barra lateral ou usando a consulta `is:done`.
- Marcar uma notificação como lida ou não lida.
- **Salvar** uma notificação para a revisão posterior. As notificações **Saved** (Salvas) estão sinalizadas na sua caixa de entrada. Você pode revisar as notificações marcadas como **Salvas** em um só lugar clicando em **Saved** (Salva) na barra lateral ou usando a consulta `is:saved`.
- Cancelar automaticamente esta notificação e atualizações futuras desta conversa. Cancelar inscrição também remove a notificação da sua caixa de entrada. Se você cancelar a inscrição de uma conversa e alguém menciona seu nome de usuário ou uma equipe para a qual você está recebendo atualizações, então você começará a receber notificações desta conversa novamente.

Em sua caixa de entrada, você também pode fazer triagem de várias notificações de uma só vez. Para obter mais informações, consulte "[Gerenciar notificações de sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)".

### Personalizando sua caixa de entrada de notificações

Para se concentrar em um grupo de notificações na sua caixa de entrada em {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %} ou {% data variables.product.prodname_mobile %}{% endif %}, você pode criar filtros personalizados. Por exemplo, você pode criar um filtro personalizado para um projeto de código aberto para o qual contribui e somente visualizar notificações para esse repositório em que você é mencionado. Para obter mais informações, consulte "[Gerenciando notificações de sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)". Para mais exemplos de como personalizar a triagem de seu fluxo de trabalho, consulte "[Personalizando um fluxo de trabalho para triagem de suas notificações.](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)

### Política de retenção de notificações

Notificações que não estão marcadas como **Salvas** são mantidas por 5 meses. Notificações marcadas como **Salvas** são mantidas indefinidamente. Se sua notificação salva tiver mais de 5 meses e você não salvá-la, a notificação desaparecerá da sua caixa de entrada em um dia.

### Feedback e suporte

Se você tiver feedback ou solicitações de recursos para notificações, use o [formulário de feedback para notificações](https://support.github.com/contact/feedback?contact%5Bcategory%5D=notifications&contact%5Bsubject%5D=Product+feedback).
