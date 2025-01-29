const allcontainers = document.querySelectorAll('.container_ed');

allcontainers.forEach((a)=> {
    a.addEventListener('mouseover', (event)=>{
        event.target.style.backgroundColor = '#131313';
        event.target.style.color = 'white';
        event.target.style.cursor = 'pointer';
        let children = event.target.children;
        if (children.length > 0) {
            for (let c of children) {
                c.style.backgroundColor = '#131313';
               c.style.color = 'white';
            }
        }
    });
    a.addEventListener('mouseout', (event)=>{
        event.target.style.backgroundColor = 'white';
        event.target.style.color = '#131313';
        event.target.style.cursor = 'none';
        let children = event.target.children;
        if (children.length > 0) {
            for (let c of children) {
                c.style.backgroundColor = 'white';
                c.style.color = '#131313';
            }
        }
    });
    a.addEventListener('click', (event) => {
        let container = event.target;
        let elements = container.children;
        for (let el of elements) {
            if (el.getAttribute('class') === 'place college') {
                window.open('https://arcotel.ru/', '_blank');
            }
            else if (el.getAttribute('class') === 'place university') {
                window.open('https://www.sut.ru/', '_blank');
            }
            else if (el.getAttribute('class') === 'place skillfactory') {
                window.open('https://skillfactory.ru/', '_blank');
            }
        }
    });
})