---
title: Thiết lập Git
shortTitle: Thiết lập Git
redirect_from:
  - /git-installation-redirect
  - /linux-git-installation
  - /linux-set-up-git
  - /mac-git-installation
  - /mac-set-up-git
  - /set-up-git-redirect
  - /win-git-installation
  - /win-set-up-git
  - /articles/set-up-git
  - /github/getting-started-with-github/set-up-git
  - /github/getting-started-with-github/quickstart/set-up-git
  - /get-started/quickstart/set-up-git
  - /get-started/getting-started-with-git/set-up-git
intro: 'Trọng tâm của {% data variables.product.prodname_dotcom %} là hệ thống kiểm soát phiên bản (VCS) mã nguồn mở có tên Git. Git chịu trách nhiệm cho mọi thứ liên quan đến {% data variables.product.prodname_dotcom %} xảy ra cục bộ trên máy tính của bạn.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Set up Git
---

## Sử dụng Git

Để dùng Git trên dòng lệnh, bạn cần tải về, cài đặt và cấu hình Git trên máy tính. Bạn cũng có thể cài đặt {% data variables.product.prodname_cli %} để sử dụng {% data variables.product.prodname_dotcom %} từ dòng lệnh. Để biết thêm thông tin, xem [AUTOTITLE](/github-cli/github-cli/about-github-cli).

Nếu muốn làm việc với Git cục bộ nhưng không muốn dùng dòng lệnh, bạn có thể tải về và cài đặt ứng dụng [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}). Để biết thêm thông tin, xem [AUTOTITLE](/desktop/overview/about-github-desktop).

Nếu bạn không cần làm việc với file cục bộ, {% data variables.product.github %} cho phép hoàn thành nhiều thao tác liên quan đến Git trực tiếp trên trình duyệt, bao gồm:

* [AUTOTITLE](/repositories/creating-and-managing-repositories/quickstart-for-repositories)
* [AUTOTITLE](/pull-requests/how-tos/work-with-forks/fork-a-repo)
* [Quản lý file](/repositories/working-with-files/managing-files)

## Thiết lập Git

1. [Tải về và cài đặt phiên bản Git mới nhất](https://git-scm.com/downloads).

   > [!NOTE]
   > Hầu hết thiết bị Chrome OS từ năm 2020 trở đi hiện có môi trường Linux tích hợp sẵn, trong đó bao gồm Git. Để kích hoạt, mở Launcher, tìm kiếm Linux, và nhấp **Turn on** (Bật).
   >
   > Nếu bạn đang dùng thiết bị Chrome OS cũ hơn, cần dùng phương pháp khác:
   >
   > 1. Cài đặt trình giả lập terminal như Termux từ Google Play Store trên thiết bị Chrome OS.
   > 1. Từ trình giả lập terminal vừa cài, cài đặt Git. Ví dụ: trong Termux, nhập `pkg install git` rồi gõ `y` khi được nhắc.

1. [Đặt tên người dùng trong Git](/get-started/git-basics/setting-your-username-in-git).
1. [Đặt địa chỉ email commit trong Git](/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address).

## Xác thực với {% data variables.product.github %} từ Git

Khi kết nối với repository trên {% data variables.product.github %} từ Git, bạn cần xác thực với {% data variables.product.github %} bằng HTTPS hoặc SSH.

> [!NOTE]
> Bạn có thể xác thực với {% data variables.product.github %} bằng {% data variables.product.prodname_cli %}, cho cả HTTPS lẫn SSH. Để biết thêm thông tin, xem [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

### Kết nối qua HTTPS (khuyến nghị)

Nếu clone bằng HTTPS, bạn có thể lưu cache thông tin xác thực {% data variables.product.prodname_dotcom %} trong Git bằng trình hỗ trợ credential. Để biết thêm thông tin, xem [AUTOTITLE](/get-started/git-basics/about-remote-repositories#cloning-with-https-urls) và [AUTOTITLE](/get-started/git-basics/caching-your-github-credentials-in-git).

### Kết nối qua SSH

Nếu clone bằng SSH, bạn phải tạo SSH key trên từng máy tính dùng để push hoặc pull từ {% data variables.product.github %}. Để biết thêm thông tin, xem [AUTOTITLE](/get-started/git-basics/about-remote-repositories#cloning-with-ssh-urls) và [AUTOTITLE](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

## Các bước tiếp theo

Bây giờ bạn đã cài đặt xong Git và {% data variables.product.github %}. Bạn có thể chọn tạo repository để lưu trữ dự án. Lưu code trong repository cho phép bạn sao lưu công việc và chia sẻ với cả thế giới.

* {% data reusables.getting-started.create-a-repository %}

* {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
