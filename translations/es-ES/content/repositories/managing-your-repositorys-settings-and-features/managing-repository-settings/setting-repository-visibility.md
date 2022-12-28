---
title: Configurar la visibilidad de un repositorio
intro: Puedes elegir quién puede ver tu repositorio.
redirect_from:
  - /articles/making-a-private-repository-public
  - /articles/making-a-public-repository-private
  - /articles/converting-a-public-repo-to-a-private-repo
  - /articles/setting-repository-visibility
  - /github/administering-a-repository/setting-repository-visibility
  - /github/administering-a-repository/managing-repository-settings/setting-repository-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Repository visibility
ms.openlocfilehash: 2ccdafed8e9efe2bf352033d8fa632147f6bb32b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332028'
---
## Acerca de los cambios a la visibilidad de un repositorio

Los propietarios de las organizaciones pueden restringir la capacidad de cambiar la visibilidad de un repositorio únicamente para otros propietarios de organizaciones. Para obtener más información, consulta "[Restricción de los cambios de visibilidad del repositorio en la organización](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)".

{% ifversion ghec %}

Los miembros de una {% data variables.product.prodname_emu_enterprise %} solo pueden configurar la visibilidad de los repositorios que pertenezcan a su cuenta personal como privados y los repositorios de las organizaciones de su empresa solo pueden ser privados o internos. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".

{% endif %}

Te recomendamos revisar las siguientes consideraciones antes de que cambies la visibilidad de un repositorio.

{% ifversion ghes or ghae %}

{% warning %}

**Advertencia:** Los cambios en la visbilidad de un repositorio grande o una red de repositorios podrían afectar a la integridad de los datos. Los cambios en la visibilidad también pueden tener efectos accidentales en las bifurcaciones. {% data variables.product.company_short %} recomienda lo siguiente antes de que cambies la visibilidad de una red de un repositorio.

- Espera a un periodo de actividad reducida en {% data variables.product.product_location %}.

- Contacta con el {% ifversion ghes %}administrador del sitio{% elsif ghae %}propietario de la empresa{% endif %} antes de continuar. El {% ifversion ghes %}administrador del sitio{% elsif ghae %}propietario de la empresa{% endif %} pueden contactar con {% data variables.contact.contact_ent_support %} para obtener asistencia adicional.

{% endwarning %}

{% endif %}

### Convertir un repositorio en privado
{% ifversion fpt or ghes or ghec %}
* {% data variables.product.product_name %} desasociará las bifurcaciones públicas del repositorio público y las colocará en una red nueva. Las bifurcaciones públicas no se convierten en privadas.{% endif %} {%- ifversion ghes or ghec or ghae %}
* Si cambias la visibilidad de un repositorio de interna a privada, {% data variables.product.prodname_dotcom %} eliminará las bifurcaciones que pertenezcan a cualquiera de los usuarios sin acceso al repositorio que recientemente se hizo privado. {% ifversion fpt or ghes or ghec %}La visibilidad de las bifurcaciones también cambiará a privada.{% elsif ghae %}Si el repositorio interno tiene bifurcaciones, la visibilidad de las bifurcaciones ya es privada.{% endif %} Para obtener más información, consulta "[¿Qué ocurre con las bifurcaciones cuando un repositorio se elimina o cambia su visibilidad?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)".
{%- endif %}

{%- ifversion fpt %}
* Si utilizas {% data variables.product.prodname_free_user %} para cuentas personales o de organización, algunas características no estarán disponibles en el repositorio después de que cambies la visibilidad a privada. Cualquier sitio {% data variables.product.prodname_pages %} publicado se despublicará de forma automática. Si agregaste un dominio personalizado al sitio {% data variables.product.prodname_pages %}, deberías eliminar o actualizar tus registros de DNS antes de convertir el repositorio en privado, para evitar el riesgo de una adquisición de dominio. Para obtener más información, consulta "[Productos de {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products)" y "[Administración de un dominio personalizado para tu sitio de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".
{%- endif %}

