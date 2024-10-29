---
title: Writing a listing description for your app
intro: 'To [list your app](/marketplace/listing-on-github-marketplace/) in the {% data variables.product.prodname_marketplace %}, you''ll need to write descriptions of your app and provide images that follow GitHub''s guidelines.'
redirect_from:
  - /apps/marketplace/getting-started-with-github-marketplace-listings/guidelines-for-writing-github-app-descriptions
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/writing-github-app-descriptions
  - /apps/adding-integrations/listing-apps-on-github-marketplace/guidelines-for-creating-a-github-marketplace-listing
  - /apps/marketplace/listing-apps-on-github/guidelines-for-creating-a-github-marketplace-listing
  - /apps/marketplace/getting-started-with-github-marketplace-listings/guidelines-for-creating-github-marketplace-listing-images
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/creating-github-marketplace-listing-images
  - /apps/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions
  - /marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions
  - /developers/github-marketplace/writing-a-listing-description-for-your-app
  - /developers/github-marketplace/listing-an-app-on-github-marketplace/writing-a-listing-description-for-your-app
  - /apps/publishing-apps-to-github-marketplace/listing-an-app-on-github-marketplace/writing-a-listing-description-for-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Write listing descriptions
---

{% data reusables.marketplace.marketplace-apps-not-actions %}

Here are guidelines about the fields you'll need to fill out in the **Listing description** section of your draft listing.

## Naming and links

### Listing name

Your listing's name will appear on the [{% data variables.product.prodname_marketplace %} homepage](https://github.com/marketplace). The name is limited to 255 characters and can be different from your app's name. Your listing cannot have the same name as an existing account on {% data variables.product.github %}, unless the name is your own user or organization name.

### Very short description of listing

The community will see the "very short" description under your app's name on the [{% data variables.product.prodname_marketplace %} homepage](https://github.com/marketplace).

![Screenshot of the short description for an app on the {% data variables.product.prodname_marketplace %}.](/assets/images/marketplace/marketplace-short-description.png)

#### Length of "Very short description"

We recommend keeping short descriptions to 40-80 characters. Although you are allowed to use more characters, concise descriptions are easier for customers to read and understand quickly.

#### Content of "Very short description"

* Describe the app’s functionality. Don't use this space for a call to action. For example:

  **DO:** Lightweight project management for {% data variables.product.company_short %} issues

  **DON'T:** Manage your projects and issues on {% data variables.product.company_short %}

  **Tip:** Add an "s" to the end of the verb in a call to action to turn it into an acceptable description: _Manages your projects and issues on {% data variables.product.company_short %}_

* Don’t repeat the app’s name in the description.

  **DO:** A container-native continuous integration tool

  **DON'T:** Skycap is a container-native continuous integration tool

#### Formatting of "Very short description"

* Always use sentence-case capitalization. Only capitalize the first letter and proper nouns.

* Don't use punctuation at the end of your short description. Short descriptions should not include complete sentences, and definitely should not include more than one sentence.

* Only capitalize proper nouns. For example:

  **DO:** One-click delivery automation for web developers

  **DON'T:** One-click delivery automation for Web Developers

