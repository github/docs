---
title: Java package metadata for Dependabot updates
intro: Include metadata in your `pom.xml` file to provide helpful links and context in {% data variables.product.prodname_dependabot %} pull requests for Java package updates.
shortTitle: Java package metadata
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /code-security/dependabot/ecosystems-supported-by-dependabot/optimizing-java-packages-dependabot
  - /code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/optimizing-java-packages-dependabot
contentType: reference
---

{% data variables.product.prodname_dependabot %} uses the `url`, `scm`, and `issueManagement` fields in `pom.xml` files to create pull requests for Java dependency updates. When you include this metadata, pull requests will contain links to release notes and issue trackers, helping users update packages with confidence.

## Metadata that {% data variables.product.prodname_dependabot %} needs in pom.xml files

{% data variables.product.prodname_dependabot %} uses the URLs for the project, the source code management system, and the issue management system to build the summary for update pull requests.

* `url`: The home page for the project. See [More Project Information](https://maven.apache.org/pom.html#More_Project_Information) in the POM reference
* `scm`: The URL of the source code management system used by the project. See [SCM](https://maven.apache.org/pom.html#scm) in the POM Reference
* `issueManagement`: The URL of the issue management system used by the project. See [Issue Management](https://maven.apache.org/pom.html#issue-management) in the POM Referencex

### Example for a project hosted on {% data variables.product.github %}

```xml
<project>
  <url>https://github.com/OWNER/REPOSITORY</url>
  <scm>
    <url>https://github.com/OWNER/REPOSITORY</url>
  </scm>
  <issueManagement>
    <url>https://github.com/OWNER/REPOSITORY/issues</url>
  </issueManagement>
</project>
```

## Impact of omitting project metadata from pom.xml files

If you forget to include the URLs that {% data variables.product.prodname_dependabot %} checks for, then pull requests to update Java packages are still created. However, the information available to users in the pull request summary will be limited.

* **Project repository or Source code management URL undefined:** no links to release notes in {% data variables.product.prodname_dependabot %} pull requests
* **Issue management URL undefined:** no link to the issues page for reporting problems.

Adding this information helps {% data variables.product.prodname_dependabot %} provide better, more accurate updates for your project, complete with helpful links to release notes and issue trackers.

## Further reading

* [Maven SCM Plugin](https://maven.apache.org/scm/maven-scm-plugin/)
