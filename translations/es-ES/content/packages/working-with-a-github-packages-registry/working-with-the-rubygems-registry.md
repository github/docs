---
title: Trabajar con el registro de RubyGems
intro: 'Puedes configurar RubyGems para publicar un paquete para {% data variables.product.prodname_registry %} y utilizar paquetes almacenados en {% data variables.product.prodname_registry %} como dependencias en un proyecto Ruby con Bundler.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-rubygems-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-rubygems-for-use-with-github-packages
  - /packages/guides/configuring-rubygems-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: RubyGems registry
ms.openlocfilehash: 56fb2fda7c50e6f1a1a3265e55c77d65a7af8705
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882331'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Prerrequisitos

- Debes contar con RubyGems 2.4.1 o superior. Para encontrar tu versión de RubyGems:

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

## Autenticar a {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Autenticarte con un token de acceso personal

{% data reusables.package_registry.required-scopes %}

Puede autenticarse en {% data variables.product.prodname_registry %} con RubyGems editando el archivo *~/.gem/credentials* para publicar gemas, editando el archivo *~/.gemrc* para instalar una única gema única o usando Bundler para rastrear e instalar una o más gemas.

Para publicar gemas nuevas, debe autenticarse en {% data variables.product.prodname_registry %} con RubyGems editando el archivo *~/.gem/credentials* para incluir su token de acceso personal.  Cree un nuevo archivo *~/.gem/credentials* si este archivo no existe.

Por ejemplo, puede crear o editar un archivo *~/.gem/credentials* para incluir lo siguiente, reemplazando *TOKEN* por el token de acceso personal.

```shell
---
:github: Bearer <em>TOKEN</em>
```

Para instalar gemas, debe autenticarse en {% data variables.product.prodname_registry %} editando el archivo *~/.gemrc* para que el proyecto incluya `https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/`. Debes reemplazar:
  - `USERNAME` por su nombre de usuario de {% data variables.product.prodname_dotcom %}.
  - `TOKEN` por el token de acceso personal.
  - `OWNER` por el nombre de la cuenta de usuario o de organización a la que pertenece el repositorio que contiene el proyecto.{% ifversion ghes %}
  - `REGISTRY-URL` por la dirección URL del registro de Rubygems de la instancia. Si en la instancia se ha habilitado el aislamiento de subdominios, use `rubygems.HOSTNAME`. Si en la instancia se ha deshabilitado el aislamiento de subdominios, use `HOSTNAME/_registry/rubygems`. En cualquier caso, reemplace *HOSTNAME* por el nombre de host de su instancia de {% data variables.product.prodname_ghe_server %}.
{% elsif ghae %}
  - `REGISTRY-URL` por la dirección URL del registro de Rubygems de la instancia, `rubygems.HOSTNAME`. Reemplace *HOSTNAME* por el nombre de host de {% data variables.product.product_location %}.
{% endif %}

Si no tiene un archivo *~/.gemrc*, cree un nuevo archivo *~/.gemrc* consultando este ejemplo.

```shell
---
:backtrace: false
:bulk_threshold: 1000
:sources:
- https://rubygems.org/
- https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/
:update_sources: true
:verbose: true  

```

Para autenticarse con Bundler, configúrelo para que use el token de acceso personal, reemplazando *USERNAME* por el nombre de usuario de {% data variables.product.prodname_dotcom %}, *TOKEN* por su token de acceso personal y *OWNER* por el nombre de la cuenta de usuario u organización que posea el repositorio que contiene el proyecto. {% ifversion ghes %} Reemplace `REGISTRY-URL` por la dirección URL del registro de RubyGems de la instancia. Si en la instancia se ha habilitado el aislamiento de subdominios, use `rubygems.HOSTNAME`. Si en la instancia se ha deshabilitado el aislamiento de subdominios, use `HOSTNAME/_registry/rubygems`. En cualquier caso, reemplace *HOSTNAME* por el nombre de host de su instancia de {% data variables.product.prodname_ghe_server %}.{% elsif ghae %}Reemplace `REGISTRY-URL` por la dirección URL del registro de Rubygems de la instancia, `rubygems.HOSTNAME`. Reemplace *HOSTNAME* por el nombre de host de {% data variables.product.product_location %}.{% endif %}

```shell
$ bundle config https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER USERNAME:TOKEN</em>
```

## Publicación de un paquete

