var fieldIds = {
    phone: '#phone',
    name: '#name',
    callTime: '#expectedTime'
}

function submitCallRequest() {
    helpers.showLoader();

    var data = {
        phone: $(fieldIds.phone).val(),
        name: $(fieldIds.name).val(),
        callTime: $(fieldIds.callTime).val()
    };

    var validationResult = helpers.validateRequestCallForm(data);

    if (validationResult.errors.length == 0) {
        helpers.submitCallRequest(data);
    } else {
        validationResult.errors.forEach(function(item) {
            toastr.warning(item);
        });
    }

    helpers.hideLoader();
};

var timepickerOptions = {
    show2400: true,
    timeFormat: 'H:i'
};

$(document).ready(function () {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-full-width",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "4000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    $(fieldIds.callTime).timepicker(timepickerOptions);
    $(fieldIds.callTime).timepicker('setTime', new Date());
    $('#confirm-call-request').on('click', submitCallRequest);
});