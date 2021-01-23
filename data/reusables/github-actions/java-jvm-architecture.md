### Specifying the JVM version and architecture

The starter workflow template sets up the `PATH` to contain OpenJDK 8 for the x64 platform. If you want to use a different version of Java, or target a different architecture (`x64` or `x86`), you can use the `setup-java` action to choose a different Java runtime environment.

For example, to use version 9.0.4 of the JDK for the x64 platform, you can use the `setup-java` action and configure the `java-version` and `architecture` parameters to `'9.0.4'` and `x64`.

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

For more information, see the [`setup-java`](https://github.com/actions/setup-java) action.
