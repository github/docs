{%- ifversion ghae %}
1. No elemento `plugins` do arquivo *pom.xml*, adicione o plugin [checksum-maven-plugin](http://checksum-maven-plugin.nicoulaj.net/index.html) e configure o plugin para enviar pelo menos comprovações SHA-256.
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
