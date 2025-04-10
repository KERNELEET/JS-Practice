let hold = document.getElementById('btn-2');
let check = 0;
hold.addEventListener('click',function () {
    let cold = document.querySelector('h2');
    if(check==0){
        cold.innerHTML = "Friends";
        cold.style.color = "Green";
        check = 1;
        hold.innerHTML = "Remove Friend"
    }
    else{
        cold.innerHTML = "Stranger";
        cold.style.color = "Red";
        check = 0;
        hold.innerHTML = "Add Friend"

    }
})
