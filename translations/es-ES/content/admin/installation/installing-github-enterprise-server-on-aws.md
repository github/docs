---
title: Instalar el servidor de GitHub Enterprise en AWS
intro: 'Para instalar el {% data variables.product.prodname_ghe_server %} en Amazon Web Services (AWS), debes iniciar una instancia de Amazon Elastic Compute Cloud (EC2) y crear y adjuntar un volumen de datos separado de Amazon Elastic Block Store (EBS).'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-aws/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-aws
versions:
  enterprise-server: '*'
topics:
  - empresa
---

### Prerrequisitos

- {% data reusables.enterprise_installation.software-license %}
- Debes tener una cuenta AWS capaz de iniciar instancias EC2 y crear volúmenes EBS. Para obtener más información, consulta el [Sitio web de Amazon Web Services](https://aws.amazon.com/).
- La mayoría de las acciones necesarias para iniciar {% data variables.product.product_location %} también pueden realizarse por medio de la consola de administración de AWS. Sin embargo, recomendamos instalar la interfaz de línea de comando de AWS (CLI) para la configuración inicial. Abajo se incluyen ejemplos que utilizan AWS CLI. Para obtener más información, consulta las guías de Amazon "[Trabajar con la consola de administración de AWS](http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/getting-started.html)" y "[Qué es la interfaz de línea de comando de AWS](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)."

Esta guía supone que estás familiarizado con los siguientes conceptos de AWS:

 - [Iniciar instancias de EC2](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/LaunchingAndUsingInstances.html)
 - [Administrar volúmenes de EBS](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html)
 - [Utilizar grupos de seguridad](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html) (para administrar el acceso de red a tu instancia)
 - [Direcciones IP elásticas (EIP)](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) (altamente recomendadas para los entornos de producción)
 - [EC2 y Virtual Private Cloud](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html) (si planeas iniciar dentro de Virtual Private Cloud)
 - [Precios de AWS](https://aws.amazon.com/pricing/) (Para calcular y administrar los costos)

 Esta guía te recomienda utilizar el principio del menor privilegio necesario cuando configures {% data variables.product.product_location %} en AWS. Para obtener más información, refiérete a la [Documentación sobre la Administración de Accesos e Identidad (IAM) de AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege).

### Consideraciones relativas al hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Determinar el tipo de instancia

Before launching {% data variables.product.product_location %} on AWS, you'll need to determine the machine type that best fits the needs of your organization. To review the minimum requirements for {% data variables.product.product_name %}, see "[Minimum requirements](#minimum-requirements)."

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

### Seleccionar la AMI del {% data variables.product.prodname_ghe_server %}

Puedes seleccionar una Amazon Machine Image (AMI) para el {% data variables.product.prodname_ghe_server %} utilizando el portal del {% data variables.product.prodname_ghe_server %} o la CLI de AWS.

Las AMIs para {% data variables.product.prodname_ghe_server %} se encuentran disponibles en la región de AWS GovCloud (EE.UU. Este y EE.UU. Oeste). Esto permite que los clientes de EE. UU. con requisitos reglamentarios específicos ejecuten el {% data variables.product.prodname_ghe_server %} en un entorno de nube que cumpla con los requisitos a nivel federal. Para obtener más información sobre el cumplimiento de AWS de las normas federales y otras normas, consulta la [Página de GovCloud (EE. UU.) de AWS](http://aws.amazon.com/govcloud-us/) y la [Página de cumplimiento de AWS](https://aws.amazon.com/compliance/).

#### Utilizar el portal {% data variables.product.prodname_ghe_server %} para seleccionar una AMI

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-appliance %}
3. En el menú desplegable Select your platform (Selecciona tu plataforma), haz clic en **Amazon Web Services**.
4. En el menú desplegable Select your AWS region (Selecciona tu región AWS), elige tu región deseada.
5. Toma nota de la ID de AMI que se muestra.

#### Utilizar la CLI de AWS para seleccionar una AMI

1. Utilizando una CLI de AWS, obtén una lista de imágenes publicadas del {% data variables.product.prodname_ghe_server %} por ID de propietarios de AWS de {% data variables.product.prodname_dotcom %} (`025577942450` para GovCloud, y `895557238572` para otras regiones). Para obtener más información, consulta "[describe-images](http://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html)" en los documentos de AWS.
  ```shell
  aws ec2 describe-images \
  --owners <em>OWNER ID</em> \
  --query 'sort_by(Images,&Name)[*].{Name:Name,ImageID:ImageId}' \
  --output=text
  ```
2. Toma nota del ID de AMI de la última imagen del {% data variables.product.prodname_ghe_server %}.

### Crear un grupo de seguridad

Si estás configurando tu AMI por primera vez, deberás crear un grupo de seguridad y agregar una nueva regla de grupo de seguridad para cada puerto en la tabla de abajo. Para más información, consulta la guía AWS "[Usar grupos de seguridad](http://docs.aws.amazon.com/cli/latest/userguide/cli-ec2-sg.html)."

1. Crea un nuevo grupo de seguridad utilizando la CLI de AWS. Para obtener más información, consulta "[create-security-group](http://docs.aws.amazon.com/cli/latest/reference/ec2/create-security-group.html)" en los documentos de AWS.
  ```shell
  $ aws ec2 create-security-group --group-name <em>SECURITY_GROUP_NAME</em> --description "<em>SECURITY GROUP DESCRIPTION</em>"
  ```

2. Toma nota del ID del grupo de seguridad (`sg-xxxxxxxx`) de tu grupo de seguridad recientemente creado.

3. Crea una regla de grupo de seguridad para cada puerto en la tabla de abajo. Para obtener más información, consulta "[authorize-security-group-ingress](http://docs.aws.amazon.com/cli/latest/reference/ec2/authorize-security-group-ingress.html)" en los documentos de AWS.
  ```shell
  $ aws ec2 authorize-security-group-ingress --group-id <em>SECURITY_GROUP_ID</em> --protocol <em>PROTOCOL</em> --port <em>PORT_NUMBER</em> --cidr <em>SOURCE IP RANGE</em>
  ```
  Esta tabla identifica para qué se utiliza cada puerto.

  {% data reusables.enterprise_installation.necessary_ports %}

### Crear la instancia {% data variables.product.prodname_ghe_server %}

Para crear la instancia, deberás lanzar una instancia de EC2 con tu AMI {% data variables.product.prodname_ghe_server %} y adjuntarle volumen de almacenamiento adicional para los datos de tu instancia. Para obtener más información, consulta "[Consideraciones relativas al hardware](#hardware-considerations)."

{% note %}

**Nota:** puedes cifrar el disco de datos para obtener un nivel adicional de seguridad y estar seguro de que los datos que escribas en tu instancia están protegidos. Hay un leve impacto de desempeño cuando usas discos encriptados. Si decides cifrar tu volumen, recomendamos firmemente hacerlo **antes** de comenzar tu instancia por primera vez. Para más información, consulta la guía de Amazon [sobre el cifrado EBS](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html).

{% endnote %}

{% warning %}

**Advertencia:** si decides habilitar la encriptación después de configurar tu instancia, deberás migrar tus datos al volumen encriptado, que producirá tiempo de inactividad para tus usuarios.

{% endwarning %}

#### Lanzar una instancia de EC2

En la CLI de AWS, inicia una instancia de EC2 utilizando tu AMI y el grupo de seguridad que has creado. Adjunta un nuevo dispositivo de bloque para utilizarlo como volumen de almacenamiento para tus datos de la instancia y configura el tamaño de acuerdo con la cantidad de licencias de usuario que tengas. Para obtener más información, consulta "[run-instances](http://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html)" en los documentos de AWS.

```shell
aws ec2 run-instances \
  --security-group-ids <em>SECURITY_GROUP_ID</em> \
  --instance-type <em>INSTANCE_TYPE</em> \
  --image-id <em>AMI_ID</em> \
  --block-device-mappings '[{"DeviceName":"/dev/xvdf","Ebs":{"VolumeSize":<em>SIZE</em>,"VolumeType":"<em>TYPE</em>"}}]' \
  --region <em>REGION</em> \
  --ebs-optimized
```

#### Asignar una IP elástica y asociarla con la instancia

Si esta es una instancia de producción, recomendamos firmemente asignar una IP elástica (EIP) y asociarla con la instancia antes de continuar con la configuración del {% data variables.product.prodname_ghe_server %}. De lo contrario, la dirección IP pública de la instancia no se conservará después de que se reinicie la instancia. Para obtener más información, consulta "[Asignar una dirección IP elástica](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-allocating)" y "[Asociar una dirección IP elástica con una instancia en ejecución](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-associating)" en la documentación de Amazon.

Tanto en la instancia principal y en la de réplica deberían asignarse EIP separadas en las configuraciones de alta disponibilidad de producción. Para obtener más información, consulta "[Configurar el {% data variables.product.prodname_ghe_server %} para alta disponibilidad](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)."

### Configurar la instancia de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para obtener más información, consulta "[Configurar el aparato de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)."
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### Leer más

- "[Resumen del sistema](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[Acerca de las mejoras a los lanzamientos nuevos](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
