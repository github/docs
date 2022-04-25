---
title: ユーザ
intro: Users migrations APIを利用できるのは、認証を受けたアカウントのオーナーのみです。
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

詳細は、「[その他の認証方式](/rest/overview/other-authentication-methods)」を参照してください。

{% data variables.migrations.user_migrations_intro %}ダウンロードできる移行データのリストは、「[ユーザー移行アーカイブをダウンロードする](#download-a-user-migration-archive)」を参照してください。

アーカイブをダウンロードするには、先にユーザ移行を開始する必要があります。 移行のステータスが `exported` になると、移行をダウンロードできます。

移行アーカイブを作成すると、7 日間ダウンロードできるようになります。 ただし、必要があればユーザ移行アーカイブはそれより以前に削除できます。 移行が `exported` になってからリポジトリのロックを解除すると、リポジトリの使用を再開でき、ソースデータが不要な場合にはリポジトリを削除することもできます。
