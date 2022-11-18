---
ms.openlocfilehash: 2ca2056a8941ee42d41803dd0e8570c1e2877a89
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878662"
---
{%- ifversion ghae %}
1. *pom.xml* 파일의 `plugins` 요소에서 [checksum-maven-plugin](https://search.maven.org/artifact/net.nicoulaj.maven.plugins/checksum-maven-plugin) 플러그 인을 추가하고 최소 SHA-256 체크섬을 보내도록 플러그 인을 구성합니다.
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
