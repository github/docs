---
title: Working with the RubyGems registry
intro: 'Puedes configurar RubyGems para publicar un paquete para {% data variables.product.prodname_registry %} y utilizar paquetes almacenados en {% data variables.product.prodname_registry %} como dependencias en un proyecto Ruby con Bundler.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-rubygems-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-rubygems-for-use-with-github-packages
  - /packages/guides/configuring-rubygems-for-use-with-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

**Nota:** Cuando instalas o publicas una imagen de docker, {% data variables.product.prodname_registry %} no es compatible con capas externas, tales como imágenes de Windows.

### Prerrequisitos

- Debes tener RubyGems 2.4.1 o superiores. Para encontrar tu versión de RubyGems:

  ```shell
  $ gem --version
  ```

  - Debes tener Bundler 1.6.4 o superiores. Para encontrar tu versión Bundler:
  ```shell
  $ bundle --version
  Bundler version 1.13.7
  ```

  - Instala keycutter para administrar múltiples credenciales. Para instalar keycutter:
  ```shell
  $ gem install keycutter
  ```

### Autenticarte en {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

#### Autenticarte con un token de acceso personal

{% data reusables.package_registry.required-scopes %}

Puedes autenticar a {% data variables.product.prodname_registry %} con RubyGems editando el archivo *~/.gem/credentials* para publicar gemas, editar el archivo *~/.gemrc*  para instalar una gema única o usar Bundler para rastrear e instalar una o más gemas.

Para publicar gemas nuevas, debes autenticarte para {% data variables.product.prodname_registry %} con RubyGems editando tu archivo *~/.gem/credentials* para incluir tu token de acceso personal.  Crear un nuevo archivo *~/.gem/credentials* si este archivo no existe.

Por ejemplo, crearías o editarías un *~/.gem/credentials* para incluir lo siguiente, reemplazando *TOKEN* con tu token de acceso personal.

```shell
---
:github: Bearer <em>TOKEN</em>
```

Para instalar gemas, necesitas autenticarte en el {% data variables.product.prodname_registry %} mediante la edición del archivo *~/.gemrc* para que tu proyecto incluya `https://USERNAME:TOKEN@{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/`. Debes reemplazar:
  - `USERNAME` con tu nombre de usuario {% data variables.product.prodname_dotcom %}.
  - `TOKEN` por tu token de acceso personal.
  - `OWNER` con el nombre de la cuenta de usuario o de organización a la que pertenece el repositorio que contiene tu proyecto.{% if enterpriseServerVersions contains currentVersion %}
  - `REGISTRY-URL` con la URL para el registro de Rubygems de tu instancia. Si tu instancia cuenta con el aislamiento de subdominios habilitado, utiliza `rubygems.HOSTNAME`. Si tu instancia cuenta con el aislamiento de subdominios inhabilitado, utiliza `HOSTNAME/_registry/rubygems`. Cualquiera que sea el caso, reemplaza *HOSTNAME* con el nombre de host de tu instancia de {% data variables.product.prodname_ghe_server %}.
{% elsif currentVersion == "github-ae@latest" %}
  - `REGISTRY-URL` con la URL para el registro de Rubygems de tu instancia, `rubygems.HOSTNAME`. Reemplaza *HOTSNAME* con el nombre de host de {% data variables.product.product_location %}.
{% endif %}

Si no tienes un archivo *~/.gemrc*, crea un nuevo archivo *~/.gemrc* usando este ejemplo.

```shell
---
:backtrace: false
:bulk_threshold: 1000
:sources:
- https://rubygems.org/
- https://USERNAME:TOKEN@{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/
:update_sources: true
:verbose: true  

```

Para autenticar con Bundler, configura Bundler para que use tu token de acceso personal, reemplazando *USERNAME* con tu nombre de usuario de {% data variables.product.prodname_dotcom %}, *TOKEN* con tu token de acceso personal y *OWNER* con el nombre de la cuenta de usuario o de organización a la que pertenece el repositorio que contiene tu proyecto.{% if enterpriseServerVersions contains currentVersion %} Reemplaza `REGISTRY-URL` con la URL del registro de Rubygems de tu instancia. Si tu instancia cuenta con el aislamiento de subdominios habilitado, utiliza `rubygems.HOSTNAME`. Si tu instancia cuenta con el aislamiento de subdominios inhabilitado, utiliza `HOSTNAME/_registry/rubygems`. En cualquiera de los casos, reemplaza *HOSTNAME* con el nombre de host de tu instancia de {% data variables.product.prodname_ghe_server %}.{% elsif currentVersion == "github-ae@latest" %}Reemplaza `REGISTRY-URL` con la URL del registro de Rubygems de tu instancia, `rubygems.HOSTNAME`. Reemplaza *HOTSNAME* con el nombre de host de {% data variables.product.product_location %}.{% endif %}

```shell
$ bundle config https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER USERNAME:TOKEN</em>
```

