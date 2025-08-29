let heartCount = 0;
        const heartDisplay = document.getElementById("heartCount");
        const heartButtons = document.querySelectorAll(".heart-btn");
         
        heartButtons.forEach(button =>{ 
            button.addEventListener("click", () => {
        
            heartCount++;
            heartDisplay.textContent = heartCount;
        
    });
});
       
        let coinCount = 100;
        const coinDisplay = document.getElementById("coinCount");

        const callButtons = document.querySelectorAll(".call-btn");
        const historyList = document.getElementById("historyList");
        const clearHistoryBtn = document.getElementById("clearHistoryBtn");

        callButtons.forEach(button =>{
            button.addEventListener("click", (e) =>{
                e.preventDefault();

        const card = button.closest(".bg-white");
        const ServiceName = card.querySelector("h2").textContent;
        const ServiceNumber = card.querySelector("p.text-3xl").textContent;

        if(coinCount < 20){
            alert("Not enough coins to make a call!");
            return;
        }

        coinCount -= 20;
        coinDisplay.textContent = coinCount;

        alert(`calling ${ServiceName} (${ServiceNumber})`);

        const li = document.createElement("li")
        li.className = "flex justify-between bg-gray-100 px-3 py-2 rounded-lg text-sm";
        li.innerHTML = `<span>${ServiceName} (${ServiceNumber})<span></span>${new Date().toLocaleTimeString()}</span>`;
        historyList.prepend(li);

            });
        
        
    
        });

        clearHistoryBtn.addEventListener("click", () => {
            historyList.innerHTML = "";
        });

        let copyCount = 0;
        const copyButtons = document.querySelectorAll(".border");
        const navCopyCount = document.getElementById("navCopyCount");


        copyButtons.forEach(button => {
            button.addEventListener("click", () => {
                const card = button.closest(".bg-white");
                const ServiceName = card.querySelector("h2").textContent;
                const ServiceNumber = card.querySelector("p.text-3xl").textContent;


                navigator.clipboard.writeText(ServiceNumber);

                copyCount++;
                navCopyCount.textContent = copyCount;

                alert(`copied ${ServiceName} (${ServiceNumber}) - total copies: ${copyCount}`);
            });
        });


