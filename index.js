const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let originalCharacters = [...characters];
let areSymbolsAndNumbersRemoved = false;

const inputEl = document.getElementById("password-length-input")
let previousInputValue = ""

const symbolsAndNumbersBtn = document.querySelector(".symbols-and-numbers-btn")
const onText = document.querySelector(".on-text")
const offText = document.querySelector(".off-text")
const slashText = document.querySelector(".slash-text")

const generatedPasswordBtn1 = document.getElementById("generated-password-1")
const generatedPasswordBtn2 = document.getElementById("generated-password-2")

// ---------------------------------------------------------------------------------------------- //


// GENERATE PASSWORDS BUTTON - CLICK FUNCTION //
function generatePasswords() {
    
    if (inputEl.value > 15 || inputEl.value < 1) {
        alert("The password must be between 1 and 15 characters long 😃. Please try again!")
        inputEl.value = previousInputValue
    } else {
        generatedPasswordBtn1.textContent = ""
        generatedPasswordBtn2.textContent = ""
    
        for (let i = 0; i < inputEl.value; i++) {
            let firstRandomindexes = Math.floor(Math.random() * characters.length)
            let secondRandomindexes = Math.floor(Math.random() * characters.length)
        
            let firstRandomSymbols = characters[firstRandomindexes]
            let secondRandomSymbols = characters[secondRandomindexes]
            
            generatedPasswordBtn1.textContent += firstRandomSymbols
            generatedPasswordBtn2.textContent += secondRandomSymbols
        }

        previousInputValue = inputEl.value
    } 
}

// ---------------------------------------------------------------------------------------------- //


// RESET BUTTON - CLICK FUNCTION //
function reset() {
    inputEl.value = ""
    previousInputValue = ""
    generatedPasswordBtn1.textContent = ""
    generatedPasswordBtn2.textContent = ""
    characters.length = 0
    characters.push(...originalCharacters)
    areSymbolsAndNumbersRemoved = false
    symbolsAndNumbersBtn.classList.remove("btn-red-background")
    symbolsAndNumbersBtn.classList.remove("btn-green-background");
    symbolsAndNumbersBtn.classList.remove("btn-red-hover-effect")
    symbolsAndNumbersBtn.classList.remove("btn-green-hover-effect")
    onText.classList.remove("hide-on-text");
    offText.classList.remove("hide-off-text");
    slashText.classList.remove("hide-slash-text");
}

// ---------------------------------------------------------------------------------------------- //


// REMOVE OR ADD SYMBOLS AND NUMBERS BUTTON - CLICK FUNCTION //
function removeOrAddSymbolsAndNumbers() {  
    
    if (areSymbolsAndNumbersRemoved === false) {
        
        characters.splice(52); // Премахваме всичко след индекс 51
        
        symbolsAndNumbersBtn.classList.add("btn-red-background")
        symbolsAndNumbersBtn.classList.remove("btn-green-background");
        symbolsAndNumbersBtn.classList.add("btn-red-hover-effect")
        symbolsAndNumbersBtn.classList.remove("btn-green-hover-effect");
        offText.classList.remove("hide-off-text");
        onText.classList.add("hide-on-text");
        slashText.classList.add("hide-slash-text");
        
        areSymbolsAndNumbersRemoved = true
        alert("❌ Symbols and numbers have been removed! Only letters are now included.")
        
    } else {   
        
        characters.length = 0
        characters.push(...originalCharacters)
        
        symbolsAndNumbersBtn.classList.remove("btn-red-background")
        symbolsAndNumbersBtn.classList.add("btn-green-background")
        symbolsAndNumbersBtn.classList.remove("btn-red-hover-effect")
        symbolsAndNumbersBtn.classList.add("btn-green-hover-effect")
        onText.classList.remove("hide-on-text");
        offText.classList.add("hide-off-text");
        
        areSymbolsAndNumbersRemoved = false
        alert("✅ Symbols and numbers have been added back! The full character set is restored.");
        
    } 
} 

// ---------------------------------------------------------------------------------------------- //


// COPY THE GENERATED PASSWORDS FROM THE BUTTONS - CLICK FUNCTION //
function copyPassword() {
    
    // Вземи текста от натиснатия бутон и премахни излишните интервали
    const text = event.target.textContent.trim(); 
    
    // Проверка дали текстът не е празен
    if (text) { // Ако има текст (генерирана парола)
        
        // Създаване на временно текстово поле, което ще се използва за копиране
        const tempInput = document.createElement("input");
        
        // Добавяме новото текстово поле към HTML документа (но няма да се вижда на екрана)
        document.body.appendChild(tempInput);
        
        // Задаваме стойността на текстовото поле да бъде текста от бутона
        tempInput.value = text;
        
        // Избираме целия текст в текстовото поле (за да може да бъде копиран)
        tempInput.select();
        
        // Изпълняваме командата за копиране на избрания текст в клипборда
        document.execCommand("copy");
        
        // Премахваме временното текстово поле от документа
        document.body.removeChild(tempInput);
        
        // Показваме съобщение, че паролата е успешно копирана
        alert("Password copied: " + text);
    } else {
        // Ако няма текст в бутона (например празен бутон), показваме съобщение за грешка
        alert("No text to copy!");
    } 
}

/*

Кратко обяснение на процеса:
1. Когато натиснеш бутона, функцията взема текста от бутона.
2. Ако текстът не е празен, създава временно поле, в което поставя този текст.
3. След това избира текста и го копира в клипборда.
4. Премахва временното поле и показва съобщение, че паролата е копирана.
5. Ако няма текст, показва съобщение за грешка.

*/

// ---------------------------------------------------------------------------------------------- //