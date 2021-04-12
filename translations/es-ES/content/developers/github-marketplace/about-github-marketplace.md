---
title: Acerca de Mercado GitHub
intro: 'Aprende más sobre {% data variables.product.prodname_marketplace %}, en donde puedes compartir tus apps y acciones públicamente con todos los usuarios de {% data variables.product.product_name %}.'
redirect_from:
  - /apps/marketplace/getting-started/
  - /marketplace/getting-started
versions:
  free-pro-team: '*'
topics:
  - marketplace
---

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) te conecta a los desarrolladores que quieren extender y mejorar sus flujos de trabajo de {% data variables.product.prodname_dotcom %}. Puedes listar herramientas gratuitas y de pago para que las utilicen los desarrolladores en {% data variables.product.prodname_marketplace %}. {% data variables.product.prodname_marketplace %} ofrece dos tipos de herramientas para los desarrolladores: {% data variables.product.prodname_actions %} y Apps, y cada herramienta requiere pasos diferentes para agregarla a {% data variables.product.prodname_marketplace %}.

### GitHub Actions

{% data reusables.actions.actions-not-verified %}

Para aprender sobre cómo publicar {% data variables.product.prodname_actions %} en {% data variables.product.prodname_marketplace %}, consulta la sección "[Publicar acciones en GitHub Marketplace](/actions/creating-actions/publishing-actions-in-github-marketplace)".

### Aplicaciones

Cualquiera puede compartir las apps con otros usuarios gratuitamente en {% data variables.product.prodname_marketplace %}, pero solo las apps que pertenezcan a las organizaciones pueden venderse.

Para publicar planes de pago para tu app y mostrar una insignia de marketplace, debes completar el proceso de verificación del publicador. Para obtener más información, consulta la sección "[Solicitar la verificación del publicador para tu organización](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)" o "[Requisitos para listar una app](/developers/github-marketplace/requirements-for-listing-an-app)".

Una vez que la organización cumpla con los requisitos, alguien con permisos de propietario en la organización puede publicar planes de pago para cualquiera de sus apps. Cada app con un plan de pago también llevará un proceso de incorporación financiera para habilitar los pagos.

Para publicar las apps con planes gratuitos, solo necesitas cumplir con los requisitos generales para listar cualquier app. Para obtener más información, consulta la sección "[Requisitos para todos los listados de GitHub Marketplace](/developers/github-marketplace/requirements-for-listing-an-app#requirements-for-all-github-marketplace-listings)".

#### ¿Eres nuevo en las apps?

Si te interesa crear una app para {% data variables.product.prodname_marketplace %} pero eres nuevo en las {% data variables.product.prodname_github_apps %} o en las {% data variables.product.prodname_oauth_app %}s, consulta la sección "[Crear {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" o "[Crear {% data variables.product.prodname_oauth_app %}s](/developers/apps/building-oauth-apps)".

#### GitHub Apps vs. Apps de Oauth

{% data reusables.marketplace.github_apps_preferred %}, aunque puedes listar tanto las Apps de OAuth como las {% data variables.product.prodname_github_app %} en {% data variables.product.prodname_marketplace %}. Para obtener más información, consulta las secciones "[Diferencias entre las {% data variables.product.prodname_github_apps %} y las {% data variables.product.prodname_oauth_app %}s](/apps/differences-between-apps/)" y "[Migrarse de las {% data variables.product.prodname_oauth_app %}s a las {% data variables.product.prodname_github_apps %}](/apps/migrating-oauth-apps-to-github-apps/)".

### Resumen de cómo publicar una app en {% data variables.product.prodname_marketplace %}

Cuando termines de crear tu app, puedes compartirla con otros usuarios si la publicas en {% data variables.product.prodname_marketplace %}. En resúmen, el proceso es:

1. Revisa tu app cuidadosamente para garantizar que se comporte en otros repositorios como se espera y que cumpla con los lineamientos de mejores prácticas. Para obtener más información, consulta las secciones "[Mejores prácticas de seguridad para las apps](/developers/github-marketplace/security-best-practices-for-apps)" y "[Requisitos para listar una app](/developers/github-marketplace/requirements-for-listing-an-app#best-practice-for-customer-experience)".

1. Agrega eventos de webhook a la app para rastrear las solicitudes de facturación de los usuarios. Para obtener más información acerca de la API de {% data variables.product.prodname_marketplace %}, los eventos de webhook y las solicitudes de facturación, consulta la sección "[Utilizar la API de {% data variables.product.prodname_marketplace %} en tu app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

1. Crea un borrador de lista de {% data variables.product.prodname_marketplace %}. Para obtener más información, consulta la sección "[Hacer un borrador de lista para tu app](/developers/github-marketplace/drafting-a-listing-for-your-app)".

1. Agrega un plan de precios. Para obtener más información, consulta la sección "[Configurar planes de precios para tu listado](/developers/github-marketplace/setting-pricing-plans-for-your-listing)".

1. Lee y acepta las condiciones del "[Acuerdo de Desarrollador de {% data variables.product.prodname_marketplace %}](/articles/github-marketplace-developer-agreement/)".

1. Emite tu listado para que se publique en {% data variables.product.prodname_marketplace %}. Para obtener más información, consulta la sección "[Emitir tu lista para su publicación](/developers/github-marketplace/submitting-your-listing-for-publication)".

### Ver el desempeño de tu app

Puedes acceder a las métricas y transacciones de tu lista. Para obtener más información, consulta:

- "[Visualizar las métricas de tu lista](/developers/github-marketplace/viewing-metrics-for-your-listing)"
- "[Visualizar las transacciones de tu lista](/developers/github-marketplace/viewing-transactions-for-your-listing)"

### Contactar a soporte

Si tienes preguntas acerca de {% data variables.product.prodname_marketplace %}, por favor contacta directamente a {% data variables.contact.contact_support %}.
