`jobs.<job_id>`を使い、ジョブに一意の識別子を与えてください。 `job_id`キーは文字列型で、その値はジョブの設定データのマップとなるものです。 `<job_id>`は、`jobs`オブジェクトごとに一意の文字列に置き換える必要があります。 `<job_id>`は、英字または`_`で始める必要があり、英数字と`-`、`_`しか使用できません。

#### 例: ジョブの作成

この例では2つのジョブが作成されており、その`job_id`の値は`my_first_job`と`my_second_job`です。

```yaml
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```
