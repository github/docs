利用できるスコープとアクセスの値は以下のとおりです。

```yaml
権限:
  actions: read|write|none
  checks: read|write|none
  contents: read|write|none
  deployments: read|write|none
  issues: read|write|none
  packages: read|write|none
  pull-requests: read|write|none
  repository-projects: read|write|none
  security-events: read|write|none
  statuses: read|write|none
```

これらのスコープのいずれかに対してアクセスを指定した場合、指定されなかったスコープは`none`に設定されます。

利用可能なすべてのスコープに対する読み取りあるいは書き込みアクセス権を定義するためには、以下の構文が使えます。

```yaml
permissions: read-all|write-all
```