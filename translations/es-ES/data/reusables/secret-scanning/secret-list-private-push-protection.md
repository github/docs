| Proveedor                 | Secreto compatible                                                               | Tipo de secreto                                          |
| ------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Adafruit IO               | Clave de IO de Adafruit                                                          | adafruit_io_key                                        |
| Alibaba Cloud             | ID de Clave de Acceso a la Nube de Alibaba                                       | alibaba_cloud_access_key_id                          |
| Alibaba Cloud             | Secreto de Clave de Acceso a la Nube de Alibaba                                  | alibaba_cloud_access_key_secret                      |
| Amazon                    | ID de cliente de Amazon OAuth                                                    | amazon_oauth_client_id                                 |
| Amazon                    | Secreto de Cliente OAuth de Amazon                                               | amazon_oauth_client_secret                             |
| Amazon Web Services (AWS) | ID de Clave de Acceso de AWS de Amazon                                           | aws_access_key_id                                      |
| Amazon Web Services (AWS) | Clave de Acceso Secreta de AWS de Amazon                                         | aws_secret_access_key                                  |
| Amazon Web Services (AWS) | TOken de Sesión de Amazon AWS                                                    | aws_session_token                                      |
| Amazon Web Services (AWS) | ID de Llave de Acceso Temporal de Amazon AWS                                     | aws_temporary_access_key_id                          |
| Asana                     | Token de Acceso Personal de Asana                                                | asana_personal_access_token                            |
| Atlassian                 | Token de Acceso Personal a Bitbucket Server                                      | bitbucket_server_personal_access_token               |
| Azure                     | Secreto de aplicación de Azure Active Directory                                  | azure_active_directory_application_secret            |
| Azure                     | Caché de Azure para la Llave de Acceso A Redis                                   | azure_cache_for_redis_access_key                     |
| Azure                     | Token de Acceso Personal de Azure DevOps                                         | azure_devops_personal_access_token                   |
| Checkout.com              | Clave secreta de productión de Checkout.com                                      | checkout_production_secret_key                         |
| Clojars                   | Token de Despliegue de Clojars                                                   | clojars_deploy_token                                   |
| Databricks                | Token de Acceso de Databricks                                                    | databricks_access_token                                |
| DigitalOcean              | Token de Acceso Personal de DigitalOcean                                         | digitalocean_personal_access_token                     |
| DigitalOcean              | Token OAuth de DigitalOcean                                                      | digitalocean_oauth_token                               |
| DigitalOcean              | Token de Actualización de DigitalOcean                                           | digitalocean_refresh_token                             |
| DigitalOcean              | Token de Sistema de DigitalOcean                                                 | digitalocean_system_token                              |
| Discord                   | Token de Bot de Discord                                                          | discord_bot_token                                      |
| Doppler                   | Token Personal de Doppler                                                        | doppler_personal_token                                 |
| Doppler                   | Token de Servicio de Doppler                                                     | doppler_service_token                                  |
| Doppler                   | Token de CLI de Doppler                                                          | doppler_cli_token                                      |
| Doppler                   | Token de SCIM de Doppler                                                         | doppler_scim_token                                     |
| Doppler                   | Token de auditoría de Doppler                                                    | doppler_audit_token                                    |
| Dropbox                   | Token de Acceso de Vida Corta de Dropbox                                         | dropbox_short_lived_access_token                     |
| Duffel                    | Token de Acceso En Vivo para Duffel                                              | duffel_live_access_token                               |
| EasyPost                  | Llave de la API de Producción de EasyPost                                        | easypost_production_api_key                            |
| Flutterwave               | Llave de Secreto de la API En Vivo de Flutterwave                                | flutterwave_live_api_secret_key                      |
| Fullstory                 | Llave de la API de FullStory                                                     | fullstory_api_key                                      |
| GitHub                    | Token de Acceso Personal de GitHub                                               | github_personal_access_token                           |
| GitHub                    | Token de Acceso de OAuth para GitHub                                             | github_oauth_access_token                              |
| GitHub                    | Token de Actualización de GitHub                                                 | github_refresh_token                                   |
| GitHub                    | Token de Acceso a la Instalación de GitHub App                                   | github_app_installation_access_token                 |
| GitHub                    | Clave Privada de SSH de GitHub                                                   | github_ssh_private_key                                 |
| Google                    | Secreto de la Llave de Acceso del Almacenamiento de Google Cloud                 | google_cloud_storage_access_key_secret               |
| Google                    | ID de Llave de Acceso a la Cuenta del Servicio de Almacenamiento de Google Cloud | google_cloud_storage_service_account_access_key_id |
| Google                    | ID de Llave de Acceso de Usuario al Almacenamiento de Google Cloud               | google_cloud_storage_user_access_key_id            |
| Grafana                   | Clave de la API de Grafana                                                       | grafana_api_key                                        |
| Hubspot                   | Clave de API de Hubspot                                                          | hubspot_api_key                                        |
| Intercom                  | Token de Acceso de Intercom                                                      | intercom_access_token                                  |
{%- ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7456 %}
JFrog | Token de Acceso a la Plataforma de JFrog | jfrog_platform_access_token JFrog | Llave de la API de la Plataforma de JFrog | jfrog_platform_api_key{% endif %} Ionic | Token de Acceso personal a Ionic | ionic_personal_access_token Ionic | Token de Actualización de Ionic | ionic_refresh_token Linear | Llave de la API de Linear | linear_api_key Linear | Token de Acceso OAuth de Linear | linear_oauth_access_token Midtrans | Llave del Servidor de Producción de Midtrans | midtrans_production_server_key New Relic | Llave de la API Personal de New Relic | new_relic_personal_api_key New Relic | Llave de la API de REST de New Relic | new_relic_rest_api_key New Relic | Llave de Consulta de Perspectivas de New Relic | new_relic_insights_query_key npm | Token de Acceso a npm | npm_access_token NuGet | Llave de la API de NuGet | nuget_api_key Onfido | Token de la API en Vivo de Onfido | onfido_live_api_token OpenAI | Llave de la API de OpenAI | openai_api_key PlanetScale | Contraseña de la Base de Datos de PlanetScale | planetscale_database_password PlanetScale | Token OAuth de PlanetScale | planetscale_oauth_token PlanetScale | Token de Servicio de PlanetScale | planetscale_service_token Postman | Llave de la API de Postman | postman_api_key Proctorio | Llave del Secreto de Proctorio | proctorio_secret_key
{%- ifversion fpt or ghec or ghes > 3.5 or ghae-issue-7375 %}
redirect.pizza | Token de la API de redirect.pizza | redirect_pizza_api_token{% endif %} Samsara | Token de la API de Samsara | samsara_api_token Samsara | Token de Acceso OAuth a Samsara | samsara_oauth_access_token SendGrid | Llave de la API de SendGrid | sendgrid_api_key Sendinblue | Llave de la API de Sendinblue | sendinblue_api_key Sendinblue | Llave SMTP de Sendinblue | sendinblue_smtp_key Shippo | Token de la API en Vivo de Shippo | shippo_live_api_token Shopify | Secreto Compartido de la App de Shopify | shopify_app_shared_secret Shopify | Token de Acceso a Shopify | shopify_access_token Slack | Token de la API de Slack | slack_api_token Stripe | Llave de Secreto de la API en Vivo de Stripe | stripe_api_key Tencent Cloud | ID de Secreto en la Nube de Tencent | tencent_cloud_secret_id Typeform | Token de Acceso Personal de Typeform | typeform_personal_access_token WorkOS | Llave de la API de Producción de WorkOS | workos_production_api_key
{%- ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7456 %}
Zuplo | Zuplo Consumer API Key | zuplo_consumer_api_key{% endif %}
