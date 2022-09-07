---
ms.openlocfilehash: 2ca2056a8941ee42d41803dd0e8570c1e2877a89
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145100392"
---
{%- ifversion ghae %}
1. 在 pom.xml 文件的 `plugins` 元素中，添加 [checksum-maven-plugin](https://search.maven.org/artifact/net.nicoulaj.maven.plugins/checksum-maven-plugin) 插件，并配置该插件以发送至少 SHA-256 的校验和。
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
