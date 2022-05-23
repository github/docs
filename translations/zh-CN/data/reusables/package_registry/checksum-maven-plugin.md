{%- ifversion ghae %}
1. 在 *pom.xml* 文件的 `plugins` 元素中，添加 [checksum-maven-plugin](https://search.maven.org/artifact/net.nicoulaj.maven.plugins/checksum-maven-plugin) 插件，并配置插件发送至少 SHA-256 校验和。
    ```xml
    <plugins>
        <plugin>
            <groupId>net.nicoulaj.maven.plugins</groupId>
            <artifactId>checksum-maven-plugin</artifactId>
            <version>1.9</version>
            <executions>
                <execution>
                <goals>
                    <goal>artifacts</goal>
                </goals>
                </execution>
            </executions>
            <configuration>
            <algorithms>
                <algorithm>SHA-256</algorithm>
            </algorithms>
            </configuration>
        </plugin>
    </plugins>
    ```
{%- endif %}
