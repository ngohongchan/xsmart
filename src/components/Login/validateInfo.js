export default function validateInfor(email, password) {
    let errors = {}; 

    if(!email){
        errors.email = "Bạn cần phải nhập email";
    } else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        errors.email = "error";

        
    } else {
        errors.email = "";
    }


    if(!password) {
        errors.password = "Bạn cần nhập mật khẩu";
    } else {
        errors.password = ""
    }

    return errors;
}