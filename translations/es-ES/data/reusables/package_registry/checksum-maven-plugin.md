{%- if currentVersion == "github-ae@latest" %}
1. En el elemento `plugins` del archivo *pom.xml*, agrega el plugin [checksum-maven-plugin](http://checksum-maven-plugin.nicoulaj.net/index.html) y configúralo para enviar por lo menos comprobaciones SHA-256.
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
