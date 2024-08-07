// Delete Prompt
$(document).ready(function () {
  "use strict";

  $("._delete_data").on("click", function (e) {
    var data_id = $(this).attr("data-id");
    var delete_data = document.getElementById("table");
    var delete_message_title = delete_data.getAttribute(
      "data-delete-prompt-title"
    );
    var delete_message_body = delete_data.getAttribute(
      "data-delete-prompt-body"
    );
    var delete_yes = delete_data.getAttribute("data-yes");
    var delete_cancel = delete_data.getAttribute("data-cancel");

    Swal.fire({
      title: delete_message_title,
      text: delete_message_body,
      type: "error",
      showCancelButton: true,
      confirmButtonText: delete_yes,
      cancelButtonText: delete_cancel,
    }).then((result) => {
      if (result.value) {
        $(document)
          .find("#delete_from_" + data_id)
          .submit();
      }
    });
  });
});

// Delete Sitemap
$(document).ready(function () {
  "use strict";

  var lastname_id = $("#add_sitemaps .topic_list").last().attr("class");

  if (lastname_id == null) {
    $('#sitemap-warning').removeClass("d-none");
  }

  $(document).on("click", ".delete-sitemap", function () {
    var delete_data = document.getElementById("add_sitemaps");
    var delete_message_title = delete_data.getAttribute(
      "data-delete-prompt-title"
    );
    var delete_message_body = delete_data.getAttribute(
      "data-delete-prompt-body"
    );
    var delete_yes = delete_data.getAttribute("data-yes");
    var delete_cancel = delete_data.getAttribute("data-cancel");

    Swal.fire({
      title: delete_message_title,
      text: delete_message_body,
      type: "error",
      showCancelButton: true,
      confirmButtonText: delete_yes,
      cancelButtonText: delete_cancel,
    }).then((result) => {
      if (result.value) {
        $(this).closest(".topic_list").remove();
        var lastname_id = $("#add_sitemaps .topic_list").last().attr("class");

        if (lastname_id == null) {
          $('#sitemap-warning').removeClass("d-none");
        }
      }
    });
  });
});

// Sort Posts
$(function () {
  "use strict";

  $(".sortable-posts").sortable({
    stop: function () {
      var sort_type = $(this).attr("id");
      $.map($(this).find("tr"), function (el) {
        var id = el.id;
        var sort = $(el).index();
        var success_notification = 0;

        $.ajax({
          url: sort_type,
          type: "GET",
          data: {
            id: id,
            sort: sort,
          },
          success: function (response) {
            if (response == "success") {
              var notify = new notificationManager({
                container: $("#notificationsContainer"),
              });

              var anim = true;
              var auto = true;

              notify.setPosition("topright");

              notify.addNotification({
                message: "Item has been sorted successfully.",
                animate: anim,
                autoRemove: auto,
                backgroundColor: "#92c66c",
                progressColor: "#fff",
              });
            } else {
              var notify = new notificationManager({
                container: $("#notificationsContainer"),
              });

              var anim = true;
              var auto = true;

              notify.setPosition("topright");

              notify.addNotification({
                message: "An error occoured.",
                animate: anim,
                autoRemove: auto,
                backgroundColor: "#ce2525",
                progressColor: "#fff",
              });
            }
          },
        });
        $(".sortable-posts").disableSelection();
      });
    },
  });
});

// Summernote - Text Editor
$(function () {
  "use strict";

  $(".textarea").summernote({ height: 250 });

  $(".language-area").on(
    "summernote.change",
    function (we, contents, $editable) {
      $("#val_" + we.target.id).val(contents);
    }
  );

  $(".textarea-style").on(
    "summernote.change.codeview",
    function (we, contents, $editable) {
      $(".textarea-style").val(contents);
    }
  );
});

