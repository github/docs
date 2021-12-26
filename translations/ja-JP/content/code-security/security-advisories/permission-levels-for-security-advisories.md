---
title: セキュリティアドバイザリの権限レベル
intro: セキュリティアドバイザリで実行できるアクションは、セキュリティアドバイザリに対する管理者権限や書き込み権限を持っているかどうかによって変わります。
redirect_from:
  - /articles/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-security-advisories
versions:
  free-pro-team: '*'
type: reference
topics:
  - Security advisories
  - Vulnerabilities
  - Permissions
---

### 権限の概要

{% data reusables.repositories.security-advisory-admin-permissions %}セキュリティアドバイザリへのコラボレータの追加についての詳細については、「[セキュリティアドバイザリからコラボレータを追加する](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory)」を参照してください。

| アクション                                                                                                                                                                                                   | Write 権限 | Admin 権限 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| セキュリティアドバイザリのドラフトを表示する                                                                                                                                                                                  | X        | X        |
| セキュリティアドバイザリにコラボレータを追加する (「[セキュリティアドバイザリにコラボレータを追加する](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory)」を参照)                                                      |          | X        |
| セキュリティアドバイザリでコメントを編集および削除する                                                                                                                                                                             | X        | X        |
| セキュリティアドバイザリに一時的なプライベートフォークを作成する (「[一時的なプライベートフォークで、セキュリティ脆弱性を解決するためにコラボレートする](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)」を参照)                            |          | X        |
| セキュリティアドバイザリの一時的なプライベートフォークに変更を追加する (「[一時的なプライベートフォークで、セキュリティ脆弱性を解決するためにコラボレートする](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)」を参照)                         | X        | X        |
| 一時的なプライベートフォークにプルリクエストを作成する (「[一時的なプライベートフォークで、セキュリティ脆弱性を解決するためにコラボレートする](/github/managing-security-vulnerabilities/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)」を参照) | X        | X        |
| セキュリティアドバイザリの変更をマージする (「[一時的なプライベートフォークで、セキュリティ脆弱性を解決するためにコラボレートする](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)」を参照)                                       |          | X        |
| セキュリティアドバイザリのメタデータを追加および編集する (「[セキュリティアドバイザリを公開する](/github/managing-security-vulnerabilities/publishing-a-security-advisory)」を参照)                                                                       | X        | X        |
| セキュリティアドバイザリのクレジットを追加および削除する（「[セキュリティアドバイザリを編集する](/github/managing-security-vulnerabilities/editing-a-security-advisory#about-credits-for-security-advisories)」を参照）                                     | X        | X        |
| セキュリティアドバイザリのドラフトをクローズする                                                                                                                                                                                |          | X        |
| セキュリティアドバイザリを公開する (「[キュリティアドバイザリを公開する](/github/managing-security-vulnerabilities/publishing-a-security-advisory)」を参照)                                                                                   |          | X        |

### 参考リンク

- 「[セキュリティアドバイザリにコラボレータを追加する](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory)」
- 「[一時的なプライベートフォークで、セキュリティ脆弱性を解決するためにコラボレートする](/github/managing-security-vulnerabilities/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)」
- 「[セキュリティアドバイザリからコラボレータを削除する](/github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory)」
- 「[セキュリティアドバイザリを撤回する](/github/managing-security-vulnerabilities/withdrawing-a-security-advisory)」
