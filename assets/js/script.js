let image = document.querySelector('.image');
let mybtn= document.querySelector('.mybtn');
let txtbox = document.querySelector(`.txtbox`) ;

mybtn.addEventListener('click', function()
{
    let txt = txtbox.value ;
    image.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${txt}`;
    txtbox.value = '';
});