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
          <url>https://maven.pkg.github.com/OWNER/*</url>
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
Publishing a package

By default, GitHub publishes the package to an existing repository with the same name as the package. For example, GitHub will publish a package named com.example:test in a repository called OWNER/test.

If you would like to publish multiple packages to the same repository, you can include the URL of the repository in the <distributionManagement> element of the pom.xml file. GitHub will match the repository based on that field. Since the repository name is also part of the distributionManagement element, there are no additional steps to publish multiple packages to the same repository.

For more information on creating a package, see the maven.apache.org documentation.

Edit the distributionManagement element of the pom.xml file located in your package directory, replacing OWNER with the name of the user or organization account that owns the repository and REPOSITORY with the name of the repository containing your project.
<distributionManagement>
   <repository>
     <id>github</id>
     <name>GitHub OWNER Apache Maven Packages</name>
     <url>https://maven.pkg.github.com/OWNER/REPOSITORY</url>
   </repository>
</distributionManagement>
Publish the package.
$ mvn deploy
After you publish a package, you can view the package on GitHub. For more information, see "Viewing packages."

Installing a package

To install an Apache Maven package from GitHub Packages, edit the pom.xml file to include the package as a dependency. If you want to install packages from more than one repository, add a repository tag for each. For more information on using a pom.xml file in your project, see "Introduction to the POM" in the Apache Maven documentation.

Authenticate to GitHub Packages. For more information, see "Authenticating to GitHub Packages."
Add the package dependencies to the dependencies element of your project pom.xml file, replacing com.example:test with your package.
<dependencies>
  <dependency>
    <groupId>com.example</groupId>
    <artifactId>test</artifactId>
    <version>1.0.0-SNAPSHOT</version>
  </dependency>
</dependencies>
Install the package.
$ mvn install
