---
title: Trabalhando com o registro do Apache Maven
intro: 'Você pode configurar o Apache Maven para publicar pacotes no {% data variables.product.prodname_registry %} e usar pacotes armazenados no {% data variables.product.prodname_registry %} como dependências em um projeto Java.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061703'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Autenticar-se no {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Efetuando a autenticação com um token de acesso pessoal

{% data reusables.package_registry.required-scopes %}

Autentique-se no {% data variables.product.prodname_registry %} com o Apache Maven editando o arquivo *~/.m2/settings.xml* para incluir seu token de acesso pessoal. Crie um arquivo *~/.m2/settings.xml* se não houver.

Na tag `servers`, adicione uma tag filho `server` com uma `id`, substituindo *USERNAME* pelo nome de usuário do {% data variables.product.prodname_dotcom %} e *TOKEN* pelo seu token de acesso pessoal.

Na tag `repositories`, configure um repositório mapeando a `id` do repositório para a `id` adicionada à tag `server` que contém suas credenciais. Substitua {% ifversion ghes or ghae %}*HOSTNAME* pelo nome do host do {% data variables.product.product_location %} e{% endif %} *OWNER* pelo nome da conta de usuário ou de organização que é o proprietário do repositório. Como não é permitido usar letras maiúsculas, é preciso usar letras minúsculas no nome do proprietário do repositório, mesmo que o nome do usuário ou da organização no {% data variables.product.prodname_dotcom %} contenha letras maiúsculas.

Caso deseje interagir com vários repositórios, adicione cada repositório para separar os filhos do `repository` na tag `repositories`, mapeando a `id` de cada um para as credenciais contidas na marca `servers`.

{% data reusables.package_registry.apache-maven-snapshot-versions-supported %}

{% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio habilitado: {% endif %}

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

{% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio desabilitado:

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

## Publicando um pacote

{% data reusables.package_registry.default-name %} Por exemplo, o {% data variables.product.prodname_dotcom %} publicará um pacote chamado `com.example:test` em um repositório chamado `OWNER/test`.

Caso deseje publicar vários pacotes no mesmo repositório, inclua a URL do repositório no elemento `<distributionManagement>` do arquivo *pom.xml*. O {% data variables.product.prodname_dotcom %} fará a correspondência do repositório com base nesse campo. Como o nome do repositório também faz parte do elemento `distributionManagement`, não há etapas adicionais para publicar vários pacotes no mesmo repositório.

Para obter mais informações sobre como criar um pacote, confira a [documentação do maven.apache.org](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html).

1. Edite o elemento `distributionManagement` do arquivo *pom.xml* localizado no diretório do pacote, substituindo {% ifversion ghes or ghae %}*HOSTNAME* pelo nome do host do {% data variables.product.product_location %}, {% endif %}`OWNER` pelo nome da conta de usuário ou de organização que é o proprietário do repositório e `REPOSITORY` pelo nome do repositório que contém o projeto.{% ifversion ghes %}

  Se sua instância tiver o isolamento de subdomínio habilitado:{% endif %}
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

## Instalando um pacote

Para instalar um pacote do Apache Maven por meio do {% data variables.product.prodname_registry %}, edite o arquivo *pom.xml* para incluir o pacote como uma dependência. Caso deseje instalar pacotes de mais de um repositório, adicione uma tag `repository` a cada um. Para obter mais informações sobre como usar um arquivo *pom.xml* no seu projeto, confira "[Introdução ao POM](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html)" na documentação do Apache Maven.

{% data reusables.package_registry.authenticate-step %}
2. Adicione as dependências do pacote ao elemento `dependencies` do arquivo *pom.xml* do projeto, substituindo `com.example:test` pelo pacote.

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
3. Instale o pacote.

  ```shell
  $ mvn install
  ```

## Leitura adicional

- "[Como trabalhar com o registro do Gradle](/packages/working-with-a-github-packages-registry/working-with-the-gradle-registry)"
- "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)"
