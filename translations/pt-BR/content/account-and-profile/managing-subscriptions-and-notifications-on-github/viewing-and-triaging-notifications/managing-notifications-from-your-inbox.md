---
title: Gerenciamento de notificações da sua caixa de entrada
intro: 'Use sua caixa de entrada para fazer triagem e sincronizar rapidamente as notificações no email{% ifversion fpt or ghes or ghec %} e no dispositivo móvel{% endif %}.'
redirect_from:
  - /articles/marking-notifications-as-read
  - /articles/saving-notifications-for-later
  - /github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox
  - /github/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
shortTitle: Manage from your inbox
ms.openlocfilehash: d3e0d5eb5e7cf3e544ab601651951178402e4150
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106802'
---
## Sobre sua caixa de entrada

{% ifversion fpt or ghes or ghec %} {% data reusables.notifications-v2.notifications-inbox-required-setting %} Para obter mais informações, confira "[Configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)".
{% endif %}

Para acessar a caixa de entrada de notificações, no canto superior direito de qualquer página, clique em {% octicon "bell" aria-label="The notifications bell" %}.

  ![Notificação indicando mensagens não lidas](/assets/images/help/notifications/notifications_general_existence_indicator.png)

Sua caixa de entrada mostra todas as notificações que você não assinou ou marcou como **Concluído.** Você pode personalizar sua caixa de entrada para se adequar melhor ao fluxo de trabalho usando filtros, exibindo todas ou apenas notificações não lidas e agrupando suas notificações para obter uma visão geral rápida.

  ![visualização da caixa de entrada](/assets/images/help/notifications-v2/inbox-view.png)

Por padrão, sua caixa de entrada mostrará notificações lidas e não lidas. Para ver apenas notificações não lidas, clique em **Não ler** ou use a consulta `is:unread`.

  ![visualização da caixa de entrada não lida](/assets/images/help/notifications-v2/unread-inbox-view.png)

## Opções de triagem

Você tem várias opções para fazer triagem de notificações a partir de sua caixa de entrada.

| Opções de triagem | Descrição |
|-----------------|-------------|
| Salvar            | Salva a sua notificação para revisão posterior. Para salvar uma notificação à direita da notificação, clique em {% octicon "bookmark" aria-label="The bookmark icon" %}. <br> <br> As notificações salvas são mantidas por tempo indeterminado e podem ser exibidas com um clique em **Salvas** na barra lateral ou com a consulta `is:saved`. Se sua notificação salva tiver mais de 5 meses e tornar-se não salva, a notificação desaparecerá da sua caixa de entrada em um dia. |
| Concluído            | Marca uma notificação como concluída e remove a notificação da sua caixa de entrada. Você pode ver todas as notificações concluídas clicando em **Concluído** na barra lateral ou com a consulta `is:done`. As notificações marcadas como **Concluídas** são salvas por cinco meses.
| Cancelar assinatura     | Remove automaticamente a notificação da sua caixa de entrada e cancela a assinatura da conversa até que você seja @mentioned (mencionado), uma equipe em que você está seja@mentioned ou você seja solicitado a fazer a revisão.
| Ler            | Marca uma notificação como lida. Para exibir apenas notificações de leitura na caixa de entrada, use a consulta `is:read`. Essa consulta não inclui notificações marcadas como **Concluídas**.
| Não lido          | Marca uma notificação como não lida. Para exibir apenas notificações não lidas em sua caixa de entrada, use a consulta `is:unread`. |

Para ver os atalhos de teclado disponíveis, confira "[Atalhos de teclado](/github/getting-started-with-github/keyboard-shortcuts#notifications)".

Antes de escolher uma opção de triagem, primeiro você pode pré-visualizar os detalhes da sua notificação e investigar. Para obter mais informações, confira "[Como fazer a triagem de uma só notificação](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification)".

## Fazer triagem de várias notificações ao mesmo tempo

Para fazer a triagem de várias notificações ao mesmo tempo, selecione as notificações relevantes e use a lista suspensa {% octicon "kebab-horizontal" aria-label="The edit icon" %} para escolher uma opção de triagem.

