---
title: Sobre notificações
intro: 'Notificações fornecem atualizações sobre a atividade no {% data variables.product.product_location %} que você assinou. Você pode usar a caixa de entrada de notificações para personalizar, fazer triagem e gerenciar atualizações.'
redirect_from:
  - /articles/notifications
  - /articles/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications-beta
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
ms.openlocfilehash: 87034df88eb94c1d880806f01cb8748ed555a284
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147432021'
---
## Notificações e assinaturas

Você pode optar por receber atualizações contínuas sobre atividades específicas no {% data variables.product.product_location %} por meio de uma assinatura. As notificações são atualizações que você recebe para atividades específicas que você assinou.

### Opções de Assinatura

Você pode optar por assinar notificações para:
- Uma conversa em um problema específico, pull request ou gist.
- Todas as atividades em um repositório ou em uma discussão em equipe.
- Atividade CI, como o status de fluxos de trabalho nos repositórios configurados com {% data variables.product.prodname_actions %}. 
- Repositório {% data reusables.notifications-v2.custom-notification-types %} (se habilitado).

Você também pode optar por assistir automaticamente todos os repositórios aos quais você tem acesso de push, exceto as bifurcações. Você pode inspecionar qualquer outro repositório ao qual tem acesso manualmente clicando em **Inspecionar**.

Se não estiver mais interessado em uma conversa, cancele a assinatura dela, deixe de acompanhar ou personalize os tipos de notificações que você receberá no futuro. Por exemplo, se você não quiser mais receber notificações de um repositório específico, clique em **Cancelar assinatura**. Para obter mais informações, confira "[Como gerenciar suas assinaturas](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)".

### Assinaturas padrão

Em geral, você é automaticamente inscrito em conversas por padrão quando você tem:
- Visualização automática não desabilitada de repositórios ou equipes às quais você se afiliou em suas configurações de notificação. Essa configuração é habilitada por padrão.
- Responsabilização por um problema ou uma pull request.
- A abertura de uma pull request, um problema ou tenha criado um post de discussão em equipe.
- Comentários em uma thread.
- Se inscreveu em uma conversa manualmente clicando em **Inspecionar** ou **Inscrever-se**.
- Teve seu nome de usuário @mentioned.
- Alteração do estado de uma thread, como por exemplo, fechando um problema ou mesclando uma pull request.
- Teve uma equipe da qual você é membro @mentioned.

Por padrão, você também inspeciona automaticamente todos os repositórios que você cria e são pertencentes à sua conta pessoal.

Para cancelar a assinatura de conversas às quais você está inscrito automaticamente, altere as configurações de notificação, cancele a assinatura ou a inspeção da atividade diretamente no {% data variables.product.product_location %}. Para obter mais informações, confira "[Como gerenciar suas assinaturas](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)".

## Personalizando notificações e assinaturas

Você pode optar por ver suas notificações por meio da caixa de entrada de notificações em [https://github.com/notifications](https://github.com/notifications){% ifversion fpt or ghes or ghec %} e no aplicativo {% data variables.product.prodname_mobile %}{% endif %}, pelo email ou por alguma combinação dessas opções.

Para personalizar os tipos de atualizações que você gostaria de receber e para onde enviar essas atualizações, configure suas configurações de notificação. Para obter mais informações, confira "[Como configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)".

Para manter suas assinaturas gerenciáveis, revise suas assinaturas e os repositórios inspecionados e cancele sua assinatura conforme necessário. Para obter mais informações, confira "[Como gerenciar assinaturas para a atividade no GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)".

Para personalizar como você gostaria de receber atualizações de pull requests ou problemas específicos, é possível configurar suas preferências dentro do problema ou da pull request. Para obter mais informações, confira "[Como fazer a triagem de uma só notificação](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)".

{% ifversion fpt or ghes or ghec %} Você pode personalizar e agendar notificações por push no aplicativo {% data variables.product.prodname_mobile %}. Para obter mais informações, confira "[Como configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#managing-your-notification-settings-with-github-mobile)".
{% endif %}

## Motivos para receber notificações

Sua caixa de entrada está configurada com filtros padrão, que representam as razões mais comuns para que as pessoas precisem acompanhar suas notificações. Para obter mais informações sobre filtros de caixa de entrada, confira "[Como gerenciar notificações na sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#default-notification-filters)".

Sua caixa de entrada mostra os `reasons` pelos quais você está recebendo notificações como um rótulo.

![Etiquetas de razões na caixa de entrada](/assets/images/help/notifications-v2/reasons-as-labels-in-inbox.png)

Você pode filtrar sua caixa de entrada pelo motivo pelo qual está inscrito nas notificações. Por exemplo, para ver apenas as solicitações de pull em que alguém solicitou sua revisão, use o filtro de consulta `review-requested`.

![Filtrar notificações por revisar razão solicitada](/assets/images/help/notifications-v2/review-requested-reason.png)

Se você configurou as notificações para serem enviadas por e-mail e acredita que está recebendo notificações que não pertencem a você, considere a resolução de problemas com cabeçalhos de e-mail, que mostram o destinatário pretendido. Para obter mais informações, confira "[Como configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)".

## Fazendo a triagem de notificações da sua caixa de entrada

Para gerenciar suas notificações efetivamente, você pode fazer a triagem de sua caixa de entrada com opções para:
- Remova uma notificação da caixa de entrada com **Concluído**. Revise as notificações **concluídas** em um só lugar clicando em **Concluídas** na barra lateral ou usando a consulta `is:done`.
- Marcar uma notificação como lida ou não lida.
- **Salve** uma notificação para revisão posterior. As notificações **salvas** são sinalizadas na caixa de entrada. Revise as notificações **salvas** em um só lugar na barra lateral clicando em **Salvas** ou usando a consulta `is:saved`.
- Cancelar automaticamente esta notificação e atualizações futuras desta conversa. Cancelar inscrição também remove a notificação da sua caixa de entrada. Se você cancelar a inscrição de uma conversa e alguém menciona seu nome de usuário ou uma equipe para a qual você está recebendo atualizações, então você começará a receber notificações desta conversa novamente.

Em sua caixa de entrada, você também pode fazer triagem de várias notificações de uma só vez. Para obter mais informações, confira "[Como gerenciar notificações na sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)".

## Personalizando sua caixa de entrada de notificações

Para se concentrar em um grupo de notificações na caixa de entrada no {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} ou no {% data variables.product.prodname_mobile %}{% endif %}, crie filtros personalizados. Por exemplo, você pode criar um filtro personalizado para um projeto de código aberto para o qual contribui e somente visualizar notificações para esse repositório em que você é mencionado. Para obter mais informações, confira "[Como gerenciar notificações na sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)". Para obter mais exemplos de como fazer a triagem do fluxo de trabalho, confira "[Como personalizar um fluxo de trabalho para fazer a triagem das suas notificações](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)".

## Política de retenção de notificações

As notificações que não estão marcadas como **Salvas** são mantidas por cinco meses. As notificações marcadas como **Salvas** são mantidas por tempo indeterminado. Se sua notificação salva tiver mais de 5 meses e você não salvá-la, a notificação desaparecerá da sua caixa de entrada em um dia.

## Comentários e suporte

Se você tiver comentários ou solicitações de recursos para notificações, use uma discussão da [{% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/general).
