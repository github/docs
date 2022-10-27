---
title: Organizationのロール
intro: Organizationのオーナーは、個人やTeamにロールを割り当て、Organizationにおける様々な権限セットを与えることができます。
redirect_from:
  - /articles/permission-levels-for-an-organization-early-access-program
  - /articles/permission-levels-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization
  - /organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Roles in an organization
ms.openlocfilehash: 960f6f701ad524220e9e79ada04fa9e4d30b8e9f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108803'
---
## ロールについて
{% data reusables.organizations.about-roles %}

リポジトリレベルのロールは、Organizationのメンバー、外部のコラボレータ、Teamのメンバーに対し、リポジトリへの様々なレベルのアクセスを付与します。 詳細については、「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」を参照してください。

Teamレベルのロールは、Teamを管理する権限を付与するロールです。 Teamの個々のメンバーにチームメンテナロールを付与できます。これは、Teamに対する多くの管理権限をメンバーに付与するものです。 詳細については、「[Team メンバーへのチーム メンテナ ロールの割り当て](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)」を参照してください。

Organizationレベルのロールは、OrganizationやOrganizationのリポジトリ、Team、設定を管理してもらうために個人もしくはTeamに付与する権限のセットです。 Organization レベルで使用できるすべてのロールの詳細については、「[Organization ロールについて](#about-organization-roles)」を参照してください。

## Organizationロールについて

個人やTeamに対して様々なOrganizationレベルのロールを付与して、Organization及びそのリソースに対するメンバーのアクセスを制御してもらうことができます。 各ロールに含まれる個々の権限の詳細については、「[Organization ロールの権限](#permissions-for-organization-roles)」を参照してください。

{% ifversion enterprise-owner-join-org %}Organization が Enterprise アカウントによって所有されている場合、Enterprise の所有者は任意のロールで Organization を参加させることができます。 詳細については、「[Enterprise の Organization を管理する](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)」を参照してください。
{% endif %}

### 組織所有者
Organizationオーナーは、Organizationに対する完全な管理アクセスを持ちます。 このロールは制限する必要がありますが、Organization で少なくとも 2 人は指定する必要があります。 詳細については、「[Organization の所有権の継続性を管理する](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)」を参照してください。

### Organizationメンバー
デフォルトの、Organizationのメンバーの非管理ロールはOrganizationメンバーです。 デフォルトでは、Oraganizationのメンバーはリポジトリやプロジェクトボードの作成を含むいくつもの権限を持ちます。

{% ifversion fpt or ghec %}
### Organization のモデレーター
モデレーターは、メンバーとしての権限に加えて、メンバー以外のコントリビューターのブロックとブロック解除、操作の制限の設定、Organization が所有するパブリック リポジトリでのコメントの非表示を許可される Organization メンバーです。 詳細については、「[Organization のモデレーターの管理](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)」を参照してください。

### 支払いマネージャー
支払いマネージャーは、支払い情報など、Organizationの支払い設定を管理できるユーザです。 これは、通常Organizationのメンバーが支払いのリソースにアクセスできない場合、有益な選択肢です。 詳細については、「[Organization への支払いマネージャーの追加](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)」を参照してください。

{% endif %}

{% ifversion security-managers %}
### セキュリティマネージャー

{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

Organizationがセキュリティチームを持っているなら、そのTeamのメンバーにOrganizationへの最小限のアクセスを付与するためにセキュリティマネージャーのロールを使うことができます。 詳細については、「[Organization でのセキュリティ マネージャーの管理](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)」を参照してください。
{% endif %}
### {% data variables.product.prodname_github_app %} マネージャー
デフォルトでは、OrganizationのオーナーだけがOrganizationの所有する{% data variables.product.prodname_github_apps %}の設定を管理できます。 Organizationが所有する{% data variables.product.prodname_github_apps %}を管理するユーザを追加するために、オーナーはユーザに{% data variables.product.prodname_github_app %}マネージャーの権限を付与できます。

Organizationでの{% data variables.product.prodname_github_app %}マネージャーにユーザを指定すると、Organizationが所有する一部あるいはすべての{% data variables.product.prodname_github_apps %}の設定を管理するアクセスを付与することになります。 詳細については、次を参照してください。

- 「[GitHub App マネージャーを Organization に追加する](/articles/adding-github-app-managers-in-your-organization)」
- 「[GitHub App マネージャーを Organization から削除する](/articles/removing-github-app-managers-from-your-organization)」

### 外部コラボレーター
リポジトリへのアクセスを許可している間、Organization のデータを安全に保つために、"*外部コラボレーター*" を追加することができます。 {% data reusables.organizations.outside_collaborators_description %}

## Organizatonロールの権限

{% ifversion fpt %} 以下にリストされた機能の中には、{% data variables.product.prodname_ghe_cloud %} を使う Organization 限定のものもあります。 {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

{% ifversion fpt or ghec %}
<!-- Free/Pro/Team and GHEC versions have extra columns for Moderators and Billing managers-->

| Organizationの権限 | 所有者 | メンバー | モデレーター | 支払いマネージャー | セキュリティマネージャー |
|:------------------------|:------:|:-------:|:----------:|:----------------:|:-----------------:|
| リポジトリを作成する (「[Organization 内でリポジトリの作成を制限する](/articles/restricting-repository-creation-in-your-organization)」を参照) | **X** | **X** | **X** |  | **X**  |
| 支払い情報を表示および編集する | **X** |  |  | **X** |  |
| Organization に参加するようユーザを招待する | **X** |  |  |  |  |
| Organization に参加する招待を編集およびキャンセルする | **X** |  |  |  |  |
| Organization からメンバーを削除する | **X** |  |  |  |  |
| 以前のメンバーを Oraganization に復帰させる | **X** |  |  |  |  |
| **すべての Team** のユーザーを追加および削除する | **X** |  |  |  |  |
| Organization メンバーを "*チーム メンテナ*" に昇格させる | **X** |  |  |  |  |
| コード レビューの割り当てを構成する (「[Team のコード レビュー割り当ての管理](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)」を参照) | **X** |  |  |  |  |
| スケジュール済みのアラームを設定する ([Pull Request に対するスケジュール済みのアラームの管理](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)に関するページを参照) | **X** |  |  |  |  |
| **すべてのリポジトリ** にコラボレーターを追加する | **X** |  |  |  |  |
| Organization 参加ログにアクセスする | **X** |  |  |  |  |
| Organization のプロファイル ページを編集する (「[Organization のプロフィールについて](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)」を参照) | **X** |  |  |  |  |{% ifversion ghec %}
| Organization のドメインを確認する ([Organization のドメインの確認](/articles/verifying-your-organization-s-domain)に関するページを参照) | **X** |  |  |  |  |
| メール通知を確認済みドメインまたは承認済みドメインに制限する (「[Organization のメール通知の制限](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)」を参照) | **X** |  |  |  |  |{% endif %}
| **すべての用語** を削除する | **X** |  |  |  |  |
| すべてのリポジトリを含めて Organization のアカウントを削除する | **X** |  |  |  |  |
| Team を作成する (「[Organization のチーム作成権限を設定する](/articles/setting-team-creation-permissions-in-your-organization)」を参照) | **X** | **X** | **X** |  | **X**  |
| [Organization の階層で Team を移動する](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** |  |  |  |  |
| プロジェクト ボードを作成する (「[Organization のプロジェクト ボード権限](/articles/project-board-permissions-for-an-organization)」を参照) | **X** | **X** | **X** |  | **X**  |
| Organization の全メンバーおよび Team の表示 | **X** | **X** | **X** |  | **X**  |
| 表示されている Team を @mention する | **X** | **X** | **X** |  | **X**  |
| "*チーム メンテナ*" に指定できる | **X** | **X** | **X** |  | **X** |{% ifversion ghec %}
| Organization のインサイトを表示する (「[Organization のインサイトを表示する](/articles/viewing-insights-for-your-organization)」を参照) | **X** | **X** | **X** |  | **X**  |{% endif %}
| パブリック Team ディスカッションを表示して **すべての Team** に投稿する (「[Team ディスカッションについて](/organizations/collaborating-with-your-team/about-team-discussions)」を参照) | **X** | **X** | **X** |  | **X**  |
| プライベート Team ディスカッションを表示して **すべての Team** に投稿する (「[Team ディスカッションについて](/organizations/collaborating-with-your-team/about-team-discussions)」を参照) | **X** |  |  |  |  |
| **すべての Team** で Team ディスカッションを編集および削除する (「[混乱を生むコメントを管理する](/communities/moderating-comments-and-conversations/managing-disruptive-comments)」を参照) | **X** |  |  |  |  |
| Organization の Team ディスカッションを無効にする (「[ Organization の Team ディスカッションを無効にする](/articles/disabling-team-discussions-for-your-organization)」を参照) | **X** |  |  |  |  |
| 書き込み可能なコミット、Pull Request、および Issue に関するコメントを非表示にする (「[混乱を生むコメントを管理する](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)」を参照) | **X** | **X** | **X** |  | **X** |
| "_すべての_" コミット、Pull Request、および Issue に関するコメントを非表示にする (「[混乱を生むコメントを管理する](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)」を参照) | **X** |  | **X** |  | **X** |
| メンバー以外のコントリビューターをブロックおよびブロック解除する (「[Organization からのユーザーのブロック](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)」を参照) | **X** |  | **X** |  |  |
| パブリック リポジトリでの特定のユーザーの操作を制限する (「[Organization での操作を制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)」を参照) | **X** |  | **X** |  |  |{% ifversion ghec %}
| Organization dependency insights の表示を管理する (「[ Organization dependency insights の可視性を変更する](/articles/changing-the-visibility-of-your-organizations-dependency-insights)」を参照) | **X** |  |  |  |  |{% endif %}
| **すべての Team** で Team のプロフィール画像を設定する (「[Team のプロフィール画像を設定する](/articles/setting-your-team-s-profile-picture)」を参照) | **X** |  |  |  |  |
| アカウントをスポンサーし、Organization のスポンサーシップを管理する (「[オープンソース コントリビューターをスポンサーする](/sponsors/sponsoring-open-source-contributors)」を参照) | **X** |  |  | **X** | **X**  |
| スポンサー アカウントからのメールの更新を管理する (「[Organization のスポンサー アカウントからの更新を管理する](/organizations/managing-organization-settings/managing-updates-from-accounts-your-organization-sponsors)」を参照) | **X** |  |  |  |  |
| スポンサー プランを別の Organization に関連付ける (詳細については、「[Organization へのスポンサーシップの関連付け](/sponsors/sponsoring-open-source-contributors/attributing-sponsorships-to-your-organization)」を参照) | **X** |  |  |  |  |
| Organization 内のリポジトリから {% data variables.product.prodname_pages %} サイトの公開を管理する (「[Organization の {% data variables.product.prodname_pages %} サイトの公開を管理する](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)」を参照) | **X** |  |  |  |  |
| セキュリティと分析の設定を管理する (「[Organization のセキュリティと分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照) | **X** |  |  |  | **X** |
| Organization のセキュリティの概要を表示する (「[セキュリティの概要について](/code-security/security-overview/about-the-security-overview)」を参照) | **X** |  |  |  | **X** |{% ifversion ghec %}
| [SAML シングル サインオン](/articles/about-identity-and-access-management-with-saml-single-sign-on)を有効にして適用する | **X** |  |  |  |  |
| [Organization へのユーザーの SAML アクセスを管理する](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization) | **X** |  |  |  |  |
| Organization の SSH 認証局を管理する (「[Organization の SSH 認証局を管理する](/articles/managing-your-organizations-ssh-certificate-authorities)」を参照) | **X** |  |  |  |  |{% endif %}
| リポジトリを移譲する | **X** |  |  |   |  |
| {% data variables.product.prodname_marketplace %} アプリケーションを購入、インストール、支払い管理、キャンセルする | **X** |  |  |  |  |
| {% data variables.product.prodname_marketplace %} のアプリケーションをリストする | **X** |  |  |  |  |
| Organization のすべてのリポジトリの[安全ではない依存関係に関する {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) を受け取る | **X** |  |  |  | **X** |
| {% data variables.product.prodname_dependabot_security_updates %} を管理する (「[{% data variables.product.prodname_dependabot_security_updates %} について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」を参照) | **X** |  |  |  | **X** |
| [フォークポリシーを管理する](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) | **X** |  |  |  |  |
| [Organization のパブリック リポジトリでのアクティビティを制限する](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization) | **X** |  |  |  |  |
| Organization にある "*すべてのリポジトリ*" のプル (読み取り) を行う | **X** |  |  |  | **X** |
| Organization にある "*すべてのリポジトリ*" のプッシュ (書き込み) とクローン作成 (コピー) を行う | **X** |  |  |  |  |
| Organization のメンバーを[外部のコラボレーター](#outside-collaborators)に変換する | **X** |  |  |  |  |
| [Organization リポジトリへのアクセス権がある人を表示する](/articles/viewing-people-with-access-to-your-repository) | **X** |  |  |  |  |{% ifversion ghec %}
| [Organization リポジトリへのアクセス権がある人のリストをエクスポートする](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** |  |  |  |  |{% endif %}
| 既定のブランチ名を管理する (「[Organization のリポジトリのデフォルト ブランチ名を管理する](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)」を参照) | **X** |  |  |  |  |
| 既定のラベルを管理する (「[Organization 内のリポジトリのためのデフォルト ラベルを管理する](/articles/managing-default-labels-for-repositories-in-your-organization)」を参照) | **X** |  |  |  |  |{% ifversion ghec %}
| Team 同期を有効にする (「[Organization の Team 同期を管理する](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)」を参照) | **X** |  |  |  |  |{% endif %}
| Organization での Pull Request のレビューを管理する (「[Organization での Pull Request のレビューの管理](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)」を参照) | **X** |  |  |  |  |

{% elsif ghes or ghae %}
<!-- GHES 3.3+ and eventual GHAE release don't have the extra columns for Moderators and Billing managers. -->

| Organization のアクション | 所有者 | メンバー | セキュリティマネージャー |
|:--------------------|:------:|:-------:|:-------:|
| Organization に参加するようユーザを招待する | **X** |  |  |
| Organization に参加する招待を編集およびキャンセルする | **X** |  |  |
| Organization からメンバーを削除する | **X** | | |  |
| 以前のメンバーを Oraganization に復帰させる | **X** | | |  |
| **すべての Team** のユーザーを追加および削除する | **X** |  |  |
| Organization メンバーを "*チーム メンテナ*" に昇格させる | **X** |  |  |
| コード レビューの割り当てを構成する (「[Team のコード レビュー割り当ての管理](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)」を参照) | **X** |  |  |
| **すべてのリポジトリ** にコラボレーターを追加する | **X** |  |  |
| Organization 参加ログにアクセスする | **X** |  |  |
| Organization のプロファイル ページを編集する (「[Organization のプロフィールについて](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)」を参照) | **X** |  |  |{% ifversion ghes %}
| Organization のドメインを確認する ([Organization のドメインの確認](/articles/verifying-your-organization-s-domain)に関するページを参照) | **X** |  |  |
| メール通知を確認済みドメインまたは承認済みドメインに制限する (「[Organization のメール通知の制限](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)」を参照) | **X** |  |  |{% endif %}
| **すべての用語** を削除する | **X** |  |  |
| すべてのリポジトリを含めて Organization のアカウントを削除する | **X** |  |  |
| Team を作成する (「[Organization のチーム作成権限を設定する](/articles/setting-team-creation-permissions-in-your-organization)」を参照) | **X** | **X** | **X**  |
| Organization の全メンバーおよび Team の表示 | **X** | **X** | **X**  |
| 表示されている Team を @mention する | **X** | **X** | **X**  |
| "*チーム メンテナ*" に指定できる | **X** | **X** | **X**  |
| リポジトリを移譲する | **X** | |  |
| セキュリティと分析の設定を管理する (「[Organization のセキュリティと分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照) | **X** | | **X** |{% ifversion ghes %}
| Organization のセキュリティの概要を表示する (「[セキュリティの概要について](/code-security/security-overview/about-the-security-overview)」を参照) | **X** | | **X** |{% endif %}{% ifversion ghes %}
| {% data variables.product.prodname_dependabot_security_updates %} を管理する (「[{% data variables.product.prodname_dependabot_security_updates %} について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」を参照) | **X** | | **X** |{% endif %}
| Organization の SSH 認証局を管理する (「[Organization の SSH 認証局を管理する](/articles/managing-your-organizations-ssh-certificate-authorities)」を参照) | **X** |  |  |
| プロジェクト ボードを作成する (「[Organization のプロジェクト ボード権限](/articles/project-board-permissions-for-an-organization)」を参照) | **X** | **X** | **X** |
| パブリック Team ディスカッションを表示して **すべての Team** に投稿する (「[Team ディスカッションについて](/organizations/collaborating-with-your-team/about-team-discussions)」を参照) | **X** | **X** | **X**  |
| プライベート Team ディスカッションを表示して **すべての Team** に投稿する (「[Team ディスカッションについて](/organizations/collaborating-with-your-team/about-team-discussions)」を参照) | **X** |  |  |
| **すべての Team** で Team ディスカッションを編集および削除する (詳細については、「[混乱を生むコメントを管理する](/communities/moderating-comments-and-conversations/managing-disruptive-comments)」を参照) | **X** |  |  |  |
| コミット、Pull Request、および Issue に関するコメントを非表示にする (「[混乱を生むコメントを管理する](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)」を参照) | **X** | **X** | **X**  |
| Organization の Team ディスカッションを無効にする (「[ Organization の Team ディスカッションを無効にする](/articles/disabling-team-discussions-for-your-organization)」を参照) | **X** |  |  |
| **すべての Team** で Team のプロフィール画像を設定する (「[Team のプロフィール画像を設定する](/articles/setting-your-team-s-profile-picture)」を参照) | **X** |  |  |{% ifversion ghes %}
| Organization 内のリポジトリから {% data variables.product.prodname_pages %} サイトの公開を管理する (「[Organization の {% data variables.product.prodname_pages %} サイトの公開を管理する](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)」を参照) | **X** | |  |{% endif %}
| [Organization の階層で Team を移動する](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** | | |
| Organization にある "*すべてのリポジトリ*" のプル (読み取り) を行う | **X** | | **X** |
| Organization にある "*すべてのリポジトリ*" のプッシュ (書き込み) とクローン作成 (コピー) を行う | **X** | |  |
| Organization のメンバーを[外部のコラボレーター](#outside-collaborators)に変換する | **X** | |  |
| [Organization リポジトリへのアクセス権がある人を表示する](/articles/viewing-people-with-access-to-your-repository) | **X** | |  |
| [Organization リポジトリへのアクセス権がある人のリストをエクスポートする](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** | |  |
| 既定のラベルを管理する (「[Organization 内のリポジトリのためのデフォルト ラベルを管理する](/articles/managing-default-labels-for-repositories-in-your-organization)」を参照) | **X** | |  |{% ifversion pull-request-approval-limit %}
| Organization での Pull Request のレビューを管理する (「[Organization での Pull Request のレビューの管理](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)」を参照) | **X** |  | |  |{% endif %}
{% ifversion ghae %}| IP 許可リストの管理 (「[Enterprise へのネットワーク トラフィックを制限する](/admin/configuration/restricting-network-traffic-to-your-enterprise)」を参照) | **X** | |  |{% endif %}

{% else %}
<!-- GHES and GHAE older versions don't have columns for Moderators, Billing managers or Security managers. -->

| Organization のアクション | 所有者 | メンバー |
|:--------------------|:------:|:-------:|
| Organization に参加するようユーザを招待する | **X** |  |
| Organization に参加する招待を編集およびキャンセルする | **X** |  |
| Organization からメンバーを削除する | **X** | | |
| 以前のメンバーを Oraganization に復帰させる | **X** | | |
| **すべての Team** のユーザーを追加および削除する | **X** |  |  
| Organization メンバーを "*チーム メンテナ*" に昇格させる | **X** |  |
| コード レビューの割り当てを構成する (「[Team のコード レビュー設定の管理](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)」を参照) | **X** |  |
| **すべてのリポジトリ** にコラボレーターを追加する | **X** |  |
| Organization 参加ログにアクセスする | **X** |  |
| Organization のプロファイル ページを編集する (「[Organization のプロフィールについて](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)」を参照) | **X** |  |  |{% ifversion ghes %}
| Organization のドメインを確認する ([Organization のドメインの確認](/articles/verifying-your-organization-s-domain)に関するページを参照) | **X** |  |
| メール通知を確認済みドメインまたは承認済みドメインに制限する (「[Organization のメール通知の制限](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)」を参照) | **X** |  |{% endif %}
| **すべての用語** を削除する | **X** |  |
| すべてのリポジトリを含めて Organization のアカウントを削除する | **X** |  |
| Team を作成する (「[Organization のチーム作成権限を設定する](/articles/setting-team-creation-permissions-in-your-organization)」を参照) | **X** | **X** |
| Organization の全メンバーおよび Team の表示 | **X** | **X** |
| 表示されている Team を @mention する | **X** | **X** |
| "*チーム メンテナ*" に指定できる | **X** | **X** |
| リポジトリを移譲する | **X** | |
| Organization の SSH 認証局を管理する (「[Organization の SSH 認証局を管理する](/articles/managing-your-organizations-ssh-certificate-authorities)」を参照) | **X** |  |
| プロジェクト ボードを作成する (「[Organization のプロジェクト ボード権限](/articles/project-board-permissions-for-an-organization)」を参照) | **X** | **X** | |
| パブリック Team ディスカッションを表示して **すべての Team** に投稿する (「[Team ディスカッションについて](/organizations/collaborating-with-your-team/about-team-discussions)」を参照) | **X** | **X** |  |
| プライベート Team ディスカッションを表示して **すべての Team** に投稿する (「[Team ディスカッションについて](/organizations/collaborating-with-your-team/about-team-discussions)」を参照) | **X** |  |  |
| **すべての Team** で Team ディスカッションを編集および削除する (詳細については、「[混乱を生むコメントを管理する](/communities/moderating-comments-and-conversations/managing-disruptive-comments)」を参照) | **X** |  |  |
| コミット、Pull Request、および Issue に関するコメントを非表示にする (「[混乱を生むコメントを管理する](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)」を参照) | **X** | **X** | **X** |
| Organization の Team ディスカッションを無効にする (「[ Organization の Team ディスカッションを無効にする](/articles/disabling-team-discussions-for-your-organization)」を参照) | **X** |  |  |
| **すべての Team** で Team のプロフィール画像を設定する (「[Team のプロフィール画像を設定する](/articles/setting-your-team-s-profile-picture)」を参照) | **X** |  |  |{% ifversion ghes %}
| Organization 内のリポジトリから {% data variables.product.prodname_pages %} サイトの公開を管理する (「[Organization の {% data variables.product.prodname_pages %} サイトの公開を管理する](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)」を参照) | **X** | |{% endif %}
| [Organization の階層で Team を移動する](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** | | |
| Organization にある "*すべてのリポジトリ*" のプル (読み取り)、プッシュ (書き込み)、クローン作成 (コピー) を行う | **X** | |
| Organization のメンバーを[外部のコラボレーター](#outside-collaborators)に変換する | **X** | |
| [Organization リポジトリへのアクセス権がある人を表示する](/articles/viewing-people-with-access-to-your-repository) | **X** | |
| [Organization リポジトリへのアクセス権がある人のリストをエクスポートする](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** | |
| 既定のラベルを管理する (「[Organization 内のリポジトリのためのデフォルト ラベルを管理する](/articles/managing-default-labels-for-repositories-in-your-organization)」を参照) | **X** | |
{% ifversion ghae %}| IP 許可リストの管理 (「[Enterprise へのネットワーク トラフィックを制限する](/admin/configuration/restricting-network-traffic-to-your-enterprise)」を参照) | **X** | |{% endif %}

{% endif %}

## 参考資料

- 「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」
- 「[Organization のプロジェクト ボード権限](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)」
