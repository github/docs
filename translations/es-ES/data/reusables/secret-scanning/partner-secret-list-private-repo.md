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
Adobe | Adobe JSON Web Token | adobe_jwt{% endif %} Alibaba Cloud | Alibaba Cloud Access Key ID | alibaba_cloud_access_key_id Alibaba Cloud | Alibaba Cloud Access Key Secret | alibaba_cloud_access_key_secret Amazon Web Services (AWS) | Amazon AWS Access Key ID | aws_access_key_id Amazon Web Services (AWS) | Amazon AWS Secret Access Key | aws_secret_access_key
{%- ifversion fpt or ghec or ghes > 3.2 %}
Amazon Web Services (AWS) | Token de Sesión de Amazon AWS | aws_session_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
Amazon Web Services (AWS) | ID de Llave de Acceso Temporal de Amazon AWS | aws_temporary_access_key_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Asana | Asana Personal Access Token | asana_personal_access_token{% endif %} Atlassian | Atlassian API Token | atlassian_api_token Atlassian | Atlassian JSON Web Token | atlassian_jwt
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Atlassian | Bitbucket Server Personal Access Token | bitbucket_server_personal_access_token{% endif %} Azure | Azure DevOps Personal Access Token | azure_devops_personal_access_token Azure | Azure SAS Token | azure_sas_token Azure | Azure Service Management Certificate | azure_management_certificate
{%- ifversion ghes < 3.4 or ghae or ghae-issue-5342 %}
Azure | Azure SQL Connection String | azure_sql_connection_string{% endif %} Azure | Azure Storage Account Key | azure_storage_account_key
{%- ifversion fpt or ghec or ghes > 3.2 %}
Beamer | Llave de la API de Beamer | beamer_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Checkout.com | Llave de Secreto de Producción de Checkout.com | checkout_production_secret_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Checkout.com | Checkout.com Test Secret Key | checkout_test_secret_key{% endif %} Clojars | Clojars Deploy Token | clojars_deploy_token
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
CloudBees CodeShip | Credencial de CodeShip de CloudBees | codeship_credential{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
Contentful | Contentful Personal Access Token | contentful_personal_access_token{% endif %} Databricks | Databricks Access Token | databricks_access_token Discord | Discord Bot Token | discord_bot_token
{%- ifversion fpt or ghec or ghes > 3.0 or ghae %}
Doppler | Token Personal de Doppler | doppler_personal_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.0 or ghae %}
Doppler | Token de Servicio de Doppler | doppler_service_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.0 or ghae %}
Doppler | Token del CLI de Doppler | doppler_cli_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.0 or ghae %}
Doppler | Token de SCIM de Doppler | doppler_scim_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Doppler | Doppler Audit Token | doppler_audit_token{% endif %} Dropbox | Dropbox Access Token | dropbox_access_token Dropbox | Dropbox Short Lived Access Token | dropbox_short_lived_access_token
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Duffel | Token de Acceso en Vivo de Duffel | duffel_live_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Duffel | Token de Acceso de Prueba de Duffel | duffel_test_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.0 or ghae %}
Dynatrace | Dynatrace Access Token | dynatrace_access_token{% endif %} Dynatrace | Dynatrace Internal Token | dynatrace_internal_token
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
EasyPost | Llave de la API de Producción de EasyPost | easypost_production_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
EasyPost | Llave de la API de Pruebas de EasyPost | easypost_test_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Fastly | Fastly API Token | fastly_api_token{% endif %} Finicity | Finicity App Key | finicity_app_key
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Flutterwave | Llave de Secreto de la API en Vivo de Flutterwave | flutterwave_live_api_secret_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Flutterwave | Flutterwave Test API Secret Key | flutterwave_test_api_secret_key{% endif %} Frame.io | Frame.io JSON Web Token | frameio_jwt Frame.io| Frame.io Developer Token | frameio_developer_token
{%- ifversion fpt or ghec or ghes > 3.2 %}
FullStory | Llave de la API de FullStory | fullstory_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
GitHub | Token de Acceso Personal de GitHub | github_personal_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
GitHub | Token de Acceso de OAuth de GitHub | github_oauth_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
GitHub | Token de Actualización de GitHub | github_refresh_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
GitHub | GitHub App Installation Access Token | github_app_installation_access_token{% endif %} GitHub | GitHub SSH Private Key | github_ssh_private_key GoCardless | GoCardless Live Access Token | gocardless_live_access_token GoCardless | GoCardless Sandbox Access Token | gocardless_sandbox_access_token
{%- ifversion fpt or ghec or ghes > 3.2 %}
Google | Firebase Cloud Messaging Server Key | firebase_cloud_messaging_server_key{% endif %} Google | Google API Key | google_api_key Google | Google Cloud Private Key ID | google_cloud_private_key_id
{%- ifversion fpt or ghec or ghes > 3.2 %}
Google | Secreto de la Llave de Acceso de Almacenamiento de Google Cloud | google_cloud_storage_access_key_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
Google | ID de la Llave de Acceso de la Cuenta de Servicio de Almacenamiento de Google Cloud | google_cloud_storage_service_account_access_key_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
Google | ID de la Llave de Acceso de Usuario de Almacenamiento de Google Cloud | google_cloud_storage_user_access_key_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 %}
Google | Google OAuth Client ID | google_oauth_client_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 %}
Google | Google OAuth Client Secret | google_oauth_client_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Grafana | Grafana API Key | grafana_api_key{% endif %} Hashicorp Terraform | Terraform Cloud / Enterprise API Token | terraform_api_token Hubspot | Hubspot API Key | hubspot_api_key
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
Lob | Lob Test API Key | lob_test_api_key{% endif %} Mailchimp | Mailchimp API Key | mailchimp_api_key Mailgun | Mailgun API Key | mailgun_api_key
{%- ifversion fpt or ghec or ghes > 3.3 %}
Mapbox | Mapbox Secret Access Token | mapbox_secret_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
MessageBird | Llave de la API de MessageBird | messagebird_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Meta | Facebook Access Token | facebook_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
New Relic | Llave Personal de la API de New Relic | new_relic_personal_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
New Relic | Llave de la API de REST de New Relic | new_relic_rest_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
New Relic | Llave de Consulta de Perspectivas de New Relic | new_relic_insights_query_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
New Relic | New Relic License Key | new_relic_license_key{% endif %} npm | npm Access Token | npm_access_token NuGet | NuGet API Key | nuget_api_key
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Onfido | Token de la API de Onfido Live | onfido_live_api_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Onfido | Token de la API de Onfido Sandbox | onfido_sandbox_api_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
OpenAI | OpenAI API Key | openai_api_key{% endif %} Palantir | Palantir JSON Web Token | palantir_jwt
{%- ifversion fpt or ghec or ghes > 3.2 %}
PlanetScale | Contraseña de la Base de Datos de PlanetScale | planetscale_database_password{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
PlanetScale | Token de OAuth de PlanetScale | planetscale_oauth_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
PlanetScale | Token de Servicio de PlanetScale | planetscale_service_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
Plivo | ID de Auth de Plivo | plivo_auth_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
Plivo | Plivo Auth Token | plivo_auth_token{% endif %} Postman | Postman API Key | postman_api_key Proctorio | Proctorio Consumer Key | proctorio_consumer_key Proctorio | Proctorio Linkage Key | proctorio_linkage_key Proctorio | Proctorio Registration Key | proctorio_registration_key Proctorio | Proctorio Secret Key | proctorio_secret_key Pulumi | Pulumi Access Token | pulumi_access_token
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
PyPI | Token de la API de PyPI | pypi_api_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
RubyGems | RubyGems API Key | rubygems_api_key{% endif %} Samsara | Samsara API Token | samsara_api_token Samsara | Samsara OAuth Access Token | samsara_oauth_access_token
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
SendGrid | Llave de la API de SendGrid | sendgrid_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
Sendinblue | Llave de la API de Sendinblue | sendinblue_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
Sendinblue | Llave de SMTP de Sendinblue | sendinblue_smtp_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Shippo | Token de la API de Shippo Live | shippo_live_api_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Shippo | Shippo Test API Token | shippo_test_api_token{% endif %} Shopify | Shopify App Shared Secret | shopify_app_shared_secret Shopify | Shopify Access Token | shopify_access_token Shopify | Shopify Custom App Access Token | shopify_custom_app_access_token Shopify | Shopify Private App Password | shopify_private_app_password Slack | Slack API Token | slack_api_token Slack | Slack Incoming Webhook URL | slack_incoming_webhook_url Slack | Slack Workflow Webhook URL | slack_workflow_webhook_url SSLMate | SSLMate API Key | sslmate_api_key SSLMate | SSLMate Cluster Secret | sslmate_cluster_secret Stripe | Stripe API Key | stripe_api_key
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
Tableau | Token de Acceso Personal a Tableau | tableau_personal_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae-next %}
Telegram | Telegram Bot Token | telegram_bot_token{% endif %} Tencent Cloud | Tencent Cloud Secret ID | tencent_cloud_secret_id
{%- ifversion fpt or ghec or ghes > 3.3 %}
Twilio | Twilio Access Token | twilio_access_token{% endif %} Twilio | Twilio Account String Identifier | twilio_account_sid Twilio | Twilio API Key | twilio_api_key
{%- ifversion fpt or ghec or ghes > 3.3 %}
Typeform | Typeform Personal Access Token | typeform_personal_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 %}
Yandex | Yandex.Cloud API Key | yandex_cloud_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 %}
Yandex | Yandex.Cloud IAM Cookie | yandex_cloud_iam_cookie{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 %}
Yandex | Yandex.Cloud IAM Token | yandex_cloud_iam_token{% endif %}
