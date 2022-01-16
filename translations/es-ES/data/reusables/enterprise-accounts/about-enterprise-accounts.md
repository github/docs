## Acerca de las cuentas empresariales en {% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %}

{% ifversion fpt %}

Tu cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %} te permite administrar organizaciones múltiples. Tu cuenta de empresa debe tener un controlador, como una organización o cuenta personal en {% data variables.product.prodname_dotcom %}.

{% elsif ghes or ghae %}

La cuenta empresarial en {% ifversion ghes %}{% data variables.product.product_location_enterprise %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} te permite administrar las organizaciones{% ifversion ghes %} en{% elsif ghae %} que pertenecen a{% endif %} tu {% ifversion ghes %}instancia de {% data variables.product.prodname_ghe_server %}{% elsif ghae %}empresa{% endif %}.

{% endif %}

Las organizaciones son cuentas compartidas en donde los miembros de las empresas pueden colaborar a través de muchos proyectos al mismo tiempo. Los propietarios de la organización pueden administrar el acceso a los datos y proyectos de esta con seguridad y características administrativas sofisticadas. Para obtener más información, consulta la sección {% ifversion fpt %}"[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations)".{% elsif ghes or ghae %}"[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations)" y "[Administrar usuarios, organizaciones y repositorios](/admin/user-management)".{% endif %}

{% ifversion fpt %}

Los propietarios de las empresas pueden crear organizaciones y enlazarlas a la empresa. Como alternativa, puedes invitar a una organización existente para que se una a tu empresa. Después de que agregues organizaciones a tu cuenta empresarial, puedes administrar y requerir políticas para dichas organizaciones. Las opciones de cumplimiento específicas varían según el parámetro, generalmente, puedes elegir implementar una política única para cada organización en tu cuenta de empresa o puedes permitirle a los propietarios configurar la política en el nivel de organización. Para obtener más información, consulta la sección "[Configurar las políticas para las organizaciones de tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account)".

{% elsif ghes or ghae %}

Para obtener más información sobre la administración de políticas para tu cuenta empresarial, consulta la sección "[Configurar las políticas de tu empresa](/admin/policies)".

{% endif %}

## Acerca de la administración de tu cuenta empresarial

{% ifversion ghes or ghae %}

Desde tu cuenta empresarial en {% ifversion ghae %}{% data variables.product.product_name %}{% elsif ghes %}una instancia de {% data variables.product.prodname_ghe_server %}{% endif %}, los administradores pueden ver la membrecía empresrial y administrar lo siguiente para la instancia de {% ifversion ghes %}{% data variables.product.prodname_ghe_server %}{% elsif ghae %}empresa en {% data variables.product.prodname_ghe_managed %}{% endif %}.

{% ifversion ghes %}
- Uso de licencia{% endif %}
- Seguridad ({% ifversion ghae %}inicio de sesión único, listas de IP permitidas, {% endif %}autoridades de certificados SSH, autenticación bifactorial)
- Políticas empresariales para las organizaciones que pertenezcan a la cuenta empresarial

{% endif %}

{% ifversion ghes %}

### Acerca de la administración de tu cuenta empresarial en {% data variables.product.prodname_ghe_cloud %}

{% endif %}

{% ifversion fpt or ghes %}Cuando pruebas o compras {% data variables.product.prodname_enterprise %}, también {% ifversion ghes %} puedes{% endif %} crear una cuenta empresarial para {% data variables.product.prodname_ghe_cloud %} en {% data variables.product.prodname_dotcom_the_website %}. Los administradores de la cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %} pueden ver la membrecía y administrar lo siguiente para la cuenta empresarial{% ifversion ghes %} en {% data variables.product.prodname_dotcom_the_website %}{% endif %}.

- Facturación y uso (Servicios en {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_GH_advanced_security %}, licencias de usuario)
- Seguridad (Inicio de sesión único, listas de IP permitidas, autoridades de certificados SSH, autenticación bifactorial)
- Políticas empresariales para las organizaciones que pertenecen a la cuenta empresarial

Si utilizas tanto {% data variables.product.prodname_ghe_cloud %} como {% data variables.product.prodname_ghe_server %}, también puedes administrar lo siguiente para {% data variables.product.prodname_ghe_server %} desde tu cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %}.

- Facturación y uso de las instancias de {% data variables.product.prodname_ghe_server %}
- Solicitudes y paquetes de soporte compartidos con {% data variables.contact.enterprise_support %}

También puedes conectar la cuenta empresarial en {% data variables.product.product_location_enterprise %} a tu cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %} para ver los detalles de uso de licencia para tu suscripción de {% data variables.product.prodname_enterprise %} desde {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta la sección {% ifversion fpt %}"[Sincronizar el uso de licencia entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)" en la documentación de {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Sincronizar el uso de licencias entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".{% endif %}

Para obtener más información acerca de las diferencias entre {% data variables.product.prodname_ghe_cloud %} y {% data variables.product.prodname_ghe_server %}, consulta la sección "[ productos de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/githubs-products)". {% data reusables.enterprise-accounts.to-upgrade-or-get-started %}

{% endif %}

{% ifversion fpt %}

## Acerca de {% data variables.product.prodname_emus %}

{% data reusables.enterprise-accounts.emu-short-summary %}

{% endif %}

## Acerca de la facturación para tu cuenta empresarial

La factura de tu cuenta empresarial incluye el costo mensual de cada miembro de ella. La factura incluye {% ifversion fpt %}cualquier tipo de licencia de pago en organizaciones fuera de tu cuenta empresarial, suscripciones a las apps en {% data variables.product.prodname_marketplace %}, {% endif %}{% ifversion fpt or ghae %}los servicios de pago adicionales para tu empresa{% ifversion fpt %} como paquetes de datos para {% data variables.large_files.product_name_long %},{% endif %} y{% endif %} el uso de {% data variables.product.prodname_GH_advanced_security %}.

{% ifversion fpt %}

Para obtener más información sobre la facturación de tu suscripción de {% data variables.product.prodname_ghe_cloud %}, consulta las secciones "[Ver la suscripción y el uso de tu cuenta empresarial](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" y "[Acerca de la facturación de tu empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".

{% elsif ghes %}

{% data reusables.enterprise-accounts.enterprise-accounts-billing %}

Para obtener más información sobre la facturación para {% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %}, consulta la sección "[Acerca de la facturación para tu empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".

{% endif %}

{% ifversion fpt or ghes %}

{% ifversion fpt %}

{% data variables.product.prodname_enterprise %} ofrece opciones de despliegue. Adicionalmente a las {% data variables.product.prodname_ghe_cloud %}, puedes utilizar {% data variables.product.prodname_ghe_server %} para hospedar trabajo de desarrollo para tu empresa en tu centro de datos o proveedor compatible en la nube. {% endif %}Los propietarios empresariales en {% data variables.product.prodname_dotcom_the_website %} pueden utilizar una cuenta empresarial para administrar el pago y el licenciamiento de las instancias de {% data variables.product.prodname_ghe_server %}. Para obtener más información, consulta las secciones "[ productos de {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products#github-enterprise)" y "[Administrar tu licencia para {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise)".

{% endif %}

## Leer más

- "[Cuentas empresariales](/graphql/guides/managing-enterprise-accounts)" en la documentación de la API de GraphQL
