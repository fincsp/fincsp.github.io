function generateLink(name, email, phone, message) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    location.replace("https://wa.me/6281284212353?text="+"halo%20gan%2C%20Saya%0Anama%09%3A%20"+name+"%0Aemail%09%3A%20"+email+"%0Aphone%09%3A%20"+phone+"%0Amessage%09%3A%20"+message);
};

