function kirim(){
	var email_val = "test@gmail.com";
	var pass_val = "test123";

	var email = document.getElementById('email').value;
	var pass = document.getElementById('password').value;

	if ( email == ""){
	 return swal("Email tidak boleh kosong!");
	}
	if ( pass == "") {
		return swal("Password tidak boleh kosong!");
	}
	if(email != email_val || pass != pass_val){
		return swal({
		  text: "Email atau password salah!",
		  icon: "error",
		});
	}else{
		return swal({
		  title: "Hai, "+email,
		  text: "Anda berhasil login!",
		  icon: "success",
		});
	}

}