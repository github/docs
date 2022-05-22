A workflow run is made up of one or more `jobs`, which run in parallel by default. ジョブを逐次的に実行するには、`jobs.<job_id>.needs`キーワードを使用して他のジョブに対する依存関係を定義します。

それぞれのジョブは、`runs-on`で指定されたランナー環境で実行されます。

ワークフローの利用限度内であれば、実行するジョブ数に限度はありません。 For more information, see {% ifversion fpt or ghec or ghes %}"[Usage limits and billing](/actions/reference/usage-limits-billing-and-administration)" for {% data variables.product.prodname_dotcom %}-hosted runners and {% endif %}"[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}" for self-hosted runner usage limits.{% elsif ghae %}."{% endif %}

If you need to find the unique identifier of a job running in a workflow run, you can use the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API. 詳しい情報については、「[ワークフロージョブ](/rest/reference/actions#workflow-jobs)」を参照してください。
