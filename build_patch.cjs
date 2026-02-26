import * as fs from 'fs';

const products = JSON.parse(fs.readFileSync('product_analysis.json', 'utf8'));

let tsOutput = 'export const PRODUCTS: Product[] = [\n';

products.forEach((p, idx) => {
    const id = 'prod-' + (idx + 1);
    tsOutput += '  {\n';
    tsOutput += '    id: \'' + id + '\',\n';
    tsOutput += '    name: \'' + p.name.replace(/'/g, "\\'") + '\',\n';
    tsOutput += '    brand: \'' + p.name.split(' ')[0].replace(/'/g, "\\'") + '\',\n';

    // Map categories exactly to enums
    let categoryEnum = '';
    switch (p.category) {
        case 'Whey Protein': categoryEnum = 'Category.WHEY_PROTEIN'; break;
        case 'Whey Isolate': categoryEnum = 'Category.WHEY_ISOLATE'; break;
        case 'Mass Gainers': categoryEnum = 'Category.MASS_GAINER'; break;
        case 'Pre-workout': categoryEnum = 'Category.PRE_WORKOUT'; break;
        case 'Fat Burners': categoryEnum = 'Category.FAT_BURNER'; break;
        case 'BCAA-EAA': categoryEnum = 'Category.BCAA_EAA'; break;
        case 'Creatine': categoryEnum = 'Category.CREATINE'; break;
        case 'L-Carnitine': categoryEnum = 'Category.L_CARNITINE'; break;
        default: categoryEnum = '\'' + p.category + '\' as Category'; break;
    }

    tsOutput += '    category: ' + categoryEnum + ',\n';
    tsOutput += '    price: ' + p.selling + ',\n';
    tsOutput += '    mrp: ' + p.mrp + ',\n';
    tsOutput += '    discount: ' + p.discount + ',\n';

    if (p.images && p.images.length > 0) {
        tsOutput += '    image: img(\'' + p.images[0].replace(/'/g, "\\'") + '\'),\n';
        tsOutput += '    images: [\n';
        p.images.forEach(img => {
            tsOutput += '      img(\'' + img.replace(/'/g, "\\'") + '\'),\n';
        });
        tsOutput += '    ],\n';
    } else {
        tsOutput += '    image: \'\',\n';
    }

    tsOutput += '    description: \'Premium ' + p.category.toLowerCase() + ' supplement for optimal results.\',\n';
    tsOutput += '    isTrending: ' + (idx % 3 === 0 ? 'true' : 'false') + ',\n';

    if (p.flavours && p.flavours.length > 0) {
        tsOutput += '    flavours: [\n';
        p.flavours.forEach(flav => {
            tsOutput += '      { name: \'' + flav.name.replace(/'/g, "\\'") + '\', image: img(\'' + flav.image.replace(/'/g, "\\'") + '\') },\n';
        });
        tsOutput += '    ],\n';
    }

    tsOutput += '  },\n';
});

tsOutput += '];\n';

let dataTs = fs.readFileSync('data.ts', 'utf8');

// replace only the PRODUCTS export up to FEATURES
const productsStart = dataTs.indexOf('export const PRODUCTS: Product[] = [');
const productsEnd = dataTs.indexOf('// ============================================================\n// FEATURES\n// ============================================================');

if (productsStart !== -1 && productsEnd !== -1) {
    const newContent = dataTs.substring(0, productsStart) + tsOutput + '\n' + dataTs.substring(productsEnd);
    fs.writeFileSync('data.ts', newContent);
    console.log('PRODUCTS securely replaced without losing constants.');
} else {
    console.log('Could not find bounds for replacement.');
}
