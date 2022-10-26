Provider | Supported secret | Secret type
--- | --- | ---
Adafruit IO | Adafruit IO key | adafruit_io_key
Alibaba Cloud | Alibaba Cloud access key ID with Alibaba Cloud access key secret| alibaba_cloud_access_key_id </br>alibaba_cloud_access_key_secret
Amazon | Amazon OAuth client ID with Amazon OAuth client secret | amazon_oauth_client_id </br>amazon_oauth_client_secret
Amazon Web Services (AWS) | Amazon AWS access key ID with Amazon AWS secret access key | aws_access_key_id </br>aws_secret_access_key
Amazon Web Services (AWS) | Amazon AWS session token with Amazon AWS temporary access key ID and Amazon AWS secret access key | aws_session_token </br>aws_temporary_access_key_id </br>aws_secret_access_key
Asana | Asana {% data variables.product.pat_generic %} | asana_personal_access_token
Atlassian | Bitbucket server {% data variables.product.pat_generic %} | bitbucket_server_personal_access_token
Azure | Azure Active Directory application secret | azure_active_directory_application_secret
{%- ifversion fpt or ghec or ghes > 3.8 or ghae > 3.8 %}
Azure | Azure Batch key identifiable | azure_batch_key_identifiable{% endif %}
Azure | Azure Cache for Redis access key | azure_cache_for_redis_access_key
{%- ifversion fpt or ghec or ghes > 3.8 or ghae > 3.8 %}
Azure | Azure CosmosDB key identifiable | azure_cosmosdb_key_identifiable{% endif %}
Azure | Azure DevOps {% data variables.product.pat_generic %} | azure_devops_personal_access_token
{%- ifversion fpt or ghec or ghes > 3.8 or ghae > 3.8 %}
Azure | Azure ML studio (classic) web service key | azure_ml_studio_classic_web_service_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.6 or ghae > 3.6 %}
Azure | Azure storage account key | azure_storage_account_key{% endif %}
Checkout.com | Checkout.com production secret key | checkout_production_secret_key
Clojars | Clojars deploy token | clojars_deploy_token
Databricks | Databricks access token | databricks_access_token
{%- ifversion fpt or ghec or ghes > 3.8 or ghae > 3.8 %}
DevCycle | DevCycle client API key | devcycle_client_api_key
DevCycle | DevCycle server API key | devcycle_server_api_key
DevCycle | DevCycle mobile API key | devcycle_mobile_api_key{% endif %}
DigitalOcean | DigitalOcean {% data variables.product.pat_generic %} | digitalocean_personal_access_token
DigitalOcean | DigitalOcean OAuth token | digitalocean_oauth_token
DigitalOcean | DigitalOcean refresh token | digitalocean_refresh_token
DigitalOcean | DigitalOcean system token | digitalocean_system_token
Discord | Discord bot token | discord_bot_token
Doppler | Doppler personal token | doppler_personal_token
Doppler | Doppler service token | doppler_service_token
Doppler | Doppler CLI token | doppler_cli_token
Doppler | Doppler SCIM token | doppler_scim_token
Doppler | Doppler audit token | doppler_audit_token
Dropbox | Dropbox short lived access token | dropbox_short_lived_access_token
Duffel | Duffel live access token | duffel_live_access_token
EasyPost | EasyPost production API key | easypost_production_api_key
Flutterwave | Flutterwave live API secret key | flutterwave_live_api_secret_key
Fullstory | FullStory API key | fullstory_api_key
GitHub | GitHub {% data variables.product.pat_generic %} | github_personal_access_token
GitHub | GitHub OAuth access token | github_oauth_access_token
GitHub | GitHub refresh token | github_refresh_token
GitHub | GitHub app installation access token | github_app_installation_access_token
GitHub | GitHub SSH private key | github_ssh_private_key
Google | Google Cloud Storage service account access key ID with Google Cloud Storage access key secret | google_cloud_storage_service_account_access_key_id </br>google_cloud_storage_access_key_secret
Google | Google Cloud Storage user access key ID with Google Cloud Storage access key secret | google_cloud_storage_user_access_key_id </br>google_cloud_storage_access_key_secret
Google | Google OAuth client ID with Google OAuth client secret | google_oauth_client_id </br>google_oauth_client_secret
Grafana | Grafana API key | grafana_api_key
Hubspot | Hubspot API key | hubspot_api_key
Intercom | Intercom access token | intercom_access_token
{%- ifversion fpt or ghec or ghes > 3.6 or ghae > 3.6 %}
JFrog | JFrog platform access token | jfrog_platform_access_token
JFrog | JFrog platform API key | jfrog_platform_api_key{% endif %}
Ionic | Ionic {% data variables.product.pat_generic %} | ionic_personal_access_token
Ionic | Ionic refresh token | ionic_refresh_token
Linear | Linear API key | linear_api_key
Linear | Linear OAuth access token | linear_oauth_access_token
{%- ifversion fpt or ghec or ghes > 3.8 or ghae > 3.8 %}
LogicMonitor | LogicMonitor Bearer token | logicmonitor_bearer_token
LogicMonitor | LogicMonitor LMV1 access key | logicmonitor_lmv1_access_key{% endif %}
Midtrans | Midtrans production server key | midtrans_production_server_key
New Relic | New Relic personal API Key | new_relic_personal_api_key
New Relic | New Relic REST API key | new_relic_rest_api_key
New Relic | New Relic Insights query key | new_relic_insights_query_key
npm | npm access token | npm_access_token
NuGet | NuGet API key | nuget_api_key
Onfido | Onfido live API token | onfido_live_api_token
OpenAI | OpenAI API key | openai_api_key
PlanetScale | PlanetScale database password | planetscale_database_password
PlanetScale | PlanetScale OAuth token | planetscale_oauth_token
PlanetScale | PlanetScale service token | planetscale_service_token
Postman | Postman API key | postman_api_key
{%- ifversion fpt or ghec or ghes > 3.6 or ghae > 3.6 %}
Prefect | Prefect server API key | prefect_server_api_key
Prefect | Prefect user API key | prefect_user_api_key{% endif %}
Proctorio | Proctorio secret key | proctorio_secret_key
{%- ifversion fpt or ghec or ghes > 3.6 or ghae > 3.6 %}
ReadMe | ReadMe API access key | readmeio_api_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
redirect.pizza | redirect.pizza API token | redirect_pizza_api_token{% endif %}
Samsara | Samsara API token | samsara_api_token
Samsara | Samsara OAuth access token | samsara_oauth_access_token
SendGrid | SendGrid API key | sendgrid_api_key
Sendinblue | Sendinblue API key | sendinblue_api_key
Sendinblue | Sendinblue SMTP key | sendinblue_smtp_key
Shippo | Shippo live API token | shippo_live_api_token
Shopify | Shopify app shared secret | shopify_app_shared_secret
Shopify | Shopify access token | shopify_access_token
Slack | Slack API token | slack_api_token
Stripe | Stripe live API secret key | stripe_api_key
Tencent Cloud | Tencent Cloud secret ID | tencent_cloud_secret_id
Typeform | Typeform {% data variables.product.pat_generic %} | typeform_personal_access_token
{%- ifversion fpt or ghec or ghes > 3.6 or ghae > 3.6 %}
Uniwise | WISEflow API key | wiseflow_api_key{% endif %}
WorkOS | WorkOS production API key | workos_production_api_key
{%- ifversion fpt or ghec or ghes > 3.6 or ghae > 3.6 %}
Zuplo | Zuplo consumer API key | zuplo_consumer_api_key{% endif %}
