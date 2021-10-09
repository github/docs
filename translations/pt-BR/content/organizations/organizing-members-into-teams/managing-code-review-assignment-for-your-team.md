---
title: Gerenciar a atribuição de revisão de código para a sua equipe
intro: As atividades de revisão do código indicam claramente quais membros de uma equipe devem enviar uma revisão para um pull request.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team
product: '{% data reusables.gated-features.code-review-assignment %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Atribuição de revisão código
permissions: Team maintainers and organization owners can configure code review assignments.
---

## Sobre as atribuições de revisão de código

Ao usar atribuições de revisão de código, a qualquer momento em que for solicitado que a sua equipe revise um pull request, a equipe será removida como revisora e um subconjunto específico de integrantes da equipe será atribuído em seu lugar. As atribuições de revisão de código permitem que você decida se toda a equipe ou apenas um subconjunto dos seus integrantes serão notificados quando for solicitado que uma equipe faça a revisão.

Quando se solicita automaticamente que os proprietários de códigos façam uma revisão, a equipe será removida e substituída por indivíduos. As aprovações individuais não satisfazem o requisito para aprovação do proprietário do código em um branch protegido. Para obter mais informações, consulte "[Sobre proprietários do código](/github/creating-cloning-and-archiving-repositories/about-code-owners)".

{% ifversion fpt %}
To further enhance your team's collaboration abilities, you can upgrade to {% data variables.product.prodname_ghe_cloud %}, which includes features like protected branches and code owners on private repositories. {% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}

## Encaminhar algoritmos

Escolha as atribuições de revisão de código e atribua os revisores automaticamente com base em um dos dois algoritmos possíveis.

O algoritmo round robin (rotativo) escolhe os revisores com base em quem recebeu a solicitação de revisão menos recente e tem o foco em alternar entre todos os integrantes da equipe, independentemente do número de avaliações pendentes que possuem atualmente.

O algoritmo do balanço de carga escolhe os revisores com base no número total de solicitações de revisão recentes de cada integrante e considera o número de revisões pendentes para cada integrante. O algoritmo do balanço de carga tenta garantir que cada integrante da equipe revise um número igual de pull requests em qualquer período de 30 dias.

Any team members that have set their status to "Busy" will not be selected for review. If all team members are busy, the pull request will remain assigned to the team itself. For more information about user statuses, see "[Setting a status](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status)."

## Configurar a atribuição da revisão de código
{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. Na barra lateral esquerda, clique em **Atribuição de revisão de código** ![Botão da atribuição da revisão de código](/assets/images/help/teams/review-assignment-button.png)
6. Selecione **Habilitar atribuição automática**. ![Botão da atribuição da revisão de código](/assets/images/help/teams/review-assignment-enable.png)
7. Em "Quantos membros da equipe devem ser atribuídos para a revisão?, use o menu suspenso e escolha um número de revisores a serem atribuídos a cada pull request. ![Menu suspenso do número de revisores](/assets/images/help/teams/review-assignment-number.png)
8. Em "Algoritmo de encaminhamento", use o menu suspenso e escolha qual algoritmo você gostaria de usar. Para obter mais informações, consulte "[Algoritmos de encaminhamento](#routing-algorithms)". ![Menu suspenso do algoritmo de encaminhamento](/assets/images/help/teams/review-assignment-algorithm.png)
9. Opcionalmente, para sempre ignorar determinados membros da equipe, selecione **Nunca atribuir certos integrantes da equipe**. Em seguida, selecione um ou mais integrantes da equipe que você gostaria de ignorar sempre. ![Menu suspenso e caixa de seleção "Nunca atribuir certos integrantes da equipe"](/assets/images/help/teams/review-assignment-skip-members.png)
10. Optionally, to only notify the team members chosen by code review assignment for each pull review request, under "Notifications" select **If assigning team members, don't notify the entire team.** ![Code review assignment notifications](/assets/images/help/teams/review-assignment-notifications.png){% ifversion fpt or ghae or ghes > 3.2 %}
11. Optionally, to include members of child teams as potential reviewers when assigning requests, select **Child team members**.
12. Optionally, to count any members whose review has already been requested against the total number of members to assign, select **Count existing requests**.
13. Optionally, to remove the review request from the team when assigning team members, select **Team review request**.{% endif %}
14. Clique em **Save changes** (Salvar alterações).

## Desabilitar atribuição de revisão de código
{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. Selecione **Habilitar atribuição automática** para remover a marca. ![Botão da atribuição da revisão de código](/assets/images/help/teams/review-assignment-enable.png)
6. Clique em **Save changes** (Salvar alterações).
