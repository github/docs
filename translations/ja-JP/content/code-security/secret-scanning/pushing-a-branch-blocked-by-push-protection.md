---
title: プッシュ保護によってブロックされたブランチをプッシュする
intro: '{% data variables.product.prodname_secret_scanning %}のプッシュ保護機能を使用すると、リポジトリでのシークレットの漏洩を予防することができます。 ブロックされたプッシュを解決でき、検出されたシークレットが削除されたら、コマンド ラインまたは Web UI から作業ブランチに変更をプッシュできます。'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Push a blocked branch
ms.openlocfilehash: 743cdc094acfd2465d4bb97f1ae7ec0a7f8b86f0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147683789'
---
## {% data variables.product.prodname_secret_scanning %}のプッシュ保護について

{% data variables.product.prodname_secret_scanning %} のプッシュ保護機能を使用すると、リポジトリに変更をプッシュする前にシークレットをスキャンすることで、セキュリティ リークを防ぐことができます。 {% data reusables.secret-scanning.push-protection-overview %} プッシュ保護に対応しているシークレットとサービス プロバイダーの詳細については、「[{% data variables.product.prodname_secret_scanning_caps %} パターン](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection)」を参照してください。

{% data reusables.secret-scanning.push-protection-remove-secret %}

{% tip %}

**ヒント** {% data variables.product.prodname_dotcom %} が、プッシュしても安全であると思われるシークレットをブロックする場合は、シークレットを許可し、許可する必要がある理由を指定できます。 シークレットのプッシュ保護をバイパスする方法の詳細については、コマンド ラインと Web UI についてそれぞれ「[ブロックされたシークレットのプッシュを許可する](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#allowing-a-blocked-secret-to-be-pushed)」と「[シークレットのプッシュ保護をバイパスする](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)」を参照してください。 

{% endtip %}

{% ifversion push-protection-custom-link-orgs %} 

Organization の管理者は、push がブロックされると {% data variables.product.product_name %} からのメッセージに含まれるカスタム リンクを指定できます。 このカスタム リンクには、Organization およびそのポリシーに固有のリソースとアドバイスを含めることができます。

{% ifversion push-protection-custom-link-orgs-beta %}{% data reusables.advanced-security.custom-link-beta %}{% endif %}

{% endif %}

## コマンド ラインでのブロックされたプッシュの解決

{% data reusables.secret-scanning.push-protection-command-line-choice %}

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

ブロックされたシークレットがブランチ上で最新のコミットによって導入された場合は、次のガイダンスに従うことができます。

1. コードからシークレットを削除します。
1. `git commit --amend` を使用して変更をコミットします。
1. `git push` を使用して変更をプッシュします。

シークレットが Git 履歴の以前のコミットに表示される場合は、シークレットを削除することもできます。

1. `git log` を使用して、プッシュ エラーで表面化したどのコミットが履歴で最初に発生したかを判断します。
1. `git rebase -i <commit-id>~1` を使用して、インタラクティブなリベースを開始します。 <commit-id> は、手順 1 のコミットの ID です。
1. エディターに表示されるテキストの最初の行の `pick` を `edit` に変更して、編集するコミットを特定します。
1. コードからシークレットを削除します。
1. `git commit --amend` を使用して、変更をコミットします。
1. `git rebase --continue` を実行して、リベースを完了します。

## Web UI でのブロックされたコミットの解決

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

Web UI でブロックされたコミットを解決するには、ファイルからシークレットを削除するか、 **[保護のバイパス]** ドロップダウンを使用してシークレットを許可します。 プッシュ保護のバイパスについて詳しくは、「[シークレット スキャンによるプッシュの保護](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)」を参照してください。

シークレットが本物であることを確認したら、ファイルからシークレットを削除する必要があります。 シークレットを削除すると、ページ上部のバナーが変更され、変更をコミットできるようになったことが通知されます。
