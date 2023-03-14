        // NAV SECTION
        let vaLue=document.querySelector(".menu");
        let navHeader=document.querySelector(".header1")
        let toggleNavbar = () => {
                // alert("sHUVO");
            navHeader.classList.toggle("active");
        };
        vaLue.addEventListener("click" , () => toggleNavbar());
        // 
        // 
        function myMessage(){
            let shuvo=document.querySelector("#section-header");
            shuvo.classList.add("colorChange");
        }
        function myMessage1(){
            let shuvo=document.querySelector("#section-header");
            shuvo.classList.remove("colorChange1");
        }
        // 
        // 
        function changeAble(){
            let paraId=document.querySelector(".paragraph1");
            paraId.classList.add("paragraph");
            let imgId=document.querySelector("#iMg");
        }
        function changeAble1(){
            let paraId=document.querySelector(".paragraph1");
            paraId.classList.remove("paragraph");
        }
        // 


