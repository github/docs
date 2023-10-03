{%- ifversion ghae %}

1. In the `plugins` element of the _pom.xml_ file, add the [checksum-maven-plugin](https://search.maven.org/artifact/net.nicoulaj.maven.plugins/checksum-maven-plugin) plugin, and configure the plugin to send at least SHA-256 checksums.

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
