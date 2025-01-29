const containers = document.querySelectorAll('.container');
// const skills = document.getElementById('skills');
//
containers.forEach((c)=>{
    c.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'white';
        event.target.style.cursor = 'pointer';
        event.target.style.color = '#131313';
        let children = event.target.children;
        setstyle(children);
    });
    c.addEventListener('mouseout', (event)=>{
        event.target.style.backgroundColor = '#131313';
        event.target.style.cursor = 'none';
        event.target.style.color = 'white';
        let children = event.target.children;
        removestyle(children);
    });
    c.addEventListener('click', (event)=>{
        let el = event.target;
        redirect(el);
        // window.location.href = `https://github.com/stars/Arsenij11/lists/python-projects`
    });

})

function setstyle (children) {
    if (children.length > 0) {
        for (let c of children) {
            try {
                c.style.backgroundColor = 'white';
                c.style.color = '#131313';
                c.style.cursor = 'pointer';
                let greatchildren = c.children;
                if (greatchildren.length > 0){
                    for(let g of greatchildren){
                        g.style.backgroundColor = 'white';
                        g.style.color = '#131313';
                        g.style.cursor = 'pointer';
                    }
                }

            }
            catch (err) {
                console.log(err);
                continue;
            }
        }
    }
}

function removestyle(children) {
    if (children.length > 0) {
        for (let c of children) {
            try {
                c.style.backgroundColor = '#131313';
                c.style.color = 'white';
                c.style.cursor = 'none';
                let greatchildren = c.children;
                if (greatchildren.length > 0){
                    for(let g of greatchildren){
                        g.style.backgroundColor = '#131313';
                        g.style.color = 'white';
                        g.style.cursor = 'none';
                    }
                }
            }
            catch (err) {
                console.log(err);
                continue;
            }
        }
    }
}

function redirect(el) {
    const span = el.querySelector('span');
    const attr = span.getAttribute('class');
    switch (attr) {
        case ('python'):
            window.open(`https://github.com/stars/Arsenij11/lists/python-projects`, '_blank');
            break;
        case ('js'):
            window.open(`https://github.com/stars/Arsenij11/lists/html-css-js`, '_blank');
            break;
        case ('cpp'):
            window.open('https://github.com/Arsenij11/cpp', '_blank');
            break;
    }
}