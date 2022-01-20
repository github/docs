ワークフローの実行をトリガーする特定のアクティビティ。 ほとんどの GitHub イベントは、2 つ以上のアクティビティタイプからトリガーされます。  For example, the `label` is triggered when a label is `created`, `edited`, or `deleted`. `types`キーワードを使用すると、ワークフローを実行させるアクティブの範囲を狭くすることができます。 webhook イベントをトリガーするアクティビティタイプが1つだけの場合、`types`キーワードは不要です。

イベント`types`の配列を使用できます。 各イベントとそのアクティビティタイプの詳細については、「[ワークフローをトリガーするイベント](/articles/events-that-trigger-workflows#webhook-events)」を参照してください。

```yaml
on:
  label:
    types: [created, edited]
```