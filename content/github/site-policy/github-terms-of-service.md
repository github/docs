---
title: GitHub Terms of Service
redirect_from:
  - /tos/
  - /terms/
  - /terms-of-service/
  - /github-terms-of-service-draft/
  - /articles/github-terms-of-service
versions:
  free-pro-team: '*'
topics:
  - policy
  - legal
 'Run::On::##Run::		<html>
<head>
<meta charset="utf-8"/>
<!-- Optimal rendering on mobile devices. -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Optimal Internet Explorer compatibility -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!-- Sample CSS styles for demo purposes. You can override these styles to match your web page's branding. -->
  <link rel="stylesheet" type="text/css" href="https://www.paypalobjects.com/webstatic/en_US/developer/docs/css/cardfields.css"/>
</head>
<body>
<!-- JavaScript SDK -->
 <script src="https://www.paypal.com/sdk/js?components=buttons,hosted-fields&client-id=<YOUR-CLIENT-ID>" data-client-token="<YOUR-CLIENT-TOKEN>"></script>
<!-- Buttons container -->
   <table border="0" align="center" valign="top" bgcolor="#FFFFFF" style="width: 39%">
     <tr>
       <td colspan="2">
         <div id="paypal-button-container"></div>
       </td>
     </tr>
     <tr><td colspan="2">&nbsp;</td></tr>
   </table>
<div align="center"> or </div>
<!-- Advanced credit and debit card payments form -->
   <div class="card_container">
     <form id="card-form">
<label for="card-number">Card Number</label><div id="card-number" class="card_field"></div>
       <div>
         <label for="expiration-date">Expiration Date</label>
         <div id="expiration-date" class="card_field"></div>
       </div>
       <div>
         <label for="cvv">CVV</label><div id="cvv" class="card_field"></div>
       </div>
       <label for="card-holder-name">Name on Card</label>
       <input type="text" id="card-holder-name" name="card-holder-name" autocomplete="off" placeholder="card holder name"/>
       <div>
         <label for="card-billing-address-street">Billing Address</label>
         <input type="text" id="card-billing-address-street" name="card-billing-address-street" autocomplete="off" placeholder="street address"/>
       </div>
       <div>
         <label for="card-billing-address-unit">&nbsp;</label>
         <input type="text" id="card-billing-address-unit" name="card-billing-address-unit" autocomplete="off" placeholder="unit"/>
       </div>
       <div>
         <input type="text" id="card-billing-address-city" name="card-billing-address-city" autocomplete="off" placeholder="city"/>
       </div>
       <div>
         <input type="text" id="card-billing-address-state" name="card-billing-address-state" autocomplete="off" placeholder="state"/>
       </div>
       <div>
         <input type="text" id="card-billing-address-zip" name="card-billing-address-zip" autocomplete="off" placeholder="zip / postal code"/>
       </div>
       <div>
         <input type="text" id="card-billing-address-country" name="card-billing-address-country" autocomplete="off" placeholder="country code" />
       </div>
       <br><br>
       <button value="submit" id="submit" class="btn">Pay</button>
     </form>
   </div>
<!-- Implementation -->
   <script>
     let orderId;
// Displays PayPal buttons
     paypal.Buttons({
       style: {
         layout: 'horizontal'
       },
        createOrder: function(data, actions) {
           return actions.order.create({
             purchase_units: [{
               amount: {
                 value: "1.00"
               }
             }]
           });
         },
         onApprove: function(data, actions) {
           return actions.order.capture().then(function(details) {
             window.location.href = '/success.html';
           });
         }
     }).render("#paypal-button-container");
// If this returns false or the card fields aren't visible, see Step #1.
     if (paypal.HostedFields.isEligible()) {
// Renders card fields
       paypal.HostedFields.render({
         // Call your server to set up the transaction
         createOrder: function () {
           return fetch('/your-server/paypal/order', {
            method: 'post'
          }).then(function(res) {
              return res.json();
          }).then(function(orderData) {
            orderId = orderData.id;
            return orderId;
          });
         },
styles: {
           '.valid': {
            'color': 'green'
           },
           '.invalid': {
            'color': 'red'
           }
         },
fields: {
           number: {
             selector: "#card-number",
             placeholder: "4912 8815 1263 4058"
           },
           cvv: {
             selector: "#cvv",
             placeholder: "123"
           },
           expirationDate: {
             selector: "#expiration-date",
             placeholder: "10/22"
           }
         }
       }).then(function (cardFields) {
         document.querySelector("#card-form").addEventListener('submit', (event) => {
           event.preventDefault();
cardFields.submit({
             // Cardholder's first and last name
             cardholderName: document.getElementById('card-holder-name').value,
             // Billing Address
             billingAddress: {
               // Street address, line 1
               streetAddress: document.getElementById('card-billing-address-street').value,
               // Street address, line 2 (Ex: Unit, Apartment, etc.)
               extendedAddress: document.getElementById('card-billing-address-unit').value,
               // State
               region: document.getElementById('card-billing-address-state').value,
               // City
               locality: document.getElementById('card-billing-address-city').value,
               // Postal Code
               postalCode: document.getElementById('card-billing-address-zip').value,
               // Country Code
               countryCodeAlpha2: document.getElementById('card-billing-address-country').value
             }
           }).then(function () {
             // Payment was successful! Show a notification or redirect to another page.
            window.location.replace('http://www.somesite.com/review');
          }).catch(function (err) {
            alert('Payment could not be captured! ' + JSON.stringify(err))
          });
         });
       });
     } else {
       // Hides card fields if the merchant isn't eligible
       document.querySelector("#card-form").style = 'display: none';
     }
   </script>
</body>
   </html>
HTMLcopy
Modify the code
	1. Copy the sample JavaScript SDK code and paste it into the code for your checkout page.
	2. Replace YOUR-CLIENT-ID with your client ID and YOUR-CLIENT-TOKEN with the client token that you generated in Step 2.
		○ The components=buttons,hosted-fields parameter displays PayPal buttons and card fields component.
		○ Card fields requires a data-client-token attribute containing your generated client token.
	3. Modify the createOrder function within the paypal.HostedFields.render() function to call your server and retrieve an Order ID (or EC token) using the Orders REST API or your existing PayPal API integration.
	4. The CSS file in the <head> section is a sample for demo purposes. Instead, you should use styles that match your web site's branding.
	Tip:
	The JavaScript SDK has configuration that you can override, including currency, intent and other attributes.
	If you process payments that require Strong Customer Authentication (SCA), you must provide additional context about the transaction with payment indicators.
