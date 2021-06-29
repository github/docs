1. En las bifurcaciones que pertenecen a un usuario, si no quieres permitir que las personas con acceso de escritura en el repositorio ascendente realicen cambios en tu solicitud de extracción, deselecciona **Permitir ediciones de los mantenedores**.

    {% warning %}

    **Advertencia:** Si tu bifuración contiene flujos de trabajo de {% data variables.product.prodname_actions %}, la opción es **Permitir que los mantenedores hagan ediciones y tengan acceso a los secretos**. El permitir las ediciones en la rama de una bifurcación que contiene flujos de trabajo de {% data variables.product.prodname_actions %} también permite que un mantenedor edite los flujos de trabajo del repositorio, lo cual podría revelar los valores de los secretos y otorgar acceso a otras ramas potencialmente.

    {% endwarning %}
