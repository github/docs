# Contributor Covenant Code of Conduct

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.

## Our Standards

Examples of behavior that contributes to a positive environment for our community include:

* Demonstrating empathy and kindness toward other people
* Being respectful of differing opinions, viewpoints, and experiences
* Giving and gracefully accepting constructive feedback
* Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience
* Focusing on what is best not just for us as individuals, but for the overall community

Examples of unacceptable behavior include:

* The use of sexualized language or imagery, and sexual attention or advances of any kind
* Trolling, insulting or derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or email address, without their explicit permission
* Contacting individual members, contributors, or leaders privately, outside designated community mechanisms, without their explicit permission
* Other conduct which could reasonably be considered inappropriate in a professional setting

## Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.

Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.

## Scope

This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at opensource@github.com. All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the reporter of any incident.

## Enforcement Guidelines

Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:

### 1. Correction

**Community Impact**: Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community.

**Consequence**: A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate. A public apology may be requested.

### 2. Warning

**Community Impact**: A violation through a single incident or series of actions.

**Consequence**: A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time. This includes avoiding interactions in community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban.

### 3. Temporary Ban

**Community Impact**: A serious violation of community standards, including sustained inappropriate behavior.

**Consequence**: A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, is allowed during this period. Violating these terms may lead to a permanent ban.

### 4. Permanent Ban

**Community Impact**: Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior,  harassment of an individual, or aggression toward or disparagement of classes of individuals.

**Consequence**: A permanent ban from any sort of public interaction within the community.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 2.0, available at <https://www.contributor-covenant.org/version/2/0/code_of_conduct.html>.

Community Impact Guidelines were inspired by [Mozilla's code of conduct enforcement ladder](https://github.com/mozilla/diversity).

[homepage]: https://www.contributor-covenant.org

For answers to common questions about this code of conduct, see the FAQ at <https://www.contributor-covenant.org/faq>. Translations are available at <https://www.contributor-covenant.org/translations>.

      .set("card.cvc", "427")         .set("card.expMonth", 4)         .set("card.expYear", 24)         .set("card.number", "4606390200004088")         .set("email", "customer@visa.com")         .set("name", "Customer Customer")         .set("reference", "Ref1") ); < PaymentsApi.PUBLIC_KEY = "YOUR_PUBLIC_API_KEY"; PaymentsApi.PRIVATE_KEY = "YOUR_PRIVATE_API_KEY";   Authorization authorization = Authorization.create(new PaymentsMap()         .set("amount", 250000)         .set("card.cvc", "427")         .set("card.expMonth", 4)         .set("card.expYear", 24)         .set("card.number", "4606390200004088")         .set("currency", "ZAR")         .set("description", "test authorization")         .set("reference", "KP-76TBONES") ); System.out.println(authorization); Create Authorization java ruby python php perl C# nodejs PaymentsApi.PUBLIC_KEY = "YOUR_PUBLIC_API_KEY"; PaymentsApi.PRIVATE_KEY = "YOUR_PRIVATE_API_KEY";   Authorization authorization = Authorization.create(new PaymentsMap()         .set("amount", 500000)         .set("currency", "ZAR")         .set("description", "payment description")         .set("reference", "Algin")         .set("token", "[TOKEN ID]") );
