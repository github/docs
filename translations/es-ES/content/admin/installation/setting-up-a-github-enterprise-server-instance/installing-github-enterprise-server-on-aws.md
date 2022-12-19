---
title: Instalar el servidor de GitHub Enterprise en AWS
intro: 'Para instalar el {% data variables.product.prodname_ghe_server %} en Amazon Web Services (AWS), debes iniciar una instancia de Amazon Elastic Compute Cloud (EC2) y crear y adjuntar un volumen de datos separado de Amazon Elastic Block Store (EBS).'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-aws
  - /enterprise/admin/installation/installing-github-enterprise-server-on-aws
  - /admin/installation/installing-github-enterprise-server-on-aws
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on AWS
ms.openlocfilehash: f91f2337cc13690d0476c836a15ec72a5c0685cb
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147879307'
---
## Requisitos previos

- {% data reusables.enterprise_installation.software-license %}
- Debes tener una cuenta AWS capaz de iniciar instancias EC2 y crear volúmenes EBS. Par más información, vea el [sitio web de Amazon Web Services](https://aws.amazon.com/).
- La mayoría de las acciones necesarias para iniciar {% data variables.product.product_location %} también se pueden realizar con la consola de administración de AWS. Sin embargo, recomendamos instalar la interfaz de línea de comando de AWS (CLI) para la configuración inicial. Abajo se incluyen ejemplos que utilizan AWS CLI. Para más información, vea las guías de Amazon "[Working with the AWS Management Console](http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/getting-started.html)" (Trabajo con la consola de administración de AWS) y "[What is the AWS Command Line Interface](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)" (¿Qué es la interfaz de línea de comandos de AWS?).

{% note %}

**Nota:** En este momento {% data variables.product.prodname_ghe_server %} no admite el uso de la Amazon IDMSv2 Metadata.

{% endnote %}

Esta guía supone que estás familiarizado con los siguientes conceptos de AWS:

 - [Inicio de instancias de EC2](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/LaunchingAndUsingInstances.html)
 - [Administración de volúmenes de EBS](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html)
 - [Uso de grupos de seguridad](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html) (para administrar el acceso de red a la instancia)
 - [Direcciones IP elásticas (EIP)](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) (Se recomienda encarecidamente para entornos de producción)
 - [EC2 y la nube privada virtual](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html) (Si tiene previsto iniciar en una nube privada virtual)
 - [Precios de AWS](https://aws.amazon.com/pricing/) (Para calcular y administrar los costos)

Para obtener información general sobre la arquitectura, vea "[AWS Architecture Diagram for Deploying GitHub Enterprise Server](/assets/images/installing-github-enterprise-server-on-aws.png)" (Diagrama de arquitectura de AWS para implementar GitHub Enterprise Server). 

Esta guía te recomienda utilizar el principio del menor privilegio necesario cuando configures {% data variables.product.product_location %} en AWS. Para más información, vea la [documentación de la administración de identidad y acceso (IAM) de AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege).

## Consideraciones de hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Determinar el tipo de instancia

Antes de iniciar {% data variables.product.product_location %} en AWS, deberás determinar el tipo de máquina que mejor se adapte a las necesidades de tu organización. Para revisar los requisitos mínimos de {% data variables.product.product_name %}, vea "[Requisitos mínimos](#minimum-requirements)".

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

## Seleccionar la AMI del {% data variables.product.prodname_ghe_server %}

Puedes seleccionar una Amazon Machine Image (AMI) para el {% data variables.product.prodname_ghe_server %} utilizando el portal del {% data variables.product.prodname_ghe_server %} o la CLI de AWS.

Las AMIs para {% data variables.product.prodname_ghe_server %} se encuentran disponibles en la región de AWS GovCloud (EE.UU. Este y EE.UU. Oeste). Esto permite que los clientes de EE. UU. con requisitos reglamentarios específicos ejecuten el {% data variables.product.prodname_ghe_server %} en un entorno de nube que cumpla con los requisitos a nivel federal. Para más información sobre el cumplimiento de AWS con los estándares federales y otros, vea la [página GovCloud (EE. UU.) de AWS](http://aws.amazon.com/govcloud-us/) y [la página de cumplimiento de AWS](https://aws.amazon.com/compliance/).

### Utilizar el portal {% data variables.product.prodname_ghe_server %} para seleccionar una AMI

{% data reusables.enterprise_installation.download-appliance %}
3. En "{% data variables.product.prodname_dotcom %} en la nube", seleccione el menú desplegable "Seleccionar su plataforma" y haga clic en **Amazon Web Services**.
4. Seleccione el menú desplegable "Seleccionar su región de AWS" y haga clic en la región deseada.
5. Toma nota de la ID de AMI que se muestra.

### Utilizar la CLI de AWS para seleccionar una AMI

1. Con la CLI de AWS, obtenga una lista de imágenes de {% data variables.product.prodname_ghe_server %} publicadas por id. de propietarios de AWS de {% data variables.product.prodname_dotcom %} (`025577942450` para GovCloud, y `895557238572` para otras regiones). Para más información, vea "[describe-images](http://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html)" en la documentación de AWS.
  ```shell
  aws ec2 describe-images \
  --owners <em>OWNER ID</em> \
  --query 'sort_by(Images,&Name)[*].{Name:Name,ImageID:ImageId}' \
  --output=text
  ```
2. Toma nota del ID de AMI de la última imagen del {% data variables.product.prodname_ghe_server %}.

## Creación de un grupo de seguridad

Si estás configurando tu AMI por primera vez, deberás crear un grupo de seguridad y agregar una nueva regla de grupo de seguridad para cada puerto en la tabla de abajo. Para más información, vea la guía de AWS "[Uso de grupos de seguridad](http://docs.aws.amazon.com/cli/latest/userguide/cli-ec2-sg.html)".

1. Crea un nuevo grupo de seguridad utilizando la CLI de AWS. Para más información, vea "[create-security-group](http://docs.aws.amazon.com/cli/latest/reference/ec2/create-security-group.html)" en la documentación de AWS.
  ```shell
  $ aws ec2 create-security-group --group-name <em>SECURITY_GROUP_NAME</em> --description "<em>SECURITY GROUP DESCRIPTION</em>"
  ```

2. Anote el id. del grupo de seguridad (`sg-xxxxxxxx`) recién creado.

3. Crea una regla de grupo de seguridad para cada puerto en la tabla de abajo. Para más información, vea "[authorize-security-group-ingress](http://docs.aws.amazon.com/cli/latest/reference/ec2/authorize-security-group-ingress.html)" en la documentación de AWS.
  ```shell
  $ aws ec2 authorize-security-group-ingress --group-id <em>SECURITY_GROUP_ID</em> --protocol <em>PROTOCOL</em> --port <em>PORT_NUMBER</em> --cidr <em>SOURCE IP RANGE</em>
  ```
  Esta tabla identifica para qué se utiliza cada puerto.

  {% data reusables.enterprise_installation.necessary_ports %}

## Crear la instancia de {% data variables.product.prodname_ghe_server %}

Para crear la instancia, deberás lanzar una instancia de EC2 con tu AMI {% data variables.product.prodname_ghe_server %} y adjuntarle volumen de almacenamiento adicional para los datos de tu instancia. Para más información, vea "[Consideraciones de hardware](#hardware-considerations)".

{% note %}

**Nota:** Puede cifrar el disco de datos para obtener un nivel adicional de seguridad y asegurarse de que los datos que escriba en la instancia están protegidos. Hay un leve impacto de desempeño cuando usas discos encriptados. Si decide cifrar el volumen, se recomienda encarecidamente hacerlo **antes** de iniciar la instancia por primera vez.
Para más información, vea la [guía de Amazon sobre cifrado EBS](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html).

{% endnote %}

{% warning %}

**Advertencia:** Si decide permitir el cifrado después de haber configurado la instancia, tendrá que migrar los datos al volumen cifrado, lo que generará cierto tiempo de inactividad para los usuarios.

{% endwarning %}

### Lanzar una instancia de EC2

En la CLI de AWS, inicia una instancia de EC2 utilizando tu AMI y el grupo de seguridad que has creado. Adjunta un nuevo dispositivo de bloque para utilizarlo como volumen de almacenamiento para tus datos de la instancia y configura el tamaño de acuerdo con la cantidad de licencias de usuario que tengas. Para más información, vea "[run-instances](http://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html)" en la documentación de AWS.

```shell
aws ec2 run-instances \
  --security-group-ids <em>SECURITY_GROUP_ID</em> \
  --instance-type <em>INSTANCE_TYPE</em> \
  --image-id <em>AMI_ID</em> \
  --block-device-mappings '[{"DeviceName":"/dev/xvdf","Ebs":{"VolumeSize":<em>SIZE</em>,"VolumeType":"<em>TYPE</em>"}}]' \
  --region <em>REGION</em> \
  --ebs-optimized
```

### Asignar una IP elástica y asociarla con la instancia

Si esta es una instancia de producción, recomendamos firmemente asignar una IP elástica (EIP) y asociarla con la instancia antes de continuar con la configuración del {% data variables.product.prodname_ghe_server %}. De lo contrario, la dirección IP pública de la instancia no se conservará después de que se reinicie la instancia. Para más información, vea "[Asignación de una dirección IP elástica](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-allocating)" y "[Asociación de una dirección IP elástica con una instancia en ejecución](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-associating)" en la documentación de Amazon.  

Tanto en la instancia principal y en la de réplica deberían asignarse EIP separadas en las configuraciones de alta disponibilidad de producción. Para más información, vea "[Configuración de {% data variables.product.prodname_ghe_server %} para alta disponibilidad](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)".

## Configurar la instancia de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para más información, vea "[Configuración del dispositivo {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)".
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Información adicional

- "[Información general del sistema](/enterprise/admin/guides/installation/system-overview)"{% ifversion ghes %}
- "[Acerca de las actualizaciones a nuevas versiones](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
