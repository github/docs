---
title: リポジトリセキュリティアドバイザリの権限レベル
intro: リポジトリセキュリティアドバイザリで取れるアクションは、セキュリティアドバイザリに対して持っているのが管理権限なのか書き込み権限なのかによります。
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
shortTitle: 権限レベル
---

この記事は、リポジトリレベルのセキュリティアドバイザリにのみ適用されます。 [github.com/advisories](https://github.com/advisories)にある{% data variables.product.prodname_advisory_database %}内のグローバルセキュリティアドバイザリには、誰でもコントリビュートできます。 グローバルアドバイザリを編集しても、そのアドバイザリがリポジトリでどのように表示されるかは変更されず、影響されることもありません。  詳しい情報については「[{% data variables.product.prodname_advisory_database %}中のセキュリティアドバイザリの編集](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)」を参照してください。

## 権限の概要

{% data reusables.repositories.security-advisory-admin-permissions %} セキュリティアドバイザリへのコラボレータの追加に関する詳しい情報については「[リポジトリセキュリティアドバイザリへのコラボレータの追加](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)」を参照してください。

| アクション                                                                                                                                                                                                                                | Write 権限 | Admin 権限 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | -------- |
| セキュリティアドバイザリのドラフトを表示する                                                                                                                                                                                                               | X        | X        |
| セキュリティアドバイザリへのコラボレータの追加（「[リポジトリセキュリティアドバイザリへのコラボレータの追加](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)」参照）                                                                   |          | X        |
| セキュリティアドバイザリでコメントを編集および削除する                                                                                                                                                                                                          | X        | X        |
| セキュリティアドバイザリに一時的なプライベートフォークを作成する (「[一時的なプライベートフォークで、リポジトリのセキュリティ脆弱性を解決するためにコラボレートする](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)」を参照)    |          | X        |
| セキュリティアドバイザリの一時的なプライベートフォークに変更を追加する (「[一時的なプライベートフォークで、リポジトリのセキュリティ脆弱性を解決するためにコラボレートする](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)」を参照) | X        | X        |
| 一時的なプライベートフォークにPull Requestを作成する (「[一時的なプライベートフォークで、リポジトリのセキュリティ脆弱性を解決するためにコラボレートする](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)」を参照)    | X        | X        |
| セキュリティアドバイザリの変更をマージする (「[一時的なプライベートフォークで、リポジトリのセキュリティ脆弱性を解決するためにコラボレートする](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)」を参照)               |          | X        |
| セキュリティアドバイザリのメタデータを追加および編集する (「[リポジトリのセキュリティアドバイザリを公開する](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)」を参照)                                                                               | X        | X        |
| セキュリティアドバイザリのクレジットを追加および削除する（「[リポジトリのセキュリティアドバイザリを編集する](/code-security/repository-security-advisories/editing-a-repository-security-advisory)」を参照）                                                                                   | X        | X        |
| セキュリティアドバイザリのドラフトをクローズする                                                                                                                                                                                                             |          | X        |
| セキュリティアドバイザリを公開する (「[リポジトリのセキュリティアドバイザリを公開する](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)」を参照)                                                                                          |          | X        |

## 参考リンク

- 「[リポジトリセキュリティアドバイザリにコラボレータを追加する](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)」
- 「[一時的なプライベートフォークで、リポジトリセキュリティ脆弱性を解決するためにコラボレートする](/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)」
- 「[リポジトリセキュリティアドバイザリからコラボレータを削除する](/code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)」
- 「[リポジトリセキュリティアドバイザリの撤回](/code-security/repository-security-advisories/withdrawing-a-repository-security-advisory)」
