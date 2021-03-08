window.onload = function createbottom() {


    let button = document.querySelector("#principal");
    button.addEventListener("click", function () {


        let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
        let action = ['ate', 'peed', 'crushed', 'broke'];
        let what = ['my homework', 'the keys', 'the car'];
        let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

        let randomwho = Math.floor(Math.random()*who.length);
        let randomaction = Math.floor(Math.random()*action.length);
        let randomwhat = Math.floor(Math.random()*what.length);
        let randomwhen = Math.floor(Math.random()*when.length);

        let message=document.querySelector("#excuse");




		
		message.innerHTML = who[randomwho] +" "+ action[randomaction]+" "+what[randomwhat]+" "+when[randomwhen];
		document.querySelector("#excuse").appendChild(names);

       
       

    });

};