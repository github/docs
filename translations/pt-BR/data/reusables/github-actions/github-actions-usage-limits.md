Há alguns limites no uso do {% data variables.product.prodname_actions %} , e variará dependendo se você usa executores hospedados {% data variables.product.prodname_dotcom %}ou auto-hospedados. Estes limites estão sujeitos a mudanças.

- **Tempo de execução de tarefas ** - Cada trabalho em um fluxo de trabalho pode ser executado por até 6 horas de tempo de execução. Se um trabalho atingir esse limite, o trabalho será terminado e não será completado. Este limite não se aplica a executores auto-hospedados.
- **Tempo de execução do fluxo de trabalho** - Cada execução do fluxo de trabalho é limitada a 72 horas. Se a execução de um fluxo de trabalho atingir esse limite, a execução do fluxo de trabalho será cancelada. Este limite também se aplica a executores auto-hospedados.
- **Tempo de fila de tarefas** - Cada trabalho para executores auto-hospedados pode ser enfileirado por um máximo de 24 horas. Se um executor auto-hospedado não começar a executar a tarefa dentro deste limite, a tarefa será encerrada e não será concluída. Este limite não se aplica a executores hospedados para {% data variables.product.prodname_dotcom %}.
- **Solicitações de API** - Você pode executar até 1000 solicitações de API por hora em todas as ações dentro de um repositório. Se excedido, as chamadas de API adicionais falharão, o que pode causar falha nas tarefas. Este limite também se aplica a executores auto-hospedados.
- **Tarefas correntes** - O número de trabalhos simultâneos que você pode executar em sua conta depende do seu plano GitHub, conforme indicado na tabela a seguir. Se excedido, quaisquer tarefas adicionais serão colocadas na fila. Não há limites de concorrência para os executores auto-hospedados.

  | Plano GitHub | Total de tarefas simultâneas | Máximo de tarefas macOS simultâneas |
  | ------------ | ---------------------------- | ----------------------------------- |
  | Grátis       | 20                           | 5                                   |
  | Pro          | 40                           | 5                                   |
  | Equipe       | 60                           | 5                                   |
  | Enterprise   | 180                          | 50                                  |
- **Matriz de vagas** - {% data reusables.github-actions.matrix-limits %}