{%- ifversion fpt or ghec %}
* {% data variables.product.prodname_dotcom %} ya no incluirá el repositorio en el {% data variables.product.prodname_archive %}. Para obtener más información, consulta "[Acerca del archivado de contenido y datos en {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)".
* Las características de la {% data variables.product.prodname_GH_advanced_security %}, tales como el {% data variables.product.prodname_code_scanning %}, dejarán de funcionar{% ifversion ghec %} a menos de que el repositorio le pertenezca a una organización que se aparte de una empresa con una licencia para la {% data variables.product.prodname_advanced_security %} y tenga suficientes plazas libres{% endif %}. {% data reusables.advanced-security.more-info-ghas %} {%- endif %}

{%- ifversion ghes %}
* El acceso anónimo de Git ya no está disponible. Para más información, vea "[Habilitación del acceso de lectura anónimo de Git para un repositorio](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository)".
{%- endif %}

{% ifversion ghes or ghec or ghae %}

### Convertir un repositorio en interno

* Cualquier bifurcación del repositorio se mantendrá en la red del mismo y {% data variables.product.product_name %} mantendrá la relación entre el repositorio raíz y la bifurcación. Para obtener más información, consulta "[¿Qué ocurre con las bifurcaciones cuando un repositorio se elimina o cambia su visibilidad?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)".

{% endif %}

{% ifversion fpt or ghes or ghec %}

### Convertir un repositorio en público

* {% data variables.product.product_name %} se deslindará de las bifurcaciones privadas y lasconvertirá en repositorios privados independientes. Para obtener más información, consulta "[¿Qué ocurre con las bifurcaciones cuando un repositorio se elimina o cambia su visibilidad?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)".{% ifversion fpt or ghec %}
* Si vas a convertir tu repositorio privado en uno público como parte de un movimiento hacia la creación de un proyecto de código abierto, consulta las [Guías de código abierto](http://opensource.guide) para obtener sugerencias y directrices útiles. También puedes realizar un curso gratuito sobre la administración de un proyecto de código abierto con [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}). Una vez que tu repositorio es público, también puedes ver el perfil de la comunidad de tu repositorio para ver si tu proyecto cumple con las mejoras prácticas para los colaboradores de apoyo. Para obtener más información, consulta "[Visualización del perfil de la comunidad](/articles/viewing-your-community-profile)".
* El repositorio obtendrá acceso automático a las características de la {% data variables.product.prodname_GH_advanced_security %}.

Para obtener información sobre cómo mejorar la seguridad del repositorio, consulta "[Protección del repositorio](/code-security/getting-started/securing-your-repository)". {% endif %}

{% endif %}

## Cambiar la visibilidad de un repositorio

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. En "Zona de peligro", a la derecha de "Cambiar la visibilidad del repositorio", haz clic en **Cambiar visibilidad**.
   ![Botón Cambiar visibilidad](/assets/images/help/repository/repo-change-vis.png)
4. Selecciona una visibilidad.
{% ifversion fpt or ghec %} ![Cuadro de diálogo de las opciones de visibilidad del repositorio](/assets/images/help/repository/repo-change-select.png){% else %} ![Cuadro de diálogo de las opciones de visibilidad del repositorio](/assets/images/enterprise/repos/repo-change-select.png){% endif %}
5. Para verificar que estás cambiando la visibilidad del repositorio correcto, teclea el nombre del repositorio para el cual quieres cambiar la visibilidad.
6. Haz clic en **Lo entiendo, cambia la visibilidad del repositorio**.
{% ifversion fpt or ghec %} ![Botón para confirmar el cambio de visibilidad del repositorio](/assets/images/help/repository/repo-change-confirm.png){% else %} ![Botón para confirmar el cambio de visibilidad del repositorio](/assets/images/enterprise/repos/repo-change-confirm.png){% endif %}


## Información adicional
- "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)"
