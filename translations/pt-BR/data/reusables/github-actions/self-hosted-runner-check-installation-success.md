
### Verificando se o seu executor auto-hospedado foi adicionado com sucesso

After completing the steps to add a self-hosted runner, the runner and its status are now listed under {% ifversion fpt or ghec %}"Runners"{% elsif ghae or ghes %}"Self-hosted runners"{% endif %}.

A aplicação dos executores auto-hospedados deve estar activa para que o executor aceite os trabalhos. Quando o aplicativo do executor estiver conectado a {% data variables.product.product_name %} e pronto para receber trabalhos, você verá a seguinte mensagem no terminal da máquina.

{% data reusables.github-actions.self-hosted-runner-connected-output %}

Para obter mais informações, consulte "[Monitoring and troubleshooting self-hosted runners](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)."
