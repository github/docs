---
title: Requesting an archive of your personal account’s data
redirect_from:
  - /articles/requesting-an-archive-of-your-personal-account-s-data
  - /articles/requesting-an-archive-of-your-personal-accounts-data
intro: '{% data reusables.user_settings.export-data %}'
versions:
  free-pro-team: '*'
topics:
  - Policy
  - Legal
---

{% data variables.product.product_name %} stores repository and profile metadata from your personal account's activity. You can export your personal account's data through settings on {% data variables.product.prodname_dotcom_the_website %} or with the User Migration API.

For more information about the data {% data variables.product.product_name %} stores that is available for exporting, see "[Download a user migration archive](/rest/reference/migrations#download-a-user-migration-archive)" and "[About {% data variables.product.product_name %}'s use of your data](/articles/about-github-s-use-of-your-data).

When you request an export of your personal data through settings on {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.product_name %} packages your personal data in a `tar.gz` file and sends you an email to your primary email address with a download link.

By default, the download link expires after seven days. At any time before the download link expires, you can disable the link from your user settings. For more information, see "[Deleting access to an archive of your personal account's data](/articles/requesting-an-archive-of-your-personal-account-s-data/#deleting-access-to-an-archive-of-your-personal-accounts-data)."

If your operating system cannot natively unpack the `tar.gz` file, you can use a third-party tool to extract the archived files. For more information, see "[How to unzip a tar.gz file](https://opensource.com/article/17/7/how-unzip-targz-file)" on Opensource.com.

The generated `tar.gz` file reflects the data stored at the time you started the data export.

### Downloading an archive of your personal account's data

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. Under "Export account data", click **Start export** or **New export**.
![Start personal data export button highlighted](/assets/images/help/repository/export-personal-data.png)
![New personal data export button highlighted](/assets/images/help/repository/new-export.png)
4. Once the export is ready to download, {% data variables.product.product_name %} will send you a download link to your primary email address.
5. Click the download link in your email and re-enter your password if prompted.
6. You'll be redirected to a `tar.gz` file that you can download.

### Deleting access to an archive of your personal account's data

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. To disable the download link sent to your email before it expires, under "Export account data", find the data export download you want to disable and click **Delete**.
![Delete personal data export package button highlighted](/assets/images/help/repository/delete-export-personal-account-data.png)
