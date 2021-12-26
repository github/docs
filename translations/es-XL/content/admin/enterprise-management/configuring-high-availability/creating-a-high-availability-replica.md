---
title: Crear una réplica de alta disponibilidad
intro: 'En una configuración activa/pasiva, el aparato réplica es una copia redundante del aparato principal. Si el aparato principal falla, el modo de alta disponibilidad permite que la réplica actúe como aparato principal, lo que posibilita que la interrupción del servicio sea mínima.'
redirect_from:
  - /enterprise/admin/installation/creating-a-high-availability-replica
  - /enterprise/admin/enterprise-management/creating-a-high-availability-replica
  - /admin/enterprise-management/creating-a-high-availability-replica
versions:
  enterprise-server: '*'
topics:
  - Enterprise
  - High availability
  - Infrastructure
---
### Crear una réplica de alta disponibilidad

1. Configurar un aparato para el {% data variables.product.prodname_ghe_server %} nuevo en la plataforma que desees. El aparato réplica debe espejar la CPU, la RAM y los ajustes de almacenamiento del aparato principal. Recomendamos que instales el aparato réplica en un entorno separado. El hardward subyacente, el software y los componentes de red deben estar aislados de los del aparato principal. Si estás usando un proveedor de nube, utiliza una región o zona separada. Para obtener más información, consulta ["Configurar una instancia {% data variables.product.prodname_ghe_server %}"](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-github-enterprise-server-instance).
2. Desde un navegador, dirígete a la nueva dirección IP del aparato réplica y carga tu licencia de {% data variables.product.prodname_enterprise %}.
3. Establece una contraseña de administrador que coincida con la contraseña del aparato principal y continúa.
4. Haz clic en **Configure as Replica** (Configurar como réplica). ![Opciones de instalación con enlace para configurar tu nueva instancia como una réplica](/assets/images/enterprise/management-console/configure-as-replica.png)
5. En "Add new SSH key" (Agregar nueva clave SSH), escribe tu clave SSH. ![Agrega la clave SSH](/assets/images/enterprise/management-console/add-ssh-key.png)
6. Haz clic en **Add key** (Agregar clave), luego haz clic en **Continue** (Continuar).
6. Conectarse a la dirección IP del aparato réplica usando SSH.
  ```shell
  $ ssh -p 122 admin@<em>REPLICA IP</em>
  ```
7. Para generar un par de claves para la replicación, usa el comando `ghe-repl-setup` con la dirección IP del aparato principal y copia la clave pública que este devuelve.
  ```shell
  $ ghe-repl-setup <em>PRIMARY IP</em>
  ```
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
9. Para verificar la conexión con la primaria y habilitar el modo de réplica para una nueva réplica, ejecuta nuevamente `ghe-repl-setup`.
  ```shell
  $ ghe-repl-setup <em>PRIMARY IP</em>
  ```
{% data reusables.enterprise_installation.replication-command %}
11. Para verificar el estado de cada canal de replicación del almacén de datos, utiliza el comando `ghe-repl-status`.
  ```shell
  $ ghe-repl-status
  ```

### Crear réplicas de replicación geográfica

Esta configuración de ejemplo utiliza una réplica primaria y dos réplicas, que se encuentran en tres regiones geográficas diferentes. Aunque los tres nodos pueden estar en redes diferentes, se necesitan todos los nodos para que sean accesibles desde todos los demás nodos. Como mínimo, los puertos administrativos requeridos deben estar abiertos para todos los demás nodos. Para obtener más información acerca de los requisitos de puerto, consulta "[Puertos de red](/enterprise/{{ currentVersion }}/admin/guides/installation/network-ports/#administrative-ports)."

1. Crea la primera réplica de la misma manera en que lo harías para una configuración de dos nodos estándar ejecutando `ghe-repl-setup` en la primera réplica.
  ```shell
  (replica1)$ ghe-repl-setup <em>PRIMARY IP</em>
  (replica1)$ ghe-repl-start
  ```
2. Crea una segunda réplica y utiliza el comando `ghe-repl-setup --add`. La marca `--add` evita que sobrescriba la configuración de la replicación existente y agrega la nueva réplica a la configuración.
  ```shell
  (replica2)$ ghe-repl-setup --add <em>PRIMARY IP</em>
  (replica2)$ ghe-repl-start
  ```
3. Por defecto, las réplicas se configuran en el mismo centro de datos{% if currentVersion ver_gt "enterprise-server@2.17" %}, e intentarán iniciar desde un nodo existente en el mismo centro de datos{% endif %}. Configura las réplicas para diferentes centros de datos estableciendo un valor diferente para la opción de centro de datos. Los valores específicos pueden ser los que tú quieras, siempre que sean diferentes entre sí. Ejecuta el comando `ghe-repl-node` en cada nodo y especifica el centro de datos.

  En la primaria:
  ```shell
  (primary)$ ghe-repl-node --datacenter <em>[PRIMARY DC NAME]</em>
  ```
  En la primera réplica:
  ```shell
  (replica1)$ ghe-repl-node --datacenter <em>[FIRST REPLICA DC NAME]</em>
  ```
  En la segunda réplica:
  ```shell
  (replica2)$ ghe-repl-node --datacenter <em>[SECOND REPLICA DC NAME]</em>
  ```
  {% tip %}

  **Consejo:** puedes establecer las opciones `--datacenter` y `--active` al mismo tiempo.

  {% endtip %}
4. Un nodo de réplica activo almacenará copias de los datos del aparato y responderá las solicitudes de usuario final. Un nodo inactivo almacenará copias de los datos del aparato, pero no podrá atender las solicitudes de usuario final. Habilita el modo activo usando la marca `--active` o el modo inactivo usando la marca `--inactive`.

  En la primera réplica:
  ```shell
  (replica1)$ ghe-repl-node --active
  ```
  En la segunda réplica:
  ```shell
  (replica2)$ ghe-repl-node --active
  ```
5. Para aplicar la configuración, usa el comando `ghe-config-apply` en el principal.
  ```shell
  (primary)$ ghe-config-apply
  ```

### Configurar el DNS para replicación geográfica

Configurar Geo DNS usando las direcciones IP de los nodos primarios y réplica. También puedes crear un DNS CNAME para el nodo principal (p. ej., `primary.github.example.com`) para acceder al nodo principal a través de SSH o hacerle una copia de seguridad a través de `backup-utils`.

Para probarlo, puedes agregar entradas al archivo de `hosts` de la estación de trabajo local (por ejemplo, `/etc/hosts`). Estas entradas de ejemplo resolverán las solicitudes de `HOSTNAME` para `replica2`. Puedes apuntar a hosts específicos comentando en diferentes líneas.

```
# <primary IP>     <em>HOSTNAME</em>
# <replica1 IP>    <em>HOSTNAME</em>
<replica2 IP>    <em>HOSTNAME</em>
```

### Leer más

- "[Acerca de la configuración de alta disponibilidad](/enterprise/{{ currentVersion }}/admin/guides/installation/about-high-availability-configuration)"
- "[Utilidades para la gestión de replicaciones](/enterprise/{{ currentVersion }}/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)"
- "[Acerca de la replicación geográfica](/enterprise/{{ currentVersion }}/admin/guides/installation/about-geo-replication/)"
