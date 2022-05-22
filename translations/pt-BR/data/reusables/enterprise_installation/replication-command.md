1. Para iniciar a replicação dos datastores, use o comando `ghe-repl-start`.
  ```shell
  $ ghe-repl-start
  ```
    {% warning %}

    **Aviso:** `ghe-repl-start` causa uma breve interrupção no servidor principal, durante o qual os usuários podem ver erros internos do servidor. Para fornecer uma mensagem mais amigável, execute `ghe-maintenance -s` no nó principal antes de executar `ghe-repl-start` no nó de réplica para colocar o appliance no modo de manutenção. Uma vez iniciada a réplica, desabilite o modo de manutenção com `ghe-maintenance -u`.

    {% endwarning %}
