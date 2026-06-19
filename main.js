var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

var slidesCount = sliderImages.length;

var currentSlide = 1;

var slideNumberEl = document.getElementById('slide-number');

var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('prev');

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

var paginationEl = document.createElement('ul');

paginationEl.setAttribute('id','pagination-ul');

for(var i=1; i<= slidesCount; i++){
  var  liItems = document.createElement('li');

  liItems.setAttribute('data-index',i)

  liItems.appendChild(document.createTextNode(i))


paginationEl.appendChild(liItems);
}

document.getElementById('indecators').appendChild(paginationEl);

var paginationCreateUl = document.getElementById('pagination-ul');

var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for (var i = 0; i< paginationsBullets.length;i++){
    paginationsBullets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChicker();
    }
}


theChicker();



function nextSlide(){
    if(nextBtn.classList.contains('disabled')){
        return false;
    }else{
        currentSlide++;
        theChicker();
    }
}
function prevSlide(){
    if(prevBtn.classList.contains('disabled')){
        return false;
    }else{
        currentSlide--;
        theChicker();
    }
}

function theChicker(){
    slideNumberEl.textContent = 'slide # ' + (currentSlide) + ' of ' + (slidesCount);

    removeAllActives();

    sliderImages[currentSlide - 1].classList.add('active');

    paginationCreateUl.children[currentSlide - 1].classList.add('active');

    if(currentSlide == 1){
        prevBtn.classList.add('disabled');
    }else{
        prevBtn.classList.remove('disabled');
    }
    if(currentSlide == slidesCount){
        nextBtn.classList.add('disabled');
    }else{
        nextBtn.classList.remove('disabled');
    }


}

function removeAllActives(){
    sliderImages.forEach(function(img){
    img.classList.remove('active')
    })

    paginationsBullets.forEach(function(bullet){
   bullet.classList.remove('active')
    })
}