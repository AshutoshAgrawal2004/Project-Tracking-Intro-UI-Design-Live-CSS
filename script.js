var speed = 500;

var style = `
body{font-size:18px;\nfont-family:Barlow,sans-serif}
.cta,.nav-item,h1,h6{font-family:'Barlow Condensed',sans-serif}
nav{margin:5% auto 15%}
.navbar-light .navbar-nav .nav-link{color:#242941;\nfont-weight:700;\ntext-align:center;\ntext-transform:uppercase}
.nav-items-list{background-color:#fff}
#toggle-navbar{outline:0;\nborder:none;\ncolor:#242941}
.container-fluid{padding:5% 7% 15%}
.splash{background:#ebeff3;\nborder-bottom-left-radius:50%;\nheight:50vh;\nwidth:50vw;\nposition:absolute;\nright:0;\ntop:0}
.main{order:2}
.image{order:1}
.img-container{width:100vw;\nposition:relative;\nleft:50%;\nmargin-left:-50vw;\nmargin-bottom:50px}
.devices{width:100%}
@media (min-width:1000px){.img-container{width:50vw;\nposition:static;\nmargin:0}
.nav-items-list{background-color:rgba(0, 0, 0, 0);}
nav{margin:0 0 10%}
.main,.order{order:1}}
h6{display:inline;\ncolor:#9fa1ab;\nletter-spacing:5px}
.main-head{font-weight:700;\ncolor:#242941;\nline-height:.9}
.desc{color:#5a5e71}
.cta{background-color:#ff5b5b;\ncolor:#fff}
.cta:hover{color:#fff;\nbackground-color:#c94e4e}
footer{margin-top:50px;\ntext-align:center}
.attribution{font-size:11px}
.attribution a{color:#9fa1ab;\ntext-decoration:underline}
`;
var rules = style.split('\n');
var stylebox;
$(document).ready(function () {
  stylebox = $("body style");
  alert("Styling Started\nYou can edit Speed(milliseconds per character) on js 1st line");
  setTimeout(() => alert("Styling Finished"), rules.length * speed);
  for (var i = 0; i < rules.length; i++) {
    setTimeout(addStyle, i * speed, i);
  }
})

function addStyle(i) {
  stylebox.append(rules[i]);
}