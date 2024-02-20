const seats= document.getElementsByClassName('seats');

let count= 0;
const price =550 ;
for(const seat of seats){
    seat.addEventListener("click", function(event){
    // add background
    
    
    // add/minus seat count 
    
    if(count < 4){
        if (!seat.classList.contains('selected')) {
            seat.classList.add('selected');
            seat.classList.add('bg-lime-500');
            count= count+1;
            
          } 
          else {
            alert('This seat is already booked!');
            return;
          }
    
    document.getElementById('count').innerText= count;
    document.getElementById('seat-left').innerText= 40-count;
    }
    else{
        alert("maximum 4 seats allowed")
        return;
    }


    
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

    totalCost('total-cost', price);

    // grand totral

    grandTotalCost('grand-total', price)

    
   })
};

function totalCost (id, value){
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost =parseInt(totalCost);
    const sum = convertedTotalCost+value;
    setInnerText(id , sum);
}
function grandTotalCost (){
    const totalCost = document.getElementById('total-cost').innerText;
    const convertedTotalCost =parseInt(totalCost);
    setInnerText('grand-total', convertedTotalCost);
    

    const inputField =document.getElementById('coupon-code');
    const inputText= inputField.value;

    const couponField =document.getElementById('coupon-field');

    
    if(inputText === 'NEW15'){
        const sum2 = convertedTotalCost - convertedTotalCost*0.15 ;
        
        setInnerText('grand-total', sum2);
        couponField.classList.add('hidden');
    }
    else if(inputText === 'Couple 20'){
        const sum2 = convertedTotalCost - convertedTotalCost*0.2 ;
        
        setInnerText('grand-total', sum2);
        couponField.classList.add('hidden');
    }

}

function setInnerText(id, value){
   document.getElementById(id).innerText =value 
}


document.getElementById('coupon-code').addEventListener('keyup', function(event){
    const text = event.target.value;
    
    
    const button =document.getElementById('send');
    
    if(text === 'NEW15' || text === 'Couple 20'){
        button.removeAttribute('disabled');
    }
    else{
        button.setAttribute('disabled', true);
    }
})

// document.getElementById('coupon-code').addEventListener('keyup', function(event){
//     const text= event.target.value;document.getElementById('send').addEventListener('click', function(){
//         const activeCoupon = document.getElementById('send');
//         if(text === 'NEW15' || text === 'Couple 20'){
//            activeCoupon.removeAttribute('disabled');
//         }
        
//         else{
//             activeCoupon.setAttribute('disabled', true);
//              }
//     })
// })
