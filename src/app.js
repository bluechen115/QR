import _ from 'lodash';
import QrCodeWithLogo from 'qrcode-with-logos'

// QR Code
let qrcodeConfg = {
  // canvas: document.getElementById("canvas"),
  content: 'https://google.com',
  width: 380,
  //   download: true,
  image: document.getElementById('image'),
  logo: {    
    //src: 'public/image/puppy_01.png',    
    src: 'puppy_01.png',
    bgColor: 'transparent',
    borderRadius: 5,    
  },
  dotsOptions: {
    //type: 'stripe-column', //'dot' | 'dot-small' | 'tile' | 'rounded' | 'square' | 'diamond' | 'star' | 'fluid' | 'fluid-line' | 'stripe' | 'stripe-row' | 'stripe-column'
    color: '#000000'
  },
  cornersOptions: {
    type : 'square', //'square' | 'rounded' | 'circle' | 'rounded-circle' | 'circle-rounded' | 'circle-star' | 'circle-diamond'
    color : '#000000'
        // radius?: number | {
        //     inner: number;
        //     outer: number;
        // };
  }
};

let qrcode = null;
let createQrCodeWithLogo = () => {
  qrcode = new QrCodeWithLogo(qrcodeConfg);
}
createQrCodeWithLogo();

//HTML Input Setting
let urlInput = document.getElementById('urlInput');
let dotsColor = document.getElementById('dotsColor');
let cornerColor = document.getElementById('cornerColor');
let downloadButton = document.getElementById('downloadButton');
let dotsType = document.getElementById('dotsType');
let cornerType = document.getElementById('cornerType');
let logoImage = document.getElementById('logoImage');
let logoBgColor = document.getElementById('logoBgColor');
let logoRadius = document.getElementById('logoRadius');

urlInput.addEventListener('change', (event)=>{  
  if(event.target.value){
    qrcodeConfg.content = event.target.value;
    createQrCodeWithLogo();
  }
})

dotsColor.addEventListener('input', (event)=>{  
  qrcodeConfg.dotsOptions.color = event.target.value;
  createQrCodeWithLogo();
});

cornerColor.addEventListener('input', (event)=>{
  qrcodeConfg.cornersOptions.color = event.target.value;
  createQrCodeWithLogo();
});

downloadButton.addEventListener('click', (event)=>{
  qrcode.downloadImage('qrcode.png')
});

dotsType.addEventListener('change', (event)=>{  
  qrcodeConfg.dotsOptions.type = event.target.value;
  createQrCodeWithLogo();
});

cornerType.addEventListener('change', (event)=>{  
  qrcodeConfg.cornersOptions.type = event.target.value;
  createQrCodeWithLogo();
});

logoImage.addEventListener('change', (event)=>{  
  //var sSrc = `public/image/${event.target.value}`;
  var sSrc = event.target.value;
  qrcodeConfg.logo.src = sSrc;
  createQrCodeWithLogo();
});

logoBgColor.addEventListener('input', (event)=>{
  var sBgColor = event.target.value;
  if(sBgColor=='#ffffff') {
    sBgColor = 'transparent';
  }
  qrcodeConfg.logo.bgColor = sBgColor;
  createQrCodeWithLogo();
});

logoRadius.addEventListener('change', (event)=>{
  qrcodeConfg.logo.borderRadius = event.target.value;
  createQrCodeWithLogo();
});

//qrcode.downloadImage('qrcode.png')

// function component() {
//   const element = document.createElement('div');
//   element.innerHTML = _.join(['Hello', 'Moon'], ' ');
//   return element;
// }

// document.body.appendChild(component());
