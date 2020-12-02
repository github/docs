---
title: Gerenciar a atribuição de revisão de código para a sua equipe
intro: As atividades de revisão do código indicam claramente quais membros de uma equipe devem enviar uma revisão para um pull request.
product: '{% data reusables.gated-features.code-review-assignment %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
  github-ae: '*'
---

Os mantenedores de equipe e os proprietários da organização podem configurar atribuições de revisão de código.

### Sobre as atribuições de revisão de código

Ao usar atribuições de revisão de código, a qualquer momento em que for solicitado que a sua equipe revise um pull request, a equipe será removida como revisora e um subconjunto específico de integrantes da equipe será atribuído em seu lugar. As atribuições de revisão de código permitem que você decida se toda a equipe ou apenas um subconjunto dos seus integrantes serão notificados quando for solicitado que uma equipe faça a revisão.

Quando se solicita automaticamente que os proprietários de códigos façam uma revisão, a equipe será removida e substituída por indivíduos. As aprovações individuais não satisfazem o requisito para aprovação do proprietário do código em um branch protegido. Para obter mais informações, consulte "[Sobre proprietários do código](/github/creating-cloning-and-archiving-repositories/about-code-owners)".

### Encaminhar algoritmos

Escolha as atribuições de revisão de código e atribua os revisores automaticamente com base em um dos dois algoritmos possíveis.

O algoritmo round robin (rotativo) escolhe os revisores com base em quem recebeu a solicitação de revisão menos recente e tem o foco em alternar entre todos os integrantes da equipe, independentemente do número de avaliações pendentes que possuem atualmente.

O algoritmo do balanço de carga escolhe os revisores com base no número total de solicitações de revisão recentes de cada integrante e considera o número de revisões pendentes para cada integrante. O algoritmo do balanço de carga tenta garantir que cada integrante da equipe revise um número igual de pull requests em qualquer período de 30 dias.

### Configurar a atribuição da revisão de código
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. Na barra lateral esquerda, clique em **Atribuição de revisão de código** ![Botão da atribuição da revisão de código](/assets/images/help/teams/review-assignment-button.png)
6. Selecione **Habilitar atribuição automática**. ![Botão da atribuição da revisão de código](/assets/images/help/teams/review-assignment-enable.png)
7. Em "Quantos membros da equipe devem ser atribuídos para a revisão?, use o menu suspenso e escolha um número de revisores a serem atribuídos a cada pull request. ![Menu suspenso do número de revisores](/assets/images/help/teams/review-assignment-number.png)
8. Em "Algoritmo de encaminhamento", use o menu suspenso e escolha qual algoritmo você gostaria de usar. Para obter mais informações, consulte "[Algoritmos de encaminhamento](#routing-algorithms)". ![Menu suspenso do algoritmo de encaminhamento](/assets/images/help/teams/review-assignment-algorithm.png)
9. Opcionalmente, para sempre ignorar determinados membros da equipe, selecione **Nunca atribuir certos integrantes da equipe**. Em seguida, selecione um ou mais integrantes da equipe que você gostaria de ignorar sempre. ![Menu suspenso e caixa de seleção "Nunca atribuir certos integrantes da equipe"](/assets/images/help/teams/review-assignment-skip-members.png)
10. Opcionalmente, para notificar apenas os integrantes da equipe escolhidos pela atribuição de revisão de código para cada solicitação de revisão de pull request, em "Notificações", selecione **Ao atribuir integrantes da equipe, não notifique toda a equipe.** ![Notificações de atribuições de revisão de código](/assets/images/help/teams/review-assignment-notifications.png)
11. Clique em **Save changes** (Salvar alterações).

### Desabilitar atribuição de revisão de código
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. Selecione **Habilitar atribuição automática** para remover a marca. ![Botão da atribuição da revisão de código](/assets/images/help/teams/review-assignment-enable.png)
6. Clique em **Save changes** (Salvar alterações).
