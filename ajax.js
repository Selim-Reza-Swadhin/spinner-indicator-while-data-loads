
$(document).ready(function () {
    $("#loader").show();
    $.post("script.php",{api:"getData"},function (response) {
        let data = response.split('^');
        $("#tbody").html(data[1]);
        $("#loader").hide();
    });
});
