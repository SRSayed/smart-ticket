const seats= document.getElementsByClassName('seats');

let count= 0;
const price =550 ;
for(const seat of seats){
    seat.addEventListener("click", function(event){
    // add background
    seat.classList.add('bg-lime-500');
    // add/minus seat count 
    count= count+1;
    document.getElementById('count').innerText= count;
    document.getElementById('seat-left').innerText= 40-count;
    // set seat info

    const seatName =event.target.parentNode.childNodes[0].innerText
    
    const seatInfoContainer = document.getElementById('seat-info-container');
        
        const div= document.createElement("div");
        div.classList.add('info-div')
        
        const head1 =document.createElement("h2");
        head1.classList.add('info');
        head1.innerText= seatName;

        const head2 =document.createElement("h2");
        head2.classList.add('info');
        head2.innerText='Economy';

        const head3 =document.createElement("h2");
        head2.classList.add('info');
        head3.innerText= price;

        div.appendChild(head1);
        div.appendChild(head2);
        div.appendChild(head3);

        seatInfoContainer.appendChild(div);

    // total 

    const totalCost = document.getElementById('total-cost');
    const convertedTotalCost =parseInt(totalCost.innerText);

    totalCost.innerText= convertedTotalCost+price;

    // grand totral

    const GrandTotalCost = document.getElementById('grand-total');
    const convertedGrandTotal =parseInt(GrandTotalCost.innerText);
    GrandTotalCost.innerText= convertedGrandTotal+price;

    
   })
};

// function Cost(id, value){
//     const totalCost =document.getElementById(id);
//     convertedTotalCost = parseInt(totalCost.innerText);

//     totalCost.innerText= convertedTotalCost + value;
// }

document.getElementById('coupon-code').addEventListener('keyup', function(event){
    const text= event.target.value;

    

    const GrandTotalCost = document.getElementById('grand-total');
    const convertedGrandTotal =parseInt(GrandTotalCost.innerText);
    const sum = convertedGrandTotal+price;
    GrandTotalCost.innerText =sum;

    document.getElementById('send').addEventListener('click', function(){
        const activeCoupon = document.getElementById('send');
        if(text === 'NEW15'){
            GrandTotalCost.innerText =sum * 0.15;
            activeCoupon.removeAttribute('disabled');
        }
        else if(text === 'Couple 20'){
            GrandTotalCost.innerText =sum * 0.2 ;
            activeCoupon.removeAttribute('disabled');
        }
        else{
            activeCoupon.setAttribute('disabled', true);

        }
    })

    
})

