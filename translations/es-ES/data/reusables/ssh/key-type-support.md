{% ifversion fpt or ghec %}
{% note %}

**Nota:** {% data variables.product.company_short %} mejorò la seguridad al dejar los tipos de llave inseguros el 15 de marzo de 2022.

Desde esta fecha, las llaves DSA (`ssh-dss`) ya no son compatibles. No puedes agregar claves DSA nuevas a tu cuenta personal de {% data variables.product.product_location %}.

Las llaves RSA (`ssh-rsa`) con un `valid_after` anterior al 2 de noviembre de 2021 podrán continuar utilizando cualquier algoritmo de firma. Las llaves RSA que se generaron después de esta fecha deberán utilizar un algoritmo de firma de tipo SHA-2. Algunos clientes más angituos podrían necesitar actualizarse para poder utilizar firmas de tipo SHA-2.

{% endnote %}

{% elsif ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

{% note %}

**Nota**: Predeterminadamente con {% data variables.product.product_name %} 3.6 y posterior, desde la fecha de corte a media noche en tiempo UTC del 1 de agosto de 2022, las conexiones SSH que satisfacen **ambas** de las siguientes condiciones, fallarán.

<br/>

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

{% data variables.product.product_name %} 3.6 y posterior no es compatible con conexiones SSH que utilicen cifrados DSA, HMAC-SHA-1 o CBC. Las llaves SSH de RSA cargadas antes de la fecha de corte pueden seguir autenticándose utilizando la función de hash SHA-1 siempre y cuando la llave siga siendo válida. Para obtener más información sobre cómo encontrar la versión de {% data variables.product.product_name %} que utilizas, consulta la sección "[Acerca de las versiones de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)".

Tu administrador de sitio puede ajustar la fecha de corte para las conexiones que utilizan RSA-SHA-1 y podría bloquear todas las conexiones que así lo hagan. Para obtener más información, contacta a tu administrador de sitio o consulta "[Configurar las conexiones SSH para tu instancia](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance)".

{% endnote %}

{% endif %}