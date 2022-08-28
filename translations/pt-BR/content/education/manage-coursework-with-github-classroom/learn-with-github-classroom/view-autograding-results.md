---
title: Visualizar resultados da avaliação automática
intro: Você pode ver os resultados da avaliação automática dentro do repositório para sua atividade.
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-students
  - /education/manage-coursework-with-github-classroom/view-autograding-results
---

### Sobre a avaliação automática

Seu professor pode configurar testes que verificam automaticamente seu trabalho quando você faz push para um repositório de atividades em {% data variables.product.product_location %}.

Se você é um aluno e seu instrutor configurou a avaliação automática para sua atribuição em {% data variables.product.prodname_classroom %}, você encontrará os resultados dos testes de avaliação automática no repositório da atividade. Se todos os testes tiverem êxito para um commit, você verá um sinal verde. Se qualquer teste falhar em um commit, você verá um X vermelho. Você pode ver os registros detalhados clicando na marca verde ou X vermelho.

### Visualizar resultados de avaliação automática para um repositório de atividade

{% data variables.product.prodname_classroom %} usa {% data variables.product.prodname_actions %} para executar testes de avaliação automática. Para obter mais informações sobre a visualização dos registros para um teste de avaliação automática, consulte "[Usar registros de execução de fluxo de trabalho](/actions/managing-workflow-runs/using-workflow-run-logs#viewing-logs-to-diagnose-failures)".

A aba **Ações** mostra o histórico completo de execuções de teste.

![Aba "Ações" com "Todos os fluxos de trabalho" selecionados](/assets/images/help/classroom/autograding-actions-tab.png)

Você pode clicar em uma execução de teste específico para revisar o resultado do registro, como erros de compilação e falhas de teste.

![O " fluxo de trabalho de avaliação automática de {% data variables.product.prodname_classroom %}" resultados de teste em {% data variables.product.prodname_actions %} ](/assets/images/help/classroom/autograding-actions-logs.png)

### Leia mais

- "[Sobre verificações de status](/github/collaborating-with-issues-and-pull-requests/about-status-checks)"
