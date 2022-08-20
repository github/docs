ワークフローの実行は、1つ以上の`ジョブ`で構成されており、それらのジョブはデフォルトでは並列に実行されます。 ジョブを逐次的に実行するには、`jobs.<job_id>.needs`キーワードを使用して他のジョブに対する依存関係を定義します。

それぞれのジョブは、`runs-on`で指定されたランナー環境で実行されます。

ワークフローの利用限度内であれば、実行するジョブ数に限度はありません。 詳しい情報については{% ifversion fpt or ghec or ghes %}{% data variables.product.prodname_dotcom %}ホストランナーの「[使用制限と支払い](/actions/reference/usage-limits-billing-and-administration)」及び{% endif %}{% ifversion fpt or ghec or ghes %}セルフホストランナーの使用制限に関する{% elsif ghae %}{% endif %}「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)」を参照してください。

ワークフローの実行中で動作しているジョブの一意の識別子を知る必要がある場合は、{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} APIが利用できます。 詳しい情報については、「[ワークフロージョブ](/rest/reference/actions#workflow-jobs)」を参照してください。
