---
title: Detallar los paquetes de los que depende un repositorio
intro: 'En el gráfico de dependencias, puedes ver tus dependencias del proyecto y cualquier vulnerabilidad detectada.'
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Acerca del gráfico de dependencias

La gráfica de dependencias se encuentra disponible para cualquier repositorio {% if currentVersion == "free-pro-team@latest" %}público{% endif %} que defina dependencias en un ecosistema de paquetes compatible utilizando un formato de archivos compatible.{% if currentVersion == "free-pro-team@latest" %}Los administradores de repositorio también pueden configurar la gráfica de dependencias para los repositorios privados.{% endif %}

{% data reusables.repositories.enable-security-alerts %}

Puedes ver y actualizar las dependencias vulnerables en tu gráfico de dependencias del repositorio. El gráfico de dependencias detalla las dependencias vulnerables ante otras dependencias. Para obtener más información, consulta "[Acerca de las alertas de seguridad de las dependencias vulnerables](/articles/about-security-alerts-for-vulnerable-dependencies)".

{% if currentVersion == "free-pro-team@latest" %}
Puedes ver las dependencias utilizadas en los repositorios de la organización en un tablero único. Para obtener más información, consulta "[Ver información de tu organización](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights)".{% endif %}

### Ecosistemas de paquetes compatibles

| Administración de paquetes | Idiomas                          | Formatos recomendados                                  | Formatos compatibles                                                      |
| -------------------------- | -------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------- |
| Maven                      | Java, Scala                      | `pom.xml`                                              | `pom.xml`                                                                 |
| npm                        | JavaScript                       | `package-lock.json`                                    | `package-lock.json`, `package.json`                                       |
| Yarn                       | JavaScript                       | `yarn.lock`                                            | `package.json`, `yarn.lock`                                               |
| `dotnet` CLI               | .NET languages (C#, C++, F#, VB) | `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` | `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj`, `packages.config` |
| Python PIP                 | Python                           | `requirements.txt`, `pipfile.lock`                     | `requirements.txt`, `pipfile.lock`, `setup.py`*                           |
| RubyGems                   | Ruby                             | `Gemfile.lock`                                         | `Gemfile.lock`,`Gemfile`, `*.gemspec`                                     |
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}| Composer             | PHP           | `composer.lock` | `composer.json`, `composer.lock` |{% endif %}

{% note %}

**Nota:** Si detallas tus dependencias de Python dentro de un archivo `setup.py`, quizás no podamos analizar, detallar y alertar sobre todas las dependencias de tu proyecto.

{% endnote %}

### Detallar dependencias para un repositorio con el gráfico de dependencias habilitado

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}

{% if currentVersion == "free-pro-team@latest" %}
### Habilitar el gráfico de dependencias para un repositorio privado

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
4. Lee el mensaje acerca de conceder {% data variables.product.product_name %} acceso a los datos del repositorio para habilitar el gráfico de dependencias, luego haz clic en **Allow access** (Permitir acceso). ![Botón para permitir el acceso a los datos del repositorio para habilitar el gráfico de dependencias](/assets/images/help/repository/dependency-graph-allow-access-button.png)

Para obtener más información, consulta "[Entender cómo {% data variables.product.product_name %} utiliza y protege tus datos](/categories/understanding-how-github-uses-and-protects-your-data)".

### Inhabilitar el gráfico de dependencias de un repositorio privado

{% data reusables.repositories.you-can-enable-or-disable-security-features %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. En "Data services" (Servicios de datos), anula la selección de **Dependency graph** (Gráfico de dependencias). ![Casilla para inhabilitar el gráfico de dependencias](/assets/images/help/repository/private-repo-data-use-dependency-graph-disabled.png)

Para excluir el uso de datos de tu repositorio, consulta "[Incluir o excluir el uso de datos de tu repositorio privado](/articles/opting-into-or-out-of-data-use-for-your-private-repository)".
{% endif %}

### Solución de problemas del gráfico de dependencias

{% data reusables.repositories.troubleshooting-dependency-graph %}

### Leer más

- "[Detallar los proyectos que dependen de un repositorio](/articles/listing-the-projects-that-depend-on-a-repository)"{% if currentVersion == "free-pro-team@latest" %}
- "[Entender cómo {% data variables.product.product_name %} utiliza y protege tus datos](/categories/understanding-how-github-uses-and-protects-your-data)"
- "[Ver y actualizar las dependencias vulnerables en tu repositorio](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)"{% endif %}
