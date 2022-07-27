(function () {
    var hotel = {
        name: 'Park',
        roomRate : 240,
        discount: 15,
        offerPrice: function () {
            var offerRate = this.roomRate*((100-this.discount)/100);
            return offerRate;
        }
    };
    var hotelName, roomRate,specialRate;

    hotelName=document.getElementById('hotelName');
    roomRate=document.getElementById('roomRate');
    specialRate=document.getElementById('specialRate');

    hotelName.textContent=hotelname;
    roomRate.textContent='$'+hotel.roomRate.toFixed('2');
    specialRate.textContent='$'+hotel.offerPrice();

    var expiryMsg;
    var today;
    var elEnds;

    function offerExpires(today) {
        var weekFromToday,day,date,month,year,dayName,monthNames;
        dayName=['Sunday','Monday','Tuesday','Wednesday','Thursday','Firday','Satuday'];
        monthNames=['January','February','March','April','May','June','July','August','September','October','December'];
        day = dayName[weekFromToday.getDay()]   ;
        date = weekFromToday.getDate();
        month=monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();



        expiryMsg = 'Offer exxpries next';
        expiryMsg += day + '<br />('+date+' '+month+' '+year+')';
        return expiryMsg;
    }
    today=new Date();
    elEnds=document.getElementById('offerEnds');
    elEnds.innerHTML= offerExpires(today);
}());
