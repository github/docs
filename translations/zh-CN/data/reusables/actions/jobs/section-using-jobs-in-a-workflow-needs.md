使用 `jobs.<job_id>.needs` 确定必须成功完成才能运行此作业的任何作业。 它可以是一个字符串，也可以是字符串数组。 如果某个作业失败，则所有需要它的作业都会被跳过，除非这些作业使用让该作业继续的条件表达式。 如果运行包含一系列相互需要的作业，则从故障点开始，故障将应用于依赖关系链中的所有作业。

#### 示例：需要成功的依赖作业

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

在此示例中，`job1` 必须在 `job2` 开始之前成功完成，而 `job3` 要等待 `job1` 和 `job2` 完成。

此示例中的作业按顺序运行：

1. `job1`
2. `job2`
3. `job3`

#### 示例：不需要成功的依赖作业

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: {% raw %}${{ always() }}{% endraw %}
    needs: [job1, job2]
```

在此示例中，`job3` 使用 `always()` 条件表达式，因此它始终在 `job1` 和 `job2` 完成后运行，不管它们是否成功。 更多信息请参阅“[表达式](/actions/learn-github-actions/expressions#status-check-functions)”。
