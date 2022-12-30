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
ms.openlocfilehash: 514a50358bf8171b3ea8d13b01375306e784e63f
ms.sourcegitcommit: cea091b5171ad05f18b3d35fa063cfea8aea12c4
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/17/2022
ms.locfileid: '148172149'
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

## Autenticar a {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Autenticación con un {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

Si quieres publicar e instalar gems, puedes configurar RubyGems o Bundler para autenticarse en {% data variables.product.prodname_registry %} con tu {% data variables.product.pat_generic %}.

Para publicar gems nuevos, debes autenticarte en {% data variables.product.prodname_registry %} con RubyGems editando el archivo *~/.gem/credentials* para incluir tu {% data variables.product.pat_v1 %}. Cree un nuevo archivo *~/.gem/credentials* si este archivo no existe.

Por ejemplo, puedes crear o editar un archivo *~/.gem/credentials* para incluir lo siguiente, reemplazando *TOKEN* por tu {% data variables.product.pat_generic %}.

```shell
---
:github: Bearer TOKEN
```

Para instalar gems, debes autenticarte en {% data variables.product.prodname_registry %} actualizando tus orígenes de gems para incluir `https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/`. Debes reemplazar:
  - `USERNAME` por su nombre de usuario de {% data variables.product.prodname_dotcom %}.
  - `TOKEN` por tu {% data variables.product.pat_v1 %}.
  - `OWNER` por el nombre de la cuenta de usuario o de organización a la que pertenece el repositorio que contiene el proyecto.{% ifversion ghes %}
  - `REGISTRY-URL` por la dirección URL del registro de Rubygems de la instancia. Si en la instancia se ha habilitado el aislamiento de subdominios, use `rubygems.HOSTNAME`. Si en la instancia se ha deshabilitado el aislamiento de subdominios, use `HOSTNAME/_registry/rubygems`. En cualquier caso, reemplace *HOSTNAME* por el nombre de host de su instancia de {% data variables.product.prodname_ghe_server %}.
{% elsif ghae %}
  - `REGISTRY-URL` por la dirección URL del registro de Rubygems de la instancia, `rubygems.HOSTNAME`. Reemplaza *HOSTNAME* por el nombre de host de {% data variables.location.product_location %}.
{% endif %}

Si quieres que el paquete esté disponible globalmente, puedes ejecutar el siguiente comando para agregar el registro como origen.
```shell
gem sources --add https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/
```

Para la autenticación con Bundler, configúralo para que use tu {% data variables.product.pat_v1 %}, reemplazando *USERNAME* por tu nombre de usuario de {% data variables.product.prodname_dotcom %}, *TOKEN* por tu {% data variables.product.pat_generic %} y *OWNER* por el nombre de la cuenta de usuario u organización que sea propietaria del repositorio que contiene el proyecto.{% ifversion ghes %} Reemplaza `REGISTRY-URL` por la dirección URL del registro de RubyGems de la instancia. Si en la instancia se ha habilitado el aislamiento de subdominios, use `rubygems.HOSTNAME`. Si en la instancia se ha deshabilitado el aislamiento de subdominios, use `HOSTNAME/_registry/rubygems`. En cualquier caso, reemplace *HOSTNAME* por el nombre de host de su instancia de {% data variables.product.prodname_ghe_server %}.{% elsif ghae %}Reemplace `REGISTRY-URL` por la dirección URL del registro de Rubygems de la instancia, `rubygems.HOSTNAME`. Reemplaza *HOSTNAME* por el nombre de host de {% data variables.location.product_location %}.{% endif %}

```shell
$ bundle config https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER USERNAME:TOKEN
```

## Publicación de un paquete

{% data reusables.package_registry.default-name %} Por ejemplo, al publicar `<GEM NAME>` en la organización `octo-org`, {% data variables.product.prodname_registry %} publica la gema en el repositorio de `octo-org/<GEM NAME>`. Para obtener más información sobre cómo crear la gema, consulte "[Crear su propia gema](http://guides.rubygems.org/make-your-own-gem/)" en la documentación de RubyGems.

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. Compile el paquete a partir de *gemspec* para crear el paquete *.gem*.
  ```
  gem build <GEM NAME>.gemspec
  ```
3. Publique un paquete en {% data variables.product.prodname_registry %}, reemplazando `OWNER` por el nombre de la cuenta de usuario u organización que posee el repositorio que contiene el proyecto y `<GEM NAME>` por el nombre del paquete de gemas.{% ifversion ghes %} Reemplace `REGISTRY-URL` por la dirección URL del registro de Rubygems de la instancia. Si en la instancia se ha habilitado el aislamiento de subdominios, use `rubygems.HOSTNAME`. Si en la instancia se ha deshabilitado el aislamiento de subdominios, use `HOSTNAME/_registry/rubygems`. En cualquier caso, reemplace *HOSTNAME* por el nombre de host de su instancia de {% data variables.product.prodname_ghe_server %}.{% elsif ghae %} Reemplace `REGISTRY-URL` por la dirección URL del registro de Rubygems de la instancia, `rubygems.HOSTNAME`. Reemplaza *HOSTNAME* por el nombre de host de {% data variables.location.product_location %}.{% endif %}

  ```
  $ gem push --key github \
  --host https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER \
  <GEM NAME>-0.0.1.gem
  ```

## Publicar múltiples paquetes en el mismo repositorio

Para publicar varias gemas en el mismo repositorio, puede incluir la dirección URL en el repositorio de {% data variables.product.prodname_dotcom %} en el campo `github_repo` de `gem.metadata`. Si incluyes este campo, {% data variables.product.prodname_dotcom %} buscará coincidencias de repositorio con este valor en lugar de usar el nombre del gem.{% ifversion ghes or ghae %} Reemplaza *HOSTNAME* por el nombre de host de {% data variables.location.product_location %}.{% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

## Instalación de un paquete

Puede usar gemas de {% data variables.product.prodname_registry %} de forma muy similar a las gemas de *rubygems.org*. Debe autenticarse en {% data variables.product.prodname_registry %} agregando su usuario u organización de {% data variables.product.prodname_dotcom %} como origen en el archivo *~/.gemrc* o mediante Bundler, editando el archivo *Gemfile*.

{% data reusables.package_registry.authenticate-step %}
1. Para Bundler, agregue su usuario u organización de {% data variables.product.prodname_dotcom %} como origen en el archivo *Gemfile* para extraer gemas de este nuevo origen. Por ejemplo, puede agregar un nuevo bloque de `source` al archivo *Gemfile* que use {% data variables.product.prodname_registry %} solo para los paquetes que especifique, reemplazando *GEM NAME* por el paquete que desea instalar desde {% data variables.product.prodname_registry %} y *OWNER* por el usuario u organización que posee el repositorio que contiene la gema que desea instalar.{% ifversion ghes %} Reemplace `REGISTRY-URL` por la dirección URL del registro Rubygems de la instancia. Si en la instancia se ha habilitado el aislamiento de subdominios, use `rubygems.HOSTNAME`. Si en la instancia se ha deshabilitado el aislamiento de subdominios, use `HOSTNAME/_registry/rubygems`. En cualquier caso, reemplace *HOSTNAME* por el nombre de host de su instancia de {% data variables.product.prodname_ghe_server %}.{% elsif ghae %} Reemplace `REGISTRY-URL` por la dirección URL del registro de Rubygems de la instancia, `rubygems.HOSTNAME`. Reemplaza *HOSTNAME* por el nombre de host de {% data variables.location.product_location %}.{% endif %}

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
  ```
  $ gem install <GEM NAME> --version "0.1.1"
  ```

## Información adicional

- "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)"

