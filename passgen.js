function generatePassword() {
    const length = document.getElementById("password-length").value;
    const passwordName = document.getElementById("password-name").value;
    const password = generateRandomPassword(length);
    document.getElementById("generated-password").value = password;
    document.getElementById("generated-password").setAttribute("data-name", passwordName);
}

function savePassword() {
    const generatedPassword = document.getElementById("generated-password").value;
    const passwordName = document.getElementById("generated-password").getAttribute("data-name") || "generated_password";

    const blob = new Blob([generatedPassword], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    
    // Set the path to the "PassGen" folder and the desired file name
    a.download = `PassGen/${passwordName}.txt`;

    a.click();
}

function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
    let password = "";
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}
