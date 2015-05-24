function submitCallRequest() {
    // TODO: validate data

    var data = {
        phone: $('#phone').val(),
        name: $('#name').val(),
    };

    helpers.submitCallRequest(data);
};

$(document).ready(function () {
    $('#confirm-call-request').on('click', submitCallRequest);
});