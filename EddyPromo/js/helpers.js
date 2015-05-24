function Helpers() {
    
};

Helpers.prototype.showLoader = function() {
    $('.loader').show();
};

Helpers.prototype.hideLoader = function() {
    $('.loader').hide();
};

Helpers.prototype.submitCallRequest = function (data) {
    this.showLoader();

    $.ajax({
        url: '/handleRequestCall.php',
        type: 'POST',
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: "application/json;charset=utf-8",
        success: function() {
            toastr.success('Вам перезвонят в ближайшее время');
        },
        error: function() {
            toastr.error('Серверная ошибка');
        },
        complete: this.hideLoader,
    });
};

var helpers = new Helpers();