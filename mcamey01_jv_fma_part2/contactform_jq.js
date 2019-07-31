$.validator.setDefaults({
    submitHandler: function() {
        alert("Form Successfully Submitted");
    }
});

jQuery.validator.addMethod("regex", function(value, element) {
    return this.optional( element ) || /^((ZHA)|(zha))+[0-9]{6}$/.test( value );
  }, '');

$().ready(function() {
    // Reference from stackoverflow
    $("#FirstName").attr("placeholder", "Enter First Name");
    // Refence from in class
    $('#mark').bind({'mouseover' : function(){
        $('#tooltip').css('display', 'block');},
        'mouseout' : function() {
        $('#tooltip').css('display', 'none');},
    })
      
    $("#contact").validate({
        rules: {
            FirstName: {
                required: true,
                minlength: 2
            },
            LastName: {
                required: true,
                minlength: 2
            },
            Title: "required",
            Han: {
                required: true,
                regex: true
            },
            Email: {
                required: true,
                email: true
            },
            Phone: {
                required: true,
                minlength: 11,
                maxlength: 11
            },
        },
        messages: {
            FirstName: {
                required: "* You must enter a valid First Name",
                minlength: "* Your First Name must consist of at least 2 characters"
            },
            LastName: {
                required: "* You must enter a valid Last Name",
                minlength: "Your Last Name must consist of at least 2 characters"
            },
            Title: " * You must select one option",
            Han: {
                required: "* You must enter a valid Health Authority Number and Format (e.g. ZHA346783 or zha346783)",
                regex: "* Format: ZHA346783 or zha346783"
            },
            Email: "* You must enter a valid email address",
            Phone: {
                required: "* You must enter a valid telephone number (11 digits)",
                minlength: "* minimum number of digits 11",
                maxlength: "* maximum number of digits 11"
            }
        }
    });

});