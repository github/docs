利用可能なスコープとアクセス値:

```yaml
permissions:
  actions: read|write|none
  checks: read|write|none
  contents: read|write|none
  deployments: read|write|none{% ifversion fpt or ghec %}
  id-token: read|write|none{% endif %}
  issues: read|write|none
  discussions: read|write|none
  packages: read|write|none
  pages: read|write|none
  pull-requests: read|write|none
  repository-projects: read|write|none
  security-events: read|write|none
  statuses: read|write|none
```

これらのスコープのいずれかのアクセスを指定した場合、指定されたなかったものはすべて`none`に設定されます。

以下の構文を使って、読み取りもしくは書き込みアクセスを利用可能なすべてのスコープに定義できます。

```yaml
permissions: read-all|write-all
```

以下の構文を使って、利用可能なすべてのスコープの権限を無効化できます。

```yaml
permissions: {}
```
