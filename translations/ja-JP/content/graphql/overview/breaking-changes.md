---
title: 破壊的変更
intro: '最近の、及び今後の{% data variables.product.prodname_dotcom %} GraphQL APIに対する破壊的変更について学んでください。'
redirect_from:
  - /v4/breaking_changes
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### 破壊的変更について

破壊的変更は、インテグレーターからのアクションが必要になるかもしれない変更です。 これらの変更は、2つに分類されます。

  - **破壊的：** GraphQL APIに対する既存のクエリを損なう変更。 たとえば、フィールドの削除は破壊的変更です。
  - **危険：** 既存のクエリを損なうことはないものの、クライアントの実行時の振る舞いに影響するかもしれない変更です。 enum値の追加は危険な変更の例です。

私たちは、インテグレーターに安定したAPIを提供するよう努めています。 新しい機能が進化を続けている場合、それは[スキーマプレビュー](/graphql/overview/schema-previews)の背後でリリースしています。

今後の破壊的変更のアナウンスは、遅くてもGraphQLスキーマに対して変更を行う3ヶ月前にアナウンスを行い、インテグレーターに必要な調整を行う時間を提供します。 変更は、四半期の初日（1月1日、4月1日、7月1日、10月1日）に適用されます。 たとえば、変更を1月115日にアナウンスした場合、その変更は7月1日に行われます。

{% for date in graphql.upcomingChangesForCurrentVersion %}
### {{ date[0] }}にスケジュールされた変更

{% for change in date[1] %}
<ul>
<li><span class="border rounded-1 m-1 p-1 {% if change.criticality == 'breaking' %}border-red bg-red-light{% else %}border-purple bg-purple-light{% endif %}">{% if change.criticality == 'breaking' %}破壊的{% else %}危険{% endif %}</span>変更が<code>{{ change.location }}</code>に対して行われます。

<p><b>説明：</b>{{ change.description }}</p>

<p><b>理由：</b>{{ change.reason }}</p>
</li>
</ul>

{% endfor %}
{% endfor %}
