function Helpers() {
    
};

Helpers.prototype.showLoader = function() {
    alert('showing');
    // TODO
};

Helpers.prototype.hideLoader = function() {
    alert('hiding');

    // TODO
};

Helpers.prototype.submitCallRequest = function (data) {
    this.showLoader();

    $.ajax({
        url: '/handleRequestPhoneCall.php',
        type: 'POST',
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: "application/json;charset=utf-8",
        success: function() {
            // TODO: show success toastr message.
        },
        error: function() {
            // TODO: show error message
        },
        complete: this.hideLoader,
    });
};

var helpers = new Helpers();