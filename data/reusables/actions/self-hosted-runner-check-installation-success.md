
### Checking that your self-hosted runner was successfully added

After completing the steps to add a self-hosted runner, the runner and its status are now listed under {% ifversion fpt or ghec %}"Runners"{% elsif ghes %}"Self-hosted runners"{% endif %}.

The self-hosted runner application must be active for the runner to accept jobs. When the runner application is connected to {% data variables.product.product_name %} and ready to receive jobs, you will see the following message on the machine's terminal.

{% data reusables.actions.self-hosted-runner-connected-output %}
