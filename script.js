document.addEventListener('DOMContentLoaded', () => {
    const stepBlock = document.querySelector('.change-block__steps');

    // для смены активного шага 1-2-3
    stepBlock.addEventListener('click', (e) => {
        const target = e.target;

        const stepElements = stepBlock.querySelectorAll('.step');
        stepElements.forEach(step => step.classList.remove('step_full'));

        target.classList.add('step_full');
    });

    const roomCheckboxes = document.querySelectorAll('.check-wrap');

    roomCheckboxes.forEach(room => {
        room.addEventListener('click', () => {
           const inpCheck = room.querySelector('.check-room_hidden');
            const markCheck = room.querySelector('.check-room_show');
            
            if(markCheck.classList.contains('active')) {
                markCheck.classList.remove('active');
                inpCheck.checked = false;
            } else {
                markCheck.classList.add('active');
                inpCheck.checked = true;
            } 
        })
        
    })
});