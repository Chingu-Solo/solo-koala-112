var favoriteFonts = [
    {
        fontName: 'Roboto',
        fontCreator: 'Christian Robertson',
    },
    {
        fontName: 'Gayathri',
        fontCreator: 'SMC',
    },
    {
        fontName: 'Chilanka',
        fontCreator: 'SMC',
    },
    {
        fontName: 'Open Sans',
        fontCreator: 'Steve Matteson',
    },
    {
        fontName: 'Lato',
        fontCreator: 'Lukas Dziedzic',
    },
    {
        fontName: 'Manjari',
        fontCreator: 'Santhosh Thottingal',
    },
    {
        fontName: 'Montserrat',
        fontCreator: 'Julieta Ulanovsky',
    },
    {
        fontName: 'Roboto Condensed',    
        fontCreator: 'Christain Robertson'
    },

]

var sampleText = 'Then came the night of the first falling star.';
console.log(favoriteFonts);

for(i=0;i<favoriteFonts.length;i++){
    var el = document.getElementsByClassName('main-section').innerHtml=`<div>favoriteFonts[i].fontName</div>`;
}