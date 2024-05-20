const chatForm = document.getElementById("messageForm");
const input = document.getElementById("userInput");
const messageBox = document.getElementById("messageBox");



const url = 'https://chat-gpt26.p.rapidapi.com/';
// const options = {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json',
//         'X-RapidAPI-Key': '7cd4a7619fmsh70b90ceb1143fefp18fb4ajsn4e9bf38ea5d5',
//         'X-RapidAPI-Host': 'chat-gpt26.p.rapidapi.com'
//     },
//     body: JSON.stringify({
//         model: 'gpt-3.5-turbo',
//         messages: [
//             {
//                 role: 'user',
//                 content: 'Hello'
//             }
//         ]
//     })
// };

async function promptRequest(value) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '7cd4a7619fmsh70b90ceb1143fefp18fb4ajsn4e9bf38ea5d5',
                'X-RapidAPI-Host': 'chat-gpt26.p.rapidapi.com'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'user',
                        content: `${value}`
                    }
                ]
            })
        });
        const result = await response.json();
        console.log(result);
        const message = result.choices[0]?.message?.content || "Sorry, I couldn't process your request.";
        messageBox.innerText = message;
    } catch (error) {
        console.error(error);
    }
}



chatForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    if (input.value.trim() !== '') {
        console.log(input.value);
        // promptRequest(input.value); 
        
        input.value = "";
    }

})
