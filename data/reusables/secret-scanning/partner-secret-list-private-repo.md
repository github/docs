Provider | Supported secret | Secret type
--- | --- | ---
Adafruit IO | Adafruit IO Key | adafruit_io_key
Adobe | Adobe Device Token | adobe_device_token
Adobe | Adobe Service Token | adobe_service_token
Adobe | Adobe Short-Lived Access Token | adobe_short_lived_access_token
Adobe | Adobe JSON Web Token | adobe_jwt
Alibaba Cloud | Alibaba Cloud Access Key ID | alibaba_cloud_access_key_id
Alibaba Cloud | Alibaba Cloud Access Key Secret | alibaba_cloud_access_key_secret
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Amazon | Amazon OAuth Client ID | amazon_oauth_client_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Amazon | Amazon OAuth Client Secret | amazon_oauth_client_secret{% endif %}
Amazon Web Services (AWS) | Amazon AWS Access Key ID | aws_access_key_id
Amazon Web Services (AWS) | Amazon AWS Secret Access Key | aws_secret_access_key
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Amazon Web Services (AWS) | Amazon AWS Session Token | aws_session_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Amazon Web Services (AWS) | Amazon AWS Temporary Access Key ID | aws_temporary_access_key_id{% endif %}
Asana | Asana Personal Access Token | asana_personal_access_token
Atlassian | Atlassian API Token | atlassian_api_token
Atlassian | Atlassian JSON Web Token | atlassian_jwt
Atlassian | Bitbucket Server Personal Access Token | bitbucket_server_personal_access_token
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Azure | Azure Active Directory Application Secret | azure_active_directory_application_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Azure | Azure Cache for Redis Access Key | azure_cache_for_redis_access_key{% endif %}
Azure | Azure DevOps Personal Access Token | azure_devops_personal_access_token
Azure | Azure SAS Token | azure_sas_token
Azure | Azure Service Management Certificate | azure_management_certificate
{%- ifversion ghes < 3.4 or ghae or ghae-issue-5342 %}
Azure | Azure SQL Connection String | azure_sql_connection_string{% endif %}
Azure | Azure Storage Account Key | azure_storage_account_key
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Beamer | Beamer API Key | beamer_api_key{% endif %}
Checkout.com | Checkout.com Production Secret Key | checkout_production_secret_key
Checkout.com | Checkout.com Test Secret Key | checkout_test_secret_key
Clojars | Clojars Deploy Token | clojars_deploy_token
CloudBees CodeShip | CloudBees CodeShip Credential | codeship_credential
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Contentful | Contentful Personal Access Token | contentful_personal_access_token{% endif %}
Databricks | Databricks Access Token | databricks_access_token
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
DigitalOcean | DigitalOcean Personal Access Token | digitalocean_personal_access_token
DigitalOcean | DigitalOcean OAuth Token | digitalocean_oauth_token
DigitalOcean | DigitalOcean Refresh Token | digitalocean_refresh_token
DigitalOcean | DigitalOcean System Token | digitalocean_system_token{% endif %}
Discord | Discord Bot Token | discord_bot_token
Doppler | Doppler Personal Token | doppler_personal_token
Doppler | Doppler Service Token | doppler_service_token
Doppler | Doppler CLI Token | doppler_cli_token
Doppler | Doppler SCIM Token | doppler_scim_token
Doppler | Doppler Audit Token | doppler_audit_token
Dropbox | Dropbox Access Token | dropbox_access_token
Dropbox | Dropbox Short Lived Access Token | dropbox_short_lived_access_token
Duffel | Duffel Live Access Token | duffel_live_access_token
Duffel | Duffel Test Access Token | duffel_test_access_token
Dynatrace | Dynatrace Access Token | dynatrace_access_token
Dynatrace | Dynatrace Internal Token | dynatrace_internal_token
EasyPost | EasyPost Production API Key | easypost_production_api_key
EasyPost | EasyPost Test API Key | easypost_test_api_key
Fastly | Fastly API Token | fastly_api_token
Finicity | Finicity App Key | finicity_app_key
Flutterwave | Flutterwave Live API Secret Key | flutterwave_live_api_secret_key
Flutterwave | Flutterwave Test API Secret Key | flutterwave_test_api_secret_key
Frame.io | Frame.io JSON Web Token | frameio_jwt
Frame.io| Frame.io Developer Token | frameio_developer_token
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
FullStory | FullStory API Key | fullstory_api_key{% endif %}
GitHub | GitHub Personal Access Token | github_personal_access_token
GitHub | GitHub OAuth Access Token | github_oauth_access_token
GitHub | GitHub Refresh Token | github_refresh_token
GitHub | GitHub App Installation Access Token | github_app_installation_access_token
GitHub | GitHub SSH Private Key | github_ssh_private_key
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
GitLab | GitLab Access Token | gitlab_access_token{% endif %}
GoCardless | GoCardless Live Access Token | gocardless_live_access_token
GoCardless | GoCardless Sandbox Access Token | gocardless_sandbox_access_token
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Google | Firebase Cloud Messaging Server Key | firebase_cloud_messaging_server_key{% endif %}
Google | Google API Key | google_api_key
Google | Google Cloud Private Key ID | google_cloud_private_key_id
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Google | Google Cloud Storage Access Key Secret | google_cloud_storage_access_key_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Google | Google Cloud Storage Service Account Access Key ID | google_cloud_storage_service_account_access_key_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Google | Google Cloud Storage User Access Key ID | google_cloud_storage_user_access_key_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Google | Google OAuth Access Token | google_oauth_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Google | Google OAuth Client ID | google_oauth_client_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Google | Google OAuth Client Secret | google_oauth_client_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Google | Google OAuth Refresh Token | google_oauth_refresh_token{% endif %}
Grafana | Grafana API Key | grafana_api_key
HashiCorp | Terraform Cloud / Enterprise API Token | terraform_api_token
HashiCorp | HashiCorp Vault Batch Token | hashicorp_vault_batch_token
HashiCorp | HashiCorp Vault Service Token | hashicorp_vault_service_token
Hubspot | Hubspot API Key | hubspot_api_key
Intercom | Intercom Access Token | intercom_access_token
Ionic | Ionic Personal Access Token | ionic_personal_access_token
Ionic | Ionic Refresh Token | ionic_refresh_token
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
JD Cloud | JD Cloud Access Key | jd_cloud_access_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
JFrog | JFrog Platform Access Token | jfrog_platform_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
JFrog | JFrog Platform API Key | jfrog_platform_api_key{% endif %}
Linear | Linear API Key | linear_api_key
Linear | Linear OAuth Access Token | linear_oauth_access_token
Lob | Lob Live API Key | lob_live_api_key
Lob | Lob Test API Key | lob_test_api_key
Mailchimp | Mailchimp API Key | mailchimp_api_key
Mailgun | Mailgun API Key | mailgun_api_key
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Mapbox | Mapbox Secret Access Token | mapbox_secret_access_token{% endif %}
MessageBird | MessageBird API Key | messagebird_api_key
Meta | Facebook Access Token | facebook_access_token
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Midtrans | Midtrans Production Server Key | midtrans_production_server_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Midtrans | Midtrans Sandbox Server Key | midtrans_sandbox_server_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
New Relic | New Relic Personal API Key | new_relic_personal_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
New Relic | New Relic REST API Key | new_relic_rest_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
New Relic | New Relic Insights Query Key | new_relic_insights_query_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
New Relic | New Relic License Key | new_relic_license_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Notion | Notion Integration Token | notion_integration_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Notion | Notion OAuth Client Secret | notion_oauth_client_secret{% endif %}
npm | npm Access Token | npm_access_token
NuGet | NuGet API Key | nuget_api_key
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Octopus Deploy | Octopus Deploy API Key | octopus_deploy_api_key{% endif %}
Onfido | Onfido Live API Token | onfido_live_api_token
Onfido | Onfido Sandbox API Token | onfido_sandbox_api_token
OpenAI | OpenAI API Key | openai_api_key
Palantir | Palantir JSON Web Token | palantir_jwt
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
PlanetScale | PlanetScale Database Password | planetscale_database_password{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
PlanetScale | PlanetScale OAuth Token | planetscale_oauth_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
PlanetScale | PlanetScale Service Token | planetscale_service_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Plivo | Plivo Auth ID | plivo_auth_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Plivo | Plivo Auth Token | plivo_auth_token{% endif %}
Postman | Postman API Key | postman_api_key
Proctorio | Proctorio Consumer Key | proctorio_consumer_key
Proctorio | Proctorio Linkage Key | proctorio_linkage_key
Proctorio | Proctorio Registration Key | proctorio_registration_key
Proctorio | Proctorio Secret Key | proctorio_secret_key
Pulumi | Pulumi Access Token | pulumi_access_token
PyPI | PyPI API Token | pypi_api_token
{%- ifversion fpt or ghec or ghes > 3.5 or ghae-issue-7375 %}
redirect.pizza | redirect.pizza API Token | redirect_pizza_api_token{% endif %}
RubyGems | RubyGems API Key | rubygems_api_key
Samsara | Samsara API Token | samsara_api_token
Samsara | Samsara OAuth Access Token | samsara_oauth_access_token
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
Segment | Segment Public API Token | segment_public_api_token{% endif %}
SendGrid | SendGrid API Key | sendgrid_api_key
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Sendinblue | Sendinblue API Key | sendinblue_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Sendinblue | Sendinblue SMTP Key | sendinblue_smtp_key{% endif %}
Shippo | Shippo Live API Token | shippo_live_api_token
Shippo | Shippo Test API Token | shippo_test_api_token
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
Shopify | Shopify App Client Credentials | shopify_app_client_credentials
Shopify | Shopify App Client Secret | shopify_app_client_secret{% endif %}
Shopify | Shopify App Shared Secret | shopify_app_shared_secret
Shopify | Shopify Access Token | shopify_access_token
Shopify | Shopify Custom App Access Token | shopify_custom_app_access_token
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
Shopify | Shopify Merchant Token | shopify_merchant_token
Shopify | Shopify Marketplace Token | shopify_marketplace_token
Shopify | Shopify Partner API Token | shopify_partner_api_token{% endif %}
Shopify | Shopify Private App Password | shopify_private_app_password
Slack | Slack API Token | slack_api_token
Slack | Slack Incoming Webhook URL | slack_incoming_webhook_url
Slack | Slack Workflow Webhook URL | slack_workflow_webhook_url
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Square | Square Access Token | square_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Square | Square Production Application Secret | square_production_application_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Square | Square Sandbox Application Secret | square_sandbox_application_secret{% endif %}
SSLMate | SSLMate API Key | sslmate_api_key
SSLMate | SSLMate Cluster Secret | sslmate_cluster_secret
Stripe | Stripe API Key | stripe_api_key
Stripe | Stripe Live API Secret Key | stripe_live_secret_key
Stripe | Stripe Test API Secret Key | stripe_test_secret_key
Stripe | Stripe Live API Restricted Key | stripe_live_restricted_key
Stripe | Stripe Test API Restricted Key | stripe_test_restricted_key
Stripe | Stripe Webhook Signing Secret | stripe_webhook_signing_secret
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Supabase | Supabase Service Key | supabase_service_key{% endif %}
Tableau | Tableau Personal Access Token | tableau_personal_access_token
Telegram | Telegram Bot Token | telegram_bot_token
Tencent Cloud | Tencent Cloud Secret ID | tencent_cloud_secret_id
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Twilio | Twilio Access Token | twilio_access_token{% endif %}
Twilio | Twilio Account String Identifier | twilio_account_sid
Twilio | Twilio API Key | twilio_api_key
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Typeform | Typeform Personal Access Token | typeform_personal_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
WorkOS | WorkOS Production API Key | workos_production_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
WorkOS | WorkOS Staging API Key | workos_staging_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Yandex | Yandex.Cloud API Key | yandex_cloud_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Yandex | Yandex.Cloud IAM Cookie | yandex_cloud_iam_cookie{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Yandex | Yandex.Cloud IAM Token | yandex_cloud_iam_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Yandex | Yandex.Dictionary API Key | yandex_dictionary_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
Yandex | Yandex.Cloud Access Secret | yandex_iam_access_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Yandex | Yandex.Predictor API Key | yandex_predictor_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Yandex | Yandex.Translate API Key | yandex_translate_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7456 %}
Zuplo | Zuplo Consumer API Key | zuplo_consumer_api_key{% endif %}
