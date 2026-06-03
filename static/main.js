// ============================================
// ACADEMIC BRUTALIST INTERACTIVITY
// ============================================

(function() {
 'use strict';

 // Brutalist cursor dot effect
 const cursorDot = document.createElement('div');
 cursorDot.className = 'cursor-dot';
 document.body.appendChild(cursorDot);

 document.addEventListener('mousemove', (e) => {
 cursorDot.style.left = e.clientX + 'px';
 cursorDot.style.top = e.clientY + 'px';
 });

 // Brutalist grid item interactions
 document.addEventListener('DOMContentLoaded', function() {
 const gridItems = document.querySelectorAll('.grid-item');

 // Academic clicking effect
 gridItems.forEach(item => {
 item.addEventListener('click', function() {
 // Brutalist highlight on click
 const existingHighlight = this.querySelector('.brutalist-highlight');
 if (existingHighlight) existingHighlight.remove();

 const highlight = document.createElement('div');
 highlight.className = 'brutalist-highlight';
 highlight.style.position = 'absolute';
 highlight.style.inset = '0';
 highlight.style.background = 'rgba(196, 69, 54, 0.05)';
 highlight.style.pointerEvents = 'none';
 highlight.style.animation = 'highlightFade 0.6s ease-out';
 this.appendChild(highlight);

 setTimeout(() => highlight.remove(), 600);
 });
 });

 // Brutalist image upload handlers
 document.querySelectorAll('.img-placeholder input[type="file"]').forEach(input => {
 input.addEventListener('change', function(e) {
 const file = e.target.files[0];
 if (file) {
 const reader = new FileReader();
 reader.onload = function(ev) {
 const placeholder = input.closest('.img-placeholder');
 let img = placeholder.querySelector('img');

 if (!img) {
 img = document.createElement('img');
 placeholder.appendChild(img);
 }

 img.src = ev.target.result;

 // Add brutalist Polaroid border
 placeholder.style.backgroundColor = '#ffffff';
 placeholder.style.border = '2px dashed #4a4a4a';
 };
 reader.readAsDataURL(file);
 }
 });
 });
})();