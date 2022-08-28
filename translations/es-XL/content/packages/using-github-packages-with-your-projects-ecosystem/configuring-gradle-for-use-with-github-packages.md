---
title: Configurar Gradle para usar con paquetes de GitHub
intro: 'Puedes configurar Gradle para publicar paquetes para {% data variables.product.prodname_registry %} y utilizar paquetes almacenados en {% data variables.product.prodname_registry %} como dependencias en un proyecto Java.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-gradle-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-gradle-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-gradle-for-use-with-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

**Nota:** Cuando instalas o publicas una imagen de docker, {% data variables.product.prodname_registry %} no es compatible con capas externas, tales como imágenes de Windows.

### Autenticar a {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

#### Autenticando con un token de acceso personal

{% data reusables.package_registry.required-scopes %}

Puedes autenticar a {% data variables.product.prodname_registry %} con Gradle usando ya sea Gradle Groovy o Kotlin DSL editando tu archivo *build.gradle* (Gradle Groovy) o archivo *build.gradle.kts* (Kotlin DSL) para incluir tu token de acceso personal. También puedes configurar Gradle Groovy y Kotlin DSL para que reconozcan un paquete único o múltiples paquetes en un repositorio.

{% if currentVersion != "free-pro-team@latest" %}
Replace *REGISTRY-URL* with the URL for your instance's Maven registry. If your instance has subdomain isolation enabled, use `maven.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/maven`. In either case, replace *HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance.
{% endif %}

Reemplaza *USERNAME* con tu nombre de usuario {% data variables.product.prodname_dotcom %}, *TOKEN* con tu token de acceso personal, *REPOSITORY* con el nombre del repositorio que contiene el paquete que deseas publicar y *OWNER* con el nombre de la cuenta de usuario o de organización en {% data variables.product.prodname_dotcom %} que posee el repositorio. {% data reusables.package_registry.lowercase-name-field %}

{% note %}

**Nota:** {% data reusables.package_registry.apache-maven-snapshot-versions-supported %} Para obtener un ejemplo, consulta "[Configurar Apache Maven para usar con {% data variables.product.prodname_registry %}](/packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages)."

{% endnote %}

##### Ejemplo de uso de Gradle Groovy para un paquete único en un repositorio

```shell
plugins {
    id("maven-publish")
}

publishing {
    repositories {
        maven {
            name = "GitHubPackages"
            url = uri("https://maven.pkg.github.com/<em>OWNER</em>/<em>REPOSITORY</em>")
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

##### Ejemplo usando Gradle Groovy para múltiples paquetes en el mismo repositorio

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
                url = uri("https://maven.pkg.github.com/<em>OWNER</em>/<em>REPOSITORY</em>")
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

##### Ejemplo de uso de Kotlin DSL para un paquete único en el mismo repositorio

```shell
plugins {
    `maven-publish`
}

publishing {
    repositories {
        maven {
            name = "GitHubPackages"
            url = uri("https://maven.pkg.github.com/<em>OWNER</em>/<em>REPOSITORY</em>")
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
} ?: System.getenv("<em>USERNAME</em>")
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

##### Ejemplo de uso de Kotlin DSL para múltiples paquetes en el mismo repositorio

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
  url = uri("https://maven.pkg.github.com/<em>OWNER</em>/<em>REPOSITORY</em>")
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
  } ?: System.getenv("<em>USERNAME</em>")
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

  #### Autenticarse con el `GITHUB_TOKEN`

  {% data reusables.package_registry.package-registry-with-github-tokens %}

  Para obtener más información acerca del uso de `GITHUB_TOKEN` con Maven, consulta "[Publicar paquetes Java con Maven](/actions/language-and-framework-guides/publishing-java-packages-with-maven#publishing-packages-to-github-packages)".

  ### Publicar un paquete

  {% data reusables.package_registry.default-name %} Por ejemplo, {% data variables.product.prodname_dotcom %} publicará un paquete denominado `com.example.test` en el repositorio `OWNER/test` {% data variables.product.prodname_registry %}.

  {% data reusables.package_registry.viewing-packages %}

  {% data reusables.package_registry.authenticate-step %}
  2. Después de crear tu paquete, puedes publicar el paquete.

   ```shell
   $ gradle publish
  ```

### Instalar un paquete

Puedes instalar un paquete agregando el paquete como una dependencia a tu proyecto. Para obtener más información, consulta "[Declarar dependencias](https://docs.gradle.org/current/userguide/declaring_dependencies.html)" en la documentación de Gradle.

{% data reusables.package_registry.authenticate-step %}
2. Agrega las dependencias del paquete a tu archivo *build.gradle* (Gradle Groovy) o archivo *build.gradle.kts* (Kotlin DSL).

  Ejemplo de uso de Grady Groovy:
  ```shell
  dependencies {
  implementation 'com.example:package'
  }
  ```
  Ejemplo de uso de Kotlin DSL:
  ```shell
  dependencies {
  implementation("com.example:package")
  }
  ```

3. Agrega el complemento Maven a tu archivo *build.gradle* (Gradle Groovy) o archivo *build.gradle.kts* (Kotlin DSL).

  Ejemplo de uso de Grady Groovy:
  ```shell
  plugins {
  id 'maven'
  }
  ```
  Ejemplo de uso de Kotlin DSL:
  ```shell
  plugins {
  `maven`
  }
  ```

  3. Instala el paquete.

  ```shell
  $ gradle install
  ```

### Leer más

- "[Configurar Apache Maven para usar con {% data variables.product.prodname_registry %}](/packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages)"
- "[Eliminar un paquete](/packages/publishing-and-managing-packages/deleting-a-package/)"