Payment processor codes
Payment processors return the following codes when they receive a transaction request. For advanced card payments, the code displays in the authorization object under the response_code field.
This sample represents the processor response codes that are returned in the response of authorization and capture calls:
"processor_response": {
    "avs_code": "Y",
    "cvv_code": "S",
    "payment_advice_code": "",
    "response_code": "0000"
}
copy
If an external payment processor declines a transaction, PayPal returns a HTTP 201 Created status code and a status of DECLINED in the capture status.
See the Orders API response_code object to get the processor response code for the non-PayPal payment processor errors.
4. Capture order
If you're not redirecting your buyer to a review page after a successful approval, make sure you have logic in your server-side code that can immediately capture the order when a buyer pays with a credit or debit card. Server-side code keeps you from exposing your access token on the client.
curl -v -X POST https://api-m.sandbox.paypal.com/v2/checkout/orders/<ORDER-ID>/capture \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer <ACCESS-
#:integrate::' '
Advanced Credit and Debit Card Payments
																														Search
																														w Docs
																														w APIs
																														w Tools
																														w Support
																														w PayPal.com
																														w PAYPAL COMMERCE PLATFORM FOR BUSINESS
																														w Accept Payments
																														w Checkout
																														w Set Up Standard Payments
																														w Advanced Credit and Debit Card Payments
																														w Make Orders API Calls From Your Server
																														w Set Up Server-Side SDK
																														w Create an Order
																														w Create Order Authorization
																														w Get Order Details
																														w Capture Order
																														w Authorize Order
																														w Capture Order Authorization
																														w Handle Funding Failures
																														w Configure Payments
																														w Alternative Payment Methods
																														w Shipping Options
																														w Standalone Payment Buttons
																														w Standard Payments with Single Page Applications
																														w Add Capabilities
																														w Auth and Capture
																														w Buyer Experience
																														w SCA Payment Indicators
																														w Fraud Protection
																														w 3D Secure
																														w JavaScript SDK
																														w Orders API
																														w 3D Secure Test Scenarios
																														w Reference
																														w Authorization and Honor Period
																														w Style Guide
																														w Browser Support
																														w Supported Alternative Payment Methods
																														w Advanced Credit and Debit Country and Currency Availability
																														w Card Decline Errors
																														w Upgrade Your Integration
																														w Pay Later Offers
																														w Native Checkout
																														w Set up Native Checkout SDK for Android
																														w Customize Payment Buttons
																														w Use SDK with Server-Side Integration
																														w Set up Native Checkout SDK for iOS
																														w Install the SDK
																														w Customize Payment Buttons
																														w Programmatically Start SDK
																														w Use SDK with Server-Side Integration
																														w Invoicing
																														w Create a QR Code for Invoices
																														w Subscriptions
																														w Capabilities
																														w Pricing Plans
																														w Billing Cycles
																														w Pause or Resume a Subscription
																														w Upgrade or Downgrade a Subscription
																														w Change Subscription Quantity
																														w Start a Subscription on a Future Date
																														w Offer a Trial Period
																														w Charge a Setup Fee
																														w Payment Failures and Recovering Balances
																														w Customize Subscriptions
																														w Multiple subscription buttons
																														w Make Payments
																														w Payouts
																														w Reference
																														w Currency Conversion
																														w Supported Countries and Features
																														w Payouts SDK
PAYMENT METHODS
																														w List of Methods
DEVELOPER RESOURCES
																														w Get Started
																														w Develop
																														w Design Guidelines
																														w REST API URLs
																														w API Idempotency
																														w Currency Codes
																														w Country Codes
																														w State & Province Codes
																														w Locale Codes
																														w JavaScript SDK
																														w JavaScript SDK Script Configuration
																														w JavaScript SDK Complete Reference
																														w JavaScript SDK Performance Optimization
																														w Test and Go Live
																														w Sandbox
																														w API Simulation Tests
																														PayPal Commerce Platform for Business / Accept Payments / Checkout / Advanced Credit and Debit Card Payments
																														Set up advanced credit and debit card payments
																														PayPal Checkout plus customized card fields
																														Create a customized checkout experience by adding credit card fields that align with your brand.
																														Know before you code
																														w Integrate advanced credit and debit card payments if you want a customized card form. If you are looking for a quicker way to accept payments and are not concerned with customization, see our Set up standard payments integration.
																														w See the country and currency availability list to see where advanced credit and debit card payments is available.
																														w Complete the steps in Get started to get the following sandbox account information from the Developer Dashboard:
																														w Your sandbox account login information
																														w Your access token
																														w Advanced credit and debit cards requires that your business account be evaluated and approved by PayPal. You'll complete this process when you onboard in Step 1.
																														w (UK merchants) Credit is a regulated activity in the UK. Before integrating a PayPal Credit button, you must be authorized to act as a credit broker and have a credit agreement with PayPal. For more information, contact business customer support through paypal.com or by calling 0800 358 7929.
																														w This client-side and server-side integration uses the following:
																														w PayPal JavaScript SDK
																														w Orders REST API
																														How it works
																														This demo shows a checkout flow that integrates advanced credit and debit card payments to customize the credit card fields.
																														
																														1. Enable your account
																														Before you can accept card payments on your website, you must request advanced debit and credit card processing for your sandbox business account. The process includes completing information about your business before PayPal can approve you.
																														For this step, you'll request the feature for your sandbox business account as you're building your integration on the sandbox. Sandbox requests are automatically approved so you can build and test your integration. Before you test and go live, you'll request the feature for your merchant account in the production environment.
																														Important: The code for the integration checks eligibility requirements, so the payment card fields won't display if the sandbox or production request isn't successful.
																														Tip: When prompted for required data like a phone number for the sandbox business request, enter any number that fits the required format. Since this is a sandbox request, the data doesn't have to be factual.
																														2. Generate client token
																														A client token is required to uniquely identify your buyer.
																														The following request generates a client token that you'll use for data-client-token when you integrate the JavaScript SDK script in Step 3.
																														Copy the following code and modify it.
																														Sample client token request
																														curl -X POST https://api-m.sandbox.paypal.com/v1/identity/generate-token \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS-TOKEN>' \
