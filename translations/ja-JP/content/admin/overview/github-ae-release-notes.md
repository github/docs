---
title: GitHub AE リリースノート
intro: 2021 年 3 月 1 日
versions:
  github-ae: '*'
---

### 機能

#### {% data variables.product.prodname_actions %} ベータ

[{% data variables.product.prodname_actions %}](https://github.com/features/actions) は、CI/CD およびワークフローの自動化のための強力で柔軟性の高いソリューションです。 詳しい情報については、「[{% data variables.product.prodname_actions %} の紹介](/actions/learn-github-actions/introduction-to-github-actions)」を参照してください。

{% data variables.product.product_name %} の {% data variables.product.prodname_actions %} は、{% data variables.product.product_name %} でのみ使用可能な新しい [{% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/about-ae-hosted-runners) を使用します。これにより、ランナーのサイズ、イメージ、およびネットワーク設定をカスタマイズできます。 これらのランナーは、自動スケーリングと管理を備えた完成したサービスの CI コンピューティング環境であり、{% data variables.product.company_short %} によって完全に管理されます。 ベータでは、{% data variables.actions.hosted_runner %} を無料で使用できます。 詳しい情報については、「[{% data variables.actions.hosted_runner %} を追加する](/actions/using-github-hosted-runners/adding-ae-hosted-runners)」を参照してください。

このアップグレード中に {% data variables.product.prodname_actions %} を有効にすると、「GitHub Actions」という名前の 2 つの Organization (@**actions** および @**github**) が {% data variables.product.product_location %} に表示されることに注意してください。 これらの Organization は {% data variables.product.prodname_actions %} で要求されます。 @**ghost** および @**actions**という名前のユーザは、Audit log にこれらの Organization を作成するためのアクターとして表示されます。

#### {% data variables.product.prodname_registry %} ベータ

[{% data variables.product.prodname_registry %}](https://github.com/features/packages) はパッケージホスティングサービスで、{% data variables.product.prodname_actions %}、API、および webhook とネイティブに統合されています。 コード、継続的インテグレーション、およびデプロイメントソリューションを含む[エンドツーエンドの DevOps ワークフロー](/github-ae@latest/packages/quickstart)を作成します。 詳しい情報については「[{% data variables.product.prodname_registry %}について](/packages/learn-github-packages/about-github-packages)」を参照してください。

During this beta, {% data variables.product.prodname_registry %} is free of charge to {% data variables.product.product_name %} customers.

#### {% data variables.product.prodname_GH_advanced_security %} ベータ

{% data variables.product.prodname_GH_advanced_security %} is available in beta and includes both {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_secret_scanning %}. Repository administrators and organization owners can opt into {% data variables.product.prodname_advanced_security %} features in the settings for a repository or organization, within the **Security and analysis** tab. 詳しい情報については、「[{% data variables.product.prodname_GH_advanced_security %} について](/github/getting-started-with-github/about-github-advanced-security)」を参照してください。

During this beta, {% data variables.product.prodname_advanced_security %} features are free of charge to {% data variables.product.product_name %} customers.

#### アイデンティティプロバイダ (IdP) での Team の管理

SCIM (System for Cross-domain Identity Management) を使用しているお客様は、Azure Active Directory のセキュリティグループを {% data variables.product.company_short %} Team と同期できるようになりました。 チームがセキュリティグループにリンクされると、ユーザが割り当てられたセキュリティグループに追加または削除されたときに、メンバーシップは {% data variables.product.product_name %} で自動的に更新されます。 詳しい情報については「[アイデンティティプロバイダグループとTeamの同期](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)」を参照してください。

#### IP 許可リストベータ

Enterprise and organization owners can now use IP allow lists to restrict traffic to the enterprise or specific organizations. After you configure an IP allow list, only visitors from IP addresses on the list are permitted to access the resources protected by the list.

This functionality is provided in addition to the ability to request network security group changes that filter traffic to the entirety of the {% data variables.product.product_name %} tenant.

For more information, see "[Restricting network traffic to your enterprise](/admin/configuration/restricting-network-traffic-to-your-enterprise)" and "[Managing allowed IP addresses for your organization](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)."

#### Pull request auto-merge

With auto-merge, pull requests can be set to merge automatically when all merge requirements have been satisfied. This saves users from needing to constantly check the state of their pull requests just to merge them. Auto-merge can be enabled by a user with permission to merge and on pull requests that have unsatisfied merge requirements (like missing approvals or pending or failing required status checks). 詳しい情報については「[Pull Requestの自動マージ](/github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request)」を参照してください。

### 変更

#### 開発者に関する変更

- Organization のオーナーは、Organization 内のリポジトリからの {% data variables.product.prodname_pages %} サイトの[公開を無効化](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)できるようになりました。 これにより、既存のサイトが非公開になることはありません。
- {% data variables.product.prodname_pages %} を使用するリポジトリは、[任意のブランチからビルドおよびデプロイ](/pages/getting-started-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites)できるようになりました。
- Issue またはプルリクエストを作成するときに、`return` キーまたは `enter` キーを押すと、箇条書き、番号、およびタスクのリスト構文がオートコンプリートされるようになりました。
- リポジトリページからリポジトリ内のディレクトリを削除できるようになりました。 ディレクトリに移動するとき、[Add file] ボタンの横にある新しいケバブボタンで、ディレクトリを削除できます。
- 「#」の後に複数の単語を検索することで、[Issue やプルリクエストの参照](/github/writing-on-github/basic-writing-and-formatting-syntax#referencing-issues-and-pull-requests)がより簡単かつ迅速になりました。

##### 管理に関する変更

- Enterprise owners can now [publish a mandatory message](/admin/user-management/customizing-user-messages-for-your-enterprise#creating-a-mandatory-message). メッセージはすべてのユーザに表示され、確認する必要があります。 これは、重要な情報、利用規約、またはポリシーを表示するために使用できます。
- {% data variables.product.prodname_github_app%} 単一ファイルパス権限で[最大 10 個のファイルをサポート](/developers/apps/creating-a-github-app-using-url-parameters)できるようになりました。
- {% data variables.product.prodname_github_app%} を設定する場合、認証コールバック URL は必須フィールドです。 ここで、インテグレータが複数のコールバック URL を指定できるようにします。 {% data variables.product.product_name %} は、リクエストからのコールバック URL がリストされていない場合、認証を拒否します。
- [新しい API エンドポイント](/rest/reference/apps#create-a-scoped-access-token)を使用すると、特定のリポジトリを対象とするユーザからサーバーへのトークンをユーザーからサーバーへのトークンに交換できます。
- [Team メンバーをチームメンテナに昇格させたり、チームメンテナを Team メンバーに降格したり](/admin/user-management/audited-actions#teams)すると、イベントが Audit log に記録されるようになりました。
- [OAuth デバイス認証フロー](/developers/apps/authorizing-oauth-apps#device-flow)がサポートされるようになりました。 これにより、CLI クライアントまたは開発者ツールはセカンダリシステムを使用して認証できます。
- SCIM プロビジョニングが有効になっている場合、ユーザは自分のアカウントを削除できなくなります。

##### デフォルトブランチの名称変更

Enterprise および Organization のオーナーは、新しいリポジトリのデフォルトブランチ名を設定できるようになりました。 Enterprise のオーナーは、すべての Organization でデフォルトブランチ名の選択を強制したり、個々の Organization が独自のブランチ名を選択できるようにすることもできます。 For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-the-default-branch-name)" and "[Managing the default branch name for repositories in your organization](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)."

既存のリポジトリはこれらの設定の影響を受けず、デフォルトのブランチ名は変更されません。

この変更は、デフォルトブランチの名前を変更する必要があるプロジェクトとメンテナをサポートするための {% data variables.product.company_short %} による変更の 1 つです。 詳細については、[github/renaming](https://github.com/github/renaming) を参照してください。


### バグ修正
- ユーザは、プロファイルにバックアップメールアドレスを設定できなくなりました。 メールアドレスは IdP を通じてのみ設定されます。
- IdP で認証を設定した後に、2 要素認証を有効化することはできなくなりました。
- {% data variables.product.product_name %} が Azure ボードに接続できるようになりました。
- API にバージョンヘッダがありませんでしたが、現在は「GitHub AE」に設定されています。
- ドキュメントへのリンクが修正されました。
- Enterprise の設定での Audit log 転送の設定が失敗していました。
- gists に移動すると、500 件のエラーが発生する可能性があります。
- サポートのメールまたは URL を保存できませんでしたが、 数分後に保存されるようになりました。
- Organization レベルのプルリクエストテンプレートは、Organization 内のすべてのプルリクエストに適用されていませんでした。

### 既知の問題

- 地理的位置データが Audit log に表示されません。 それ以外の場合、位置情報は各イベントに関連付けられた IP アドレスから識別できます。
- リポジトリページから {% data variables.product.prodname_registry %} へのリンクでは、そのリポジトリにパッケージがない場合、誤った検索ページを表示します。
