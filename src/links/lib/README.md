# Fixing broken links in GitHub docs

## In this article

- [Automations](#automations)
- [Tips for investigation](#tips-for-investigation)
- [Excluding links from daily checking](#excluding-links-from-daily-checking)

## Automations

Every day, the [`link-check-daily.yml`](https://github.com/github/docs-internal/blob/main/.github/workflows/link-check-daily.yml) GitHub Actions workflow checks all links in the English content on GitHub Docs. The workflow checks both internal links within GitHub Docs and external links to other domains.

If the action finds any broken links, it opens an internal issue for the Docs Content team with the `broken link report` label.

## Tips for investigation

- If there are a lot of broken links, you may find it helpful to copy the report into a text editor, convert it into a tab delimited format, and open in a spreadsheet like Google Sheets. It's then easy to sort columns and group similar issues together.

- A simple test is seeing whether the affected URL loads in your browser. However, you may want to check that the server is returning a successful response code. From Terminal or Git Bash, you can run the following command to inspect a URL's response code. Replace <code><em>URL</em></code> with the full URL for the broken link.
        <pre>
        curl -Lso /dev/null -w "%{http_code}\n" <em>URL</em>
        </pre>
  A `200` response is success. 

- You can see a comprehensive list of HTTP response codes [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).
  - For external links that now `404` or have otherwise gone missing entirely, you may be able to use the [Wayback Machine](https://web.archive.org) to see the page before it went offline.
  - `503` errors are often transient false positives that don't need to be fixed.

- For missing URLs with a `404` or similar response, use any available context from the Wayback Machine, the article with the link, and the URL itself to search the domain that originally contained the working link. The owner of the URL may have relocated the content on their site without a redirect. For example, you can scope a search on Google to a specific site by searching with the `site:` syntax. [Here's a search for "hello" on https://docs.github.com](https://www.google.com/search?q=site%3Adocs.github.com+hello&client=safari&ei=LjhxYav-KJ-J9u8Pl-SJyAY&ved=0ahUKEwirzZi8ndvzAhWfhP0HHRdyAmkQ4dUDCA0&uact=5&oq=site%3Adocs.github.com+hello&gs_lcp=Cgdnd3Mtd2l6EANKBAhBGAFQyQ1Y3hBggRFoAnAAeACAAUGIAeQBkgEBNJgBAKABAcABAQ&sclient=gws-wiz).

- Consider the link within the wider context of the article. It's useful to ask "is this link still necessary?" or "is there a better destination?"

- Seek help if you're not sure where the link should go. The blame view for the article may help you track down who originally added the link.

## Excluding links from daily checking

Before you decide whether to exclude a link from the daily link checker, you should check whether the URL for the article is stable. For example:

- Has it has been flagged as a broken link for more than a week, but the URL works when a real user opens it in their browser?
- Has the URL been available for more than 3 months? You can check using the [Wayback Machine](https://web.archive.org).

If you are confident that the URL for the article should work for real users, then you can open a pull request to add it to the `src/links/lib/excluded-links.js` file.
