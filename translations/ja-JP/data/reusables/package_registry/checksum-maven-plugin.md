---
ms.openlocfilehash: 2ca2056a8941ee42d41803dd0e8570c1e2877a89
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145121998"
---
{%- ifversion ghae %}
1. *pom.xml* ファイルの `plugins` 要素で、[checksum-maven-plugin](https://search.maven.org/artifact/net.nicoulaj.maven.plugins/checksum-maven-plugin) プラグインを追加し、少なくとも SHA-256 チェックサムを送信するようにプラグインを構成します。
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
