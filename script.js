const rating =(stars)=> "★★★★★☆☆☆☆☆".slice(5-stars, 10-stars);

for(let i=0; i<=5; i++){
    const p = document.createElement('p');
    p.textContent = `Rating ${i}: ${rating(i)}`;
    document.body.appendChild(p);
}