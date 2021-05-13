---
title: Crear un pie de página o barra lateral para tu wiki
intro: Puedes agregar una barra lateral o un pie de página personalizados a tu wiki para dar a los lectores más información contextual.
redirect_from:
  - /articles/creating-a-footer/
  - /articles/creating-a-sidebar/
  - /articles/creating-a-footer-or-sidebar-for-your-wiki
product: '{% data reusables.gated-features.wikis %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - comunidad
---

### Crear una carpeta

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. En la parte inferior de la página, haz clic en **Agregar un pie de página**. ![Sección para agregar el pie de página a la wiki](/assets/images/help/wiki/wiki_add_footer.png)
4. Usa el editor de texto para escribir el contenido que deseas que tenga tu pie de página. ![Wiki WYSIWYG](/assets/images/help/wiki/wiki-footer.png)
5. Ingresa un mensaje de confirmación que describa el pie de página que agregaste. ![Mensaje de confirmación de la wiki](/assets/images/help/wiki/wiki_commit_message.png)
6. Para confirmar tus cambios en la wiki, haz clic en **Guardar página**.

### Crear una barra lateral

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. Haz clic en **Agregar una barra lateral personalizada**. ![Sección para agregar la barra lateral a la wiki](/assets/images/help/wiki/wiki_add_sidebar.png)
4. Usa el editor de texto para agregar el contenido de tu página. ![Wiki WYSIWYG](/assets/images/help/wiki/wiki-sidebar.png)
5. Ingresa un mensaje de confirmación que describa la barra lateral que agregaste. ![Mensaje de confirmación de la wiki](/assets/images/help/wiki/wiki_commit_message.png)
6. Para confirmar tus cambios en la wiki, haz clic en **Guardar página**.

### Crear un pie de página o barra lateral de manera local

Si creas un archivo con el nombre `_Footer.<extension>` or `_Sidebar.<extension>`, los usaremos para completar el pie de página y la barra lateral de tu wiki, respectivamente. Al igual que cualquier otra página wiki, la extensión que elijas para estos archivos determina cómo los representaremos.
