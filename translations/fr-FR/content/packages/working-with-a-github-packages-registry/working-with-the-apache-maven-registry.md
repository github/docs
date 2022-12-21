---
title: Utilisation du registre Apache Maven
intro: 'Vous pouvez configurer Apache Maven pour qu’il publie des packages dans {% data variables.product.prodname_registry %} et utilise les packages stockés dans {% data variables.product.prodname_registry %} comme dépendances dans un projet Java.'
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
ms.openlocfilehash: 0d2fafd69ac870a521fee8c7105b79bf8839d62c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061705'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Authentification auprès de {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Authentification avec un jeton d’accès personnel

{% data reusables.package_registry.required-scopes %}

Vous pouvez vous authentifier auprès de {% data variables.product.prodname_registry %} avec Apache Maven en modifiant votre fichier *~/.m2/settings.xml* pour y inclure votre jeton d’accès personnel. Créez un fichier *~/.m2/settings.xml* s’il n’existe pas encore.

Dans la balise `servers`, ajoutez une balise `server` enfant avec un `id`, en remplaçant *USERNAME* par vos nom d’utilisateur {% data variables.product.prodname_dotcom %} et *TOKEN* par votre jeton d’accès personnel.

Dans la balise `repositories`, configurez un dépôt en mappant l’`id` du dépôt à l’`id` que vous avez ajouté dans la balise `server` contenant vos informations d’identification. Remplacez {% ifversion ghes or ghae %}*HOSTNAME* par le nom d’hôte de {% data variables.product.product_location %}, et{% endif %} *OWNER* par le nom de l’utilisateur ou du compte d’organisation qui est propriétaire du dépôt. Étant donné que les lettres majuscules ne sont pas prises en charge, vous devez utiliser des lettres minuscules pour le propriétaire du dépôt, même si le nom d’utilisateur ou d’organisation {% data variables.product.prodname_dotcom %} contient des lettres majuscules.

Si vous voulez interagir avec plusieurs dépôts, vous pouvez ajouter chaque dépôt à des enfants `repository` distincts dans la balise `repositories`, en mappant l’`id` de chacun des dépôts aux informations d’identification dans la balise `servers`.

{% data reusables.package_registry.apache-maven-snapshot-versions-supported %}

{% ifversion ghes %} Si l’isolation de sous-domaine est activée pour votre instance : {% endif %}

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

{% ifversion ghes %} Si l’isolation de sous-domaine est désactivée pour votre instance :

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

## Publication d’un package

{% data reusables.package_registry.default-name %} Par exemple, {% data variables.product.prodname_dotcom %} va publier un package nommé `com.example:test` dans un dépôt appelé `OWNER/test`.

Si vous souhaitez publier plusieurs packages sur le même dépôt, vous pouvez inclure l’URL du dépôt dans l’élément `<distributionManagement>` du fichier *pom.xml*. {% data variables.product.prodname_dotcom %} va établir la correspondance avec le dépôt en fonction de ce champ. Comme le nom du dépôt fait également partie de l’élément `distributionManagement`, il n’y a pas d’autre étape pour publier plusieurs packages sur le même dépôt.

Pour plus d’informations sur la création d’un package, consultez la [documentation maven.apache.org](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html).

1. Modifiez l’élément `distributionManagement` du fichier *pom.xml* qui se trouve dans votre répertoire de packages, en remplaçant {% ifversion ghes or ghae %}*HOSTNAME* par le nom d’hôte de {% data variables.product.product_location %}, {% endif %}`OWNER` par le nom de l’utilisateur ou du compte d’organisation propriétaire du dépôt et `REPOSITORY` par le nom du dépôt contenant votre projet.{% ifversion ghes %}

  Si l’isolation de sous-domaine est activée pour votre instance :{% endif %}
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

## Installation d’un package

Pour installer un package Apache Maven à partir de {% data variables.product.prodname_registry %}, modifiez le fichier *pom.xml* pour y inclure le package en tant que dépendance. Si vous voulez installer des packages à partir de plusieurs dépôts, ajoutez une balise `repository` pour chacun d’eux. Pour plus d’informations sur l’utilisation d’un fichier *pom.xml* dans votre projet, consultez « [Présentation du POM](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html) » dans la documentation Apache Maven.

{% data reusables.package_registry.authenticate-step %}
2. Ajoutez les dépendances de package à l’élément `dependencies` du fichier *pom.xml* de votre projet, en remplaçant `com.example:test` par votre package.

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
3. Installez le package.

  ```shell
  $ mvn install
  ```

## Pour aller plus loin

- « [Utilisation du registre Gradle](/packages/working-with-a-github-packages-registry/working-with-the-gradle-registry) »
- « [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package) »