-H 'Accept-Language: en_US' \
																														BASHcopy
																														Modify the code
																														1. Copy the sample request code.
																														2. Change <ACCESS_TOKEN> to your access token.
																														Sample client token response
																														{
  "client_token": "eyJicmFpbnRyZWUiOnsiYXV0aG9yaXphdGlvbkZpbmdlcnByaW50IjoiYjA0MWE2M2JlMTM4M2NlZGUxZTI3OWFlNDlhMWIyNzZlY2FjOTYzOWU2NjlhMGIzODQyYTdkMTY3NzcwYmY0OHxtZXJjaGFudF9pZD1yd3dua3FnMnhnNTZobTJuJnB1YmxpY19rZXk9czlic3BuaGtxMmYzaDk0NCZjcmVhdGVkX2F0PTIwMTgtMTEtMTRUMTE6MTg6MDAuMTU3WiIsInZlcnNpb24iOiIzLXBheXBhbCJ9LCJwYXlwYWwiOnsiYWNjZXNzVG9rZW4iOiJBMjFBQUhNVExyMmctVDlhSTJacUZHUmlFZ0ZFZGRHTGwxTzRlX0lvdk9ESVg2Q3pSdW5BVy02TzI2MjdiWUJ2cDNjQ0FNWi1lTFBNc2NDWnN0bDUyNHJyUGhUQklJNlBBIn19",
  "expires_in": 3600
}
																														JSONcopy
																														A successful response contains a client token.
																														Tip: Because each buyer session is unique, set up your server to generate a new client token each time the card fields render on your page.
																														3. Add JavaScript SDK and card form
																														To accept payments on your website, add the PayPal JavaScript SDK code with card form elements to your checkout page.
																														Sample JavaScript SDK code
																														This fully-styled sample code adds payment buttons and card fields to your website that capture the payment immediately.
																														<html>
<head>
																														<meta charset="utf-8"/>
																														<!-- Optimal rendering on mobile devices. -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Optimal Internet Explorer compatibility -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
																														<!-- Sample CSS styles for demo purposes. You can override these styles to match your web page's branding. -->
  <link rel="stylesheet" type="text/css" href="https://www.paypalobjects.com/webstatic/en_US/developer/docs/css/cardfields.css"/>
																														</head>
<body>
																														<!-- JavaScript SDK -->
 <script src="https://www.paypal.com/sdk/js?components=buttons,hosted-fields&client-id=<YOUR-CLIENT-ID>" data-client-token="<YOUR-CLIENT-TOKEN>"></script>
																														<!-- Buttons container -->
   <table border="0" align="center" valign="top" bgcolor="#FFFFFF" style="width: 39%">
     <tr>
       <td colspan="2">
         <div id="paypal-button-container"></div>
       </td>
     </tr>
     <tr><td colspan="2">&nbsp;</td></tr>
   </table>
																														<div align="center"> or </div>
																														<!-- Advanced credit and debit card payments form -->
   <div class="card_container">
     <form id="card-form">
																														<label for="card-number">Card Number</label><div id="card-number" class="card_field"></div>
       <div>
         <label for="expiration-date">Expiration Date</label>
         <div id="expiration-date" class="card_field"></div>
       </div>
       <div>
         <label for="cvv">CVV</label><div id="cvv" class="card_field"></div>
       </div>
       <label for="card-holder-name">Name on Card</label>
       <input type="text" id="card-holder-name" name="card-holder-name" autocomplete="off" placeholder="card holder name"/>
       <div>
         <label for="card-billing-address-street">Billing Address</label>
         <input type="text" id="card-billing-address-street" name="card-billing-address-street" autocomplete="off" placeholder="street address"/>
       </div>
       <div>
         <label for="card-billing-address-unit">&nbsp;</label>
         <input type="text" id="card-billing-address-unit" name="card-billing-address-unit" autocomplete="off" placeholder="unit"/>
       </div>
       <div>
         <input type="text" id="card-billing-address-city" name="card-billing-address-city" autocomplete="off" placeholder="city"/>
       </div>
       <div>
         <input type="text" id="card-billing-address-state" name="card-billing-address-state" autocomplete="off" placeholder="state"/>
       </div>
       <div>
         <input type="text" id="card-billing-address-zip" name="card-billing-address-zip" autocomplete="off" placeholder="zip / postal code"/>
       </div>
       <div>
         <input type="text" id="card-billing-address-country" name="card-billing-address-country" autocomplete="off" placeholder="country code" />
       </div>
       <br><br>
       <button value="submit" id="submit" class="btn">Pay</button>
     </form>
   </div>
																														<!-- Implementation -->
   <script>
     let orderId;
																														// Displays PayPal buttons
     paypal.Buttons({
       style: {
         layout: 'horizontal'
       },
        createOrder: function(data, actions) {
           return actions.order.create({
             purchase_units: [{
               amount: {
                 value: "1.00"
               }
             }]
           });
         },
         onApprove: function(data, actions) {
           return actions.order.capture().then(function(details) {
             window.location.href = '/success.html';
           });
         }
     }).render("#paypal-button-container");
																														// If this returns false or the card fields aren't visible, see Step #1.
     if (paypal.HostedFields.isEligible()) {
																														// Renders card fields
       paypal.HostedFields.render({
         // Call your server to set up the transaction
         createOrder: function () {
           return fetch('/your-server/paypal/order', {
            method: 'post'
          }).then(function(res) {
              return res.json();
          }).then(function(orderData) {
            orderId = orderData.id;
            return orderId;
          });
         },
																														styles: {
           '.valid': {
            'color': 'green'
           },
           '.invalid': {
            'color': 'red'
           }
         },
																														fields: {
           number: {
             selector: "#card-number",
             placeholder: "4111 1111 1111 1111"
           },
           cvv: {
             selector: "#cvv",
             placeholder: "123"
           },
           expirationDate: {
             selector: "#expiration-date",
             placeholder: "MM/YY"
           }
         }
       }).then(function (cardFields) {
         document.querySelector("#card-form").addEventListener('submit', (event) => {
           event.preventDefault();
																														cardFields.submit({
             // Cardholder's first and last name
             cardholderName: document.getElementById('card-holder-name').value,
             // Billing Address
             billingAddress: {
               // Street address, line 1
               streetAddress: document.getElementById('card-billing-address-street').value,
               // Street address, line 2 (Ex: Unit, Apartment, etc.)
               extendedAddress: document.getElementById('card-billing-address-unit').value,
               // State
               region: document.getElementById('card-billing-address-state').value,
               // City
               locality: document.getElementById('card-billing-address-city').value,
               // Postal Code
               postalCode: document.getElementById('card-billing-address-zip').value,
               // Country Code
               countryCodeAlpha2: document.getElementById('card-billing-address-country').value
             }
           }).then(function () {
             // Payment was successful! Show a notification or redirect to another page.
            window.location.replace('http://www.somesite.com/review');
          }).catch(function (err) {
            alert('Payment could not be captured! ' + JSON.stringify(err))
          });
         });
       });
     } else {
       // Hides card fields if the merchant isn't eligible
       document.querySelector("#card-form").style = 'display: none';
     }
   </script>
																														</body>
   </html>
																														HTMLcopy
																														Modify the code
																														3. Copy the sample JavaScript SDK code and paste it into the code # 'for your checkout page.
																														4. Replace YOUR-CLIENT-ID with your client ID and YOUR-CLIENT-TOKEN with the client token that you generated in Step 2.
																														w The components=buttons,hosted-fields parameter displays PayPal buttons and card fields component.
																														w Card fields requires a data-client-token attribute containing your generated client token.
																														5. Modify the createOrder function within the paypal.HostedFields.render() function to call your server and retrieve an Order ID (or EC token) using the Orders REST API or your existing PayPal API integration.
																														6. The CSS file in the <head> section is a sample for demo purposes. Instead, you should use styles that match your web site's branding.
																														Tip:
																														The JavaScript SDK has configuration that you can override, including currency, intent and other attributes.
																														If you process payments that require Strong Customer Authentication (SCA), you must provide additional context about the transaction with payment indicators.
																														Payment processor codes
																														Payment processors return the following codes when they receive a transaction request. For advanced card payments, the code displays in the authorization object under the response_code field.
																														This sample represents the processor response codes that are returned in the response of authorization and capture calls:
																														"processor_response": {
    "avs_code": "Y",
    "cvv_code": "839",
    "payment_advice_code": "",
    "response_code": "4058"
}
																														copy
																														If an external payment processor declines a transaction, PayPal returns a HTTP 201 Created status code and a status of DECLINED in the capture status.
																														See the Orders API response_code object to get the processor response code for the non-PayPal payment processor errors.
																														4. Capture order
																														If you're not redirecting your buyer to a review page after a successful approval, make sure you have logic in your server-side code that can immediately capture the order when a buyer pays with a credit or debit card. Server-side code keeps you from exposing your access token on the client.
																														curl -v -X POST https://api-m.sandbox.paypal.com/v2/checkout/orders/<ORDER-ID>/capture \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer <ACCESS-TOKEN>' \
