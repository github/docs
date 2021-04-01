---
title: チェック
redirect_from:
  - /v3/checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

Checks API を使用すると、リポジトリ内のコード変更に対して強力なチェックを実行する GitHub App を構築できます。 継続的インテグレーション、コードの構文チェック、コードのスキャンサービスを実行し、コミットについて詳細なフィードバックを行うアプリを作成できます。 詳しい情報については、「[Checks API を使ってみる](/rest/guides/getting-started-with-the-checks-api)」および「[Checks API で CI テストを作成する](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/)」を参照してください。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## チェックラン

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'runs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## チェックスイート

{% note %}

  **注釈:** コミット SHA を複数のブランチにプッシュした場合でも、GitHub App はコミット SHA ごとに 1 つの [`check_suite`](/webhooks/event-payloads/#check_suite) イベントのみを受け取ります。 ブランチ [`create`](/webhooks/event-payloads/#create) イベントをサブスクライブして、コミット SHA がブランチにプッシュされたタイミングを確認することができます。

{% endnote %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'suites' %}{% include rest_operation %}{% endif %}
{% endfor %}
