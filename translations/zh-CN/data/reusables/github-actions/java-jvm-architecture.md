### 指定 JVM 版本和架构

初学者工作流程模板将 `PATH` 设置为包含 OpenJDK 8，用于 x64 平台。 如果要使用不同的 Java 版本或面向不同的架构（`x64` 或 `x86`），您可以使用 `setup-java` 操作选择不同的 Java 运行时环境。

例如，要使用 9.0.4 版本的 JDK，用于 x64 平台，您可以使用 `setup-java` 操作，将 `java-version` 和 `architecture` 参数配置为 `'9.0.4'` 和 `x64`。

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - name: Set up JDK 9.0.4 for x64
    uses: actions/setup-java@v1
    with:
      java-version: '9.0.4'
      architecture: x64
```
{% endraw %}

更多信息请参阅 [`setup-java`](https://github.com/actions/setup-java) 操作。
