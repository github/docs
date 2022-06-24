| 提供者         | 支持的密钥          | 密钥类型              |
| ----------- | -------------- | ----------------- |
| Adafruit IO | Adafruit IO 密钥 | adafruit_io_key |
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Adobe | Adobe Device Token | adobe_device_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Adobe | Adobe Service Token | adobe_service_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Adobe | Adobe Short-Lived Access Token | adobe_short_lived_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Adobe | Adobe JSON Web Token | adobe_jwt{% endif %} Alibaba Cloud | Alibaba Cloud 访问密钥 ID | alibaba_cloud_access_key_id Alibaba Cloud | Alibaba Cloud 访问密钥机密 | alibaba_cloud_access_key_secret
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Amazon | Amazon OAuth 客户端 ID | amazon_oauth_client_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Amazon | Amazon OAuth 客户端机密 | amazon_oauth_client_secret{% endif %} Amazon Web Services (AWS) | Amazon AWS 访问密钥 ID | aws_access_key_id Amazon Web Services (AWS) | Amazon AWS 机密访问密钥 | aws_secret_access_key
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Amazon Web Services (AWS) | Amazon AWS Session Token | aws_session_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Amazon Web Services (AWS) | Amazon AWS Temporary Access Key ID | aws_temporary_access_key_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Asana | Asana 个人访问令牌 | asana_personal_access_token{% endif %} Atlassian | Atlassian API 令牌 | atlassian_api_token Atlassian | Atlassian JSON Web 令牌 | atlassian_jwt
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Atlassian | Bitbucket Server Personal Access Token | bitbucket_server_personal_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Azure | Azure Active Directory 应用程序密钥 | azure_active_directory_application_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Azure | Azure Cache for Redis 访问密钥 | azure_cache_for_redis_access_key{% endif %} Azure | Azure DevOps 个人访问令牌 | azure_devops_personal_access_token Azure | Azure SAS 令牌 | azure_sas_token Azure | Azure 服务管理凭证 | azure_management_certificate
{%- ifversion ghes < 3.4 or ghae or ghae-issue-5342 %}
Azure | Azure SQL 连接字符串 | azure_sql_connection_string{% endif %} Azure | Azure 存储帐户密钥 | azure_storage_account_key
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Beamer | Beamer API Key | beamer_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Checkout.com | Checkout.com Production Secret Key | checkout_production_secret_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Checkout.com | Checkout.com 测试密钥 | checkout_test_secret_key{% endif %} Clojars | Clojars 部署令牌 | clojars_deploy_token
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
CloudBees CodeShip | CloudBees CodeShip Credential | codeship_credential{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Contentful | Contentful 个人访问令牌 | contentful_personal_access_token{% endif %} Databricks | Databricks 访问令牌 | databricks_access_token
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
DigitalOcean | DigitalOcean 个人访问令牌 | digitalocean_personal_access_token DigitalOcean | DigitalOcean OAuth 令牌 | digitalocean_oauth_token DigitalOcean | DigitalOcean 更新令牌 | digitalocean_refresh_token DigitalOcean | DigitalOcean 系统令牌 | digitalocean_system_token{% endif %} Discord | Discord Bot 令牌 | discord_bot_token Doppler | Doppler 个人令牌 | doppler_personal_token Doppler | Doppler 服务令牌 | doppler_service_token Doppler | Doppler CLI 令牌 | doppler_cli_token Doppler | Doppler SCIM 令牌 | doppler_scim_token
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Doppler | Doppler 审核令牌 | doppler_audit_token{% endif %} Dropbox | Dropbox 访问令牌 | dropbox_access_token Dropbox | Dropbox Short Lived 访问令牌 | dropbox_short_lived_access_token
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Duffel | Duffel Live Access Token | duffel_live_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Duffel | Duffel 测试访问令牌 | duffel_test_access_token{% endif %} Dynatrace | Dynatrace 访问令牌 | dynatrace_access_token Dynatrace | Dynatrace 内部令牌 | dynatrace_internal_token
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
EasyPost | EasyPost Production API Key | easypost_production_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
EasyPost | EasyPost Test API Key | easypost_test_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Fastly | Fastly API 令牌 | fastly_api_token{% endif %} Finicity | Finicity App 令牌 | finicity_app_key
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Flutterwave | Flutterwave Live API Secret Key | flutterwave_live_api_secret_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Flutterwave | Flutterwave 测试 API 密钥 | flutterwave_test_api_secret_key{% endif %} Frame.io | Frame.io JSON Web 令牌 | frameio_jwt Frame.io| Frame.io Developer 令牌 | frameio_developer_token
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
FullStory | FullStory API Key | fullstory_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
GitHub | GitHub Personal Access Token | github_personal_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
GitHub | GitHub OAuth Access Token | github_oauth_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
GitHub | GitHub Refresh Token | github_refresh_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
GitHub | GitHub App 安装访问令牌 | github_app_installation_access_token{% endif %} GitHub | GitHub SSH 私钥 | github_ssh_private_key
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
GitLab | GitLab 访问令牌 | gitlab_access_token{% endif %} GoCardless | GoCardless Live 访问令牌 | gocardless_live_access_token GoCardless | GoCardless Sandbox 访问令牌 | gocardless_sandbox_access_token
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Google | Firebase Cloud Messaging Server 密钥 | firebase_cloud_messaging_server_key{% endif %} Google | Google API 密钥 | google_api_key Google | Google Cloud 私钥 ID | google_cloud_private_key_id
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Google | Google Cloud Storage Access Key Secret | google_cloud_storage_access_key_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Google | Google Cloud Storage Service Account Access Key ID | google_cloud_storage_service_account_access_key_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Google | Google Cloud Storage User Access Key ID | google_cloud_storage_user_access_key_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Google | Google OAuth 访问令牌 | google_oauth_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Google | Google OAuth 客户端 ID | google_oauth_client_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Google | Google OAuth 客户端密钥 | google_oauth_client_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Google | Google OAuth 更新令牌 | google_oauth_refresh_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Grafana | Grafana API 密钥 | grafana_api_key{% endif %} HashiCorp | Terraform Cloud / Enterprise API 令牌 | terraform_api_token HashiCorp | HashiCorp Vault Batch 令牌 | hashicorp_vault_batch_token HashiCorp | HashiCorp Vault Service 令牌 | hashicorp_vault_service_token Hubspot | Hubspot API 令牌 | hubspot_api_key
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Intercom | Intercom Access Token | intercom_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Ionic | Ionic Personal Access Token | ionic_personal_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Ionic | Ionic Refresh Token | ionic_refresh_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
JD Cloud | JD Cloud 访问密钥 | jd_cloud_access_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
JFrog | JFrog Platform Access Token | jfrog_platform_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
JFrog | JFrog Platform API Key | jfrog_platform_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Linear | Linear API Key | linear_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Linear | Linear OAuth Access Token | linear_oauth_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Lob | Lob Live API Key | lob_live_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Lob | Lob Test API 密钥 | lob_test_api_key{% endif %} Mailchimp | Mailchimp API 密钥 | mailchimp_api_key Mailgun | Mailgun API 密钥 | mailgun_api_key
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Mapbox | Mapbox 密钥访问令牌 | mapbox_secret_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
MessageBird | MessageBird API Key | messagebird_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Meta | Facebook 访问令牌 | facebook_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Midtrans | Midtrans Production Server 密钥 | midtrans_production_server_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Midtrans | Midtrans Sandbox Server 密钥 | midtrans_sandbox_server_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
New Relic | New Relic Personal API Key | new_relic_personal_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
New Relic | New Relic REST API Key | new_relic_rest_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
New Relic | New Relic Insights Query Key | new_relic_insights_query_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
New Relic | New Relic License Key | new_relic_license_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Notion | Notion 集成令牌 | notion_integration_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Notion | Notion OAuth 客户端密钥 | notion_oauth_client_secret{% endif %} npm | npm 访问令牌 | npm_access_token NuGet | NuGet API 密钥 | nuget_api_key
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Octopus Deploy | Octopus Deploy API 密钥 | octopus_deploy_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Onfido | Onfido Live API Token | onfido_live_api_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Onfido | Onfido Sandbox API Token | onfido_sandbox_api_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
OpenAI | OpenAI API 密钥 | openai_api_key{% endif %} Palantir | Palantir JSON Web 令牌 | palantir_jwt
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
PlanetScale | PlanetScale Database Password | planetscale_database_password{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
PlanetScale | PlanetScale OAuth Token | planetscale_oauth_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
PlanetScale | PlanetScale Service Token | planetscale_service_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Plivo | Plivo Auth ID | plivo_auth_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Plivo | Plivo 验证令牌 | plivo_auth_token{% endif %} Postman | Postman API 密钥 | postman_api_key Proctorio | Proctorio 消费者密钥 | proctorio_consumer_key Proctorio | Proctorio 链接密钥 | proctorio_linkage_key Proctorio | Proctorio 注册密钥 | proctorio_registration_key Proctorio | Proctorio 密钥 | proctorio_secret_key Pulumi | Pulumi 访问令牌 | pulumi_access_token
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
PyPI | PyPI API Token | pypi_api_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.5 or ghae-issue-7375 %}
redirect.pizza | redirect.pizza API Token | redirect_pizza_api_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
RubyGems | RubyGems API 密钥 | rubygems_api_key{% endif %} Samsara | Samsara API 令牌 | samsara_api_token Samsara | Samsara OAuth 访问令牌 | samsara_oauth_access_token
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
Segment | Segment 公共 API 令牌 | segment_public_api_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
SendGrid | SendGrid API Key | sendgrid_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Sendinblue | Sendinblue API Key | sendinblue_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Sendinblue | Sendinblue SMTP Key | sendinblue_smtp_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Shippo | Shippo Live API Token | shippo_live_api_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Shippo | Shippo Test API Token | shippo_test_api_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
Shopify | Shopify App 客户端凭据 | shopify_app_client_credentials Shopify | Shopify App 客户端密钥 | shopify_app_client_secret{% endif %} Shopify | Shopify App 共享密钥 | shopify_app_shared_secret Shopify | Shopify 访问令牌 | shopify_access_token Shopify | Shopify 自定义 App 访问令牌 | shopify_custom_app_access_token
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
Shopify | Shopify 商家令牌 | shopify_merchant_token Shopify | Shopify 市场令牌 | shopify_marketplace_token Shopify | Shopify 合作伙伴 API 令牌 | shopify_partner_api_token{% endif %} Shopify | Shopify 私人 App 密码 | shopify_private_app_password Slack | Slack API 令牌 | slack_api_token Slack | Slack 传入 Web 挂钩 URL | slack_incoming_webhook_url Slack | Slack 工作流程 Web 挂钩 URL | slack_workflow_webhook_url
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Square | Square 访问令牌 | square_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Square | Square Production Application 密钥 | square_production_application_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Square | Square Sandbox 应用程序密钥 | square_sandbox_application_secret{% endif %} SSLMate | SSLMate API 密钥 | sslmate_api_key SSLMate | SSLMate 群集密钥 | sslmate_cluster_secret Stripe | Stripe API 密钥 | stripe_api_key Stripe | Stripe Live API 密钥 | stripe_live_secret_key Stripe | Stripe Test API 密钥 | stripe_test_secret_key Stripe | Stripe Live API 限制密钥 | stripe_live_restricted_key Stripe | Stripe Test API 限制密钥 | stripe_test_restricted_key
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Stripe | Stripe Webhook Signing Secret | stripe_webhook_signing_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Supabase | Supabase 服务密钥 | supabase_service_key{% endif %} Tableau | Tableau 个人访问令牌 | tableau_personal_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
Telegram | Telegram Bot 令牌 | telegram_bot_token{% endif %} Tencent Cloud | Tencent Cloud 密钥 ID | tencent_cloud_secret_id
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Twilio | Twilio 访问令牌 | twilio_access_token{% endif %} Twilio | Twilio Account String 标识 | twilio_account_sid Twilio | Twilio API 密钥 | twilio_api_key
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Typeform | Typeform 个人访问令牌 | typeform_personal_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
WorkOS | WorkOS Production API 密钥 | workos_production_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
WorkOS | WorkOS Staging API 密钥 | workos_staging_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Yandex | Yandex.Cloud API 密钥 | yandex_cloud_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Yandex | Yandex.Cloud IAM Cookie | yandex_cloud_iam_cookie{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Yandex | Yandex.Cloud IAM 令牌 | yandex_cloud_iam_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Yandex | Yandex.Dictionary API 密钥 | yandex_dictionary_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
Yandex | Yandex.Cloud 访问密钥 | yandex_iam_access_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Yandex | Yandex.Predictor API 密钥 | yandex_predictor_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Yandex | Yandex.Translate API 密钥 | yandex_translate_api_key{% endif %}
