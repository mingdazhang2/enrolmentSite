/* This a single page web app
 * Author: Daming
 * Date: 10 Sep 2018
 */
$(function() {
    // Identify applicant 
    let student = {
        username: "",
        email: "",
        dob: "",
        hisC: "",
        selC: ""
    }
    // datepicker initial
    $('[data-toggle="datepicker"]').datepicker();
    // selectpicker initial
    $('.selectpicker').selectpicker();
    //Control different showing base on radio button
    let radioVal = ""
    $("input[type='radio']").change(function() {
        radioVal = $("input[type='radio']:checked").val();

        if (radioVal === 'yes') {
            $('.stuied').css("display", "block");

        } else {
            $('.stuied').css("display", "none");
            // $('#myForm .courses').removeAttr('required');
        }
    })
    //Basic info form change listener
    $('#myForm').change(function() {
        let validator = $('#myForm').data('bootstrapValidator');
        validator.validate();
        if (validator.isValid()) {
            $('.tickedbox').attr('checked', 'checked')
            //modify button css
            $(".step_one_btn").removeClass('btn-secondary')
            $(".step_one_btn").addClass('btn-success')
            $(".step_one_btn").removeAttr('disabled', 'disabled')
        } else {
            $('.tickedbox').removeAttr('checked', 'checked')
            $(".step_one_btn").addClass('btn-secondary')
            $(".step_one_btn").removeClass('btn-success')

            $(".step_one_btn").attr('disabled', 'disabled')
        }
    })
    // Step one next button event
    $(".step_one_btn").click(function() {
        let validator = $('#myForm').data('bootstrapValidator');
        validator.validate();
        if (validator.isValid()) {
            // When the data is valid, modify css
            $('.form_step_one').hide();
            $('.form_step_finsh').hide();
            $('.form_step_two').show();
            $('#content_right').hide();
            $('#content_right_two').show();
            $('#stepOnebk').attr('class', 'content_left_inactive content_left_tab')
            $('#stepTwobk').attr('class', 'content_left_active content_left_tab')
            //save data
            student.username = $('.form_step_one [name="username"]').val()
            student.email = $('.form_step_one [name="email"]').val()
            student.dob = $('.form_step_one [name="birthday"]').val()
            student.hisC = $('.form_step_one [name="hiscourses"]').val()
            return false;

        }
    });

    // Step 2 select course form click event 
    $(".step_two_btn").click(function() {
        let validator = $('#myForm2').data('bootstrapValidator');
        validator.validate();
        if (validator.isValid()) {
            // Modify the css
            $('.form_step_one').hide();
            $('.form_step_two').hide();
            $('.form_step_finsh').show();
            $('#content_right').hide();
            $('#content_right_two').hide();
            $('#stepOnebk').attr('class', 'content_left_inactive content_left_tab')
            $('#stepTwobk').attr('class', 'content_left_inactive content_left_tab')
            //save date
            student.selC = $('.form_step_two [name="seletcourse"]').val()
            //pass data to SUMMARY form

            if(radioVal!='yes'){
                student.hisC = ""
            }
            $('.form_step_finsh [name="username"]').text(student.username)
            $('.form_step_finsh [name="email"]').text(student.email)
            $('.form_step_finsh [name="dob"]').text(student.dob)
            $('.form_step_finsh [name="hisC"]').text(student.hisC)
            $('.form_step_finsh [name="selC"]').text(student.selC)
            //Highlight the setp3 tab page backgroud color on the left
            $('.content_left_finish').addClass('content_left_finish_active');
             $('.content_left_finish .checkbox_title') .css("background-color","#f1e0c2");
            return false;
        }
    });

    // Step 2 previous button click event
    $('.step_two_preBtn').click(function() {
        $('.form_step_one').show();
        $('.form_step_finsh').hide();
        $('.form_step_two').hide();
        $('#content_right').show();
        $('#content_right_two').hide();
        // Modify css for step one 
        $('#stepOnebk').attr('class', 'content_left_active content_left_tab')
        $('#stepTwobk').attr('class', 'content_left_inactive  content_left_tab')
        $('.content_left_finish').removeClass('content_left_finish_active');
        $('.content_left_finish .checkbox_title') .css("background-color","white");
    })
    // Summary form submit click event 
    $(".step_finish_btn").click(function() {
        $('.form_step_finsh').hide();
        $('.content_left').hide();
        $('.main').hide();
        $(".alert").show()
        // This is a spinner dom $('.lds-hourglass').show()
        return false;
    })
    // Summary form previous click event
    $('.step_finish_preBtn').click(function() {
        $('.form_step_one').hide();
        $('.form_step_finsh').hide();
        $('.form_step_two').show();
        $('#content_right').hide();
        $('#content_right_two').show();
        $('.content_left_finish').removeClass('content_left_finish_active');
        // Modify css for step two   
        $('#stepOnebk').attr('class', 'content_left_inactive content_left_tab')
        $('#stepTwobk').attr('class', 'content_left_active  content_left_tab')
        $('.content_left_finish').removeClass('content_left_finish_active');
        $('.content_left_finish .checkbox_title') .css("background-color","white");
        return false;

    })

    // Step 2 form change listener
    $('#myForm2').change(function() {
        let validator = $('#myForm2').data('bootstrapValidator');
        validator.validate();
        if (validator.isValid()) {
            $('.tickedbox_two').attr('checked', 'checked')
            $(".step_two_btn").removeClass('btn-secondary')
            $(".step_two_btn").addClass('btn-success')
            $(".step_two_btn").removeAttr('disabled', 'disabled')

        } else {
            $('.tickedbox_two').removeAttr('checked', 'checked')
            $(".step_two_btn").addClass('btn-secondary')
            $(".step_two_btn").removeClass('btn-success')
            $(".step_two_btn").attr('disabled', 'disabled')
        }
    })
})
