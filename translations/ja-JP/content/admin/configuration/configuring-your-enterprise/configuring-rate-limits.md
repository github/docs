---
title: Configuring rate limits (レート制限を構成する)
intro: '{% data variables.enterprise.management_console %} を使用することで、{% data variables.product.prodname_ghe_server %} のレート制限を設定できます。'
redirect_from:
  - /enterprise/admin/installation/configuring-rate-limits
  - /enterprise/admin/configuration/configuring-rate-limits
  - /admin/configuration/configuring-rate-limits
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
ms.openlocfilehash: 2a90093f833639fa247acc7292d9897728043005
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107550'
---
## {% data variables.product.prodname_enterprise_api %} のレート制限の有効化

{% data variables.product.prodname_enterprise_api %} のレート制限を有効化すると、個人あるいは認証されていないユーザーによるリソースの過剰な利用を回避できます。 詳細については、「[REST API のリソース](/rest/overview/resources-in-the-rest-api#rate-limiting)」を参照してください。

{% ifversion ghes %} 管理シェルの `ghe-config` ユーティリティを使用して、API レート制限からユーザーの一覧を除外できます。 詳細については、「[コマンド ライン ユーティリティ](/enterprise/admin/configuration/command-line-utilities#ghe-config)」を参照してください。
{% endif %}

{% note %}

**注意:** {% data variables.enterprise.management_console %} は、各レート制限の時間間隔 (毎分もしくは毎時) をリストします。

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. [レート制限] で **[HTTP API レート制限を有効にする]** を選択します。
![API レート制限を有効にするためのチェックボックス](/assets/images/enterprise/management-console/api-rate-limits-checkbox.png)
3. 各APIについて認証済み及び非認証リクエストの制限を入力するか、事前に入力されているデフォルトの制限を承認してください。
{% data reusables.enterprise_management_console.save-settings %}

{% ifversion enterprise-authentication-rate-limits %}
## {% data variables.enterprise.management_console %}に対する認証のレート制限の構成

{% data variables.enterprise.management_console %}のロックアウト時間とログイン試行の制限を構成できます。 ユーザーがログイン試行の制限を超えた場合、{% data variables.enterprise.management_console %}はロックアウト時間によって設定された期間、ロックされたままになります。 {% data reusables.enterprise_management_console.unlocking-management-console-with-shell %}


{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. [ログイン試行のレート制限] で、ロックアウト時間とログイン試行のレート制限を構成するか、事前入力された既定の設定をそのまま使用します。
![ロックアウト時間とログイン試行のレート制限を構成するためのフィールド](/assets/images/enterprise/management-console/login-attempt-rate-limiting.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}
## セカンダリ レート制限の有効化

セカンダリ レート制限を設定すると、{% data variables.location.product_location %}上のサービス全体のレベルを保護できます。

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% ifversion ghes %}
2. [レート制限] で **[セカンダリ レート制限を有効にする]** を選択します。
   ![セカンダリ レート制限を有効にするチェックボックス](/assets/images/enterprise/management-console/secondary-rate-limits-checkbox.png) {% else %}
2. [レート制限] で **[不正利用レート制限の有効化]** を選択します。
    ![不正利用レート制限を有効にするためのチェックボックス](/assets/images/enterprise/management-console/abuse-rate-limits-checkbox.png) {% endif %}
3. 総リクエストの制限、CPU制限、検索のためのCPU制限を入力するか、事前に入力されているデフォルトの制限を承認してください。
{% data reusables.enterprise_management_console.save-settings %}

## Git のレート制限を有効にする

{% data variables.product.company_short %} のスタッフのメンバーが推奨している場合は、リポジトリ ネットワークごと、またはユーザー ID ごとに Git レート制限を適用できます。 Git レート制限は 1 分あたりの同時操作数で表現され、現在の CPU 負荷に適応します。

{% warning %}

**警告:** {% data variables.product.company_short %} のスタッフのメンバーが直接推奨しない限り、この設定は無効のままにすることをお勧めします。 Git 操作は、CPU と RAM の使用率の主要な要因になることはほとんどありません。 この機能を有効にすると、負荷の高い条件下で Git 操作が失敗する可能性が高くなりますが、これらの条件の根本的な原因については対処されません。

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. [レート制限] で **[Git レート制限の有効化]** を選択します。
![Git レート制限を有効にするためのチェックボックス](/assets/images/enterprise/management-console/git-rate-limits-checkbox.png)
3. リポジトリネットワークまたはユーザ ID ごとの制限を入力してください。
  ![リポジトリ ネットワークとユーザー ID 制限のフィールド](/assets/images/enterprise/management-console/example-git-rate-limits.png) {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes > 3.4 %}

## {% data variables.product.prodname_actions %} のレート制限を構成する

{% data variables.product.prodname_actions %} のワークフロー実行にレート制限を適用できます。 {% data variables.product.prodname_actions %} について詳しくは、「[Enterprises 用の {% data variables.product.prodname_actions %} について](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)」をご覧ください。

### {% data variables.product.prodname_actions %} のレート制限について

{% data variables.product.product_name %} のインスタンスによって、{% data variables.product.prodname_actions %} の各ワークフロー ジョブがランナーに割り当てられます。 インスタンスが使用可能なランナーにジョブをすぐに割り当てることができない場合、ジョブはランナーが使用可能になるまでキューで待機します。 {% data variables.product.prodname_actions %} の負荷が常に高い場合、キューが滞る可能性があり、{% data variables.location.product_location %}のパフォーマンスが低下することがあります。

このパフォーマンスの低下を回避するには、{% data variables.product.prodname_actions %} のレート制限を構成できます。 このレート制限は、1 分あたりのジョブ実行数で表されます。 {% data variables.product.product_name %} は、インスタンス上のすべてのジョブ実行数の合計に対するレート制限を計算して適用します。 レート制限を超えた分の実行は、キューに入れられずに失敗します。 実行のアノテーションに次のエラーが表示されます。

> ワークフロー実行要求のレート制限を超えました。 しばらく待ってからもう一度実行してみてください。

レート制限を適切に設定すると、{% data variables.location.product_location %}は、日常の操作を妨げることなく、{% data variables.product.prodname_actions %} の異常な使用から保護されます。 正確なしきい値は、インスタンスで使用できるリソースと、全体的な負荷のプロファイルによって決まります。 {% data variables.product.prodname_actions %} のハードウェア要件について詳しくは、「[{% data variables.product.product_name %} での {% data variables.product.prodname_actions %} の概要](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements)」をご覧ください。

既定では、{% data variables.product.prodname_actions %} のレート制限は無効になっています。 {% data variables.product.product_name %} は、パフォーマンスを損なうことなく使用量の一時的な急増に対処できるため、このレート制限は、持続的な高負荷からの保護を目的としたものです。 パフォーマンスの問題が発生しない限り、レート制限は無効のままにすることをお勧めします。 場合によっては、{% data variables.contact.github_support %} が {% data variables.product.prodname_actions %} のレート制限を有効にするようお勧めすることがあります。 

### {% data variables.product.prodname_actions %} のレート制限を有効または無効にする

{% data reusables.enterprise_installation.ssh-into-instance %}
1. レート制限を有効にして構成するには、次の 2 つのコマンドを実行します。**RUNS-PER-MINUTE** は選んだ値に置き換えてください。

   ```shell
   ghe-config actions-rate-limiting.enabled true
   ghe-config actions-rate-limiting.queue-runs-per-minute RUNS-PER-MINUTE
   ```
1. レート制限を有効にした後で無効にするには、次のコマンドを実行します。

   ```
   ghe-config actions-rate-limiting.enabled false
   ```
1. 構成を適用するには、次のコマンドを実行します。

   ```
   ghe-config-apply
   ```
1. 設定の実行が完了するのを待ってください。

{% endif %}