![Menu suspenso com opções de triagem e notificações selecionadas](/assets/images/help/notifications-v2/triage-multiple-notifications-together.png)

## Filtros de notificação padrão

Por padrão, sua caixa de entrada tem filtros para quando você é atribuído, participando de um thread, solicitado a examinar uma solicitação de pull ou quando seu nome de usuário é @mentioned diretamente ou uma equipe da qual você é membro seja @mentioned.

  ![Filtros personalizados padrão](/assets/images/help/notifications-v2/default-filters.png)

## Personalizando sua caixa de entrada com filtros personalizados

Você pode adicionar até 15 dos seus próprios filtros personalizados.

{% data reusables.notifications.access_notifications %}
2. Para abrir as configurações de filtro, na barra lateral esquerda, ao lado de "Filtros", clique em {% octicon "gear" aria-label="The Gear icon" %}.

  {% tip %}

  **Dica:** você pode visualizar rapidamente os resultados da caixa de entrada de um filtro criando uma consulta no modo de exibição de caixa de entrada e clicando em **Salvar**, o que abre as configurações de filtro personalizadas.

  {% endtip %}

3. Adicione um nome para seu filtro e uma consulta de filtro. Por exemplo, para ver apenas as notificações de um repositório específico, você pode criar um filtro usando a consulta `repo:octocat/open-source-project-name reason:participating`. Você também pode adicionar emojis com um teclado de emojis nativo. Para obter uma lista de consultas de pesquisa com suporte, confira "[Consultas com suporte para filtros personalizados](#supported-queries-for-custom-filters)".

  ![Exemplo de filtro personalizado](/assets/images/help/notifications-v2/custom-filter-example.png)

4. Clique em **Criar**.

## Limitações de filtro personalizadas

