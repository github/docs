---
title: Migrar hacia repositorios internos
intro: 'Puedes migrar hacia repositorios internos para unificar la experiencia de innersource para los desarolladores que utilicen tanto {% data variables.product.prodname_ghe_server %} como {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /enterprise/admin/installation/migrating-to-internal-repositories
  - /enterprise/admin/user-management/migrating-to-internal-repositories
permissions: Site administrators can migrate to internal repositories.
versions:
  enterprise-server: '>=2.20'
topics:
  - Enterprise
  - Privacy
  - Repositories
  - Security
---

### Acerca de los repositorios internos

Los repositorios internos están disponibles desde {% data variables.product.prodname_ghe_server %} 2.20+. {% data reusables.repositories.about-internal-repos %} para obtener más información, consulta "[Acerca de la visibilidad en los repositorios](/github/creating-cloning-and-archiving-repositories/about-repository-visibility#about-internal-repositories)."

En lanzamientos futuros de {% data variables.product.prodname_ghe_server %}, ajustaremos la manera en la que funciona la visibilidad de los repositorios para que los conceptos público, interno y privado tengan un significado uniforme para los desarrolladores de {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}.

Para prepararse para estos cambios, si has habilitado el modo privado, puedes ejecutar una migración en tu instancia para convertir los repositorios públicos en internos. Esta migración es opcional actualmente. Esto sirve para permitirte probar los cambios en una instancia no productiva. La migración será obligatoria en el futuro.

Cuando ejecutas la migración, todos los repositorios públicos propiedad de las organizaciones en tu instancia se convertirán en repositorios internos. En caso de que cualquiera de estos repositorios tenga ramificaciones, estas se convertirán en privadas. Los repositorios privados permanecerán como privados.

Todos los repositorios públicos propiedad de cuentas de usuario en tu instancia se convertirán en repositorios privados. Si cualquiera de estos repositorios tienen ramificaciones, éstas también se convertirán en privadas. A cada dueño de una ramificación se le otorgarán permisos de lectura para el directorio padre de la misma.

Se inhabilitará el acceso de lectura anónimo para Git en cada repositorio público que se convierta en interno o privado.

Si tu visibilidad predeterminada actual para los repositorios es pública, ahora se convertirá en interna. Si la predeterminada es privada, entonces no cambiará. Puedes cambiar esta configuración predeterminada en cualquier momento. Para encontrar más información, visita "[Configurar la visibilidad predeterminada de repositorios nuevos en tu aplicativo](/enterprise/admin/installation/configuring-the-default-visibility-of-new-repositories-on-your-appliance)."

La política de creación de repositorios para la instancia cambiará para inhabilitar los repositorios públicos y permitir los privados e internos. Puedes actualizar la política en cualquier momento. Para obtener más información, consulta "[Restringir la creación de repositorios en tu instancia](/enterprise/admin/user-management/restricting-repository-creation-in-your-instance)."

El script de migración no tendrá efecto si no tienes el modo privado habilitado.

### Ejecutar la migración

1. Conecta con el shell administrativo. Para obtener más información, consulta "[Acceder al shell administrativo (SSH)](/enterprise/admin/installation/accessing-the-administrative-shell-ssh)."
2. Navega hacia el directorio `/data/github/current`.
   ```
   cd /data/github/current
   ```
3. Ejecuta el comando de migración.
   ```
   sudo bin/safe-ruby lib/github/transitions/20191210220630_convert_public_ghes_repos_to_internal.rb --verbose -w | tee -a /tmp/convert_public_ghes_repos_to_internal.log
   ```

Se mostrará el registro de salida en la terminal y quedará en `/tmp/convert_public_ghes_repos_to_internal.log`.

### Leer más

- "[Habilitar el modo privado](/enterprise/admin/installation/enabling-private-mode)"