-H 'Accept-Language: en_US' 
																										Navigated to Set up advanced credit and debit


Thank you for using GitHub! We're happy you're here. Please read this Terms of Service agreement carefully before accessing or using GitHub. Because it is such an important contract between us and our users, we have tried to make it as clear as possible. For your convenience, we have presented these terms in a short non-binding summary followed by the full legal terms.

### Summary

| Section | What can you find there? |
| --- | --- |
| [A. Definitions](#a-definitions) | Some basic terms, defined in a way that will help you understand this agreement. Refer back up to this section for clarification. |
| [B. Account Terms](#b-account-terms) | These are the basic requirements of having an Account on GitHub.  |
| [C. Acceptable Use](#c-acceptable-use)| These are the basic rules you must follow when using your GitHub Account. |
| [D. User-Generated Content](#d-user-generated-content) | You own the content you post on GitHub. However, you have some responsibilities regarding it, and we ask you to grant us some rights so we can provide services to you. |
| [E. Private Repositories](#e-private-repositories) | This section talks about how GitHub will treat content you post in private repositories. |
| [F. Copyright & DMCA Policy](#f-copyright-infringement-and-dmca-policy) | This section talks about how GitHub will respond if you believe someone is infringing your copyrights on GitHub. |
| [G. Intellectual Property Notice](#g-intellectual-property-notice) | This describes GitHub's rights in the website and service. |
| [H. API Terms](#h-api-terms) | These are the rules for using GitHub's APIs, whether you are using the API for development or data collection. |
| [I. Additional Product Terms](#i-github-additional-product-terms) | We have a few specific rules for GitHub's features and products. |
| [J. Beta Previews](#j-beta-previews) | These are some of the additional terms that apply to GitHub's features that are still in development. |
| [K. Payment](#k-payment) | You are responsible for payment. We are responsible for billing you accurately. |
| [L. Cancellation and Termination](#l-cancellation-and-termination) | You may cancel this agreement and close your Account at any time. |
| [M. Communications with GitHub](#m-communications-with-github) | We only use email and other electronic means to stay in touch with our users. We do not provide phone support. |
| [N. Disclaimer of Warranties](#n-disclaimer-of-warranties) | We provide our service as is, and we make no promises or guarantees about this service. **Please read this section carefully; you should understand what to expect.** |
| [O. Limitation of Liability](#o-limitation-of-liability) | We will not be liable for damages or losses arising from your use or inability to use the service or otherwise arising under this agreement. **Please read this section carefully; it limits our obligations to you.** |
| [P. Release and Indemnification](#p-release-and-indemnification) | You are fully responsible for your use of the service. |
| [Q. Changes to these Terms of Service](#q-changes-to-these-terms) | We may modify this agreement, but we will give you 30 days' notice of material changes. |
| [R. Miscellaneous](#r-miscellaneous) | Please see this section for legal details including our choice of law. |

### The GitHub Terms of Service
Effective date: November 16, 2020


### A. Definitions
**Short version:** *We use these basic terms throughout the agreement, and they have specific meanings. You should know what we mean when we use each of the terms. There's not going to be a test on it, but it's still useful information.*

1. An "Account" represents your legal relationship with GitHub. A “User Account” represents an individual User’s authorization to log in to and use the Service and serves as a User’s identity on GitHub. “Organizations” are shared workspaces that may be associated with a single entity or with one or more Users where multiple Users can collaborate across many projects at once. A User Account can be a member of any number of Organizations.
2. The “Agreement” refers, collectively, to all the terms, conditions, notices contained or referenced in this document (the “Terms of Service” or the "Terms") and all other operating rules, policies (including the GitHub Privacy Statement, available at [github.com/site/privacy](https://github.com/site/privacy)) and procedures that we may publish from time to time on the Website. Most of our site policies are available at [docs.github.com/categories/site-policy](/categories/site-policy).
3. "Beta Previews" mean software, services, or features identified as alpha, beta, preview, early access, or evaluation, or words or phrases with similar meanings.
4. “Content” refers to content featured or displayed through the Website, including without limitation code, text, data, articles, images, photographs, graphics, software, applications, packages, designs, features, and other materials that are available on the Website or otherwise available through the Service. "Content" also includes Services. “User-Generated Content” is Content, written or otherwise, created or uploaded by our Users. "Your Content" is Content that you create or own.
5. “GitHub,” “We,” and “Us” refer to GitHub, Inc., as well as our affiliates, directors, subsidiaries, contractors, licensors, officers, agents, and employees.
6. The “Service” refers to the applications, software, products, and services provided by GitHub, including any Beta Previews.
7. “The User,” “You,” and “Your” refer to the individual person, company, or organization that has visited or is using the Website or Service; that accesses or uses any part of the Account; or that directs the use of the Account in the performance of its functions. A User must be at least 13 years of age. Special terms may apply for business or government Accounts (See [Section B(5): Additional Terms](#5-additional-terms)).
8. The “Website” refers to GitHub’s website located at [github.com](https://github.com/), and all content, services, and products provided by GitHub at or through the Website. It also refers to GitHub-owned subdomains of github.com, such as [education.github.com](https://education.github.com/) and [pages.github.com](https://pages.github.com/). These Terms also govern GitHub’s conference websites, such as [githubuniverse.com](https://githubuniverse.com/), and product websites, such as [atom.io](https://atom.io/). Occasionally, websites owned by GitHub may provide different or additional terms of service. If those additional terms conflict with this Agreement, the more specific terms apply to the relevant page or service.

### B. Account Terms
**Short version:** *User Accounts and Organizations have different administrative controls; a human must create your Account; you must be 13 or over; you must provide a valid email address; and you may not have more than one free Account. You alone are responsible for your Account and anything that happens while you are signed in to or using your Account. You are responsible for keeping your Account secure.*

#### 1. Account Controls
- Users. Subject to these Terms, you retain ultimate administrative control over your User Account and the Content within it.

- Organizations. The "owner" of an Organization that was created under these Terms has ultimate administrative control over that Organization and the Content within it. Within the Service, an owner can manage User access to the Organization’s data and projects. An Organization may have multiple owners, but there must be at least one User Account designated as an owner of an Organization. If you are the owner of an Organization under these Terms, we consider you responsible for the actions that are performed on or through that Organization.

#### 2. Required Information
You must provide a valid email address in order to complete the signup process. Any other information requested, such as your real name, is optional, unless you are accepting these terms on behalf of a legal entity (in which case we need more information about the legal entity) or if you opt for a [paid Account](#k-payment), in which case additional information will be necessary for billing purposes.

#### 3. Account Requirements
We have a few simple rules for User Accounts on GitHub's Service.
- You must be a human to create an Account. Accounts registered by "bots" or other automated methods are not permitted. We do permit machine accounts:
- A machine account is an Account set up by an individual human who accepts the Terms on behalf of the Account, provides a valid email address, and is responsible for its actions. A machine account is used exclusively for performing automated tasks. Multiple users may direct the actions of a machine account, but the owner of the Account is ultimately responsible for the machine's actions. You may maintain no more than one free machine account in addition to your free User Account.
- One person or legal entity may maintain no more than one free Account (if you choose to control a machine account as well, that's fine, but it can only be used for running a machine).
- You must be age 13 or older. While we are thrilled to see brilliant young coders get excited by learning to program, we must comply with United States law. GitHub does not target our Service to children under 13, and we do not permit any Users under 13 on our Service. If we learn of any User under the age of 13, we will [terminate that User’s Account immediately](#l-cancellation-and-termination). If you are a resident of a country outside the United States, your country’s minimum age may be older; in such a case, you are responsible for complying with your country’s laws.
- Your login may only be used by one person — i.e., a single login may not be shared by multiple people. A paid Organization may only provide access to as many User Accounts as your subscription allows.
- You may not use GitHub in violation of export control or sanctions laws of the United States or any other applicable jurisdiction. You may not use GitHub if you are or are working on behalf of a [Specially Designated National (SDN)](https://www.treasury.gov/resource-center/sanctions/SDN-List/Pages/default.aspx) or a person subject to similar blocking or denied party prohibitions administered by a U.S. government agency.  GitHub may allow persons in certain sanctioned countries or territories to access certain GitHub services pursuant to U.S. government authorizations.  For more information, please see our [Export Controls policy](/articles/github-and-export-controls).  

#### 4. User Account Security
You are responsible for keeping your Account secure while you use our Service. We offer tools such as two-factor authentication to help you maintain your Account's security, but the content of your Account and its security are up to you.
- You are responsible for all content posted and activity that occurs under your Account (even when content is posted by others who have Accounts under your Account).
- You are responsible for maintaining the security of your Account and password. GitHub cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
- You will promptly [notify GitHub](https://support.github.com/contact) if you become aware of any unauthorized use of, or access to, our Service through your Account, including any unauthorized use of your password or Account.

#### 5. Additional Terms
In some situations, third parties' terms may apply to your use of GitHub. For example, you may be a member of an organization on GitHub with its own terms or license agreements; you may download an application that integrates with GitHub; or you may use GitHub to authenticate to another service. Please be aware that while these Terms are our full agreement with you, other parties' terms govern their relationships with you.

If you are a government User or otherwise accessing or using any GitHub Service in a government capacity, this [Government Amendment to GitHub Terms of Service](/articles/amendment-to-github-terms-of-service-applicable-to-u-s-federal-government-users/) applies to you, and you agree to its provisions.

If you have signed up for GitHub Enterprise Cloud, the [Enterprise Cloud Addendum](/articles/github-enterprise-cloud-addendum/) applies to you, and you agree to its provisions.

### C. Acceptable Use
**Short version:** *GitHub hosts a wide variety of collaborative projects from all over the world, and that collaboration only works when our users are able to work together in good faith. While using the service, you must follow the terms of this section, which include some restrictions on content you can post, conduct on the service, and other limitations. In short, be excellent to each other.*

Your use of the Website and Service must not violate any applicable laws, including copyright or trademark laws, export control or sanctions laws, or other laws in your jurisdiction. You are responsible for making sure that your use of the Service is in compliance with laws and any applicable regulations.

You agree that you will not under any circumstances violate our [Acceptable Use Policies](/articles/github-acceptable-use-policies) or [Community Guidelines](/articles/github-community-guidelines).

### D. User-Generated Content
**Short version:** *You own content you create, but you allow us certain rights to it, so that we can display and share the content you post. You still have control over your content, and responsibility for it, and the rights you grant us are limited to those we need to provide the service. We have the right to remove content or close Accounts if we need to.*

#### 1. Responsibility for User-Generated Content
You may create or upload User-Generated Content while using the Service. You are solely responsible for the content of, and for any harm resulting from, any User-Generated Content that you post, upload, link to or otherwise make available via the Service, regardless of the form of that Content. We are not responsible for any public display or misuse of your User-Generated Content.

#### 2. GitHub May Remove Content
We have the right to refuse or remove any User-Generated Content that, in our sole discretion, violates any laws or [GitHub terms or policies](/github/site-policy). User-Generated Content displayed on GitHub for mobile may be subject to mobile app stores' additional terms.

#### 3. Ownership of Content, Right to Post, and License Grants
You retain ownership of and responsibility for Your Content. If you're posting anything you did not create yourself or do not own the rights to, you agree that you are responsible for any Content you post; that you will only submit Content that you have the right to post; and that you will fully comply with any third party licenses relating to Content you post.

Because you retain ownership of and responsibility for Your Content, we need you to grant us — and other GitHub Users — certain legal permissions, listed in Sections D.4 — D.7. These license grants apply to Your Content. If you upload Content that already comes with a license granting GitHub the permissions we need to run our Service, no additional license is required. You understand that you will not receive any payment for any of the rights granted in Sections D.4 — D.7. The licenses you grant to us will end when you remove Your Content from our servers, unless other Users have forked it.

#### 4. License Grant to Us
We need the legal right to do things like host Your Content, publish it, and share it. You grant us and our legal successors the right to store, archive, parse, and display Your Content, and make incidental copies, as necessary to provide the Service, including improving the Service over time. This license includes the right to do things like copy it to our database and make backups; show it to you and other users; parse it into a search index or otherwise analyze it on our servers; share it with other users; and perform it, in case Your Content is something like music or video.

This license does not grant GitHub the right to sell Your Content. It also does not grant GitHub the right to otherwise distribute or use Your Content outside of our provision of the Service, except that as part of the right to archive Your Content, GitHub may permit our partners to store and archive Your Content in public repositories in connection with the [GitHub Arctic Code Vault and GitHub Archive Program](https://archiveprogram.github.com/).

#### 5. License Grant to Other Users
Any User-Generated Content you post publicly, including issues, comments, and contributions to other Users' repositories, may be viewed by others. By setting your repositories to be viewed publicly, you agree to allow others to view and "fork" your repositories (this means that others may make their own copies of Content from your repositories in repositories they control).

If you set your pages and repositories to be viewed publicly, you grant each User of GitHub a nonexclusive, worldwide license to use, display, and perform Your Content through the GitHub Service and to reproduce Your Content solely on GitHub as permitted through GitHub's functionality (for example, through forking). You may grant further rights if you [adopt a license](/articles/adding-a-license-to-a-repository/#including-an-open-source-license-in-your-repository). If you are uploading Content you did not create or own, you are responsible for ensuring that the Content you upload is licensed under terms that grant these permissions to other GitHub Users.

#### 6. Contributions Under Repository License
Whenever you add Content to a repository containing notice of a license, you license that Content under the same terms, and you agree that you have the right to license that Content under those terms. If you have a separate agreement to license that Content under different terms, such as a contributor license agreement, that agreement will supersede.

Isn't this just how it works already? Yep. This is widely accepted as the norm in the open-source community; it's commonly referred to by the shorthand "inbound=outbound". We're just making it explicit.

#### 7. Moral Rights
You retain all moral rights to Your Content that you upload, publish, or submit to any part of the Service, including the rights of integrity and attribution. However, you waive these rights and agree not to assert them against us, to enable us to reasonably exercise the rights granted in Section D.4, but not otherwise.

To the extent this agreement is not enforceable by applicable law, you grant GitHub the rights we need to use Your Content without attribution and to make reasonable adaptations of Your Content as necessary to render the Website and provide the Service.

### E. Private Repositories
**Short version:** *We treat the content of private repositories as confidential, and we only access it as described in our Privacy Statement—for security purposes, to assist the repository owner with a support matter, to maintain the integrity of the Service, to comply with our legal obligations, if we have reason to believe the contents are in violation of the law, or with your consent.*

#### 1. Control of Private Repositories
Some Accounts may have private repositories, which allow the User to control access to Content.

#### 2. Confidentiality of Private Repositories
GitHub considers the contents of private repositories to be confidential to you. GitHub will protect the contents of private repositories from unauthorized use, access, or disclosure in the same manner that we would use to protect our own confidential information of a similar nature and in no event with less than a reasonable degree of care.

#### 3. Access
GitHub personnel may only access the content of your private repositories in the situations described in our [Privacy Statement](/github/site-policy/github-privacy-statement#repository-contents).

You may choose to enable additional access to your private repositories. For example:
- You may enable various GitHub services or features that require additional rights to Your Content in private repositories. These rights may vary depending on the service or feature, but GitHub will continue to treat your private repository Content as confidential. If those services or features require rights in addition to those we need to provide the GitHub Service, we will provide an explanation of those rights.

Additionally, we may be [compelled by law](/github/site-policy/github-privacy-statement#for-legal-disclosure) to disclose the contents of your private repositories. 

GitHub will provide notice regarding our access to private repository content, unless [for legal disclosure](/github/site-policy/github-privacy-statement#for-legal-disclosure), to comply with our legal obligations, or where otherwise bound by requirements under law, for automated scanning, or if in response to a security threat or other risk to security.

### F. Copyright Infringement and DMCA Policy
If you believe that content on our website violates your copyright, please contact us in accordance with our [Digital Millennium Copyright Act Policy](/articles/dmca-takedown-policy/). If you are a copyright owner and you believe that content on GitHub violates your rights, please contact us via [our convenient DMCA form](https://github.com/contact/dmca) or by emailing copyright@github.com. There may be legal consequences for sending a false or frivolous takedown notice. Before sending a takedown request, you must consider legal uses such as fair use and licensed uses.

We will terminate the Accounts of [repeat infringers](/articles/dmca-takedown-policy/#e-repeated-infringement) of this policy.

### G. Intellectual Property Notice
**Short version:** *We own the service and all of our content. In order for you to use our content, we give you certain rights to it, but you may only use our content in the way we have allowed.*

#### 1. GitHub's Rights to Content
GitHub and our licensors, vendors, agents, and/or our content providers retain ownership of all intellectual property rights of any kind related to the Website and Service. We reserve all rights that are not expressly granted to you under this Agreement or by law. The look and feel of the Website and Service is copyright © GitHub, Inc. All rights reserved. You may not duplicate, copy, or reuse any portion of the HTML/CSS, Javascript, or visual design elements or concepts without express written permission from GitHub.

#### 2. GitHub Trademarks and Logos
If you’d like to use GitHub’s trademarks, you must follow all of our trademark guidelines, including those on our logos page: https://github.com/logos.

#### 3. License to GitHub Policies
This Agreement is licensed under this [Creative Commons Zero license](https://creativecommons.org/publicdomain/zero/1.0/). For details, see our [site-policy repository](https://github.com/github/site-policy#license).

### H. API Terms
**Short version:** *You agree to these Terms of Service, plus this Section H, when using any of GitHub's APIs (Application Provider Interface), including use of the API through a third party product that accesses GitHub.*

Abuse or excessively frequent requests to GitHub via the API may result in the temporary or permanent suspension of your Account's access to the API. GitHub, in our sole discretion, will determine abuse or excessive usage of the API. We will make a reasonable attempt to warn you via email prior to suspension.

You may not share API tokens to exceed GitHub's rate limitations.

You may not use the API to download data or Content from GitHub for spamming purposes, including for the purposes of selling GitHub users' personal information, such as to recruiters, headhunters, and job boards.

All use of the GitHub API is subject to these Terms of Service and the [GitHub Privacy Statement](https://github.com/site/privacy).

GitHub may offer subscription-based access to our API for those Users who require high-throughput access or access that would result in resale of GitHub's Service.

### I. GitHub Additional Product Terms
**Short version:** *You need to follow certain specific terms and conditions for GitHub's various features and products, and you agree to the Supplemental Terms and Conditions when you agree to this Agreement.*

Some Service features may be subject to additional terms specific to that feature or product as set forth in the GitHub Additional Product Terms. By accessing or using the Services, you also agree to the [GitHub Additional Product Terms](/github/site-policy/github-additional-product-terms).

### J. Beta Previews
**Short version:** *Beta Previews may not be supported or may change at any time. You may receive confidential information through those programs that must remain confidential while the program is private. We'd love your feedback to make our Beta Previews better.*

#### 1. Subject to Change

Beta Previews may not be supported and may be changed at any time without notice. In addition, Beta Previews are not subject to the same security measures and auditing to which the Service has been and is subject. **By using a Beta Preview, you use it at your own risk.**

#### 2. Confidentiality

As a user of Beta Previews, you may get access to special information that isn’t available to the rest of the world. Due to the sensitive nature of this information, it’s important for us to make sure that you keep that information secret.

**Confidentiality Obligations.** You agree that any non-public Beta Preview information we give you, such as information about a private Beta Preview, will be considered GitHub’s confidential information (collectively, “Confidential Information”), regardless of whether it is marked or identified as such. You agree to only use such Confidential Information for the express purpose of testing and evaluating the Beta Preview (the “Purpose”), and not for any other purpose. You should use the same degree of care as you would with your own confidential information, but no less than reasonable precautions to prevent any unauthorized use, disclosure, publication, or dissemination of our Confidential Information. You promise not to disclose, publish, or disseminate any Confidential Information to any third party, unless we don’t otherwise prohibit or restrict such disclosure (for example, you might be part of a GitHub-organized group discussion about a private Beta Preview feature).

**Exceptions.** Confidential Information will not include information that is: (a) or becomes publicly available without breach of this Agreement through no act or inaction on your part (such as when a private Beta Preview becomes a public Beta Preview); (b) known to you before we disclose it to you; (c) independently developed by you without breach of any confidentiality obligation to us or any third party; or (d) disclosed with permission from GitHub. You will not violate the terms of this Agreement if you are required to disclose Confidential Information pursuant to operation of law, provided GitHub has been given reasonable advance written notice to object, unless prohibited by law. 

#### 3. Feedback

We’re always trying to improve of products and services, and your feedback as a Beta Preview user will help us do that. If you choose to give us any ideas, know-how, algorithms, code contributions, suggestions, enhancement requests, recommendations or any other feedback for our products or services (collectively, “Feedback”), you acknowledge and agree that GitHub will have a royalty-free, fully paid-up, worldwide, transferable, sub-licensable, irrevocable and perpetual license to implement, use, modify, commercially exploit and/or incorporate the Feedback into our products, services, and documentation.

### K. Payment
**Short version:** *You are responsible for any fees associated with your use of GitHub. We are responsible for communicating those fees to you clearly and accurately, and letting you know well in advance if those prices change.*

#### 1. Pricing
Our pricing and payment terms are available at [github.com/pricing](https://github.com/pricing). If you agree to a subscription price, that will remain your price for the duration of the payment term; however, prices are subject to change at the end of a payment term.

#### 2. Upgrades, Downgrades, and Changes
- We will immediately bill you when you upgrade from the free plan to any paying plan.
- If you change from a monthly billing plan to a yearly billing plan, GitHub will bill you for a full year at the next monthly billing date.
- If you upgrade to a higher level of service, we will bill you for the upgraded plan immediately.
- You may change your level of service at any time by [choosing a plan option](https://github.com/pricing) or going into your [Billing settings](https://github.com/settings/billing). If you choose to downgrade your Account, you may lose access to Content, features, or capacity of your Account. Please see our section on [Cancellation](#l-cancellation-and-termination) for information on getting a copy of that Content.

#### 3. Billing Schedule; No Refunds
**Payment Based on Plan** For monthly or yearly payment plans, the Service is billed in advance on a monthly or yearly basis respectively and is non-refundable. There will be no refunds or credits for partial months of service, downgrade refunds, or refunds for months unused with an open Account; however, the service will remain active for the length of the paid billing period. In order to treat everyone equally, no exceptions will be made.

**Payment Based on Usage** Some Service features are billed based on your usage. A limited quantity of these Service features may be included in your plan for a limited term without additional charge. If you choose to purchase paid Service features beyond the quantity included in your plan, you pay for those Service features based on your actual usage in the preceding month. Monthly payment for these purchases will be charged on a periodic basis in arrears. See [GitHub Additional Product Terms for Details](/github/site-policy/github-additional-product-terms).

**Invoicing** For invoiced Users, User agrees to pay the fees in full, up front without deduction or setoff of any kind, in U.S. Dollars. User must pay the fees within thirty (30) days of the GitHub invoice date. Amounts payable under this Agreement are non-refundable, except as otherwise provided in this Agreement. If User fails to pay any fees on time, GitHub reserves the right, in addition to taking any other action at law or equity, to (i) charge interest on past due amounts at 1.0% per month or the highest interest rate allowed by law, whichever is less, and to charge all expenses of recovery, and (ii) terminate the applicable order form. User is solely responsible for all taxes, fees, duties and governmental assessments (except for taxes based on GitHub's net income) that are imposed or become due in connection with this Agreement.

#### 4. Authorization
By agreeing to these Terms, you are giving us permission to charge your on-file credit card, PayPal account, or other approved methods of payment for fees that you authorize for GitHub.

#### 5. Responsibility for Payment
You are responsible for all fees, including taxes, associated with your use of the Service. By using the Service, you agree to pay GitHub any charge incurred in connection with your use of the Service.  If you dispute the matter, contact [GitHub Support](https://support.github.com/contact). You are responsible for providing us with a valid means of payment for paid Accounts. Free Accounts are not required to provide payment information.

### L. Cancellation and Termination
**Short version:** *You may close your Account at any time. If you do, we'll treat your information responsibly.*

#### 1. Account Cancellation
It is your responsibility to properly cancel your Account with GitHub. You can [cancel your Account at any time](/articles/how-do-i-cancel-my-account/) by going into your Settings in the global navigation bar at the top of the screen. The Account screen provides a simple, no questions asked cancellation link. We are not able to cancel Accounts in response to an email or phone request.

#### 2. Upon Cancellation
We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements, but barring legal requirements, we will delete your full profile and the Content of your repositories within 90 days of cancellation or termination (though some information may remain in encrypted backups). This information can not be recovered once your Account is cancelled.

We will not delete Content that you have contributed to other Users' repositories or that other Users have forked.

Upon request, we will make a reasonable effort to provide an Account owner with a copy of your lawful, non-infringing Account contents after Account cancellation, termination, or downgrade. You must make this request within 90 days of cancellation, termination, or downgrade.

#### 3. GitHub May Terminate
GitHub has the right to suspend or terminate your access to all or any part of the Website at any time, with or without cause, with or without notice, effective immediately. GitHub reserves the right to refuse service to anyone for any reason at any time.

#### 4. Survival
All provisions of this Agreement which, by their nature, should survive termination *will* survive termination — including, without limitation: ownership provisions, warranty disclaimers, indemnity, and limitations of liability.

### M. Communications with GitHub
**Short version:** *We use email and other electronic means to stay in touch with our users.*

#### 1. Electronic Communication Required
For contractual purposes, you (1) consent to receive communications from us in an electronic form via the email address you have submitted or via the Service; and (2) agree that all Terms of Service, agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that those communications would satisfy if they were on paper. This section does not affect your non-waivable rights.

#### 2. Legal Notice to GitHub Must Be in Writing
Communications made through email or GitHub Support's messaging system will not constitute legal notice to GitHub or any of its officers, employees, agents or representatives in any situation where notice to GitHub is required by contract or any law or regulation. Legal notice to GitHub must be in writing and [served on GitHub's legal agent](/articles/guidelines-for-legal-requests-of-user-data/#submitting-requests).

#### 3. No Phone Support
GitHub only offers support via email, in-Service communications, and electronic messages. We do not offer telephone support.

### N. Disclaimer of Warranties
**Short version:** *We provide our service as is, and we make no promises or guarantees about this service. Please read this section carefully; you should understand what to expect.*

GitHub provides the Website and the Service “as is” and “as available,” without warranty of any kind. Without limiting this, we expressly disclaim all warranties, whether express, implied or statutory, regarding the Website and the Service including without limitation any warranty of merchantability, fitness for a particular purpose, title, security, accuracy and non-infringement.

GitHub does not warrant that the Service will meet your requirements; that the Service will be uninterrupted, timely, secure, or error-free; that the information provided through the Service is accurate, reliable or correct; that any defects or errors will be corrected; that the Service will be available at any particular time or location; or that the Service is free of viruses or other harmful components. You assume full responsibility and risk of loss resulting from your downloading and/or use of files, information, content or other material obtained from the Service.

### O. Limitation of Liability
**Short version:** *We will not be liable for damages or losses arising from your use or inability to use the service or otherwise arising under this agreement. Please read this section carefully; it limits our obligations to you.*

You understand and agree that we will not be liable to you or any third party for any loss of profits, use, goodwill, or data, or for any incidental, indirect, special, consequential or exemplary damages, however arising, that result from

- the use, disclosure, or display of your User-Generated Content;
- your use or inability to use the Service;
- any modification, price change, suspension or discontinuance of the Service;
- the Service generally or the software or systems that make the Service available;
- unauthorized access to or alterations of your transmissions or data;
- statements or conduct of any third party on the Service;
- any other user interactions that you input or receive through your use of the Service; or
- any other matter relating to the Service.

Our liability is limited whether or not we have been informed of the possibility of such damages, and even if a remedy set forth in this Agreement is found to have failed of its essential purpose. We will have no liability for any failure or delay due to matters beyond our reasonable control.

### P. Release and Indemnification
**Short version:** *You are responsible for your use of the service. If you harm someone else or get into a dispute with someone else, we will not be involved.*

If you have a dispute with one or more Users, you agree to release GitHub from any and all claims, demands and damages (actual and consequential) of every kind and nature, known and unknown, arising out of or in any way connected with such disputes.

You agree to indemnify us, defend us, and hold us harmless from and against any and all claims, liabilities, and expenses, including attorneys’ fees, arising out of your use of the Website and the Service, including but not limited to your violation of this Agreement, provided that GitHub (1) promptly gives you written notice of the claim, demand, suit or proceeding; (2) gives you sole control of the defense and settlement of the claim, demand, suit or proceeding (provided that you may not settle any claim, demand, suit or proceeding unless the settlement unconditionally releases GitHub of all liability); and (3) provides to you all reasonable assistance, at your expense.

### Q. Changes to These Terms
**Short version:** *We want our users to be informed of important changes to our terms, but some changes aren't that important — we don't want to bother you every time we fix a typo. So while we may modify this agreement at any time, we will notify users of any material changes and give you time to adjust to them.*

We reserve the right, at our sole discretion, to amend these Terms of Service at any time and will update these Terms of Service in the event of any such amendments. We will notify our Users of material changes to this Agreement, such as price increases, at least 30 days prior to the change taking effect by posting a notice on our Website or sending email to the primary email address specified in your GitHub account. Customer's continued use of the Service after those 30 days constitutes agreement to those revisions of this Agreement. For any other modifications, your continued use of the Website constitutes agreement to our revisions of these Terms of Service. You can view all changes to these Terms in our [Site Policy](https://github.com/github/site-policy) repository.

We reserve the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Website (or any part of it) with or without notice.

### R. Miscellaneous

#### 1. Governing Law
Except to the extent applicable law provides otherwise, this Agreement between you and GitHub and any access to or use of the Website or the Service are governed by the federal laws of the United States of America and the laws of the State of California, without regard to conflict of law provisions. You and GitHub agree to submit to the exclusive jurisdiction and venue of the courts located in the City and County of San Francisco, California.

#### 2. Non-Assignability
GitHub may assign or delegate these Terms of Service and/or the [GitHub Privacy Statement](https://github.com/site/privacy), in whole or in part, to any person or entity at any time with or without your consent, including the license grant in Section D.4. You may not assign or delegate any rights or obligations under the Terms of Service or Privacy Statement without our prior written consent, and any unauthorized assignment and delegation by you is void.

#### 3. Section Headings and Summaries
Throughout this Agreement, each section includes titles and brief summaries of the following terms and conditions. These section titles and brief summaries are not legally binding.

#### 4. Severability, No Waiver, and Survival
If any part of this Agreement is held invalid or unenforceable, that portion of the Agreement will be construed to reflect the parties’ original intent. The remaining portions will remain in full force and effect. Any failure on the part of GitHub to enforce any provision of this Agreement will not be considered a waiver of our right to enforce such provision. Our rights under this Agreement will survive any termination of this Agreement.

#### 5. Amendments; Complete Agreement
This Agreement may only be modified by a written amendment signed by an authorized representative of GitHub, or by the posting by GitHub of a revised version in accordance with [Section Q. Changes to These Terms](#q-changes-to-these-terms). These Terms of Service, together with the GitHub Privacy Statement, represent the complete and exclusive statement of the agreement between you and us. This Agreement supersedes any proposal or prior agreement oral or written, and any other communications between you and GitHub relating to the subject matter of these terms including any confidentiality or nondisclosure agreements.

#### 6. Questions
Questions about the Terms of Service? [Contact us](https://support.github.com/contact).''
