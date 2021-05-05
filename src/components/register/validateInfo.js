export default function validateInfor(username, email, password) {
    let errors = {}; 

    if(!username.trim()){
        errors.username = "Bạn cần nhập đủ họ tên";
    }

    if(!email){
        errors.email = "Bạn cần phải nhập email";
    } else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        errors.email = "error";

        
    } else {
        errors.email = "";
    }


    if(!password) {
        errors.password = "Bạn cần nhập mật khẩu";

        if(password.length < 7) {
            errors.password = "Mật khẩu phải lớn hơn 7 chữ cái"
        }
        
    } else {
        errors.password = ""
    }

    return errors;
}