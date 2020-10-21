---
title: Gerenciamento de notificações da sua caixa de entrada
intro: 'Use a sua caixa de entrada para rapidamente rastrear e sincronizar as notificações entre os e-mails{% if currentVersion == "free-pro-team@latest" %} e dispositivos móveis{% endif %}.'
redirect_from:
  - /articles/marking-notifications-as-read
  - /articles/saving-notifications-for-later
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
---

### Sobre sua caixa de entrada

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.notifications-v2.notifications-inbox-required-setting %} Para obter mais informações, consulte "[Configurando notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)".
{% endif %}

Para acessar sua caixa de entrada de notificações, no canto superior direito de qualquer página, clique em {% octicon "bell" aria-label="The notifications bell" %}.

  ![Notificação indicando qualquer mensagem não lida](/assets/images/help/notifications/notifications_general_existence_indicator.png)

Sua caixa de entrada mostra todas as notificações que você não cancelou sua inscrição ou marcou como **Concluído.** Você pode personalizar sua caixa de entrada para melhor se adequar ao seu fluxo de trabalho usando filtros, visualizando todas ou apenas notificações não lidas e agrupando suas notificações para obter uma visão geral.

  ![visualização da caixa de entrada](/assets/images/help/notifications-v2/inbox-view.png)

Por padrão, sua caixa de entrada mostrará notificações lidas e não lidas. Para ver apenas notificações não lidas, clique em **Não lidas** ou use a consulta `is:unread`.

  ![visualização da caixa de entrada não lida](/assets/images/help/notifications-v2/unread-inbox-view.png)

### Opções de triagem

Você tem várias opções para fazer triagem de notificações a partir de sua caixa de entrada.

| Opções de triagem   | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Salvar              | Salva a sua notificação para revisão posterior. Para salvar uma notificação, à direita da notificação, clique em {% octicon "bookmark" aria-label="The bookmark icon" %}. <br> <br> As notificações salvas são mantidas indefinidamente e podem ser vistas clicando em **Salvo** na barra lateral ou com a consulta `is:saved`. Se sua notificação salva tiver mais de 5 meses e tornar-se não salva, a notificação desaparecerá da sua caixa de entrada em um dia. |
| Concluído           | Marca uma notificação como concluída e remove a notificação da sua caixa de entrada. Você pode ver todas as notificações concluídas clicando em **Concluido** na barra lateral ou com a consulta `is:done`. Notificações marcadas como **Concluídas** são salvas por 5 meses.                                                                                                                                                                                                   |
| Cancelar assinatura | Remove automaticamente a notificação de sua caixa de entrada e cancela sua assinatura da conversa até que você seja @mencionado, uma equipe na qual você esteja seja @mencionada, ou você seja solicitado para revisão.                                                                                                                                                                                                                                                         |
| Leitura             | Marca uma notificação como lida. Para ver apenas as notificações lidas na sua caixa de entrada, use a consulta `is:read`. Esta consulta não inclui notificações marcadas como **Concluído**.                                                                                                                                                                                                                                                                                    |
| Não lido            | Marca uma notificação como não lida. Para ver apenas as notificações não lidas na sua caixa de entrada, use a consulta `is:read`.                                                                                                                                                                                                                                                                                                                                               |

Para ver os atalhos de teclado disponíveis, consulte "[Atalhos de teclado](/github/getting-started-with-github/keyboard-shortcuts#notifications)".

Antes de escolher uma opção de triagem, primeiro você pode pré-visualizar os detalhes da sua notificação e investigar. Para obter mais informações, consulte “[Fazendo triagem de uma só notificação](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification)".

### Fazer triagem de várias notificações ao mesmo tempo

Para fazer triagem de várias notificações de uma só vez, selecione as notificações relevantes e use o menu suspenso de {% octicon "kebab-horizontal" aria-label="The edit icon" %} para escolher uma opção de triagem.

![Menu suspenso com opções de triagem e notificações selecionadas](/assets/images/help/notifications-v2/triage-multiple-notifications-together.png)

### Filtros de notificação padrão

Por padrão, sua caixa de entrada tem filtros para quando você é responsável, participa de um thread, é solicitado a rever uma pull request ou quando seu nome de usuário for @mencionado diretamente ou quando uma equipe da qual você é integrante é @mencionada.

  ![Filtros personalizados padrão](/assets/images/help/notifications-v2/default-filters.png)

### Personalizando sua caixa de entrada com filtros personalizados

Você pode adicionar até 15 dos seus próprios filtros personalizados.

