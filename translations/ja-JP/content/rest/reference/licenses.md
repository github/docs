---
title: ライセンス
redirect_from:
  - /v3/licenses
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

ライセンス API は、広く利用されているオープンソースライセンスに関するメタデータと、特定のプロジェクトのライセンスファイルに関する情報を返します。

ライセンス API は[オープンソースの Ruby Gem ライセンス](https://github.com/benbalter/licensee)を使用して、プロセスのライセンスを特定しようとします。 ライセンシーは、プロジェクトの `LICENSE` ファイル (存在する場合) を既知のライセンスの短いリストと照合します。 そのためライセンス API では、プロジェクト依存関係のライセンス、あるいはプロジェクトのライセンスをドキュメント化するその他の方法、たとえばドキュメントにおけるライセンス名の参照などは考慮されません。

ライセンスが一致した場合、返されるライセンスキーおよび名前は[SPDX 仕様](https://spdx.org/)に適合します。

**注釈:** 以下のエンドポイントも、リポジトリのライセンス情報を返します。

- [リポジトリの取得](/rest/reference/repos#get-a-repository)
- [ユーザのリポジトリの一覧表示](/rest/reference/repos#list-repositories-for-a-user)
- [Organization リポジトリの一覧表示](/rest/reference/repos#list-organization-repositories)
- [フォークの一覧表示](/rest/reference/repos#list-forks)
- [ユーザが Watch しているリポジトリの一覧表示](/rest/reference/activity#list-repositories-watched-by-a-user)
- [Team リポジトリの一覧表示](/rest/reference/teams#list-team-repositories)

{% warning %}

GitHub にはいろいろなものがありますが、法律事務所ではありません。 そのため、GitHub が法律上の助言をすることはありません。 ライセンス API を使用したり、それに関して当社にメールを送信したりすることは法律上の助言に該当せず、弁護士と依頼人の関係を確立するものでもありません。 特定のライセンスで許可される範囲について疑問がある場合は、先に進む前にそれぞれの顧問弁護士にご相談ください。 むしろ、法的な結果が想定される、あるいは法律上の権利に影響しうる決定を下す場合には、必ずその前に各自の弁護士にご相談ください。

GitHub は、ユーザがオープンソースライセンスと、それを利用するプロジェクトに関する情報を得るためにライセンス API を作成しました。 お役に立てれば幸いですが、当社は (少なくとも従業員のほとんどは) 弁護士ではなく、他の方と同じように誤りがないとは言えません。 したがって、GitHub は API を「現状のまま」提供するものであり、その API で、または API を通じて提供するいかなる情報またはライセンスに関しても一切の保証をせず、この API の使用に起因する損害についての責任を負いません。

{% endwarning %}

{% include rest_operations_at_current_path %}
