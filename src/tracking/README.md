# Tracking

## Overview

This is about recording inbound links that helps with "tracking".

For example, if you arrive on Docs with `?ghdomain=example.ghe.com` we
can pick that up and put it in a cookie so that the user's content, when
they view it, can say `curl https://example.ghe.com/api/v1` instead
of the stock `curl https://HOSTNAME/api/v1`.

## How it works

For a certain number of query strings, we "snatch them up" and redirect
to the same URL as you were on but with the query string key removed.
And in the 302 Found response, we might include a `set-cookie`.

## Notes

none
