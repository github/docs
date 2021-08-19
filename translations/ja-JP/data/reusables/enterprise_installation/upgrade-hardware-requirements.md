{% if currentVersion ver_gt "enterprise-server@2.20" and currentVersion ver_lt "enterprise-server@3.2" %}

### {% data variables.product.prodname_ghe_server %} 3.0 以降の最小要件について

{% data variables.product.prodname_ghe_server %} 3.0 以降にアップグレードする前に、インスタンスにプロビジョニングしたハードウェアリソースを確認してください。 {% data variables.product.prodname_ghe_server %} 3.0 は、{% data variables.product.prodname_actions %} や {% data variables.product.prodname_registry %} などの新機能を導入しているため、バージョン 2.22 以前よりも多くのリソースが必要となります。 詳しい情報については、[{% data variables.product.prodname_ghe_server %} 3.0 のリリースノート](/enterprise-server@3.0/admin/release-notes)を参照してください。

次の表では、{% data variables.product.prodname_ghe_server %} 3.0 以降の要件の増加を**太字**で示しています。

| ユーザライセンス               |                        vCPUs |                                  メモリ |                         アタッチされたストレージ | ルートストレージ |
|:---------------------- | ----------------------------:| ------------------------------------:| ------------------------------------:| --------:|
| トライアル、デモ、あるいは10人の軽量ユーザ |   **4**<br/>_2 から増加_ |   **32 GB**<br/>_16 GB から増加_ | **150 GB**<br/>_100 GB から増加_ |   200 GB |
| 10-3000                |   **8**<br/>_4 から増加_ |   **48 GB**<br/>_32 GB から増加_ | **300 GB**<br/>_250 GB から増加_ |   200 GB |
| 3000-5000              |  **12**<br/>_8 から増加_ |                                64 GB |                               500 GB |   200 GB |
| 5000-8000              | **16**<br/>_12 から増加_ |                                96 GB |                               750 GB |   200 GB |
| 8000-10000+            | **20**<br/>_16 から増加_ | **160 GB**<br/>_128 GB から増加_ |                              1000 GB |   200 GB |

{% if currentVersion ver_gt "enterprise-server@2.21" %}

{% data variables.product.prodname_actions %}のハードウェアの要件に関する詳しい情報については「[{% data variables.product.prodname_ghe_server %}で{% data variables.product.prodname_actions %}を利用しはじめる](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)」を参照してください。

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% endif %}
