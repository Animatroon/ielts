document.addEventListener('DOMContentLoaded', function() { 
    const accordionIcon = document.querySelectorAll('.accordion-icon');
    const accordionContent = document.querySelectorAll('.accordion__content');
    const accordionText = document.querySelectorAll(".accordion__text");

    accordionContent.forEach((item, i) => {
            item.addEventListener("click", () => {
                accordionText[i].classList.toggle("text-active");
                if (accordionText[i].classList.contains("text-active")) {
                    accordionIcon[i].src = "/assets/img/accordion-icon-active.svg";
                    accordionIcon[i].style = "right: 58px; top: 67%";
                    item.style = "padding-bottom: 10px";
                } else {
                    accordionIcon[i].src = '/assets/img/accordion-icon.svg';
                    accordionIcon[i].style = "right: 40px; top: 50%";
                    item.style = "padding-bottom: 51px";

                }
        });
    });
});



