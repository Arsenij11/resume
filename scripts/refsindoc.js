let refsindoc = document.querySelectorAll('a');

refsindoc.forEach((r)=>{
    r.addEventListener('mouseover', (event)=>{
        event.target.style.backgroundColor = 'white';
        event.target.style.color = 'black';
    })
    r.addEventListener('mouseout', (event)=>{
        event.target.style.backgroundColor = '#131313';
        event.target.style.color = 'white';
    })
})