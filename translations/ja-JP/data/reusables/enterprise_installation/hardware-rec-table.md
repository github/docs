{% if currentVersion == "enterprise-server@2.22" %}

{% note %}

**ノート**: {% data variables.product.prodname_actions %}もしくは{% data variables.product.prodname_registry %}のベータに参加してこれらの機能を有効化している場合、インスタンスには追加のハードウェアリソースが必要になります。 ベータ機能を使うインスタンスの最小要件は、以下のテーブル中の**太字**に示されています。 詳しい情報については「[{% data variables.product.prodname_ghe_server %} 2.22のベータの機能](#beta-features-in-github-enterprise-server-222)」を参照してください。

{% endnote %}
{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
| ユーザライセンス               | vCPUs |    メモリ | アタッチされたストレージ | ルートストレージ |
|:---------------------- | -----:| ------:| ------------:| --------:|
| トライアル、デモ、あるいは10人の軽量ユーザ |     4 |  32 GB |       150 GB |   200 GB |
| 10-3000                |     8 |  48 GB |       300 GB |   200 GB |
| 3000-5000              |    12 |  64 GB |       500 GB |   200 GB |
| 5000-8000              |    16 |  96 GB |       750 GB |   200 GB |
| 8000-10000+            |    20 | 160 GB |      1000 GB |   200 GB |

{% else %}

| ユーザライセンス               |                                                                                                                                  vCPUs |                                                                                                                                            メモリ |                                                                                                                                   アタッチされたストレージ | ルートストレージ |
|:---------------------- | --------------------------------------------------------------------------------------------------------------------------------------:| ----------------------------------------------------------------------------------------------------------------------------------------------:| ----------------------------------------------------------------------------------------------------------------------------------------------:| --------:|
| トライアル、デモ、あるいは10人の軽量ユーザ |   2{% if currentVersion == "enterprise-server@2.22" %}<br/>or [**4**](#beta-features-in-github-enterprise-server-222){% endif %} |   16 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>or [**32 GB**](#beta-features-in-github-enterprise-server-222){% endif %} | 100 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>or [**150 GB**](#beta-features-in-github-enterprise-server-222){% endif %} |   200 GB |
| 10-3000                |   4{% if currentVersion == "enterprise-server@2.22" %}<br/>or [**8**](#beta-features-in-github-enterprise-server-222){% endif %} |   32 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>or [**48 GB**](#beta-features-in-github-enterprise-server-222){% endif %} | 250 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>or [**300 GB**](#beta-features-in-github-enterprise-server-222){% endif %} |   200 GB |
| 3000-5000              |  8{% if currentVersion == "enterprise-server@2.22" %}<br/>or [**12**](#beta-features-in-github-enterprise-server-222){% endif %} |                                                                                                                                          64 GB |                                                                                                                                         500 GB |   200 GB |
| 5000-8000              | 12{% if currentVersion == "enterprise-server@2.22" %}<br/>or [**16**](#beta-features-in-github-enterprise-server-222){% endif %} |                                                                                                                                          96 GB |                                                                                                                                         750 GB |   200 GB |
| 8000-10000+            | 16{% if currentVersion == "enterprise-server@2.22" %}<br/>or [**20**](#beta-features-in-github-enterprise-server-222){% endif %} | 128 GB{% if currentVersion == "enterprise-server@2.22" %}<br/>or [**160 GB**](#beta-features-in-github-enterprise-server-222){% endif %} |                                                                                                                                        1000 GB |   200 GB |

{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}

インスタンスのユーザに{% data variables.product.prodname_actions %}を有効化する計画なら、ハードウェア、外部ストレージ、ランナーの要件を「[{% data variables.product.prodname_ghe_server %}で{% data variables.product.prodname_actions %}を利用しはじめる](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)」でレビューしてください。

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% if currentVersion == "enterprise-server@2.22" %}

#### {% data variables.product.prodname_ghe_server %} 2.22のベータの機能

{% data variables.product.prodname_ghe_server %} 2.22は、{% data variables.product.prodname_actions %}、{% data variables.product.prodname_registry %}、{% data variables.product.prodname_code_scanning %}といった機能をベータで提供しています。 詳しい情報については「[{% data variables.product.prodname_ghe_server %} 2.22 リリースノート](/enterprise-server@2.22/admin/release-notes#2.22.0)を参照してください。

{% data variables.product.prodname_ghe_server %} 2.22のベータの機能を有効化した場合、インスタンスには追加のハードウェアリソースが必要です。 最小要件に関する詳しい情報については「[最小要件](#minimum-requirements)」を参照してください。

{% data variables.product.prodname_actions %}のハードウェアの要件に関する詳しい情報については「[{% data variables.product.prodname_ghe_server %}で{% data variables.product.prodname_actions %}を利用しはじめる](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)」を参照してください。

{% endif %}
