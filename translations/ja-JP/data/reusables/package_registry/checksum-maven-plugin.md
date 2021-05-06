{%- if currentVersion == "github-ae@latest" %}
1. *pom.xml*ファイルの`plugins`要素に[checksum-maven-plugin](http://checksum-maven-plugin.nicoulaj.net/index.html)プラグインを追加し、そのプラグインを最低でもSHA-256のチェックサムを送信するように設定してください。
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
