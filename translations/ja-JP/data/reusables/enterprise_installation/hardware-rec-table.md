{% ifversion ghes %}

| ユーザライセンス               | vCPUs |    メモリ | アタッチされたストレージ | ルートストレージ |
|:---------------------- | -----:| ------:| ------------:| --------:|
| トライアル、デモ、あるいは10人の軽量ユーザ |     4 |  32 GB |       150 GB |   200 GB |
| 10-3000                |     8 |  48 GB |       300 GB |   200 GB |
| 3000-5000              |    12 |  64 GB |       500 GB |   200 GB |
| 5000-8000              |    16 |  96 GB |       750 GB |   200 GB |
| 8000-10000+            |    20 | 160 GB |      1000 GB |   200 GB |

{% else %}

| ユーザライセンス               | vCPUs |    メモリ | アタッチされたストレージ | ルートストレージ |
|:---------------------- | -----:| ------:| ------------:| --------:|
| トライアル、デモ、あるいは10人の軽量ユーザ |     2 |  16 GB |       100 GB |   200 GB |
| 10-3000                |     4 |  32 GB |       250 GB |   200 GB |
| 3000-5000              |     8 |  64 GB |       500 GB |   200 GB |
| 5000-8000              |    12 |  96 GB |       750 GB |   200 GB |
| 8000-10000+            |    16 | 128 GB |      1000 GB |   200 GB |

{% endif %}

{% ifversion ghes %}

インスタンスのユーザに{% data variables.product.prodname_actions %}を有効化する計画なら、ハードウェア、外部ストレージ、ランナーの要件を「[{% data variables.product.prodname_ghe_server %}で{% data variables.product.prodname_actions %}を利用しはじめる](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)」でレビューしてください。

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}
