---
title: Configurar las reglas de protección de etiqueta
shortTitle: Reglas de protección de etiquetas
intro: Puedes configurar las reglas de protección de etiqueta de tu repositorio para prevenir que los contribuyentes creen o borren etiquetas.
product: '{% data reusables.gated-features.tag-protection-rules %}'
versions:
  fpt: '*'
  ghae: issue-6337
  ghec: '*'
  ghes: '>3.4'
---

{% note %}

**Nota:** Las reglas de protección de etiqueta se encuentran actualmente en beta y están sujetas a cambios.

{% endnote %}

Cuando agregas la regla de protección de etiquetas, se protegerán todas aquellas que empaten con el patrón proporcionado. Solo los usuarios con permisos de administrador o mantenedor en el repositorio podrán crear etiquetas protegidas y solo los usuarios con permisos administrativos en el repositorio podrán borrar las etiquetas protegidas. Para obtener más información, consulta la sección "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#permissions-for-each-role)". {% data variables.product.prodname_github_apps %} requiere que el permiso de `Repository administration: write` modifique una etiqueta protegida.

{% ifversion custom-repository-roles %}
Adicionalmente, puedes crear roles personalizados de repositorio para permitir que otros grupos de usuarios creen o borren etiquetas que empatan con las reglas de protección de etiqueta. Para obtener más información, consulta la sección "[Administrar los roles personalizados de repositorio en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. En la sección de "Código y automatización" de la barra lateral, haz clic en **{% octicon "tag" aria-label="The tag icon" %} Etiquetas**.
1. Haz clic en **Regla nueva**. ![Regla nueva de protección de etiqueta](/assets/images/help/repository/new-tag-protection-rule.png)
1. Debajo de "Etiqueta un nombre de patrón", escribe el patrón de las etiquetas que quieras proteger. En este ejemplo, el teclear "\*" protege a todas las etiquetas. ![Configura un patrón de protección de etiqueta](/assets/images/help/repository/set-tag-protection-pattern.png)
1. Haz clic en **Agregar regla**. ![Agrega una regla de protección de etiqueta](/assets/images/help/repository/add-tag-protection-rule.png)
