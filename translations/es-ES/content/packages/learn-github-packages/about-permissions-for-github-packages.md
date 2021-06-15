---
title: Acerca de los permisos para los Paquetes de GitHub
intro: Aprende cómo administrar los permisos de tus paquetes.
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% if currentVersion == "free-pro-team@latest" %}
Los permisos de los paquetes pueden ser con alcance de repositorio o de usuario/organización.
{% endif %}

### Permisos para los paquetes con alcance de repositorio

Un paquete con alcance de repositorio hereda los permisos y la visibilidad del repositorio al que pertenece el paquete. Puedes encontrar un paquete con alcance de un repositorio específico si vas a la página principal de este y haces clic en el enlace de **Paquetes** a la derecha de la página.

Los registros del {% data variables.product.prodname_registry %} que se mencionan a continuación utilizan permisos con alcance de repositorio:

  - Registro de Docker (`docker.pkg.github.com`)
  - Registro de npm
  - Registro de RubyGems
  - Registro de Apache maven
  - Registro de NuGet

{% if currentVersion == "free-pro-team@latest" %}
### Permisos granulares para paquetes con alcance de organización/usuario

Los paquetes con permisos granulares tienen un alcance de una cuenta personal o de organización. Puedes cambiar el control de accesos y la visibilidad del paquete de forma separada desde un repositorio que esté conectado (o enlazado) a un paquete.

Actualmente, solo el {% data variables.product.prodname_container_registry %} ofrece permisos granulares para tus paquetes de imagen de contenedor.

### Permisos de visibilidad y acceso para las imágenes de contenedor

{% data reusables.package_registry.visibility-and-access-permissions %}

Para obtener más información, consulta la sección "[Configurar el control de accesos y la visibilidad de un paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)".

{% endif %}

### Administrar paquetes

Para utilizar o administrar un paquete que hospede un registro de paquete, debes utilizar un token con el alcance adecuado y tu cuenta de usuario debe tener los permisos adecuados.

Por ejemplo:
-  Para descargar e instalar los paquetes desde un repositorio, tu token debe tener el alcance de `read:packages` y tu cuenta de usuario debe tener permisos de lectura.
- {% if currentVersion == "free-pro-team@latest" or if currentVersion ver_gt "enterprise-server@3.0" %}Para borrar un paquete en {% data variables.product.product_name %}, tu token deberá tener por lo menos los alcances de `delete:packages` y `read:packages`. El alcance de `repo` también se requiere para los paquetes con dicho alcance.{% elsif currentVersion ver_lt "enterprise-server@3.1" %}Para borrar una versión específica de un paquete privado en {% data variables.product.product_name %}, tu token debe tener el alcance `delete:packages` y `repo`. Los paquetes públicos no se pueden borrar.{% elsif currentVersion == "github-ae@latest" %}Para borrar una versión específica de un paquete en {% data variables.product.product_name %}, tu token debe tener los alcances de `delete:packages` y `repo`.{% endif %} Para obtener más información, consulta la sección "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[Borrar y restablecer un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[Borrar un paquete](/packages/learn-github-packages/deleting-a-package){% endif %}".

| Ámbito                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Descripción                                                                          | Permiso requerido |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------------- |
| `read:packages`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Descarga e instala paquetes de {% data variables.product.prodname_registry %}        | lectura           |
| `write:packages`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Carga y publica paquetes en {% data variables.product.prodname_registry %}           | escritura         |
| `delete:packages`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                      |                   |
| {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} Borrar paquetes de {% data variables.product.prodname_registry %} {% elsif currentVersion ver_lt "enterprise-server@3.1" %} Borrar versiones específicas de paquetes privados en el {% data variables.product.prodname_registry %}{% elsif currentVersion == "github-ae@latest" %} Borrar versiones específicas de paquetes en el {% data variables.product.prodname_registry %} {% endif %} |                                                                                      |                   |
| admin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                                                                      |                   |
| `repo`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Carga y borra los paquetes (junto con los `write:packages`, o los `delete:packages`) | escritura o admin |

Cuando creas un flujo de trabajo de {% data variables.product.prodname_actions %}, puedes usar el `GITHUB_TOKEN` para publicar e instalar paquetes en {% data variables.product.prodname_registry %} sin la necesidad de almacenar y administrar un token de acceso personal.

Para obtener más información, consulta la sección:{% if currentVersion == "free-pro-team@latest" %}
- "[Configurar el control de accesos y la visibilidad de un paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)"{% endif %}
- "[Publicar e instalar un paquete con {% data variables.product.prodname_actions %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions)"
- "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token/)"
- Tu paquete publicado contiene datos confidenciales, como violaciones del RGPD, claves de API o información de identificación personal

### Mantener el acceso a los paquetes en los flujos de trabajo de {% data variables.product.prodname_actions %}

Para garantizar que tus flujos de trabajo mantendrán el acceso a tus paquetes, asegúrate de que estás utilizando el token de acceso correcto en tu flujo de trabajo y de haber habilitado el acceso a las {% data variables.product.prodname_actions %} para tu paquete.

Para ver un antecedente más conceptual en {% data variables.product.prodname_actions %} o encontrar ejemplos de uso de paquetes en los flujos de trabajo, consulta la sección "[Administrar los Paquetes de GitHub utilizando flujos de trabajo de Github Actions](/packages/managing-github-packages-using-github-actions-workflows)".

#### Tokens de acceso

- Para publicar paquetes asociados con el repositorio del flujo de trabajo, utiliza un `GITHUB_TOKEN`.
- Para instalar paquetes asociados con otros repositorios privados a los cuales no puede acceder el `GITHUB_TOKEN`, utiliza un token de acceso personal

Para obtener más información sobre el `GITHUB_TOKEN` que se utiliza en los flujos de trabajo de {% data variables.product.prodname_actions %}, consulta la sección "[Autenticarse en un flujo de trabajo](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)".

{% if currentVersion == "free-pro-team@latest" %}
#### Acceso a las {% data variables.product.prodname_actions %} para las imágenes de contenedor

Para garantizar que tus flujos de trabajo tienen acceso a tu imagen de contenedor, debes habilitar el acceso a las {% data variables.product.prodname_actions %} para los repositorios en donde se ejecuta tu flujo de trabajo. Puedes encontrar este ajuste en la página de configuración de tu paquete. Para obtener más información, consulta la sección "[Garantizar el acceso de los flujos de trabajo a tu paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)".

{% endif %}
