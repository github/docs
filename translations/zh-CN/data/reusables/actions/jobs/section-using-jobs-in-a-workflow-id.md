Use `jobs.<job_id>` to give your job a unique identifier. 键值 `job_id` 是一个字符串，其值是作业配置数据的映像。 必须将 `<job_id>` 替换为 `jobs` 对象唯一的字符串。 `<job_id>` 必须以字母或 `_` 开头，并且只能包含字母数字字符、`-` 或 `_`。

#### Example: Creating jobs

In this example, two jobs have been created, and their `job_id` values are `my_first_job` and `my_second_job`.

```yaml
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```
