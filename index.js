const hoverZoneLeft = document.getElementById('hover-zone-left');
const sidebarLeft = document.getElementById('sidebar-left');
const hoverZoneRight = document.getElementById('hover-zone-right');
const sidebarRight = document.getElementById('sidebar-right');

let isHoveringSidebarLeft = false;
let isHoveringSidebarRight = false;

// Left sidebar
hoverZoneLeft.addEventListener('mouseenter', () => {
  sidebarLeft.classList.add('active');
});

sidebarLeft.addEventListener('mouseenter', () => {
  isHoveringSidebarLeft = true;
});

sidebarLeft.addEventListener('mouseleave', () => {
  isHoveringSidebarLeft = false;
  sidebarLeft.classList.remove('active');
});

hoverZoneLeft.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!isHoveringSidebarLeft) {
      sidebarLeft.classList.remove('active');
    }
  }, 200);
});

// Right sidebar
hoverZoneRight.addEventListener('mouseenter', () => {
  sidebarRight.classList.add('active');
});

sidebarRight.addEventListener('mouseenter', () => {
  isHoveringSidebarRight = true;
});

sidebarRight.addEventListener('mouseleave', () => {
  isHoveringSidebarRight = false;
  sidebarRight.classList.remove('active');
});

hoverZoneRight.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!isHoveringSidebarRight) {
      sidebarRight.classList.remove('active');
    }
  }, 200);
});
