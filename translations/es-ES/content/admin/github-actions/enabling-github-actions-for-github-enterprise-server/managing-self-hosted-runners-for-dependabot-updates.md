---
title: Administrar los ejecutores auto-hospedados para las actualizaciones del Dependabot en tu empresa
intro: 'Puedes crear ejecutores dedicados para {% data variables.product.product_location %} que utilice el {% data variables.product.prodname_dependabot %} para crear solicitudes de cambio para ayudar a asegurar y mantener las dependencias que se utilizan en los repositorios de tu empresa.'
redirect_from:
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/setting-up-dependabot-updates
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  ghes: '> 3.2'
topics:
  - Enterprise
  - Security
  - Dependabot
  - Dependencies
shortTitle: Actualizaciones del dependabot
---

{% data reusables.dependabot.beta-security-and-version-updates %}

## Acerca de los ejecutores auto-hospedados para las {% data variables.product.prodname_dependabot_updates %}

Puedes ayudar a que los usuarios de {% data variables.product.product_location %} creen y mantengan un código seguro si configuras la seguridad y las actualizaciones de versión del {% data variables.product.prodname_dependabot %}. Con las {% data variables.product.prodname_dependabot_updates %}, los desarrolladores pueden configurar repositorios para que sus dependencias se actualicen y se mantengan seguras automáticamente. Para obtener más información, consulta la sección "[Habilitar la {% data variables.product.prodname_dependabot %} en tu empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

Para utilizar las {% data variables.product.prodname_dependabot_updates %} en {% data variables.product.product_location %}, debes configurar los ejecutores auto-hospedados para crear las solicitudes de cambios que actualizarán las dependencias.

## Prerrequisitos

{% ifversion dependabot-updates-github-connect %}
El configurar los ejecutores auto-hospedados es solo un paso en medio del proceso para habilitar las {% data variables.product.prodname_dependabot_updates %}. Hay varios pasos que debes seguir antes de estos, incluyendo el configurar a {% data variables.product.product_location %} para utilizar {% data variables.product.prodname_actions %} con ejecutores auto-hospedados. Para obtener más información, consulta la sección "[Habilitar la {% data variables.product.prodname_dependabot %} en tu empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
{% else %}
Antes de que configures los ejecutores auto-hospedados para {% data variables.product.prodname_dependabot_updates %}, debes:

- Configurar {% data variables.product.product_location %} para utilizar las {% data variables.product.prodname_actions %} con ejecutores auto-hospedados. Para obtener más información, consulta la sección "[Iniciar con las {% data variables.product.prodname_actions %} para GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)".
- Habilitar las {% data variables.product.prodname_dependabot_alerts %} para tu empresa. Para obtener más información, consulta la sección "[Habilitar la {% data variables.product.prodname_dependabot %} en tu empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
{% endif %}

## Configurar los ejecutores auto-hospedados para las {% data variables.product.prodname_dependabot_updates %}

Después de que configuras {% data variables.product.product_location %} para que utilice las {% data variables.product.prodname_actions %}, necesitas agregar ejecutores auto-hospedados para las {% data variables.product.prodname_dependabot_updates %}.

### Requisitos de sistema para los ejecutores del {% data variables.product.prodname_dependabot %}

Cualquier máquina virtual que utilices para los ejecutores del {% data variables.product.prodname_dependabot %} debe cumplir con los requisitos de los ejecutores auto-hospedados. Adicionalmente, deben cumplir con los siguientes requisitos.

- Sistema operativo Linux{% ifversion ghes < 3.5 %}
- Git instalado{% endif %}
- Docker instalado con acceso para los usuarios del ejecutor:
  - Recomendamos instalar Docker en modo sin raíz y configurar los ejecutores para acceder a Docker sin privilegios de `root`.
  - Como alternativa, instala Docker y otorga a los usuarios del ejecutor privilegios superiores para ejecutarlo.

Los requisitos de memoria y CPU dependerán de la cantidad de ejecutores simultáneos que despliegues en una MV determinada. Como orientación, configuramos exitosamente 20 ejecutores en una sola máquina de 2 CPU y 8 GB pero, en última instancia, tus requisitos de memoria y CPU dependerán fuertemente de los repositorios que se vayan a actualizar. Algunos ecosistemas requerirán más recursos que otros.

Si especificas más de 14 ejecutores simultáneos en una MV, también debes actualizar la configuración de `/etc/docker/daemon.json` de Docker para incrementar la cantidad predeterminada de redes que Docker puede crear.

```
{
  "default-address-pools": [
    {"base":"10.10.0.0/16","size":24}
  ]
}
```

### Requisitos de red para los ejecutores del {% data variables.product.prodname_dependabot %}

Los ejecutores del {% data variables.product.prodname_dependabot %} necesitan acceso al internet público, a {% data variables.product.prodname_dotcom_the_website %} y a cualquier registro interno que se utilizará en las actualizaciones del {% data variables.product.prodname_dependabot %}. Para minimizar el riesgo de tu red interna, debes limitar el acceso desde la máquina virtual (MV) a tu red interna. Esto reduce el potencial de daño a los sistemas internos si un ejecutor descargara una dependencia secuestrada.

### Agregar ejecutores auto-hospedados para las actualizaciones del {% data variables.product.prodname_dependabot %}

1. Aprovisionar los ejecutores auto-hospedados a nivel de cuenta empresarial, organizacional o de repositorio. Para obtener más información, consulta las secciones "[Acerca de los ejecutores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" y "[Agregar ejecutores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

2. Configurar los ejecutores auto hospedados con los requisitos que se describen anteriormente. Por ejemplo, en una MV que ejecuta Ubuntu 20.04, podrías:{% ifversion ghes < 3.5 %}

   - Verificar que Git está instalado: `command -v git`{% endif %}
   - Instalar Docker y asegurarte de que los usuarios del ejecutor tengan acceso a él. Para obtener más información, consulta la documentación de Docker.
     - [Instalar Docker Engine en Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
     - Enfoque recomendado: [Ejecuta el Docker daemon como un usuario no raíz (Modo sin raíz)](https://docs.docker.com/engine/security/rootless/)
     - Enfoque alterno: [Administra Docker como un usuario sin raíz](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
   - Verificar que los ejecutores tengan acceso al internet público y solo puedan acceder a las redes internas que necesita el {% data variables.product.prodname_dependabot %}.

3. Asignar una etiqueta del `dependabot` a cada ejecutor que quieras que utilice el {% data variables.product.prodname_dependabot %}. Para obtener más información, consulta la sección "[Utilizar etiquetas con ejecutores auto-hospedados](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners#assigning-a-label-to-a-self-hosted-runner)".

4. Opcionalmente, habilitar los flujos de trabajo que activa el {% data variables.product.prodname_dependabot %} para utilizar más que los permisos de solo lectura y para tener acceso a cualquier secreto que esté disponible habitualmente. Para obtener más información, consulta la sección "[Solucionar los problemas de las {% data variables.product.prodname_actions %} en tu empresa](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#enabling-workflows-triggered-by-dependabot-access-to-dependabot-secrets-and-increased-permissions)".
