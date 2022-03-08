
### Verificando se o seu executor auto-hospedado foi adicionado com sucesso

After completing the steps to add a self-hosted runner, the runner and its status are now listed under {% ifversion fpt or ghec %}"Runners"{% elsif ghae or ghes %}"Self-hosted runners"{% endif %}.

A aplicação dos executores auto-hospedados deve estar activa para que o executor aceite os trabalhos. When the runner application is connected to {% data variables.product.product_name %} and ready to receive jobs, you will see the following message on the machine's terminal.

{% data reusables.actions.self-hosted-runner-connected-output %}