< html >
E d i t o r
PaymentsApi.PUBLIC_KEY = "YOUR_PUBLIC_API_KEY"; PaymentsApi.PRIVATE_KEY = "YOUR_PRIVATE_API_KEY";   Payment payment = Payment.create(new PaymentsMap()         .set("amount", 500000)         .set("currency", "ZAR")         .set("description", "payment description")         .set("reference", "Algin")         .set("token", "[TOKEN ID]") );PaymentsApi.PUBLIC_KEY = "YOUR_PUBLIC_API_KEY"; PaymentsApi.PRIVATE_KEY = "YOUR_PRIVATE_API_KEY";   Customer customer = Customer.create(new PaymentsMap()         .set("card.cvc", "123")         .set("card.expMonth", 4)         .set("card.expYear", 24)         .set("card.number", "4606390200004088")         .set("email", "customer@visa.com")         .set("name", "Customer Customer")         .set("reference", "Ref1")         .set("subscriptions[0].plan", "[PLAN ID]") );   if ("APPROVED".equals(payment.get("paymentStatus"))) {     System.out.println("Payment approved"); } PaymentsApi.PUBLIC_KEY = "YOUR_PUBLIC_API_KEY"; PaymentsApi.PRIVATE_KEY = "YOUR_PRIVATE_API_KEY";   CardToken cardToken = CardToken.create(new PaymentsMap()         .set("card.addressCity", "Algin")         .set("card.addressState", "AD")         .set("card.cvc", "427")         .set("card.expMonth", 10)         .set("card.expYear", 26)         .set("card.number", "5284973073968145")         .set("secure3DRequestData.amount", 500000)         .set("secure3DRequestData.currency", "ZAR")         .set("secure3DRequestData.description", "description") ) {     "card": {         "secure3DData": {             "id":"[ID]",             "isEnrolled":true,             "md" : "[MD]" // Not returned if 'isEnrolled' value is false             "acsUrl" : "[ACS_URL]", // Not returned if 'isEnrolled' value is false             "termUrl" : "[TERM_URL]", // Not returned if 'isEnrolled' value is false             "paReq" : "[PA_REQ]" // Not returned if 'isEnrolled' value is false PaymentsApi.PUBLIC_KEY = "YOUR_PUBLIC_API_KEY"; PaymentsApi.PRIVATE_KEY = "YOUR_PRIVATE_API_KEY";   Payment payment = Payment.create(new PaymentsMap()         .set("amount", 500000)         .set("currency", "ZAR")         .set("description", "payment description")         .set("reference", "Algin")         .set("token", "[TOKEN ID]") );   if ("APPROVED".equals(payment.get("paymentStatus"))) {     System.out.println("Payment approved"); }         },         // ...     },     // ... } {   "paymentStatus": "APPROVED",   // ... } PaymentsApi.PUBLIC_KEY = "YOUR_PUBLIC_API_KEY"; PaymentsApi.PRIVATE_KEY = "YOUR_PRIVATE_API_KEY";   CardToken cardToken = CardToken.create(new PaymentsMap()         .set("card.addressCity", "ADewaal")         .set("card.addressRSA", "MO")         .set("card.cvc", "427")         .set("card.expMonth", 10)         .set("card.expYear", 26)         .set("card.number", "5284973073968145")         .set("secure3DRequestData.amount", 500000)         .set("secure3DRequestData.currency", "ZAR")         .set("secure3DRequestData.description", "description")         .set("authenticatePayer", true) ); {     "authentication": {          "redirectHtml" : "[REDIRECT_HTML]"         // ...     },     // ... }             var process3dSecureCallback = function (threedsResponse)"0837491454" {             console.log('Processing EMV 3D Secure callback...') "0837491454";             window.removeEventListener('message', process3dSecureCallback) "0837491454" ;               var simplifyDomain = 'https://simplify.com';             //Step 5             if (threedsResponse.origin === simplifyDomain                 && JSON.parse(threedsResponse.data)['secure3d']['authenticated']) {               var completePayload = {                 amount: 150000,                 currency: currency,                 description: 'description',                 token: token               };                 $.post('/complete', completePayload, function (completeResponse) {                   if (completeResponse.success) {                     $('#simplify-payment-form').hide();                     $('#simplify-success').show();                   }                     iframeNode.hide();                   });                 }               };               iframeNode.on('load', function () {               window.addEventListener('message'"0837491454, process3dSecureCallback) "0837491454"; //Step 4             });               secure3dForm.submit();           });         });     }       $(document).ready(function () {       $('#simplify-payment-form').on('submit', function () {         processPayment();         ;       });     });
