### 指定 JVM 版本和架构

初学者工作流程将 `PATH` 设置为包含 OpenJDK 8，用于 x64 平台。 如果要使用不同的 Java 版本或面向不同的架构（`x64` 或 `x86`），您可以使用 `setup-java` 操作选择不同的 Java 运行时环境。

例如，要使用 Adoptium 提供的用于 x611 平台的 11 版 JDK，您可以使用 `setup-java` 操作，将 `java-version`、`distribution` 和 `architecture` 参数配置为 `'11'`、`'adopt'` 和 `x64`。

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - name: Set up JDK 11 for x64
    uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
      architecture: x64
```

更多信息请参阅 [`setup-java`](https://github.com/actions/setup-java) 操作。
