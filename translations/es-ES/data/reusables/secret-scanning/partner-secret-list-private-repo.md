| Proveedor   | Secreto compatible      | Slug de la API    |
| ----------- | ----------------------- | ----------------- |
| Adafruit IO | Clave de IO de Adafruit | adafruit_io_key |
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Adobe | Token de Dispositivo de Adobe | adobe_device_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Adobe | Token de Servicio de Adobe | adobe_service_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Adobe | Token de Acceso de Duración Corta de Adobe | adobe_short_lived_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Adobe | Token Web JSON de Adobe | adobe_jwt{% endif %} Alibaba Cloud | ID de Llave de Acceso a Alibaba Cloud | alibaba_cloud_access_key_id Alibaba Cloud | Llave Secreta de Acceso a Alibaba Cloud | alibaba_cloud_access_key_secret Amazon Web Services (AWS) | ID de Llave de Acceso de Amazon AWS | aws_access_key_id Amazon Web Services (AWS) | Llave de Acceso Secreta de Amazon AWS | aws_secret_access_key
{%- ifversion fpt or ghec or ghes > 3.2 %}
Amazon Web Services (AWS) | Token de Sesión de Amazon AWS | aws_session_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
Amazon Web Services (AWS) | ID de Llave de Acceso Temporal de Amazon AWS | aws_temporary_access_key_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Asana | Token de Acceso Personal de Asana | asana_personal_access_token{% endif %} Atlassian | Token de la API de Atlassian | atlassian_api_token Atlassian | Token Web JSON de Atlassian | atlassian_jwt
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Atlassian | Token de Acceso Personal al Servidor de Bitbucket | bitbucket_server_personal_access_token{% endif %} Azure | Token de Acceso Personal a Azure DevOps | azure_devops_personal_access_token Azure | Token SAS de Azure | azure_sas_token Azure | Certificado de Administración de Servicios de Azure | azure_management_certificate
{%- ifversion ghes < 3.4 or ghae or ghae-issue-5342 %}
Azure | Secuencia de Conexión SQL de Azure | azure_sql_connection_string{% endif %} Azure | Llave de Cuenta de Almacenamiento de Azure | azure_storage_account_key
{%- ifversion fpt or ghec or ghes > 3.2 %}
Beamer | Llave de la API de Beamer | beamer_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Checkout.com | Llave de Secreto de Producción de Checkout.com | checkout_production_secret_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Checkout.com | Llave Secreta de Pruebas de Checkout.com | checkout_test_secret_key{% endif %} Clojars | Token de Despliegue de Clojars | clojars_deploy_token
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
CloudBees CodeShip | Credencial de CodeShip de CloudBees | codeship_credential{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
Contentful | Token de Acceso Personal a Contentful | contentful_personal_access_token{% endif %} Databricks | Token de Acceso a Databricks | databricks_access_token Discord | Token de Bot de Discord | discord_bot_token
{%- ifversion fpt or ghec or ghes > 3.0 or ghae %}
Doppler | Token Personal de Doppler | doppler_personal_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.0 or ghae %}
Doppler | Token de Servicio de Doppler | doppler_service_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.0 or ghae %}
Doppler | Token del CLI de Doppler | doppler_cli_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.0 or ghae %}
Doppler | Token de SCIM de Doppler | doppler_scim_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Doppler | Token de Auditoría de Doppler | doppler_audit_token{% endif %} Dropbox | Token de Acceso a Dropbox | dropbox_access_token Dropbox | Token de Acceso de Vida Corta a Dropbox | dropbox_short_lived_access_token
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Duffel | Token de Acceso en Vivo de Duffel | duffel_live_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Duffel | Token de Acceso de Prueba de Duffel | duffel_test_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.0 or ghae %}
Dynatrace | Token de Acceso a Dynatrace | dynatrace_access_token{% endif %} Dynatrace | Token Interno de Dynatrace | dynatrace_internal_token
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
EasyPost | Llave de la API de Producción de EasyPost | easypost_production_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
EasyPost | Llave de la API de Pruebas de EasyPost | easypost_test_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Fastly | Token de la API de Fastly | fastly_api_token{% endif %} Finicity | Llave de la App de Finicity | finicity_app_key
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Flutterwave | Llave de Secreto de la API en Vivo de Flutterwave | flutterwave_live_api_secret_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Flutterwave | Ññave Secreta de la API de Pruebas de Flutterwave | flutterwave_test_api_secret_key{% endif %} Frame.io | Token Web JSON de Frame.io | frameio_jwt Frame.io| Token de Desarrollador de Frame.io | frameio_developer_token
{%- ifversion fpt or ghec or ghes > 3.2 %}
FullStory | Llave de la API de FullStory | fullstory_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
GitHub | Token de Acceso Personal de GitHub | github_personal_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
GitHub | Token de Acceso de OAuth de GitHub | github_oauth_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
GitHub | Token de Actualización de GitHub | github_refresh_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
GitHub | GitHub App Installation Access Token | github_app_installation_access_token{% endif %} GitHub | GitHub SSH Private Key | github_ssh_private_key
{%- ifversion fpt or ghec or ghes > 3.3 %}
GitLab | GitLab Access Token | gitlab_access_token{% endif %} GoCardless | GoCardless Live Access Token | gocardless_live_access_token GoCardless | GoCardless Sandbox Access Token | gocardless_sandbox_access_token
{%- ifversion fpt or ghec or ghes > 3.2 %}
Google | Llave del Servidor de Mensajería de Firebase Cloud | firebase_cloud_messaging_server_key{% endif %} Google | Llave de la API de Google | google_api_key Google | ID de Llave Privada de Google Cloud | google_cloud_private_key_id
{%- ifversion fpt or ghec or ghes > 3.2 %}
Google | Secreto de la Llave de Acceso de Almacenamiento de Google Cloud | google_cloud_storage_access_key_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
Google | ID de la Llave de Acceso de la Cuenta de Servicio de Almacenamiento de Google Cloud | google_cloud_storage_service_account_access_key_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
Google | ID de la Llave de Acceso de Usuario de Almacenamiento de Google Cloud | google_cloud_storage_user_access_key_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 %}
Google | Google OAuth Access Token | google_oauth_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 %}
Google | ID de Cliente OAuth de Google | google_oauth_client_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 %}
Google | Secreto de Cliente OAuth de Google | google_oauth_client_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Grafana | Llave de la API de Grafana | grafana_api_key{% endif %} Hashicorp Terraform | API del Token de Terraform Cloud / Enterprise | terraform_api_token Hubspot | Llave de la API de Hubspot | hubspot_api_key
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Intercom | Token de Acceso a Intercom | intercom_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Ionic | Token de Acceso Personal de Ionic | ionic_personal_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Ionic | Token de Actualización de Ionic | ionic_refresh_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
JFrog | Token de Acceso a la Plataforma de JFrog | jfrog_platform_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
JFrog | Llave de la API de la Plataforma de JFrog | jfrog_platform_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Linear | Llave de la API de Linear | linear_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Linear | Token de Acceso Oauth de Linear | linear_oauth_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Lob | Llave de la API en Vivo de Lob | lob_live_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Lob | Llave de la API de Pruebas de Lob | lob_test_api_key{% endif %} Mailchimp | Llave de la API de Mailchimp | mailchimp_api_key Mailgun | Llave de la API de Mailgun | mailgun_api_key
{%- ifversion fpt or ghec or ghes > 3.3 %}
Mapbox | Token de Acceso Secreto a Mapbox | mapbox_secret_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
MessageBird | Llave de la API de MessageBird | messagebird_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Meta | Token de Acceso a Facebook | facebook_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
New Relic | Llave Personal de la API de New Relic | new_relic_personal_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
New Relic | Llave de la API de REST de New Relic | new_relic_rest_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
New Relic | Llave de Consulta de Perspectivas de New Relic | new_relic_insights_query_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
New Relic | Llave de Licencia de New Relic | new_relic_license_key{% endif %} npm | Token de Acceso a npm | npm_access_token NuGet | Llave de la API de NuGet | nuget_api_key
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Onfido | Token de la API de Onfido Live | onfido_live_api_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Onfido | Token de la API de Onfido Sandbox | onfido_sandbox_api_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
OpenAI | Llave de la API de OpenAI | openai_api_key{% endif %} Palantir | Token Web JSON de Palantir | palantir_jwt
{%- ifversion fpt or ghec or ghes > 3.2 %}
PlanetScale | Contraseña de la Base de Datos de PlanetScale | planetscale_database_password{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
PlanetScale | Token de OAuth de PlanetScale | planetscale_oauth_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
PlanetScale | Token de Servicio de PlanetScale | planetscale_service_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
Plivo | ID de Auth de Plivo | plivo_auth_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
Plivo | Token de Autenticación a Plivo | plivo_auth_token{% endif %} Postman | Llave de la API de Postman | postman_api_key Proctorio | Llave de Consumidor de Proctorio | proctorio_consumer_key Proctorio | Llave de Vinculación de Proctorio | proctorio_linkage_key Proctorio | Llave de Registro de Proctorio | proctorio_registration_key Proctorio | Llave de Secreto de Proctorio | proctorio_secret_key Pulumi | Toekn de Acceso a Pulumi | pulumi_access_token
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
PyPI | Token de la API de PyPI | pypi_api_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
RubyGems | Llave de la API de RubyGems | rubygems_api_key{% endif %} Samsara | Token de la API de Samsara | samsara_api_token Samsara | Token de Acceso OAuth a Samsara | samsara_oauth_access_token
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
SendGrid | Llave de la API de SendGrid | sendgrid_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
Sendinblue | Llave de la API de Sendinblue | sendinblue_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
Sendinblue | Llave de SMTP de Sendinblue | sendinblue_smtp_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Shippo | Token de la API de Shippo Live | shippo_live_api_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Shippo | Token de la API de Pruebas de Shippo | shippo_test_api_token{% endif %} Shopify | Secreto Compartido de la App de Shopify | shopify_app_shared_secret Shopify | Token de Acceso a Shopify | shopify_access_token Shopify | Token de Acceso a la App Personalizada de Shopify | shopify_custom_app_access_token Shopify | Contraseña de la App Privada de Shopify | shopify_private_app_password Slack | Token de la API de Slack | slack_api_token Slack | URL del Webhook Entrante de Slack | slack_incoming_webhook_url Slack | URL del Webhook del Flujo de Trabajo de Slack | slack_workflow_webhook_url
{%- ifversion fpt or ghec or ghes > 3.3 %}
Square | Secreto de la Aplicación de Producción de Square | square_production_application_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 %}
Square | Secreto de la Aplicación de Pruebas de Square | square_sandbox_application_secret{% endif %} SSLMate | Llave de la API de SSLMate | sslmate_api_key SSLMate | Secreto de Clúster de SSLMate | sslmate_cluster_secret Stripe | Llave de la API de Stripe | stripe_api_key
{%- ifversion fpt or ghec or ghes > 3.0 or ghae %}
Stripe | Llave Secreta en Vivo de la API de Stripe | stripe_live_secret_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.0 or ghae %}
Stripe | Llave Secreta de la API de Prueba de Stripe | stripe_test_secret_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.0 or ghae %}
Stripe | Llave Restringida de la API en Vivo de Stripe | stripe_live_restricted_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.0 or ghae %}
Stripe | Llave Restringida de la API de Prueba de Stripe | stripe_test_restricted_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Stripe | Secreto de Firmado de Webhook de Stripe | stripe_webhook_signing_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
{%- ifversion fpt or ghec or ghes > 3.3 %}
Supabase | Supabase Service Key | supabase_service_key{% endif %} Tableau | Tableau Personal Access Token | tableau_personal_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Telegram | Token del Bot de Telegram | telegram_bot_token{% endif %} Tencent Cloud | ID Secreta de Tencent Cloud | tencent_cloud_secret_id
{%- ifversion fpt or ghec or ghes > 3.3 %}
Twilio | Token de Acceso a Twilio | twilio_access_token{% endif %} Twilio | Identificador de Secuencia de Cuenta de Twilio | twilio_account_sid Twilio | Llave de la API de Twilio | twilio_api_key
{%- ifversion fpt or ghec or ghes > 3.3 %}
Typeform | Token de Acceso Personal a Typeform | typeform_personal_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 %}
Yandex | Llave de la API de Yandex.Cloud | yandex_cloud_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 %}
Yandex | Cookie IAM de Yandex.Cloud | yandex_cloud_iam_cookie{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 %}
Yandex | Token IAM de Yandex.Cloud | yandex_cloud_iam_token{% endif %}
