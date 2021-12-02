- [最小要件](#minimum-requirements)
- [ストレージ](#storage)
- [CPU及びメモリ](#cpu-and-memory)

### 最小要件

{% data variables.product.product_location %}のユーザライセンス数に応じた様々なハードウェア構成をおすすめします。 最小要件以上のリソースを提供すれば、インスタンスのパフォーマンスとスケーラビリティは向上します。

{% data reusables.enterprise_installation.hardware-rec-table %}

### ストレージ

{% data variables.product.prodname_ghe_server %}には、高い秒あたりの入出力操作（IOPS）と低いレイテンシを持つ高性能なSSDをおすすめします。 ワークロードはI/O集中的です。 ベアメタルのハイパーバイザを使用するなら、直接アタッチされたディスクか、ストレージエリアネットワーク（SAN）からのディスクを利用することをおすすめします。

インスタンスには、ルートディスクとは別の永続化用のデータディスクが必要です。 詳しい情報については「[システムの概要](/enterprise/admin/guides/installation/system-overview)」を参照してください。

{% ifversion ghes %}

To configure {% data variables.product.prodname_actions %}, you must provide external blob storage. 詳しい情報については、「[{% data variables.product.prodname_ghe_server %} の {% data variables.product.prodname_actions %} を使ってみる](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server##external-storage-requirements)」を参照してください。

{% endif %}

The available space on the root filesystem will be 50% of the total disk size. 新しいインスタンスを構築するか、既存のインスタンスを利用して、インスタンスのルートディスクのサイズを変更できます。 For more information, see "[System overview](/enterprise/admin/guides/installation/system-overview#storage-architecture)" and "[Increasing storage capacity](/enterprise/{{ currentVersion }}/admin/guides/installation/increasing-storage-capacity)."

### CPU及びメモリ

{% data variables.product.prodname_ghe_server %}が必要とするCPU及びメモリリソースは、ユーザ、自動化、インテグレーションのアクティビティのレベルによります。

{% ifversion ghes %}

If you plan to enable {% data variables.product.prodname_actions %} for the users of your {% data variables.product.prodname_ghe_server %} instance, you may need to provision additional CPU and memory resources for your instance. 詳しい情報については「[{% data variables.product.prodname_ghe_server %}のための{% data variables.product.prodname_actions %}の利用開始](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)」を参照してください。

{% endif %}

{% data reusables.enterprise_installation.increasing-cpus-req %}

{% warning %}

**警告:** {% data variables.product.prodname_ghe_server %}上の外部システムのアクティビティを通知するwebhookイベントを設定することを、ユーザにおすすめします。 変更の自動化されたチェック、あるいは_ポーリング_は、インスタンスのパフォーマンスとスケーラビリティに悪影響を与えます。 詳しい情報については「[webhookについて](/github/extending-github/about-webhooks)」を参照してください。

{% endwarning %}

{% data variables.product.prodname_ghe_server %}のキャパシティとパフォーマンスのモニタリングに関する詳しい情報については「[アプラインアンスのモニタリング](/admin/enterprise-management/monitoring-your-appliance)」を参照してください。

インスタンスのCPUあるいはメモリリソースは増やすことができます。 詳しい情報については、「[CPU またはメモリリソースを増やす](/enterprise/admin/installation/increasing-cpu-or-memory-resources)」を参照してください。
