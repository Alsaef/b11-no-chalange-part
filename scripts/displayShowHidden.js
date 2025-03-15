document.getElementById('getShow').addEventListener('click',function() {
    const inputPass=document.getElementById('inputPass').value;
    console.log(inputPass);
  if (inputPass==='123456') {
    document.getElementById('hedar').classList.remove('hidden')
    document.getElementById('learn').classList.remove('hidden')
    document.getElementById('faq').classList.remove('hidden')
    document.getElementById('banner').classList.add('hidden')

    // aleart

    Swal.fire({
        title: "অভিনন্দন!",
        text: "এগিয়ে যান!",
        icon: "success"
      });
  }else{
    alert('worng password')
  }
})


const hiddenLogout=()=>{
    document.getElementById('hedar').classList.add('hidden')
    document.getElementById('learn').classList.add('hidden')
    document.getElementById('faq').classList.add('hidden')
    document.getElementById('banner').classList.remove('hidden')
}