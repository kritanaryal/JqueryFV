$(document).ready(function(){
    $('.form-container').submit(function(e){
        e.preventDefault();
        let isValid = true;

        let fullname = $('#fullname').val().trim();
        let email = $('#email').val().trim();
        let age = $('#age').val().trim();
        let fee = $('#fee').val().trim();


        let FullNameError = $('.fullname-error');
        let EmailError = $('.email-error');
        let AgeError = $('.age-error');
        let FeeError = $('.fee-error');

        FullNameError.text('');
        EmailError.text('');
        AgeError.text('');
        FeeError.text('');



        if(fullname === ''){
            FullNameError.text('Fullname is required');
            isValid = false;
        }
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(email === ''){
            EmailError.text('Email is required');
            isValid = false;
            
        }else if(!emailPattern.test(email)){
            EmailError.text('Email is invalid');
            isValid = false;
        }

        if(age === ''){
            AgeError.text('Age is required');
            isValid = false;
        }else if(age<18){
            AgeError.text('Age must be greater than 18');
            isValid = false;
        }
        if(fee === ''){
            FeeError.text('Fee is required');
            isValid = false;
        }else if(fee<0){
            FeeError.text('Fee must be greater than 0');
            isValid = false;
        }

        if(isValid){
            alert('Form submitted successfully');
        
        }

    })
})