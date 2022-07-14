---
title: Managing GPG verification for GitHub Codespaces
intro: 'Puedes permitir que {% data variables.product.company_short %} utilice automáticamente GPG para firmar las confirmaciones que haces en tus codespaces para que otras personas puedan tener la confianza de que los cambios vienen de una fuente confiable.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
redirect_from:
  - /github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces
  - /codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces
  - /codespaces/managing-your-codespaces/managing-gpg-verification-for-codespaces
shortTitle: Verificación GPG
---

 

Después de que habilitas la verificación de GPG, {% data variables.product.company_short %} firmará automáticamente las confirmaciones que hagas en los {% data variables.product.prodname_github_codespaces %} y éstas tendrán un estado de verificado en {% data variables.product.product_name %}. Predeterminadamente, la verificación GPG se encuentra inhabilitada para los codespaces que creas. Puedes elegir permitir la verificación de GPG para todos los repositorios o para repositorios específicos. Habilita la verificación GPG únicamente para los repositorios en los cuales confías. Para obtener más información acerca de las confirmaciones firmadas por {% data variables.product.product_name %}, consulta la sección "[Acerca de la verificación de firmas de las confirmaciones](/github/authenticating-to-github/about-commit-signature-verification)".

Una vez que habilitas la verificación de GPG, esta tomará efecto inmediatamente en todos tus codespaces.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Debajo de "verificación GPG", selecciona la configuración que quieras para la verificación de GPG. ![Botones radiales para administrar la verificación GPG](/assets/images/help/settings/codespaces-gpg-verification-radio-buttons.png)
1. Si eliges "Repositorios seleccionados"; selecciona el menú desplegable y luego da clic en el repositorio para el cual quieras habilitar la verificación de GPG. Repite esto para todos los repositorios en los cuales quieras habilitar la verificación GPG. ![Menú desplegable de "Repositorios seleccionados"](/assets/images/help/settings/codespaces-gpg-verification-repository-drop-down.png)


{% note %}

**Nota:** Una vez que habilitas la verificación de GPG para {% data variables.product.prodname_codespaces %}, también debes anexar `-S` a cada confirmación para que se firme. Para hacerlo en {% data variables.product.prodname_vscode %}, asegúrate de que esté habilitada la opción "Git: Habilitar la Firma de Confirmante" desde los ajustes.

{% endnote %}
