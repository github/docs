---
title: Deleting your personal account
intro: 'Puedes borrar tu cuenta personal de {% data variables.product.product_location %} en cualquier momento.'
redirect_from:
  - /articles/deleting-a-user-account
  - /articles/deleting-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/deleting-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/deleting-your-personal-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Delete your account
---

## About deletion of your personal account

El borrar tu cuenta personal elimina todos los repositorios, bifurcaciones de repositorios privados, wikis, propuestas, solicitudes de cambios y páginas que pertenecen a tu cuenta. {% ifversion fpt or ghec %}Issues and pull requests you've created and comments you've made in repositories owned by other users will not be deleted. Your resources and comments will become associated with the [ghost user](https://github.com/ghost).{% else %}Issues and pull requests you've created and comments you've made in repositories owned by other users will not be deleted.{% endif %}

{% ifversion ghec %}

{% note %}

**Note**: If your enterprise manages your account and you sign into {% data variables.product.product_location %} through your company's identity provider (IdP), you cannot delete your account. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)".

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}When you delete your account we stop billing you. La dirección asociada con la cuenta se hace disponible para utilizarse con una cuenta diferente en {% data variables.product.product_location %}. Después de 90 días, el nombre de cuenta también pone disponible para que cualquiera con una cuenta nueva lo utilice. {% endif %}

If you're the only owner of an organization, you must transfer ownership to another person or delete the organization before you can delete your personal account. Si existen otros propietarios en la organización, debes eliminarte de ella antes de que puedas borrar tu cuenta personal.

Para obtener más información, consulta los siguientes artículos.

- "[Transferir la propiedad de la organización](/articles/transferring-organization-ownership)"
- "[Eliminar una cuenta de la organización](/articles/deleting-an-organization-account)"
- "[Eliminarte de una organización](/articles/removing-yourself-from-an-organization/)"

## Copias de seguridad de los datos de tu cuenta

Antes de que borres tu cuenta personal, haz una copia de todos los repositorios, bifurcaciones privadas, wikis, propuestas y solicitudes de cambios que le pertenezcan a tu cuenta. For more information, see "[Backing up a repository](/repositories/archiving-a-github-repository/backing-up-a-repository)."

{% warning %}

**Warning:** Once your personal account has been deleted, {% ifversion fpt or ghec %}{% data variables.product.company_short %}{% elsif ghes or ghae %}an enterprise owner{% endif %} cannot restore your content.

{% endwarning %}

## Borrar tu cuenta personal

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.account_settings %}
3. En la parte inferior de la página de configuración de la cuenta, en "Eliminar cuenta", haz clic en **Eliminar tu cuenta**. Antes de que puedas borrar tu cuenta personal:
    - Si eres el único propietario de la organización, debes transferir la propiedad a otra persona o eliminar tu organización.
    - Si hay otros propietarios de la organización dentro de la organización, debes eliminarte de la organización. ![Botón Eliminación de cuenta](/assets/images/help/settings/settings-account-delete.png)
4. En el cuadro de diálogo "Make sure you want to do this" (Asegúrate de que quieres hacer esto), realiza los siguientes pasos para confirmar que comprendes lo que sucede cuando se elimina tu cuenta: ![Diálogo de confirmación para eliminar cuenta](/assets/images/help/settings/settings-account-deleteconfirm.png)
  {% ifversion fpt or ghec %}- Recuerda que todos los repositorios, bifurcaciones de repositorios privados, wikis, propuestas, solicitudes de cambios y sitios de {% data variables.product.prodname_pages %} que le pertenecen a tu cuenta se borrarán y tu facturación terminará de inmediato y tu nombre de usuario se pondrá disponible para que cualquiera lo utilice en {% data variables.product.product_name %} después de 90 días.
  {% else %}-Recuerda que se eliminarán todos los repositorios, bifurcaciones de repositorios privados, wikis, propuestas, solicitudes de extracción y páginas que sean propiedad de tu cuenta, y tu nombre de usuario pasará a estar disponible para que cualquier otra persona lo use en {% data variables.product.product_name %}.
  {% endif %}- En el primer campo, escribe tu nombre de usuario de {% data variables.product.product_name %} o tu correo electrónico.
    - En el segundo campo, escribe la frase que se indica.
