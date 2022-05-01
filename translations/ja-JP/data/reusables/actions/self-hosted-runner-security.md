セルフホストランナーは、プライベートリポジトリでのみ利用することをおすすめします。 これは、ワークフロー中でコードを実行するPull Requestを作成することによって、リポジトリのフォークが危険なコードをセルフホストランナーマシン上で実行できる可能性があるためです。

{%- ifversion fpt or ghec  %}
To help mitigate this risk for public repositories, you can require approvals for workflow runs from first-time contributors. 詳しい情報については「[パブリックなフォークからのワークフローの実行の承認](/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)」を参照してください。
{%- endif %}