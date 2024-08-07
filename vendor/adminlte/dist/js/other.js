// Add More Sitemap Item
$("#add_more_sitemap").click(function () {
  "use strict";

  var lastname_id = $(".topic_list").last().attr("id");

  if (lastname_id != null) {
    var split_id = lastname_id.split("_");
    var index = Number(split_id[1]) + 1;
  } else {
    var index = 1;
  }

  function getFormattedDate() {
    "use strict";

    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return formattedDate;
  }

  const currentDate = getFormattedDate();

  var html =
    '<div class="row mb-3 topic_list"><div class="col-md-6"><label for="url">URL <span class="text-danger">*</span></label><a class="delete-sitemap text-gray float-right" href="javascript:void(0);">Delete</a><input class="form-control" required="required" maxlength="255" placeholder="URL" name="url_addl[]" type="text"></div><div class="col-md-2"><label for="changefreq">Change Frequency <span class="text-danger">*</span></label><select class="form-control selectpicker" required="required" data-live-search="true" id="changefreq" name="changefreq_addl[]"><option value="Always">Always</option><option value="Hourly">Hourly</option><option value="Daily" selected="selected">Daily</option><option value="Weekly">Weekly</option><option value="Monthly">Monthly</option><option value="Yearly">Yearly</option><option value="Never">Never</option></select></div><div class="col-md-2"><label for="changefreq">Priority <span class="text-danger">*</span></label><select class="form-control selectpicker" required="required" data-live-search="true" id="priority" name="priority_addl[]"><option value="0.0">0.0</option><option value="0.1">0.1</option><option value="0.2">0.2</option><option value="0.3">0.3</option><option value="0.4">0.4</option><option value="0.5">0.5</option><option value="0.6">0.6</option><option value="0.7">0.7</option><option value="0.8" selected="selected">0.8</option><option value="0.9">0.9</option><option value="1.0">1.0</option></select></div><div class="col-md-2"><label for="last_update">Last Update <span class="text-danger">*</span></label><input class="form-control" required="required" maxlength="255" placeholder="Last Update" name="last_update[]" type="text" value="' +
    currentDate +
    '"></div></div>';

  $("#add_sitemaps").append(html);
  $(".selectpicker").selectpicker("refresh");

  $('#sitemap-warning').addClass("d-none");

});

// Select All
$(document).ready(function () {
  "use strict";

$("body").on("click", ".check-all", function () {
  var checked = $(this).is(":checked");
  if (checked) {
    $(".check").prop("checked", true);
  } else {
    $(".check").prop("checked", false);
  }
});

});

// Bulk Delete
function bulk_delete() {
  "use strict";

  const app_list = [];
  var checkboxes = document.getElementsByName("submissions[]");
  var result = "";
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      app_list.push(checkboxes[i].id);
    }
  }

  var data_id = $(this).attr("data-id");
  var delete_data = document.getElementById("table");
  var delete_message_title = delete_data.getAttribute(
    "data-delete-prompt-title"
  );
  var delete_message_body = delete_data.getAttribute("data-delete-prompt-body");
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
      $(document);
      var csrf_token = $('meta[name="csrf-token"]').attr("content");
      var base_url = $("meta[property=base_url]").attr("content");
      var url = base_url + "/apps/bulk-destroy";
      var form = $(
        '<form action="' +
          url +
          '" method="post"><input type="hidden" name="_token" value="' +
          csrf_token +
          '"><input type="hidden" name="bulk" value="1" />' +
          '<input type="text" name="app_list" value="' +
          app_list +
          '" />' +
          "</form>"
      );
      $("body").append(form);
      form.submit();
    }
  });
}

// Delete Translation
$(document).ready(function () {
  "use strict";

  $(".delete_translation").click(function (e) {
    event.preventDefault();
    event.stopPropagation();
    var delete_data = document.getElementById("headingOne");
    var delete_message_title = delete_data.getAttribute(
      "data-delete-prompt-title"
    );
    var delete_message_body = delete_data.getAttribute(
      "data-delete-prompt-body"
    );
    var delete_yes = delete_data.getAttribute("data-yes");
    var delete_cancel = delete_data.getAttribute("data-cancel");

    var url = $(this).attr("href");

    Swal.fire({
      title: delete_message_title,
      text: delete_message_body,
      type: "error",
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

// Delete Image
$(document).ready(function () {
  "use strict";

  $(".remove_image").click(function (e) {
    event.preventDefault();
    event.stopPropagation();
    var delete_data = document.getElementById("headingTwo");
    var delete_message_title = delete_data.getAttribute(
      "data-delete-prompt-title"
    );
    var delete_message_body = delete_data.getAttribute(
      "data-delete-prompt-body"
    );
    var delete_yes = delete_data.getAttribute("data-yes");
    var delete_cancel = delete_data.getAttribute("data-cancel");

    var url = $(this).attr("href");

    Swal.fire({
      title: delete_message_title,
      text: delete_message_body,
      type: "error",
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