// Sort Posts
$(function () {
  "use strict";

  $(".sortable-items").sortable({
    stop: function () {
      var sort_type = $(this).attr("id");
      $.map($(this).find("tr"), function (el) {
        var id = el.id;
        var sort = $(el).index();
        var success_notification = 0;
        var sort_url = "" + "/../../" + sort_type + "";
        $.ajax({
          url: +"../" + sort_url,
          type: "GET",
          data: {
            id: id,
            sort: sort,
          },
          success: function (response) {
            if (response == "success") {
              var notify = new notificationManager({
                container: $("#notificationsContainer"),
              });

              var anim = true;
              var auto = true;

              notify.setPosition("topright");

              notify.addNotification({
                message: "Item has been sorted successfully.",
                animate: anim,
                autoRemove: auto,
                backgroundColor: "#92c66c",
                progressColor: "#fff",
              });
            } else {
              var notify = new notificationManager({
                container: $("#notificationsContainer"),
              });

              var anim = true;
              var auto = true;

              notify.setPosition("topright");

              notify.addNotification({
                message: "An error occoured.",
                animate: anim,
                autoRemove: auto,
                backgroundColor: "#ce2525",
                progressColor: "#fff",
              });
            }
          },
        });
        $(".sortable-items").disableSelection();
      });
    },
  });
});

// Solve Problem Redirection
$(document).on("click", "._solve_data", function (e) {
  var data_id = $(this).attr("data-id");
  $(document)
    .find("#solve_from_" + data_id)
    .submit();
});

// Unsolve Problem Redirection
$(document).on("click", "._unsolve_data", function (e) {
  var data_id = $(this).attr("data-id");
  $(document)
    .find("#unsolve_from_" + data_id)
    .submit();
});

$(document).ready(function () {
  "use strict";

  $(".custom-file-input").change(function () {
    $(this).closest(".custom-file").addClass("select-image");
  });
});

$(function () {
  $(".shortcodes a").click(function () {
    var value = $(this).text();
    var input = $(this).closest(".col-md-12").find("input");
    var_input = JSON.stringify(input.length);
    if (var_input == "0") {
      input = $(this).closest(".col-md-12").find("textarea");
    }
    input.val(input.val() + value + " ");
    return false;
  });
});

// Query Cache Clear Prompt
$(document).ready(function () {
  "use strict";

  $("#clear_cache").click(function (e) {
    event.preventDefault();

    var delete_data = document.getElementById("cache-info");
    var delete_yes = delete_data.getAttribute("data-yes");
    var delete_cancel = delete_data.getAttribute("data-cancel");
    var title = delete_data.getAttribute("data-title");
    var text = delete_data.getAttribute("data-text");

    var url = $(this).find("a").attr("href");

    Swal.fire({
      title: "" + title + "",
      text: "" + text + "",
      type: "question",
      showCancelButton: true,
      confirmButtonText: delete_yes,
      cancelButtonText: delete_cancel,
    }).then((result) => {
      if (result.value) {
        window.location = url;
      }
    });
  });
});

// Color Picker
$(function () {
  $(".my-colorpicker2").colorpicker();
});

// Ekko Lightbox
$(function () {
  "use strict";

  $(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox({
      alwaysShowClose: false,
    });
  });
});

// Sort topics
$(function () {
  "use strict";

  $(".sortable-topics").sortable({});
});