* Always use a [serial comma](https://en.wikipedia.org/wiki/Serial_comma) in lists.

* Avoid referring to the {% data variables.product.company_short %} community as "users."

  **DO:** Create issues automatically for people in your organization

  **DON'T:** Create issues automatically for an organization's users

* Avoid acronyms unless they’re well established (such as API). For example:

  **DO:** Agile task boards, estimates, and reports without leaving {% data variables.product.company_short %}

  **DON'T:** Agile task boards, estimates, and reports without leaving {% data variables.product.company_short %}'s UI

### Categories

Apps in {% data variables.product.prodname_marketplace %} can be displayed by category. Select the category that best describes the main functionality of your app in the **Primary category** dropdown, and optionally select a **Secondary category** that fits your app.

### Supported languages

If your app only works with specific languages, select up to 10 programming languages that your app supports. These languages are displayed on your app's {% data variables.product.prodname_marketplace %} listing page. This field is optional.

### Listing URLs

**Required URLs**
* **Customer support URL:** The URL of a web page that your customers will go to when they have technical support, product, or account inquiries.
* **Privacy policy URL:** The web page that displays your app's privacy policy.
* **Installation URL:** This field is shown for {% data variables.product.prodname_oauth_apps %} only. ({% data variables.product.prodname_github_apps %} don't use this URL because they use the optional Setup URL from the {% data variables.product.prodname_github_app %}'s settings page instead.) When a customer purchases your {% data variables.product.prodname_oauth_app %}, {% data variables.product.company_short %} will redirect customers to the installation URL after they install the app. You will need to redirect customers to `https://github.com/login/oauth/authorize` to begin the OAuth authorization flow. See "[AUTOTITLE](/apps/github-marketplace/using-the-github-marketplace-api-in-your-app/handling-new-purchases-and-free-trials)" for more details. Skip this field if you're listing a {% data variables.product.prodname_github_app %}.

**Optional URLs**
* **Company URL:** A link to your company's website.
* **Status URL:** A link to a web page that displays the status of your app. Status pages can include current and historical incident reports, web application uptime status, and scheduled maintenance.
* **Documentation URL:** A link to documentation that teaches customers how to use your app.

## Logo and feature card

{% data variables.product.prodname_marketplace %} displays all listings with a square logo image inside a circular badge to visually distinguish apps.

![Screenshot of the {% data variables.product.prodname_marketplace %} logo and badge images.](/assets/images/marketplace/marketplace-logo-and-badge.png)

A feature card consists of your app's logo, name, and a custom background image that captures your brand personality. {% data variables.product.prodname_marketplace %} displays this card if your app is one of the four randomly featured apps at the top of the [homepage](https://github.com/marketplace). Each app's very short description is displayed below its feature card.

![Screenshot of a feature card for OctocatApp. The app's name and an icon of Mona are displayed on a pink background, above the description "United we code."](/assets/images/marketplace/marketplace-feature-card.png)

As you upload images and select colors, your {% data variables.product.prodname_marketplace %} draft listing will display a preview of your logo and feature card.

### Guidelines for logos

You must upload a custom image for the logo. For the badge, choose a background color.

* Upload a logo image that is at least 200 pixels x 200 pixels so your logo won't have to be upscaled when your listing is published.
* Logos will be cropped to a square. We recommend uploading a square image file with your logo in the center.
* For best results, upload a logo image with a transparent background.
* To give the appearance of a seamless badge, choose a badge background color that matches the background color (or transparency) of your logo image.
* Avoid using logo images with words or text in them. Logos with text do not scale well on small screens.

### Guidelines for feature cards

You must upload a custom background image for the feature card. For the app's name, choose a text color.

* Use a pattern or texture in your background image to give your card a visual identity and help it stand out against the dark background of the {% data variables.product.prodname_marketplace %} homepage. Feature cards should capture your app's brand personality.
* Background image measures 965 pixels x 482 pixels (width x height).
* Choose a text color for your app's name that shows up clearly over the background image.

## Listing details

To get to your app's landing page, click your app's name from the {% data variables.product.prodname_marketplace %} homepage or category page. The landing page displays a longer description of the app, which includes two parts: an "Introductory description" and a "Detailed description."

Your "Introductory description" is displayed at the top of your app's {% data variables.product.prodname_marketplace %} landing page.

![Screenshot of the {% data variables.product.prodname_marketplace %} introductory description.](/assets/images/marketplace/marketplace-intro-description.png)

Clicking **Read more...**, displays the "Detailed description."

Follow these guidelines for writing these descriptions.

### Length of "Introductory description" and "Detailed description"

We recommend writing a 1-2 sentence high-level summary between 150-250 characters in the required "Introductory description" field when [listing your app](/apps/github-marketplace/listing-an-app-on-github-marketplace). Although you are allowed to use more characters, concise summaries are easier for customers to read and understand quickly.

You can add more information in the optional "Detailed description" field. You see this description when you click **Read more...** below the introductory description on your app's landing page. A detailed description consists of 3-5 [value propositions](https://en.wikipedia.org/wiki/Value_proposition), with 1-2 sentences describing each one. You can use up to 1,000 characters for this description.

### Content of "Introductory description" and "Detailed description"

* Always begin introductory descriptions with your app's name.

* Always write descriptions and value propositions using the active voice.

### Formatting of "Introductory description" and "Detailed description"

* Always use sentence-case capitalization in value proposition titles. Only capitalize the first letter and proper nouns.

* Use periods in your descriptions. Avoid exclamation marks.

* Don't use punctuation at the end of your value proposition titles. Value proposition titles should not include complete sentences, and should not include more than one sentence.

* For each value proposition, include a title followed by a paragraph of description. Format the title as a [level-three header](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#headings) using Markdown. For example:

### Learn the skills you need

  {% data variables.product.prodname_learning %} can help you learn how to use {% data variables.product.company_short %}, communicate more effectively with Markdown, handle merge conflicts, and more.

* Only capitalize proper nouns.

* Always use the [serial comma](https://en.wikipedia.org/wiki/Serial_comma) in lists.

* Avoid referring to the {% data variables.product.company_short %} community as "users."

  **DO:** Create issues automatically for people in your organization

  **DON'T:** Create issues automatically for an organization's users

* Avoid acronyms unless they’re well established (such as API).

## Product screenshots

You can upload up to five screenshot images of your app to display on your app's landing page. Add an optional caption to each screenshot to provide context. After you upload your screenshots, you can drag them into the order you want them to be displayed on the landing page.

### Guidelines for screenshots

* Images must be of high resolution (at least 1200px wide).
* All images must be the same height and width (aspect ratio) to avoid page jumps when people click from one image to the next.
* Show as much of the user interface as possible so people can see what your app does.
* When taking screenshots of your app in a browser, only include the content in the display window. Avoid including the address bar, title bar, or toolbar icons, which do not scale well to smaller screen sizes.
* {% data variables.product.company_short %} displays the screenshots you upload in a box on your app's landing page, so you don't need to add boxes or borders around your screenshots.
* Captions are most effective when they are short and snappy.

![Screenshot of an example of a product screenshot of an app on the {% data variables.product.prodname_marketplace %}.](/assets/images/marketplace/marketplace-screenshots.png)
