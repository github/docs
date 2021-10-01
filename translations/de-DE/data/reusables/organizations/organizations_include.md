Organisationen beinhalten:
- Unbegrenzte Mitgliedschaft mit einer Vielzahl von Rollen, die [unterschiedliche Zugriffsebenen auf die Organisation und auf deren Daten](/articles/permission-levels-for-an-organization) gewähren
- Die Möglichkeit, den Mitgliedern [eine Reihe von Zugriffsberechtigungen auf die Repositorys Ihrer Organisation](/articles/repository-permission-levels-for-an-organization) zu erteilen
- [Nested teams that reflect your company or group's structure](/articles/about-teams) with cascading access permissions and mentions{% ifversion not ghae %}
- Die Möglichkeit für Organisationsinhaber, den [Zwei-Faktor-Authentifizierungsstatus (2FA)](/articles/about-two-factor-authentication) der Mitglieder anzuzeigen
- The option to [require all organization members to use two-factor authentication](/articles/requiring-two-factor-authentication-in-your-organization){% endif %}

{% ifversion fpt %}
You can use organizations for free, with
{% data variables.product.prodname_free_team %}, which includes unlimited collaborators on unlimited public repositories with full features, and unlimited private repositories with limited features.

For additional features, including sophisticated user authentication and management, and improved support coverage, you can upgrade to {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %}

If you use {% data variables.product.prodname_ghe_cloud %}, you have the option to purchase a license for {% data variables.product.prodname_GH_advanced_security %} and use the features on private repositories. {% data reusables.advanced-security.more-info-ghas %}

{% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}
