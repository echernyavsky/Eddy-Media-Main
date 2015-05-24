function submitCallRequest() {
    // TODO: validate data

    var data = {
        phone: $('#phone').val(),
        name: $('#name').val(),
        callTime: $('#expectedTime').val()
    };

    helpers.submitCallRequest(data);
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

    $('#expectedTime').timepicker(timepickerOptions);
    $('#expectedTime').timepicker('setTime', new Date());
    $('#confirm-call-request').on('click', submitCallRequest);
});