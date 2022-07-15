| 提供者           | 支持的密钥             | 密钥类型                                |
| ------------- | ----------------- | ----------------------------------- |
| Adafruit IO   | Adafruit IO 密钥    | adafruit_io_key                   |
| Adobe         | Adobe 设备令牌        | adobe_device_token                |
| Adobe         | Adobe 服务令牌        | adobe_service_token               |
| Adobe         | Adobe 短暂访问令牌      | adobe_short_lived_access_token  |
| Adobe         | Adobe JSON Web 令牌 | adobe_jwt                           |
| Alibaba Cloud | Alibaba 云访问密钥 ID  | alibaba_cloud_access_key_id     |
| Alibaba Cloud | Alibaba 云访问密钥机密   | alibaba_cloud_access_key_secret |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Amazon | Amazon OAuth 客户端 ID | amazon_oauth_client_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Amazon | Amazon OAuth 客户端机密 | amazon_oauth_client_secret{% endif %} Amazon Web Services (AWS) | Amazon AWS 访问密钥 ID | aws_access_key_id Amazon Web Services (AWS) | Amazon AWS 机密访问密钥 | aws_secret_access_key
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Amazon Web Services (AWS) | Amazon AWS Session Token | aws_session_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Amazon Web Services (AWS) | Amazon AWS 临时访问密钥 ID | aws_temporary_access_key_id{% endif %} Asana | Asana 个人访问令牌 | asana_personal_access_token Atlassian | Atlassian API 令牌 | atlassian_api_token Atlassian | Atlassian JSON Web 令牌 | atlassian_jwt Atlassian | Bitbucket Server 个人访问令牌 | bitbucket_server_personal_access_token
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Azure | Azure Active Directory 应用程序密钥 | azure_active_directory_application_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Azure | Azure Cache for Redis 访问密钥 | azure_cache_for_redis_access_key{% endif %} Azure | Azure DevOps 个人访问令牌 | azure_devops_personal_access_token Azure | Azure SAS 令牌 | azure_sas_token Azure | Azure 服务管理凭证 | azure_management_certificate
{%- ifversion ghes < 3.4 or ghae or ghae-issue-5342 %}
Azure | Azure SQL 连接字符串 | azure_sql_connection_string{% endif %} Azure | Azure 存储帐户密钥 | azure_storage_account_key
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Beamer | Beamer API 密钥 | beamer_api_key{% endif %} Checkout.com | Checkout.com 生产密钥 | checkout_production_secret_key Checkout.com | Checkout.com 测试密钥 | checkout_test_secret_key Clojars | Clojars 部署密钥 | clojars_deploy_token CloudBees CodeShip | CloudBees CodeShip 凭据 | codeship_credential
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Contentful | Contentful 个人访问令牌 | contentful_personal_access_token{% endif %} Databricks | Databricks 访问令牌 | databricks_access_token
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
DigitalOcean | DigitalOcean 个人访问令牌 | digitalocean_personal_access_token DigitalOcean | DigitalOcean OAuth 令牌 | digitalocean_oauth_token DigitalOcean | DigitalOcean 刷新令牌 | digitalocean_refresh_token DigitalOcean | DigitalOcean 系统令牌 | digitalocean_system_token{% endif %} Discord | Discord Bot 令牌 | discord_bot_token Doppler | Doppler 个人令牌 | doppler_personal_token Doppler | Doppler 服务令牌 | doppler_service_token Doppler | Doppler CLI 令牌 | doppler_cli_token Doppler | Doppler SCIM 令牌 | doppler_scim_token Doppler | Doppler 审计令牌 | doppler_audit_token Dropbox | Dropbox 访问令牌 | dropbox_access_token Dropbox | Dropbox Short Lived 访问令牌 | dropbox_short_lived_access_token Duffel | Duffel Live 访问令牌 | duffel_live_access_token Duffel | Duffel 测试访问令牌 | duffel_test_access_token Dynatrace | Dynatrace 访问令牌 | dynatrace_access_token Dynatrace | Dynatrace 内部令牌 | dynatrace_internal_token EasyPost | EasyPost 生产 API 密钥 | easypost_production_api_key EasyPost | EasyPost 测试 API 密钥 | easypost_test_api_key Fastly | Fastly API 令牌 | fastly_api_token Finicity | Finicity App 密钥 | finicity_app_key Flutterwave | Flutterwave Live API 密钥 | flutterwave_live_api_secret_key Flutterwave | Flutterwave 测试 API 密钥 | flutterwave_test_api_secret_key Frame.io | Frame.io JSON Web 令牌 | frameio_jwt Frame.io| Frame.io Developer 令牌 | frameio_developer_token
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
FullStory | FullStory API 密钥 | fullstory_api_key{% endif %} GitHub | GitHub 个人访问令牌 | github_personal_access_token GitHub | GitHub OAuth 访问令牌 | github_oauth_access_token GitHub | GitHub 刷新令牌 | github_refresh_token GitHub | GitHub App 安装访问令牌 | github_app_installation_access_token GitHub | GitHub SSH 私钥 | github_ssh_private_key
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
Google | Google OAuth 刷新令牌 | google_oauth_refresh_token{% endif %} Grafana | Grafana API 密钥 | grafana_api_key HashiCorp | Terraform Cloud / Enterprise API 令牌 | terraform_api_token HashiCorp | HashiCorp Vault 批次令牌 | hashicorp_vault_batch_token HashiCorp | HashiCorp Vault 服务令牌 | hashicorp_vault_service_token Hubspot | Hubspot API 密钥 | hubspot_api_key Intercom | Intercom 访问令牌 | intercom_access_token Ionic | Ionic 个人访问令牌 | ionic_personal_access_token Ionic | Ionic 刷新令牌 | ionic_refresh_token
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
JD Cloud | JD Cloud 访问密钥 | jd_cloud_access_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
JFrog | JFrog Platform Access Token | jfrog_platform_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
JFrog | JFrog 平台 API 密钥 | jfrog_platform_api_key{% endif %} Linear | Linear API 密钥 | linear_api_key Linear | Linear OAuth 访问令牌 | linear_oauth_access_token Lob | Lob Live API 密钥 | lob_live_api_key Lob | Lob 测试 API 密钥 | lob_test_api_key Mailchimp | Mailchimp API 密钥 | mailchimp_api_key Mailgun | Mailgun API 密钥 | mailgun_api_key
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Mapbox | Mapbox 秘密访问令牌 | mapbox_secret_access_token{% endif %} MessageBird | MessageBird API 密钥 | messagebird_api_key Meta | Facebook 访问令牌 | facebook_access_token
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
Octopus Deploy | Octopus 部署 API 密钥 | octopus_deploy_api_key{% endif %} Onfido | Onfido Live API 令牌 | onfido_live_api_token Onfido | Onfido Sandbox API 令牌 | onfido_sandbox_api_token OpenAI | OpenAI API 密钥 | openai_api_key Palantir | Palantir JSON Web 令牌 | palantir_jwt
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
PlanetScale | PlanetScale Database Password | planetscale_database_password{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
PlanetScale | PlanetScale OAuth Token | planetscale_oauth_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
PlanetScale | PlanetScale Service Token | planetscale_service_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Plivo | Plivo Auth ID | plivo_auth_id{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Plivo | Plivo 验证令牌 | plivo_auth_token{% endif %} Postman | Postman API 密钥 | postman_api_key Proctorio | Proctorio 消费者密钥 | proctorio_consumer_key Proctorio | Proctorio 链接密钥 | proctorio_linkage_key Proctorio | Proctorio 注册密钥 | proctorio_registration_key Proctorio | Proctorio 密钥 | proctorio_secret_key Pulumi | Pulumi 访问令牌 | pulumi_access_token PyPI | PyPI API 令牌 | pypi_api_token
{%- ifversion fpt or ghec or ghes > 3.5 or ghae-issue-7375 %}
redirect.pizza | redirect.pizza API 令牌 | redirect_pizza_api_token{% endif %} RubyGems | RubyGems API 密钥 | rubygems_api_key Samsara | Samsara API 令牌 | samsara_api_token Samsara | Samsara OAuth 访问令牌 | samsara_oauth_access_token
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
Segment | 区段公共 API 令牌 | segment_public_api_token{% endif %} SendGrid | SendGrid API 密钥 | sendgrid_api_key
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Sendinblue | Sendinblue API Key | sendinblue_api_key{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
Sendinblue | Sendinblue SMTP 密钥 | sendinblue_smtp_key{% endif %} Shippo | Shippo Live API 令牌 | shippo_live_api_token Shippo | Shippo Test API 令牌 | shippo_test_api_token
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
Shopify | Shopify App 客户端凭据 | shopify_app_client_credentials Shopify | Shopify App 客户端密钥 | shopify_app_client_secret{% endif %} Shopify | Shopify App 共享密钥 | shopify_app_shared_secret Shopify | Shopify 访问令牌 | shopify_access_token Shopify | Shopify 自定义 App 访问令牌 | shopify_custom_app_access_token
{%- ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6944 %}
Shopify | Shopify 商家令牌 | shopify_merchant_token Shopify | Shopify 市场令牌 | shopify_marketplace_token Shopify | Shopify 合作伙伴 API 令牌 | shopify_partner_api_token{% endif %} Shopify | Shopify 私人 App 密码 | shopify_private_app_password Slack | Slack API 令牌 | slack_api_token Slack | Slack 传入 Web 挂钩 URL | slack_incoming_webhook_url Slack | Slack 工作流程 Web 挂钩 URL | slack_workflow_webhook_url
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Square | Square 访问令牌 | square_access_token{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Square | Square Production Application 密钥 | square_production_application_secret{% endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Square | Square Sandbox 应用密钥 | square_sandbox_application_secret{% endif %} SSLMate | SSLMate API 密钥 | sslmate_api_key SSLMate | SSLMate 群集密钥 | sslmate_cluster_secret Stripe | Stripe API 密钥 | stripe_api_key Stripe | Stripe Live API 密钥 | stripe_live_secret_key Stripe | Stripe Test API 密钥 | stripe_test_secret_key Stripe | Stripe Live API 限制密钥 | stripe_live_restricted_key Stripe | Stripe Test API 限制密钥 | stripe_test_restricted_key Stripe | Stripe Webhook 签名密钥 | stripe_webhook_signing_secret
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5845 %}
Supabase | Supabase 服务密钥 | supabase_service_key{% endif %} Tableau | Tableau 个人访问令牌 | tableau_personal_access_token Telegram | Telegram Bot 令牌 | telegram_bot_token Tencent Cloud | Tencent Cloud 密钥 ID | tencent_cloud_secret_id
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
{%- ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7456 %}
Zuplo | Zuplo Consumer API 密钥 | zuplo_consumer_api_key{% endif %}
