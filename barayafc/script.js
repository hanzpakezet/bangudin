function nextSlide(id){
  let carousel=document.getElementById(id);
  let items=carousel.getElementsByClassName('carousel-item');
  let index=[...items].findIndex(i=>i.classList.contains('active'));
  items[index].classList.remove('active');
  let next=(index+1)%items.length;
  items[next].classList.add('active');
}
function prevSlide(id){
  let carousel=document.getElementById(id);
  let items=carousel.getElementsByClassName('carousel-item');
  let index=[...items].findIndex(i=>i.classList.contains('active'));
  items[index].classList.remove('active');
  let prev=(index-1+items.length)%items.length;
  items[prev].classList.add('active');
}