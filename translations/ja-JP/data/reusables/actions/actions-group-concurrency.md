並行ジョブもしくはワークフローがキューに入っている場合、リポジトリ内の同じ並行グループを使う他のジョブもしくはワークフローが進行中だと、キューイングされたジョブもしくはワークフローは`保留中`になります。 この並行グループ内の以前の保留中のジョブもしくはワークフローは、キャンセルされます。 同じ並行グループ内にある実行中のジョブもしくはワークフローもキャンセルするには、`cancel-in-progress: true`を指定してください。

##### 並行性とデフォルトの動作の使用例

{% raw %}
```yaml
concurrency: staging_environment
```
{% endraw %}

{% raw %}
```yaml
concurrency: ci-${{ github.ref }}
```
{% endraw %}

##### 並行性を使って進行中のジョブもしくは実行をキャンセルする例

{% raw %}
```yaml
concurrency: 
  group: ${{ github.head_ref }}
  cancel-in-progress: true
```
{% endraw %}
