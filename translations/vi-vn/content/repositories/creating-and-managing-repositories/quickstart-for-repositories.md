---
title: Bắt đầu nhanh với repository
shortTitle: Bắt đầu nhanh với repository
redirect_from:
  - /create-a-repo
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
  - /github/getting-started-with-github/quickstart/create-a-repo
  - /get-started/quickstart/create-a-repo
intro: Tìm hiểu cách tạo repository mới và thực hiện thay đổi đầu tiên trong 5 phút.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: get-started
category:
  - Create and set up a repository
---

## Tạo repository

Repository trên {% data variables.product.github %} lưu trữ nhiều loại dự án khác nhau. Trong hướng dẫn này, bạn sẽ tạo một repository và thực hiện thay đổi đầu tiên.

{% webui %}

{% data reusables.repositories.create_new %}
1. Nhập tên ngắn gọn, dễ nhớ cho repository. Ví dụ: "hello-world".

   ![Ảnh chụp màn hình bước đầu tiên khi tạo repository. Trường "Repository name" chứa văn bản "hello-world" và được viền màu cam đậm.](/assets/images/help/repository/create-repository-name.png)
1. Tùy chọn, thêm mô tả cho repository. Ví dụ: "Repository đầu tiên của tôi trên {% data variables.product.github %}."
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

Chúc mừng! Bạn đã tạo thành công repository đầu tiên và khởi tạo nó với file _README_.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. Trong dòng lệnh, điều hướng đến thư mục nơi bạn muốn tạo bản sao cục bộ của dự án mới.
1. Để tạo repository cho dự án, dùng lệnh con `gh repo create`. Khi được nhắc, chọn **Create a new repository on GitHub from scratch** và nhập tên dự án mới. Nếu muốn dự án thuộc về một tổ chức thay vì tài khoản cá nhân, hãy chỉ định tên tổ chức và tên dự án theo định dạng `ten-to-chuc/ten-du-an`.
1. Làm theo các lời nhắc tương tác. Để clone repository về máy cục bộ, xác nhận yes khi được hỏi có muốn clone thư mục dự án từ remote không.
1. Hoặc, để bỏ qua các lời nhắc, cung cấp tên repository và cờ visibility (`--public`, `--private`, hoặc `--internal`). Ví dụ: `gh repo create ten-du-an --public`. Để clone repository về máy cục bộ, truyền cờ `--clone`. Để biết thêm về các đối số có thể dùng, xem [hướng dẫn GitHub CLI](https://cli.github.com/manual/gh_repo_create).

{% endcli %}

## Thực hiện thay đổi đầu tiên

{% webui %}

[Commit](/get-started/learning-about-github/github-glossary#commit) giống như ảnh chụp nhanh toàn bộ các file trong dự án của bạn tại một thời điểm cụ thể.

Khi tạo repository mới, bạn đã khởi tạo nó với file _README_. File _README_ là nơi tuyệt vời để mô tả chi tiết hơn về dự án, hoặc thêm tài liệu hướng dẫn như cách cài đặt hoặc sử dụng dự án. Nội dung file _README_ sẽ tự động hiển thị trên trang chính của repository.

Hãy commit một thay đổi vào file README.

1. Trong danh sách file của repository, chọn **README.md**.

   ![Ảnh chụp màn hình danh sách file trong repository. Tên file "README.md" được tô sáng bằng viền màu cam.](/assets/images/help/repository/create-commit-open-readme.png)
{% data reusables.repositories.edit-file-button %}
1. Trong hộp văn bản, nhập một số thông tin về bản thân.
{% data reusables.files.preview_change %}
1. Xem lại các thay đổi bạn đã thực hiện với file. Nếu chọn **Show diff**, bạn sẽ thấy nội dung mới được tô màu xanh lá.

   ![Ảnh chụp màn hình xem trước file. Ô "Show diff" được bật và các phần thêm vào file hiển thị với dòng màu xanh lá. Cả hai đều được viền màu cam.](/assets/images/help/repository/create-commit-review.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% endwebui %}

{% cli %}

Bây giờ bạn đã tạo dự án, hãy bắt đầu thực hiện thay đổi.

File _README_ là nơi tuyệt vời để mô tả chi tiết hơn về dự án, hoặc thêm tài liệu như cách cài đặt hoặc sử dụng. Nội dung file _README_ sẽ tự động hiển thị trên trang chính của repository. Thực hiện các bước sau để thêm file _README_.

1. Trong dòng lệnh, điều hướng đến thư mục gốc của dự án mới. (Thư mục này được tạo khi bạn chạy lệnh `gh repo create`.)
1. Tạo file _README_ với một số thông tin về dự án.

    ```shell
    echo "thông tin về dự án này" >> README.md
    ```

1. Nhập `git status`. Bạn sẽ thấy có file `README.md` chưa được theo dõi.

    ```shell
    $ git status

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
      README.md

    nothing added to commit but untracked files present (use "git add" to track)
    ```

1. Stage và commit file.

    ```shell
    git add README.md && git commit -m "Add README"
    ```

1. Push các thay đổi lên nhánh.

    ```shell
    git push --set-upstream origin HEAD
    ```

{% endcli %}

## Các bước tiếp theo

Bây giờ bạn đã tạo một repository bao gồm file _README_ và thực hiện commit đầu tiên trên {% data variables.product.prodname_dotcom %}.

{% webui %}

* Bạn có thể clone repository trên {% data variables.product.prodname_dotcom %} để tạo bản sao cục bộ trên máy tính. Từ repository cục bộ, bạn có thể commit và tạo pull request để cập nhật các thay đổi lên upstream repository. Để biết thêm thông tin, xem [AUTOTITLE](/repositories/creating-and-managing-repositories/cloning-a-repository) và [AUTOTITLE](/get-started/git-basics/set-up-git).

{% endwebui %}

* Bảo mật repository của bạn bằng các tính năng bảo mật có sẵn trên {% data variables.product.github %}. Để biết thêm thông tin, xem [AUTOTITLE](/code-security/getting-started/quickstart-for-securing-your-repository).

* Bạn có thể tìm các dự án và repository thú vị trên {% data variables.product.prodname_dotcom %} và thực hiện thay đổi bằng cách tạo fork của repository. {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
