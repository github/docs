---
title: Working with the Gradle registry
intro: 'You can configure Gradle to publish packages to the {% data variables.product.prodname_registry %} Gradle registry and to use packages stored on {% data variables.product.prodname_registry %} as dependencies in a Java project.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-gradle-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-gradle-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-gradle-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-gradle-for-use-with-github-packages
  - /packages/guides/configuring-gradle-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '>=2.22'
  ghae: '*'
shortTitle: Gradle registry
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Authenticating to {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %} For more information about using `GITHUB_TOKEN` with Gradle, see "[Publishing Java packages with Gradle](/actions/guides/publishing-java-packages-with-gradle#publishing-packages-to-github-packages)."

### Authenticating with a personal access token

{% data reusables.package_registry.required-scopes %}

You can authenticate to {% data variables.product.prodname_registry %} with Gradle using either Gradle Groovy or Kotlin DSL by editing your *build.gradle* file (Gradle Groovy) or *build.gradle.kts* file (Kotlin DSL) file to include your personal access token. You can also configure Gradle Groovy and Kotlin DSL to recognize a single package or multiple packages in a repository.

{% ifversion ghes %}
Replace *REGISTRY-URL* with the URL for your instance's Maven registry. If your instance has subdomain isolation enabled, use `maven.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/maven`. In either case, replace *HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance.
{% elsif ghae %}
Replace *REGISTRY-URL* with the URL for your enterprise's Maven registry, `maven.HOSTNAME`. Replace *HOSTNAME* with the host name of {% data variables.product.product_location %}.
{% endif %}

Replace *USERNAME* with your {% data variables.product.prodname_dotcom %} username, *TOKEN* with your personal access token, *REPOSITORY* with the name of the repository containing the package you want to publish, and *OWNER* with the name of the user or organization account on {% data variables.product.prodname_dotcom %} that owns the repository. Because uppercase letters aren't supported, you must use lowercase letters for the repository owner even if the {% data variables.product.prodname_dotcom %} user or organization name contains uppercase letters.

{% note %}

**Note:** {% data reusables.package_registry.apache-maven-snapshot-versions-supported %} For an example, see "[Configuring Apache Maven for use with {% data variables.product.prodname_registry %}](/packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages)."

{% endnote %}

#### Example using Gradle Groovy for a single package in a repository

```shell
plugins {
    id("maven-publish")
}
publishing {
    repositories {
        maven {
            name = "GitHubPackages"
            url = uri("https://{% ifversion fpt %}maven.pkg.github.com{% else %}<em>REGISTRY-URL</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>")
            credentials {
                username = project.findProperty("gpr.user") ?: System.getenv("<em>USERNAME</em>")
                password = project.findProperty("gpr.key") ?: System.getenv("<em>TOKEN</em>")
            }
        }
    }
    publications {
        gpr(MavenPublication) {
            from(components.java)
        }
    }
}
```

#### Example using Gradle Groovy for multiple packages in the same repository

```shell
plugins {
    id("maven-publish") apply false
}
subprojects {
    apply plugin: "maven-publish"
    publishing {
        repositories {
            maven {
                name = "GitHubPackages"
                url = uri("https://{% ifversion fpt %}maven.pkg.github.com{% else %}<em>REGISTRY-URL</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>")
                credentials {
                    username = project.findProperty("gpr.user") ?: System.getenv("<em>USERNAME</em>")
                    password = project.findProperty("gpr.key") ?: System.getenv("<em>TOKEN</em>")
                }
            }
        }
        publications {
            gpr(MavenPublication) {
                from(components.java)
            }
        }
    }
}
```

#### Example using Kotlin DSL for a single package in the same repository

```shell
plugins {
    `maven-publish`
}
publishing {
    repositories {
        maven {
            name = "GitHubPackages"
            url = uri("https://{% ifversion fpt %}maven.pkg.github.com{% else %}<em>REGISTRY-URL</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>")
            credentials {
                username = project.findProperty("gpr.user") as String? ?: System.getenv("<em>USERNAME</em>")
                password = project.findProperty("gpr.key") as String? ?: System.getenv("<em>TOKEN</em>")
            }
        }
    }
    publications {
        register&lt;MavenPublication>("gpr") {
            from(components["java"])
        }
    }
}
```

#### Example using Kotlin DSL for multiple packages in the same repository

```shell
plugins {
    `maven-publish` apply false
}
subprojects {
    apply(plugin = "maven-publish")
    configure&lt;PublishingExtension> {
        repositories {
            maven {
                name = "GitHubPackages"
                url = uri("https://{% ifversion fpt %}maven.pkg.github.com{% else %}<em>REGISTRY-URL</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>")
                credentials {
                    username = project.findProperty("gpr.user") as String? ?: System.getenv("<em>USERNAME</em>")
                    password = project.findProperty("gpr.key") as String? ?: System.getenv("<em>TOKEN</em>")
                }
            }
        }
        publications {
            register&lt;MavenPublication>("gpr") {
                from(components["java"])
            }
        }
    }
}
```

## Publishing a package

{% data reusables.package_registry.default-name %} For example, {% data variables.product.prodname_dotcom %} will publish a package named `com.example.test` in the `OWNER/test` {% data variables.product.prodname_registry %} repository.

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. After creating your package, you can publish the package.

  ```shell
   $ gradle publish
  ```

## Using a published package

To use a published package from {% data variables.product.prodname_registry %}, add the package as a dependency and add the repository to your project. For more information, see "[Declaring dependencies](https://docs.gradle.org/current/userguide/declaring_dependencies.html)" in the Gradle documentation.

{% data reusables.package_registry.authenticate-step %}
2. Add the package dependencies to your *build.gradle* file (Gradle Groovy) or *build.gradle.kts* file (Kotlin DSL) file.

  Example using Gradle Groovy:
  ```shell
  dependencies {
      implementation 'com.example:package'
  }
  ```
  Example using Kotlin DSL:
  ```shell
  dependencies {
      implementation("com.example:package")
  }
  ```

3. Add the repository to your *build.gradle* file (Gradle Groovy) or *build.gradle.kts* file (Kotlin DSL) file.

  Example using Gradle Groovy:
  ```shell
  repositories {
      maven {
          url = uri("https://{% ifversion fpt %}maven.pkg.github.com{% else %}<em>REGISTRY-URL</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>")
          credentials {
              username = project.findProperty("gpr.user") ?: System.getenv("<em>USERNAME</em>")
              password = project.findProperty("gpr.key") ?: System.getenv("<em>TOKEN</em>")
          }
      }
  }
  ```
  Example using Kotlin DSL:
  ```shell
  repositories {
      maven {
          url = uri("https://{% ifversion fpt %}maven.pkg.github.com{% else %}<em>REGISTRY-URL</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>")
          credentials {
              username = project.findProperty("gpr.user") as String? ?: System.getenv("<em>USERNAME</em>")
              password = project.findProperty("gpr.key") as String? ?: System.getenv("<em>TOKEN</em>")
          }
      }
  }
  ```

## Further reading

- "[Working with the Apache Maven registry](/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry)"
- "{% ifversion fpt or ghes > 3.0 %}[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif ghes < 3.1 or ghae %}[Deleting a package](/packages/learn-github-packages/deleting-a-package){% endif %}"
