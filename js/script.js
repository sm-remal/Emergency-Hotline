function getElement(id){
    element = document.getElementById(id);
    return element;
}

getElement("cardBox").addEventListener("click", function(event){
    if(event.target.className.includes("heart-btn")){
    const heart = getElement("heart-icon").innerText;
    const currentHeart = Number(heart) + 1;
    getElement("heart-icon").innerText = currentHeart;
    } 
    

    if(event.target.className.includes("call-btn")){
        
        const helpCategory = event.target;
        const serviceName = helpCategory.parentNode.parentNode.children[1].innerText;
        const serviceNumber = helpCategory.parentNode.parentNode.children[3].innerText;
        const date = new Date().toLocaleTimeString();
        
        let coinCount = Number(getElement("coin-count").innerText);

            if(coinCount >= 20){
                coinCount -= 20;
                alert("📞" + " Calling, " + serviceName + " " + serviceNumber + "...")
                getElement("coin-count").innerText = coinCount;

                const parentDiv = getElement("parent-div");
                const createCard = document.createElement("div");
                createCard.innerHTML = `
                     <div class="flex justify-between items-center  mx-5 py-3 px-4 shadow-sm bg-[#fafafa] rounded-xl">
                        <div>
                            <h3 class="text-xl font-bold">${serviceName}</h3>
                            <p class="text-lg text-gray-500 font-semibold">${serviceNumber}</p>
                            </div>
                        <span class="text-lg text-gray-500 font-semibold">${date}</span>
                    </div>
                     `
                parentDiv.appendChild(createCard)


            } else if (coinCount <= 0){
                alert("❌ Don't have enough coins. You need at least 20 coins to make a call !!")
            }else{
                return
            }

    }

    if(event.target.className.includes("copy-btn")){
        const copiedButton = event.target;
        const copyText = copiedButton.parentNode.parentNode.children[3].innerText;
        console.log(copyText)

        if (navigator.clipboard) {
            navigator.clipboard.writeText(copyText);
            alert("Copied the number: " + copyText);
        }    

        const copyCount = getElement("copy-count").innerText;
        const presentValue = Number(copyCount) + 1;
        getElement("copy-count").innerText = presentValue;

    }   

})

 
getElement("clear-btn").addEventListener("click", function(){
    const parentDiv = getElement("parent-div")
    parentDiv.innerHTML = " ";
    
})