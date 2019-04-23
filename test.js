

var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1920px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        xxlg: {
            width: '1440px'
        },
        xlg: {
            width: '1366px'
        },
        lg: {
            width: '1280px', /* -> @media (max-width: 1100px) */
        },
        xmd: {
            width: '1024px'
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '768px'
            /*fields: '15px' /* set fields only if you want to change container.fields */
        },
        xsm: {
            width:'560px'

        },
        xxs: {
            width: '425px'
        },
        xs: {
            width: '375px'
        },
        ms: {
            width: '320px'
        }
        /* 
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};

smartgrid('./app/less', settings);