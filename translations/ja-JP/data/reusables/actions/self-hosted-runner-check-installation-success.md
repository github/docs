
### セルフホストランナーの追加に成功したことの確認

After completing the steps to add a self-hosted runner, the runner and its status are now listed under {% ifversion fpt or ghec %}"Runners"{% elsif ghae or ghes %}"Self-hosted runners"{% endif %}.

ジョブをランナーが受け付けるためには、セルフホストランナーアプリケーションが動作していなければなりません。 When the runner application is connected to {% data variables.product.product_name %} and ready to receive jobs, you will see the following message on the machine's terminal.

{% data reusables.actions.self-hosted-runner-connected-output %}
