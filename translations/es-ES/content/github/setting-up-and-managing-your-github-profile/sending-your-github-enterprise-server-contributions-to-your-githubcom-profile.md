---
title: Enviar tus contribuciones de GitHub Enterprise Server a tu perfil de GitHub.com
intro: 'Puedes resaltar tu trabajo en {% data variables.product.prodname_ghe_server %} al enviar los recuentos de contribuciones a tu perfil {% data variables.product.prodname_dotcom_the_website %}.'
redirect_from:
  - /articles/sending-your-github-enterprise-contributions-to-your-github-com-profile/
  - /articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile
  - /articles/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - perfiles
---

{% note %}

**Notas:**
- La conexión entre tus cuentas está regulada por la <a href="/articles/github-privacy-statement/" class="dotcom-only">Declaración de privacidad de GitHub</a>, y los usuarios que habilitan la conexión aceptan los Términos de servicio de GitHub<a href="/articles/github-terms-of-service/" class="dotcom-only"></a>.

- Antes de que puedas conectar tu perfil de {% data variables.product.prodname_ghe_server %} a tu perfil de {% data variables.product.prodname_dotcom_the_website %}, un administrador de sitio debe habilitar {% data variables.product.prodname_github_connect %} y permitir que se compartan contribuciones entre los entornos. Para obtener más información, contacta a tu administrador del sitio {% data variables.product.prodname_ghe_server %}.

{% endnote %}

Tu perfil de {% data variables.product.prodname_dotcom_the_website %} muestra los recuentos de contribuciones de {% data variables.product.prodname_ghe_server %} durante los últimos 90 días. Los recuentos de contribuciones de {% data reusables.github-connect.sync-frequency %} de {% data variables.product.prodname_ghe_server %} se consideran contribuciones privadas. Los detalles de confirmación mostrarán únicamente los recuentos de contribuciones y que estas contribuciones se realizaron en {% data variables.product.prodname_ghe_server %}.

Si los usuarios finales de {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_dotcom_the_website %} desean que sus recuentos de contribuciones privadas sean públicas, pueden divulgar sus recuentos de contribuciones privadas. Para obtener más información, consulta "[Publicar u ocultar tus contribuciones privadas en tu perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile/)."

Para obtener más información acerca de cómo se calculan las contribuciones, consulta "[Administrar gráficos de contribuciones en tu perfil](/articles/managing-contribution-graphs-on-your-profile/)."

{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.github-connect.access-profile-settings %}
{% data reusables.github-connect.github-connect-tab-user-settings %}
{% data reusables.github-connect.connect-dotcom-and-enterprise %}
{% data reusables.github-connect.authorize-connection %}
6. Debajo de "Contributions" (Contribuciones), selecciona **Send my contribution counts to {% data variables.product.prodname_dotcom_the_website %}** (Enviar mi recuento de contribuciones a {% data variables.product.prodname_dotcom_the_website %}</strong>), luego haz clic en **Update contributions** (Actualizar contribuciones). ![Casilla para enviar contribuciones y botón para actualizar contribuciones](/assets/images/help/settings/send-and-update-contributions.png)
