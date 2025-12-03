1. Click the **Custom models** tab.
1. Above the list of API keys, click **Add API key**.
1. Under "Provider", select the LLM provider you want to use.
1. Under "Name", type a name for this key. This will be shown in the model picker.
1. Under "API key", type or paste your key.
1. Depending on which provider you are using, select or add models.
   * If you're using OpenAI, Anthropic, or xAI, click {% octicon "sync" aria-label="Fetch new models" %} in the API key text field to fetch the models associated with your key. Next, under "Available models", select the models you want to use.

     ![Screenshot of the "Add API key" form. The "Fetch new models" button is highlighted with an orange outline.](/assets/images/help/copilot/byok-add.png)

   * If you're using Microsoft Foundry, type your deployment URL in the field under "Deployment URL". Next, in the field under "Available models", type a Model ID and click {% octicon "check" aria-label="Add model" %} to add it.

     If your models have different deployment URLs, they cannot be added to the same API key. Create a separate API key for each deployment URL.

     ![Screenshot of the "Add API key" form. The model text field and "Add model" button is highlighted with an orange outline.](/assets/images/help/copilot/byok-add-foundry.png)

1. After you select or add the models you want to make available, click **Save**.