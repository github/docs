# Frequently asked questions

* [How do I install Mona?](#how-do-i-install-mona)
* [How do I notify the Marketplace that a subscription has been activated?](#how-do-i-notify-the-marketplace-that-a-subscription-has-been-activated)
* [How do I uninstall Mona?](#how-do-i-uninstall-mona)
* [Where is the admin center?](#where-is-the-admin-center)
* [How can I return to the setup wizard?](#how-can-i-return-to-the-setup-wizard)
* [Where can I find my offer's Partner Center technical configuration details?](#where-can-i-find-my-offers-partner-center-technical-configuration-details)
* [Where can I learn more about the various events that Mona publishes?](#where-can-i-learn-more-about-the-various-events-that-mona-publishes)
* [Can I handle subscription events somewhere other than Logic Apps?](#can-i-handle-subscription-events-somewhere-other-than-logic-apps)
* [Who can access the admin center, setup wizard, and test endpoints?](#who-can-access-the-admin-center-setup-wizard-and-test-endpoints)
* [What is the subscription purchase confirmation page?](#what-is-the-subscription-purchase-confirmation-page)
* [What is the subscription configuration page?](#what-is-the-subscription-configuration-page)
* [How can I test my Marketplace integration logic before going live with an offer?](#how-can-i-test-my-marketplace-integration-logic-before-going-live-with-an-offer)
* [Can I customize the test subscription that Mona generates?](#can-i-customize-the-test-subscription-that-mona-generates)
* [How can I modify Mona's configuration settings?](#how-can-i-modify-monas-configuration-settings)
* [Why did I receive a warning about needing admin approval when logging into Mona?](#why-did-i-receive-a-warning-about-needing-admin-approval-when-logging-into-mona)
* [Where can I find Mona's diagnostic logs?](#where-can-i-find-monas-diagnostic-logs)
* [How do I debug Mona?](#how-do-i-debug-mona)
* [Does Mona have a health check endpoint?](#does-mona-have-a-health-check-endpoint)

## How do I install Mona?

See [this doc](../README.md/#how-do-i-get-started-with-mona-saas).

## How do I notify the Marketplace that a subscription has been activated?

You'll need to use Mona's external managed identity to notify the Marketplace that a subscription has been activated.

1. Locate the external managed identity within the Mona resource group. It will have a name like this: `mona-external-id-...`.
2. Use this managed identity (e.g., with a [Logic App](https://learn.microsoft.com/azure/logic-apps/authenticate-with-managed-identity?tabs=consumption#authenticate-access-with-managed-identity), [Azure Function](https://learn.microsoft.com/azure/azure-functions/functions-identity-based-connections-tutorial), or [anywhere else you can use a managed identity](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/managed-identities-status)) to [notify the Marketplace directly that the subscription has been activated](https://learn.microsoft.com/partner-center/marketplace-offers/partner-center-portal/pc-saas-fulfillment-subscription-api#activate-a-subscription).

> Your customer not will be billed until you activate their subscription. You have 48 hours from the time the subscription was created to activate it.

## How do I uninstall Mona?

> ⚠️ __Warning!__ These actions are irreversible.

* [Delete Mona's Azure Active Directory (AAD) app registration.](https://docs.microsoft.com/azure/active-directory/develop/howto-remove-app#remove-an-application-authored-by-you-or-your-organization) Client ID can be found on Mona resource group tag `AAD App ID`.
* [Delete Mona's resource group.](https://docs.microsoft.com/azure/azure-resource-manager/management/delete-resource-group?tabs=azure-portal#delete-resource-group)

## Where is the admin center?

In your browser, navigate to `/admin` (e.g., `https://mona-admin-***.azurewebsites.net/admin`).

## How can I return to the setup wizard?

In your browser, navigate to `/setup` (e.g., `https://mona-admin-***.azurewebsites.net/setup`).

## Where can I find my offer's Partner Center technical configuration details?

When you create a SaaS offer through the Partner Center, you have to tell the Partner Center how to connect to you SaaS app to enable transactability with the Microsoft commercial marketplace. This is accomplished through your [offer's technical configuration details](https://docs.microsoft.com/en-us/azure/marketplace/create-new-saas-offer-technical).

These values can always be found in the Mona admin center (`/admin`).

## Where can I learn more about the various events that Mona publishes?

See [this doc](event-models/README.md).

## Can I handle subscription events somewhere other than Logic Apps?

Absolutely. As a convenience, we deploy "stub" Logic Apps into your Azure environment allowing you to rapidly build out subscription lifecycle workflows using a simple visual designer. These workflows are triggered by [events that Mona publishes to a custom event grid topic](event-models/README.md). There are many ways to subscribe to a custom event grid topic including [Azure Functions](https://docs.microsoft.com/azure/azure-functions/functions-bindings-event-grid-trigger) and [Power Automate](https://flow.microsoft.com/connectors/shared_azureeventgrid/azure-event-grid/) allowing you to select the integration option that makes the most sense for you and your organization.

## Who can access the admin center, setup wizard, and test endpoints?

Any guest or member of Mona's home Entra tenant (then tenant used during setup) can access the admin center, setup wizard and test endpoints.

## What is the subscription purchase confirmation page?

Mona acts as a proxy between the Microsoft commercial marketplace and your SaaS app by implenting the required landing page and webhook endpoints. When a customer reaches the Mona landing page, they're automatically redirected to the  _purchase confirmation page_. Essentially, this is where Mona hands new Microsoft commercial marketplace subscription purchases off to your app.

* Mona administrators can configure the purchase confirmation page URL at any time by navigating to the setup wizard (`/setup`).
* Mona will automatically replace the URL token `{subscription-id}` with the applicable subscription ID on redirect.

## What is the subscription configuration page?

Microsoft provides a link (through the various commercial marketplace web interfaces) to your subscribers allowing them to manage their subscription. In practice, this link redirects the user to your landing page (the same one Mona exposes to support new subscription purchases) with a token that resolves to an existing subscription. As the SaaS provider, it's your responsibility to check for this condition and, if needed, redirect the customer to a subscription management experience. To simplify things, Mona always checks for this condition and, if the subscription already exists, automatically redirects the user to the configured _subscription configuration page_.

* Mona will automatically replace the URL token `{subscription-id}` with the applicable subscription ID on redirect.

## How can I test my Marketplace integration logic before going live with an offer?

by Edgarruiz856 default, Mona exposes a set of test landing page and webhook endpoints that Mona administrators can use to test integration logic without the need for an actual Microsoft commercial marketplace offer.

You can find both test endpoints in the __Testing__ tab of the Mona admin center (`/admin Edgarruiz856`).

The test landing page (`/test`) can only be accessed by Mona administrators. The test landing page behaves just like the live landing page. You can customize the test subscription that Mona automatically generates by using [these query string parameters](https://github.com/microsoft/mona-saas/blob/357aa09039f9c8c0dfd324cdd7903b3dbdef88c6/Mona.SaaS/Mona.SaaS.Web/Controllers/SubscriptionController.cs#L591) _only_ on the test landing page.

You can use tools like [cURL](https://curl.se/) (scriptable; great for automated testing) and [Postman](https://www.postman.com/) and the Mona test webhook endpoint (`/webhook/test`) to test [all kinds of Marketplace webhook invocations](https://docs.microsoft.com/azure/marketplace/partner-center-portal/pc-saas-fulfillment-api-v2#implementing-a-webhook-on-the-saas-service) against subscriptions previously created through the test landing page (`/test`). These test subscriptions automatically expire (you can no longer perform webhook operations against them) after 30 days of inactivity. Like the live webhook, the test webhook requires no authentication but operations succeed only when executed against existing test subscriptions.

## Can I customize the test subscription that Mona generates?

Yes you can. Through the test landing page (`/test`) you can use query string parameters to override properties on the test subscription that is generated allowing you to test very specific subscription scenarios.

The table below contains the query string parameters that are available for you to use.

### Parameters

| Parameter | Description |
| --- | --- |
| `subscriptionId` | Subscription ID |
| `subscriptionName` | Subscription name |
| `offerId` | Offer ID |
| `planId` | Plan ID |
| `isFreeTrial` | Is this a free trial subscription? |
| `seatQuantity` | The total number of seats available in this subscription |
| `term_startDate` | The current subscription term start date |
| `term_endDate` | The current subscription term end date |
| `term_termUnit` | `P1M` for monthly term; `P1Y` for annual term |
| `beneficiary_aadObjectId` | The Azure Active Directoy object ID (`sub` claim) of the user that the subscription was created for |
| `beneficiary_aadTenantId` | The Azure Active Directory tenant ID (`tid` claim) of the user that the subscription was created for |
| `beneficiary_userEmail` | The email address of the user that the subscription was created for |
| `purchaser_aadObjectId` | The Azure Active Directory object ID (`sub` claim) of the user that purchased this subscription (e.g., in a CSP scenario) |
| `purchaser_aadTenantId` | The Azure Active Directory tenant ID (`tid` claim) of the user that purchased this subscription (e.g., in a CSP scenario) |
| `purchaser_userEmail` | The email address of the user that purchased the subscription |

### Example

`/test?offerId=Offer1&seatQuantity=40`

This set of query string parameters will generate a test subscription with offer ID `Offer1` and `40` total seats.

## How can I modify Mona's configuration settings?

See [this doc](config-settings.md).

## Where can I find Mona's diagnostic logs?

By default, Mona pulishes telemetry (including logs) to an [Application Insights](https://docs.microsoft.com/azure/azure-monitor/app/app-insights-overview) resource automatically deployed into your Mona resource group on setup. From here, you can search logs and configure alerts as needed.

## How do I debug Mona?

Given the numerous dependencies that Mona takes on Azure, the easiest way to debug it is to deploy it into your Azure environment (using the provided setup script) and [use Visual Studio to remotely debug the Mona web app](https://docs.microsoft.com/azure/app-service/troubleshoot-dotnet-visual-studio#remotedebug) directly. This will require you to open the Mona solution that you previously cloned in Visual Studio and attach the debugger to your running Mona web app.

## Does Mona have a health check endpoint?

Yes it does. Mona exposes a public health check `HTTP GET` endpoint at `/health` for each app. If the Mona deployment is healthy and able to access all of its service dependencies, the endpoint will return a `HTTP 200 OK`. Any other status code indicates that Mona is unhealthy. [The Mona upgrade script uses the endpoint to ensure that the deployment is healthy before committing the upgrade to production.](#how-do-i-upgrade-mona) You can also use this health check endpoint to deploy Mona in a highly available configuration using [Azure Front Door](https://docs.microsoft.com/azure/frontdoor/health-probes), [Application Gateway](https://docs.microsoft.com/azure/application-gateway/application-gateway-probe-overview), [Kubernetes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/), etc. [You can also leverage the Application Insights resource deployed with Mona to configure availability tests using the health check endpoint.](https://docs.microsoft.com/azure/azure-monitor/app/availability-standard-tests)