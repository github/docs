##### 使用单一事件的示例

```yaml
# Triggered when code is pushed to any branch in a repository
on: push
```

##### 使用事件列表的示例

```yaml
# Triggers the workflow on push or pull request events
on: [push, pull_request]
```

##### 使用具有活动类型或配置的多个事件示例

如果您需要为一个事件指定活动类型或配置，必须分别配置每个事件。 您必须为所有事件附加冒号 (`:</0)，包括没有配置的事件。</p>

<pre><code class="yaml">on:
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
`</pre>
