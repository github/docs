`on.<event_name>.types`を使って、ワークフローの実行をトリガーするアクティビティの種類を定義してください。 ほとんどの GitHub イベントは、2 つ以上のアクティビティタイプからトリガーされます。  たとえば、`label`はラベルの`created`、`edited`、`deleted`によってトリガーされます。 `types`キーワードを使用すると、ワークフローを実行させるアクティブの範囲を狭くすることができます。 webhook イベントをトリガーするアクティビティタイプが1つだけの場合、`types`キーワードは不要です。

イベント`types`の配列を使用できます。 各イベントとそのアクティビティタイプの詳細については、「[ワークフローをトリガーするイベント](/actions/using-workflows/events-that-trigger-workflows#available-events)」を参照してください。

```yaml
on:
  label:
    types: [created, edited]
```