Filtros personalizados atualmente não suportam:
  - Pesquisa de texto completo em sua caixa de entrada, incluindo busca de pull request ou títulos de problema.
  - Distinção entre os filtros de consulta `is:issue`, `is:pr` e `is:pull-request`. Essas consultas retornarão problemas e pull requests.
  - Criando mais de 15 filtros personalizados.
  - Alterando os filtros padrão ou sua ordenação.
  - [Exclusão](/github/searching-for-information-on-github/understanding-the-search-syntax#exclude-certain-results) de pesquisa usando `NOT` ou `-QUALIFIER`.

## Consultas suportadas para filtros personalizados

Estes são os tipos de filtros que você pode usar:
  - Filtrar por repositório com `repo:`
  - Filtrar por tipo de discussão com `is:`
  - Filtrar por motivo de notificação com `reason:`{% ifversion fpt or ghec %}
  - Filtrar por autor de notificação com `author:`
  - Filtrar por organização com `org:`{% endif %}

### Consultas `repo:` com suporte

Para adicionar um filtro `repo:`, você deve incluir o proprietário do repositório na consulta: `repo:owner/repository`. Um proprietário é a organização ou o usuário que possui o ativo de {% data variables.product.prodname_dotcom %} que aciona a notificação. Por exemplo, `repo:octo-org/octo-repo` mostrará notificações disparadas no repositório octo-repo dentro da organização octo-org.

### Consultas `is:` com suporte

Para filtrar notificações de atividades específicas em {% data variables.location.product_location %}, você pode usar a consulta `is`. Por exemplo, para ver apenas as atualizações de convite do repositório, use `is:repository-invitation`{% ifversion not ghae %} e para ver somente {% data variables.product.prodname_dependabot_alerts %}, use `is:repository-vulnerability-alert`{% endif %}.

- `is:check-suite`
- `is:commit`
- `is:gist`
- `is:issue-or-pull-request`
- `is:release`
- `is:repository-invitation`
- `is:repository-vulnerability-alert`{% ifversion fpt or ghec %}
- `is:repository-advisory`{% endif %}
- `is:team-discussion`{% ifversion fpt or ghec %}
- `is:discussion`{% endif %}

Para obter informações de como reduzir notificações desnecessárias de {% data variables.product.prodname_dependabot_alerts %}, veja "[Como configurar notificações para o {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)".

Você também pode usar a consulta `is:` para descrever como a notificação passou pela triagem.

- `is:saved`
- `is:done`
- `is:unread`
- `is:read`

### Consultas `reason:` com suporte

Para filtrar as notificações por que você recebeu uma atualização, você pode usar a consulta `reason:`. Por exemplo, para ver as notificações quando você (ou uma equipe em que você está) é solicitado a examinar uma solicitação de pull, use `reason:review-requested`. Para obter mais informações, confira "[Sobre as notificações](/github/managing-subscriptions-and-notifications-on-github/about-notifications#reasons-for-receiving-notifications)".

| Consulta | Descrição |
|-----------------|-------------|
| `reason:assign` | Quando houver uma atualização em um problema ou numa pull request que você tenha sido designado responsável.
| `reason:author` | Quando você abriu uma pull request ou um problema e houve uma atualização ou novo comentário.
| `reason:comment`| Quando você comentou em um problema, numa pull request ou numa discussão em equipe.
| `reason:participating` | Quando você tiver comentado em um problema, solicitação de pull ou discussão de equipe ou tiver sido @mentioned (mencionado).
| `reason:invitation` | Quando você for convidado para uma equipe, organização ou repositório.
| `reason:manual` | Ao clicar em **Assinar** em um problema ou solicitação de pull que você ainda não foi inscrito.
| `reason:mention` | Você foi diretamente @mentioned.
| `reason:review-requested` | Você ou uma equipe da qual é integrante é solicitado a revisar uma pull request.
| `reason:security-alert` | Quando um alerta de segurança é emitido para um repositório.
| `reason:state-change`  | Quando o estado de uma pull request ou um problema é alterado. Por exemplo, um problema é fechado ou uma pull request é mesclada.
| `reason:team-mention` | Quando uma equipe da qual você é membro é @mentioned.
| `reason:ci-activity` | Quando um repositório tem uma atualização de CI, como um novo status de execução de fluxo de trabalho.

{% ifversion fpt or ghec %}
### Consultas `author:` com suporte

Para filtrar notificações por usuário, você pode usar a consulta `author:`. Um autor é o autor original da corrente (problema, pull request, discussões gist, e assim por diante) referente ao qual você está sendo notificado. Por exemplo, para ver as notificações para threads criados pelo usuário Octocat, use `author:octocat`.

### Consultas `org:` com suporte

Para filtrar notificações por organização, você pode usar a consulta `org`. A organização que você precisa especificar na consulta é a organização do repositório, para a qual você está sendo notificado em {% data variables.product.prodname_dotcom %}. Esta consulta é útil se você pertencer a várias organizações e desejar ver as notificações para uma organização específica.

Por exemplo, para ver as notificações da organização octo-org, use `org:octo-org`. 

{% endif %}

## Filtros personalizados de {% data variables.product.prodname_dependabot %}

{% ifversion fpt or ghec or ghes %} Se você usar o {% data variables.product.prodname_dependabot %} para manter as dependências atualizadas, poderá usar e salvar estes filtros personalizados:
- `is:repository_vulnerability_alert` para mostrar notificações para {% data variables.product.prodname_dependabot_alerts %}.
- `reason:security_alert` para mostrar notificações para {% data variables.product.prodname_dependabot_alerts %} e solicitações de pull de atualização de segurança.
- `author:app/dependabot` para mostrar notificações geradas por {% data variables.product.prodname_dependabot %}. Isto inclui {% data variables.product.prodname_dependabot_alerts %}, pull requests para atualizações de segurança e pull requests para atualizações de versão.

Para obter mais informações sobre {% data variables.product.prodname_dependabot %}, confira "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".
{% endif %}

{% ifversion ghae %}

Se você usa o {% data variables.product.prodname_dependabot %} para saber sobre dependências não seguras, use e salve estes filtros personalizados para ver as notificações do {% data variables.product.prodname_dependabot_alerts %}:
- `is:repository_vulnerability_alert` 
- `reason:security_alert`

Para obter mais informações sobre {% data variables.product.prodname_dependabot %}, confira "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
{% endif %}

