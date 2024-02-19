const allBtn=document.querySelectorAll('#seat');
let count=1;
for(const seat of allBtn){
    seat.addEventListener('click',function(event){
        
        const btnInnerText=event.target.innerText;
        const bookingSeat=document.getElementById('booking-seat');
        
        
        if(count>4){
            alert('You Select Only 4 Seats');
            return
        }
        
        bookingSeat.innerText=count;
        count++;
        const totalSeatById=document.getElementById('total-seat');
        const currentSeat=parseInt(totalSeatById.innerText);
        const updateSeat=currentSeat-1;
        totalSeatById.innerText=updateSeat;
        // current seat end
        // seat price start
        const seatPriceById=document.getElementById('seat-price');
        const li=document.createElement('li');
        const td=document.createElement('td');
        td.innerText=btnInnerText;
        const td2=document.createElement('td');
        td2.innerText='Economoy';
        const td3=document.createElement('td');
        td3.innerText=550;
        li.appendChild(td);
        li.appendChild(td2);
        li.appendChild(td3);
        seatPriceById.appendChild(li);
        const totalPrice=document.getElementById('total-price');
        const total=count*550;
        totalPrice.innerText=total;
        
        // const grandTotal=document.getElementById('grand-total');
        // grandTotal.innerText=total;
       

//   Grand Total
    const couponBtn=document.getElementById('apply-coupon');
    const granTotalById=document.getElementById('grand-total');

    const inputField=document.getElementById('input-field');

    inputField.addEventListener('keyup',function(event){

        const couponBtn=document.getElementById('apply-coupon');
        couponBtn.removeAttribute('disabled');

            couponBtn.addEventListener('click',function(){
            const couponCode=inputField.value.split(' ').join('').toUpperCase();
            if(couponCode==='NEW15'){
                const discount=total*0.15;
                granTotalById.innerText=total-discount;
                
            }
            else if(couponCode==='COUPLE20'){
                const discount=total*0.20;
                granTotalById.innerText=total-discount; 
            }
            else{
                console.log('invalid');
            }

        });
    });
    
const numberInputField=document.getElementById('number-input');
numberInputField.addEventListener('keyup',function(event){
    const text=event.target.value;
    const length=text.length;
    const nextBtn=document.getElementById('next-btn');
    if(length>0){
        nextBtn.removeAttribute('disabled');
    }
   
    
});

event.target.setAttribute('disabled','');
event.target.style.background='green';
event.target.style.color='white';
grandTotal('grand-total',total);     
});

   
}

function grandTotal(elementId, value){
    const totalCostByid=document.getElementById(elementId);
    const totalCost=parseInt(totalCostByid.innerText);
    const total=value;
    totalCostByid.innerText=total;
    console.log(totalCostByid);
  }