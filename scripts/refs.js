const refs = document.querySelectorAll('.container_ref');

for (let r of refs){
    r.addEventListener('mouseover', (event)=>{
        let el = event.target;
        el.style.backgroundColor = 'white';
        el.style.color = '#131313';
        el.style.cursor = 'pointer';
        let children = el.children;
        if (children.length > 0){
            for (let ch of children){
                ch.style.backgroundColor = 'white';
                ch.style.color = '#131313';
            }
        }
    })
    r.addEventListener('mouseout', (event)=>{
        let el = event.target;
        el.style.backgroundColor = '#131313';
        el.style.color = 'white';
        el.style.cursor = 'none';
        let children = el.children;
        if (children.length > 0){
            for (let ch of children){
                ch.style.backgroundColor = '#131313';
                ch.style.color = 'white';
            }
        }
    })
    r.addEventListener('click', (event)=>{
        let el = event.target;
        let children = el.children;
        for (let ch of children){
            let attr = ch.getAttribute('class');
            switch (attr) {
                case ('tg'):
                    window.open('https://t.me/Maestro_kak_vsegda_na_visote', '_blank');
                    break;
                case ('vk'):
                    window.open('https://vk.com/maestro_kak_vsegda_na_visote', '_blank');
                    break;
                case ('pachka'):
                    window.open('https://app.pachca.com/chats?user_id=276808', '_blank');
                    break;
                case('github'):
                    window.open('https://github.com/Arsenij11', '_blank');
                    break;
            }
        }
    })
}