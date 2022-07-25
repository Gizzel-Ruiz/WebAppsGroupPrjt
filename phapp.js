function regButtonClick(){
    const button = document.getElementById("regButton");
    const label = document.getElementById("regErrorLabel")

    button.addEventListener('click', function onClick(event) { 
        number = 1;
        if (number == 0) {
            label.style.display="block";
        } else{
            label.style.display="none";
        }
    });
}