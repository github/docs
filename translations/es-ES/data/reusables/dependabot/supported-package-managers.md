La siguiente tabla muestra, para cada administrador de paquetes:
- El valor YAML a utilizar en el archivo *dependabot.yml*
- Las versiones compatibles del administrador de paquetes
- Si las dependencias en los repositorios o registros privados de {% data variables.product.prodname_dotcom %} son compatibles
- Si las dependencias delegadas a proveedores son compatibles

| Administración de paquetes | El valor de YAML | Las versiones compatibles       | Los repositorios privados | Registros privados |         Delegamiento a proveedores         |
| -------------------------- | ---------------- | ------------------------------- |:-------------------------:|:------------------:|:------------------------------------------:|
| Bundler                    | `bundler`        | v1, v2                          |                           |       **✓**        |                   **✓**                    |
| Cargo                      | `cargo`          | v1                              |           **✓**           |       **✓**        |                                            |
| Composer                   | `composer`       | v1, v2                          |           **✓**           |       **✓**        |                                            |
| Docker                     | `docker`         | v1                              |           **✓**           |       **✓**        |                                            |
| Hex                        | `mix`            | v1                              |                           |       **✓**        |                                            |
| elm-package                | `elm`            | v0.19                           |           **✓**           |       **✓**        |                                            |
| submódulo de git           | `gitsubmodule`   | N/A (sin versión)               |           **✓**           |       **✓**        |                                            |
| GitHub Actions             | `github-actions` | N/A (sin versión)               |           **✓**           |       **✓**        |                                            |
| Módulos de Go              | `gomod`          | v1                              |           **✓**           |       **✓**        |                   **✓**                    |
| Gradle                     | `gradle`         | N/A (sin versión)<sup>[1]</sup> |           **✓**           |       **✓**        |                                            |
| Maven                      | `maven`          | N/A (sin versión)<sup>[2]</sup> |           **✓**           |       **✓**        |                                            |
| npm                        | `npm`            | v6, v7, v8                      |           **✓**           |       **✓**        |                                            |
| NuGet                      | `nuget`          | <= 4.8<sup>[3]</sup>            |           **✓**           |       **✓**        |                                            |
| pip                        | `pip`            | v21.1.2                         |                           |       **✓**        |                                            |
| pipenv                     | `pip`            | <= 2021-05-29                   |                           |       **✓**        |                                            |
| pip-compile                | `pip`            | 6.1.0                           |                           |       **✓**        |                                            |
| poetry                     | `pip`            | v1                              |                           |       **✓**        | |{% ifversion fpt or ghec or ghes > 3.4 %}
| pub                        | `pub`            | v2 <sup>[4]</sup>               |                           |                    |                
{% endif %}
| Terraform                  | `terraform`      | >= 0.13, <= 1.0                 |           **✓**           |       **✓**        |                                            |
| yarn                       | `npm`            | v1                              |           **✓**           |       **✓**        |                                            |

{% tip %}

**Tip:** Para los administradores de paquetes tales como `pipenv` y `poetry`, necesitas utilizar el valor de YAML `pip`. Por ejemplo, si utilizas `poetry` para administrar tus dependencias de Python y quieres que el {% data variables.product.prodname_dependabot %} monitoree el archivo de manifiesto de tu dependencia para encontrar versiones nuevas, utiliza `package-ecosystem: "pip"` en tu archivo de *dependabot.yml*.

{% endtip %}

[1] El {% data variables.product.prodname_dependabot %} no ejecuta Gradle pero es compatible con las actualizaciones de los siguientes archivos: `build.gradle`, `build.gradle.kts` (para los proyectos de Kotlin), y los archivos que se incluye a través de la declaración `apply` que tengan `dependencies` en el nombre de archivo. Toma en cuenta que `apply` no es compatible con `apply to`, con la recursión o con las sintaxis avanzadas (por ejemplo, el `apply` de Kotlin con `mapOf`, que son nombres de archivo que se definen por propiedad).

[2] El {% data variables.product.prodname_dependabot %} no ejecuta Maven pero es compatible con las actualizaciones a los archivos `pom.xml`.

[3] El {% data variables.product.prodname_dependabot %} no ejecuta el CLI de NuGet pero sí es compatible con la mayoría de las características hasta la versión 4.8.

{% ifversion fpt or ghec or ghes > 3.4 %}[4] la compatibilidad para `pub` se encuentra actualmente en beta. Cualquier limitación conocida está sujeta a cambios. Toma en cuenta que el {% data variables.product.prodname_dependabot %}:
   - No es compatible con la actualización de dependencias para `pub`.
   - No realizará una actualización cuando la versión que intenta actualizar se ignora, incluso si hay una versión anterior disponible.

   Para obtener más información sobre cómo configurar tu archivo _dependabot.yml_ para `pub`, consulta la sección "[Habilitar la compatibilidad para los ecosistemas de nivel beta](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems)". {% endif %} 
