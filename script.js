document.rea
// Mock API function to save decisions (simulated delay with setTimeout)
function saveDecisions(decisions) {
    console.log('Saving decisions:', decisions);
    // Simulate API call with setTimeout
    setTimeout(() => {
        alert('Decisions saved successfully!');
    }, 1000); // Simulate 1 second delay
}

document.addEventListener('DOMContentLoaded', function() {
    const addDecisionBtn = document.getElementById('addDecisionBtn');
    const decisionContainer = document.getElementById('decisionContainer');
    const nextBtn = document.getElementById('nextBtn');
    let decisionIndex = 1;

    // Function to create a new decision set
    function createDecision() {
        const decisionDiv = document.createElement('div');
        decisionDiv.classList.add('decision');
        decisionDiv.innerHTML = `
            <i class="fa-solid fa-cubes-stacked fa-2xl"></i>
            <div>
            <div class="title" contenteditable="true">Decision ${decisionIndex}</div>
            <div class="description" contenteditable="true">Description...</div>
            </div>
            <div class="actions">
                <button id="sample_btn" class="take-dec" >Take Decisions</button>
                <button class="delete-btn"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `;
        decisionContainer.appendChild(decisionDiv);
        decisionIndex++;
    }

    // Add decision button click event
    addDecisionBtn.addEventListener('click', createDecision);

    // Save decision event (simulated API call)
    decisionContainer.addEventListener('click', function(event) {
        const target = event.target;

        // Delete button clicked
        if (target.classList.contains('delete-btn')) {
            const decisionDiv = target.closest('.decision');
            decisionDiv.remove();
        }
    });

    // Next button click event (save all decisions)
    nextBtn.addEventListener('click', function() {
        const decisions = [];
        const decisionElements = document.querySelectorAll('.decision');
        decisionElements.forEach(decision => {
            const title = decision.querySelector('.title').textContent;
            const description = decision.querySelector('.description').textContent;
            decisions.push({ title, description });
        });
        // Simulate saving all decisions with API
        saveDecisions(decisions);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fontFamily').addEventListener('change', function() {
        const sampleButton = document.getElementsById('sample_btn');
        
        sampleButton.style.fontFamily = this.value;
    if (!sampleButton) {
        console.log('Sample button with ID "take-dec" not found.');
        
    }
    });

    document.getElementById('fontSize').addEventListener('change', function() {
        const sampleButton = document.getElementsById('sample_btn');
        sampleButton.style.fontSize = this.value + 'px';
    });

    document.getElementById('buttonColor').addEventListener('change', function() {
       
    sampleButton.style.backgroundColor = this.value;
    });


    document.getElementById('buttonHoverColor').addEventListener('change', function() {
    sampleButton.addEventListener('mouseover', function() {
            this.style.backgroundColor = document.getElementById('buttonHoverColor').value;
        });
        sampleButton.addEventListener('mouseout', function() {
            this.style.backgroundColor = document.getElementById('buttonColor').value;
        });
    });

    const styleOptions = document.querySelectorAll('.style-option');
   
    styleOptions.forEach(option => {
        option.addEventListener('click', function() {
            const styleClass = this.getAttribute('data-style');
            sampleButton.className = 'take-dec'
            sampleButton.classList.add(styleClass);
        });
    });

});
