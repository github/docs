---
title: Configurar las reglas de firewall incorporado
intro: 'Puedes ver las reglas de firewall predeterminadas y personalizar reglas para {% data variables.product.product_location_enterprise %}.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-firewall-settings/
  - /enterprise/admin/installation/configuring-built-in-firewall-rules
versions:
  enterprise-server: '*'
---

### Acerca del firewell de {% data variables.product.product_location_enterprise %}

{% data variables.product.prodname_ghe_server %} utiliza Ubuntu's Uncomplicated Firewall (UFW) en el aparato virtual. Para obtener más información, consulta "[UFW](https://help.ubuntu.com/community/UFW)" en la documentación de Ubuntu. Con cada lanzamiento, {% data variables.product.prodname_ghe_server %} actualiza automáticamente la lista blanca de los servicios permitidos del firewell.

Después de que instales {% data variables.product.prodname_ghe_server %}, se abren automáticamente todos los puertos de red obligatorios para aceptar las conexiones. Cada puerto no obligatorio se configura automáticamente en `deny` (rechazar), y la directiva predeterminada resultante se configura en `allow` (permitir). Se habilita el rastreo con estado para todas las conexiones nuevas. Estas suelen ser paquetes de red con el conjunto de bits `SYN`. Para obtener más información, consulta "[Puertos de red](/enterprise/admin/guides/installation/network-ports)."

El firewall de UFW también abre varios puertos más que son obligatorios para que {% data variables.product.prodname_ghe_server %} funcione correctamente. Para obtener más información sobre el conjunto de reglas de UFW, consulta [el README de UFW](https://bazaar.launchpad.net/~jdstrand/ufw/0.30-oneiric/view/head:/README#L213).

### Ver las reglas de firewell predeterminadas

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Para ver las reglas de firewall predeterminadas, utiliza el comando `sudo ufw status`. Debes ver un resultado similar a este:
  ```shell
  $ sudo ufw status
  > Status: active
  > To                         Action      From
  > --                         ------      ----
  > ghe-1194                   ALLOW       Anywhere
  > ghe-122                    ALLOW       Anywhere
  > ghe-161                    ALLOW       Anywhere
  > ghe-22                     ALLOW       Anywhere
  > ghe-25                     ALLOW       Anywhere
  > ghe-443                    ALLOW       Anywhere
  > ghe-80                     ALLOW       Anywhere
  > ghe-8080                   ALLOW       Anywhere
  > ghe-8443                   ALLOW       Anywhere
  > ghe-9418                   ALLOW       Anywhere
  > ghe-1194 (v6)              ALLOW       Anywhere (v6)
  > ghe-122 (v6)               ALLOW       Anywhere (v6)
  > ghe-161 (v6)               ALLOW       Anywhere (v6)
  > ghe-22 (v6)                ALLOW       Anywhere (v6)
  > ghe-25 (v6)                ALLOW       Anywhere (v6)
  > ghe-443 (v6)               ALLOW       Anywhere (v6)
  > ghe-80 (v6)                ALLOW       Anywhere (v6)
  > ghe-8080 (v6)              ALLOW       Anywhere (v6)
  > ghe-8443 (v6)              ALLOW       Anywhere (v6)
  > ghe-9418 (v6)              ALLOW       Anywhere (v6)
  ```

### Agregar reglas de firewell personalizadas

{% warning %}

**Advertencia:** Antes de agregar reglas de firewall personalizadas, haz una copia de seguridad de tus reglas actuales en caso de que necesites restablecer un estado de funcionamiento conocido. Si estás bloqueado de tu servidor, comunícate con {% data variables.contact.contact_ent_support %} para reconfigurar las reglas originales del firewall. Restaurar las reglas originales del firewall implica tiempo de inactividad para tu servidor.

{% endwarning %}

1. Configura una regla de firewall personalizada.
2. Verifica el estado de cada nueva regla con el comando `estado numerado`.
  ```shell
  $ sudo ufw status numbered
  ```
3. Para hacer una copia de seguridad de tus reglas de firewall personalizadas, utiliza el comando `cp` para pasar las reglas a un archivo nuevo.
  ```shell
  $ sudo cp -r /lib/ufw ~/ufw.backup
  ```

Después de actualizar {% data variables.product.product_location_enterprise %}, debes volver a aplicar tus reglas de firewall personalizadas. Recomendamos que crees un script para volver a aplicar las reglas de firewall personalizadas.

### Restaurar las reglas de firewell predeterminadas

Si algo sale mal después de que cambies las reglas de firewell, puedes restablecer las reglas desde la copia de seguridad original.

{% warning %}

**Advertencia:** Si no hiciste una copia de seguridad de las reglas originales antes de hacer los cambios en el firewall, contáctate con {% data variables.contact.contact_ent_support %} para recibir más asistencia.

{% endwarning %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Para restablecer las reglas de la copia de seguridad anterior, vuélvelas a copiar en el firewell con el comando `cp`.
  ```shell
  $ sudo cp -f ~/ufw.backup/*rules /lib/ufw
  ```
3. Vuelve a iniciar el firewell con el comando `systemctl`.
  ```shell
  $ sudo systemctl restart ufw
  ```
4. Confirma que las reglas recuperaron su forma predeterminada con el comando `ufw status` (estado de ufw).
  ```shell
  $ sudo ufw status
  > Status: active
  > To                         Action      From
  > --                         ------      ----
  > ghe-1194                   ALLOW       Anywhere
  > ghe-122                    ALLOW       Anywhere
  > ghe-161                    ALLOW       Anywhere
  > ghe-22                     ALLOW       Anywhere
  > ghe-25                     ALLOW       Anywhere
  > ghe-443                    ALLOW       Anywhere
  > ghe-80                     ALLOW       Anywhere
  > ghe-8080                   ALLOW       Anywhere
  > ghe-8443                   ALLOW       Anywhere
  > ghe-9418                   ALLOW       Anywhere
  > ghe-1194 (v6)              ALLOW       Anywhere (v6)
  > ghe-122 (v6)               ALLOW       Anywhere (v6)
  > ghe-161 (v6)               ALLOW       Anywhere (v6)
  > ghe-22 (v6)                ALLOW       Anywhere (v6)
  > ghe-25 (v6)                ALLOW       Anywhere (v6)
  > ghe-443 (v6)               ALLOW       Anywhere (v6)
  > ghe-80 (v6)                ALLOW       Anywhere (v6)
  > ghe-8080 (v6)              ALLOW       Anywhere (v6)
  > ghe-8443 (v6)              ALLOW       Anywhere (v6)
  > ghe-9418 (v6)              ALLOW       Anywhere (v6)
  ```
