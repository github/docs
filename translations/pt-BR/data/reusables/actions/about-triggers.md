Os acionadores de fluxo de trabalho são eventos que fazem com que um fluxo de trabalho seja executado. Esses eventos podem ser:

- Eventos que ocorrem no repositório do fluxo de trabalho
- Eventos que ocorrem fora de {% data variables.product.product_name %} e acionam um evento `repository_dispatch` em {% data variables.product.product_name %}
- Horários agendados
- Manual

Por exemplo, você pode configurar o fluxo de trabalho para executar quando um push é feito no branch padrão do seu repositório, quando uma versão é criada, ou quando um problema é aberto.
