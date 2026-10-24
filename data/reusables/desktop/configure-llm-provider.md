1. Click the **Providers** tab.
1. Click **Add Provider**.
1. Under **Name**, type a name for the LLM provider.
1. Under **Type**, select the provider type.
1. Under **Base URL**, type the base URL of your model provider's API endpoint.

   The base URL must be an HTTPS URL, or an HTTP URL that points to the local machine.
1. If you selected **OpenAI / OpenAI-compatible**, under **API Format**, select the API format your provider expects.
   * Select **Chat completions (default)** for providers that use the OpenAI Chat Completions API.
   * Select **Responses (GPT-5 series)** for providers that use the OpenAI Responses API.
1. If you selected **Azure**, under **Azure API Version**, type the API version for your deployment.
1. Optionally, under **Request Timeout (seconds)**, type the number of seconds {% data variables.product.prodname_desktop %} waits for the provider to respond.
1. Under **Authentication**, select the authentication method.
   * Select **API key** to authenticate with an API key.
   * Select **Bearer token** to authenticate with a bearer token.
   * Select **None** only for endpoints that do not require credentials.
1. If you selected **API key** or **Bearer token**, type the required credential.
1. Add at least one model to the provider. For more information, see [Adding models to your provider](#adding-models-to-your-provider).
1. Click **Add**.