### Publicar un paquete

{% data reusables.package_registry.default-name %} Por ejemplo, cuando publicas `octo-gem` a la organización `octo-org`, {% data variables.product.prodname_registry %} publica la gema en el repositorio `octo-org/octo-gem`. Para obtener más información sobre la creación de tu gema, consulta "[Crear tu propia gema](http://guides.rubygems.org/make-your-own-gem/)" en la documentación de RubyGems.

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. Construye el paquete desde el *gemspec* para crear el paquete *.gem*.
  ```shell
  gem build OCTO-GEM.gemspec
  ```
3. Publica un paquete en el {% data variables.product.prodname_registry %}, reemplazando `OWNER` con el nombre de la cuenta de usuario o de organización a la que pertenece el repositorio que contiene tu proyecto y `OCTO-GEM` con el nombre de tu paquete de gemas.{% if enterpriseServerVersions contains currentVersion %} Reemplaza `REGISTRY-URL` con la URL del registro de Rubygems de tu instancia. Si tu instancia cuenta con el aislamiento de subdominios habilitado, utiliza `rubygems.HOSTNAME`. Si tu instancia cuenta con el aislamiento de subdominios inhabilitado, utiliza `HOSTNAME/_registry/rubygems`. En cualquiera de los casos, reemplaza *HOSTNAME* con el nombre de host de tu instancia de {% data variables.product.prodname_ghe_server %}.{% elsif currentVersion == "github-ae@latest" %}Reemplaza `REGISTRY-URL` con la URL del registro de Rubygems de tu instancia, `rubygems.HOSTNAME`. Reemplaza *HOTSNAME* con el nombre de host de {% data variables.product.product_location %}.{% endif %}

  ```shell
  $ gem push --key github \
  --host https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER</em> \
  <em>OCTO-GEM-0.0.1</em>.gem
  ```

### Publicar varios paquetes en el mismo repositorio

Para publicar múltiples gemas en el mismo repositorio, puedes incluir la URL al repositorio {% data variables.product.prodname_dotcom %} en el campo `github_repo` en `gem.metadata`. Si incluyes este campo, {% data variables.product.prodname_dotcom %} empata el repositorio con base en este valor en vez de utilizar el nombre de la gema.% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} Reemplaza a *HOSTNAME* con el nombre de host de {% data variables.product.product_location %}.{% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

### Instalar un paquete

Puedes usar gemas desde {% data variables.product.prodname_registry %} al igual que usas gemas de *rubygems.org*. You need to authenticate to {% data variables.product.prodname_registry %} by adding your {% data variables.product.prodname_dotcom %} user or organization as a source in the *~/.gemrc* file or by using Bundler and editing your *Gemfile*.

{% data reusables.package_registry.authenticate-step %}
1. Para Bundler, agrega tu usuario u organización {% data variables.product.prodname_dotcom %} como fuente en tu *Gemfile* para extraer gemas de esta nueva fuente. Por ejemplo, puedes agregar un bloque nuevo de `source` al *Gemfile* que utiliza el {% data variables.product.prodname_registry %} únicamente para los paquetes que especifiques, reemplzando *GEM NAME* con el paquete que quieres instalar desde el {% data variables.product.prodname_registry %} y *OWNER* con el usuario u organización al que pertenece el repositorio que contienen la gema que quieres instalar.{% if enterpriseServerVersions contains currentVersion %} Reemplaza `REGISTRY-URL` con la URL del registro de Rubygems de tu instancia. Si tu instancia cuenta con el aislamiento de subdominios habilitado, utiliza `rubygems.HOSTNAME`. Si tu instancia cuenta con el aislamiento de subdominios inhabilitado, utiliza `HOSTNAME/_registry/rubygems`. En cualquiera de los casos, reemplaza *HOSTNAME* con el nombre de host de tu instancia de {% data variables.product.prodname_ghe_server %}.{% elsif currentVersion == "github-ae@latest" %}Reemplaza `REGISTRY-URL` con la URL del registro de Rubygems de tu instancia, `rubygems.HOSTNAME`. Reemplaza *HOTSNAME* con el nombre de host de {% data variables.product.product_location %}.{% endif %}

  ```ruby
  source "https://rubygems.org"

  gem "rails"

  source "https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER" do
    gem "GEM NAME"
  end
  ```

3. Para las versiones de Bundler anteriores a 1.7.0, debes agregar una nueva `fuente` global. Para obtener más información acerca del uso de Bundler, consulta la [documentación bundler.io](http://bundler.io/v1.5/gemfile.html).

  ```ruby
  source "https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER"
  source "https://rubygems.org"

  gem "rails"
  gem "GEM NAME"
  ```

4. Instala el paquete:
  ```shell
  $ gem install octo-gem --version "0.1.1"
  ```

### Leer más

- "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[Borrar y restablecer un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[Borrar un paquete](/packages/learn-github-packages/deleting-a-package){% endif %}"