// Add/Delete Topic Items
$(document).ready(function () {
  "use strict";

  var data_id = $(this).attr("data-id");
  var delete_data = document.getElementById("table");
  var delete_text = delete_data.getAttribute("data-delete");
  var app_title_text = delete_data.getAttribute("data-app-title");

  // Get List of Apps
  $(document).on("keydown", ".topiclist", function () {
    var id = this.id;
    var splitid = id.split("_");
    var index = splitid[1];

    var base_url = $("meta[property=base_url]").attr("content");
    var url = base_url + "/topics/details";

    $("#" + id).autocomplete({
      source: function (request, response) {
        $.ajax({
          headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
          },
          url: url,
          type: "post",
          dataType: "json",
          data: {
            search: request.term,
            request: 1,
          },
          success: function (data) {
            response(data);
          },
        });
      },
      select: function (event, ui) {
        $(this).val(ui.item.label);
        var app_id = ui.item.value;

        var base_url = $("meta[property=base_url]").attr("content");
        var url = base_url + "/topics/details";
    
        $.ajax({
          headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
          },
          url: url,
          type: "post",
          data: {
            app_id: app_id,
            request: 2,
          },
          dataType: "json",
          success: function (response) {
            var len = response.length;

            if (len > 0) {
              var id = response[0]["id"];
              var img = response[0]["image"];

              document.getElementById("appid_" + index).value = id;
              document.getElementById("img_" + index).src = img;
            }
          },
        });

        return false;
      },
    });
  });

  // Topic Item Delete Prompt
  $(document).ready(function () {
    "use strict";

    $(".sortable-topics").on("click", "._delete_topic", function (e) {
      var data_id = $(this).attr("data-id");
      var delete_data = document.getElementById("table");
      var delete_message = delete_data.getAttribute("data-delete-prompt");
      var delete_yes = delete_data.getAttribute("data-yes");
      var delete_cancel = delete_data.getAttribute("data-cancel");

      Swal.fire({
        title: delete_message,
        type: "error",
        showCancelButton: true,
        confirmButtonText: delete_yes,
        cancelButtonText: delete_cancel,
      }).then((result) => {
        if (result.value) {
          var del_tr = $(this).closest("tr");
          del_tr.remove();

          var lastname_id = $(".topic_list input[type=text]:nth-child(1)")
            .last()
            .attr("id");

          if (lastname_id == null) {
            $("#add_more").trigger("click");
          }
        }
      });
    });
  });

  // Add More Topic Item
  $("#add_more").click(function () {
    "use strict";

    var lastname_id = $(".topic_list input[type=text]:nth-child(1)")
      .last()
      .attr("id");

    if (lastname_id != null) {
      var split_id = lastname_id.split("_");
      var index = Number(split_id[1]) + 1;
    } else {
      var index = 1;
    }

    var html =
      "<tr class='topic_list'><td><img src='/images/no_image.png' id='img_" +
      index +
      "' class='img-w100'></td><td><input type='text' onclick='this.focus(); this.select()' class='topiclist form-control' id='topiclist_" +
      index +
      "' placeholder='" +
      app_title_text +
      "'><input type='button' value='" +
      delete_text +
      "' class='btn btn-sm bg-red mt-3 _delete_topic' id='remove'></td><input type='hidden' class='appid' id='appid_" +
      index +
      "' name='appid_" +
      index +
      "'></tr>";

    $("tbody").append(html);
  });
});

// Remove screenshots
$(document).ready(function () {
  "use strict";

  $(".remove_screenshot").click(function () {
    var screenshots_data = document.getElementById("screenshots");
    var success = screenshots_data.getAttribute("data-success");
    var succesfully_deleted = screenshots_data.getAttribute(
      "data-succesfully-deleted"
    );

    var base_url = $("meta[property=base_url]").attr("content");
    var url = base_url + "/multiple-file-upload/delete";

    $(this).closest(".col-md-2").fadeOut("300");
    var image_name = $(this).data("name");
    var app_id = $(this).data("app-id");
    $.ajax({
      headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
      url: url,
      type: "POST",
      data: { image_name: image_name, app_id: app_id },
    }).done(function (data) {
      Swal.fire(success, succesfully_deleted, "success");
    });
  });
});

// Remove screenshots
function bindFunc() {
  "use strict";

  $(".remove_screenshot").click(function () {
    var screenshots_data = document.getElementById("screenshots");
    var success = screenshots_data.getAttribute("data-success");
    var succesfully_deleted = screenshots_data.getAttribute(
      "data-succesfully-deleted"
    );

    var base_url = $("meta[property=base_url]").attr("content");
    var url = base_url + "/multiple-file-upload/delete";

    $(this).closest(".col-md-2").fadeOut("300");
    var image_name = $(this).data("name");
    var app_id = $(this).data("app-id");
    $.ajax({
      headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
      url: url,
      type: "POST",
      data: { image_name: image_name, app_id: app_id },
    }).done(function (data) {
      Swal.fire(success, succesfully_deleted, "success");
    });
  });
}

