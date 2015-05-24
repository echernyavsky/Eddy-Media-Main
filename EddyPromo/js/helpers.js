function Helpers() {
    this.phoneNumberRegexp = /\+[0-9]*/g;
    this.timeRegexp = /([01]\d|2[0-3]):([0-5]\d)/g;
};

Helpers.prototype.showLoader = function() {
    $('.loader').show();
};

Helpers.prototype.hideLoader = function() {
    $('.loader').hide();
};

Helpers.prototype.validateRequestCallForm = function (data) {
    var result = {
        errors: [],
        fields: []
    };

    if (data.name.length == 0 || data.callTime.length == 0 || data.phone.length == 0) {
        result.errors.push('Необходимо заполнить все поля');
    }

    if (data.name.length == 0) {
        result.fields.push(fieldIds.name);
    }

    if (data.callTime.length == 0) {
        result.fields.push(fieldIds.callTime);
    }

    if (data.phone.length == 0) {
        result.fields.push(fieldIds.phone);
    }

    if (data.callTime.match(this.timeRegexp) == null || data.callTime.match(this.timeRegexp).length == 0 || data.callTime.match(this.timeRegexp)[0] == "") {
        result.errors.push('Введённое ожидамое время звонка имеет неверный формат');
        result.fields.push(fieldIds.callTime);
    }

    if (data.phone.match(this.phone) == null || data.phone.match(this.phone).length == 0 || data.phone.match(this.phone)[0] == "") {
        result.errors.push('Номер телефона имеет неверный формат');
        result.fields.push(fieldIds.phone);
    }

    return result;
};

Helpers.prototype.submitCallRequest = function (data) {
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
        }
    });
};

var helpers = new Helpers();