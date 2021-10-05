| Provider | Secreto compatible | Slug de la API |
| -------- | ------------------ | -------------- |
|          |                    |                |
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Adafruit IO | Adafruit IO Key | adafruit_io_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Adobe | Token de Dispositivo de Adobe | adobe_device_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Adobe | Token de Servicio de Adobe | adobe_service_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Adobe | Token de Acceso de Duración Corta de Adobe | adobe_short_lived_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Adobe | Token Web JSON de Adobe | adobe_jwt{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Alibaba Cloud | ID de Llave de Acceso de Alibaba Cloud | alibaba_cloud_access_key_id{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Alibaba Cloud | Secreto de Llave de Acceso de Alibaba Cloud | alibaba_cloud_access_key_secret{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Amazon Web Services (AWS) | ID de Llave de Acceso de Amazon AWS | aws_access_key_id{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Amazon Web Services (AWS) | Llave de Acceso de Secreto de Amazon AWS | aws_secret_access_key{% endif %}
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
Amazon Web Services (AWS) | Amazon AWS Session Token | aws_session_token{% endif %}
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
Amazon Web Services (AWS) | Amazon AWS Temporary Access Key ID | aws_temporary_access_key_id{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Asana | Token de Acceso Personal de Asana Personal | asana_personal_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Atlassian | Token de la API de Atlassian | atlassian_api_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Atlassian | Token Web JSON de Atlassian | atlassian_jwt{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Atlassian | Token de Acceso Personal de Bitbucket Server | bitbucket_server_personal_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Azure | Token de Acceso Personal de Azure DevOps | azure_devops_personal_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Azure | Token de Azure SAS | azure_sas_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Azure | Certificado de Administración de Servicio de Azure | azure_management_certificate{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Azure | Secuencia de Conexión SQL de Azure | azure_sql_connection_string{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Azure | Llave de Cuenta de Almacenamiento de Azure | azure_storage_account_key{% endif %}
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
Beamer | Beamer API Key | beamer_api_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Checkout.com | Checkout.com Production Secret Key | checkout_production_secret_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Checkout.com | Checkout.com Test Secret Key | checkout_test_secret_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Clojars | Token de Despliegue de Clojars | clojars_deploy_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
CloudBees CodeShip | Credencial de CodeShip de CloudBees | codeship_credential{% endif %}
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
Contentful | Contentful Personal Access Token | contentful_personal_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Databricks | Token de Acceso de Databricks | databricks_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Discord | Token del Bot de Discord | discord_bot_token{% endif %}
{%- ifversion fpt or ghes > 3.0 or ghae-next %}
Doppler | Token Personal de Doppler | doppler_personal_token{% endif %}
{%- ifversion fpt or ghes > 3.0 or ghae-next %}
Doppler | Token de Servicio de Doppler | doppler_service_token{% endif %}
{%- ifversion fpt or ghes > 3.0 or ghae-next %}
Doppler | Token del CLI de Doppler | doppler_cli_token{% endif %}
{%- ifversion fpt or ghes > 3.0 or ghae-next %}
Doppler | Token de SCIM de Doppler | doppler_scim_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Doppler | Doppler Audit Token | doppler_audit_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Dropbox | Token de Acceso de Dropbox | dropbox_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Dropbox | Token de Acceso de Duración Corta de Dropbox | dropbox_short_lived_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Duffel | Duffel Live Access Token | duffel_live_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Duffel | Duffel Test Access Token | duffel_test_access_token{% endif %}
{%- ifversion fpt or ghes > 3.0 or ghae-next %}
Dynatrace | Token de Acceso de Dynatrace | dynatrace_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Dynatrace | Token Interno de Dynatrace | dynatrace_internal_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
EasyPost | Llave de la API de Producción de EasyPost | easypost_production_api_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
EasyPost | Llave de la API de Pruebas de EasyPost | easypost_test_api_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Facebook | Token de Acceso de Facebook | facebook_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Fastly | Token de la API de Fastly | fastly_api_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Finicity | Llave de la App de Finicity | finicity_app_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Flutterwave | Flutterwave Live API Secret Key | flutterwave_live_api_secret_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Flutterwave | Flutterwave Test API Secret Key | flutterwave_test_api_secret_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Frame.io | Token Web de JSON de Frame.io | frameio_jwt{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Frame.io| Token de Desarrollador de Frame.io | frameio_developer_token{% endif %}
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
FullStory | FullStory API Key | fullstory_api_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
GitHub | Token de Acceso Personal de GitHub | github_personal_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
GitHub | Token de Acceso de OAuth de GitHub | github_oauth_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
GitHub | Token de Actualización de GitHub | github_refresh_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
GitHub | Token de Acceso a la Instalacción de una GitHub App | github_app_installation_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
GitHub | Llave Privada SSH de GitHub | github_ssh_private_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
GoCardless | Token de Acceso Directo de GoCardless | gocardless_live_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
GoCardless | Token de Acceso a GoCardless Sandbox | gocardless_sandbox_access_token{% endif %}
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
Google | Firebase Cloud Messaging Server Key | firebase_cloud_messaging_server_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Google | Google API Key | google_api_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Google | Google Cloud Private Key ID | google_cloud_private_key_id{% endif %}
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
Google | Google Cloud Storage Access Key Secret | google_cloud_storage_access_key_secret{% endif %}
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
Google | Google Cloud Storage Service Account Access Key ID | google_cloud_storage_service_account_access_key_id{% endif %}
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
Google | Google Cloud Storage User Access Key ID | google_cloud_storage_user_access_key_id{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Grafana | Llave de la API de Grafana | grafana_api_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Hashicorp Terraform | Token de Terraform Cloud / API de Enterprise API | terraform_api_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Hubspot | Llave de la API de Hubspot API | hubspot_api_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Intercom | Token de Acceso a Intercom | intercom_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Ionic | Token de Acceso Personal de Ionic | ionic_personal_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Ionic | Token de Actualización de Ionic | ionic_refresh_token{% endif %}
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
JFrog | JFrog Platform Access Token | jfrog_platform_access_token{% endif %}
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
JFrog | JFrog Platform API Key | jfrog_platform_api_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Linear | Llave de la API de Linear | linear_api_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Linear | Token de Acceso Oauth de Linear | linear_oauth_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Lob | Llave de la API en Vivo de Lob | lob_live_api_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Lob | Llave de la API de Prueba de Lob | lob_test_api_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Mailchimp | Llave de la API de Mailchimp | mailchimp_api_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Mailgun | Llave de la API de Mailgun | mailgun_api_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
MessageBird | Llave de la API de MessageBird | messagebird_api_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
npm | Token de Acceso a npm | npm_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
NuGet | Llave de la API de NuGet | nuget_api_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Onfido | Token de la API de Onfido Live | onfido_live_api_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Onfido | Token de la API de Onfido Sandbox | onfido_sandbox_api_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
OpenAI | Llave de la API de OpenAI | openai_api_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Palantir | Token Web de JSON de Palantir | palantir_jwt{% endif %}
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
PlanetScale | PlanetScale Database Password | planetscale_database_password{% endif %}
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
PlanetScale | PlanetScale OAuth Token | planetscale_oauth_token{% endif %}
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
PlanetScale | PlanetScale Service Token | planetscale_service_token{% endif %}
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
Plivo | Plivo Auth ID | plivo_auth_id{% endif %}
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
Plivo | Plivo Auth Token | plivo_auth_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Postman | Llave de la API de Postman | postman_api_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Proctorio | Llave de Consumidor de Proctorio | proctorio_consumer_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Proctorio | Llave de Enlace de Proctorio | proctorio_linkage_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Proctorio | Llave de Registro de Proctorio | proctorio_registration_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Proctorio | Llave Secreta de Proctorio | proctorio_secret_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Pulumi | Token de Acceso a Pulumi | pulumi_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
PyPI | Token de la API de PyPI | pypi_api_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
RubyGems | Llave de la API de RubyGems | rubygems_api_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Samsara | Token de la API de Samsara | samsara_api_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Samsara | Token de Acceso OAuth de Samsara | samsara_oauth_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
SendGrid | Llave de la API de SendGrid | sendgrid_api_key{% endif %}
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
Sendinblue | Sendinblue API Key | sendinblue_api_key{% endif %}
{%- ifversion fpt or ghes > 3.2 or ghae-next %}
Sendinblue | Sendinblue SMTP Key | sendinblue_smtp_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Shippo | Token de la API de Shippo Live | shippo_live_api_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Shippo | Token de la APi de Prueba de Shippo | shippo_test_api_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Shopify | Secreto Compartido de la App de Shopify | shopify_app_shared_secret{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Shopify | Token de Acceso de Shopify | shopify_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Shopify | Toekn de Acceso a la App Personalizada de Shopify | shopify_custom_app_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Shopify | Contraseña de la App Privada de Shopify | shopify_private_app_password{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Slack | Token de la API de Slack | slack_api_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Slack | URL de Webhook Entrante de Slack | slack_incoming_webhook_url{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Slack | URL de Webhook de Flujo de Trabajo de Slack | slack_workflow_webhook_url{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
SSLMate | Llave de la API de SSLMate | sslmate_api_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
SSLMate | Secreto de Clúster de SSLMate | sslmate_cluster_secret{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Stripe | Llave de la API de Stripe | stripe_api_key{% endif %}
{%- ifversion fpt or ghes > 3.0 or ghae-next %}
Stripe | Llave Secreta en Vivo de la API de Stripe | stripe_live_secret_key{% endif %}
{%- ifversion fpt or ghes > 3.0 or ghae-next %}
Stripe | Llave Secreta de la API de Prueba de Stripe | stripe_test_secret_key{% endif %}
{%- ifversion fpt or ghes > 3.0 or ghae-next %}
Stripe | Llave Restringida de la API en Vivo de Stripe | stripe_live_restricted_key{% endif %}
{%- ifversion fpt or ghes > 3.0 or ghae-next %}
Stripe | Llave Restringida de la API de Prueba de Stripe | stripe_test_restricted_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Stripe | Secreto de Firmado de Webhook de Stripe | stripe_webhook_signing_secret{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Tableau | Token de Acceso Personal a Tableau | tableau_personal_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Telegram | Token del Bot de Telegram | telegram_bot_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Tencent Cloud | ID Secreta de Tencent Cloud | tencent_cloud_secret_id{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Twilio | Identificador de Secuencia de Cuenta de Twilio | twilio_account_sid{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae-next %}
Twilio | Llave de la API de Twilio | twilio_api_key{% endif %}
