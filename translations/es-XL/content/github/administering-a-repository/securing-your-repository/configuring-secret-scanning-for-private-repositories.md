---
title: Configurar el escaneo de secretos para repositorios privados
intro: 'Puedes configurar la manera en que {% data variables.product.product_name %} escanea tus repositorios privados en busca de secretos.'
permissions: 'Las personas con permisos administrativos en un repositorio privado pueden habilitar {% data variables.product.prodname_secret_scanning %} para el repositorio.'
versions:
  free-pro-team: '*'
redirect_from:
  - /github/administering-a-repository/configuring-secret-scanning-for-private-repositories
---
{% data reusables.secret-scanning.beta %}

### Habilitar {% data variables.product.prodname_secret_scanning %} para repositorios privados

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. A la derecha de "Escaneo de secretos", da clic en **Habilitar**. ![Habilitar el escaneo de secretos para tu repositorio](/assets/images/help/repository/enable-secret-scanning.png)

### Excluir alertas de {% data variables.product.prodname_secret_scanning %} en repositorios privados

Puedes utilizar un archivo *secret_scanning.yml* para excluir los directorios de {% data variables.product.prodname_secret_scanning %}. Por ejemplo, puedes excluir directorios que contengan pruebas o contenido generado aleatoriamente.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. En el campo de nombre del archivo, teclea *.github/secret_scanning.yml*.
4. Debajo de **Editar nuevo archivo**, teclea `paths-ignore:` seguido por las rutas que quieras excluir de {% data variables.product.prodname_secret_scanning %}.
    ``` yaml
    paths-ignore:
      - "foo/bar/*.js"
    ```

    Puedes utilizar caracteres especiales, tales como `*` para filtrar las rutas. Para obtener más información acerca de filtrar las rutas, consulta la sección "[Sintaxis de flujo de trabajo para GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

    {% note %}

    **Notas:**
    - Si hay más de 1,000 entradas en `paths-ignore`, {% data variables.product.prodname_secret_scanning %} solo excluirá de los escaneos a los primeros 1,000 directorios.
    - Si *secret_scanning.yml* es mayor a 1 MB, {% data variables.product.prodname_secret_scanning %} ignorará todo el archivo.

    {% endnote %}

También puedes ignorar alertas individuales de {% data variables.product.prodname_secret_scanning %}. Para obtener más información, consulta la sección "[Administrar las alertas de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-alerts)".

### Leer más

- "[Administrar el {% data variables.product.prodname_secret_scanning %} para tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization)"
