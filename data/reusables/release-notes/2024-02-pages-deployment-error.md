On an instance with GitHub Actions enabled, Actions workflows that deploy GitHub Pages sites may fail with the following error:

```text
Error: Deployment failed, try again later.
```

To fix this issue, connect to any of the instance's nodes using SSH, then run the following commands.

```shell
if [ -d "$CHROOT_PATH/data/pages-untar" ] ; then
  rm -rf "$CHROOT_PATH/data/pages-untar"
fi
pages_untar_image_tag="$(cat "$CHROOT_PATH/data/docker-image-tags/pages_untar_image_tag")"
id="$(docker create "pages-untar:$pages_untar_image_tag")"
sudo docker cp "$id:/data/pages-untar" "$BASE_PATH/$CHROOT_PATH/data/pages-untar/"
docker rm "$id"
```
