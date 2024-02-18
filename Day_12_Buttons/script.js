var text=document.querySelector("input")
function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
  }
btn2.addEventListener("click",async()=>{
    try {
        const text1 = await navigator.clipboard.readText()
        text.value = text1;
        console.log('Text pasted.');
      } catch (error) {
        console.log('Failed to read clipboard');
      }
})