// Upload screenshots
$(document).ready(function (e) {
  "use strict";

  var screenshots_data = document.getElementById("screenshots");
  var success = screenshots_data.getAttribute("data-success");
  var upload_message = screenshots_data.getAttribute("data-upload-message");
  var error = screenshots_data.getAttribute("data-error");
  var uploaded = screenshots_data.getAttribute("data-uploaded");

  $("#screenshot_form").ajaxForm({
    beforeSend: function () {
      $(".progress-box").addClass("d-block").removeClass("d-none");
      $(".progress-bar").text("0%");
      $(".progress-bar").css("width", "0%");
    },
    uploadProgress: function (event, position, total, percentComplete) {
      $(".progress-bar").css("background-color", "#FFBF00");
      $(".progress-bar").text(percentComplete + "%");
      $(".progress-bar").css("width", percentComplete + "%");
    },
    success: function (data) {
      if (data.success) {
        $("#success").html(data.image);
        $(".progress-bar").text(uploaded);
        $(".progress-bar").css("width", "100%");
        $(".progress-bar").css("background-color", "#65b89e");
        Swal.fire(success, upload_message, "success");
        bindFunc();
      }
    },
    error: function (data, status, errorThrown) {
      $(".progress-bar").css("background-color", "#ce2525");
      $(".progress-bar").text(errorThrown);
      Swal.fire(error, errorThrown, "error");
    },
  });
});

// Translate the Content
$(document).ready(function () {
  "use strict";

  $(".translate").on("click", function (e) {
    var title = document.getElementById("title").value;
    var description = null;
    if (document.getElementById("description")) {
      var description = document.getElementById("description").value;
    }
    var details = null;
    if (document.getElementById("details")) {
      var details = document.getElementById("details").value;
    }
    var base_url = $("meta[property=base_url]").attr("content");
    var get_url = base_url + "/translate";
    var data_id = $(this).attr("data-id");
    var data_language_from = $(this).attr("data-language-from");
    var data_language_to = $(this).attr("data-language-to");

    $.ajax({
      headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
      url: get_url,
      type: "POST",
      async: true,
      data: {
        title: title,
        description: description,
        content: details,
        data_language_from: data_language_from,
        data_language_to: data_language_to,
      },
      success: function (response) {
        var response_data = JSON.parse(response);
        var description = response_data[0]["description"];
        var content = response_data[1]["content"];
        var title = response_data[2]["title"];
        $("#title_" + data_id + "").val(title);
        $("#description_" + data_id + "").val(description);
        $(".details_data_" + data_id + "").summernote("code", content);
        $("#val_" + data_id + "").val(content);
      },
      error: function () {
        Swal.fire("Error", "Couldn't Retrieve Translation", "warning");
      },
    });
  });
});

// Renegerate the Content
$(document).ready(function () {
  "use strict";

  $(".regenerate").on("click", function (e) {
    var details = document.getElementById("details").value;

    var base_url = $("meta[property=base_url]").attr("content");
    var get_url = base_url + "/openai-regenerate";

    $.ajax({
      headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
      url: get_url,
      type: "POST",
      async: true,
      data: {
        content: details,
      },
      success: function (response) {
        if (response.error) {
          Swal.fire("Error", response.error.message, "warning");
        } else {
          var response_data = response;
          var content = response.choices[0].text.trim();
          content = content.replace(/(?:\r\n|\r|\n)/g, "<br>");
          content = content.replace(/<p[^>]*>/g, "").replace(/<\/p>/g, "<br>");
          $("#details").summernote("code", content);
        }
      },
      beforeSend: function () {
        $("#translation_regenerate").show();
      },
      complete: function () {
        $("#translation_regenerate").hide();
      },
      error: function () {
        Swal.fire("Error", "Couldn't Regenerate Content", "warning");
      },
    });
  });
});

// Generate the Content with OpenAI
$(document).ready(function () {
  "use strict";

  $(".openai").on("click", function (e) {
    var details = document.getElementById("message-text").value;

    var base_url = $("meta[property=base_url]").attr("content");
    var get_url = base_url + "/openai-generate";

    $.ajax({
      headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
      url: get_url,
      type: "POST",
      async: true,
      data: {
        content: details,
      },
      success: function (response) {
        if (response.error) {
          Swal.fire("Error", response.error.message, "warning");
        } else {
          var response_data = response;
          var content = response.choices[0].text.trim();
          content = content.replace(/(?:\r\n|\r|\n)/g, "<br>");
          content = content.replace(/<p[^>]*>/g, "").replace(/<\/p>/g, "<br>");
          $("#details").summernote("code", content);
        }
      },
      beforeSend: function () {
        $("#translation_generate").show();
      },
      complete: function () {
        $("#translation_generate").hide();
        $("#exampleModal").modal("hide");
      },
      error: function () {
        Swal.fire("Error", "Couldn't Regenerate Content", "warning");
      },
    });
  });
});
