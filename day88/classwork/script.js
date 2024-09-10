
const form = document.getElementById('dataForm');
const tableBody = document.querySelector('#dataTable tbody');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const newRow = document.createElement('tr');
    const nameCell = document.createElement('td');
    const ageCell = document.createElement('td');
    nameCell.textContent = name;
    ageCell.textContent = age;
    newRow.appendChild(nameCell);
    newRow.appendChild(ageCell);

    
    tableBody.appendChild(newRow);
    form.reset();
});

// classwork two
document.getElementById('button').addEventListener('click', function() {
    // შევქმენი  რიცხვი 0-დან 1000-მდე
    const randomNumber = Math.floor(Math.random() * 1001);

    
    const p = document.createElement('p');
    p.textContent = `Random number: ${randomNumber}`;
//  ახალი პარაგრაფის დამატება body ში
    document.body.appendChild(p);
});

// classwork three

        let wins = 0;
        let losses = 0;
        let ties = 0;

        function play(userChoice) {
            // Get computer's choice
            const choices = ['ჭა', 'ფურცელი ', 'მაკრატელი'];
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            
            // Determine the result
            let result;
            if (userChoice === computerChoice) {
                result = 'It\'s a tie!';
                ties++;
            } else if (
                (userChoice === 'ფურცელი' && computerChoice === 'მაკრატელი') ||
                (userChoice === 'ჭა' && computerChoice === 'ფურცელი') ||
                (userChoice === 'მაკრატელი' && computerChoice === 'ჭა')
            ) {
                result = 'You win!';
                wins++;
            } else {
                result = 'You lose!';
                losses++;
            }
            document.getElementById('result').innerHTML =
                `You chose ${userChoice}. Computer  ${computerChoice}. ${result}`;
            document.getElementById('wins').textContent = wins;
            document.getElementById('losses').textContent = losses;
            document.getElementById('ties').textContent = ties;
        }