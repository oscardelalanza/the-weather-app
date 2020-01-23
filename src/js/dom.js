const openSearchBtn = document.getElementById('openSearchBtn');

const toggleSearchBar = () => {

    openSearchBtn.addEventListener('click',  () => {
        document.getElementsByClassName('form-container')[0].classList.toggle('show');
    });
};

export {
    toggleSearchBar
}