---
title: Configurar o Apache Maven para uso com o GitHub Packages
intro: 'Você pode configurar o Apache Maven para publicar pacotes no {% data variables.product.prodname_registry %} e usar pacotes armazenados no {% data variables.product.prodname_registry %} como dependências em um projeto Java.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-apache-maven-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-apache-maven-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-apache-maven-for-use-with-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

**Note:** When installing or publishing a docker image, {% data variables.product.prodname_registry %} does not currently support foreign layers, such as Windows images.

### Autenticar-se no {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

#### Efetuando a autenticação com um token de acesso pessoal

{% data reusables.package_registry.required-scopes %}

Você pode efetuar a autenticação no {% data variables.product.prodname_registry %} com o Apache Maven editando seu arquivo *~/.m2/settings.xml* para incluir seu token de acesso pessoal. Criar um novo arquivo *~/.m2/settings.xml*, caso não exista um.

Na etiqueta `servidores`, adicione uma etiqueta `servidor` secundário com um `Id`, substituindo *USERNAME* pelo o seu nome de usuário {% data variables.product.prodname_dotcom %} e *Token* pelo seu token de acesso pessoal.

Na etiqueta `repositórios`, configure um repositório mapeando o `id` do repositório com o `id` que você adicionou na etiqueta `servidor` que contém as suas credenciais. Substituir {% if enterpriseServerVersions contains currentVersion %}*HOSTNAME* pelo nome do host de sua instância {% data variables.product.prodname_ghe_server %} {% endif %}*REPOSITÓRIO* com o nome do repositório no qual você gostaria de publicar um pacote ou instalar um pacote, e *OWNER* com o nome do usuário ou conta de organização proprietária do repositório. Como não é permitido usar letras maiúsculas, é preciso usar letras minúsculas no nome do proprietário do repositório, mesmo que o nome do usuário ou da organização no {% data variables.product.prodname_dotcom %} contenha letras maiúsculas.

Se desejar interagir com vários repositórios, você poderá adicionar cada repositório para separar os `repositório` secundários na etiqueta `repositórios`, mapeando o `ID` de cada um com as credenciais na etiqueta `servidores`.

{% data reusables.package_registry.apache-maven-snapshot-versions-supported %}

{% if enterpriseServerVersions contains currentVersion %}
Se sua instância tem o isolamento de subdomínio habilitado:
{% endif %}

```
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
          <releases><enabled>true</enabled></releases>
          <snapshots><enabled>true</enabled></snapshots>
        </repository>
        <repository>
          <id>github</id>
          <name>GitHub OWNER Apache Maven Packages</name>
          <url>https://{% if currentVersion == "free-pro-team@latest" %}maven.pkg.github.com{% else %}maven.HOSTNAME{% endif %}/OWNER/REPOSITORY</url>
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

{% if enterpriseServerVersions contains currentVersion %}
Se sua instância tem o isolamento de subdomínio desabilitado:

```
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
          <releases><enabled>true</enabled></releases>
          <snapshots><enabled>true</enabled></snapshots>
        </repository>
        <repository>
          <id>github</id>
          <name>GitHub OWNER Apache Maven Packages</name>
          <url>https://HOSTNAME/_registry/maven/OWNER/REPOSITORY</url>
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

#### Efetuando a autenticação com o `GITHUB_TOKEN`

{% data reusables.package_registry.package-registry-with-github-tokens %}

### Publicar um pacote

O {% data reusables.package_registry.default-name %} por exemplo, o {% data variables.product.prodname_dotcom %} publicará um pacote denominado `com.example:test` em um repositório denominado`OWNER/test`.

Caso queira publicar vários pacotes no mesmo repositório, você poderá incluir a URL do repositório no `<distributionManagement>` elemento do arquivo *pom.xml*. O {% data variables.product.prodname_dotcom %} fará a correspondência do repositório com base nesse campo. Como o nome do repositório também faz parte do elemento `distributionManagement`, não há etapas adicionais para publicar vários pacotes no mesmo repositório.

Para obter mais informações sobre como criar um pacote, consulte a [documentação maven.apache.org](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html).

1. Edit the `distributionManagement` element of the *pom.xml* file located in your package directory, replacing `OWNER` with the name of the user or organization account that owns the repository and `REPOSITORY` with the name of the repository containing your project.

{% if enterpriseServerVersions contains currentVersion %}*NOME DE HOST* pelo nome de host da sua instância de {% data variables.product.prodname_ghe_server %} {% endif %}`PROPRIETÁRIO` pelo nome do usuário ou conta da organização proprietária do repositório e `REPOSITÓRIO` pelo nome do repositório que contém o seu projeto.
  {% if enterpriseServerVersions contains currentVersion %}
  Se sua instância tem o isolamento de subdomínio habilitado:
  {% endif %}
  ```
  <distributionManagement>
     <repository>
       <id>github</id>
       <name>GitHub OWNER Apache Maven Packages</name>
       <url>https://{% if currentVersion == "free-pro-team@latest" %}maven.pkg.github.com{% else %}maven.HOSTNAME{% endif %}/OWNER/REPOSITORY</url>
     </repository>
  </distributionManagement>
  ```
  {% if enterpriseServerVersions contains currentVersion %}
  Se sua instância tem o isolamento de subdomínio desabilitado:
  ```
  <distributionManagement>
     <repository>
       <id>github</id>
       <name>GitHub OWNER Apache Maven Packages</name>
       <url>https://HOSTNAME/_registry/maven/OWNER/REPOSITORY</url>
     </repository>
  </distributionManagement>
  ```
  {% endif %}
2. Publique o pacote.

   ```shell
   $ mvn deploy
  ```

{% data reusables.package_registry.viewing-packages %}

### Instalar um pacote

Para instalar um pacote de Apache Maven a partir do {% data variables.product.prodname_registry %}, edite o arquivo *pom.xml* para incluir o pacote como uma dependência. Se você desejar instalar pacotes de mais de um repositório, adicione uma etiqueta de `repositório` para cada um. Para obter mais informações sobre como usar o arquivo *pom.xml* no seu projeto, consulte "[Introdução a POM](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html)" na documentação do Apache Maven.

{% data reusables.package_registry.authenticate-step %}
2. Adicione as dependências do pacote ao elemento `dependências` do arquivo *pom.xml* do seu projeto, substituindo `com.exemplo:test` pelo seu pacote.

  ```
  <dependencies>
    <dependency>
      <groupId>com.example</groupId>
      <artifactId>test</artifactId>
      <version>1.0.0-SNAPSHOT</version>
    </dependency>
  </dependencies>
  ```
3. Instale o pacote.

  ```shell
  $ mvn install
  ```

### Leia mais

- "[Configurar o Gradle para uso com o {% data variables.product.prodname_registry %}](/packages/using-github-packages-with-your-projects-ecosystem/configuring-gradle-for-use-with-github-packages)"
- "[Excluir um pacote](/packages/publishing-and-managing-packages/deleting-a-package/)"
