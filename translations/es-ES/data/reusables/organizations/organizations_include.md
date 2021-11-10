Las organizaciones incluyen:
- Membresía ilimitada con una variedad de roles que permiten [diferentes niveles de acceso a la organización y sus datos](/articles/permission-levels-for-an-organization)
- La capacidad de otorgarles a los miembros [un rango de permisos de acceso a los repositorios de la organización](/articles/repository-permission-levels-for-an-organization)
- [Los elementos anidados que reflejan la estructura de tu grupo o compañía](/articles/about-teams) con permisos de acceso y menciones en cascada{% ifversion not ghae %}
- La posibilidad de que los propietarios de la organización vean el [estado de autenticación de dos factores(2FA)](/articles/about-two-factor-authentication) de los miembros
- La opción de [requerir que todos los miembros de la organización utilicen autenticación bifactorial](/articles/requiring-two-factor-authentication-in-your-organization){% endif %}

{% ifversion fpt or ghec %}
Puedes utilizar las organizaciones de forma gratuita con
{% data variables.product.prodname_free_team %}, el cual incluye colaboradores ilimitados en repositorios públicos ilimitados con características completas y repositorios privados ilimitados con características limitadas.

Para encontrar características adicionales, incluyendo la autenticación y administración de usuarios sofisticada y una cobertura de soporte mejorada, puedes mejorar a {% data variables.product.prodname_team %} o a {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %}

Si utilizas {% data variables.product.prodname_ghe_cloud %}, tendrás la opción de comprar una licencia para {% data variables.product.prodname_GH_advanced_security %} y utilizar las características en los repositorios privados. {% data reusables.advanced-security.more-info-ghas %}

{% ifversion fpt %}
{% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}
{% endif %}
