document.querySelector('button').onclick =function(){
    console.log(document.querySelector('#password').value)
}
document.addEventListener('DOMContentLoaded',function(){
    const form = document.getElementById('form');
    form.addEventListener('submit',formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = validate(form);
        if(error===0){

        } else {
            
        }
    }

    function validate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');
        
        for(let index = 0; index < formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);

            if(input.classList.contains('_email')){
    if(emailTest(input)){
        formAddError(input);
        error++;
}
            }
             else if(input.getAttribute('type') === 'checkbox' && input.checked === false){
                formAddError(input);
                error++;
            }else {
                if(input.value ===''){
                    formAddError(input);
                    error++;
                
                }
            }

        }
        return error;
    }

    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');    
    }
    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');    
    }
    // Функция теста email
    function emailTest(input){
        return !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(input.value);

    }
});