{% data reusables.notifications.access_notifications %}
2. Para abrir as configurações de filtro, na barra lateral esquerda, próximo de "Filtros", clique em {% octicon "gear" aria-label="The Gear icon" %}.

  {% tip %}

  **Dica:** Você pode visualizar rapidamente os resultados da caixa de entrada de um filtro, criando uma consulta na sua caixa de entrada e clicando em **Salvar**, que abre as configurações de filtro personalizado.

  {% endtip %}

3. Adicione um nome para seu filtro e uma consulta de filtro. Por exemplo, para ver apenas notificações para um repositório específico, é possível criar um filtro usando a consulta `repo:octocat/open-source-project-name reason:participating`. Você também pode adicionar emojis com um teclado de emojis nativo. Para obter uma lista de consultas de pesquisa compatíveis, consulte "[Consultas suportadas para filtros personalizados](#supported-queries-for-custom-filters)".

  ![Exemplo de filtro personalizado](/assets/images/help/notifications-v2/custom-filter-example.png)

4. Clique em **Criar**.

### Limitações de filtro personalizadas

Filtros personalizados atualmente não suportam:
  - Pesquisa de texto completo em sua caixa de entrada, incluindo busca de pull request ou títulos de problema.
  - Distinguindo entre filtros de consulta `is:issue`, `is:pr` e `is:pull-request`. Essas consultas retornarão problemas e pull requests.
  - Criando mais de 15 filtros personalizados.
  - Alterando os filtros padrão ou sua ordenação.

### Consultas suportadas para filtros personalizados

Existem três tipos de filtros que você pode usar:
  - Filtrar por repositório com `repo:`
  - Filtrar por tipo de discussão com `is:`
  - Filtrar por motivo de notificação com `reason:`

Para adicionar um filtro `repo:`, você deve incluir o proprietário do repositório na consulta. Por exemplo, `repo:atom/atom` representa o repositório Atom pertencente à organização Atom

#### Consultas suportadas `reason:`

Para filtrar notificações por motivos pelos quais recebeu uma atualização, você pode usar a consulta `reason:`. Por exemplo, para ver notificações quando você (ou uma equipe da qual você participa) é solicitado a rever uma pull request, use `reason:review-requested`. Para obter mais informações, consulte "[Sobre notificações](/github/managing-subscriptions-and-notifications-on-github/about-notifications#reasons-for-receiving-notifications)".

| Consulta                  | Descrição                                                                                                                         |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `reason:assign`           | Quando houver uma atualização em um problema ou numa pull request que você tenha sido designado responsável.                      |
| `reason:author`           | Quando você abriu uma pull request ou um problema e houve uma atualização ou novo comentário.                                     |
| `reason:comment`          | Quando você comentou em um problema, numa pull request ou numa discussão em equipe.                                               |
| `reason:participating`    | Quando você tiver comentado um problema, uma pull request ou numa discussão de equipe ou tiver sido @mencionado.                  |
| `reason:invitation`       | Quando você for convidado para uma equipe, organização ou repositório.                                                            |
| `reason:manual`           | Quando você clicar em **Assinar** em um problema ou uma pull request que você ainda não estava inscrito.                          |
| `reason:mention`          | Você foi @mencionado diretamente.                                                                                                 |
| `reason:review-requested` | Você ou uma equipe da qual é integrante é solicitado a revisar uma pull request.                                                  |
| `reason:security-alert`   | Quando um alerta de segurança é emitido para um repositório.                                                                      |
| `reason:state-change`     | Quando o estado de uma pull request ou um problema é alterado. Por exemplo, um problema é fechado ou uma pull request é mesclada. |
| `reason:team-mention`     | Quando uma equipe da qual você é integrante é @mencionada.                                                                        |
| `reason:ci-activity`      | Quando um repositório tem uma atualização de CI, como um novo status de execução de fluxo de trabalho.                            |

#### Consultas suportadas `is:`

Para filtrar notificações para uma atividade específica no {% data variables.product.product_name %}, você pode usar a  consulta `is`. Por exemplo, para visualizar apenas atualizações de convite do repositório, use `is:repository-invitation` e para visualizar apenas {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 1" %}{% data variables.product.prodname_dependabot_short %}{% else %} alertas de segurança{% endif %}, use `is:repository-vulnerability-alert`.

- `is:check-suite`
- `is:commit`
- `is:gist`
- `is:issue-or-pull-request`
- `is:release`
- `is:repository-invitation`
- `is:repository-vulnerability-alert`
- `is:repository-advisory`
- `is:team-discussion`

Você também pode usar a consulta `is:` para descrever como a notificação passou pela triagem.

- `is:saved`
- `is:done`
- `is:unread`
- `is:read`
