| Socio | Secreto compatible | Slug de la API |
| ----- | ------------------ | -------------- |
|       |                    |                |
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Adafruit IO | Adafruit IO Key | adafruit_io_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
Adobe | Token de Dispositivo de Adobe | adobe_device_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
Adobe | Token de Servicio de Adobe | adobe_service_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
Adobe | Token de Acceso de Duración Corta de Adobe | adobe_short_lived_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
Adobe | Token Web JSON de Adobe | adobe_jwt{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Alibaba Cloud | ID de Llave de Acceso de Alibaba Cloud | alibaba_cloud_access_key_id{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Alibaba Cloud | Secreto de Llave de Acceso de Alibaba Cloud | alibaba_cloud_access_key_secret{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Amazon Web Services (AWS) | ID de Llave de Acceso de Amazon AWS | aws_access_key_id{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Amazon Web Services (AWS) | Llave de Acceso de Secreto de Amazon AWS | aws_secret_access_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
Asana | Token de Acceso Personal de Asana Personal | asana_personal_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Atlassian | Token de la API de Atlassian | atlassian_api_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Atlassian | Token Web JSON de Atlassian | atlassian_jwt{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
Atlassian | Token de Acceso Personal de Bitbucket Server | bitbucket_server_personal_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Azure | Token de Acceso Personal de Azure DevOps | azure_devops_personal_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Azure | Token de Azure SAS | azure_sas_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Azure | Certificado de Administración de Servicio de Azure | azure_management_certificate{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Azure | Secuencia de Conexión SQL de Azure | azure_sql_connection_string{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Azure | Llave de Cuenta de Almacenamiento de Azure | azure_storage_account_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Clojars | Token de Despliegue de Clojars | clojars_deploy_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
CloudBees CodeShip | Credencial de CodeShip de CloudBees | codeship_credential{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Databricks | Token de Acceso de Databricks | databricks_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Discord | Token del Bot de Discord | discord_bot_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
Doppler | Token Personal de Doppler | doppler_personal_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
Doppler | Token de Servicio de Doppler | doppler_service_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
Doppler | Token del CLI de Doppler | doppler_cli_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
Doppler | Token de SCIM de Doppler | doppler_scim_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Dropbox | Token de Acceso de Dropbox | dropbox_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Dropbox | Token de Acceso de Duración Corta de Dropbox | dropbox_short_lived_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
Dynatrace | Token de Acceso de Dynatrace | dynatrace_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Dynatrace | Token Interno de Dynatrace | dynatrace_internal_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
EasyPost | EasyPost Production API Key | easypost_production_api_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
EasyPost | EasyPost Test API Key | easypost_test_api_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
Facebook | Token de Acceso de Facebook | facebook_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
Fastly | Token de la API de Fastly | fastly_api_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Finicity | Llave de la App de Finicity | finicity_app_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Frame.io | Token Web de JSON de Frame.io | frameio_jwt{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Frame.io| Token de Desarrollador de Frame.io | frameio_developer_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
GitHub | Token de Acceso Personal de GitHub | github_personal_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
GitHub | Token de Acceso de OAuth de GitHub | github_oauth_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
GitHub | Token de Actualización de GitHub | github_refresh_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
GitHub | Token de Acceso a la Instalacción de una GitHub App | github_app_installation_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
GitHub | Llave Privada SSH de GitHub | github_ssh_private_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
GoCardless | Token de Acceso Directo de GoCardless | gocardless_live_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
GoCardless | Token de Acceso a GoCardless Sandbox | gocardless_sandbox_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Google Cloud | Llave de la API de Google | google_api_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Google Cloud | ID de Llave Privada de Google Cloud | google_cloud_private_key_id{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
Grafana | Llave de la API de Grafana | grafana_api_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Hashicorp Terraform | Token de Terraform Cloud / API de Enterprise API | terraform_api_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Hubspot | Llave de la API de Hubspot API | hubspot_api_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
Intercom | Token de Acceso a Intercom | intercom_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
Lob | Llave de la API en Vivo de Lob | lob_live_api_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
Lob | Llave de la API de Prueba de Lob | lob_test_api_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Mailchimp | Llave de la API de Mailchimp | mailchimp_api_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Mailgun | Llave de la API de Mailgun | mailgun_api_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
MessageBird | Llave de la API de MessageBird | messagebird_api_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
npm | Token de Acceso a npm | npm_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
NuGet | Llave de la API de NuGet | nuget_api_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
Onfido | Onfido Live API Token | onfido_live_api_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
Onfido | Onfido Sandbox API Token | onfido_sandbox_api_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
OpenAI | Llave de la API de OpenAI | openai_api_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Palantir | Token Web de JSON de Palantir | palantir_jwt{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Postman | Llave de la API de Postman | postman_api_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Proctorio | Llave de Consumidor de Proctorio | proctorio_consumer_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Proctorio | Llave de Enlace de Proctorio | proctorio_linkage_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Proctorio | Llave de Registro de Proctorio | proctorio_registration_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Proctorio | Llave Secreta de Proctorio | proctorio_secret_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Pulumi | Token de Acceso a Pulumi | pulumi_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
PyPI | Token de la API de PyPI | pypi_api_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
RubyGems | Llave de la API de RubyGems | rubygems_api_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Samsara | Token de la API de Samsara | samsara_api_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Samsara | Token de Acceso OAuth de Samsara | samsara_oauth_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
SendGrid | Llave de la API de SendGrid | sendgrid_api_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
Shippo | Shippo Live API Token | shippo_live_api_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
Shippo | Shippo Test API Token | shippo_test_api_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Shopify | Secreto Compartido de la App de Shopify | shopify_app_shared_secret{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Shopify | Token de Acceso de Shopify | shopify_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Shopify | Toekn de Acceso a la App Personalizada de Shopify | shopify_custom_app_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Shopify | Contraseña de la App Privada de Shopify | shopify_private_app_password{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Slack | Token de la API de Slack | slack_api_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Slack | URL de Webhook Entrante de Slack | slack_incoming_webhook_url{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Slack | URL de Webhook de Flujo de Trabajo de Slack | slack_workflow_webhook_url{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
SSLMate | Llave de la API de SSLMate | sslmate_api_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
SSLMate | Secreto de Clúster de SSLMate | sslmate_cluster_secret{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Stripe | Llave de la API de Stripe | stripe_api_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
Stripe | Llave Secreta en Vivo de la API de Stripe | stripe_live_secret_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
Stripe | Llave Secreta de la API de Prueba de Stripe | stripe_test_secret_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
Stripe | Llave Restringida de la API en Vivo de Stripe | stripe_live_restricted_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
Stripe | Llave Restringida de la API de Prueba de Stripe | stripe_test_restricted_key{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
Stripe | Secreto de Firmado de Webhook de Stripe | stripe_webhook_signing_secret{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
Tableau | Tableau Personal Access Token | tableau_personal_access_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
Telegram | Token del Bot de Telegram | telegram_bot_token{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Tencent Cloud | ID Secreta de Tencent Cloud | tencent_cloud_secret_id{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Twilio | Identificador de Secuencia de Cuenta de Twilio | twilio_account_sid{% endif %}
{%- if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Twilio | Llave de la API de Twilio | twilio_api_key{% endif %}
