---
title: Managing code review settings for your team
intro: You can decrease noise for your team by limiting notifications when your team is requested to review a pull request.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team
  - /organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team
product: '{% data reusables.gated-features.code-review-assignment %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Code review settings
permissions: Team maintainers and organization owners can configure code review settings.
---

## About code review settings

{% if only-notify-requested-members %}
To reduce noise for your team and clarify individual responsibility for pull request reviews, you can configure code review settings.

- Team notifications
- Auto assignment

## About team notifications

When you choose to only notify requested team members, you disable sending notifications to the entire team when the team is requested to review a pull request if a specific member of that team is also requested for review. This is especially useful when a repository is configured with teams as code owners, but contributors to the repository often know a specific individual that would be the correct reviewer for their pull request. Para obter mais informações, consulte "[Sobre proprietários do código](/github/creating-cloning-and-archiving-repositories/about-code-owners)".

## About auto assignment
{% endif %}

When you enable auto assignment, any time your team has been requested to review a pull request, the team is removed as a reviewer and a specified subset of team members are assigned in the team's place. As atribuições de revisão de código permitem que você decida se toda a equipe ou apenas um subconjunto dos seus integrantes serão notificados quando for solicitado que uma equipe faça a revisão.

When code owners are automatically requested for review, the team is still removed and replaced with individuals unless a branch protection rule is configured to require review from code owners. If such a branch protection rule is in place, the team request cannot be removed and so the individual request will appear in addition.

{% ifversion fpt %}
Para desenvolver ainda mais as habilidades de colaboração da sua equipe, você pode fazer a atualização para {% data variables.product.prodname_ghe_cloud %}, que inclui funcionalidades como branches protegidos e proprietários de códigos em repositórios privados. {% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}

### Encaminhar algoritmos

Escolha as atribuições de revisão de código e atribua os revisores automaticamente com base em um dos dois algoritmos possíveis.

O algoritmo round robin (rotativo) escolhe os revisores com base em quem recebeu a solicitação de revisão menos recente e tem o foco em alternar entre todos os integrantes da equipe, independentemente do número de avaliações pendentes que possuem atualmente.

O algoritmo do balanço de carga escolhe os revisores com base no número total de solicitações de revisão recentes de cada integrante e considera o número de revisões pendentes para cada integrante. O algoritmo do balanço de carga tenta garantir que cada integrante da equipe revise um número igual de pull requests em qualquer período de 30 dias.

Todos os integrantes da equipe que definiram seu status como "Ocupado" não serão selecionados para revisão. Se todos os integrantes da equipe estiverem ocupados, o pull request permanecerá atribuído à própria equipe. Para obter mais informações sobre os status do usuário, consulte "[Configurando um status](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status)".

{% if only-notify-requested-members %}
## Configuring team notifications

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. In the left sidebar, click **Code review** ![Code review button](/assets/images/help/teams/review-button.png)
2. Select **Only notify requested team members.** ![Code review team notifications](/assets/images/help/teams/review-assignment-notifications.png)
3. Clique em **Save changes** (Salvar alterações).
{% endif %}

## Configuring auto assignment
{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. In the left sidebar, click **Code review** ![Code review button](/assets/images/help/teams/review-button.png)
6. Selecione **Habilitar atribuição automática**. ![Auto-assignment button](/assets/images/help/teams/review-assignment-enable.png)
7. Em "Quantos membros da equipe devem ser atribuídos para a revisão?, use o menu suspenso e escolha um número de revisores a serem atribuídos a cada pull request. ![Menu suspenso do número de revisores](/assets/images/help/teams/review-assignment-number.png)
8. Em "Algoritmo de encaminhamento", use o menu suspenso e escolha qual algoritmo você gostaria de usar. Para obter mais informações, consulte "[Algoritmos de encaminhamento](#routing-algorithms)". ![Menu suspenso do algoritmo de encaminhamento](/assets/images/help/teams/review-assignment-algorithm.png)
9. Opcionalmente, para sempre ignorar determinados membros da equipe, selecione **Nunca atribuir certos integrantes da equipe**. Em seguida, selecione um ou mais integrantes da equipe que você gostaria de ignorar sempre. ![Menu suspenso e caixa de seleção "Nunca atribuir certos integrantes da equipe"](/assets/images/help/teams/review-assignment-skip-members.png)
{% ifversion fpt or ghec or ghae-next or ghes > 3.2 %}
11. Opcionalmente, para incluir integrantes de equipes secundárias como possíveis revisores ao atribuir pedidos, selecione **Integrantes da equipe secundária**.
12. Opcionalmente, para contar todos os integrantes cuja avaliação já foi solicitada para o número total de integrantes a atribuir, selecione **Contar as solicitações existentes** existentes.
13. Opcionalmente, para remover a solicitação de revisão da equipe ao atribuir integrantes da equipe, selecione **Pedido de revisão de equipe**.
{%- else %}
10. Opcionalmente, para notificar apenas os integrantes da equipe escolhidos pela atribuição de revisão de código para cada solicitação de revisão de pull request, em "Notificações", selecione **Ao atribuir integrantes da equipe, não notifique toda a equipe.**
{%- endif %}
14. Clique em **Save changes** (Salvar alterações).

## Disabling auto assignment
{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. Selecione **Habilitar atribuição automática** para remover a marca. ![Botão da atribuição da revisão de código](/assets/images/help/teams/review-assignment-enable.png)
6. Clique em **Save changes** (Salvar alterações).
