`jobs.<job_id>.environment`を使って、ジョブが参照する環境を定義してください。 環境を参照するジョブがランナーに送られる前に、その環境のすべての保護ルールはパスしなければなりません。 詳しい情報については「[デプロイメントの環境の利用](/actions/deployment/using-environments-for-deployment)」を参照してください。

環境は、環境の`name`だけで、あるいは`name` and `url`を持つenvironmentオブジェクトとして渡すことができます。 デプロイメントAPIでは、このURLは`environment_url`にマップされます。 デプロイメントAPIに関する詳しい情報については「[デプロイメント](/rest/reference/repos#deployments)」を参照してください。

### 例: 単一の環境名の使用
{% raw %}
```yaml
environment: staging_environment
```
{% endraw %}

### 例: 環境名とURLの使用

```yaml
environment:
  name: production_environment
  url: https://github.com
```

URLには式を指定でき、[`secrets` context](/actions/learn-github-actions/contexts#contexts)以外の任意のコンテキストを利用できます。 式に関する詳しい情報については「[式](/actions/learn-github-actions/expressions)」を参照してください。

### 例: URLとしての出力の使用
{% raw %}
```yaml
environment:
  name: production_environment
  url: ${{ steps.step_id.outputs.url_output }}
```
{% endraw %}
