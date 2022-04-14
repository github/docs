Use `jobs.<job_id>.needs` to identify any jobs that must complete successfully before this job will run. 文字列型または文字列の配列です。 1つのジョブが失敗した場合、失敗したジョブを続行するような条件式を使用していない限り、そのジョブを必要としている他のジョブはすべてスキップされます。

#### Example: Requiring successful dependent jobs

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

この例では、`job1`が正常に完了してから`job2`が始まり、`job3`は`job1`と`job2`が完了するまで待機します。

つまり、この例のジョブは逐次実行されるということです。

1. `job1`
2. `job2`
3. `job3`

#### Example: Not requiring successful dependent jobs

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: {% raw %}${{ always() }}{% endraw %}
    needs: [job1, job2]
```

この例では、`job3`は条件式の`always()` を使っているので、`job1`と`job2`が成功したかどうかにかかわらず、それらのジョブが完了したら常に実行されます。 For more information, see "[Expressions](/actions/learn-github-actions/expressions#job-status-check-functions)."
