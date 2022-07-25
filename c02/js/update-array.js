//tao mang va gan gia tri cho mang//
var colors = ['white', 'black', 'custom'];

// cap nhat them mau cho mang//
colors[2] = 'beige';

//Goi ra phan tu trong mang voi id mau//
var el = document.getElementById( 'colors');

// Thay the phan tu bang phan tu thuw 3 trong mang//
el.textContent = colors[2];
