---
title: Acerca del gráfico de dependencias
intro: 'Información detallada sobre la gráfica de dependencias, el ecosistema con el que es compatible, y sobre cómo determina de qué paquetes depende un repositorio.'
versions:
  enterprise-server: <=2.22
topics:
  - Repositories
---

<!--See /content/code-security/supply-chain-security/about-the-dependency-graph for the latest version of this article -->

### Disponibilidad de la gráfica de dependencias

La gráfica de dependencias está disponible para cada repositorio que define las dependencias en un ecosistema de paquetes compatible utilizando un formato de archivos compatible.

{% data reusables.repositories.enable-security-alerts %}

### Acerca del gráfico de dependencias

La gráfica de dependencias es un resumen de los archivos de bloqueo y de manifiesto que se almacenan en un repositorio. Este muestra las dependencias, es decir, los paquetes y ecosistemas de los cuales depende, para cada repositorio. {% data variables.product.prodname_ghe_server %} no calcula información alguna sobre los dependientes, repositorios y paquetes que dependen de un repositorio.

Cuando cargas una confirmación a {% data variables.product.product_name %}, la cual cambia o agrega un archivo de manifiesto o de bloqueo compatible a la rama predeterminada, la gráfica de dependencias se actualiza automáticamente. Para obtener más información sobre los ecosistemas y archivos de manifiesto compatibles, consulta la sección "[Ecosistemas de paquetes compatibles](#supported-package-ecosystems)" que se encuentra más adelante.

### Dependencias que se incluyen

La gráfica de dependencias incluye todas las dependencias de un repositorio que se describan en los archivos de manifiesto y de bloqueo o sus equivalentes para los ecosistemas compatibles. Esto incluye:

- Las dependencias directas que se definen explícitamente en el archivo de manifiesto o de bloqueo
- Las dependencias indirectas de estas dependencias directas, también conocidas como dependencias transitorias o sub-dependencias

La gráfica de dependencias identifica las dependencias indirectas.

### Utiizar la gráfica de dependencias

Puedes utilizar la gráfica de dependencias para:

- Explora los repositorios de los cuales depende tu código. Para obtener más información, consulta la sección "[Explorar las dependencias de un repositorio](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)".
- Ver y actualizar las dependencias vulnerables de tu repositorio. Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".

### Habilitar la gráfica de dependencias

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}Si la gráfica de dependencias no se encuentra disponible en tu sistema, tu administrador de sitio puede habilitarla junto con las {% data variables.product.prodname_dependabot_alerts %}. Para obtener más información, consulta la sección "[Habilitar las alertas para las dependencias vulnerables en {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)".{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %} Si la gráfica de dependencias no está disponible en tu sistema, tu administrador de sitio puede habilitarla, así como puede habilitar las alertas de seguridad. Para obtener más información, consulta la sección "[Habilitar las alertas para las dependencias vulnerables en {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)".

{% endif %}

Cuando la gráfica de dependencias se habilita por primera vez, cualquier manifiesto y archivo de bloqueo para los ecosistemas compatibles se pasarán de inmediato. La gráfica se llena en cuestión de minutos habitualmente, pero esto puede tardar más para los repositorios que tengan muchas dependencias. Una vez que se habilitan, la gráfica se actualiza automáticamente con cada subida al repositorio.

### Ecosistemas de paquetes compatibles
<!-- If you make changes to this feature, update /getting-started-with-github/github-language-support to reflect any changes to supported packages. -->

Los formatos recomendados definen explícitamente qué versiones se utilizan para todas las dependencias directas e indirectas. Si utilizas estos formatos, tu gráfica de dependencias será más precisa. También refleja la configuración de la compilación actual y habilita a la gráfica de dependencias para reportar las vulnerabilidades tanto en las dependencias directas como en las indirectas.

Los ecosistemas que se listan a continuación son compatibles con la gráfica de dependencias y con {% if currentVersion == "enterprise-server@2.22" %}las {% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de seguridad{% endif %}.

| Administración de paquetes | Idiomas                          | Formatos recomendados                                  | Todos los formatos compatibles                                            |
| -------------------------- | -------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------- |
| Composer                   | PHP                              | `composer.lock`                                        | `composer.json`, `composer.lock`                                          |
| `dotnet` CLI               | .NET languages (C#, C++, F#, VB) | `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` | `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj`, `packages.config` |
| Maven                      | Java, Scala                      | `pom.xml`                                              | `pom.xml`                                                                 |
| npm                        | JavaScript                       | `package-lock.json`                                    | `package-lock.json`, `package.json`                                       |
| Python PIP                 | Python                           | `requirements.txt`, `pipfile.lock`                     | `requirements.txt`, `pipfile`, `pipfile.lock`, `setup.py`*                |
| RubyGems                   | Ruby                             | `Gemfile.lock`                                         | `Gemfile.lock`, `Gemfile`, `*.gemspec`                                    |
| Yarn                       | JavaScript                       | `yarn.lock`                                            | `package.json`, `yarn.lock`                                               |

{% note %}

**Nota:** Si listas tus dependencias de Python dentro de un archivo `setup.py`, es probable que no podamos analizar y listar cada una de las dependencias en tu proyecto.

{% endnote %}

### Leer más

- "[Gráfica de dependencias](https://en.wikipedia.org/wiki/Dependency_graph)" en Wikipedia
- "[Explorar las dependencias de un repositorio](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)"
