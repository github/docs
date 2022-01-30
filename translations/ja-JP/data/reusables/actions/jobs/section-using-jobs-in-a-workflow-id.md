Use `jobs.<job_id>` to give your job a unique identifier. `job_id`キーは文字列型で、その値はジョブの設定データのマップとなるものです。 `<job_id>`は、`jobs`オブジェクトごとに一意の文字列に置き換える必要があります。 `<job_id>`は、英字または`_`で始める必要があり、英数字と`-`、`_`しか使用できません。

#### Example: Creating jobs

In this example, two jobs have been created, and their `job_id` values are `my_first_job` and `my_second_job`.

```yaml
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```
