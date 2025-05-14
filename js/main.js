import homePage from '../pages/home.js';
import dancePage from '../pages/dance.js';
import selfPage from '../pages/self.js';
import readingPage from '../pages/reading.js';
import travelPage from '../pages/travel.js';
import project1Page from '../pages/project1.js';

// Pages object with imported content
const pages = {
    home: homePage,
    dance: dancePage,
    reading: readingPage,
    travel: travelPage,
    project1: project1Page,
    self: selfPage,
};

// Page order for navigation
const pageOrder = ['home', 'dance', 'reading', 'travel', 'project1', 'self',];

// Current page tracking
let currentPageIndex = 0;
const totalPages = pageOrder.length;

// Load page content
function loadPage(pageName) {
    const contentElement = document.getElementById('content');
    const pageContainer = document.getElementById('pageContainer');
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');

    // Apply transition
    pageContainer.classList.add('page-transition');

    setTimeout(() => {
        contentElement.innerHTML = pages[pageName];
        currentPageIndex = pageOrder.indexOf(pageName);
        prevButton.style.display = currentPageIndex === 0 ? 'none' : 'inline-block';
        nextButton.style.display = currentPageIndex === totalPages - 1 ? 'none' : 'inline-block';

        // Remove transition
        pageContainer.classList.remove('page-transition');
    }, 300);
}

// Initialize with home page
document.addEventListener('DOMContentLoaded', () => {
    loadPage('home');

    // Navigation event listeners
    document.getElementById('prevPage').addEventListener('click', function (e) {
        e.preventDefault();
        if (currentPageIndex > 0) {
            loadPage(pageOrder[currentPageIndex - 1]);
        }
    });

    document.getElementById('nextPage').addEventListener('click', function (e) {
        e.preventDefault();
        if (currentPageIndex < pageOrder.length - 1) {
            loadPage(pageOrder[currentPageIndex + 1]);
        }
    });

    // Add listeners for TOC links
    document.querySelectorAll('.toc a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const pageName = this.getAttribute('href').substring(1);
            loadPage(pageName);
        });
    });

    // Home link
    document.querySelector('.nav-left a[href="#home"]').addEventListener('click', function (e) {
        e.preventDefault();
        loadPage('home');
    });
});

// Export for potential use in other modules
export { pages, pageOrder, loadPage };