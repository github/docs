La siguiente tabla muestra, para cada administrador de paquetes:
- El valor YAML a utilizar en el archivo *dependabot.yml*
- Las versiones compatibles del administrador de paquetes
- Si las dependencias en los repositorios o registros privados de {% data variables.product.prodname_dotcom %} son compatibles
- Si las dependencias delegadas a proveedores son compatibles

| Administración de paquetes | El valor de YAML | Las versiones compatibles       | Los repositorios privados | Registros privados | Delegamiento a proveedores |
| -------------------------- | ---------------- | ------------------------------- |:-------------------------:|:------------------:|:--------------------------:|
| Bundler                    | `bundler`        | v1                              |                           |       **✓**        |           **✓**            |
| Cargo                      | `cargo`          | v1                              |           **✓**           |       **✓**        |                            |
| Composer                   | `composer`       | v1, v2                          |           **✓**           |       **✓**        |                            |
| Docker                     | `docker`         | v1                              |           **✓**           |       **✓**        |                            |
| Hex                        | `mix`            | v1                              |                           |       **✓**        |                            |
| elm-package                | `elm`            | v0.18, v0.19                    |           **✓**           |       **✓**        |                            |
| submódulo de git           | `gitsubmodule`   | N/A (sin versión)               |           **✓**           |       **✓**        |                            |
| GitHub Actions             | `github-actions` | N/A (sin versión)               |           **✓**           |       **✓**        |                            |
| Módulos de Go              | `gomod`          | v1                              |           **✓**           |       **✓**        |           **✓**            |
| Gradle                     | `gradle`         | N/A (sin versión)<sup>[1]</sup> |           **✓**           |       **✓**        |                            |
| Maven                      | `maven`          | N/A (sin versión)<sup>[2]</sup> |           **✓**           |       **✓**        |                            |
| npm                        | `npm`            | v6, v7                          |           **✓**           |       **✓**        |                            |
| NuGet                      | `nuget`          | <= 4.8<sup>[3]</sup>            |           **✓**           |       **✓**        |                            |
| pip                        | `pip`            | v20                             |                           |       **✓**        |                            |
| pipenv                     | `pip`            | <= 2018.11.26                   |                           |       **✓**        |                            |
| pip-compile                | `pip`            | 5.5.0                           |                           |       **✓**        |                            |
| poetry                     | `pip`            | v1                              |                           |       **✓**        |                            |
| Terraform                  | `terraform`      | <= 0.11                         |           **✓**           |       **✓**        |                            |
| yarn                       | `npm`            | v1                              |           **✓**           |       **✓**        |                            |

[1] El {% data variables.product.prodname_dependabot %} no ejecuta Gradle pero es compatible con las actualizaciones a los siguietnes archivos: `build.gradle` y `build.gradle.kts` (para los proyectos de Kotlin).

[2] El {% data variables.product.prodname_dependabot %} no ejecuta Maven pero es compatible con las actualizaciones a los archivos `pom.xml`.

[3] El {% data variables.product.prodname_dependabot %} no ejecuta el CLI de NuGet pero sí es compatible con la mayoría de las características hasta la versión 4.8.

Para los administradores de paquetes tales como `pipenv` y `poetry`, necesitas utilizar el valor `pip` de YAML. Por ejemplo, si utilizas `poetry` para administrar tus dependencias de Python y quieres que el {% data variables.product.prodname_dependabot %} monitoree el archivo de manifiesto de tu dependencia para encontrar versiones nuevas, utiliza `package-ecosystem: "pip"` en tu archivo de *dependabot.yml*.
