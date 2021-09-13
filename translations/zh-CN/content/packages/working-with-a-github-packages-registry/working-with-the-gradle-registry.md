---
title: 使用 Gradle 注册表
intro: '您可以配置 Gradle 以将包发布到 {% data variables.product.prodname_registry %} Gradle 注册表并将存储在 {% data variables.product.prodname_registry %} 上的包用作 Java 项目中的依赖项。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-gradle-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-gradle-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-gradle-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-gradle-for-use-with-github-packages
  - /packages/guides/configuring-gradle-for-use-with-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

**注：**安装或发布 Docker 映像时，{% data variables.product.prodname_registry %} 当前不支持外部图层，如 Windows 映像。

### 向 {% data variables.product.prodname_registry %} 验证

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %} 有关将 `GITHUB_TOKEN` 用于 Gradle 的更多信息，请参阅“[使用 Gradle 发布 Java 包](/actions/guides/publishing-java-packages-with-gradle#publishing-packages-to-github-packages)”。

#### 使用个人访问令牌进行身份验证

{% data reusables.package_registry.required-scopes %}

您可以使用 Gradle Groovy 或 Kotlin DSL，通过 Gradle 向 {% data variables.product.prodname_registry %} 验证，方法是编辑 *build.gradle* 文件 (Gradle Groovy) 或 *build.gradle.kts* 文件 (Kotlin DSL) 以包含您的个人访问令牌。 您还可以配置 Gradle Groovy 和 Kotlin DSL 以识别仓库中的一个或多个包。

{% if enterpriseServerVersions contains currentVersion %}
将 *REGISTRY-URL* 替换为您实例的 Maven 注册表的 URL。 如果您的实例启用了子域隔离，请使用 `maven.HOSTNAME`。 如果您的实例禁用了子域隔离，请使用 `HOSTNAME/_registry/maven`。 在任一情况下，都将 *HOSTNAME* 替换为 {% data variables.product.prodname_ghe_server %} 实例的主机名。
{% elsif currentVersion == "github-ae@latest" %}
将 *REGISTRY-URL* 替换为企业的 Maven 注册表 `maven.HOSTNAME` 的 URI。 将 *HOSTNAME* 替换为 {% data variables.product.product_location %} 的主机名。
{% endif %}

将 *USERNAME* 替换为您的 {% data variables.product.prodname_dotcom %} 用户名，将 *TOKEN* 替换为您的个人访问令牌，将 *REPOSITORY* 替换为要发布的包所在仓库的名称，将 *OWNER* 替换为 {% data variables.product.prodname_dotcom %} 上拥有该仓库的用户或组织帐户的名称。 由于不支持大写字母，因此，即使您的 {% data variables.product.prodname_dotcom %} 用户或组织名称中包含大写字母，也必须对仓库所有者使用小写字母。

{% note %}

**注：**{% data reusables.package_registry.apache-maven-snapshot-versions-supported %} 关于示例，请参阅“[配置 Apache Maven 用于 {% data variables.product.prodname_registry %}](/packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages)”。

{% endnote %}

##### 将 Gradle Groovy 用于一个仓库中单个包的示例

```shell
plugins {
    id("maven-publish")
}
publishing {
    repositories {
        maven {
            name = "GitHubPackages"
            url = uri("https://{% if currentVersion == "free-pro-team@latest" %}maven.pkg.github.com{% else %}<em>REGISTRY-URL</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>")
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

##### 将 Gradle Groovy 用于同一个仓库中多个包的示例

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
                url = uri("https://{% if currentVersion == "free-pro-team@latest" %}maven.pkg.github.com{% else %}<em>REGISTRY-URL</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>")
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

##### 将 Kotlin DSL 用于同一个仓库中单个包的示例

```shell
plugins {
    `maven-publish`
}
publishing {
    repositories {
        maven {
            name = "GitHubPackages"
            url = uri("https://{% if currentVersion == "free-pro-team@latest" %}maven.pkg.github.com{% else %}<em>REGISTRY-URL</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>")
            credentials {
                username = project.findProperty("gpr.user") as String? ?: System.getenv("<em>USERNAME</em>")
                password = project.findProperty("gpr.key") as String? ?: System.getenv("<em>TOKEN</em>")
            }
        }
    }
    publications {
        register<MavenPublication>("gpr") {
            from(components["java"])
        }
    }
}
```

##### 将 Kotlin DSL 用于同一个仓库中多个包的示例

```shell
plugins {
    `maven-publish` apply false
}
subprojects {
    apply(plugin = "maven-publish")
    configure<PublishingExtension> {
        repositories {
            maven {
                name = "GitHubPackages"
                url = uri("https://{% if currentVersion == "free-pro-team@latest" %}maven.pkg.github.com{% else %}<em>REGISTRY-URL</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>")
                credentials {
                    username = project.findProperty("gpr.user") as String? ?: System.getenv("<em>USERNAME</em>")
                    password = project.findProperty("gpr.key") as String? ?: System.getenv("<em>TOKEN</em>")
                }
            }
        }
        publications {
            register<MavenPublication>("gpr") {
                from(components["java"])
            }
        }
    }
}
```

### 发布包

{% data reusables.package_registry.default-name %} 例如，{% data variables.product.prodname_dotcom %} 将名为 `com.example.test` 的包发布到 `OWNER/test` {% data variables.product.prodname_registry %} 仓库中。

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. 创建包后，您可以发布包。

  ```shell
   $ gradle publish
  ```

### 安装包

通过添加包作为您项目中的依赖项，您可以安装包。 更多信息请参阅 Gradle 文档中的“[声明依赖项](https://docs.gradle.org/current/userguide/declaring_dependencies.html)”。

{% data reusables.package_registry.authenticate-step %}
2. 将包依赖项添加到您的 *build.gradle* 文件 (Gradle Groovy) 或 *build.gradle.kts* 文件 (Kotlin DSL)。

  使用 Gradle Groovy 的示例：
  ```shell
  dependencies {
      implementation 'com.example:package'
  }
  ```
  使用 Kotlin DSL 的示例：
  ```shell
  dependencies {
      implementation("com.example:package")
  }
  ```

3. 将 maven 插件添加到您的 *build.gradle* 文件 (Gradle Groovy) 或 *build.gradle.kts* 文件 (Kotlin DSL)。

  使用 Gradle Groovy 的示例：
  ```shell
  plugins {
      id 'maven'
  }
  ```
  使用 Kotlin DSL 的示例：
  ```shell
  plugins {
      `maven`
  }
  ```

  3. 安装包。

  ```shell
  $ gradle install
  ```

### 延伸阅读

- “[使用 Apache Maven 注册表](/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry)”
- "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[删除和恢复包](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[删除包](/packages/learn-github-packages/deleting-a-package){% endif %}"
