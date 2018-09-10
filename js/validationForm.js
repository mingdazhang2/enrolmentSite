
			$(document).ready(function() {
      
                $('#myForm').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: 'The username is required and cannot be empty'
                    },
                    stringLength: {
                        min: 3,
                        max: 20,
                        message: 'The name must be more than 3 and less than 20 long'
                    },
                    // regexp: {
                    //     regexp: /^[a-zA-Z0-9]+$/,
                    //     message: 'The username can only consist of alphabetical and number'
                    // },
                    // different: {
                    //     field: 'password',
                    //     message: 'The username and password cannot be the same as each other'
                    // }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The email address is not a valid'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    different: {
                        field: 'username',
                        message: 'The password cannot be the same as username'
                    },
                    stringLength: {
                        min: 8,
                        message: 'The password must have at least 8 characters'
                    }
                }
            },
            birthday: {
                validators: {
                    notEmpty: {
                        message: 'The date of birth is required'
                    },
                    date: {
                        format: 'MM/DD/YYYY',
                        message: 'The date of birth is not valid'
                    }
                }
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: 'The gender is required'
                    }
                }
            },
            hiscourses: {
                feedbackIcons: false,
                    validators: {
                        notEmpty: {
                            message: 'Please select your course.'
                        }
                    }
                }
        }
    });
                $('#myForm2').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
                      
            seletcourse: {
                    feedbackIcons: false,
                    validators: {
                        notEmpty: {
                            message: 'Please select your course.'
                        }
                    }
                }
        }
    });
           				
			});
		