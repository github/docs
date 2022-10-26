Provider | Supported secret | Secret type
--- | --- | ---
Adafruit IO | Adafruit IO key | adafruit_io_key
Adobe | Adobe device token | adobe_device_token
Adobe | Adobe service token | adobe_service_token
Adobe | Adobe short-lived access token | adobe_short_lived_access_token
Adobe | Adobe JSON web token | adobe_jwt
Alibaba Cloud | Alibaba Cloud access key ID with Alibaba Cloud access key secret| alibaba_cloud_access_key_id </br>alibaba_cloud_access_key_secret
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Amazon | Amazon OAuth client ID with Amazon OAuth client secret | amazon_oauth_client_id </br>amazon_oauth_client_secret{% endif %}
Amazon Web Services (AWS) | Amazon AWS access key ID with Amazon AWS secret access key | aws_access_key_id </br>aws_secret_access_key
Amazon Web Services (AWS) | Amazon AWS session token with Amazon AWS temporary access key ID and Amazon AWS secret access key | aws_session_token </br>aws_temporary_access_key_id </br>aws_secret_access_key
Asana | Asana {% data variables.product.pat_generic %} | asana_personal_access_token
Atlassian | Atlassian API token | atlassian_api_token
Atlassian | Atlassian JSON web token | atlassian_jwt
Atlassian | Bitbucket server {% data variables.product.pat_generic %} | bitbucket_server_personal_access_token
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Azure | Azure Active Directory application secret | azure_active_directory_application_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.8 or ghae > 3.8 %}
Azure | Azure Batch key identifiable | azure_batch_key_identifiable{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Azure | Azure Cache for Redis access key | azure_cache_for_redis_access_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.8 or ghae > 3.8 %}
Azure | Azure CosmosDB key identifiable | azure_cosmosdb_key_identifiable{% endif %}
Azure | Azure DevOps {% data variables.product.pat_generic %} | azure_devops_personal_access_token
{%- ifversion fpt or ghec or ghes > 3.8 or ghae > 3.8 %}
Azure | Azure ML studio (classic) web service key | azure_ml_studio_classic_web_service_key{% endif %}
Azure | Azure SAS token | azure_sas_token
Azure | Azure service management certificate | azure_management_certificate
{%- ifversion ghes < 3.4 or ghae < 3.4 %}
Azure | Azure SQL connection string | azure_sql_connection_string{% endif %}
Azure | Azure Storage account key | azure_storage_account_key
Beamer | Beamer API key | beamer_api_key
Checkout.com | Checkout.com production secret key | checkout_production_secret_key
Checkout.com | Checkout.com test secret key | checkout_test_secret_key
Clojars | Clojars deploy token | clojars_deploy_token
CloudBees CodeShip | CloudBees CodeShip credential | codeship_credential
Contentful | Contentful {% data variables.product.pat_generic %} | contentful_personal_access_token
Databricks | Databricks access token | databricks_access_token
{%- ifversion fpt or ghec or ghes > 3.8 or ghae > 3.8 %}
DevCycle | DevCycle client API key | devcycle_client_api_key
DevCycle | DevCycle server API key | devcycle_server_api_key
DevCycle | DevCycle mobile API key | devcycle_mobile_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
DigitalOcean | DigitalOcean {% data variables.product.pat_generic %} | digitalocean_personal_access_token
DigitalOcean | DigitalOcean OAuth token | digitalocean_oauth_token
DigitalOcean | DigitalOcean refresh token | digitalocean_refresh_token
DigitalOcean | DigitalOcean system token | digitalocean_system_token{% endif %}
Discord | Discord bot token | discord_bot_token
Doppler | Doppler personal token | doppler_personal_token
Doppler | Doppler service token | doppler_service_token
Doppler | Doppler CLI token | doppler_cli_token
Doppler | Doppler SCIM token | doppler_scim_token
Doppler | Doppler audit token | doppler_audit_token
Dropbox | Dropbox access token | dropbox_access_token
Dropbox | Dropbox short lived access token | dropbox_short_lived_access_token
Duffel | Duffel live access token | duffel_live_access_token
Duffel | Duffel test access token | duffel_test_access_token
Dynatrace | Dynatrace access token | dynatrace_access_token
Dynatrace | Dynatrace internal token | dynatrace_internal_token
EasyPost | EasyPost production API key | easypost_production_api_key
EasyPost | EasyPost test API key | easypost_test_api_key
Fastly | Fastly API token | fastly_api_token
Finicity | Finicity app key | finicity_app_key
Flutterwave | Flutterwave live API secret key | flutterwave_live_api_secret_key
Flutterwave | Flutterwave test API secret key | flutterwave_test_api_secret_key
Frame.io | Frame.io JSON web token | frameio_jwt
Frame.io| Frame.io developer token | frameio_developer_token
FullStory | FullStory API key | fullstory_api_key
GitHub | GitHub {% data variables.product.pat_generic %} | github_personal_access_token
GitHub | GitHub OAuth access token | github_oauth_access_token
GitHub | GitHub refresh token | github_refresh_token
GitHub | GitHub app installation access token | github_app_installation_access_token
GitHub | GitHub SSH private key | github_ssh_private_key
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
GitLab | GitLab access token | gitlab_access_token{% endif %}
GoCardless | GoCardless live access token | gocardless_live_access_token
GoCardless | GoCardless sandbox access token | gocardless_sandbox_access_token
Google | Firebase Cloud messaging server key | firebase_cloud_messaging_server_key
Google | Google API key | google_api_key
Google | Google Cloud private key ID | 
Google | Google Cloud Storage service account access key ID with Google Cloud Storage access key secret | google_cloud_storage_service_account_access_key_id </br>google_cloud_storage_access_key_secret
Google | Google Cloud Storage user access key ID with Google Cloud Storage access key secret | google_cloud_storage_user_access_key_id </br>google_cloud_storage_access_key_secret
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Google | Google OAuth access token | google_oauth_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Google | Google OAuth client ID with Google OAuth client secret | google_oauth_client_id </br>google_oauth_client_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Google | Google OAuth refresh token | google_oauth_refresh_token{% endif %}
Grafana | Grafana API Key | grafana_api_key
HashiCorp | Terraform Cloud / Enterprise API token | terraform_api_token
HashiCorp | HashiCorp Vault batch token | hashicorp_vault_batch_token
HashiCorp | HashiCorp Vault service token | hashicorp_vault_service_token
Hubspot | Hubspot API key | hubspot_api_key
Intercom | Intercom access token | intercom_access_token
Ionic | Ionic {% data variables.product.pat_generic %} | ionic_personal_access_token
Ionic | Ionic refresh token | ionic_refresh_token
{%- ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
JD Cloud | JD Cloud access key | jd_cloud_access_key{% endif %}
JFrog | JFrog platform access token | jfrog_platform_access_token
JFrog | JFrog platform API key | jfrog_platform_api_key
Linear | Linear API key | linear_api_key
Linear | Linear OAuth access token | linear_oauth_access_token
Lob | Lob live API key | lob_live_api_key
Lob | Lob test API key | lob_test_api_key
{%- ifversion fpt or ghec or ghes > 3.8 or ghae > 3.8 %}
LogicMonitor | LogicMonitor Bearer token | logicmonitor_bearer_token
LogicMonitor | LogicMonitor LMV1 access key | logicmonitor_lmv1_access_key{% endif %}
Mailchimp | Mailchimp API key | mailchimp_api_key
Mailgun | Mailgun API key | mailgun_api_key
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Mapbox | Mapbox secret access token | mapbox_secret_access_token{% endif %}
MessageBird | MessageBird API key | messagebird_api_key
Meta | Facebook access token | facebook_access_token
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Midtrans | Midtrans production server key | midtrans_production_server_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Midtrans | Midtrans sandbox server key | midtrans_sandbox_server_key{% endif %}
New Relic | New Relic personal API key | new_relic_personal_api_key
New Relic | New Relic REST API key | new_relic_rest_api_key
New Relic | New Relic Insights query key | new_relic_insights_query_key
New Relic | New Relic license key | new_relic_license_key
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Notion | Notion integration token | notion_integration_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Notion | Notion OAuth client secret | notion_oauth_client_secret{% endif %}
npm | npm access token | npm_access_token
NuGet | NuGet API Key | nuget_api_key
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Octopus Deploy | Octopus Deploy API Key | octopus_deploy_api_key{% endif %}
Onfido | Onfido live API token | onfido_live_api_token
Onfido | Onfido sandbox API token | onfido_sandbox_api_token
OpenAI | OpenAI API Key | openai_api_key
Palantir | Palantir JSON web token | palantir_jwt
PlanetScale | PlanetScale database password | planetscale_database_password
PlanetScale | PlanetScale OAuth token | planetscale_oauth_token
PlanetScale | PlanetScale service token | planetscale_service_token
Plivo | Plivo auth ID with Plivo auth token | plivo_auth_id </br>plivo_auth_token
Postman | Postman API key | postman_api_key
{%- ifversion fpt or ghec or ghes > 3.6 or ghae > 3.6 %}
Prefect | Prefect server API key | prefect_server_api_key
Prefect | Prefect user API key | prefect_user_api_key{% endif %}
Proctorio | Proctorio consumer key | proctorio_consumer_key
Proctorio | Proctorio linkage key | proctorio_linkage_key
Proctorio | Proctorio registration key | proctorio_registration_key
Proctorio | Proctorio secret key | proctorio_secret_key
Pulumi | Pulumi access token | pulumi_access_token
PyPI | PyPI API token | pypi_api_token
{%- ifversion fpt or ghec or ghes > 3.6 or ghae > 3.6 %}
ReadMe | ReadMe API access key | readmeio_api_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
redirect.pizza | redirect.pizza API token | redirect_pizza_api_token{% endif %}
RubyGems | RubyGems API key | rubygems_api_key
Samsara | Samsara API token | samsara_api_token
Samsara | Samsara OAuth access token | samsara_oauth_access_token
{%- ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
Segment | Segment public API token | segment_public_api_token{% endif %}
SendGrid | SendGrid API key | sendgrid_api_key
Sendinblue | Sendinblue API key | sendinblue_api_key
Sendinblue | Sendinblue SMTP key | sendinblue_smtp_key
Shippo | Shippo live API token | shippo_live_api_token
Shippo | Shippo test API token | shippo_test_api_token
{%- ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
Shopify | Shopify app client credentials | shopify_app_client_credentials
Shopify | Shopify app client secret | shopify_app_client_secret{% endif %}
Shopify | Shopify app shared secret | shopify_app_shared_secret
Shopify | Shopify access token | shopify_access_token
Shopify | Shopify custom app access token | shopify_custom_app_access_token
{%- ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
Shopify | Shopify merchant token | shopify_merchant_token
Shopify | Shopify marketplace token | shopify_marketplace_token
Shopify | Shopify partner API token | shopify_partner_api_token{% endif %}
Shopify | Shopify private app password | shopify_private_app_password
Slack | Slack API token | slack_api_token
Slack | Slack incoming webhook URL | slack_incoming_webhook_url
Slack | Slack workflow webhook URL | slack_workflow_webhook_url
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Square | Square access token | square_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Square | Square production application secret | square_production_application_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Square | Square sandbox application secret | square_sandbox_application_secret{% endif %}
SSLMate | SSLMate API key | sslmate_api_key
SSLMate | SSLMate cluster secret | sslmate_cluster_secret
Stripe | Stripe API key | stripe_api_key
Stripe | Stripe live API secret key | stripe_live_secret_key
Stripe | Stripe test API secret key | stripe_test_secret_key
Stripe | Stripe live API restricted key | stripe_live_restricted_key
Stripe | Stripe test API restricted key | stripe_test_restricted_key
Stripe | Stripe webhook signing secret | stripe_webhook_signing_secret
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Supabase | Supabase service key | supabase_service_key{% endif %}
Tableau | Tableau {% data variables.product.pat_generic %} | tableau_personal_access_token
Telegram | Telegram bot token | telegram_bot_token
Tencent Cloud | Tencent Cloud secret ID | tencent_cloud_secret_id
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Twilio | Twilio access token | twilio_access_token{% endif %}
Twilio | Twilio account string identifier | twilio_account_sid
Twilio | Twilio API key | twilio_api_key
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Typeform | Typeform {% data variables.product.pat_generic %} | typeform_personal_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.6 or ghae > 3.6 %}
Uniwise | WISEflow API key | wiseflow_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
WorkOS | WorkOS production API key | workos_production_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
WorkOS | WorkOS staging API key | workos_staging_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Yandex | Yandex.Cloud API key | yandex_cloud_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Yandex | Yandex.Cloud IAM cookie | yandex_cloud_iam_cookie{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Yandex | Yandex.Cloud IAM token | yandex_cloud_iam_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Yandex | Yandex.Dictionary API key | yandex_dictionary_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
Yandex | Yandex.Cloud access secret | yandex_iam_access_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Yandex | Yandex.Predictor API key | yandex_predictor_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
Yandex | Yandex.Translate API key | yandex_translate_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.6 or ghae > 3.6 %}
Zuplo | Zuplo consumer API key | zuplo_consumer_api_key{% endif %}
