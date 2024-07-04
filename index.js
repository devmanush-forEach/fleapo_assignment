const carouselContainer = document.getElementById('carousel_container');
const carouselItemContainer = document.getElementById('carousel_item_container');
const carouselItem = document.getElementsByClassName('carousel_item');
const carouselPrev = document.getElementById('carouselPrevBtn');
const carouselNext = document.getElementById('carouselNextBtn');
let activeCarouselItem = 1;

const carouselContainerWidth = carouselContainer?.clientWidth;
const carouselItemWidth = carouselItem[1]?.clientWidth;
const remainingwidth = parseInt((carouselContainerWidth - carouselItemWidth) / 2);
let toMove = carouselItemWidth - remainingwidth;

(() => {
    carouselItemContainer.style.left = `-${toMove}px`
})();

carouselPrev.addEventListener('click', handleCarouselNav);
carouselNext.addEventListener('click', handleCarouselNav);

function handleCarouselNav(e) {
    const classes = e.target.className;
    if (classes.includes('left')) {
        if (activeCarouselItem > 0) {
            activeCarouselItem -= 1
            toMove = toMove - carouselItemWidth;
            carouselItemContainer.style.left = `${toMove > 0 ? '-' : ''}${Math.abs(toMove)}px`
        }

    } else {
        if (activeCarouselItem < carouselItem.length - 1) {
            activeCarouselItem += 1
            toMove = toMove + carouselItemWidth;
            carouselItemContainer.style.left = `-${Math.abs(toMove)}px`

        }
    }
    if (activeCarouselItem == 0) {
        carouselPrev.style.cursor = 'not-allowed'
        carouselNext.style.cursor = 'pointer';
        carouselNext.style.cursor = 'pointer';
    } else if (activeCarouselItem == carouselItem.length - 1) {
        carouselNext.style.cursor = 'not-allowed';
        carouselPrev.style.cursor = 'pointer'
    } else {
        carouselNext.style.cursor = 'pointer';
        carouselPrev.style.cursor = 'pointer'
    }
}


// ACCORDIAN LOGIC

const accordianTriggers = document.getElementsByClassName('accordian_trigger_btn');
let activeAccordian = 0;

for (let i = 0; i < accordianTriggers.length; i++) {
    accordianTriggers[i].addEventListener('click', (e) => { return handleAccordianOpen(e, i) });
}


function handleAccordianOpen(e, index) {
    const mainDrawer = document.getElementById(`${index}_acrdn_drawer`);
    const image = e.target.children[0];
    if (activeAccordian == index) {
        image.src = 'assets/images/plus.png';
        mainDrawer.style.display = 'none'
        activeAccordian = -1;
        return;
    }

    for (let i = 0; i < accordianTriggers.length; i++) {
        let element = accordianTriggers[i];
        const drawer = document.getElementById(`${i}_acrdn_drawer`);
        const image = element.children[0];
        if (i == index && index != activeAccordian) {
            drawer.style.display = 'block';
            activeAccordian = index;
            image.src = 'assets/images/minus.png';
        } else {
            drawer.style.display = 'none';
            image.src = 'assets/images/plus.png';
        }
    }

}


// MOBILE NAV LOGIC

const trigger = document.getElementById('mobileNavTrigger');
const mobileNav = document.getElementById('mobile_nav_container');
let flag = false;

trigger.addEventListener('click', () => {

    if (!flag) {
        mobileNav.style.display = 'block';
        flag = true;
    } else {
        mobileNav.style.display = 'none';
        flag = false;
    }

})
