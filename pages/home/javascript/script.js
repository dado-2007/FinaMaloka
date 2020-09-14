function floatingText() {
    //setInterval(func, miliseconds)

    const p = document.querySelector('.txt-header-desc');

    const randomText = ["Accusamus ipsum eligendi.","Lorem ipsum dolor sit amet consectetur.","Dicta ea officia soluta odio.","Nihil doloribus, voluptates suscipit mollitia."];
    
    //itens em randomText: 4

    p.innerHTML = randomText[0];

    let i = 1;

    setInterval(() => {
        i++;
        if(i > 3) {
            i = 0;
        }
        p.innerHTML = randomText[i];
    }, 10000)

    
} 
floatingText();