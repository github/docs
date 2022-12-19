---
title: Работа с реестром Apache Maven
intro: 'Вы можете настроить в Apache Maven публикацию пакетов в {% data variables.product.prodname_registry %} и использование пакетов, хранящихся в {% data variables.product.prodname_registry %}, в качестве зависимостей в проекте Java.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-apache-maven-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-apache-maven-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-apache-maven-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages
  - /packages/guides/configuring-apache-maven-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Apache Maven registry
ms.openlocfilehash: 7231e2298c02bcddec875d62ffb334b1d068c1a8
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099132'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Проверка подлинности в {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Проверка подлинности с помощью {% данных variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

Вы можете пройти проверку подлинности в {% данных variables.product.prodname_registry %} с помощью Apache Maven, изменив *файл ~/.m2/settings.xml* , чтобы включить данные {% variables.product.pat_v1 %}. Создайте новый файл *~/.m2/settings.xml*, если он не существует.

В теге `servers` добавьте дочерний `server` тег с `id`именем пользователя, заменив *имя пользователя* {% данными variables.product.prodname_dotcom %} и *ТОКЕН* своими данными {% variables.product.pat_generic %}.

В теге `repositories` настройте репозиторий, сопоставив `id` репозитория с `id`, добавленным в теге `server`, который содержит учетные данные. Замените {% ifversion ghes или ghae %}*HOSTNAME* именем узла {% данных variables.location.product_location %}, а *владелец* {% endif %} — именем учетной записи пользователя или организации, которая владеет репозиторием. Поскольку прописные буквы не поддерживаются, необходимо использовать строчные буквы для указания владельца репозитория, даже если имя пользователя или организации {% data variables.product.prodname_dotcom %} содержит прописные буквы.

Для взаимодействия с несколькими репозиториями можно добавить каждый репозиторий в отдельный дочерний элемент `repository` тега `repositories`, сопоставив `id` каждого репозитория с учетными данными в теге `servers`.

{% data reusables.package_registry.apache-maven-snapshot-versions-supported %}

{% ifversion ghes %} Если в вашем экземпляре включена изоляция поддоменов: {% endif %}

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">

  <activeProfiles>
    <activeProfile>github</activeProfile>
  </activeProfiles>

  <profiles>
    <profile>
      <id>github</id>
      <repositories>
        <repository>
          <id>central</id>
          <url>https://repo1.maven.org/maven2</url>
        </repository>
        <repository>
          <id>github</id>
          <url>https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}maven.HOSTNAME{% endif %}/OWNER/REPOSITORY</url>
          <snapshots>
            <enabled>true</enabled>
          </snapshots>
        </repository>
      </repositories>
    </profile>
  </profiles>

  <servers>
    <server>
      <id>github</id>
      <username>USERNAME</username>
      <password>TOKEN</password>
    </server>
  </servers>
</settings>
```

{% ifversion ghes %} Если в вашем экземпляре выключена изоляция поддоменов:

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">

  <activeProfiles>
    <activeProfile>github</activeProfile>
  </activeProfiles>

  <profiles>
    <profile>
      <id>github</id>
      <repositories>
        <repository>
          <id>central</id>
          <url>https://repo1.maven.org/maven2</url>
        </repository>
        <repository>
          <id>github</id>
          <url>HOSTNAME/_registry/maven/OWNER/REPOSITORY</url>
          <snapshots>
            <enabled>true</enabled>
          </snapshots>
        </repository>
      </repositories>
    </profile>
  </profiles>

  <servers>
    <server>
      <id>github</id>
      <username>USERNAME</username>
      <password>TOKEN</password>
    </server>
  </servers>
</settings>
```
{% endif %}

## Публикация пакета

{% data reusables.package_registry.default-name %} Например, {% data variables.product.prodname_dotcom %} опубликует пакет с именем `com.example:test` в репозитории `OWNER/test`.

Чтобы опубликовать несколько пакетов в одном репозитории, можно включить URL-адрес репозитория в элемент `<distributionManagement>` файла *pom.xml*. {% data variables.product.prodname_dotcom %} сопоставит репозиторий на основе этого поля. Поскольку имя репозитория также является частью элемента `distributionManagement`, дополнительные действия по публикации нескольких пакетов в одном репозитории не требуются.

Дополнительные сведения о создании пакета см. в [документации по maven.apache.org](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html).

1. Измените `distributionManagement` элемент файла *pom.xml* , расположенного в каталоге пакета, заменив {% ifversion ghes или ghae %}*HOSTNAME* именем узла {% данных variables.location.product_location %}, {% endif %}`OWNER` именем учетной записи пользователя или организации, которая владеет репозиторием и `REPOSITORY` именем репозитория, содержащего проект.{ % ghes ifversion %}

  Если в вашем экземпляре включена изоляция поддоменов:{% endif %}
  ```xml
  <distributionManagement>
     <repository>
       <id>github</id>
       <name>GitHub OWNER Apache Maven Packages</name>
       <url>https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}maven.HOSTNAME{% endif %}/OWNER/REPOSITORY</url>
     </repository>
  </distributionManagement>
  ```{% ifversion ghes %}
  If your instance has subdomain isolation disabled:
  ```xml
  <distributionManagement>
     <repository>
       <id>github</id>
       <name>GitHub OWNER Apache Maven Packages</name>
       <url>https://HOSTNAME/_registry/maven/OWNER/REPOSITORY</url>
     </repository>
  </distributionManagement>
  ```{% endif %}
{% data reusables.package_registry.checksum-maven-plugin %}
1. Publish the package.
   ```shell
   $ mvn deploy
  ```

{% data reusables.package_registry.viewing-packages %}

## Установка пакета

Чтобы установить пакет Apache Maven из {% data variables.product.prodname_registry %}, измените файл *pom.xml*, включив в него пакет в качестве зависимости. Чтобы установить пакеты из нескольких репозиториев, добавьте для каждого из них тег `repository`. Дополнительные сведения об использовании файла *pom.xml* в проекте см. в разделе "[Введение в POM](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html)" в документации по Apache Maven.

{% data reusables.package_registry.authenticate-step %}
2. Добавьте зависимости пакета в элемент `dependencies` файла проекта *pom.xml*, заменив `com.example:test` своим пакетом.

  ```xml
  <dependencies>
    <dependency>
      <groupId>com.example</groupId>
      <artifactId>test</artifactId>
      <version>1.0.0-SNAPSHOT</version>
    </dependency>
  </dependencies>
  ```
{% data reusables.package_registry.checksum-maven-plugin %}
3. Установите пакет.

  ```shell
  $ mvn install
  ```

## Дополнительные материалы

- [Работа с реестром Gradle](/packages/working-with-a-github-packages-registry/working-with-the-gradle-registry)
- "[Удаление и восстановление пакета](/packages/learn-github-packages/deleting-and-restoring-a-package)"
