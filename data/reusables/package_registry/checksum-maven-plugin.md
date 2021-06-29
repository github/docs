{%- ifversion ghae %}
1. In the `plugins` element of the *pom.xml* file, add the [checksum-maven-plugin](http://checksum-maven-plugin.nicoulaj.net/index.html) plugin, and configure the plugin to send at least SHA-256 checksums.
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
