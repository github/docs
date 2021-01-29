La siguiente tabla muestra, para cada administrador de paquete, si el {% data variables.product.prodname_dependabot %} soporta: dependencias en repositorios privados de {% data variables.product.prodname_dotcom %} y dependencias delegadas.

| Administración de paquetes       | Repositorios privados de {% data variables.product.prodname_dotcom %} | Delegamiento a proveedores |
| -------------------------------- |:---------------------------------------------------------------------:|:--------------------------:|
| Bundler: `bundler`               |                                                                       |           **✓**            |
| Cargo: `cargo`                   |                                 **✓**                                 |                            |
| Composer: `composer`             |                                 **✓**                                 |                            |
| Docker: `docker`                 |                                 **✓**                                 |                            |
| Elixir: `hex`                    |                                                                       |                            |
| Elm: `elm`                       |                                 **✓**                                 |                            |
| git submodule: `gitsubmodule`    |                                 **✓**                                 |                            |
| GitHub Actions: `github-actions` |                                 **✓**                                 |                            |
| Go modules: `gomod`              |                                 **✓**                                 |           **✓**            |
| Gradle: `gradle`                 |                                 **✓**                                 |                            |
| Maven: `maven`                   |                                 **✓**                                 |                            |
| Mix: `mix`                       |                                 **✓**                                 |                            |
| npm: `npm`                       |                                 **✓**                                 |                            |
| NuGet: `nuget`                   |                                 **✓**                                 |                            |
| pip: `pip`                       |                                                                       |                            |
| Terraform: `terraform`           |                                 **✓**                                 |                            |

{% note %}

**Nota**: {% data variables.product.prodname_dependabot %} también es compatible con los siguientes administradores de paquetes:

-`yarn` (solo v1) (especificar `npm`)

-Archivos de `.gradle.kts`, para proyectos de Kotlin (especificar `gradle`)

-`pipenv`, `pip-compile`, y `poetry` (especificar `pip`)

Por ejemplo, si utilizas `poetry` para administrar tus dependencias de Python y quieres que el {% data variables.product.prodname_dependabot %} monitoree el archivo de manifiesto de tu dependencia para encontrar versiones nuevas, utiliza `package-ecosystem: "pip"` en tu archivo de *dependabot.yml*.

{% endnote %}