{% data reusables.package_registry.default-name %} Por ejemplo, al publicar `octo-gem` en la organización `octo-org`, {% data variables.product.prodname_registry %} publica la gema en el repositorio de `octo-org/octo-gem`. Para obtener más información sobre cómo crear la gema, consulte "[Crear su propia gema](http://guides.rubygems.org/make-your-own-gem/)" en la documentación de RubyGems.

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. Compile el paquete a partir de *gemspec* para crear el paquete *.gem*.
  ```shell
  gem build OCTO-GEM.gemspec
  ```
3. Publique un paquete en {% data variables.product.prodname_registry %}, reemplazando `OWNER` por el nombre de la cuenta de usuario u organización que posee el repositorio que contiene el proyecto y `OCTO-GEM` por el nombre del paquete de gemas.{% ifversion ghes %} Reemplace `REGISTRY-URL` por la dirección URL del registro de Rubygems de la instancia. Si en la instancia se ha habilitado el aislamiento de subdominios, use `rubygems.HOSTNAME`. Si en la instancia se ha deshabilitado el aislamiento de subdominios, use `HOSTNAME/_registry/rubygems`. En cualquier caso, reemplace *HOSTNAME* por el nombre de host de su instancia de {% data variables.product.prodname_ghe_server %}.{% elsif ghae %} Reemplace `REGISTRY-URL` por la dirección URL del registro de Rubygems de la instancia, `rubygems.HOSTNAME`. Reemplace *HOSTNAME* por el nombre de host de {% data variables.product.product_location %}.{% endif %}

  ```shell
  $ gem push --key github \
  --host https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER</em> \
  <em>OCTO-GEM-0.0.1</em>.gem
  ```

## Publicar múltiples paquetes en el mismo repositorio

Para publicar varias gemas en el mismo repositorio, puede incluir la dirección URL en el repositorio de {% data variables.product.prodname_dotcom %} en el campo `github_repo` de `gem.metadata`. Si incluye este campo, {% data variables.product.prodname_dotcom %} buscará coincidencias de repositorio en función de este valor en vez de utilizar el nombre de la gema.{% ifversion ghes or ghae %} Reemplace *HOSTNAME* por el nombre de host de {% data variables.product.product_location %}.{% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

## Instalación de un paquete

Puede usar gemas de {% data variables.product.prodname_registry %} de forma muy similar a las gemas de *rubygems.org*. Debe autenticarse en {% data variables.product.prodname_registry %} agregando su usuario u organización de {% data variables.product.prodname_dotcom %} como origen en el archivo *~/.gemrc* o mediante Bundler, editando el archivo *Gemfile*.

{% data reusables.package_registry.authenticate-step %}
1. Para Bundler, agregue su usuario u organización de {% data variables.product.prodname_dotcom %} como origen en el archivo *Gemfile* para extraer gemas de este nuevo origen. Por ejemplo, puede agregar un nuevo bloque de `source` al archivo *Gemfile* que use {% data variables.product.prodname_registry %} solo para los paquetes que especifique, reemplazando *GEM NAME* por el paquete que desea instalar desde {% data variables.product.prodname_registry %} y *OWNER* por el usuario u organización que posee el repositorio que contiene la gema que desea instalar.{% ifversion ghes %} Reemplace `REGISTRY-URL` por la dirección URL del registro Rubygems de la instancia. Si en la instancia se ha habilitado el aislamiento de subdominios, use `rubygems.HOSTNAME`. Si en la instancia se ha deshabilitado el aislamiento de subdominios, use `HOSTNAME/_registry/rubygems`. En cualquier caso, reemplace *HOSTNAME* por el nombre de host de su instancia de {% data variables.product.prodname_ghe_server %}.{% elsif ghae %} Reemplace `REGISTRY-URL` por la dirección URL del registro de Rubygems de la instancia, `rubygems.HOSTNAME`. Reemplace *HOSTNAME* por el nombre de host de {% data variables.product.product_location %}.{% endif %}

  ```ruby
  source "https://rubygems.org"

  gem "rails"

  source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER" do
    gem "GEM NAME"
  end
  ```

3. En el caso de las versiones de Bundler anteriores a la 1.7.0, debe agregar un nuevo `source` global. Para obtener más información sobre el uso de Bundler, consulte la [documentación de bundler.io](https://bundler.io/gemfile.html).

  ```ruby
  source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER"
  source "https://rubygems.org"

  gem "rails"
  gem "GEM NAME"
  ```

4. Instala el paquete:
  ```shell
  $ gem install octo-gem --version "0.1.1"
  ```

## Información adicional

- "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)"

