---
ms.openlocfilehash: e0bf1f4b7bbd5fcb145a6e869dd442fd8e53108a
ms.sourcegitcommit: b4996daba2e75b3368f39316e6929602f13b961b
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/31/2022
ms.locfileid: "148120535"
---
| カテゴリ名 | 説明
|------------------|-------------------
{%- ifversion fpt or ghec %} | `account` | Organization アカウントに関連するアクティビティが含まれます。
| `advisory_credit`   | {% data variables.product.prodname_advisory_database %} のセキュリティ アドバイザリのコントリビューターのクレジットに関連するアクティビティが含まれます。 詳細については、「[{% data variables.product.prodname_dotcom %} セキュリティ アドバイザリの概要](/github/managing-security-vulnerabilities/about-github-security-advisories)」を参照してください。
{%- endif %} | `artifact` | {% data variables.product.prodname_actions %} ワークフロー実行成果物に関連するアクティビティが含まれます。
{%- ifversion audit-log-streaming %} | `audit_log_streaming`  | Enterprise アカウント内の Organization のストリーミング監査ログに関連するアクティビティが含まれます。
{%- endif %} {%- ifversion fpt or ghec %} | `billing` | Organization の請求先に関連するアクティビティが含まれます。
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `business`  | Enterprise のビジネス設定に関連するアクティビティが含まれます。
{%- endif %} {%- ifversion code-security-audit-log-events %} | `business_advanced_security` | エンタープライズ内の {% data variables.product.prodname_GH_advanced_security %} に関連するアクティビティが含まれます。 詳しくは、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} 機能の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)」を参照してください。
| `business_secret_scanning` | エンタープライズ内の {% data variables.product.prodname_secret_scanning %} に関連するアクティビティが含まれます。 詳しくは、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} 機能の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)」を参照してください。
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `business_secret_scanning_custom_pattern` | Enterprise 内の{% data variables.product.prodname_secret_scanning %}のカスタム パターンに関連するアクティビティが含まれます。
{%- endif %} {%- ifversion code-security-audit-log-events %} | `business_secret_scanning_push_protection` | Enterprise 内の{% data variables.product.prodname_secret_scanning %}のプッシュ保護機能に関連するアクティビティが含まれます。 詳しくは、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} 機能の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)」を参照してください。
| `business_secret_scanning_push_protection_custom_message` | エンタープライズでプッシュ保護がトリガーされたときに表示されるカスタム メッセージに関連するアクティビティが含まれます。 詳しくは、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} 機能の管理](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)」を参照してください。
{%- endif %} | `checks`   | チェック スイートと実行に関連するアクティビティが含まれます。
{%- ifversion fpt or ghec %} | `codespaces` | Organization の codespace に関連するアクティビティが含まれます。
{%- endif %} | `commit_comment` | コミット コメントの更新または削除に関連するアクティビティが含まれます。
{%- ifversion ghes %} | `config_entry` | 構成設定に関連するアクティビティが含まれます。 これらのイベントは、サイト管理者の監査ログにのみ表示されます。
{%- endif %} | `dependabot_alerts`  | 既存のリポジトリの {% data variables.product.prodname_dependabot_alerts %} に対する組織レベルの構成アクティビティが含まれます。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %}について](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)」を参照してください。
| `dependabot_alerts_new_repos`   | Organization 内に作成された新しいリポジトリ内の {% data variables.product.prodname_dependabot_alerts %} に対する Organization レベルの構成アクティビティが含まれます。
| `dependabot_repository_access` | Organization {% data variables.product.prodname_dependabot %} 内のどのプライベート リポジトリへのアクセスが許可されているかに関連するアクティビティが含まれます。
{%- ifversion fpt or ghec or ghes %} | `dependabot_security_updates`   | 既存のリポジトリの {% data variables.product.prodname_dependabot_security_updates %} に対する Organization レベルの構成アクティビティが含まれます。 詳細については、「[{% data variables.product.prodname_dependabot_security_updates %} の構成](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)」を参照してください。
| `dependabot_security_updates_new_repos` | Organization 内に作成された新しいリポジトリ内の {% data variables.product.prodname_dependabot_security_updates %} の Organization レベルの構成アクティビティが含まれます。
{%- endif %} | `dependency_graph` | リポジトリの依存関係グラフの Organization レベルの設定アクティビティが含まれます。 詳細については、「[依存関係グラフの概要](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。
| `dependency_graph_new_repos`  | Organization 内に作成された新しいリポジトリの Organization レベルの構成アクティビティが含まれます。
{%- ifversion fpt or ghec %} | `discussion` | チーム ディスカッションに関連するアクティビティが含まれます。
| `discussion_comment` | チーム ページのディスカッションに投稿されたコメントに関連するアクティビティが含まれます。
| `discussion_post`   | チーム ページに投稿されたディスカッションに関連するアクティビティが含まれます。
| `discussion_post_reply`   | チーム ページに投稿されたディスカッションへの返答に関連するアクティビティが含まれます。
{%- endif %} {%- ifversion ghec or ghes %} | `dotcom_connection` | {% data variables.product.prodname_github_connect %} に関連するアクティビティが含まれます。
| `enterprise` | Enterprise 設定に関連するアクティビティが含まれます。
{%- endif %} {%- ifversion ghec %} | `enterprise_domain` | 検証済みの Enterprise ドメインに関連するアクティビティが含まれます。
| `enterprise_installation` | {% data variables.product.prodname_github_connect %} Enterprise 接続に関連付けられた {% data variables.product.prodname_github_app %} に関連するアクティビティが含まれます。
{%- endif %} {%- ifversion fpt or ghec %} | `environment` | {% data variables.product.prodname_actions %} 環境に関連するアクティビティが含まれます。
{%- endif %} {%- ifversion ghae %} | `external_group` | Okta グループに関連するアクティビティが含まれます。
| `external_identity` | Okta グループ内のユーザーに関連するアクティビティが含まれます。
{%- endif %} | `gist` | Git に関連するアクティビティが含まれます。
| `hook` | Webhook に関連するアクティビティが含まれます。
| `integration` | アカウント内の統合に関連するアクティビティが含まれます。
| `integration_installation` | アカウント内にインストールされた統合に関連するアクティビティが含まれます。
| `integration_installation_request`  | 所有者が Organaization 内で使用する統合を承認するように求める Organization メンバーの要求に関連するアクティビティが含まれます。
{%- ifversion ghec or ghae %} | `ip_allow_list`   | Organization の IP 許可リストの有効化または無効化に関連するアクティビティが含まれます。
| `ip_allow_list_entry`   | Organization の IP 許可リスト エントリの作成、削除、編集に関連するアクティビティが含まれます。
{%- endif %} | `issue`  | リポジトリ内の issue のピン留め、転送、または削除に関連するアクティビティが含まれます。
| `issue_comment` | issue コメントのピン留め、転送、または削除に関連するアクティビティが含まれます。
| `issues` | Organization の issue 作成の有効化または無効化に関連するアクティビティが含まれます。
{%- ifversion fpt or ghec %} | `marketplace_agreement_signature` | {% data variables.product.prodname_marketplace %} 開発者契約の署名に関連するアクティビティが含まれます。
| `marketplace_listing` | {% data variables.product.prodname_marketplace %} のアプリの一覧表示に関連するアクティビティが含まれます。
{%- endif %} | `members_can_create_pages`   | Organization 内のリポジトリの {% data variables.product.prodname_pages %} サイトの公開の管理に関連するアクティビティが含まれます。 詳細については、「[Organization の {% data variables.product.prodname_pages %} サイトの公開を管理する](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)」を参照してください。
| `members_can_create_private_pages` | Organization 内のリポジトリの {% data variables.product.prodname_pages %} サイトの公開の管理に関連するアクティビティが含まれます。
| `members_can_create_public_pages` | Organization 内のリポジトリの公開の {% data variables.product.prodname_pages %} サイトの公開の管理に関連するアクティビティが含まれます。
{%- ifversion ghec or ghes or ghae %} | `members_can_delete_repos` | Organization のリポジトリ作成の有効化または無効化に関連するアクティビティが含まれます。
{%- endif %} {%- ifversion fpt or ghec %} | `members_can_view_dependency_insights` | Organization メンバーが依存関係の分析情報を表示できるようにする Organization レベルの構成アクティビティが含まれます。
| `migration` | *ソース* の場所 ({% data variables.product.prodname_dotcom_the_website %} Organization、{% data variables.product.prodname_ghe_server %} インスタンスなど) から *ターゲット* の {% data variables.product.prodname_ghe_server %} インスタンスへのデータの転送に関連するアクティビティが含まれます。
{%- endif %} | `oauth_access` | OAuth アクセス トークンに関連するアクティビティが含まれます。
| `oauth_application` | OAuth アプリに関連するアクティビティが含まれます。
{%- ifversion fpt or ghec %} | `oauth_authorization` | OAuth アプリの認可に関連するアクティビティが含まれます。
{%- endif %} | `org`   | Organization メンバーシップに関連するアクティビティが含まれます。
{%- ifversion ghec or ghes or ghae %} | `org_credential_authorization` | SAML シングル サインオンで使用する資格情報の認可に関連するアクティビティが含まれます。
{%- endif %}{%- ifversion secret-scanning-audit-log-custom-patterns %} | `org_secret_scanning_custom_pattern` | Organization 内のシークレット スキャンのカスタム パターンに関連するアクティビティが含まれます。 詳細については、「[Secret Scanning のカスタムパターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)」を参照してください。
| `org.secret_scanning_push_protection` | Organization 内のカスタム パターンをスキャンするシークレットに関連するアクティビティが含まれます。 詳細については、「[シークレット スキャンによるプッシュの保護](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)」を参照してください。
{%- endif %} | `organization_default_label` |Organization のリポジトリのデフォルト ラベルに関連するアクティビティが含まれます。
{%- ifversion fpt or ghec or ghes %} | `organization_domain` | 検証済みの Organization ドメインに関連するアクティビティが含まれます。
| `organization_projects_change` | Enterprise 内の Organization 全体のプロジェクト ボードに関連するアクティビティが含まれます。
{%- endif %} {%- ifversion fpt or ghec %} | `pages_protected_domain` | {% data variables.product.prodname_pages %} の検証済みカスタム ドメインに関連するアクティビティが含まれます。
| `payment_method`  | Organization が {% data variables.product.prodname_dotcom %}. に対して支払う方法に関連するアクティビティが含まれます。
| `prebuild_configuration` | {% data variables.product.prodname_github_codespaces %} の事前ビルド構成に関連するアクティビティが含まれます。
{%- endif %} {%- ifversion ghes %} | `pre_receive_environment` | pre-receive フック環境に関連するアクティビティが含まれます。
| `pre_receive_hook` | pre-receive フックに関連するアクティビティが含まれます。
{%- endif %} {%- ifversion ghes %} | `private_instance_encryption` | Enterprise のプライベート モードの有効化に関連するアクティビティが含まれます。
{%- endif %} | `private_repository_forking` | リポジトリ、Organization、または Enterprise のプライベート リポジトリと内部リポジトリのフォークの許可に関連するアクティビティが含まれます。
{%- ifversion fpt or ghec %} | `profile_picture`   | Organization のプロファイル画像に関連するアクティビティが含まれます。
{%- endif %} | `project` | プロジェクト ボードに関連するアクティビティが含まれます。
| `project_field` | プロジェクト ボードでのフィールドの作成と削除に関連するアクティビティが含まれます。
| `project_view` | プロジェクト ボードでのビューの作成と削除に関連するアクティビティが含まれます。
| `protected_branch` | 保護されたブランチに関連するアクティビティが含まれます。
| `public_key` | SSH キーとデプロイ キーに関連するアクティビティが含まれます。
| `pull_request` | pull request に関連するアクティビティが含まれます。
| `pull_request_review` | pull request レビューに関連するアクティビティが含まれます。
| `pull_request_review_comment` | pull request レビュー コメントに関連するアクティビティが含まれます。
| `repo` | Organization が所有するリポジトリに関連するアクティビティが含まれます。
{%- ifversion fpt or ghec %} | `repository_advisory` | {% data variables.product.prodname_advisory_database %} のセキュリティ アドバイザリに関連するリポジトリレベルのアクティビティが含まれます。  詳細については、「[{% data variables.product.prodname_dotcom %} セキュリティ アドバイザリの概要](/github/managing-security-vulnerabilities/about-github-security-advisories)」を参照してください。
| `repository_content_analysis`   | [プライベート リポジトリのデータ使用の有効化または無効化](/articles/about-github-s-use-of-your-data)に関連するアクティビティが含まれます。
| `repository_dependency_graph`   | {% ifversion fpt or ghec %}プライベート {% endif %}リポジトリの依存関係グラフの有効化または無効化に関連するリポジトリレベルのアクティビティが含まれます。 詳細については、「[依存関係グラフの概要](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。
{%- endif %} | `repository_image` | リポジトリの画像に関連するアクティビティが含まれます。
| `repository_invitation` | リポジトリに参加するための招待に関連するアクティビティが含まれます。
| `repository_projects_change` | リポジトリに対する、または Organaization 内のすべてのリポジトリに対する、プロジェクトの有効化に関連するアクティビティが含まれます。
{%- ifversion ghec or ghes or ghae %} | `repository_secret_scanning`  | シークレット スキャンに関連するリポジトリレベルのアクティビティが含まれます。 詳細については、「[シークレット スキャンについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `repository_secret_scanning_custom_pattern` | リポジトリ内のシークレット スキャン カスタム パターンに関連するアクティビティが含まれます。 詳細については、[シークレット スキャンのカスタム パターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)に関する記事を参照してください。 {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | `repository_secret_scanning_push_protection` | リポジトリ内のシークレット スキャン カスタム パターンに関連するアクティビティが含まれます。 詳細については、「[シークレット スキャンによるプッシュの保護](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)」を参照してください。
{%- endif %} {%- ifversion fpt or ghec %} | `repository_visibility_change` | Organaization メンバーによる Organaization のリポジトリの可視性の変更許可に関連するアクティビティが含まれます。
{%- endif %} | `repository_vulnerability_alert`   | [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) に関連するアクティビティが含まれます。
{%- ifversion fpt or ghec %} | `repository_vulnerability_alerts` | {% data variables.product.prodname_dependabot_alerts %} に対するリポジトリレベルの構成アクティビティが含まれます。
| `required_status_check` | 保護されたブランチの必要な状態チェックに関連するアクティビティが含まれます。
{%- endif %} {%- ifversion ghec or ghes %} | `restrict_notification_delivery` | Enterprise の承認済みドメインまたは検証済みドメインへのメール通知の制限に関連するアクティビティが含まれます。
{%- endif %} {%- ifversion custom-repository-roles %} | `role` | [カスタム リポジトリ ロール](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)に関連するアクティビティが含まれます。
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `secret_scanning`   | 既存のリポジトリ内のシークレット スキャンに対する Organization レベルの構成アクティビティが含まれます。 詳細については、「[シークレット スキャンについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。
| `secret_scanning_new_repos` | Organization 内に作成された新しいリポジトリ内のシークレット スキャンに対する Organization レベルの構成アクティビティが含まれます。
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `security_key` | セキュリティ キーの登録と削除に関連するアクティビティが含まれます。
{%- endif %} {%- ifversion fpt or ghec %} | `sponsors`  | スポンサー ボタンに関連するイベントが含まれます (「[リポジトリにスポンサー ボタンを表示する](/articles/displaying-a-sponsor-button-in-your-repository)」を参照)。
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `ssh_certificate_authority` | Organaization または Enterprise の SSH 証明機関に関連するアクティビティが含まれます。
| `ssh_certificate_requirement` | メンバーが SSH 証明書を使用して Organaization リソースにアクセスすることを要求することに関連するアクティビティが含まれます。
{%- endif %} | `staff` | アクションを実行しているサイト管理者に関連するアクティビティが含まれます。
| `team` | Organization 内のチームに関連するアクティビティが含まれます。
| `team_discussions` | Organization のチーム ディスカッション管理に関連するアクティビティが含まれます。
{%- ifversion ghec %} | `team_sync_tenant` | Enterprise または Organaization の IdP とのチーム同期に関連するアクティビティが含まれます。
{%- endif %} {%- ifversion fpt or ghes %} | `two_factor_authentication` | 2 要素認証に関連するアクティビティが含まれます。
{%- endif %} | `user` | Enterprise または Organaization 内のユーザーに関連するアクティビティが含まれます。
{%- ifversion ghec or ghes %} | `user_license` | Enterprise のライセンスシートを使用し、Enterprise のメンバーであるユーザーに関連するアクティビティが含まれます。
{%- endif %} | `workflows`   | {% data variables.product.prodname_actions %} ワークフローに関連するアクティビティが含まれます。
