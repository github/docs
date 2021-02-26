---
title: Displaying a sponsor button in your repository
intro: You can add a sponsor button in your repository to increase the visibility of funding options for your open source project.
redirect_from:
  - /github/building-a-strong-community/displaying-a-sponsor-button-in-your-repository
  - /articles/displaying-a-sponsor-button-in-your-repository
versions:
  free-pro-team: '*'
---

### About FUNDING files

You can configure your sponsor button by editing a _FUNDING.yml_ file in your repository's `.github` folder, on the default branch. You can configure the button to include sponsored developers in {% data variables.product.prodname_sponsors %}, external funding platforms, or a custom funding URL. For more information about {% data variables.product.prodname_sponsors %}, see "[About GitHub Sponsors](/articles/about-github-sponsors)."

You can add one username, package name, or project name per external funding platform and up to four custom URLs. You can add up to four sponsored developers or organizations in {% data variables.product.prodname_sponsors %}. Add each platform on a new line, using the following syntax:

Platform | Syntax
-------- | -----
angular/aio/content/guide/cli-builder.md
NextTurn-live

LocalModel localModel =

    new LocalModel.Builder()

        .setAssetFilePath("model.tflite")

        // or .setAbsoluteFilePath(absolute file path to model file)

        // or .setUri(URI to model file)

        .build();
        LocalModel localModel =

    new LocalModel.Builder()

        .setAssetFilePath("model.tflite")

        // or .setAbsoluteFilePath(absolute file path to model file)

        // or .setUri(URI to model file)

        .build();
        dependencies {

  // ...

  // Object detection & tracking feature with custom bundled model

  implementation 'com.google.mlkit:object-detection-custom:16.3.1'

}
NextTurn-live<h2>Products</h2>

<div *ngFor="let product of products">

</div><h2>Products</h2>

<div *ngFor="let product of products">

  <h3>

      {{ product.name }}

  </h3>

</div>LocalModel localModel =

    new LocalModel.Builder()

        .setAssetFilePath("model.tflite")

        // or .setAbsoluteFilePath(absolute file path to model file)

        // or .setUri(URI to model file)

        .build();dependencies {

  // ...

  // Object detection & tracking feature with custom bundled model

  implementation 'com.google.mlkit:object-detection-custom:16.3.1'

}Console.WriteLine("Hello World!");console.WriteLine("Hello World!");                              <type>pom</type>
{

  "type": "object",

  "properties": {

    "success": {

      "type": "boolean"

    }

  }

}

123456789101112131415161718192021222324252627282930313233343536

# This file is part of PulseAudio.

#

# PulseAudio is free software; you can redistribute it and/or modify

# it under the terms of the GNU Lesser General Public License as published by

# the Free Software Foundation; either version 2 of the License, or

# (at your option) any later version.

#

# PulseAudio is distributed in the hope that it will be useful, but

# WITHOUT ANY WARRANTY; without even the implied warranty of

# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
torship (formerly CommunityBridge)](https://lfx.linuxfoundation.org/tools/mentorship) | `community_bridge: PROJECT-NAME`
[{% data variables.product.prodname_sponsors %}](https://github.com/sponsors) | `github: USERNAME` or `github: [USERNAME, USERNAME, USERNAME, USERNAME]`
[IssueHunt](https://issuehunt.io/) | `issuehunt: USERNAME`
[Ko-fi](https://ko-fi.com/) | `ko_fi: USERNAME`
[Liberapay](https://en.liberapay.com/) | `liberapay: USERNAME`
[Open Collective](https://opencollective.com/) | `open_collective: USERNAME`
[Otechie](https://otechie.com/)| `otechie: USERNAME`
[Patreon](https://www.patreon.com/) | `patreon: USERNAME`
[Tidelift](https://tidelift.com/) | `tidelift: PLATFORM-NAME/PACKAGE-NAME`
Custom URL | `custom: LINK1` or `custom: [LINK1, LINK2, LINK3, LINK4]`

For Tidelift, use the `platform-name/package-name` syntax with the following platform names:

Language | Platform name
-------- | -------------
JavaScript | `npm`
Python | `pypi`
Ruby | `rubygems`
Java | `maven`
PHP | `packagist`
C# | `nuget`

Here's an example _FUNDING.yml_ file:
```
github: [octocat, surftocat]
patreon: octocat
tidelift: npm/octo-package
custom: ["https://www.paypal.me/octocat", octocat.com]
```

{% note %}

**Note:** If a custom URL in an array includes `:`, you must wrap the URL in quotes. For example, `"https://www.paypal.me/octocat"`.

{% endnote %}

You can create a default sponsor button for your organization or user account. For more information, see "[Creating a default community health file](/github/building-a-strong-community/creating-a-default-community-health-file)."

{% note %}

Funding links provide a way for open source projects to receive direct financial support from their community. We don’t support the use of funding links for other purposes, such as for advertising, or supporting political, community, or charity groups. If you have questions about whether your intended use is supported, please contact {% data variables.contact.contact_support %}.

{% endnote %}

### Displaying a sponsor button in your repository

Anyone with admin permissions can enable a sponsor button in a repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under Features, select **Sponsorships**.
  ![Checkbox to enable Sponsorships](/assets/images/help/sponsors/sponsorships-checkbox.png)
4. Under "Sponsorships", click **Set up sponsor button** or **Override funding links**.
  ![Button to set up sponsor button](/assets/images/help/sponsors/sponsor-set-up-button.png)
5. In the file editor, follow the instructions in the _FUNDING.yml_ file to add links to your funding locations.
  ![Edit the FUNDING file to add links to funding locations](/assets/images/help/sponsors/funding-yml-file.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### Further reading
- "[About {% data variables.product.prodname_sponsors %} for open source contributors](/github/supporting-the-open-source-community-with-github-sponsors/about-github-sponsors-for-open-source-contributors)"
- "[FAQ with the {% data variables.product.prodname_sponsors %} team](https://github.blog/2019-06-12-faq-with-the-github-sponsors-team/)" on {% data variables.product.prodname_blog %}
