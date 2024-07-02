var arr = [
    {dp:"https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-wolfs-full-hd-wallpaper-art-wallpaper-1920x1080-1080p-image_2571308.jpg",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgAlg9C911f-y3vkv2nlHuyEDeUy-8DtjDtg&usqp=CAU"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7W7avqjG8FQ33rDXir5QxHVmBHLe3WDNcyA&usqp=CAU",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS01cp00WktczvD6whTgEPh_8U-ZRxvjcQFiw&usqp=CAU"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Xnp5sqAeZx9FlQUlmKKQwXFj977Cx-9TIw&usqp=CAU",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY0zleOea6VKmxoPVe0PFhoXzPdJo_-Xe96A&usqp=CAU"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT02cfQ0NYXqM3imPpqIy0BhgpW8DNe6y7Bu9CyegeQR_-ylY3fbkaeQjVWulTf6M_apMc&usqp=CAU",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaDSuHUFkbbXQ9VotSn5buMZKkiCbcOa4SIQ&usqp=CAU"},
]

var storiyan = document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function(elem,idx){
    clutter += ` <div class="story">
    <img id="${idx}" src="${elem.dp}" alt="" />
  </div>`
})
storiyan.innerHTML = clutter
storiyan.addEventListener("click",function(dets){
    document.querySelector("#fullScreen").style.display = "block"
    document.querySelector("#fullScreen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#fullScreen").style.display = "none"
    },3000)
})