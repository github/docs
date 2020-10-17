##### **1つのイベントを使用する例**

```yaml
# Triggered when code is pushed to any branch in a repository
on: push
```

##### **イベントのリストを使用する例**

```yaml
# Triggers the workflow on push or pull request events
on: [push, pull_request]
```

##### **アクティビティの種類もしくは設定を伴う複数のイベントを使用する例**

イベントに対してアクティビティの種類もしくは設定を指定する必要がある場合、それぞれのイベントを個別に設定しなければなりません。 設定を持たないイベントも含め、すべてのイベントにはコロン (`:`)を追加しなければなりません。

```yaml
on:
  # Trigger the workflow on push or pull request,
  # but only for the main branch
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  # Also trigger on page_build, as well as release created events
  page_build:
  release:
    types: # This configuration does not affect the page_build event above
      - created
```
