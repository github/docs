---
title: Aumentar el CPU o los recursos de memoria
intro: 'Si las operaciones en {% data variables.product.product_location_enterprise %} son lentas, es posible que necesites agregar CPU o recursos de memoria.'
redirect_from:
  - /enterprise/admin/installation/increasing-cpu-or-memory-resources
  - /enterprise/admin/enterprise-management/increasing-cpu-or-memory-resources
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

### Agregar CPU o recursos de memoria para AWS

{% note %}

**Nota:** Para agregar CPU o recursos de memoria para AWS, debes estar familiarizado con el uso de la consola de administración de AWS o la interfaz de la línea de comando `aws ec2` para administrar instancias EC2. Para obtener antecedentes y detalles sobre el uso de herramientas de AWS de tu elección para realizar el ajuste de tamaño, consulta la documentación de AWS en [ajustar el tamaño de una instancia respaldada por Amazon EBS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html).

{% endnote %}

#### Consideraciones relativas al ajuste de tamaño

Antes de aumentar la CPU o los recursos de memoria para {% data variables.product.product_location_enterprise %}:

- **Scale your memory with CPUs**. {% data reusables.enterprise_installation.increasing-cpus-req %}
- **Assign an Elastic IP address to the instance**. Si no se asigna una IP elástica, deberás ajustar los registros DNS A para tu servidor {% data variables.product.prodname_ghe_server %} después de volver a iniciar para considerar el cambio de la dirección de IP pública. Una vez que tu instancia se reinicia, la IP elástica (EIP) se mantiene automáticamente si la instancia se inicia en una VPC. Si la instancia se inicia en una EC2-Classic, la IP elástica debe asociarse nuevamente de forma manual.

#### Tipos de instancias AWS admitidos

Debes determinar el tipo de instancia que te gustaría actualizar en base a especificaciones de CPU/memoria.
{% data reusables.enterprise_installation.aws-supported-instance-types %}

#### Tipos de instancias AWS recomendadas

{% data reusables.enterprise_installation.aws-recommended-instance-types %}

{% data reusables.enterprise_installation.warning-on-scaling %}

#### Volver a ajustar el tamaño para AWS

{% note %}

**Nota:** Para instancias iniciadas en EC2-Classic, escribe la dirección de IP elástica asociada con la instancia y las ID de las instancias. Una vez que reiniciaste la instancia, vuelve a asociar la dirección de IP elástica.

{% endnote %}

Si no es posible agregar un CPU o recursos de memoria a una instancia AWS/EC2 existente. En su lugar, debes:

1. Frenar la instancia.
2. Cambiar el tipo de instancia.
3. Iniciar la instancia.
{% data reusables.enterprise_installation.configuration-recognized %}

### Agregar CPU o recursos de memoria para OpenStack KVM

No es posible agregar CPU o recursos de memoria para una instancia OpenStack KVM existente. En su lugar, debes:

1. Tomar una instantánea para la instancia actual.
2. Frenar la instancia.
3. Seleccionar un nuevo formato de la instancia que tenga el CPU o los recursos de memoria deseados.

### Agregar recursos de memoria o de CPU para VMware

{% data reusables.enterprise_installation.increasing-cpus-req %}

1. Utiliza vSphere Client para conectar al servidor de VMware ESXi.
2. Cierra {% data variables.product.product_location_enterprise %}.
3. Selecciona la máquina virtual y haz clic en **Edit Settings (Editar parámetros)**.
4. En "Hardware", ajusta el CPU o los recursos de memoria asignados a la máquina virtual según se necesite: ![Recursos de configuración de WMware](/assets/images/enterprise/vmware/vsphere-hardware-tab.png)
5. Para iniciar la máquina virtual, haz clic en **OK**.
{% data reusables.enterprise_installation.configuration-recognized %}
