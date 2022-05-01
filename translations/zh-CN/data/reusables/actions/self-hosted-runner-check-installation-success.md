
### 检查您的自托管运行器是否已成功添加

After completing the steps to add a self-hosted runner, the runner and its status are now listed under {% ifversion fpt or ghec %}"Runners"{% elsif ghae or ghes %}"Self-hosted runners"{% endif %}.

必须激活自托管运行器应用程序，运行器才能接受作业。 When the runner application is connected to {% data variables.product.product_name %} and ready to receive jobs, you will see the following message on the machine's terminal.

{% data reusables.actions.self-hosted-runner-connected-output %}
