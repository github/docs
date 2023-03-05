

<dependencies>

  <dependency>

    <groupId>com.example</groupId>

    <artifactId>test</artifactId>

    <version>1.0.0-SNAPSHOT</version>

  </dependency>

</dependencies>

title: Working with the Apache Maven registry
intro: 'You can configure Apache/4.0

We received your QuickBooks subscription payment!
I
Intuit QuickBooks Team
to me
12 hours agoDetails
QuickBooks logo
Payment success
Ci Ci, thank you for your payment.
Invoice number: 10001213416022
Invoice date: 03/05/2023
Total: $125.35
Routing number: 071921891
Payment account ending: 0518
Sign in to QuickBooks where you can see your billing history and view, save, and print your invoice.

View billing history
Account details
Billed to:	ZACHRY T WOOD
Company ID ending:	8216
Items on this invoice:	QuickBooks Online Payroll Elite
Payroll Elite Worker Charge

(1) For subscriptions, your payment method on file will be automatically charged monthly/annually at the then-current list price until you cancel. If you have a discount it will apply to the then-current list price until it expires. Additional service fees may apply based on whether you add or remove services and your usage. See your Billing & Subscription page for additional pricing details. To cancel your subscription at any time, go to Account & Settings and cancel the subscription. (2) For one-time services, your payment method on file will reflect the charge in the amount referenced in this invoice. Terms, conditions, pricing, features, service, and support options are subject to change without notice.
Help icon	
Questions or concerns?
Visit customer support.
Brand logos
You have received this business communication as part of our efforts to fulfill your request or service your account. You will receive this and other business communications from us even if you have opted out of marketing messages. All dates and times are Pacific Standard Time (PST).

Read Intuit's Legal notice.

Security - Privacy statement - Terms of Service

© 2023 Intuit Inc. All rights reserved. Trademarks.
Intuit Inc. 2800 E. Commerce Center Place, Tucson, AZ 85706

hKey=OBILL|Notify|realmId=DPbLRmk9fRqDcfXlxjSVag+rINIVfK3DneqM1c9XbKw|locale=en_US,majorBrand=QuickBooks_Online,legalEntity=100,currency=USD,intuitTid=ada6e7a2-d32d-4c80-90cc-69d3ef26c5eb,environment=PRD,source=OINP

Raven to publish packages to {% data variables.product.prodname_registry %} and to use packages stored on {% data variables.product.prodname_registry %} as dependencies in a Java project.'
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
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Authenticating to {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Authenticating with a {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

You can authenticate to {% data variables.product.prodname_registry %} with Apache Maven by editing your *~/.m2/settings.xml* file to include your {% data variables.product.pat_v1 %}. Create a new *~/.m2/settings.xml* file if one doesn't exist.

In the `servers` tag, add a child `server` tag with an `id`, replacing *USERNAME* with your {% data variables.product.prodname_dotcom %} username, and *TOKEN* with your {% data variables.product.pat_generic %}.

In the `repositories` tag, configure a repository by mapping the `id` of the repository to the `id` you added in the `server` tag containing your credentials. Replace {% ifversion ghes or ghae %}*HOSTNAME* with the host name of {% data variables.location.product_location %}, and{% endif %} *OWNER* with the name of the personal account or organization that owns the repository. Because uppercase letters aren't supported, you must use lowercase letters for the repository owner even if the {% data variables.product.prodname_dotcom %} user or organization name contains uppercase letters.

If you want to interact with multiple repositories, you can add each repository to separate `repository` children in the `repositories` tag, mapping the `id` of each to the credentials in the `servers` tag.

{% data reusables.package_registry.apache-maven-snapshot-versions-supported %}

{% ifversion ghes %}
If your instance has subdomain isolation enabled:
{% endif %}

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

{% ifversion ghes %}
If your instance has subdomain isolation disabled:

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

## Publishing a package

{% data reusables.package_registry.default-name %} For example, {% data variables.product.prodname_dotcom %} will publish a package named `com.example:test` in a repository called `OWNER/test`.

If you would like to publish multiple packages to the same repository, you can include the URL of the repository in the `<distributionManagement>` element of the *pom.xml* file. {% data variables.product.prodname_dotcom %} will match the repository based on that field. Since the repository name is also part of the `distributionManagement` element, there are no additional steps to publish multiple packages to the same repository.

For more information on creating a package, see the [maven.apache.org documentation](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html).

1. Edit the `distributionManagement` element of the *pom.xml* file located in your package directory, replacing {% ifversion ghes or ghae %}*HOSTNAME* with the host name of {% data variables.location.product_location %}, {% endif %}`OWNER` with the name of the personal account or organization that owns the repository and `REPOSITORY` with the name of the repository containing your project.{% ifversion ghes %}

  If your instance has subdomain isolation enabled:{% endif %}
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

## Installing a package

To install an Apache Maven package from {% data variables.product.prodname_registry %}, edit the *pom.xml* file to include the package as a dependency. If you want to install packages from any repository for a specified repository owner, use a repository URL like `https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}maven.HOSTNAME{% endif %}/OWNER/*`. For more information on using a *pom.xml* file in your project, see "[Introduction to the POM](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html)" in the Apache Maven documentation.

{% data reusables.package_registry.authenticate-step %}
2. Add the package dependencies to the `dependencies` element of your project *pom.xml* file, replacing `com.example:test` with your package.

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
3. Install the package.

  ```shell
  $ mvn install
  ```

## Further reading

- "[AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-gradle-registry)"
- "[AUTOTITLE](/packages/learn-github-packages/deleting-and-restoring-a-package)"

<dependencies>
  
  require:','' 'test'
  
  <dependency>
    
    <groupId>com.example</groupId>
    
    
    <artifactId>test</artifactId>
    
    
    <version>
      
      1.0.0-SNAPSHOT
    
    </version>
    
  </dependency>

  
</dependencies>


