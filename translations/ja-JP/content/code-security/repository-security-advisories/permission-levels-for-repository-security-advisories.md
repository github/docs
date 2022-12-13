---
title: リポジトリ セキュリティ アドバイザリの権限レベル
intro: リポジトリ セキュリティ アドバイザリで実行できるアクションは、セキュリティ アドバイザリに対する管理者や書き込みの権限を持っているかどうかによって変わります。
redirect_from:
- /articles/permission-levels-for-maintainer-security-advisories
- /github/managing-security-vulnerabilities/permission-levels-for-maintainer-security-advisories
- /github/managing-security-vulnerabilities/permission-levels-for-security-advisories
- /code-security/security-advisories/permission-levels-for-security-advisories
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Security advisories
- Vulnerabilities
- Permissions
shortTitle: Permission levels
ms.openlocfilehash: 9c2ad0d30b98b79786df09a224766bd826cb84f6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145119390"
---
この記事は、リポジトリ レベルのセキュリティ アドバイザリのみを対象としています。 あらゆるユーザーは、[github.com/advisories](https://github.com/advisories) で、{% data variables.product.prodname_advisory_database %} のグローバル セキュリティ アドバイザリに貢献できます。 グローバル アドバイザリを編集しても、リポジトリでのアドバイザリの表示方法が変更されたり、影響を受けたりすることはありません。  詳細については、「[{% data variables.product.prodname_advisory_database %} のセキュリティ アドバイザリの編集](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)」を参照してください。

## アクセス許可の概要

{% data reusables.repositories.security-advisory-admin-permissions %} セキュリティ アドバイザリへのコラボレーターの追加に関する詳細については、「[リポジトリ セキュリティ アドバイザリへのコラボレータの追加](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)」を参照してください。

アクション | Write 権限 | 管理者のアクセス許可 |
------ | ----------------- | ----------------- |
セキュリティアドバイザリのドラフトを表示する | X | X |
コラボレーターをセキュリティ アドバイザリに追加する (「[リポジトリ セキュリティ アドバイザリへのコラボレータの追加](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)」を参照してください) | | X |
セキュリティアドバイザリでコメントを編集および削除する | X | X |
セキュリティ アドバイザリに一時的なプライベート フォークを作成する (「[一時的なプライベート フォークで、リポジトリのセキュリティ脆弱性を解決するためにコラボレートする](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)」を参照してください) | | X |
セキュリティ アドバイザリの一時的なプライベート フォークに変更を追加する (「[一時的なプライベート フォークで、リポジトリのセキュリティ脆弱性を解決するためにコラボレートする](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)」を参照してください) | X | X |
一時的なプライベート フォークに pull request を作成する (「[一時的なプライベート フォークで、リポジトリのセキュリティ脆弱性を解決するためにコラボレートする](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)」を参照してください) | X | X |
セキュリティ アドバイザリに変更をマージする (「[一時的なプライベート フォークで、リポジトリのセキュリティ脆弱性を解決するためにコラボレートする](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)」を参照してください) | | X |
メタデータをセキュリティ アドバイザリに追加して編集する (「[リポジトリ セキュリティ アドバイザリの公開](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)」を参照してください) | X | X |
セキュリティ アドバイザリのクレジットを追加および削除する (「[リポジトリ セキュリティ アドバイザリの編集](/code-security/repository-security-advisories/editing-a-repository-security-advisory)」を参照してください) | X | X |
セキュリティアドバイザリのドラフトをクローズする | | X |
セキュリティ アドバイザリを公開する (「[リポジトリ セキュリティ アドバイザリの公開](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)」を参照してください) | | X |

## 参考資料

- 「[リポジトリ セキュリティ アドバイザリへのコラボレータの追加](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)」
- 「[一時的なプライベート フォークで、リポジトリのセキュリティ脆弱性を解決するためにコラボレートする](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)」
- 「[リポジトリ セキュリティ アドバイザリからのコラボレータの削除](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)」
- 「[リポジトリ セキュリティ アドバイザリの撤回](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)」
