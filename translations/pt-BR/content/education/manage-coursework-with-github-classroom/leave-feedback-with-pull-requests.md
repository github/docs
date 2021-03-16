---
title: Deixar feedback com pull requests
intro: É possível deixar feedback para seus alunos em um pull request especial dentro do repositório para cada atividade.
permissions: Pessoas com permissões de leitura em um repositório podem deixar o feedback em um pull request para o repositório.
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/leaving-feedback-in-github
---

### Sobre solicitações de feedback de pull requests para atividades

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

Ao habilitar o pull request para feedback em uma atribuição, {% data variables.product.prodname_classroom %} criará um pull request intitulada **Feedback** no repositório de atividade para cada aluno ou equipe. O pull request mostra automaticamente a cada commit que um aluno fez push para o branch padrão do repositório de atividade.

### Pré-requisitos

Para criar e acessar o pull request de feedback, você deve habilitar o pull request de feedback ao criar a atividade. {% data reusables.classroom.for-more-information-about-assignment-creation %}

### Dar feedback em um pull request para uma atividade

{% data reusables.classroom.sign-into-github-classroom %}
1. Na lista de salas de aula, clique na sala de aula com a atividade que você deseja revisar. ![Sala de aula na lista de salas de aula de uma organização](/assets/images/help/classroom/click-classroom-in-list.png)
{% data reusables.classroom.click-assignment-in-list %}
1. À direita do envio, clique em **Revisar**. ![Botão de revisão para a atividade na lista de envios para uma atividade](/assets/images/help/classroom/assignments-click-review-button.png)
1. Revise o pull request. Para obter mais informações, consulte "[Comentando em uma pull request](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)."

### Leia mais

- "[Integre {% data variables.product.prodname_classroom %} com um IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)"
