| Provider | サポートされているシークレット | APIスラッグ |
| -------- | --------------- | ------- |
|          |                 |         |
{%- ifversion fpt or ghes > 2.22 or ghae %}
Adafruit IO | Adafruit IO Key | adafruit_io_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Adobe | Adobe Device Token | adobe_device_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Adobe | Adobe Service Token | adobe_service_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Adobe | Adobe Short-Lived Access Token | adobe_short_lived_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Adobe | Adobe JSON Web Token | adobe_jwt{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Alibaba Cloud | Alibaba Cloud Access Key ID | alibaba_cloud_access_key_id{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Alibaba Cloud | Alibaba Cloud Access Key Secret | alibaba_cloud_access_key_secret{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Amazon Web Services (AWS) | Amazon AWS Access Key ID | aws_access_key_id{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Amazon Web Services (AWS) | Amazon AWS Secret Access Key | aws_secret_access_key{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
Amazon Web Services (AWS) | Amazon AWS Session Token | aws_session_token{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
Amazon Web Services (AWS) | Amazon AWS Temporary Access Key ID | aws_temporary_access_key_id{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Asana | Asana Personal Access Token | asana_personal_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Atlassian | Atlassian API Token | atlassian_api_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Atlassian | Atlassian JSON Web Token | atlassian_jwt{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Atlassian | Bitbucket Server Personal Access Token | bitbucket_server_personal_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Azure | Azure DevOps Personal Access Token | azure_devops_personal_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Azure | Azure SAS Token | azure_sas_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Azure | Azure Service Management Certificate | azure_management_certificate{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Azure | Azure SQL Connection String | azure_sql_connection_string{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Azure | Azure Storage Account Key | azure_storage_account_key{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
Beamer | Beamer API Key | beamer_api_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Checkout.com | Checkout.com Production Secret Key | checkout_production_secret_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Checkout.com | Checkout.com Test Secret Key | checkout_test_secret_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Clojars | Clojars Deploy Token | clojars_deploy_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
CloudBees CodeShip | CloudBees CodeShip Credential | codeship_credential{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
Contentful | Contentful Personal Access Token | contentful_personal_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Databricks | Databricks Access Token | databricks_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Discord | Discord Bot Token | discord_bot_token{% endif %}
{%- ifversion fpt or ghes > 3.0 or ghae %}
Doppler | Doppler Personal Token | doppler_personal_token{% endif %}
{%- ifversion fpt or ghes > 3.0 or ghae %}
Doppler | Doppler Service Token | doppler_service_token{% endif %}
{%- ifversion fpt or ghes > 3.0 or ghae %}
Doppler | Doppler CLI Token | doppler_cli_token{% endif %}
{%- ifversion fpt or ghes > 3.0 or ghae %}
Doppler | Doppler SCIM Token | doppler_scim_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Doppler | Doppler Audit Token | doppler_audit_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Dropbox | Dropbox Access Token | dropbox_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Dropbox | Dropbox Short Lived Access Token | dropbox_short_lived_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Duffel | Duffel Live Access Token | duffel_live_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Duffel | Duffel Test Access Token | duffel_test_access_token{% endif %}
{%- ifversion fpt or ghes > 3.0 or ghae %}
Dynatrace | Dynatrace Access Token | dynatrace_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Dynatrace | Dynatrace Internal Token | dynatrace_internal_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
EasyPost | EasyPost Production API Key | easypost_production_api_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
EasyPost | EasyPost Test API Key | easypost_test_api_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Facebook | Facebook Access Token | facebook_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Fastly | Fastly API Token | fastly_api_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Finicity | Finicity App Key | finicity_app_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Flutterwave | Flutterwave Live API Secret Key | flutterwave_live_api_secret_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Flutterwave | Flutterwave Test API Secret Key | flutterwave_test_api_secret_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Frame.io | Frame.io JSON Web Token | frameio_jwt{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Frame.io| Frame.io Developer Token | frameio_developer_token{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
FullStory | FullStory API Key | fullstory_api_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
GitHub | GitHub個人アクセストークン | github_personal_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
GitHub | GitHub OAuthアクセストークン | github_oauth_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
GitHub | GitHubリフレッシュトークン | github_refresh_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
GitHub | GitHub Appインストールアクセストークン | github_app_installation_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
GitHub | GitHub SSH秘密鍵 | github_ssh_private_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
GoCardless | GoCardless Live Access Token | gocardless_live_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
GoCardless | GoCardless Sandbox Access Token | gocardless_sandbox_access_token{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
Google | Firebase Cloud Messaging Server Key | firebase_cloud_messaging_server_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Google | Google API Key | google_api_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Google | Google Cloud Private Key ID | google_cloud_private_key_id{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
Google | Google Cloud Storage Access Key Secret | google_cloud_storage_access_key_secret{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
Google | Google Cloud Storage Service Account Access Key ID | google_cloud_storage_service_account_access_key_id{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
Google | Google Cloud Storage User Access Key ID | google_cloud_storage_user_access_key_id{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Grafana | Grafana API Key | grafana_api_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Hashicorp Terraform | Terraform Cloud / Enterprise API Token | terraform_api_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Hubspot | Hubspot API Key | hubspot_api_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Intercom | Intercom Access Token | intercom_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Ionic | Ionic Personal Access Token | ionic_personal_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Ionic | Ionic Refresh Token | ionic_refresh_token{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
JFrog | JFrog Platform Access Token | jfrog_platform_access_token{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
JFrog | JFrog Platform API Key | jfrog_platform_api_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Linear | Linear API Key | linear_api_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Linear | Linear OAuth Access Token | linear_oauth_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Lob | Lob Live API Key | lob_live_api_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Lob | Lob Test API Key | lob_test_api_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Mailchimp | Mailchimp API Key | mailchimp_api_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Mailgun | Mailgun API Key | mailgun_api_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
MessageBird | MessageBird API Key | messagebird_api_key{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
New Relic | New Relic Personal API Key | new_relic_personal_api_key{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
New Relic | New Relic REST API Key | new_relic_rest_api_key{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
New Relic | New Relic Insights Query Key | new_relic_insights_query_key{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
New Relic | New Relic License Key | new_relic_license_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
npm | npm Access Token | npm_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
NuGet | NuGet API Key | nuget_api_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Onfido | Onfido Live API Token | onfido_live_api_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Onfido | Onfido Sandbox API Token | onfido_sandbox_api_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
OpenAI | OpenAI API Key | openai_api_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Palantir | Palantir JSON Web Token | palantir_jwt{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
PlanetScale | PlanetScale Database Password | planetscale_database_password{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
PlanetScale | PlanetScale OAuth Token | planetscale_oauth_token{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
PlanetScale | PlanetScale Service Token | planetscale_service_token{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
Plivo | Plivo Auth ID | plivo_auth_id{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
Plivo | Plivo Auth Token | plivo_auth_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Postman | Postman API Key | postman_api_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Proctorio | Proctorio Consumer Key | proctorio_consumer_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Proctorio | Proctorio Linkage Key | proctorio_linkage_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Proctorio | Proctorio Registration Key | proctorio_registration_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Proctorio | Proctorio Secret Key | proctorio_secret_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Pulumi | Pulumi Access Token | pulumi_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
PyPI | PyPI API Token | pypi_api_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
RubyGems | RubyGems API Key | rubygems_api_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Samsara | Samsara API Token | samsara_api_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Samsara | Samsara OAuth Access Token | samsara_oauth_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
SendGrid | SendGrid API Key | sendgrid_api_key{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
Sendinblue | Sendinblue API Key | sendinblue_api_key{% endif %}
{%- ifversion fpt or ghes > 3.2 %}
Sendinblue | Sendinblue SMTP Key | sendinblue_smtp_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Shippo | Shippo Live API Token | shippo_live_api_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Shippo | Shippo Test API Token | shippo_test_api_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Shopify | Shopify App Shared Secret | shopify_app_shared_secret{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Shopify | Shopify Access Token | shopify_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Shopify | Shopify Custom App Access Token | shopify_custom_app_access_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Shopify | Shopify Private App Password | shopify_private_app_password{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Slack | Slack API Token | slack_api_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Slack | Slack Incoming Webhook URL | slack_incoming_webhook_url{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Slack | Slack Workflow Webhook URL | slack_workflow_webhook_url{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
SSLMate | SSLMate API Key | sslmate_api_key{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
SSLMate | SSLMate Cluster Secret | sslmate_cluster_secret{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Stripe | Stripe API Key | stripe_api_key{% endif %}
{%- ifversion fpt or ghes > 3.0 or ghae %}
Stripe | Stripe Live API Secret Key | stripe_live_secret_key{% endif %}
{%- ifversion fpt or ghes > 3.0 or ghae %}
Stripe | Stripe Test API Secret Key | stripe_test_secret_key{% endif %}
{%- ifversion fpt or ghes > 3.0 or ghae %}
Stripe | Stripe Live API Restricted Key | stripe_live_restricted_key{% endif %}
{%- ifversion fpt or ghes > 3.0 or ghae %}
Stripe | Stripe Test API Restricted Key | stripe_test_restricted_key{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Stripe | Stripe Webhook Signing Secret | stripe_webhook_signing_secret{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Tableau | Tableau Personal Access Token | tableau_personal_access_token{% endif %}
{%- ifversion fpt or ghes > 3.1 or ghae-next %}
Telegram | Telegram Bot Token | telegram_bot_token{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Tencent Cloud | Tencent Cloud Secret ID | tencent_cloud_secret_id{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Twilio | Twilio Account String Identifier | twilio_account_sid{% endif %}
{%- ifversion fpt or ghes > 2.22 or ghae %}
Twilio | Twilio API Key | twilio_api_key{% endif %}
