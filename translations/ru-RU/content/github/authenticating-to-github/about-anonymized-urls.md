---
title: About anonymized URLs
intro: 'If you upload an image or video to {% data variables.product.product_name %}, the URL of the image or video will be modified so your information is not trackable.'
redirect_from:
  - /articles/why-do-my-images-have-strange-urls/
  - /articles/about-anonymized-image-urls
  - /authenticating-to-github/about-anonymized-image-urls
versions:
  free-pro-team: '*'
topics:
  - Identity
  - Access management
---

To host your images, {% data variables.product.product_name %} uses the [open-source project Camo](https://github.com/atmos/camo). Camo generates an anonymous URL proxy for each file which hides your browser details and related information from other users. The URL starts `https://<subdomain>.githubusercontent.com/`, with different subdomains depending on how you uploaded the image.

Videos also get anonymized URLs with the same format as image URLs, but are not processed through Camo. This is because {% data variables.product.prodname_dotcom %} does not support externally hosted videos, so the anonymized URL is a link to the uploaded video hosted by {% data variables.product.prodname_dotcom %}.

Anyone who receives your anonymized URL, directly or indirectly, may view your image or video. To keep sensitive media files private, restrict them to a private network or a server that requires authentication instead of using Camo.

### Troubleshooting issues with Camo

In rare circumstances, images that are processed through Camo might not appear on {% data variables.product.prodname_dotcom %}. Here are some steps you can take to determine where the problem lies.

{% windows %}

{% tip %}

Windows users will either need to use the Git Powershell (which is installed alongside [{% data variables.product.prodname_desktop %}](https://desktop.github.com/)) or download [curl for Windows](http://curl.haxx.se/download.html).

{% endtip %}

{% endwindows %}

#### An image is not showing up

If an image is showing up in your browser but not on {% data variables.product.prodname_dotcom %}, you can try requesting it locally.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Request the image headers using `curl`.
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/2 200
  > Date: Fri, 06 Jun 2014 07:27:43 GMT
  > Expires: Sun, 06 Jul 2014 07:27:43 GMT
  > Content-Type: image/x-png
  > Server: Google Frontend
  > Content-Length: 6507
  ```
3. Check the value of `Content-Type`. In this case, it's `image/x-png`.
4. Check that content type against [the list of types supported by Camo](https://github.com/atmos/camo/blob/master/mime-types.json).

If your content type is not supported by Camo, you can try several actions:
  * If you own the server that's hosting the image, modify it so that it returns a correct content type for images.
  * If you're using an external service for hosting images, contact support for that service.
  * Make a pull request to Camo to add your content type to the list.

#### An image that changed recently is not updating

If you changed an image recently and it's showing up in your browser but not {% data variables.product.prodname_dotcom %}, you can try resetting the cache of the image.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Request the image headers using `curl`.
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/2 200
  > Expires: Fri, 01 Jan 1984 00:00:00 GMT
  > Content-Type: image/png
  > Content-Length: 2339
  > Server: Jetty(8.y.z-SNAPSHOT)
  ```

Check the value of `Cache-Control`. In this example, there's no `Cache-Control`. In that case:
  * If you own the server that's hosting the image, modify it so that it returns a `Cache-Control` of `no-cache` for images.
  * If you're using an external service for hosting images, contact support for that service.

 If `Cache-Control` *is* set to `no-cache`, contact {% data variables.contact.contact_support %} or search the {% data variables.contact.community_support_forum %}.

#### Removing an image from Camo's cache

Purging the cache forces every {% data variables.product.prodname_dotcom %} user to re-request the image, so you should use it very sparingly and only in the event that the above steps did not work.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Purge the image using `curl -X PURGE` on the Camo URL.
  ```shell
  $ curl -X PURGE https://camo.githubusercontent.com/4d04abe0044d94fefcf9af2133223....
  > {"status": "ok", "id": "216-8675309-1008701"}
  ```

#### Viewing images on private networks

If an image is being served from a private network or from a server that requires authentication, it can't be viewed by {% data variables.product.prodname_dotcom %}. In fact, it can't be viewed by any user without asking them to log into the server.

To fix this, please move the image to a service that is publicly available.

### Дополнительная литература

- "[Proxying user images](https://github.com/blog/1766-proxying-user-images)" on {% data variables.product.prodname_blog %}
